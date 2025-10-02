<template>
  <div class="page-container">
    <!-- Header -->
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">← Back to Toolkit</router-link>
        <h1 class="page-title">Getting Started Webinar</h1>
        <p class="page-description">Watch our comprehensive webinars to learn about e-invoicing requirements and implementation strategies for different regions</p>
      </div>
    </div>

    <!-- Introduction Section -->
    <section class="content-section">
      <div class="container">
        <div class="intro-section">
          <div class="intro-content">
            <h2>Welcome to E-invoicing Training</h2>
            <p>These webinars provide essential knowledge about e-invoicing compliance, implementation strategies, and region-specific requirements. Whether you're just getting started or looking to expand to new markets, these sessions will help you understand the landscape and plan your integration accordingly.</p>
            <div class="highlight-box">
              <h3>What You'll Learn</h3>
              <ul>
                <li>Regional e-invoicing mandates and compliance requirements</li>
                <li>Implementation timelines and preparation strategies</li>
                <li>Technical requirements and API integration approaches</li>
                <li>Real-world demo of Storecove's e-invoicing platform</li>
                <li>Best practices for different market scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Webinars -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Featured Training Sessions</h2>
        <div class="webinar-grid">
          
          <!-- Belgium E-Invoicing Mandate -->
          <div class="webinar-card">
            <div class="webinar-header">
              <div class="webinar-tag">🇧🇪 Belgium</div>
              <span class="webinar-duration">45 min</span>
            </div>
            <div class="webinar-content">
              <h3 class="webinar-title">Belgium's E-Invoicing Mandate: How to Prepare for 1 January 2026</h3>
              <p class="webinar-description">Comprehensive overview of Belgium's upcoming e-invoicing mandate, including timeline, technical requirements, and preparation strategies for businesses and software providers.</p>
              
              <div class="webinar-topics">
                <h4>Key Topics Covered:</h4>
                <ul>
                  <li>Belgium's e-invoicing mandate timeline and phases</li>
                  <li>Technical requirements and supported formats</li>
                  <li>PEPPOL integration for Belgian market</li>
                  <li>Compliance strategies for different business sizes</li>
                  <li>Implementation roadmap and key milestones</li>
                </ul>
              </div>

              <div class="webinar-actions">
                <a href="https://my.demio.com/recording/FCk2cxxP" target="_blank" class="primary-btn">
                  <span class="btn-icon">▶️</span>
                  Watch Recording
                </a>
                <button class="secondary-btn" @click="downloadSlides('belgium')">
                  <span class="btn-icon">📄</span>
                  Download Slides
                </button>
              </div>
            </div>
          </div>

          <!-- Singapore C5 Compliance -->
          <div class="webinar-card">
            <div class="webinar-header">
              <div class="webinar-tag">🇸🇬 Singapore</div>
              <span class="webinar-duration">40 min</span>
            </div>
            <div class="webinar-content">
              <h3 class="webinar-title">C5 Compliance in Singapore</h3>
              <p class="webinar-description">Deep dive into Singapore's C5 compliance framework for e-invoicing, covering technical specifications, implementation guidelines, and regulatory requirements.</p>
              
              <div class="webinar-topics">
                <h4>Key Topics Covered:</h4>
                <ul>
                  <li>Understanding C5 compliance framework</li>
                  <li>Singapore's e-invoicing regulatory landscape</li>
                  <li>Technical implementation requirements</li>
                  <li>Integration with local accounting systems</li>
                  <li>Compliance verification and audit trails</li>
                </ul>
              </div>

              <div class="webinar-actions">
                <a href="https://my.demio.com/recording/HGxNtbOd" target="_blank" class="primary-btn">
                  <span class="btn-icon">▶️</span>
                  Watch Recording
                </a>
                <button class="secondary-btn" @click="downloadSlides('singapore')">
                  <span class="btn-icon">📄</span>
                  Download Slides
                </button>
              </div>
            </div>
          </div>

          <!-- Malaysia E-Invoicing Demo -->
          <div class="webinar-card">
            <div class="webinar-header">
              <div class="webinar-tag">🇲🇾 Malaysia</div>
              <span class="webinar-duration">50 min</span>
            </div>
            <div class="webinar-content">
              <h3 class="webinar-title">Malaysia e-Invoicing: Storecove e-Invoicing API DEMO</h3>
              <p class="webinar-description">Live demonstration of implementing e-invoicing for the Malaysian market using Storecove's API, including practical examples and code walkthroughs.</p>
              
              <div class="webinar-topics">
                <h4>Key Topics Covered:</h4>
                <ul>
                  <li>Malaysia's e-invoicing mandate overview</li>
                  <li>Live API demonstration and implementation</li>
                  <li>Document format requirements and validation</li>
                  <li>Integration patterns and best practices</li>
                  <li>Real-world use cases and scenarios</li>
                  <li>Q&A with technical implementation examples</li>
                </ul>
              </div>

              <div class="webinar-actions">
                <a href="https://my.demio.com/recording/eojMpBFi" target="_blank" class="primary-btn">
                  <span class="btn-icon">▶️</span>
                  Watch Recording
                </a>
                <button class="secondary-btn" @click="downloadSlides('malaysia')">
                  <span class="btn-icon">📄</span>
                  Download Slides
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Resources -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Additional Learning Resources</h2>
        <div class="resource-grid">
          <div class="resource-card">
            <div class="resource-icon">📚</div>
            <div class="resource-content">
              <h3>E-invoicing Fundamentals</h3>
              <p>Start with the basics of e-invoicing, understanding different formats, networks, and compliance requirements.</p>
              <router-link to="/integration-basics-faq" class="resource-link">View FAQ →</router-link>
            </div>
          </div>

          <div class="resource-card">
            <div class="resource-icon">💻</div>
            <div class="resource-content">
              <h3>Technical Implementation</h3>
              <p>Detailed guides on API integration, document formats, and technical implementation patterns.</p>
              <router-link to="/implementation-guide" class="resource-link">View Guide →</router-link>
            </div>
          </div>

          <div class="resource-card">
            <div class="resource-icon">📋</div>
            <div class="resource-content">
              <h3>Sample Code Examples</h3>
              <p>Ready-to-use code examples in multiple programming languages for common integration scenarios.</p>
              <router-link to="/sample-code" class="resource-link">View Examples →</router-link>
            </div>
          </div>

          <div class="resource-card">
            <div class="resource-icon">🌐</div>
            <div class="resource-content">
              <h3>Regional Compliance</h3>
              <p>Stay updated on e-invoicing mandates and requirements across different countries and regions.</p>
              <a href="https://www.storecove.com/blog/" target="_blank" class="resource-link">Read Blog →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Steps -->
    <section class="content-section next-steps-section">
      <div class="container">
        <div class="next-steps-content">
          <h2>Ready to Get Started?</h2>
          <p>After watching these webinars, you'll have a solid understanding of e-invoicing requirements and implementation strategies. Here's what you can do next:</p>
          
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Explore the Documentation</h3>
                <p>Dive deeper into our comprehensive API documentation to understand the technical details.</p>
                <a href="https://www.storecove.com/docs/" target="_blank" class="step-link">View Docs →</a>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Try the Sandbox</h3>
                <p>Test your integration in our sandbox environment before going live with real transactions.</p>
                <a href="https://app.storecove.com/" target="_blank" class="step-link">Access Sandbox →</a>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Contact Our Team</h3>
                <p>Get personalized support and guidance from our integration specialists.</p>
                <a href="https://www.storecove.com/us/en/contact/" target="_blank" class="step-link">Contact Us →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback Section -->
    <section class="feedback-section">
      <div class="container">
        <h3 class="feedback-question">Was this webinar content helpful?</h3>
        <div class="feedback-buttons">
          <button class="feedback-btn" @click="submitFeedback('yes')">👍 Yes</button>
          <button class="feedback-btn" @click="submitFeedback('no')">👎 No</button>
        </div>
        <p v-if="feedbackSubmitted" style="margin-top: 1rem; color: var(--primary-color);">
          Thank you for your feedback!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GettingStartedWebinar',
  data() {
    return {
      feedbackSubmitted: false
    }
  },
  methods: {
    submitFeedback(type) {
      this.feedbackSubmitted = true;
      console.log(`Feedback submitted: ${type}`);
    },
    downloadSlides(region) {
      // In a real implementation, this would trigger a download
      alert(`Slides for ${region} webinar would be downloaded. This is a demo implementation.`);
    }
  }
}
</script>

