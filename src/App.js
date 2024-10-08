import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import 'remixicon/fonts/remixicon.css'
import Home from "./Components/Common/Home/Home";
import SignUp from "./Components/User/SignUp";
import Login from "./Components/User/Login";
import AdminLogin from "./Components/Admin/AdminLogin";
import Navbar from "./Components/Common/NavBar/Navbar";
import VolunteersSignup from "./Components/Volunteere/VolunteersSignup";
import Footer from "./Components/Common/Footer/Footer";
import FooterSecond from "./Components/Common/Footer/FooterSecond";
import VolunteersLogin from "./Components/Volunteere/VolunteersLogin";
import RescueTeamReg from "./Components/RescueTeam/RescueTeamReg";
import RescueTeamLogin from "./Components/RescueTeam/RescueTeamLogin";
import ForgotPassword from "./Components/Common/ForgotPassword/ForgotPassword";
import LandingPage from "./Components/Common/LandingPage/LandingPage";
import AdminMain from "./Components/Admin/AdminMain";
import Adminnav from "./Components/Common/NavBar/Adminnav";
import Viewalerts from "./Components/Admin/AdminDashboard/Viewalerts";
import ResetPassword from "./Components/Common/ForgotPassword/ResetPassword";
import Addalerts from "./Components/User/Alerts/Addalerts";
import UserNavbar from "./Components/User/Navbar/UserNavbar";
import Userhome from "./Components/User/Userhome";
import Userprofile from "./Components/User/Profile/Userprofile";
import Acptrjtreq from "./Components/Admin/Requests/Acptrjtreq";
import Rescuehome from "./Components/RescueTeam/Rescuehome";
import RescueNav from "./Components/RescueTeam/RescueNav";
import Viewemrgalert from "./Components/RescueTeam/Alerts/Viewemrgalert";
import Volnavbar from "./Components/Volunteere/Navbar/Volnavbar";
import Volviewemgalert from "./Components/Volunteere/Alerts/Volviewemgalert";
import Userviewallalert from "./Components/User/Alerts/Userviewallalert";
import Rescuestatus from "./Components/User/Alerts/Rescuestatus";
import VolViewprofile from "./Components/Volunteere/Profile/VolViewprofile";
import Rescueprofile from "./Components/RescueTeam/Profile/Rescueprofile";
import Updatealert from "./Components/Volunteere/Alerts/Updatealert/Updatealert";
import UpdateViewalert from "./Components/Volunteere/Alerts/Updatealert/UpdateViewalert";
import PrivacyPolicyView from "./Components/Common/PrivacyPolicy/PrivacyPolicyView";
import PrivacyPolicyUpdate from "./Components/Common/PrivacyPolicy/PrivacyPolicyUpdate";
import AdminViewComplaints from "./Components/Admin/Complaints/AdminViewComplaints";
import RescueStatus from "./Components/Admin/Rescue/RescueStatus";
import Viewallemrgcontact from "./Components/User/Contacts/Viewallemrgcontact";
import AddRescueforemergency from "./Components/Volunteere/RescueParticipation/AddRescueforemergency";
import Addrescueforemrg from "./Components/Volunteere/RescueMembers/Addrescueforemrg";
import ViewTasks from "./Components/RescueTeam/Viewtasks/ViewTasks";
import ViewapprovedTasks from "./Components/RescueTeam/Viewtasks/ViewapprovedTasks";
import Viewrescueforalert from "./Components/User/Rescuestatus/Viewrescueforalert";
import ViewParticipatedalerts from "./Components/Volunteere/Alerts/Updatealert/ViewParticipatedalerts";
import Viewemrgalrtstatus from "./Components/Volunteere/Alerts/Emrgalrtstatus/Viewemrgalrtstatus";
import Addrescuestatus from "./Components/RescueTeam/Statusupdate/Addrescuestatus";
import Viewstatus from "./Components/User/Rescuestatus/Viewstatus";
import ContactUs from "./Components/Common/ContactUs/ContactUs";
import PrivacyPolicy from "./Components/Admin/PrivacyPolicy/PrivacyPolicy";
import EditPrivacyPolicy from "./Components/Admin/PrivacyPolicy/EditPrivacyPolicy";
import ViewPrivacyPolicy from "./Components/Admin/PrivacyPolicy/ViewPrivacyPolicy";
import ViewPP from "./Components/Admin/PrivacyPolicy/ViewPP";
import VolAddAlerts from "./Components/Volunteere/Alerts/AddAlert/VolAddAlerts";
import RescueAddAlert from "./Components/RescueTeam/Alerts/RescueAddAlert";
import ViewVolRescueStatus from "./Components/Volunteere/RescueStatus/ViewVolRescueStatus";
import ViewVolalertStatus from "./Components/Volunteere/RescueStatus/ViewVolalertStatus";
import ViewVolAlertResueStatus from "./Components/Volunteere/RescueStatus/ViewVolAlertResueStatus";
import ViewAlertStatus from "./Components/RescueTeam/Statusupdate/ViewAlertStatus";
import ViewMyAlerts from "./Components/RescueTeam/Alerts/ViewMyAlerts";
import ViewRescuemembersstatus from "./Components/RescueTeam/Alerts/ViewRescuemembersstatus";
import ViewMyAlertStatus from "./Components/RescueTeam/Alerts/ViewMyAlertStatus";
import ViewRescumembers from "./Components/Volunteere/ViewRescumembers/ViewRescumembers";
import Forecasting from "./Components/User/Weatherforecasting/Forecasting";
import Weatherforecats from "./Components/User/Weatherforecasting/Weatherforecats";
import ViewRescueMembers from "./Components/Volunteere/RescueMembers/ViewRescueMembers";
import ViewApprovedAlerts from "./Components/Admin/ViewApprovedAlerts/ViewApprovedAlerts";
import ViewAlertStatusAdmin from "./Components/Admin/ViewApprovedAlerts/ViewAlertStatusAdmin";
import AboutUs from "./Components/Common/AboutUs";


