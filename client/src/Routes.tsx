import { Link, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/welcome";
import { HomePage } from "./pages/home";
import { AppLayout } from "./components/layout";
import { Messages } from "./pages/Messages";
import { UserPage } from "./pages/User";
import { CityPage } from "./pages/City";
import { TagPage } from "./pages/Tag";
import { UserWorldLocationsPage, WorldLocationsPage } from "./pages/WorldLocations";
import { FeedPage } from "./pages/feed";
import { LinkedInCallback } from "./oauth/linkedin/LinkedinCallback";
import { OpenIdCallback } from "./oauth/auth0/OpenIdCallback";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'welcome'} element={<WelcomePage />} />
      <Route element={<AppLayout />}>
        {/*<Route path={'/'} element={<Navigate to={'/home'} />} />*/}
        <Route path={'/feed'} element={<FeedPage />} />
        <Route path={'/auth'} element={<HomePage />} />

        <Route path="/messages" element={<Messages />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/city/:city" element={<CityPage />} />
        <Route path="/tag/:tag" element={<TagPage />} />
        <Route path="/world-locations" element={<WorldLocationsPage />} />
        <Route
          path="/:username/world-locations"
          element={<UserWorldLocationsPage />}
        />
        <Route path="/auth/linkedin-callback" element={<LinkedInCallback />} />
        <Route path="/auth/openid-callback" element={<OpenIdCallback />} />
      </Route>
    </Routes>
  );
}

//     <div className="App">
//       <nav style={{ padding: "10px" }}>
//         <Link to="/">
//           <img
//             src={logo}
//             alt="Home"
//             style={{ maxWidth: "100px", cursor: "pointer" }}
//           />
//         </Link>
//       </nav>
