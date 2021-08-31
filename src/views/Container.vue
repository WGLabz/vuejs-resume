<template>
  <div id="colorlib-page">
    <div class="container-wrap">
      <sidebar :user-data="userData"/>
      <div id="colorlib-main">
        <introduction :user-data="userData"/>
        <skills :user-data="userData" :skills-overview="skillsOverviewData"/>
        <projects :projects-data="projectsData" />
        <section class="colorlib-experience" data-section="articles">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta"
                  >Published in Element14 Community</span
                >
                <h2 class="colorlib-heading animate-box">Articles</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="timeline-centered">
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-6">
                        <img
                          src="images/article.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>IoT Security <span>Dec. 2018</span></h2>
                        <p style="text-align: justify">
                          In recent years, IoT (Internet of Things) has emerged
                          as a network of connected physical devices using the
                          Internet for seamless data exchange. While real-time
                          access to information enables opportunities for more
                          autonomous operation of physical assets, the exchange
                          of a large volume of data increases security risks,
                          including data and privacy breaches, product tampering
                          through remote control, and data attacks. Security
                          remains a top concern with the IoT. Moreover, the
                          importance of IoT security extends to the home. It is
                          easy to imagine a situation in a smart connected home
                          where private information, home appliances, or
                          security locks can get hacked. ........<a
                            href="https://www.element14.com/community/docs/DOC-91377/l/element14-essentials-iot-iii-iot-security"
                            >Read More</a
                          >
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-6">
                        <img
                          src="images/article.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          How to Place an Antenna for Optimal RF Performance
                          <span>Nov, 2018</span>
                        </h2>
                        <p style="text-align: justify">
                          Wireless technology has emerged as the primary medium
                          of communication for connected devices. To enable such
                          widespread wireless communication, a wireless
                          transceiver circuit with an appropriately selected and
                          placed antenna is necessary. In this spotlight, we
                          will focus on the various aspects of locating and
                          mounting an antenna to ensure the RF circuit is
                          functioning at maximum efficiency......... .<a
                            href="https://www.element14.com/community/docs/DOC-91233/l/tech-spotlight-how-to-place-an-antenna-for-optimal-rf-performance"
                            >Read More</a
                          >
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-6">
                        <img
                          src="images/article.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Advanced Message Queuing Protocol (AMQP)<span>
                            Oct, 2018</span
                          >
                        </h2>
                        <p style="text-align: justify">
                          AMQP (Advanced Message Queuing Protocol) is a
                          binary-wire, application layer (OSI Model) protocol
                          used primarily by business organizations to carry out
                          inter-application communication and high-speed data
                          transfer. ........<a
                            href="https://www.element14.com/community/docs/DOC-91119/l/tech-spotlight-advanced-message-queuing-protocol-amqp"
                            >Read More</a
                          >
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-6">
                        <img
                          src="images/article.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          SigFox -- A Wide Area Network Protocol for IoT
                          <span>Sep, 2018</span>
                        </h2>
                        <p style="text-align: justify">
                          As IoT nodes spread across broader geographical areas,
                          these remote devices are expected to run on limited
                          power (or batteries) for years. How can long distance
                          communication be achieved under these requirements?
                          One answer may be SigFox, which is a low power wide
                          area wireless network provider (LPWAN) who has
                          successfully delivered a long-range solution using an
                          intelligent trade off between bandwidth,.........<a
                            href="https://www.element14.com/community/docs/DOC-90814/l/tech-spotlight-sigfox-a-wide-area-network-protocol-for-iot"
                            >Read More</a
                          >
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-6">
                        <img
                          src="images/article.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>The CoAP Protocol <span>Aug, 2018</span></h2>
                        <p style="text-align: justify">
                          IoT technology has triggered an exponential growth of
                          connected devices. Businesses that operate huge
                          networks of connected devices will require increased
                          resources in terms of connectivity and power. As a
                          result, it becomes extremely important for the devices
                          to be ultra-low powered while using limited processing
                          and network resources. In general, connected devices
                          are meant to send aggregated data to the cloud or
                          local servers by using communication protocols for
                          further analysis. There are many protocols for
                          communication between end nodes and servers. The most
                          popular and widely used is the HTTP, a protocol which
                          has to transmit a large amount of payload data for
                          very small size of information data. As such, this
                          means more processing.........<a
                            href="https://www.element14.com/community/docs/DOC-90554/l/tech-spotlight-the-coap-protocol"
                            >Read More</a
                          >
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-6">
                        <img
                          src="images/article.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          SBC - Single Board Computers <span>May, 2018</span>
                        </h2>
                        <p style="text-align: justify">
                          Single Board Computers (SBCs) have existed since well
                          before the Raspberry Pi hit the market in 2012,
                          spawning what seems now like a revolution in compact
                          computing platforms for hobbyists, students, as well
                          as professionals. But what makes an SBC unique? What
                          makes them a class of compact computers in terms of
                          architecture, operating systems, applications, and
                          more? What is the future of single board computers?
                          These questions and plenty more will be discussed in
                          this learning module, which will examine the entire
                          class of SBCs from their origins in the 1970s to the
                          present day.<a
                            href="https://www.element14.com/community/docs/DOC-89846/l/element14-essentials-sbc-single-board-computers"
                            >Read More</a
                          >.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="colorlib-education" data-section="education">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">Education</span>
                <h2 class="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div class="fancy-collapse-panel">
                  <div
                    class="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            >Master in Technology, Electronics and Communication
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        class="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div class="panel-body">
                          <p style="text-align: justify">
                            Completed in 2014 from
                            <strong
                              >National Institute of Science and Technolog,
                              Berhampur, Odisha</strong
                            >
                            with a CGPA of 8.2. My research topic was on
                            <strong>Smart Nano Grids</strong>, under the
                            guidance of
                            <strong
                              ><a
                                href="https://ieeexplore.ieee.org/author/37085469745"
                                >Prof. Bhawani Shankar Pattnaik.</a
                              ></strong
                            >
                            I got into NIST with scholarship from MHRD, India as
                            was
                            <strong>GATE-2011 (AIR: 5126)</strong> qualified.
                          </p>
                          <ul>
                            <li>Published 2 papers in IEEE conferences.</li>
                            <li>
                              Active member on industrial research projects
                            </li>
                            <li>Guided graduate students in their projects.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            >Bachelor in Technology, Electronics and
                            Telecommunication
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div class="panel-body">
                          <p style="text-align: justify">
                            Completed in 2011 from
                            <strong
                              >Padmashree Krutartha College of Engineering,
                              Bargarh, Odisha</strong
                            >, with a CGPA of 7.32.
                          </p>
                          <ul>
                            <li>Founded Robotics Club.</li>
                            <li>
                              Part of group that organized intra college
                              tech-fest for first time in the college.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingThree">