<style scoped>
.webinar-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.webinar-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.webinar-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.webinar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.webinar-tag {
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.webinar-duration {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.webinar-title {
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.webinar-description {
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.webinar-topics {
  margin-bottom: 2rem;
}

.webinar-topics h4 {
  color: #374151;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.webinar-topics ul {
  list-style: none;
  padding: 0;
}

.webinar-topics li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #6b7280;
  line-height: 1.5;
}

.webinar-topics li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.webinar-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.resource-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease;
}

.resource-card:hover {
  transform: translateY(-2px);
}

.resource-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.resource-content h3 {
  color: #1f2937;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.resource-content p {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.resource-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.resource-link:hover {
  color: var(--primary-dark);
}

.next-steps-section {
  background: #f9fafb;
}

.next-steps-content h2 {
  text-align: center;
  color: #1f2937;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.next-steps-content > p {
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.step-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: transform 0.2s ease;
}

.step-card:hover {
  transform: translateY(-2px);
}

.step-number {
  background: var(--primary-color);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
}

.step-content h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.step-content p {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.step-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.step-link:hover {
  color: var(--primary-dark);
}

.highlight-box {
  background: #eff6ff;
  border: 1px solid #dbeafe;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.highlight-box h3 {
  color: var(--primary-dark);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.highlight-box ul {
  list-style: none;
  padding: 0;
}

.highlight-box li {
  padding: 0.25rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #374151;
  line-height: 1.5;
}

.highlight-box li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .webinar-actions {
    flex-direction: column;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
    justify-content: center;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>