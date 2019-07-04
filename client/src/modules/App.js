import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import Navigation from "../components/Navigation"
import LandingPage from "../components/LandingPage"
import HomePage from '../components/HomePage'
import SignUp from "../components/SignUp"
import LogIn from "../components/LogIn"
import LogOut from "../components/LogOut"
import Questionnaire from "../components/Questionnaire"
import MyProfile from "../components/MyProfile"
import Task from "../components/Task"
import DisplayTasks from "../components/DisplayTasks"
import Admin from "../components/Admin"
import { withAuthUserProvider } from '../contexts/Session'
import * as ROUTES from "../constants/routes"

const App = () => (
    <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Route component={LandingPage} exact path={ROUTES.LANDING} exact />
        <Route component={SignUp} exact path={ROUTES.SIGN_UP} />
        <Route component={LogIn} exact path={ROUTES.LOG_IN} /> 
        <Route component={HomePage} exact path={ROUTES.HOME} />
        <Route component={Questionnaire} exact path={ROUTES.QUESTIONNAIRE} />
        <Route component={LogOut} exact path={ROUTES.LOG_OUT} />
        <Route component={MyProfile} exact path={ROUTES.MY_PROFILE} />
        <Route component={Admin} exact path={ROUTES.ADMIN} />
        <Route component={Task} exact path= {ROUTES.CREATE_TASK} />
        <Route component={DisplayTasks} exact path= {ROUTES.DISPLAYTASKS} />
    </BrowserRouter>
)

export default withAuthUserProvider(App)