<h4 class="panel-title">
<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Diploma in Information Technology
</a>
</h4>
</div>
<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
<div class="panel-body">
<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
</div>
</div>
</div>

<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingFour">
<h4 class="panel-title">
<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Diploma in Information Technology
</a>
</h4>
</div>
<div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
<div class="panel-body">
<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
</div>
</div>
</div>

<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingFive">
<h4 class="panel-title">
<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">High School Secondary Education
</a>
</h4>
</div>
<div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
<div class="panel-body">
<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
</div>
</div>
</div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="colorlib-services" data-section="certifications">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-12 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">Certifications</span>
                <h2 class="colorlib-heading">Certifications and Courses</h2>
              </div>
            </div>
            <div class="row row-pt-md">
              <div class="col-md-4 text-center animate-box">
                <div class="services color-1">
                  <span class="icon">
                    <img
                      src="images/thingworx.png"
                      style="height: 10opx; width: 50px"
                    />
                    <!-- <i class="icon-bulb"></i> -->
                  </span>
                  <div class="desc">
                    <h3>Thingworx Foundations</h3>
                    <p>Certified on : <strong>14 Oct 2019</strong></p>

                    <p>
                      <a
                        href="docs/ThingWorx-Foundations-Bikash-Panda-5da42186ca2f2.pdf"
                      >
                        <i class="icon-download4"></i> Certificate
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center animate-box">
                <div class="services color-4">
                  <span class="icon">
                    <img
                      src="images/power_bi.png"
                      style="height: 10opx; width: 50px"
                    />
                    <!-- <i class="icon-bulb"></i> -->
                  </span>
                  <div class="desc">
                    <h3>Visualizing Data with Power BI</h3>
                    <p>Certified on : <strong>24 Apr 2020</strong></p>
                    <p>
                      <a
                        href="docs/Microsoft%20DAT207x%20Certificate%20_%20edX.pdf"
                        ><i class="icon-download4"></i> Certificate
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center animate-box">
                <div class="services color-3">
                  <span class="icon">
                    <img
                      src="images/Industry-4.0_01.png"
                      style="height: 10opx; width: 50px"
                    />
                    <!-- <i class="icon-bulb"></i> -->
                  </span>
                  <div class="desc">
                    <h3>Industry 4.0 E-Learning Program</h3>
                    <p>Certified on : <strong>21 Apr 2020</strong></p>

                    <p>
                      <a href="docs/Industry4.pdf"
                        ><i class="icon-download4"></i> Certificate
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="colorlib-experience" data-section="work">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">Experience</span>
                <h2 class="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="timeline-centered">
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-1">
                        <i class="icon-pen2"></i>
                      </div>
                      <div class="timeline-label">
                        <h2>
                          <a href="https://www.itcinfotech.com/"
                            >ITC Infotech INDIA Ltd.</a
                          >
                        </h2>
                        <small>Associate Consultant</small>
                        <p style="text-align: justify">
                          Responsible to develop IoT applications based on
                          Thingworx IoT platform from PTC. As well as reponsible
                          to maintain the backend infrastructure. Leading a team
                          of 6 people.
                        </p>

                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-trophy"></i></span
                            >Spot Award Nov 2019
                          </li>
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-trophy"></i></span
                            >ACE Performer of the year 2020
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-2">
                        <i class="icon-pen2"></i>
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Application Engineer at
                          <a href="https://in.element14.com/"
                            >Element14 India Pvt. Ltd.</a
                          >
                          <span>Jan 2018 - Mar 2019</span>
                        </h2>
                        <div></div>
                        >
                        <p style="text-align: justify">
                          Content/Article on various technologies for Element14
                          Community Website and forthings.io website. It also
                          involdves designaing small scale projects including
                          Embedded System and IOT to demonstarte the application
                          of different categories of products.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-3">
                        <i class="icon-pen2"></i>
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Embedded System Developer at
                          <a href="http://www.ntcsindia.com/">NTCS, India</a
                          ><span> Jul 2014 - Dec 2017</span>
                        </h2>
                        <p style="text-align: justify">
                          Responsible to design and develop IOT based products.
                          Working on projects starting from survey to
                          commissioning. Worked on projects involving IOT in
                          applications like Energy Monitoring, Fleet Management,
                          Industrial IOT based solutions etc. One of the project
                          has been recognised by the Govt. of INDIA.
                        </p>
                      </div>
                    </div>
                  </article>
                  <!-- <article class="timeline-entry animate-box" data-animate-effect="fadeInTop">
 <div class="timeline-entry-inner">
