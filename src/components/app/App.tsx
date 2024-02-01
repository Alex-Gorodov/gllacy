import { HistoryRouter } from "../history-route/history-route";
import browserHistory from '../../browser-history';
import { Provider } from "react-redux";
import { store } from "../../store";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { HomePage } from "../../pages/home-page/home";
import { CatalogPage } from "../../pages/catalog/catalog";
import { ShippingPage } from "../../pages/shipping/shipping";
import { AboutPage } from "../../pages/about/about";

export function App() {
  return (
    <HistoryRouter history={browserHistory} basename="/">
      <Provider store={store}>
        <Routes>
          <Route path={AppRoute.Root} element={<HomePage/>}/>
          <Route path={AppRoute.Catalog} element={<CatalogPage/>}/>
          <Route path={AppRoute.Shipping} element={<ShippingPage/>}/>
          <Route path={AppRoute.About} element={<AboutPage/>}/>
        </Routes>
      </Provider>
    </HistoryRouter>
  );
}
