import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "@/Screens/Dashboard/Dashboard";
import TeamList from "@/Screens/TeamList/TeamList";
import NewTeam from "@/Screens/NewTeam/NewTeam";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="teams" element={<TeamList />} />
        <Route path="teams/:id" element={<NewTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