<div class="timeline-icon color-4">
 <i class="icon-pen2"></i>
</div>
<div class="timeline-label">
	<h2><a href="#">Creative Designer</a> <span>2017-2018</span></h2>
 <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
</div>
 </div>
 </article>
 
 <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
 <div class="timeline-entry-inner">
<div class="timeline-icon color-5">
 <i class="icon-pen2"></i>
</div>
<div class="timeline-label">
	<h2><a href="#">UI/UX Designer at Envato</a> <span>2017-2018</span></h2>
 <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
</div>
 </div>
 </article>
 
 <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
 <div class="timeline-entry-inner">
<div class="timeline-icon color-none">
</div>
 </div>
 </article> -->
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 
<section class="colorlib-work" data-section="work">
	<div class="colorlib-narrow-content">
		<div class="row">
			<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
				<span class="heading-meta">My Work</span>
				<h2 class="colorlib-heading animate-box">Recent Work</h2>
			</div>
		</div>
		<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
			<div class="col-md-12">
				<p class="work-menu"><span><a href="#" class="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
				<div class="project" style="background-image: url(images/img-1.jpg);">
					<div class="desc">
						<div class="con">
							<h3><a href="work.html">Work 01</a></h3>
							<span>Website</span>
							<p class="icon">
								<span><a href="#"><i class="icon-share3"></i></a></span>
								<span><a href="#"><i class="icon-eye"></i> 100</a></span>
								<span><a href="#"><i class="icon-heart"></i> 49</a></span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
				<div class="project" style="background-image: url(images/img-2.jpg);">
					<div class="desc">
						<div class="con">
							<h3><a href="work.html">Work 02</a></h3>
							<span>Animation</span>
							<p class="icon">
								<span><a href="#"><i class="icon-share3"></i></a></span>
								<span><a href="#"><i class="icon-eye"></i> 100</a></span>
								<span><a href="#"><i class="icon-heart"></i> 49</a></span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
				<div class="project" style="background-image: url(images/img-3.jpg);">
					<div class="desc">
						<div class="con">
							<h3><a href="work.html">Work 03</a></h3>
							<span>Illustration</span>
							<p class="icon">
								<span><a href="#"><i class="icon-share3"></i></a></span>
								<span><a href="#"><i class="icon-eye"></i> 100</a></span>
								<span><a href="#"><i class="icon-heart"></i> 49</a></span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 animate-box" data-animate-effect="fadeInBottom">
				<div class="project" style="background-image: url(images/img-4.jpg);">
					<div class="desc">
						<div class="con">
							<h3><a href="work.html">Work 04</a></h3>
							<span>Application</span>
							<p class="icon">
								<span><a href="#"><i class="icon-share3"></i></a></span>
								<span><a href="#"><i class="icon-eye"></i> 100</a></span>
								<span><a href="#"><i class="icon-heart"></i> 49</a></span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
				<div class="project" style="background-image: url(images/img-5.jpg);">
					<div class="desc">
						<div class="con">
							<h3><a href="work.html">Work 05</a></h3>
							<span>Graphic, Logo</span>
							<p class="icon">
								<span><a href="#"><i class="icon-share3"></i></a></span>
								<span><a href="#"><i class="icon-eye"></i> 100</a></span>
								<span><a href="#"><i class="icon-heart"></i> 49</a></span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
				<div class="project" style="background-image: url(images/img-6.jpg);">
					<div class="desc">
						<div class="con">
							<h3><a href="work.html">Work 06</a></h3>
							<span>Web Design</span>
							<p class="icon">
								<span><a href="#"><i class="icon-share3"></i></a></span>
								<span><a href="#"><i class="icon-eye"></i> 100</a></span>
								<span><a href="#"><i class="icon-heart"></i> 49</a></span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 animate-box">
				<p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
			</div>
		</div>
	</div>
