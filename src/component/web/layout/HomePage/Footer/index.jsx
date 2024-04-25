import React from 'react';

const Footer = function (props) {
  return (
    <>
       <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="widget">
                            <div className="footer-text text-left">
                                {/* <a href="index.html">
                                <img src="images/version/tech-footer-logo.png" alt="" className="img-fluid">

                                </a> */}
                                <p>Một cái blog hoặc diary chẳng hạn? Viết cái mẹ gì chả được. Thử đi làm mọi thứ mình thích =))))))))))))))))))))))))))</p>
                                <div className="social">
                                    <a href="!#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                </div>
                                {/* <div className="newsletter-widget text-left">
                                    <form className="form-inline">
                                        <input type="text" className="form-control" placeholder="Enter your email address"></input>
                                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                                    </form>
                                </div> */}
                           
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Categories</h2>
                            <div className="link-widget">
                                <ul>
                                    <li><a href="!#">Marketing <span>(21)</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Copyrights</h2>
                            <div className="link-widget">
                                <ul>
                                    <li><a href="!#">About us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <br></br>
                        <div className="copyright">&copy; Báleygr Blog. Design: <a href="home">Báleygr</a>.</div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;