function App() {
  return (
    <BrowserRouter basename="/web_guard">
      <div>
        <Routes>

          {/* Admin */}

          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/volunteer-req" element={[<Adminnav/>,<AdminMain data="volunteer-req"/>]} />
          <Route path="/admin-dash" element={[<Adminnav/>,<AdminMain data="admin-dash"/>]} />
          <Route path="/admin-rescuereq" element={[<Adminnav/>,<AdminMain data="admin-rescuereq"/>]} />
          <Route path="/admin-viewallusers" element={[<Adminnav/>,<AdminMain data="admin-viewallusers"/>]} />
          <Route path="/admin-viewallrescue" element={[<Adminnav/>,<AdminMain data="admin-viewallrescue"/>]} />
          <Route path="/admin-viewallvolunteer" element={[<Adminnav/>,<AdminMain data="admin-viewallvolunteer"/>]} />
          <Route path="/admin-viewallusercomplaints" element={[<Adminnav/>,<AdminMain data="admin-viewallusercomplaints"/>]} />
          

          {/* <Route path="/admin-viewalerts" element={[<Adminnav/>,<Viewalerts />]} /> */}
          <Route path="/admin-viewalerts" element={[<Adminnav/>,<AdminMain data='admin-viewalerts' />]} />
          <Route path="/admin-viewapprovedalerts" element={[<Adminnav/>,<AdminMain data='admin-viewapprovedalerts' />]} />
          <Route path="/admin-viewcompletedalerts" element={[<Adminnav/>,<AdminMain data='admin-viewcompletedalerts' />]} />
          {/* <Route path="/admin-viewapprovedalerts" element={[<Adminnav/>,<ViewApprovedAlerts />]} /> */}
          <Route path="/admin-viewalertstatus/:id" element={[<Adminnav/>,<ViewAlertStatusAdmin />]} />
          <Route path="/reset-password/:id" element={[<Adminnav/>,<ResetPassword />]} />
          <Route path="/admin-acptrjtreq" element={[<Acptrjtreq />]} />
          <Route path="/admin-privacypolicy" element={[<Adminnav/>,<AdminMain data='admin-privacypolicy' />]} />
          <Route path="/admin-edit-privacypolicy/:id" element={[<Adminnav/>,<AdminMain data='admin-edit-privacypolicy' />]}/>
          <Route path="/admin-view-privacypolicy" element={[<Adminnav/>,<AdminMain data='admin-view-privacypolicy' />]} />




          <Route path="/compalints-view" element={[<AdminViewComplaints />]} />
          <Route path="/rescue-status" element={[<RescueStatus />]} />
          

          <Route path="/" element={<LandingPage />} />
          <Route path="/contactus" element={[<Navbar/>,<ContactUs />]} />
          <Route path="/about" element={[<Navbar/>,<AboutUs />]} />
          <Route path="/viewprivacypolicy" element={[<Navbar/>,<ViewPP />]} />



          {/* Users */}

          
          <Route path="/user_signup" element={<SignUp />} />
          <Route path="/user_login" element={[<Login />]} />
          <Route path="/user_addalerts" element={[<UserNavbar/>,<Addalerts/>]}/>
          <Route path="/user-home" element={<Userhome/>}/>
          <Route path="/user-viewalert" element={[<UserNavbar/>,<Userviewallalert/>]}/>
          <Route path="/user-viewreqstatus" element={[<UserNavbar/>,<Rescuestatus/>]}/>
          <Route path="/user-viewemergencycontacts" element={[<Viewallemrgcontact/>]}/>
          <Route path="/user-viewrescuemembers/:id" element={[<UserNavbar/>,<Viewrescueforalert/>]}/>
          <Route path="/user-viewstatus/:rescueid/:alertId/:volId" element={[<UserNavbar/>,<Viewstatus />]} />
          <Route path="/user-viewprivacypolicy" element={[<UserNavbar/>,<ViewPP />]}/>
          <Route path="/weatherforecasting" element={[<UserNavbar/>,<Forecasting />]}/>
          <Route path="/weatherforecastingdays" element={[<UserNavbar/>,<Weatherforecats />]}/>




          {/* Volunteers */}

          <Route path="/volunteers_signup" element={<VolunteersSignup />} />
          <Route path="/volunteers_login" element={<VolunteersLogin />} />
          <Route path="/volunteers_home" element={[<Volnavbar/>,<Rescuehome />]} />
          <Route path="/volunteers_emergencyalert" element={[<Volnavbar/>,<Volviewemgalert />]} />
          <Route path="/volunteers_editalert" element={<Updatealert />} />
          <Route path="/volunteers_editviewalert" element={<UpdateViewalert />} />
          {/* <Route path="/Volunteer-addrescueforemrg/:id" element={[<Volnavbar/>,<AddRescueforemergency />]} /> */}
          <Route path="/Volunteer-addrescueforemrg/:id" element={[<Volnavbar/>,<Addrescueforemrg />]} />
          <Route path="/Volunteer-viewparticipatedalerts" element={[<Volnavbar/>,<ViewParticipatedalerts />]} />
          <Route path="/Volunteer-viewrescuemember/:id" element={[<Volnavbar/>,<ViewRescumembers />]} />
          <Route path="/Volunteer-viewemrgalertstatus/:id" element={[<Volnavbar/>,<Viewemrgalrtstatus />]} />
          <Route path="/Volunteer-viewvolrescuestatus" element={[<Volnavbar/>,<ViewVolRescueStatus />]} />
          <Route path="/Volunteer-viewvolalertstatus/:id" element={[<Volnavbar/>,<ViewVolalertStatus />]} />
          <Route path="/Volunteer-viewvolalertresuestatus/:rescueid/:alertId" element={[<Volnavbar/>,<ViewVolAlertResueStatus />]} />
          <Route path="/Volunteer-viewprivacypolicy" element={[<Volnavbar/>,<ViewPP />]} />
          <Route path="/Volunteer-addalerts" element={[<Volnavbar/>,<VolAddAlerts />]} />
          <Route path="/Volunteer-viewallrescuemembers" element={[<Volnavbar/>,<ViewRescueMembers />]} />



          <Route path="/Volunteer-viewweather" element={[<Volnavbar/>,<Forecasting />]} />
          <Route path="/Volunteer-viewforecasting" element={[<Volnavbar/>,<Weatherforecats />]} />


          {/* Common */}
          <Route path="/user_footer" element={[<Footer/>,<FooterSecond/>]} />
          <Route path="/user_navbar" element={<Navbar/>} />
          <Route path="/forgot-passsword" element={<ForgotPassword/>}/>
          <Route path="/Privacy-Policy" element={<PrivacyPolicyView/>}/>
          <Route path="/Privacy-Policy" element={<PrivacyPolicyView/>}/>
          <Route path="/Privacy-PolicyUpdate" element={<PrivacyPolicyUpdate/>}/>
          


          {/* RescueTeam */}
          <Route path="/rescueperson_signup" element={<RescueTeamReg />} />
          <Route path="/rescueperson_login" element={<RescueTeamLogin />} />
          <Route path="/rescueperson_home" element={[<RescueNav/>,<Rescuehome data='rescue' />]} />
          <Route path="/rescuemergencyalerts" element={[<RescueNav/>,<Viewemrgalert />]} />
          <Route path="/rescue-viewpendingtasks" element={[<RescueNav/>,<ViewTasks />]} />
          <Route path="/rescue-viewapprovedtasks" element={[<RescueNav/>,<ViewapprovedTasks />]} />
          <Route path="/rescue-viewalertstatus/:id" element={[<RescueNav/>,<ViewAlertStatus />]} />
          <Route path="/rescue-viewprivacypolicy" element={[<RescueNav/>,<ViewPP />]} />
          <Route path="/rescue-addalerts" element={[<RescueNav/>,<RescueAddAlert />]} />


          <Route path="/addstatus" element={[<RescueNav/>,<Addrescuestatus />]} />
          <Route path="/rescue-viewmyalerts" element={[<RescueNav/>,<ViewMyAlerts />]} />
          <Route path="/rescue-viewrescustatus/:id" element={[<RescueNav/>,<ViewRescuemembersstatus />]} />
          <Route path="/rescue-viewmyalertstatus/:rescueId/:alertId" element={[<RescueNav/>,<ViewMyAlertStatus />]} />

          <Route path="/rescue-viewweather" element={[<RescueNav/>,<Forecasting />]} />
          <Route path="/rescue-viewforecasting" element={[<RescueNav/>,<Weatherforecats />]} />



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
