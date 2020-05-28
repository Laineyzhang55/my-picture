import React, {lazy, Suspense} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  Switch,
  Route
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Upload = lazy(() => import('./pages/Upload'));


function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading!!</div>}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/upload' exact component={Upload} />
            <Route path='/about' component={About} />
            <Route path='/history' component={History} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </Suspense> 
      </main>
      <Footer />
    </>
  );
}

export default App;
