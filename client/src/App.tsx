import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login'

const NavLinks = [
//   {to:"/overview",label:"Overblik", component:() => Overview},
//   {to:"/create-case",label:"Opret sag", component:() => CreateCase},
  // {to:"/create-case/:id",label:"Opret sag", component:() => CreateCaseWithMaterial},
  // {to:"/find",label:"Find sag",component:() => SearchCase},
  {to:"/",label:"Promat", component:() => Login},
]

export default function App() {
  return (
    <BrowserRouter>
      <div id="promat-app">
      
      <Switch>
        {
          NavLinks.map((link) => (
          <Route path={link.to}>{React.createElement(link.component())}</Route>
          ))
        }
      </Switch>

      </div>
    </BrowserRouter>
  );
}
