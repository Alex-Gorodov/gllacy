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
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import '../../styles/style.sass'

export function App() {
  return (
    <HistoryRouter history={browserHistory} basename="/">
      <Provider store={store}>
        <Routes>
          <Route path={AppRoute.Root} element={<HomePage/>}/>
          <Route path={AppRoute.Catalog} element={<CatalogPage/>}>
            <Route path={AppRoute.CatalogCreamy} element={<CatalogPage/>}></Route>
            <Route path={AppRoute.CatalogSorbet} element={<CatalogPage/>}></Route>
          </Route>
          <Route path={AppRoute.Shipping} element={<ShippingPage/>}/>
          <Route path={AppRoute.About} element={<AboutPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Provider>
    </HistoryRouter>
  );
}
