import { Link, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/welcome";
import { HomePage } from "./pages/home";
import { AppLayout } from "./components/layout";
import { FeedPage } from "./pages/feed";
import AuthMiddleware from "./AuthMiddleware";
import { MessagePage } from "./pages/message";

export const AppRoutes = () => {
  return <Routes>
    <Route element={<AppLayout />}>
      {/*<Route path={'/'} element={<Navigate to={'/home'} />} />*/}
      {/* TODO: once logged in don't go to HomePage */}
      <Route index path={''} element={<HomePage />} />
      <Route element={<AuthMiddleware />}>
        <Route path={'welcome'} element={<WelcomePage />} />
        <Route path={'feed'} element={<FeedPage />} />
        <Route path={'message'} element={<MessagePage />} />
      </Route>
    </Route>
  </Routes>
}
