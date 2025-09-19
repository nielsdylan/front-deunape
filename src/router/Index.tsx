import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "../components/common/ScrollToTop";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Dashboard/Home";
import SignIn from "../pages/AuthPages/SignIn";
import NotFound from "../pages/OtherPage/NotFound";

function Index() {
    return ( 
        <>
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Auth Layout */}
                <Route path="/" element={<SignIn />} />
                {/* Dashboard Layout */}
                <Route element={<AppLayout />}>
                    <Route index path="/dashboard" element={<Home />} />
                </Route>
    
                
    
                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        </>
     );
}

export default Index;