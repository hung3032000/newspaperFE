import React, { Component } from 'react';
import Banner from 'component/web/banner/banner';
class Homepage extends Component {
  render() {
    return (
      <>
        <Banner></Banner>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div className="page-wrapper">
                  <div className="blog-top clearfix">
                    <h4 className="pull-left">
                      Recent News{' '}
                      <a href="!#">
                        <i className="fa fa-rss"></i>
                      </a>
                    </h4>
                  </div>

                  <div className="blog-list clearfix">
                    <div className="blog-box row">
                      <div className="col-md-4 mb-3">
                        <div className="post-media">
                          <a href="tech-single.html" title="">
                            <img src="upload/tech_blog_01.jpg" alt="" className="img-fluid"></img>
                            <div className="hovereffect"></div>
                          </a>
                        </div>
                      </div>

                      <div className="blog-meta big-meta col-md-8">
                        <h4>
                          <a href="tech-single.html" title="">
                            Top 10 phone applications and 2017 mobile design awards
                          </a>
                        </h4>
                        <p>
                          Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh,
                          maximus ac felis nec, maximus tempor odio.
                        </p>
                        <small className="firstsmall">
                          <a className="bg-orange" href="tech-category-01.html" title="">
                            Gadgets
                          </a>
                        </small>
                        <small>
                          <a href="tech-single.html" title="">
                            21 July, 2017
                          </a>
                        </small>
                        <small>
                          <a href="tech-author.html" title="">
                            by Matilda
                          </a>
                        </small>
                        <small>
                          <a href="tech-single.html" title="">
                            <i className="fa fa-eye"></i> 1114
                          </a>
                        </small>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <div className="banner-spot clearfix">
                          <div className="banner-img">
                            <img src="upload/banner_02.jpg" alt="" className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-start">
                        <li className="page-item">
                          <a className="page-link" href="!#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="!#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="!#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="!#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="sidebar">
                  {/* <div className="widget">
                    <div className="banner-spot clearfix">
                      <div className="banner-img">
                        <img src="upload/banner_07.jpg" alt="" className="img-fluid"></img>
                      </div>
                    </div>
                  </div> */}
                  <div className="widget">
                    <h2 className="widget-title">Trend Videos</h2>
                    <div className="trend-videos">
                      <div className="blog-box">
                        <div className="post-media">
                          <a href="tech-single.html" title="">
                            <img src="upload/tech_video_03.jpg" alt="" className="img-fluid"></img>
                            <div className="hovereffect">
                              <span className="videohover"></span>
                            </div>
                          </a>
                        </div>
                        <div className="blog-meta">
                          <h4>
                            <a href="tech-single.html" title="">
                              Both blood pressure monitor and intelligent clock
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <h2 className="widget-title">Popular Posts</h2>
                    <div className="blog-list-widget">
                      <div className="list-group">
                        <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                          <div className="w-100 justify-content-between">
                            <img src="upload/tech_blog_08.jpg" alt="" className="img-fluid float-left"></img>
                            <h5 className="mb-1">5 Beautiful buildings you need..</h5>
                            <small>12 Jan, 2016</small>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <h2 className="widget-title">Recent Reviews</h2>
                    <div className="blog-list-widget">
                      <div className="list-group">
                        <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                          <div className="w-100 last-item justify-content-between">
                            <img src="upload/tech_blog_07.jpg" alt="" className="img-fluid float-left"></img>
                            <h5 className="mb-1">We are making homemade ravioli..</h5>
                            <span className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Homepage;
