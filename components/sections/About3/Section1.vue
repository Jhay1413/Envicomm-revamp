<template>
  <section class="about-hero">
    <!-- Top wide banner image -->
    <div class="about-hero__banner">
      <img
        src="/assets/images/main-imgs/about-01.jpg"
        alt="Team working together"
        class="about-hero__banner-img"
      />
    </div>

    <!-- Green content panel -->
    <div class="about-hero__panel">
      <div class="about-hero__panel-inner">
        <!-- Small image on the left -->
        <div class="about-hero__speaker">
          <img
            src="/assets/images/main-imgs/about-02.jpg"
            alt="Speaker"
            class="about-hero__speaker-img"
          />
        </div>

        <!-- Text on the right -->
        <div class="about-hero__text">
          <p class="about-hero__headline">
            At Envi-Comm Corporation,
          </p>
          <p class="about-hero__copy">
            our leaders are inspired to
            build a future of lasting
            value for everyone we serve.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// no logic needed for this static section
</script>

<style scoped>
.about-hero {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f5f5f5;
}

/* Top banner */
.about-hero__banner {
  width: 100%;
  overflow: hidden;
}

.about-hero__banner-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Green panel */
.about-hero__panel {
  background-image: url(/assets/images/main-imgs/about-03.jpg);
  padding: 2.5rem 1.5rem;
  display: flex;
  justify-content: center;
}

.about-hero__panel-inner {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
  gap: 2rem;
  align-items: center;
}

/* Speaker image card */
.about-hero__speaker {
  background-color: #f4f4f4;
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-hero__speaker-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Text block */
.about-hero__text {
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.about-hero__headline {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
}

.about-hero__copy {
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
}

/* Responsive tweaks */
@media (max-width: 900px) {
  .about-hero__panel-inner {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .about-hero__speaker {
    max-width: 420px;
    justify-self: center;
  }

  .about-hero__headline,
  .about-hero__copy {
    font-size: 1.4rem;
  }
}

@media (max-width: 640px) {
  .about-hero__panel {
    padding: 2rem 1rem;
  }

  .about-hero__headline,
  .about-hero__copy {
    font-size: 1.2rem;
  }
}
</style>
