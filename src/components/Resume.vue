<template>
  <div class="container my-5 ma p-5 rounded">
    <div class="row">
      <div class="col-md-4 text-center">
        <img src="../assets/2.jpg" alt="Profile" class="img-fluid rounded-circle mb-3" width="300" />
        <h2 class="text-primary">Vishnu</h2>
        <p class="text-muted">Web Developer</p>
        <button @click="showNextSection" class="btn btn-primary">More details</button>
      </div>
      <div class="col-md-8 i">
        
        <section v-if="showSummary" :class="{'slide-in': showSummary}" class="mb-4">
          <h3 class="border-bottom pb-2 mb-3">Summary</h3>
          <p>Experienced web developer with expertise in Vue.js, HTML/CSS, and JavaScript. Passionate about building scalable and responsive web applications.</p>
        </section>
        <section v-if="showExperience" :class="{'slide-in': showExperience}" class="mb-4">
          <h3 class="border-bottom pb-2 mb-3">Experience</h3>
          <div class="mb-3">
            <h4>Web Developer <small class="text-muted">- ABC Corp</small></h4>
            <p>Developed and maintained web applications using Vue.js, HTML/CSS, and JavaScript. Worked on multiple projects and improved performance and user experience.</p>
          </div>
        </section>
        <section v-if="showEducation" :class="{'slide-in': showEducation}" class="mb-4">
          <h3 class="border-bottom pb-2 mb-3">Education</h3>
          <ul class="list-unstyled">
            <li><strong>Diploma in Web Designing</strong> -Madurai, 2025</li>
          </ul>
        </section>
        <section v-if="showSkills" :class="{'slide-in': showSkills}" class="mb-4 kk">
          <h3 class="border-bottom pb-2 mb-3">Skills</h3>
          <div class="skill-bar mb-2">
            <div class="skill-name">Vue.js</div>
            <div class="progress">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 80%;">80%</div>
            </div>
          </div>
          <div class="skill-bar mb-2">
            <div class="skill-name">HTML/CSS</div>
            <div class="progress">
              <div class="progress-bar bg-secondary" role="progressbar" style="width: 90%;">90%</div>
            </div>
          </div>
          <div class="skill-bar mb-2">
            <div class="skill-name">JavaScript</div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 75%;">75%</div>
            </div>
          </div>
          <div class="skill-bar mb-2">
            <div class="skill-name">Git</div>
            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 70%;">70%</div>
            </div>
          </div>
          <div class="skill-bar mb-2">
            <div class="skill-name">Responsive Design</div>
            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 85%;">85%</div>
            </div>
          </div>
        </section>
        <section v-if="showContact" :class="{'slide-in': showContact}" class="mb-4">
          <h3 class="border-bottom pb-2 mb-3">Contact</h3>
          <p>Email: vishnu@example.com</p>
          <p>LinkedIn: linkedin.com/in/vishnu</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSummary: false,
      showExperience: false,
      showEducation: false,
      showSkills: false,
      showContact: false,
      currentSection: 0
    }
  },
  methods: {
    showNextSection() {
      this.currentSection += 1;
      switch (this.currentSection) {
        case 1:
          this.showSummary = true;
          break;
        case 2:
          this.showExperience = true;
          break;
        case 3:
          this.showEducation = true;
          break;
        case 4:
          this.showSkills = true;
          break;
        case 5:
          this.showContact = true;
          break;
      }
    }
  }
}
</script>

<style scoped>
.container {
  color: aliceblue;
  /* From https://css.glass */
  background: rgba(35, 35, 35, 0.455);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(66, 63, 63, 0.3);
}

h2 {
  font-weight: 700;
}

h3 {
  font-weight: 600;
}

/* Slide-in Animation */
@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Applying animation to the right column */
.col-md-8 {
  animation: slideInRight 1s ease-out;
}

/* Animation for individual sections */
@keyframes slideIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 1s ease-out;
}

/* Skill Progress Bar Animation */
.skill-bar {
  margin-bottom: 1rem;
}

.skill-name {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.progress {
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  animation: progressBar 2s ease-in-out;
}

.i {
  border-left: 1px solid orange;
  border-radius: 0px 50px 50px 0px;
}

@keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

section {
  margin-bottom: 20px;
}

ul {
  padding-left: 0;
}

ul.list-inline li {
  margin-right: 10px;
}
</style>
