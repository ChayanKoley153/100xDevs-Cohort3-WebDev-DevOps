import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/neet" element={<Layout />}>
                        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} /> 
                        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} /> 
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


function Layout() {
    return (
        <div>
            <nav style={{height: "100vh", background: "yellow" }}>
                <Link to="/">Allen</Link> 
                |
                <Link to="/neet/online-coaching-class-11">Class 11</Link> 
                |
                <Link to="/neet/online-coaching-class-12">Class 12</Link>
            </nav>
            <div style={{height: "90vh", background: "red"}}>
                <Outlet />
            </div>
            <footer style={{ background: "yellow" }}>Footer | Contact Us</footer>
        </div>
    );
}


function ErrorPage() {
    return (
        <div>
            <h1>404 Page not found</h1>
        </div>
    );
}

function Landing() {
    return (
        <div>
            <h1>Welcome to Allen</h1>
        </div>
    );
}

function Class11Program() {
    return (
        <div>
            <h2>Neet Programs for Class 11th</h2>
        </div>
    );
}

function Class12Program() {
    const navigate = useNavigate();

    function redirectUser() {
        navigate("/"); 
    }

    return (
        <div>
            <h2>Neet Programs for Class 12th</h2>
            <button onClick={redirectUser}>Back to Landing Page</button>
        </div>
    );
}

export default App;