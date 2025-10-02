<template>
  <div class="page-container">
    <!-- Header -->
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">← Back to Toolkit</router-link>
        <h1 class="page-title">Platform Plugins</h1>
        <p class="page-description">Pre-built integrations for popular accounting platforms and ERP systems</p>
      </div>
    </div>

    <!-- Coming Soon Banner -->
    <section class="coming-soon-section">
      <div class="container">
        <div class="coming-soon-content">
          <div class="coming-soon-icon">🚀</div>
          <h2>Coming Soon</h2>
          <p>We're working hard to bring you ready-to-use plugins for the most popular accounting and ERP platforms. These plugins will make e-invoicing integration even easier by providing pre-built connectors that require minimal configuration.</p>
          
          <div class="notify-section">
            <h3>Get Notified When Available</h3>
            <p>Be the first to know when our platform plugins are ready. We'll send you an email with installation instructions and setup guides.</p>
            <div class="notify-form">
              <input 
                type="email" 
                v-model="email" 
                placeholder="Enter your email address" 
                class="email-input"
                @keyup.enter="subscribeToUpdates"
              />
              <button @click="subscribeToUpdates" class="notify-btn" :disabled="!email || subscribed">
                {{ subscribed ? '✓ Subscribed' : 'Notify Me' }}
              </button>
            </div>
            <p v-if="subscribed" class="success-message">
              Thanks! We'll notify you when platform plugins are available.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Planned Plugins -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Planned Platform Integrations</h2>
        <p class="section-description">Here's what we're working on to make e-invoicing integration seamless across different platforms</p>
        
        <div class="plugin-grid">
          <!-- Accounting Software -->
          <div class="plugin-category">
            <h3 class="category-title">
              <span class="category-icon">💰</span>
              Accounting Software
            </h3>
            <div class="plugin-list">
              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/quickbooks.intuit.com" alt="QuickBooks" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>QuickBooks Online</h4>
                    <p>Direct integration with QuickBooks Online for automated e-invoice sending and receiving</p>
                  </div>
                </div>
                <span class="plugin-status">Q2 2024</span>
              </div>

              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/xero.com" alt="Xero" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>Xero</h4>
                    <p>Seamless e-invoicing integration with Xero accounting platform</p>
                  </div>
                </div>
                <span class="plugin-status">Q2 2024</span>
              </div>

              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/sage.com" alt="Sage" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>Sage Business Cloud</h4>
                    <p>Plugin for Sage Business Cloud Accounting with full e-invoicing support</p>
                  </div>
                </div>
                <span class="plugin-status">Q3 2024</span>
              </div>

              <div class="plugin-item">
                <div class="plugin-info">
                  <div class="plugin-logo plugin-placeholder">FW</div>
                  <div class="plugin-details">
                    <h4>FreshBooks</h4>
                    <p>E-invoicing capabilities integrated directly into FreshBooks workflow</p>
                  </div>
                </div>
                <span class="plugin-status">Q3 2024</span>
              </div>
            </div>
          </div>

          <!-- ERP Systems -->
          <div class="plugin-category">
            <h3 class="category-title">
              <span class="category-icon">🏢</span>
              ERP Systems
            </h3>
            <div class="plugin-list">
              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/sap.com" alt="SAP" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>SAP Business One</h4>
                    <p>Enterprise-grade e-invoicing integration for SAP Business One systems</p>
                  </div>
                </div>
                <span class="plugin-status">Q3 2024</span>
              </div>

              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/oracle.com" alt="Oracle" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>Oracle NetSuite</h4>
                    <p>Comprehensive e-invoicing solution for Oracle NetSuite environments</p>
                  </div>
                </div>
                <span class="plugin-status">Q4 2024</span>
              </div>

              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>Microsoft Dynamics 365</h4>
                    <p>Native e-invoicing integration for Microsoft Dynamics 365 Business Central</p>
                  </div>
                </div>
                <span class="plugin-status">Q4 2024</span>
              </div>

              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/odoo.com" alt="Odoo" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>Odoo</h4>
                    <p>Open-source ERP integration with full e-invoicing compliance features</p>
                  </div>
                </div>
                <span class="plugin-status">Q1 2025</span>
              </div>
            </div>
          </div>

          <!-- E-commerce Platforms -->
          <div class="plugin-category">
            <h3 class="category-title">
              <span class="category-icon">🛒</span>
              E-commerce Platforms
            </h3>
            <div class="plugin-list">
              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/shopify.com" alt="Shopify" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>Shopify</h4>
                    <p>Automated e-invoicing for Shopify stores with compliance features</p>
                  </div>
                </div>
                <span class="plugin-status">Q2 2024</span>
              </div>

              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/woocommerce.com" alt="WooCommerce" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>WooCommerce</h4>
                    <p>WordPress e-commerce plugin with integrated e-invoicing capabilities</p>
                  </div>
                </div>
                <span class="plugin-status">Q3 2024</span>
              </div>

              <div class="plugin-item">
                <div class="plugin-info">
                  <img src="https://logo.clearbit.com/magento.com" alt="Magento" class="plugin-logo" />
                  <div class="plugin-details">
                    <h4>Magento Commerce</h4>
                    <p>Enterprise e-commerce solution with comprehensive e-invoicing integration</p>
                  </div>
                </div>
                <span class="plugin-status">Q4 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Integration Options -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Need Something Custom?</h2>
        <div class="custom-options-grid">
          <div class="custom-option-card">
            <div class="custom-icon">🔧</div>
            <div class="custom-content">
              <h3>Custom Plugin Development</h3>
              <p>We can develop custom plugins for your specific platform or system. Our team has experience integrating with various APIs and can create tailored solutions.</p>
              <a href="https://www.storecove.com/us/en/contact/" target="_blank" class="custom-link">Discuss Custom Development →</a>
            </div>
          </div>

          <div class="custom-option-card">
            <div class="custom-icon">📋</div>
            <div class="custom-content">
              <h3>Request a Platform</h3>
              <p>Don't see your platform listed? Let us know what you need and we'll consider it for our roadmap based on demand and feasibility.</p>
              <button @click="showRequestForm = true" class="custom-link">Request Platform →</button>
            </div>
          </div>

          <div class="custom-option-card">
            <div class="custom-icon">💻</div>
            <div class="custom-content">
              <h3>Direct API Integration</h3>
              <p>For maximum flexibility, you can always integrate directly with our REST API. We provide comprehensive documentation and code examples.</p>
              <router-link to="/implementation-guide" class="custom-link">View Implementation Guide →</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Request Modal -->
    <div v-if="showRequestForm" class="modal-overlay" @click="showRequestForm = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Request a Platform Plugin</h3>
          <button @click="showRequestForm = false" class="close-btn">×</button>
        </div>
        <div class="modal-body">
          <p>Help us prioritize our plugin development by telling us which platform you need:</p>
          <form @submit.prevent="submitPlatformRequest">
            <div class="form-group">
              <label for="platform-name">Platform Name *</label>
              <input 
                type="text" 
                id="platform-name"
                v-model="platformRequest.name" 
                placeholder="e.g., Salesforce, HubSpot, etc."
                required
              />
            </div>
            <div class="form-group">
              <label for="platform-type">Platform Type *</label>
              <select id="platform-type" v-model="platformRequest.type" required>
                <option value="">Select type...</option>
                <option value="accounting">Accounting Software</option>
                <option value="erp">ERP System</option>
                <option value="ecommerce">E-commerce Platform</option>
                <option value="crm">CRM System</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="use-case">Use Case *</label>
              <textarea 
                id="use-case"
                v-model="platformRequest.useCase" 
                placeholder="Describe how you would use this integration..."
                rows="3"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label for="contact-email">Contact Email *</label>
              <input 
                type="email" 
                id="contact-email"
                v-model="platformRequest.email" 
                placeholder="your@email.com"
                required
              />
            </div>
            <div class="form-actions">
              <button type="button" @click="showRequestForm = false" class="secondary-btn">Cancel</button>
              <button type="submit" class="primary-btn">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Alternative Solutions -->
    <section class="content-section alternatives-section">
      <div class="container">
        <h2 class="section-title">Current Integration Options</h2>
        <p class="section-description">While we work on these plugins, here are the current ways to integrate e-invoicing:</p>
        
        <div class="alternatives-grid">
          <div class="alternative-card">
            <div class="alternative-icon">🔌</div>
            <div class="alternative-content">
              <h3>REST API Integration</h3>
              <p>Our comprehensive REST API provides full access to all e-invoicing features. Perfect for custom integrations and existing applications.</p>
              <div class="alternative-features">
                <span class="feature-tag">Full Control</span>
                <span class="feature-tag">Real-time</span>
                <span class="feature-tag">Scalable</span>
              </div>
              <a href="https://www.storecove.com/docs/" target="_blank" class="alternative-link">Explore API →</a>
            </div>
          </div>

          <div class="alternative-card">
            <div class="alternative-icon">📚</div>
            <div class="alternative-content">
              <h3>SDK Libraries</h3>
              <p>Use our SDK libraries in various programming languages to speed up your integration development process.</p>
              <div class="alternative-features">
                <span class="feature-tag">Multiple Languages</span>
                <span class="feature-tag">Type Safe</span>
                <span class="feature-tag">Well Documented</span>
              </div>
              <router-link to="/sdk-libraries" class="alternative-link">View SDKs →</router-link>
            </div>
          </div>

          <div class="alternative-card">
            <div class="alternative-icon">📋</div>
            <div class="alternative-content">
              <h3>Sample Code & Examples</h3>
              <p>Ready-to-use code examples and implementation patterns to help you get started quickly with common scenarios.</p>
              <div class="alternative-features">
                <span class="feature-tag">Copy & Paste</span>
                <span class="feature-tag">Best Practices</span>
                <span class="feature-tag">Production Ready</span>
              </div>
              <router-link to="/sample-code" class="alternative-link">View Examples →</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback Section -->
    <section class="feedback-section">
      <div class="container">
        <h3 class="feedback-question">Which platform integration would be most valuable to you?</h3>
        <div class="feedback-buttons">
          <button class="feedback-btn" @click="submitFeedback('accounting')">💰 Accounting Software</button>
          <button class="feedback-btn" @click="submitFeedback('erp')">🏢 ERP Systems</button>
          <button class="feedback-btn" @click="submitFeedback('ecommerce')">🛒 E-commerce Platforms</button>
          <button class="feedback-btn" @click="submitFeedback('other')">🔧 Other/Custom</button>
        </div>
        <p v-if="feedbackSubmitted" style="margin-top: 1rem; color: var(--primary-color);">
          Thank you for your input! This helps us prioritize our development.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PlatformPlugins',
  data() {
    return {
      email: '',
      subscribed: false,
      feedbackSubmitted: false,
      showRequestForm: false,
      platformRequest: {
        name: '',
        type: '',
        useCase: '',
        email: ''
      }
    }
  },
  methods: {
    subscribeToUpdates() {
      if (this.email && !this.subscribed) {
        this.subscribed = true;
        console.log(`Subscribed email: ${this.email}`);
        // Here you would typically send the email to your newsletter service
      }
    },
    submitFeedback(type) {
      this.feedbackSubmitted = true;
      console.log(`Platform feedback: ${type}`);
    },
    submitPlatformRequest() {
      console.log('Platform request submitted:', this.platformRequest);
      this.showRequestForm = false;
      alert('Thank you for your request! We\'ll consider it for our roadmap and get back to you.');
      // Reset form
      this.platformRequest = {
        name: '',
        type: '',
        useCase: '',
        email: ''
      };
    }
  }
}
</script>

