import React from 'react';

const Banner = () => {
  return (
      <section className="section first-section">
        <div className="container-fluid">
          <div className="masonry-blog clearfix">
            <div className="first-slot">
              <div className="masonry-box post-media">
                <img src="upload/tech_01.jpg" alt="" className="img-fluid"></img>
                <div className="shadoweffect">
                  <div className="shadow-desc">
                    <div className="blog-meta">
                      <span className="bg-orange">
                        <a href="!#" title="">
                          Technology
                        </a>
                      </span>
                      <h4>
                        <a href="!#" title="">
                          Say hello to real handmade office furniture! Clean & beautiful design
                        </a>
                      </h4>
                      <small>
                        <a href="!#" title="">
                          24 July, 2017
                        </a>
                      </small>
                      <small>
                        <a href="!#" title="">
                          by Amanda
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="second-slot">
              <div className="masonry-box post-media">
                <img src="upload/tech_02.jpg" alt="" className="img-fluid"></img>
                <div className="shadoweffect">
                  <div className="shadow-desc">
                    <div className="blog-meta">
                      <span className="bg-orange">
                        <a href="!#" title="">
                          Gadgets
                        </a>
                      </span>
                      <h4>
                        <a href="!#" title="">
                          Do not make mistakes when choosing web hosting
                        </a>
                      </h4>
                      <small>
                        <a href="!#" title="">
                          03 July, 2017
                        </a>
                      </small>
                      <small>
                        <a href="!#" title="">
                          by Jessica
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="last-slot">
              <div className="masonry-box post-media">
                <img src="upload/tech_03.jpg" alt="" className="img-fluid"></img>
                <div className="shadoweffect">
                  <div className="shadow-desc">
                    <div className="blog-meta">
                      <span className="bg-orange">
                        <a href="!#" title="">
                          Technology
                        </a>
                      </span>
                      <h4>
                        <a href="!#" title="">
                          The most reliable Galaxy Note 8 images leaked
                        </a>
                      </h4>
                      <small>
                        <a href="!#" title="">
                          01 July, 2017
                        </a>
                      </small>
                      <small>
                        <a href="!#" title="">
                          by Jessica
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Banner;
