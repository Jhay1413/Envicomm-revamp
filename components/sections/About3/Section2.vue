<template>
  <section class="mv-values">
    <div class="mv-values__inner">
      <!-- Top row: Mission & Vision -->
      <div class="mv-values__top">
        <div class="mv-values__card">
          <h2 class="mv-values__title">MISSION</h2>
          <p class="mv-values__body">
            We strive to deliver unparalleled service across different fields of expertise and provide service reliability that exceeds our customer’s standards and expectations.
          </p>
        </div>

        <div class="mv-values__card">
          <h2 class="mv-values__title">VISION</h2>
          <p class="mv-values__body">
            We aim to be the national leader in providing reliable environmental compliance and consultancy solutions.
          </p>
        </div>
      </div>

      <!-- Bottom: Core Values -->
      <div class="mv-values__bottom mv-values__card">
        <h2 class="mv-values__title mv-values__title--large">
          CORE VALUES
        </h2>

        <div class="mv-values__values-grid">
          <div class="mv-values__value">
            <h3 class="mv-values__value-title">Integrity</h3>
            <p class="mv-values__body">
              We value our relationships with co‑workers, clients, and shareholders. Truth, honesty, and accountability in our professional dealings are of the utmost importance.
            </p>
          </div>

          <div class="mv-values__value">
            <h3 class="mv-values__value-title">Professionalism</h3>
            <p class="mv-values__body">
              As a consultancy firm, we seek to achieve work with quality by conducting professional competence and expertise according to the highest ethics and proficiency standards.
            </p>
          </div>

          <div class="mv-values__value mv-values__value--wide">
            <h3 class="mv-values__value-title">Unparalleled Service</h3>
            <p class="mv-values__body">
              We provide maximum value and flexibility with minimum risk to our clients, focusing on balancing environmental preservation and urban development.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// purely presentational
</script>

<style scoped>
.mv-values {
  background: #e6f0d9; /* light green background strip */
  padding: 3rem 1.5rem 4rem;
  display: flex;
  justify-content: center;
}

.mv-values__inner {
  width: 100%;
  max-width: 1160px;
}

/* Shared card style */
.mv-values__card {
  border: 2px solid #9ac45b; /* green border */
  background: #ffffff;
  padding: 2rem 2.25rem;
}

/* Top row */
.mv-values__top {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.75rem;
  margin-bottom: 2rem;
}

.mv-values__title {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #6cb142;
  margin: 0 0 1.25rem;
}

.mv-values__title--large {
  font-size: 2rem;
}

/* Text */
.mv-values__body {
  margin: 0;
  color: #333333;
  font-size: 0.98rem;
  line-height: 1.6;
}

/* Core values grid */
.mv-values__bottom {
  margin-top: 0.5rem;
}

.mv-values__values-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 3rem;
  row-gap: 2rem;
  margin-top: 1.5rem;
}

.mv-values__value-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: #111111;
}

.mv-values__value--wide {
  grid-column: 1 / -1; /* full width bottom row */
}

/* Responsive */
@media (max-width: 900px) {
  .mv-values__top {
    grid-template-columns: 1fr;
  }

  .mv-values__values-grid {
    grid-template-columns: 1fr;
  }

  .mv-values__value--wide {
    grid-column: auto;
  }
}

@media (max-width: 640px) {
  .mv-values {
    padding: 2rem 1rem 3rem;
  }

  .mv-values__card {
    padding: 1.5rem 1.5rem;
  }

  .mv-values__title {
    font-size: 1.5rem;
  }

  .mv-values__title--large {
    font-size: 1.7rem;
  }

  .mv-values__value-title {
    font-size: 1.25rem;
  }
}
</style>
