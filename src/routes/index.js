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
            <Route path="/*" element={<Base />}/>
            <Route
            path="/"
            element={<Navigate to="/home" />}
            />
        </Routes>
      </BrowserRouter>
    )
}