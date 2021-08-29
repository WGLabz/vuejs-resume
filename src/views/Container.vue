<template>
  <div id="colorlib-page">
    <div class="container-wrap">
      <sidebar :userData="userData"/>
      <div id="colorlib-main">
        <introduction :userData="userData"/>
        <section class="colorlib-skills" data-section="skills" id="skills">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">My Specialty</span>
                <h2 class="colorlib-heading animate-box">My Skills</h2>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <p style="text-align: justify">
                  Over the years I have got the opportunity to work on many
                  technologies. When I started in NTCS I worked on Energy
                  monitoring projects as my M.Tech research was on that
                  particular topic. We started with some RS-485 based smart
                  Energy meters from Texas Instruments with LPC1768 (MBED). The
                  first demo I made was controlling the appliances in a test
                  room and also monitoring the energy usage. The system was
                  controllable from anywhere. After some time we got into a
                  microgrid project for which I developed the IoT components
                  including PCB prototyping to firmware development. That was
                  fun, as I got to work in many areas like electrical
                  distribution to fiber-optic communication and networking kinds
                  of stuff. I did some other projects also while in NTCS and
                  then moved to E14, where I wrote R&D articles on multiple
                  technologies. We also worked on demos involving Raspberry Pi
                  and other sensors. After Joining ITC I got to work on
                  Thingworx and is pretty interesting.
                </p>
              </div>
              <div
                class="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div class="progress-wrap">
                  <h3>Microcontroller Development</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 75%"
                    >
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div class="progress-wrap">
                  <h3>PCB Prototyping</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-2"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 60%"
                    >
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div class="progress-wrap">
                  <h3>Database</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-3"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 85%"
                    >
                      <span>60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div class="progress-wrap">
                  <h3>Git / VCS</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-4"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 90%"
                    >
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div class="progress-wrap">
                  <h3>IoT System Design</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 70%"
                    >
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div class="progress-wrap">
                  <h3>Thingworx</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-6"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 80%"
                    >
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
                style="margin-top: 10px; margin-bottom: 20px"
              >
                <p style="text-align: justify">
                  I have worked on following techonologies or atleast I am aware
                  of,
                </p>
              </div>
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInRight"
                style="margin-bottom: 20px"
              >
                <!-- Split button -->
                <h4>Protocols</h4>
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-sm">
                    I2C
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    SPI
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    UART
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    MODBUS
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    TCP/IP Using mbed
                  </button>
                  <button type="button" class="btn btn-info btn-sm">
                    Rs-485
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    BLE
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    MQTT
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    REST
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    LoRaWAN
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    JSON RPC
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    AT Command Sets
                  </button>
                </div>
              </div>
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInRight"
                style="margin-bottom: 20px; margin-top: 10px"
              >
                <!-- Split button -->
                <h4>Familliar With</h4>
                <div class="btn-group">
                  <button type="button" class="btn btn-warning btn-sm">
                    Android
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    InfluxDB
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    Lua
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    Python
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    HTML
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    PHP
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    CSS
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    JavaScript
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    XML
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    JSON
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    MATLAB
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    MySQL
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    JAVA
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    SQLite
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    PostgresSQL
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    React
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    Solr
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    Shell Scripting
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    MonogoDB
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    Apache Cordova
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    VueJS
                  </button>
                </div>
              </div>
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInRight"
                style="margin-bottom: 20px; margin-top: 10px"
              >
                <!-- Split button -->
                <h4>Hardware Platforms</h4>
                <div class="btn-group">
                  <button type="button" class="btn btn-danger btn-sm">
                    ESP32
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    Atmega16
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    8051
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    PIC16F877A
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    LPC1768
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    LPC2148 (MBED)
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    Wipro ULK board
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    Blend
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    Beagle Bone Black
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    Raspberry Pi
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    ESP8266
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    BBC Micro: Bit
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    Nano Pi
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    Orange Pi
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    Arduino
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    Codebug
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    Sonoff Dev. Board
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    Onion Omega
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    Linkit Smart 7688
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    Banana pi D1
                  </button>
                </div>
              </div>
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInRight"
                style="margin-bottom: 20px; margin-top: 10px"
              >
                <!-- Split button -->
                <h4>Software Platforms/Tools</h4>
                <div class="btn-group">
                  <button type="button" class="btn btn-warning btn-sm">
                    Thingworx
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    AWS IoT
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    OpenHAB
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    Grafana
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    Node-RED
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    Thingworx Analytics
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    PTC Kepware
                  </button>
                </div>
              </div>
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInRight"
                style="margin-bottom: 20px; margin-top: 10px"
              >
                <!-- Split button -->
                <h4>Project Management Tools/Services</h4>
                <div class="btn-group">
                  <button type="button" class="btn btn-warning btn-sm">
                    Bitbucket
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    GitHub
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    GitLab
                  </button>
                  <button type="button" class="btn btn-success btn-sm">
                    JIRA
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    Notion
                  </button>
                </div>
              </div>
              <div
                class="col-md-12 animate-box"
                data-animate-effect="fadeInRight"
                style="margin-top: 10px"
              >
                <!-- Split button -->
                <h4>Devops</h4>
                <div class="btn-group">
                  <button type="button" class="btn btn-success btn-sm">
                    Github Actions
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    Buddy Works
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    Docker
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    Prometheus
                  </button>
                  <button type="button" class="btn btn-info btn-sm">
                    Portainer
                  </button>
                  <button type="button" class="btn btn-default btn-sm">
                    Azure Dev-Ops
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="colorlib-experience" data-section="projects">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span class="heading-meta">What Matters</span>
                <h2 class="colorlib-heading animate-box">Projects</h2>
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
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          <i
                            class="fa fa-sm fa-thumb-tack fa-rotate-45"
                            style="
                              font-size: 16px !important;
                              color: rgb(63, 63, 68) !important;
                            "
                            aria-hidden="true"
                          ></i>
                          Auto SPC <span>May, 2020 - Now</span>
                        </h2>
                        <p style="text-align: justify">
                          A Thingworx based application for Statistical process
                          Analysis for a Automobile Manufuacturing plant.
                          Involved in the deployment of the application as well
                          as supporting enhancements.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> A Leading Automobile
                            Manufacturer in Europe
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx, Dev-Ops
                          </li>
                        </ul>
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
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          <i
                            class="fa fa-sm fa-thumb-tack fa-rotate-45"
                            style="
                              font-size: 16px !important;
                              color: rgb(63, 63, 68) !important;
                            "
                            aria-hidden="true"
                          ></i>
                          Asset Advisor <span>Apr, 2019 - Feb, 2020</span>
                        </h2>
                        <p style="text-align: justify">
                          The project is all about a Thingworx based solution
                          where in the devices ( T&M Instruments) send data to
                          the cloud where the data is used to analyze
                          utilization of the device to properly plan purchase
                          decisions.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> A Leading T&M Instruments
                            Manufacturer in USA
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx, Apache
                            Solr, PostgreSQL, Javascript
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
                      <div class="timeline-icon color-3">
                        <img
                          src="images/greenenergy.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          <i
                            class="fa fa-sm fa-thumb-tack fa-rotate-45"
                            style="
                              font-size: 16px !important;
                              color: rgb(63, 63, 68) !important;
                            "
                            aria-hidden="true"
                          ></i>
                          30Kw Smart Nano Grid, Chotkei, Angul, Odisha<span>
                            Jan, 2016 - Dec, 2017
                          </span>
                        </h2>
                        <p>
                          <i class="fa fa-external-link"></i>
                          <a
                            href="http://www.nanosoftremote.com/ChhotkeiSmartNanogrid/"
                            >Website</a
                          >
                        </p>
                        <p style="text-align: justify">
                          A smart Nano Grid comprising of 30 Kw solar power
                          plant and providing supply to 115 homes in Chotkei
                          Village, Odisha. The smart grid is equipped with
                          completely autonomous stem to make it hassle-free to
                          operate. The grid is connected to internet by using a
                          Satellite internet connection. The smart grid features
                          automatic billing, smart scheduling, overload
                          detection and many safety features. The local
                          consumption data of every user are logged onto a local
                          server by using Fiber Optic and Ethernet network. The
                          data on the server are then analyzed automatically and
                          the system executes the measures required if any. The
                          scheduling feature of the smart grid allows scheduling
                          the supply to each household depending upon their
                          requirement. The overload detection mechanism prevents
                          the user to connect heavy loads to the supply as the
                          supply is limited and purely solar. The automatic
                          billing system detects the payment made by the
                          customer and if the customer has no dues supply is
                          enabled for him/her. If the customer has not paid the
                          bill the supply is automatically cut-off within 10
                          days. The overall IOT usage helps to keep track of
                          overall operation of the grid as the grid is located
                          in a remote place and is not always convenient to
                          visit personally.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> OREDA, Odisha and , USA
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>JAVA
                          </li>
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-trophy"></i></span
                            >Smart Village Award, Smart Cities Conference &
                            Exhibition 2016
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-play"></i></span
                            ><a
                              href="https://www.dw.com/en/nanogrid-electricity-in-india/av-36639063"
                            >
                              Coverage by DW News</a
                            >
                          </li>
                        </ul>
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
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          AutoSPC Dashboard<span> Feb, 2021 - Apr-2021</span>
                        </h2>
                        <p style="text-align: justify">
                          A central dashboard, to monitor all the sites of the
                          client dpread across the globe.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>ThingWorx
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-2">
                        <img
                          src="images/python.png"
                          style="height: 20px; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Automated BT in Python for Azure Dev-Ops<span>
                            Jan, 2021 - Jan-2021</span
                          >
                        </h2>
                        <p style="text-align: justify">
                          The automated business testing module for AutoSPC
                          application, this time written in Python, The
                          application earlier was completely in ThingWorx, but
                          to integrate with Azure Dev-Ops pipelines (You know,
                          to automate it even further), I changed the UI part of
                          it to Python scripts. :)
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Python, ThingWorx
                          </li>
                        </ul>
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
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>CLEAR<span> Sep, 2020 - Dec-2020</span></h2>
                        <p style="text-align: justify">
                          This application is built on top of ThingWorx. The
                          application let's the user create orders which in case
                          of the client are conveyour belts. While creating the
                          order, the application let's the user visualize the
                          design and also it do the mathematical modelling to
                          validate the required parameters like length, material
                          and all are possible or not. Finally the order gets
                          pushed into WindChill PLM software.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx
                          </li>
                        </ul>
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
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          FMS- An Android Application for shop floor operators
                          (POC)<span>Sep, 2020 - Dec-2020</span>
                        </h2>
                        <p style="text-align: justify">
                          Mentored the devlopment of an Android based
                          application for shop floor operators to quickly check
                          machine parmeters. The backend used for the
                          application is ThingWorx. The idea is to let the
                          operator scan the QR code, unique to the machine and
                          the app will show the machine related KPIs and other
                          details.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx, Android
                          </li>
                        </ul>
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
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Automated Business Testing Module for AutoSPC
                          <span>Oct, 2020 - Oct-2020</span>
                        </h2>
                        <p style="text-align: justify">
                          Developed an end-to-end automated Business Testing
                          odule for the AutoSPC application that helped the
                          client reduce the testing effort by almost 30%. The
                          module involved communicating with Ignition, L2L and
                          MSSSQL database. The application is completely
                          deveoped using Thingworx and works as in fire and
                          forget manner. The use can upload test data sets and
                          teh tests to be carried out and application will take
                          care of rest and even send out the test reports as
                          email.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> A Leading Automobile
                            Manufacturer in Europe
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx
                          </li>
                        </ul>
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
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Energy Advisor (Listed in PTC Marketplace)<span>
                            May, 2020 - Jul,2020</span
                          >
                        </h2>
                        <p>
                          <i class="fa fa-external-link"></i>
                          <a
                            href="https://marketplace.ptc.com/apps/305788/energy-advisor"
                            >Website</a
                          >
                        </p>
                        <p style="text-align: justify">
                          Energy Advisor application for manufacturing provides
                          insights on energy efficiency of utility assets and
                          process lines by comparing with optimum levels.
                          Actionable information through KPIs, metrics, alerts
                          and use of Lean methods facilitate quick corrective
                          actions to arrest energy losses. Energy cost of
                          conversion is significant in several industries and
                          there is a need for optimum use of energy, even under
                          varying operating conditions. By use of statistical
                          analysis on plant historic data, dynamic benchmark
                          models are computed to give like-to-like performance
                          visibility for the conditions. Data from DCS, SCADA,
                          PLC, meters, logs and cost is contextualized for near
                          real-time energy analysis in the ThingWorx
                          application. Further, error-code logging and
                          non-conformity with corrective action screens helps
                          management easily review the issues and work towards
                          continuous improvement. Customized models for CPG
                          industries and industrial utility assets help quick
                          deployment to realize efficiency gains.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    class="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="timeline-entry-inner">
                      <div class="timeline-icon color-3">
                        <img
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          A Digital Logbook (POC)
                          <span>Aug, 2020 - Aug,2020</span>
                        </h2>
                        <p style="text-align: justify">
                          A Thingworx based application or basically a Digital
                          Logbook. The idea is to provide a web based interface
                          to Operators as well as Supervisors to make logging
                          pharmaceutical anlysis data smooth. This also enables
                          deriving some of the analytics out of it.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> For a Pharmaceutical
                            Company
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx
                          </li>
                        </ul>
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
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Factory Monitoring System (POC)
                          <span>Jun, 2020 - Jul,2020</span>
                        </h2>
                        <p>
                          <i class="fa fa-external-link"></i>
                          <a href="#">Website</a>
                        </p>
                        <p style="text-align: justify">
                          A Thingworx based application for monitoring differnet
                          production parameters of cigerrate manufacturing
                          plant. Along with the Thingworx Foundation, we tried
                          to use Thingworx Analytics, but due to the lack of
                          required algorithms, we settled with integrating a `R`
                          based script with TWX.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> For a Cigerrate
                            Manufacturer
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx,Thingworx
                            Analytics, R
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
                      <div class="timeline-icon color-4">
                        <img
                          src="images/thingworx.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Automated Thingworx Migration <span>Feb, 2020</span>
                        </h2>
                        <p style="text-align: justify">
                          The project was developed by me using shell script.
                          The goal of the project was to make Thingworx server
                          migration automated, so the Thingworx server migration
                          or updation to a newer version can be done with
                          minimal human intervention. The script is able to
                          migrate between two instances irrespective of their
                          location such as local or cloud. The scripts helped in
                          reducing time required to do a manual upgration
                          drastically.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> A Leading T&M Instruments
                            Manufacturer in USA
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>Thingworx, Shell
                            Scripting
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
                      <div class="timeline-icon color-5">
                        <img
                          src="images/water.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Water/Energy Consumption Monitoring System
                          <span>Jan, 2016 - Mar, 2016</span>
                        </h2>
                        <p>
                          <i class="fa fa-external-link"></i>
                          <a href="https://sunmoksha.com/smart-aquanet/"
                            >Website</a
                          >
                        </p>
                        <p style="text-align: justify">
                          Daily water usage is monitored and logged into the
                          cloud. Analytics on the aggregated data provides
                          information about the consumption pattern, water
                          consumption vs. no of cottages booked in the resort to
                          the client. The data also helps to monitor leakages in
                          the supply system by providing notifications on
                          abnormal consumptions.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> Orange County Resorts,
                            Kabini
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>JAVA, IoT
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
                        <img
                          src="images/water.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Smart Water Monitoring
                          <span>Jul, 2017 - Sep, 2017</span>
                        </h2>
                        <p>
                          <i class="fa fa-external-link"></i>
                          <a href="https://sunmoksha.com/smart-aquanet/"
                            >Website</a
                          >
                        </p>
                        <p style="text-align: justify">
                          This system helps to detect the quality of water used
                          in the plant. Also it is enabled to log the water
                          quality parameters to the cloud to have information
                          about the water used. If the system detects water
                          quality parameters below the preset threshold values
                          it stops the flow of water.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong>Indo-US MIM, Bengaluru
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
                      <div class="timeline-icon color-4">
                        <img
                          src="images/maps.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Vehicle Tracking System
                          <span>Jan, 2016 - Dec, 2017 </span>
                        </h2>
                        <p style="text-align: justify">
                          Vehicle Tracking System (VTS) is developed around
                          GPS/GPRS module to help in tracking vehicles. The
                          controller fetches the location (Lat., Long.),
                          Velocity of the vehicle, Oil Level also interacts with
                          a barcode reader to facilitate easy boarding to the
                          vehicle if it is public. The data retrieved are logged
                          to cloud server and the user can log in to the server
                          and keep complete track of the vehicles. It’s pretty
                          useful for public transports to make smart.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> CVRCE, Odisha
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies/Tools: </Strong>JAVA, Arduino,
                            Raspberry Pi, Orange Pi, GPS/SPRS Modules, AT
                            Commands
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
                      <div class="timeline-icon color-3">
                        <img
                          src="images/gloves.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2 style="text-align: justify">
                          Boxing Match Scorer<span> Jan, 2016</span>
                        </h2>
                        <p>
                          A JAVA GUI based application that helps to give scores
                          to the players during boxing matches by the juries.
                          Each jury has access to two handheld input pads that
                          they use to put score for the players. The result of
                          the game is saved for future references and also
                          displayed in real time through a large outdoor display
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> Army AD College,
                            Berhampur, Odisha
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>JAVA, Raspberry Pi
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
                      <div class="timeline-icon color-1">
                        <img
                          src="images/plc.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Online Process Monitoring System<span>
                            Jan, 2016 - Aug, 2016
                          </span>
                        </h2>
                        <p style="text-align: justify">
                          A control system designed to communicate with PLC
                          using MODBUS over RS-485 to fetch data and logging
                          them to cloud server. The aggregated data helps to do
                          analytics of the production, raw material usage,
                          employee work hours, machine condition etc.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong>Pointec Pens Pvt. Ltd.
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>JAVA, MODBUS, PLC
                            Comm., Smart Meters
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
                      <div class="timeline-icon color-6">
                        <img
                          src="images/news.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>NEWS Display System <span></span></h2>
                        <p style="text-align: justify">
                          The NDS (News Display System) is developed to serve
                          the purpose to display NEWS Items, Information or
                          important announcements to the targeted audience. It
                          fetches trending news topics from RSS feeds of
                          different renowned news websites and parse the topic
                          for text and image contents. Now the parsed content is
                          displayed over a large display connected to the
                          system. It may be used in Indoor or Outdoor
                          environment.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> NIST, ODisha
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>JAVA, RSS Feeds,
                            Raspberry Pi
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
                        <img
                          src="images/greenenergy.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          15 KW Hybrid RE Power Plant Monitoring System<span>
                            Jan, 2016 - May, 2016</span
                          >
                        </h2>
                        <p style="text-align: justify">
                          Same as Energy Monitoring System but it acquires data
                          through MODBUS over RS-232 from an OLYMPUS 15 KVA
                          solar inverter. Along with the electrical parameters
                          it also fetches the battery health, solar generation,
                          DG Runtime, Biomass Genset Runtime etc.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong> NIST, Odisha
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies: </Strong>JAVA, MODBUS,
                            RS-485, RS-232, PCB Prototyping
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
                      <div class="timeline-icon color-1">
                        <img
                          src="images/lpc1768.png"
                          style="height: 20opx; width: 20px"
                        />
                      </div>
                      <div class="timeline-label">
                        <h2>
                          Energy Monitoring System using LPC1768<span>
                            Sep, 2014</span
                          >
                        </h2>
                        <p style="text-align: justify">
                          This Energy monitoring System was an early attempt to
                          aggregate electrical usage data from smart meters
                          connected to the load lines. The LPC1768 MBED
                          controller interacts with the smart meters using
                          MODBUS and fetches data from them including line
                          health parameters and KWh. The collected data is then
                          send to cloud server by using Ethernet.
                        </p>
                        <ul class="fa-ul">
                          <li>
                            <span class="fa-li"
                              ><i class="fa fa-building"></i></span
                            ><Strong>Client: </Strong>Sessai e-Papers Pvt. Ltd.
                          </li>
                          <li>
                            <span class="fa-li"><i class="fa fa-tags"></i></span
                            ><Strong>Technologies/Tools: </Strong>MBED, MBED
                            RTOS, C++, Rs-232, Smart Energy Meter Comm., LPC1768
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
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
import sidebar from "./sidebar/Index.vue";
import introduction from "../components/Introduction.vue";
export default {
  name: "Container",
  components: {
    sidebar,
    introduction,
  },
  computed: {
    userData: function () {
      return this.$store.getters.getUserMetaData;
    },
  },
};
</script>

<style></style>
