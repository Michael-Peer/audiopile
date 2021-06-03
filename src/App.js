import './App.scss';

import { Header } from './cmps/Header/Header'

import { Footer } from './cmps/Footer/Footer';
import { AudiopileApp } from './pages/AudiopileApp/AudiopileApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeadphoneCategoryPage } from './pages/HeadphoneCategoryPage/HeadphoneCategoryPage';
import { SpeakersCategoryPage } from './pages/SpeakersCategoryPage/SpeakersCategoryPage';
import { EarphonesCategoryPage } from './pages/EarphonesCategoryPage/EarphonesCategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage/ProductDetailPage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';
import { CategoetPage } from './pages/CategoetPage/CategoetPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* <Route component={HeadphoneCategoryPage} path="/headphones" />
          <Route component={SpeakersCategoryPage} path="/speakers" />
          <Route component={EarphonesCategoryPage} path="/earphones" /> */}
          <Route component={ProductDetailPage} path="/products/:id" />
          <Route component={CheckoutPage} path="/checkout" />
          <Route component={CategoetPage} path="/:category"/>
          <Route component={AudiopileApp} path="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
