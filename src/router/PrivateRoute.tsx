import { useEffect, useState } from "react";
import { Navigate, Outlet  } from "react-router";
// import { isAuthenticated } from "./Auth";
import { isAuthenticated } from '../services/isAuthenticated';

// interface PrivateRouteProps {
//   isAuth: boolean;
// }

function PrivateRoute() {
    const [loading, setLoading] = useState(true);
    const [authStatus, setAuthStatus] = useState(false);
    
    useEffect(() => {
        const checkAuth = async () => {
            const status = await isAuthenticated();
            setAuthStatus(status);
            setLoading(false);
        };

        checkAuth();
        
    }, []);

    if (loading) {
        // Muestra una pantalla de carga mientras se verifica la autenticación
        return <div>Cargando...</div>; 
    }
    
    return authStatus? <Outlet />: <Navigate to="/" />;
}

export default PrivateRoute;

