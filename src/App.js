import './App.scss';

import { Header } from './cmps/Header/Header'

import { Footer } from './cmps/Footer/Footer';
import { AudiopileApp } from './pages/AudiopileApp/AudiopileApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeadphoneCategoryPage } from './pages/HeadphoneCategoryPage/HeadphoneCategoryPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route component={HeadphoneCategoryPage} path="/headphones" />
          <Route component={AudiopileApp} path="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
