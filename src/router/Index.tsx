import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "../components/common/ScrollToTop";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Dashboard/Home";
import SignIn from "../pages/AuthPages/SignIn";
import NotFound from "../pages/OtherPage/NotFound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ConfigRoutes from "./ConfigRoute";
// import { isAuthenticated } from "./Auth"; 
function Index() {
    return (
        <>
        <Router>
            <ScrollToTop />
            <Routes>
                
                {/* Ruta pública para la autenticación, con redirección */}
                <Route path="/" element={<PublicRoute><SignIn /></PublicRoute>} />
                {/* <Route element={<PublicRoute  />} >
                    <Route path="/" element={<SignIn />} />
                </Route> */}
                {/* Dashboard Layout */}
                <Route element={<PrivateRoute  />} >
                    <Route path="/" element={<AppLayout />}>
                        <Route index path="/dashboard" element={<Home />} />
                        
                    </Route>
                    {/* Anidamos las rutas de configuración bajo el prefijo "/config" */}
                    <Route path="/configuraciones/*" element={<ConfigRoutes />} />
                </Route>

    
                
    
                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        </>
     );
}

export default Index;