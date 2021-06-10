import './App.scss';

import { Header } from './cmps/Header/Header'

import { Footer } from './cmps/Footer/Footer';
import { AudiopileApp } from './pages/AudiopileApp/AudiopileApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Route component={ProductDetailPage} path="/audipile/products/:id" />
          <Route component={CheckoutPage} path="/audipile/checkout" />
          <Route component={CategoetPage} path="/audipile/:category"/>
          <Route component={AudiopileApp} exact path="/audipile" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