</section> -->
        <!-- <section class="colorlib-blog" data-section="blog">
<div class="colorlib-narrow-content">
	<div class="row">
		<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
			<span class="heading-meta">Read</span>
			<h2 class="colorlib-heading">Recent Blog</h2>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
			<div class="blog-entry">
				<a href="blog.html" class="blog-img"><img src="images/blog-1.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
				<div class="desc">
					<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
					<h3><a href="blog.html">Renovating National Gallery</a></h3>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
			<div class="blog-entry">
				<a href="blog.html" class="blog-img"><img src="images/blog-2.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
				<div class="desc">
					<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
					<h3><a href="blog.html">Wordpress for a Beginner</a></h3>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
			<div class="blog-entry">
				<a href="blog.html" class="blog-img"><img src="images/blog-3.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></a>
				<div class="desc">
					<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
					<h3><a href="blog.html">Make website from scratch</a></h3>
					<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 animate-box">
			<p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
		</div>
	</div>
</div>
</section> -->
        <section class="colorlib-services" data-section="publications">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">Research Work</span>
                <h2 class="colorlib-heading">Publications</h2>
              </div>
            </div>
            <div class="row row-pt-md">
              <div class="col-md-12 text-center animate-box">
                <div class="services color-1">
                  <span class="icon">
                    <img
                      src="images/iee.png"
                      style="height: 10opx; width: 50px"
                    />
                    <!-- <i class="icon-bulb"></i> -->
                  </span>
                  <div class="desc" style="text-align: left">
                    <h4>
                      Implementation of a smart grid system to remotely monitor,
                      control and schedule energy sources using Android based
                      mobile devices
                    </h4>
                    <strong
                      >Industrial and Information Systems (ICIIS), 2014 9th
                      International Conference</strong
                    >
                    <p style="text-align: justify">
                      In the present day scenario the energy consumption
                      awareness plays an important role as demand for huge
                      amount of energy generation is growing day by day. This
                      proposed model gives a solution to encourage people to
                      know their energy footprint and take required action to
                      .....
                      <a
                        href="http://ieeexplore.ieee.org/abstract/document/7036599/"
                        >Read More</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-pt-md">
              <div class="col-md-12 text-center animate-box">
                <div class="services color-3">
                  <span class="icon">
                    <img
                      src="images/iee.png"
                      style="height: 10opx; width: 50px"
                    />
                    <!-- <i class="icon-bulb"></i> -->
                  </span>
                  <div class="desc" style="text-align: left">
                    <h4>
                      Implementation of a Web of Things based Smart Grid to
                      remotely monitor and control Renewable Energy Sources
                    </h4>
                    <strong
                      >Electrical, Electronics and Computer Science (SCEECS),
                      2014 IEEE Students' Conference</strong
                    >
                    <p style="text-align: justify">
                      This paper describes a Smart Grid architecture implemented
                      with the help of Web of Things. Web of Things comprise of
                      a set of Web services provided on top of a number of
                      Internet enabled Embedded devices. The Web browser on any
                      computer can act as an interface to the services......<a
                        href="https://ieeexplore.ieee.org/abstract/document/6804466/"
                        >Read More</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            >
            <div class="row row-pt-md">
              <div class="col-md-12 text-center animate-box">
                <div class="services color-2">
                  <span class="icon">
                    <img
                      src="images/semantic.png"
                      style="height: 10opx; width: 50px"
                    />
                    <!-- <i class="icon-bulb"></i> -->
                  </span>
                  <div class="desc" style="text-align: left">
                    <h4>Microgrid-A Smart Grid for Community Users</h4>
                    <strong
                      >Proceedings of National Seminar on “Dispersed Generation
                      & Smart Grid</strong
                    >
                    <p style="text-align: justify">
                      Micro grids are modern, small-scale versions of the
                      centralized electricity system, having specific local
                      goals, such as reliability, carbon emission reduction,
                      diversification of energy sources, and cost reduction,
                      established by the ....
                      <a
                        href="https://www.semanticscholar.org/paper/Microgrid-%E2%80%9C-A-Smart-Grid-for-Community-Users-%E2%80%9D-Panda/5931506a174059fbf81242199e4c88da9214ead0"
                        >Read More</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            >
          </div>
        </section>
        <section class="colorlib-contact" data-section="contact">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">Get in Touch</span>
                <h2 class="colorlib-heading">Contact</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-globe-outline"></i>
                  </div>
                  <div class="colorlib-text">
                    <p>
                      <a
                        href="mailto:oksbwn@gmail.com?Subject=Mail%20from%20portfolio%20website"
                        target="_top"
                        >oksbwn@gmail.com</a
                      >
                    </p>
                  </div>
                </div>
                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-map"></i>
                  </div>
                  <div class="colorlib-text">
                    <p>
                      1<sup>st</sup> Cross, Vijaya Bank Colony, Dodda Banaswadi,
                      Bengaluru, INDIA-560043
                    </p>
                  </div>
                </div>
                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-phone"></i>
                  </div>
                  <div class="colorlib-text">
                    <p><a href="tel://">+91 9439 421 905</a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-md-push-1">
                <div class="row">
                  <div
                    class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <form action="">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          name=""
                          id="message"
                          cols="30"
                          rows="7"
                          class="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <input
                          type="submit"
                          class="btn btn-primary btn-send-message"
                          value="Send Message"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- end:colorlib-main -->
    </div>
    <!-- end:container-wrap -->
  </div>
</template>

<script>
import sidebar from "./sidebar/Index";
import introduction from "./pages/Introduction";
import skills from "./pages/Skills"
import Projects from './pages/Projects.vue';
export default {
  name: "Container",
  components: {
    sidebar,
    introduction,
    skills,
    Projects
  },
  computed:{
    projectsData: function(){
      return this.$store.getters.getProjectsData;
    },
    userData: function () {
      return this.$store.getters.getUserMetaData;
    },
    skillsOverviewData: function(){
      return this.$store.getters.getSkills;
    }
  },
};
</script>

<style></style>
