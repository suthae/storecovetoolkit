<template>
  <div>
    <!-- Navigation Header -->
    <nav class="nav-header">
      <div class="container">
        <div class="nav-content">
          <router-link to="/" class="nav-brand">
            <img src="https://www.storecove.com/typo3conf/ext/spt_package/Resources/Public/images/common/logo_prev.png" alt="Storecove" />
          </router-link>
          <ul class="nav-menu">
            <li><router-link to="/integration-basics-faq">FAQ</router-link></li>
            <li><router-link to="/implementation-guide">Guide</router-link></li>
            <li><router-link to="/developer-dashboard">Dashboard</router-link></li>
            <li><router-link to="/webhook-testing">Webhooks</router-link></li>
          </ul>
          <div class="nav-actions">
            <a href="https://www.storecove.com/us/en/start-now/" target="_blank" class="start-now-btn">Start now</a>
          </div>
          <input type="text" class="search-box" placeholder="Search documentation..." />
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>E-Invoicing Integration Toolkit</h1>
            <p>Everything you need to integrate e-invoicing capabilities into your platform and help your clients go digital</p>
          </div>
          <div class="hero-image">
            <div class="hero-icon">🧾</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Build Integration Section -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Get Started with E-invoicing</h2>
          <p>Comprehensive tools and resources to help you build your e-invoicing integration with the Storecove platform</p>
        </div>
        
        <div class="card-grid">
          <router-link to="/integration-basics-faq" class="card">
            <div class="card-icon">❓</div>
            <div class="card-content">
              <span class="card-label">FAQ</span>
              <h3 class="card-title">Integration Basics</h3>
              <p class="card-description">Frequently asked questions about e-invoicing integration fundamentals and common implementation patterns</p>
            </div>
          </router-link>

          <router-link to="/getting-started-webinar" class="card">
            <div class="card-icon">🎥</div>
            <div class="card-content">
              <span class="card-label">Video</span>
              <h3 class="card-title">Getting Started Webinar</h3>
              <p class="card-description">Learn the basics of e-invoicing and how to set up your first integration with our platform</p>
            </div>
          </router-link>

          <router-link to="/platform-plugins" class="card">
            <div class="card-icon">🔌</div>
            <div class="card-content">
              <span class="card-label">Coming Soon</span>
              <h3 class="card-title">Platform Plugins</h3>
              <p class="card-description">Pre-built integrations for popular accounting platforms and ERP systems</p>
            </div>
          </router-link>

          <router-link to="/sdk-libraries" class="card">
            <div class="card-icon">💻</div>
            <div class="card-content">
              <span class="card-label">Code</span>
              <h3 class="card-title">SDK Libraries</h3>
              <p class="card-description">Server-side libraries and SDKs available in multiple programming languages for faster integration</p>
            </div>
          </router-link>

          <router-link to="/implementation-guide" class="card">
            <div class="card-icon">📖</div>
            <div class="card-content">
              <span class="card-label">Guide</span>
              <h3 class="card-title">Implementation Guide</h3>
              <p class="card-description">Comprehensive guide covering legal entities, identifiers, and compliance requirements</p>
            </div>
          </router-link>

          <router-link to="/sample-code" class="card">
            <div class="card-icon">📋</div>
            <div class="card-content">
              <span class="card-label">Examples</span>
              <h3 class="card-title">Sample Code</h3>
              <p class="card-description">Real-world examples and code snippets for common e-invoicing scenarios and use cases</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Test Integration Section -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Test Your Implementation</h2>
          <p>Learn how to test your e-invoicing integration before going live with real transactions</p>
        </div>
        
        <div class="card-grid">
          <div class="card coming-soon-card">
            <div class="card-icon">🧪</div>
            <div class="card-content">
              <span class="card-label coming-soon-label">Coming Soon</span>
              <h3 class="card-title">Sandbox Environment</h3>
              <p class="card-description">Test your e-invoicing integration in a safe sandbox environment before going live with real transactions</p>
            </div>
          </div>

          <div class="card coming-soon-card">
            <div class="card-icon">✅</div>
            <div class="card-content">
              <span class="card-label coming-soon-label">Coming Soon</span>
              <h3 class="card-title">Invoice Validation</h3>
              <p class="card-description">Comprehensive validation rules from our platform to ensure your e-invoice formats are compliant before sending</p>
            </div>
          </div>

          <router-link to="/webhook-testing" class="card">
            <div class="card-icon">🔄</div>
            <div class="card-content">
              <span class="card-label">Guide</span>
              <h3 class="card-title">Webhook Testing</h3>
              <p class="card-description">Learn how to implement and test webhooks for real-time e-invoicing status updates with Python examples</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Maintain & Troubleshoot Section -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Go Live & Maintain</h2>
          <p>Tools and resources to help you maintain and troubleshoot your e-invoicing integration in production</p>
        </div>
        
        <div class="card-grid">
          <router-link to="/developer-dashboard" class="card">
            <div class="card-icon">📊</div>
            <div class="card-content">
              <span class="card-label">Dashboard</span>
              <h3 class="card-title">Developer Dashboard</h3>
              <p class="card-description">Monitor e-invoicing activity, track delivery status, and manage your integration with comprehensive administrative tools</p>
            </div>
          </router-link>

          <router-link to="/error-handling" class="card">
            <div class="card-icon">⚠️</div>
            <div class="card-content">
              <span class="card-label">Troubleshooting</span>
              <h3 class="card-title">Error Handling</h3>
              <p class="card-description">Comprehensive guide to Storecove API error codes, troubleshooting steps, and resolution strategies</p>
            </div>
          </router-link>

          <router-link to="/api-logs" class="card">
            <div class="card-icon">📝</div>
            <div class="card-content">
              <span class="card-label">Monitoring</span>
              <h3 class="card-title">API Logs</h3>
              <p class="card-description">Best practices for API logging, monitoring approaches, and real-world examples for production systems</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Stay Updated Section -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Stay Compliant & Updated</h2>
          <p>Keep informed about regulatory changes, new features, and best practices in e-invoicing</p>
        </div>
        
        <div class="card-grid">
          <div class="card coming-soon-card">
            <div class="card-icon">📧</div>
            <div class="card-content">
              <span class="card-label coming-soon-label">Coming Soon</span>
              <h3 class="card-title">Developer Updates</h3>
              <p class="card-description">Monthly newsletter with API updates, new features, and e-invoicing regulatory changes</p>
            </div>
          </div>

          <div class="card coming-soon-card">
            <div class="card-icon">🔄</div>
            <div class="card-content">
              <span class="card-label coming-soon-label">Coming Soon</span>
              <h3 class="card-title">Platform Updates</h3>
              <p class="card-description">Stay informed about new features, API improvements, and supported e-invoicing formats</p>
            </div>
          </div>

          <div class="card coming-soon-card">
            <div class="card-icon">📰</div>
            <div class="card-content">
              <span class="card-label coming-soon-label">Coming Soon</span>
              <h3 class="card-title">Technical Blog</h3>
              <p class="card-description">Deep-dive articles on e-invoicing trends, compliance updates, and integration best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Resources Section -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Advanced Developer Resources</h2>
          <p>Comprehensive developer tools, examples, and advanced integration patterns in one place</p>
        </div>
        
        <div class="card-grid">
          <div class="card coming-soon-card">
            <div class="card-icon">🛠️</div>
            <div class="card-content">
              <span class="card-label coming-soon-label">Coming Soon</span>
              <h3 class="card-title">Advanced Tools</h3>
              <p class="card-description">Advanced integration examples, specialized tools, and complex e-invoicing scenarios documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback Section -->
    <section class="feedback-section">
      <div class="container">
        <h3 class="feedback-question">Was this toolkit helpful?</h3>
        <div class="feedback-buttons">
          <button class="feedback-btn" @click="submitFeedback('yes')">👍 Yes</button>
          <button class="feedback-btn" @click="submitFeedback('no')">👎 No</button>
        </div>
        <p v-if="feedbackSubmitted" style="margin-top: 1rem; color: var(--primary-color);">
          Thank you for your feedback!
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Solutions</h3>
            <ul class="footer-links">
              <li><a href="https://www.storecove.com/us/en/solutions/e-invoicing-api/" target="_blank">E-invoicing API</a></li>
              <li><a href="https://www.storecove.com/us/en/solutions/peppol-access-point/" target="_blank">PEPPOL Access Point</a></li>
              <li><a href="https://www.storecove.com/us/en/solutions/global-e-invoicing/" target="_blank">Global E-invoicing</a></li>
              <li><a href="https://www.storecove.com/us/en/integrators/become-an-integrator/" target="_blank">Become an Integrator</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Networks</h3>
            <ul class="footer-links">
              <li><a href="https://www.storecove.com/us/en/peppol/" target="_blank">Peppol</a></li>
              <li><a href="https://www.storecove.com/us/en/solutions/dbna/" target="_blank">DBNAlliance (USA)</a></li>
              <li><a href="https://www.storecove.com/us/en/solutions/finland/" target="_blank">Finvoice</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Resources</h3>
            <ul class="footer-links">
              <li><a href="https://www.storecove.com/blog/" target="_blank">Blog</a></li>
              <li><a href="https://www.storecove.com/us/en/webinars/" target="_blank">Webinars</a></li>
              <li><a href="https://www.storecove.com/us/en/whitepapers/" target="_blank">White Papers</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Support</h3>
            <ul class="footer-links">
              <li><a href="https://help.storecove.com/en/" target="_blank">Help Center</a></li>
              <li><a href="https://www.storecove.com/us/en/contact/" target="_blank">Contact Us</a></li>
              <li><a href="mailto:info@storecove.com">info@storecove.com</a></li>
              <li><a href="https://app.storecove.com/users/sign_in" target="_blank">Login</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <img src="https://www.storecove.com/fileadmin/user_upload/Logo_white_3325x765.png" alt="Storecove" style="height: 40px; width: auto;" />
          </div>
          <p>&copy; 2024 Storecove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      feedbackSubmitted: false
    }
  },
  methods: {
    submitFeedback(type) {
      this.feedbackSubmitted = true;
      console.log(`Feedback submitted: ${type}`);
      // Here you would typically send the feedback to your analytics or feedback system
    }
  }
}
</script>