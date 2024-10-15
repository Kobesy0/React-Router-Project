import {createBrowserRouter , createRoutesFromElements, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import RootLayout from "../pages/RootLayout";
import QuickStartPage from "../pages/Learn";
import LearnLayout from "../pages/Learn/Layout";
import ThinkingInReact from "../pages/Learn/ThinkingInReact";
import Installation from "../pages/Learn/Installation";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Contribute from "../pages/Contribute";
import LoginPage from "../pages/login";
import ErrorRouterHandler from "../components/error/ErrorHandler";
import PageNotFound from "../pages/Learn/PageNotFound";

const isLoggedIn = true;
const userData :{email:string} | null = isLoggedIn ? {email:"email@gmail.com"} : null

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path="/" element={
        <>
        <RootLayout/>   
        </> }
        errorElement={<ErrorRouterHandler statusCode={404} title="something is wrong!"/>}
        >
        <Route index element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contribute" element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
                <Contribute/>
            </ProtectedRoute>
        } 
        
        />
        <Route path="login" element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/contribute"  data={userData}> 
            <LoginPage/>
        </ProtectedRoute>} />
        </Route>


        <Route path="/learn" element={<LearnLayout/>} >
            <Route index element={<QuickStartPage/>}/>
            <Route path="/learn/thinking-in-react" element={<ThinkingInReact/>}/>
            <Route path="/learn/installation" element={<Installation/>}/>
        </Route>
        {/* Page not found */}
        <Route path="*" element={<PageNotFound/>} />
    </>
    )
);

export default router;