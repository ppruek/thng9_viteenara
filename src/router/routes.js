import React from "react";
import { Router, Route } from "react-router";
import Homepage from "../component/HomePage/homepage"
import Shop from "../component/Shop/shop"

const Routes = props => (
    <Router {...props}>
        <Route path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        {/* <Route path="/product" component={productTable} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route exact path="/login:Semail" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/ProductDetail:id" component={ProductDetail} />
        <Route path="/UseCase" component={UseCase} />
        <Route path="/order" component={Order} />
        <Route path="/track" component={Tracking} />
        <Route path="/under" component={UnderConstruction} />
        <Route path="/edit" component={EditUser} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
        <Route path="/seller" component={Seller} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/itemqualify" component={QualifyProduct} />
        <Route path="/addtracking" component={AddTracking} />
        <Route path="/policy" component={Policy} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/help" component={Help} /> */}
    </Router>
);

export default Routes;
