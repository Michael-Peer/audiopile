import './App.scss';

import { Header } from './cmps/Header/Header'

import { Footer } from './cmps/Footer/Footer';
import { AudiopileApp } from './pages/AudiopileApp/AudiopileApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeadphoneCategoryPage } from './pages/HeadphoneCategoryPage/HeadphoneCategoryPage';
import { SpeakersCategoryPage } from './pages/SpeakersCategoryPage/SpeakersCategoryPage';
import { EarphonesCategoryPage } from './pages/EarphonesCategoryPage/EarphonesCategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage/ProductDetailPage';
import { CartModal } from './cmps/CartModal/CartModal';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <CartModal/>
        <Switch>
          <Route component={HeadphoneCategoryPage} path="/headphones" />
          <Route component={SpeakersCategoryPage} path="/speakers" />
          <Route component={EarphonesCategoryPage} path="/earphones" />
          <Route component={ProductDetailPage} path="/detail" />
          <Route component={AudiopileApp} path="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
