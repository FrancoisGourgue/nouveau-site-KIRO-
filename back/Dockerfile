FROM python:3.9-bullseye as python-base

ENV PYTHONUNBUFFERED=1 \
    # prevents python creating .pyc files
    PYTHONDONTWRITEBYTECODE=1 \
    \
    # pip
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    \
    # poetry
    # https://python-poetry.org/docs/configuration/#using-environment-variables
    POETRY_VERSION=1.1.12 \
    # make poetry install to this location
    POETRY_HOME="/opt/poetry" \
    # make poetry create the virtual environment in the project's root
    # it gets named `.venv`
    POETRY_VIRTUALENVS_IN_PROJECT=true \
    # do not ask any interactive question
    POETRY_NO_INTERACTION=1 \
    \
    # paths
    # this is where our requirements + virtual environment will live
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/pysetup/.venv"

# prepend poetry and venv to path
ENV PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH"

FROM python-base as builder-base
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    # deps for installing poetry
    curl=7.74.0-1.3+deb11u7 \
    # deps for building python deps
    build-essential=12.9 \
    && rm -rf /var/lib/apt/lists/*

# precise shell to use with pipefail option to ensure the fail of build if something goes wrong
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
# install poetry - respects $POETRY_VERSION & $POETRY_HOME
RUN curl -sSL https://install.python-poetry.org | python

# copy project requirement files here to ensure they will be cached.
WORKDIR $PYSETUP_PATH

COPY pyproject.toml ./

# install runtime deps - uses $POETRY_VIRTUALENVS_IN_PROJECT internally
RUN poetry install --no-dev

# ======================== DEV ENVIRONMENT ========================
# `development` image is used during development / testing
FROM python-base as development
ENV FASTAPI_ENV=development
WORKDIR $PYSETUP_PATH

# copy in our built poetry + venv
COPY --from=builder-base $POETRY_HOME $POETRY_HOME
COPY --from=builder-base $PYSETUP_PATH $PYSETUP_PATH

# quicker install as runtime deps are already installed
RUN poetry install
WORKDIR /src

# installation of netcat to check if db is up
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    netcat=1.10-46 \
    redis=5:6.0.16-1+deb11u2 \
    && rm -rf /var/lib/apt/lists/*

COPY ./entrypoint-dev.sh /usr/local/bin/
RUN sed -i 's/\r$//g' /usr/local/bin/entrypoint-dev.sh \
    && chmod +x /usr/local/bin/entrypoint-dev.sh

ENTRYPOINT ["/usr/local/bin/entrypoint-dev.sh"]

# ======================== PROD ENVIRONMENT ========================
FROM python-base as production
ENV FASTAPI_ENV=production
WORKDIR $PYSETUP_PATH

# copy in our built poetry + venv
COPY --from=builder-base $POETRY_HOME $POETRY_HOME
COPY --from=builder-base $PYSETUP_PATH $PYSETUP_PATH

# quicker install as runtime deps are already installed
RUN poetry install
WORKDIR /src

COPY . .

# installation of netcat to check if db is up
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    netcat=1.10-46 \
    redis=5:6.0.16-1+deb11u2 \
    && rm -rf /var/lib/apt/lists/*

RUN sed -i 's/\r$//g' /src/entrypoint-prod.sh \
    && chmod +x /src/entrypoint-prod.sh

ENTRYPOINT ["/src/entrypoint-prod.sh"]