<style scoped>
.coming-soon-section {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  padding: 4rem 0;
}

.coming-soon-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.coming-soon-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.coming-soon-content h2 {
  color: #1f2937;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.coming-soon-content > p {
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.notify-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.notify-section h3 {
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.notify-section > p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.notify-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.email-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
}

.email-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.notify-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.notify-btn:hover:not(:disabled) {
  background: var(--primary-dark);
}

.notify-btn:disabled {
  background: #10b981;
  cursor: not-allowed;
}

.success-message {
  color: #10b981;
  font-weight: 500;
  margin: 0;
}

.plugin-grid {
  display: grid;
  gap: 3rem;
  margin-top: 2rem;
}

.plugin-category {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.category-icon {
  font-size: 1.5rem;
}

.plugin-list {
  display: grid;
  gap: 1rem;
}

.plugin-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.plugin-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.plugin-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.plugin-logo {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: contain;
  background: white;
  padding: 8px;
  border: 1px solid #e5e7eb;
}

.plugin-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6b7280;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.plugin-details h4 {
  color: #1f2937;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.plugin-details p {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

.plugin-status {
  background: #fef3c7;
  color: #92400e;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.custom-options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.custom-option-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: transform 0.2s ease;
}

.custom-option-card:hover {
  transform: translateY(-2px);
}

.custom-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.custom-content h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.custom-content p {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.custom-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.custom-link:hover {
  color: var(--primary-dark);
}

.alternatives-section {
  background: #f9fafb;
}

.alternatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.alternative-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.alternative-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.alternative-content h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.alternative-content p {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.alternative-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  background: #eff6ff;
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.alternative-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.alternative-link:hover {
  color: var(--primary-dark);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.close-btn:hover {
  background: #f3f4f6;
}

.modal-body {
  padding: 1.5rem;
}

.modal-body p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #374151;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .notify-form {
    flex-direction: column;
  }
  
  .plugin-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .plugin-info {
    width: 100%;
  }
  
  .custom-options-grid,
  .alternatives-grid {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
  }

  .modal-overlay {
    padding: 1rem;
  }
}
</style>