import React from 'react';
import {createContext, useState, useEffect} from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ?
      JSON.parse(localStorage.getItem('authTokens')) :
      null,
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ?
      jwt_decode(localStorage.getItem('authTokens')) :
      null,
  );
    const [loading, setLoading] = useState(true);
    const history = useNavigate();

    const registerTeam = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/teacher/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: e.target.userName.value,
            password: e.target.password.value,
            teacher_profile: {
            first_name: e.target.firstName.value,
            last_name: e.target.lastName.value,
            gender: e.target.gender.value,
            },
        }),
        });
        if (response.status === 200) {
        history.push('/');
        return '';
        }
        if (response.status === 400) {
        return 'Ce nom d\'utilisateur existe déjà !';
        }
    };
}