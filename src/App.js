import "./styles/main.css"

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import ContactsPage from "./pages/ContactsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
        <div className="App">
            <ScrollToTop/>
            <Navigation/>
            <Routes>
                <Route path="portfolio" element={<MainPage/>}/>
                <Route path="my-portfolio/projects" element={<ProjectsPage/>}/>
                <Route path="my-portfolio/projects/project-details/:id" element={<ProjectDetailsPage/>}/>
                <Route path="my-portfolio/contacts" element={<ContactsPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
