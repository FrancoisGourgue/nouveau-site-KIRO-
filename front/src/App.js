import logo from './logo.svg';
import {createRoot} from 'react-dom/client';
import './App.css';
import RegisterContainer from './containers/Register';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider} from './auth/AuthContext';
function HomePage() {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur notre site web !</p>
    </div>
  );
}
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/register" component={RegisterContainer} />
    </Router>
  );
};
/**<div className="App">
      <Router>
        <AuthProvider>
          <Route component={RegisterContainer} path="/register" />
        </AuthProvider>
      </Router>
    </div> */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
