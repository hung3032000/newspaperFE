import React from 'react';

const Contentpage = () => {
  return (
    <>
      <section class="section single-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div class="page-wrapper">
                <div class="blog-title-area text-center">
                  <span class="color-orange">
                    <a href="tech-category-01.html" title="">
                      Technology
                    </a>
                  </span>

                  <h3>Top 10 phone applications and 2017 mobile design awards</h3>

                  <div class="blog-meta big-meta">
                    <small>
                      <a href="!#" title="">
                        21 July, 2017
                      </a>
                    </small>
                    <small>
                      <a href="tech-author.html" title="">
                        by Jessica
                      </a>
                    </small>
                    <small>
                      <a href="!#" title="">
                        <i class="fa fa-eye"></i> 2344
                      </a>
                    </small>
                  </div>

                  {/* <div class="post-sharing">
                    <ul class="list-inline">
                      <li>
                        <a href="!#" class="fb-button btn btn-primary">
                          <i class="fa fa-facebook"></i> <span class="down-mobile">Share on Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="!#" class="tw-button btn btn-primary">
                          <i class="fa fa-twitter"></i> <span class="down-mobile">Tweet on Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="!#" class="gp-button btn btn-primary">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>

                {/* <div class="single-post-media">
                  <img src="upload/tech_menu_08.jpg" alt="" class="img-fluid"></img>
                </div> */}

                <div class="blog-content">
                  <div class="p2">
                    <p>
                      In lobortis pharetra mattis. Morbi nec nibh iaculis, <a href="!#">bibendum augue a</a>, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus
                      nec nisl. In mauris purus, bibendum et gravida dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec accumsan. Pellentesque enim velit, ut tempor
                      turpis. Mauris felis neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum.{' '}
                    </p>

                    <h3>
                      <strong>Maecenas non convallis quam, eu sodales justo. Pellentesque quis lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
                    </h3>

                    <p>
                      Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam iaculis neque quis dui venenatis, eget posuere felis viverra. Ut sit amet feugiat
                      elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis eu, euismod nunc. Proin neque enim, malesuada non lobortis nec, facilisis et lectus. Ie
                      consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere.{' '}
                    </p>

                    <p>
                      Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed,
                      finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris
                      felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc
                      ac sem urna. Aliquam et hendrerit nisl massa nunc.{' '}
                    </p>
                  </div>
                </div>

                <div class="blog-title-area">
                  <div class="tag-cloud-single">
                    <span>Tags</span>
                    <small>
                      <a href="!#" title="">
                        lifestyle
                      </a>
                    </small>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="banner-spot clearfix">
                      <div class="banner-img">
                        <img src="upload/banner_01.jpg" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="custombox prevnextpost clearfix">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="blog-list-widget">
                        <div class="list-group">
                          <a href="!#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="w-100 justify-content-between text-right">
                              <img src="upload/tech_menu_19.jpg" alt="" class="img-fluid float-right"></img>
                              <h5 class="mb-1">5 Beautiful buildings you need to before dying</h5>
                              <small>Prev Post</small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="blog-list-widget">
                        <div class="list-group">
                          <a href="!#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="w-100 justify-content-between">
                              <img src="upload/tech_menu_20.jpg" alt="" class="img-fluid float-left"></img>
                              <h5 class="mb-1">Let's make an introduction to the glorious world of history</h5>
                              <small>Next Post</small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="custombox authorbox clearfix">
                  <h4 class="small-title">About author</h4>
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                      <img src="upload/author.jpg" alt="" class="img-fluid rounded-circle"></img>
                    </div>

                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                      <h4>
                        <a href="!#">Jessica</a>
                      </h4>
                      <p>
                        Quisque sed tristique felis. Lorem <a href="!#">visit my website</a> amet, consectetur adipiscing elit. Phasellus quis mi auctor, tincidunt nisl eget,
                        finibus odio. Duis tempus elit quis risus congue feugiat. Thanks for stop Tech Blog!
                      </p>

                      <div class="topsocial">
                        <a href="!#" data-toggle="tooltip" data-placement="bottom" title="Facebook">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="custombox clearfix">
                  <h4 class="small-title">You may also like</h4>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="blog-box">
                        <div class="post-media">
                          <a href="!#" title="">
                            <img src="upload/tech_menu_04.jpg" alt="" class="img-fluid"></img>
                            <div class="hovereffect">
                              <span class=""></span>
                            </div>
                          </a>
                        </div>
                        <div class="blog-meta">
                          <h4>
                            <a href="!#" title="">
                              We are guests of ABC Design Studio
                            </a>
                          </h4>
                          <small>
                            <a href="blog-category-01.html" title="">
                              Trends
                            </a>
                          </small>
                          <small>
                            <a href="blog-category-01.html" title="">
                              21 July, 2017
                            </a>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="blog-box">
                        <div class="post-media">
                          <a href="!#" title="">
                            <img src="upload/tech_menu_06.jpg" alt="" class="img-fluid"></img>
                            <div class="hovereffect">
                              <span class=""></span>
                            </div>
                          </a>
                        </div>
                        <div class="blog-meta">
                          <h4>
                            <a href="!#" title="">
                              Nostalgia at work with family
                            </a>
                          </h4>
                          <small>
                            <a href="blog-category-01.html" title="">
                              News
                            </a>
                          </small>
                          <small>
                            <a href="blog-category-01.html" title="">
                              20 July, 2017
                            </a>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="widget mt-5">
                  <h2 class="widget-title">Popular Posts</h2>
                  <div class="blog-list-widget">
                    <div class="list-group">
                      <a href="!#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="w-100 justify-content-between">
                          <img src="upload/tech_blog_08.jpg" alt="" class="img-fluid float-left"></img>
                          <h5 class="mb-1">5 Beautiful buildings you need..</h5>
                          <small>12 Jan, 2016</small>
                        </div>
                      </a>

                      <a href="!#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="w-100 justify-content-between">
                          <img src="upload/tech_blog_01.jpg" alt="" class="img-fluid float-left"></img>
                          <h5 class="mb-1">Let's make an introduction for..</h5>
                          <small>11 Jan, 2016</small>
                        </div>
                      </a>

                      <a href="!#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="w-100 last-item justify-content-between">
                          <img src="upload/tech_blog_03.jpg" alt="" class="img-fluid float-left"></img>
                          <h5 class="mb-1">Did you see the most beautiful..</h5>
                          <small>07 Jan, 2016</small>
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
};

export default Contentpage;
