import React, {  } from 'react';
import './style.css';
const Header = function (props) {
  
  return (
    <>
     <header className="tech-header header">
            <div className="container-fluid">
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="home"><img className="brand-banner" src="images/version/tech-blog.png" alt=""></img></a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="home">Trang chủ</a>
                            </li>
                            <li className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                <a className="nav-link dropdown-toggle" href="content" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tin tức</a>
                                <ul className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                                    <li>
                                        <div className="container">
                                            <div className="mega-menu-content clearfix">
                                                <div className="tab">
                                                    <button className="tablinks active">Khoa học</button>
                                                    <button className="tablinks">Technology</button>
                                                   
                                                </div>

                                                <div className="tab-details clearfix">
                                                    <div id="cat01" className="tabcontent active">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="content" title="">
                                                                            <img src="upload/tech_menu_04.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Science</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="content" title="">Relax with the unique warmth of candle flavor</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="cat02" className="tabcontent ">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="blog-box">
                                                                    <div className="post-media">
                                                                        <a href="content" title="">
                                                                            <img src="upload/tech_menu_08.jpg" alt="" className="img-fluid"></img>
                                                                            <div className="hovereffect">
                                                                            </div>
                                                                            <span className="menucat">Technology</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="blog-meta">
                                                                        <h4><a href="content" title="">The most trends of this year with color combination</a></h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="home">About Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </>
  );
};

export default Header;
