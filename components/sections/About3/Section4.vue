<template>
  <section class="teams">
    <div class="teams__inner">
      <!-- Executive Leadership Team -->
      <div class="teams__group">
        <h2 class="teams__heading">EXECUTIVE LEADERSHIP TEAM</h2>
        <div class="teams__grid">
          <div class="teams__card" v-for="member in executives" :key="member.id">
            <img
              :src="member.photo"
              :alt="member.name"
              class="teams__photo"
            />
            <div class="teams__info">
              <p class="teams__name">{{ member.name }}</p>
              <p class="teams__role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Management Team -->
      <div class="teams__group">
        <h2 class="teams__heading">MANAGEMENT TEAM</h2>
        <div class="teams__grid">
          <div class="teams__card" v-for="member in management" :key="member.id">
            <img
              :src="member.photo"
              :alt="member.name"
              class="teams__photo"
            />
            <div class="teams__info">
              <p class="teams__name">{{ member.name }}</p>
              <p class="teams__role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Supervisory Team -->
      <div class="teams__group">
        <h2 class="teams__heading">SUPERVISORY TEAM</h2>
        <div class="teams__grid">
          <div class="teams__card" v-for="member in supervisory" :key="member.id">
            <img
              :src="member.photo"
              :alt="member.name"
              class="teams__photo"
            />
            <div class="teams__info">
              <p class="teams__name">{{ member.name }}</p>
              <p class="teams__role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mt-4">
        <img src="/assets/images/main-imgs/team/about-group.jpg" alt="group photo">
      </div>
    </div>
  </section>
</template>

<script setup>
const img = (n) => `/assets/images/main-imgs/team/${n}.png`;

const executives = [
  { id: 1, name: 'Karlo Miguel Cuizon', role: 'Chief Executive Officer', photo: img(1) },
  { id: 2, name: 'CHRISTOPHER PATRICK ALMADEN', role: 'Chief Operating Officer', photo: img(2) },
  { id: 3, name: 'OSCAR LOPEZ JR.', role: 'Chief Strategy Officer', photo: img(3) }
];

const management = [
  { id: 4, name: 'GINALIE ECONG', role: 'Finance Manager', photo: img(4) },
  { id: 5, name: 'CARMEN LOURDES COSEP', role: 'Operations And Systems Manager', photo: img(5) },
  { id: 6, name: 'MARIO DENNIS ABREA', role: 'Human Resource Manager', photo: img(6) },
  { id: 7, name: 'RENANTE ABATAYO', role: 'Environmental Services Manager', photo: img(7) },
  { id: 8, name: 'KYLE ART CUIZON', role: 'Saas Development Manager', photo: img(8) },
  { id: 9, name: 'DEXTER MANALILI', role: 'Research and Development Manager', photo: img(9) },
  { id: 10, name: 'SANJAY HARIRAMANI', role: 'Sales & Business Development Manager', photo: img(10) }
];

const supervisory = [
  { id: 11, name: 'CHRISTINE JOY MARTINEZ', role: 'Strategic Environmental Assessment', photo: img(11) },
  { id: 12, name: 'ALGER LOYAO III', role: 'Compliance Monitoring and Reporting Section Manager', photo: img(12) },
  { id: 13, name: 'ERICA DENICE VALENZUELA', role: 'Environmental Clearance & Clarification Manager Section Manager', photo: img(13) },
  { id: 14, name: 'JAY MARK BAJAO', role: 'Environmental Engineering & Design Team', photo: img(14) },
  { id: 15, name: 'LORDWIN CRISOLOGO', role: 'IT Operations Team Leader', photo: img(15) },
  { id: 16, name: 'JOHN REYMOND LAMPITAO', role: 'Process Optimization and Data Hub Team Leader', photo: img(16) },
  { id: 17, name: 'JOHANN MICHAEL YAP', role: 'Client Relation & Quality Officer', photo: img(17) }
];
</script>

<style scoped>
.teams {
  background: #e6f0d9;
  padding: 3rem 1.5rem 4rem;
  display: flex;
  justify-content: center;
}

.teams__inner {
  width: 100%;
  max-width: 1160px;
}

.teams__group + .teams__group {
  margin-top: 2.75rem;
}

.teams__heading {
  margin: 0 0 1.5rem;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: #111111;
}

/* Grid of cards */
.teams__grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 1.5rem;
}

/* Adjust columns per group to better match screenshot densities */
.teams__group:nth-of-type(1) .teams__grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.teams__group:nth-of-type(2) .teams__grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.teams__group:nth-of-type(3) .teams__grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.teams__card {
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.teams__photo {
  width: 100%;
  max-width: 170px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
  margin: 0 auto 0.5rem;
}

.teams__info {
  max-width: 180px;
  margin: 0 auto;
}

.teams__name {
  margin: 0;
  font-weight: 700;
  font-size: 0.9rem;
}

.teams__role {
  margin: 0.15rem 0 0;
  font-size: 0.78rem;
  color: #555555;
}

/* Responsive */
@media (max-width: 1024px) {
  .teams__group:nth-of-type(1) .teams__grid,
  .teams__group:nth-of-type(2) .teams__grid,
  .teams__group:nth-of-type(3) .teams__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .teams {
    padding: 2.5rem 1rem 3rem;
  }

  .teams__group:nth-of-type(1) .teams__grid,
  .teams__group:nth-of-type(2) .teams__grid,
  .teams__group:nth-of-type(3) .teams__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .teams__group:nth-of-type(1) .teams__grid,
  .teams__group:nth-of-type(2) .teams__grid,
  .teams__group:nth-of-type(3) .teams__grid {
    grid-template-columns: 1fr 1fr;
  }

  .teams__heading {
    font-size: 1.4rem;
  }
}
</style>
