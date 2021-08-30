<template>
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
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <p style="text-align: justify">
            {{ skillsOverview.desc }}
          </p>
        </div>

        <skill-with-progress-bar
          v-for="(skill, index) in skillsOverview.primaryskills"
          :key="index"
          :skill="skill"
        />
        <div
          class="col-md-12 animate-box"
          data-animate-effect="fadeInLeft"
          style="margin-top: 10px; margin-bottom: 20px"
        >
          <p style="text-align: justify">
            I have worked on following techonologies or atleast I am aware of,
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
            <button type="button" class="btn btn-default btn-sm">I2C</button>
            <button type="button" class="btn btn-danger btn-sm">SPI</button>
            <button type="button" class="btn btn-primary btn-sm">UART</button>
            <button type="button" class="btn btn-danger btn-sm">MODBUS</button>
            <button type="button" class="btn btn-success btn-sm">
              TCP/IP Using mbed
            </button>
            <button type="button" class="btn btn-info btn-sm">Rs-485</button>
            <button type="button" class="btn btn-warning btn-sm">BLE</button>
            <button type="button" class="btn btn-danger btn-sm">MQTT</button>
            <button type="button" class="btn btn-warning btn-sm">REST</button>
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
            <button type="button" class="btn btn-danger btn-sm">Lua</button>
            <button type="button" class="btn btn-success btn-sm">Python</button>
            <button type="button" class="btn btn-warning btn-sm">HTML</button>
            <button type="button" class="btn btn-primary btn-sm">PHP</button>
            <button type="button" class="btn btn-success btn-sm">CSS</button>
            <button type="button" class="btn btn-danger btn-sm">
              JavaScript
            </button>
            <button type="button" class="btn btn-default btn-sm">XML</button>
            <button type="button" class="btn btn-danger btn-sm">JSON</button>
            <button type="button" class="btn btn-primary btn-sm">MATLAB</button>
            <button type="button" class="btn btn-success btn-sm">MySQL</button>
            <button type="button" class="btn btn-danger btn-sm">JAVA</button>
            <button type="button" class="btn btn-primary btn-sm">SQLite</button>
            <button type="button" class="btn btn-danger btn-sm">
              {{ techStacks }}
            </button>
            <button type="button" class="btn btn-default btn-sm">React</button>
            <button type="button" class="btn btn-warning btn-sm">Solr</button>
            <button type="button" class="btn btn-warning btn-sm">
              Shell Scripting
            </button>
            <button type="button" class="btn btn-default btn-sm">
              MonogoDB
            </button>
            <button type="button" class="btn btn-danger btn-sm">
              Apache Cordova
            </button>
            <button type="button" class="btn btn-primary btn-sm">VueJS</button>
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
            <button type="button" class="btn btn-danger btn-sm">ESP32</button>
            <button type="button" class="btn btn-warning btn-sm">
              Atmega16
            </button>
            <button type="button" class="btn btn-primary btn-sm">8051</button>
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
            <button type="button" class="btn btn-default btn-sm">Blend</button>
            <button type="button" class="btn btn-danger btn-sm">
              Beagle Bone Black
            </button>
            <button type="button" class="btn btn-default btn-sm">
              Raspberry Pi
            </button>
            <button type="button" class="btn btn-danger btn-sm">ESP8266</button>
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
            <button type="button" class="btn btn-danger btn-sm">Codebug</button>
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
            <button type="button" class="btn btn-primary btn-sm">GitHub</button>
            <button type="button" class="btn btn-warning btn-sm">GitLab</button>
            <button type="button" class="btn btn-success btn-sm">JIRA</button>
            <button type="button" class="btn btn-primary btn-sm">Notion</button>
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
            <button type="button" class="btn btn-danger btn-sm">Docker</button>
            <button type="button" class="btn btn-primary btn-sm">
              Prometheus
            </button>
            <button type="button" class="btn btn-info btn-sm">Portainer</button>
            <button type="button" class="btn btn-default btn-sm">
              Azure Dev-Ops
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillWithProgressBar from "../../components/SkillWithProgressBar.vue";
export default {
  components: { SkillWithProgressBar },
  name: "Skills",
  props: {
    skillsOverview: {},
    userData: {},
  },
  computed: {
    techStacks: function () {
      return this.$store.getters.getTechStacks;
    },
  },
};
</script>

<style>
</style>