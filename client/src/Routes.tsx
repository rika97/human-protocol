import {Navigate, Route, Routes} from "react-router-dom";
import {WelcomePage} from "./pages/welcome";
import {HomePage} from "./pages/home";
import {AppLayout} from "./components/layout";
import {FeedPage} from "./pages/feed";

export const AppRoutes = () => {
  return <Routes>
    <Route element={<AppLayout />}>
      {/*<Route path={'/'} element={<Navigate to={'/home'} />} />*/}
      <Route index path={''} element={<HomePage />} />
      <Route path={'welcome'} element={<WelcomePage />} />
      <Route path={'feed'} element={<FeedPage />} />
    </Route>
  </Routes>
}