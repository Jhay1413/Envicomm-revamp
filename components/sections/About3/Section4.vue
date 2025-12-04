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
  { id: 1, name: 'Karlo Miguel Demo', role: 'Chief Executive Officer', photo: img(1) },
  { id: 2, name: 'Christopher Patrick Demo', role: 'Chief Operating Officer', photo: img(2) },
  { id: 3, name: 'Oscar Lopez Jr. Demo', role: 'Chief Strategy Officer', photo: img(3) }
];

const management = [
  { id: 4, name: 'Shanlee Chong Demo', role: 'Finance Manager', photo: img(4) },
  { id: 5, name: 'Carmen Lourdes Demo', role: 'Customer & Business Manager', photo: img(5) },
  { id: 6, name: 'Mario Dennis Demo', role: 'Business Development Manager', photo: img(6) },
  { id: 7, name: 'Rizivette Demo', role: 'Environmental Services Manager', photo: img(7) },
  { id: 8, name: 'Kyle Art Demo', role: 'Sales & Project Manager', photo: img(8) },
  { id: 9, name: 'Dexter Manuele Demo', role: 'Technical Services Manager', photo: img(9) },
  { id: 10, name: 'Raman Hearn Demo', role: 'Senior Technical Consultant', photo: img(10) }
];

const supervisory = [
  { id: 11, name: 'Christine Joy Martinez', role: 'Senior Supervisor', photo: img(11) },
  { id: 12, name: 'Albert Dyab Demo', role: 'Compliance & Reporting Lead', photo: img(12) },
  { id: 13, name: 'Erica Dyanne Demo', role: 'Environmental Operations Supervisor', photo: img(13) },
  { id: 14, name: 'Jay Mark Balad Demo', role: 'Project Implementation Lead', photo: img(14) },
  { id: 15, name: 'Leonyn Cescoldo Demo', role: 'Senior Specialist', photo: img(15) },
  { id: 16, name: 'John Raymond Demo', role: 'Field Services Supervisor', photo: img(16) },
  { id: 17, name: 'Johan Michael Yap Demo', role: 'Technical Support Supervisor', photo: img(17) }
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
