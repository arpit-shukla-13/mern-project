import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { Route,Routes } from 'react-router-dom';
import AdminLogin from "./Pages/AdminLogin";
import AdminHome from "./Pages/AdminHome";
import PrivateRoutes from './Pages/PrivateRoutes';
import AddNotesAdmin from "./Pages/AddNotesAdmin";
import ReadNotesAdmin from "./Pages/ReadNotesAdmin";
import EditNotesAdmin from "./Pages/EditNotesAdmin";
import Signup from "./Pages/Signup";
import UserLogin from "./Pages/UserLogin";
import UserHome from "./Pages/UserHome";
import PrivateRoutes2 from "./Pages/PrivateRoutes2";
import ReadNotesUser from "./Pages/ReadNotesUser";
import Home from "./Pages/Home";
import AddNotesUser from "./Pages/AddNotesUser";
import MyNotes from "./Pages/MyNotes";
import EditNotesUser from "./Pages/EditNotesUser";
import EditUser from "./Pages/EditUser";
import Users from "./Pages/Users";



const App = () =>{
    return(
        <div>
            <Header />
            <Routes>
                <Route element={ <PrivateRoutes /> }>
                    <Route path="/adminhome" element={ <AdminHome /> } />
                    <Route path="/addnotes" element={ <AddNotesAdmin /> } />
                    <Route path="/readnotesadmin" element={ <ReadNotesAdmin /> } />
                    <Route path="/editnotesadmin/:key" element={ <EditNotesAdmin /> } />
                    <Route path="/users" element={ <Users /> } />
                </Route>

                <Route element={ <PrivateRoutes2 /> }>
                    <Route path="/userhome" element={ <UserHome /> } />
                    <Route path="/readnotesuser" element={ <ReadNotesUser /> } />
                    <Route path="/addnotesuser" element={ <AddNotesUser /> } />
                    <Route path="/editnotesuser/:key" element={ <EditNotesUser /> } />
                    <Route path="/mynotes" element={ <MyNotes /> } />
                    <Route path="/edituser" element={ <EditUser /> } />
                </Route>
                
                
                <Route path="/" element={ <Home /> } />
                <Route path="/signup" element={ <Signup /> } />
                <Route path="/adminlogin" element={ <AdminLogin /> } />
                <Route path="/userlogin" element={ <UserLogin /> } />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;