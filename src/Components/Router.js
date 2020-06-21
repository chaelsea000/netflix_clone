import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom" 
// 화면이동과 관련됨
// {}가 있으면 뒤에서부터 적어야 자동완성, 화면을 라우팅해준다 
// Router.js-> Controller 역할  Route->data
import Movie from "../Routes/Movie";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "../Components/Header";


export default () => (
    <Router>
        <>
        <Header/>
        <Switch>    
        {/* view가 들어오는 칸인데 비어있는 뷰  */}
            <Route path="/" exact component={Movie} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);