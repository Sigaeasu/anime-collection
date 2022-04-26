import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Base from "../components/Base";

export default function RouteList() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/anime-collection/*" element={<Base />}/>
            <Route
            path="/anime-collection/"
            element={<Navigate to="/anime-collection/home" />}
            />
        </Routes>
      </BrowserRouter>
    )
}