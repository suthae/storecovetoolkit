<template>
  <div id="app">
    <!-- Navigation Header -->
    <nav class="nav-header">
      <div class="container">
        <div class="nav-content">
          <a href="#" class="nav-brand">
            <img src="https://www.storecove.com/typo3conf/ext/spt_package/Resources/Public/images/common/logo_prev.png" alt="Storecove" />
          </a>
          <ul class="nav-menu">
            <li><a href="https://www.storecove.com/docs/" target="_blank">Docs</a></li>
            <li><a href="https://www.storecove.com/us/en/solutions/" target="_blank">Solutions</a></li>
            <li><a href="https://www.storecove.com/us/en/integrators/" target="_blank">Integrators</a></li>
            <li><a href="https://www.storecove.com/us/en/mystorecove/" target="_blank">Resources</a></li>
            <li><a href="https://www.storecove.com/us/en/contact/" target="_blank">Contact</a></li>
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
          <a href="https://www.storecove.com/docs/" class="card" v-for="card in buildIntegrationCards" :key="card.id" target="_blank">
            <div class="card-icon">{{ card.icon }}</div>
            <div class="card-content">
              <span class="card-label">{{ card.label }}</span>
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-description">{{ card.description }}</p>
            </div>
          </a>
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
          <a href="#" class="card" v-for="card in testIntegrationCards" :key="card.id">
            <div class="card-icon">{{ card.icon }}</div>
            <div class="card-content">
              <span class="card-label">{{ card.label }}</span>
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-description">{{ card.description }}</p>
            </div>
          </a>
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
          <a href="#" class="card" v-for="card in maintainCards" :key="card.id">
            <div class="card-icon">{{ card.icon }}</div>
            <div class="card-content">
              <span class="card-label">{{ card.label }}</span>
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-description">{{ card.description }}</p>
            </div>
          </a>
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
          <a href="#" class="card" v-for="card in stayUpdatedCards" :key="card.id">
            <div class="card-icon">{{ card.icon }}</div>
            <div class="card-content">
              <span class="card-label">{{ card.label }}</span>
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-description">{{ card.description }}</p>
            </div>
          </a>
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
          <a href="https://developers.storecove.com/" class="card" target="_blank">
            <div class="card-icon">🛠️</div>
            <div class="card-content">
              <span class="card-label">External</span>
              <h3 class="card-title">Storecove Developers</h3>
              <p class="card-description">Access advanced integration examples, SDKs, webhooks documentation, and specialized tools for complex e-invoicing scenarios</p>
            </div>
          </a>
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
              <li><a href="https://www.storecove.com/docs/" target="_blank">API Documentation</a></li>
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
  name: 'App',
  data() {
    return {
      feedbackSubmitted: false,
      buildIntegrationCards: [
        {
          id: 1,
          icon: '📚',
          label: 'Documentation',
          title: 'API Documentation',
          description: 'Complete technical documentation with step-by-step guidance on implementing e-invoicing with Storecove'
        },
        {
          id: 2,
          icon: '❓',
          label: 'FAQ',
          title: 'Integration Basics',
          description: 'Frequently asked questions about e-invoicing integration fundamentals and common implementation patterns'
        },
        {
          id: 3,
          icon: '🎥',
          label: 'Video',
          title: 'Getting Started Webinar',
          description: 'Learn the basics of e-invoicing and how to set up your first integration with our platform'
        },
        {
          id: 4,
          icon: '🔌',
          label: 'Plugins',
          title: 'Platform Plugins',
          description: 'Pre-built integrations for popular accounting platforms and ERP systems'
        },
        {
          id: 5,
          icon: '💻',
          label: 'Code',
          title: 'SDK Libraries',
          description: 'Server-side libraries and SDKs available in multiple programming languages for faster integration'
        },
        {
          id: 6,
          icon: '📖',
          label: 'Guide',
          title: 'Implementation Guide',
          description: 'Comprehensive guide covering legal entities, identifiers, and compliance requirements'
        },
        {
          id: 7,
          icon: '🌐',
          label: 'Networks',
          title: 'Exchange Networks',
          description: 'Understanding Peppol, DBNAlliance, and other e-invoicing networks supported by Storecove'
        },
        {
          id: 8,
          icon: '📋',
          label: 'Examples',
          title: 'Sample Code',
          description: 'Real-world examples and code snippets for common e-invoicing scenarios and use cases'
        }
      ],
      testIntegrationCards: [
        {
          id: 1,
          icon: '🧪',
          label: 'Testing',
          title: 'Sandbox Environment',
          description: 'Test your e-invoicing integration using our comprehensive sandbox with simulated networks'
        },
        {
          id: 2,
          icon: '✅',
          label: 'Validation',
          title: 'Invoice Validation',
          description: 'Tools to validate your e-invoice formats and ensure compliance before sending'
        },
        {
          id: 3,
          icon: '🔄',
          label: 'Webhooks',
          title: 'Webhook Testing',
          description: 'Learn how to implement and test webhooks for real-time e-invoicing status updates'
        }
      ],
      maintainCards: [
        {
          id: 1,
          icon: '📊',
          label: 'Dashboard',
          title: 'Developer Dashboard',
          description: 'Monitor your e-invoicing activity, track delivery status, and manage your integration'
        },
        {
          id: 2,
          icon: '⚠️',
          label: 'Troubleshooting',
          title: 'Error Handling',
          description: 'Comprehensive guide to common error codes, troubleshooting steps, and resolution strategies'
        },
        {
          id: 3,
          icon: '📝',
          label: 'Logs',
          title: 'API Logs',
          description: 'Access detailed API logs to troubleshoot integration issues and monitor performance'
        }
      ],
      stayUpdatedCards: [
        {
          id: 1,
          icon: '📧',
          label: 'Newsletter',
          title: 'Developer Updates',
          description: 'Monthly newsletter with API updates, new features, and e-invoicing regulatory changes'
        },
        {
          id: 2,
          icon: '🔄',
          label: 'Updates',
          title: 'Platform Updates',
          description: 'Stay informed about new features, API improvements, and supported e-invoicing formats'
        },
        {
          id: 3,
          icon: '📰',
          label: 'Blog',
          title: 'Technical Blog',
          description: 'Deep-dive articles on e-invoicing trends, compliance updates, and integration best practices'
        }
      ]
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