import React from "react";
import "./AboutUs.css";
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default function AboutUs() {
    return (
        <div>
            <section id="what-we-do" className="pt-3 pb-0" style={{}}>
                <div className="container-fluid">
                <span></span>
                <Link to='/' className="btn btn-sm mt-2 go_back btn-outline-info"style={{marginLeft:'0%'}} >Go Back</Link>
                <span><h4 className="section-title  h3">What we do</h4></span>
                    
                    <div className="row mt-3">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-1">
                                    <h4 className="card-title">Our Love for Travel  </h4>
                                    <p className="card-text">Sure we’re a bunch of Developers, Designers, Writers, Managers and Thinkers. </p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right " /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-2">
                                    <h4 className="card-title"> Product</h4>
                                    <p className="card-text">We’ve made it our business to understand the travel business. </p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right " /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-3">
                                    <h4 className="card-title">Party Hard, Work Harder</h4>
                                    <p className="card-text">We party like crazy, but we know no bounds when we’re working. </p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-4">
                                    <h4 className="card-title">Engaging</h4>
                                    <p className="card-text">While many travel the world for inspiration, we find ours right here.</p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-5">
                                    <h4 className="card-title">How you do it</h4>
                                    <p className="card-text">We care for you and brings perfect product for you</p>
                                    <a href="" title="Read more" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-6">
                                    <h4 className="card-title">All over the world</h4>
                                    <p className="card-text">Our team is all over the world.</p>
                                    <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
