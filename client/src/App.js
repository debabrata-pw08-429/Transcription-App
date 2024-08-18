import Login from "./pages/LoginPage/Login.jsx";
import Register from "./pages/RegisterPage/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import AddPodcastPage from "./pages/AddPodcastPage/AddPodcastPage";
import CreateAndRepurposePage from "./pages/CreateAndRepurposePage/CreateAndRepurposePage";
import PodcastWidgetPage from "./pages/PodcastWidgetPage/PodcastWidgetPage";
import UpgradePage from "./pages/UpgradePage/UpgradePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:project">
          <Route path="add your podcast" element={<AddPodcastPage />} />
          <Route
            path="create and repurpose"
            element={<CreateAndRepurposePage />}
          />
          <Route path="podcast widget" element={<PodcastWidgetPage />} />
          <Route path="upgrade" element={<UpgradePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
