<template>
  <div class="sample-code">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Sample Code</h1>
          <p>Ready-to-use code examples for Storecove integration</p>
        </div>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <div class="coming-soon">
          <h2>Coming Soon</h2>
          <p>Sample code examples are being prepared. Check back soon!</p>
        </div>
      </div>
    </section>

    <section class="back-navigation">
      <div class="container">
        <router-link to="/" class="back-link">
          ← Back to Integration Toolkit
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SampleCode'
}
</script>

<style scoped>
.sample-code {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.content-section {
  padding: 4rem 0;
}

.coming-soon {
  text-align: center;
  padding: 4rem 2rem;
}

.coming-soon h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.coming-soon p {
  font-size: 1.1rem;
  color: #666;
}

.back-navigation {
  padding: 2rem 0;
  background: #f8f9fa;
}

.back-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.back-link:hover {
  color: #004499;
}
</style>