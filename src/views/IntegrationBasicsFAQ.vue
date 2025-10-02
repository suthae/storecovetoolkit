<template>
  <div class="faq-page">
    <!-- Navigation Header -->
    <nav class="nav-header">
      <div class="container">
        <div class="nav-content">
          <router-link to="/" class="nav-brand">
            <img src="https://www.storecove.com/typo3conf/ext/spt_package/Resources/Public/images/common/logo_prev.png" alt="Storecove" />
          </router-link>
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

    <!-- Breadcrumb -->
    <section class="breadcrumb-section">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/">Integration Toolkit</router-link>
          <span class="separator">></span>
          <span class="current">Integration Basics FAQ</span>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <div class="container">
        <div class="content-wrapper">
          <h1 class="page-title">Integration Basics FAQ</h1>
          <p class="page-description">
            Frequently asked questions about e-invoicing integration fundamentals and common implementation patterns with Storecove.
          </p>

          <div class="faq-sections">
            
            <!-- Getting Started Section -->
            <div class="faq-section">
              <h2 class="section-title">🚀 Getting Started</h2>
              
              <div class="faq-item">
                <h3 class="faq-question">What is Storecove and how does e-invoicing work?</h3>
                <div class="faq-answer">
                  <p>Storecove is a global e-invoicing platform that enables businesses to send and receive electronic invoices worldwide. We provide:</p>
                  <ul>
                    <li><strong>Global Compliance:</strong> Automatic compliance with local tax authorities and regulations</li>
                    <li><strong>Multiple Networks:</strong> Connection to Peppol, DBNAlliance, and country-specific networks</li>
                    <li><strong>Format Conversion:</strong> Automatic conversion to local e-invoice formats (UBL, CII, FatturaPA, etc.)</li>
                    <li><strong>Unified API:</strong> Single integration point for worldwide e-invoicing</li>
                  </ul>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">How long does it take to integrate with Storecove?</h3>
                <div class="faq-answer">
                  <p>Integration typically takes <strong>1-6 weeks</strong> depending on your requirements:</p>
                  <ul>
                    <li><strong>Basic Integration:</strong> 1-2 weeks for simple sending functionality</li>
                    <li><strong>Full Integration:</strong> 3-4 weeks including receiving and advanced features</li>
                    <li><strong>Enterprise Integration:</strong> 4-6 weeks with custom workflows and multiple legal entities</li>
                  </ul>
                  <p>We recommend using our sandbox environment for development and testing.</p>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">What are the prerequisites for integration?</h3>
                <div class="faq-answer">
                  <p>To integrate with Storecove, you need:</p>
                  <ul>
                    <li><strong>Technical:</strong> RESTful JSON experience and HTTPS capability</li>
                    <li><strong>Business:</strong> Working ERP or accounting system</li>
                    <li><strong>Access:</strong> Storecove sandbox account and API key</li>
                    <li><strong>Legal Entity:</strong> Registered business with valid tax identifiers</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- API & Authentication Section -->
            <div class="faq-section">
              <h2 class="section-title">🔐 API & Authentication</h2>
              
              <div class="faq-item">
                <h3 class="faq-question">How do I authenticate with the Storecove API?</h3>
                <div class="faq-answer">
                  <p>Storecove uses Bearer token authentication:</p>
                  <div class="code-block">
                    <pre><code>Authorization: Bearer YOUR_API_KEY_HERE</code></pre>
                  </div>
                  <p>Create API keys in your Storecove dashboard under <strong>API Keys</strong>. Never expose API keys in client-side code.</p>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">What is the difference between Sandbox and Production environments?</h3>
                <div class="faq-answer">
                  <p><strong>Sandbox Environment:</strong></p>
                  <ul>
                    <li>Free testing environment with test networks</li>
                    <li>Webhook simulation capabilities</li>
                    <li>Connected to test instances of Peppol, DBNAlliance, and tax authorities</li>
                    <li>Use for development and testing</li>
                  </ul>
                  <p><strong>Production Environment:</strong></p>
                  <ul>
                    <li>Live environment for real business transactions</li>
                    <li>Connected to live networks and tax authorities</li>
                    <li>Requires separate API keys and legal entity approval</li>
                  </ul>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">How do I handle API errors and rate limiting?</h3>
                <div class="faq-answer">
                  <p>Follow these best practices:</p>
                  <ul>
                    <li><strong>HTTP 4xx errors:</strong> Client-side errors, check your request format</li>
                    <li><strong>HTTP 5xx errors:</strong> Server-side errors, retry with exponential backoff</li>
                    <li><strong>Rate Limiting:</strong> Implement job queues for high-volume sending</li>
                    <li><strong>Idempotency:</strong> Use the idempotencyGuid field to prevent duplicate submissions</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Legal Entities Section -->
            <div class="faq-section">
              <h2 class="section-title">🏢 Legal Entities & Identifiers</h2>
              
              <div class="faq-item">
                <h3 class="faq-question">What is a Legal Entity and why do I need one?</h3>
                <div class="faq-answer">
                  <p>A Legal Entity represents your company in the e-invoicing ecosystem:</p>
                  <ul>
                    <li><strong>Identity:</strong> Contains your company's legal and tax identifiers</li>
                    <li><strong>Sending:</strong> Required to send invoices (acts_as_sender: true)</li>
                    <li><strong>Receiving:</strong> Advertises your identifiers on networks to receive invoices</li>
                    <li><strong>Compliance:</strong> Ensures proper business identification for tax authorities</li>
                  </ul>
                  <p>Create Legal Entities through the Storecove UI at <a href="https://app.storecove.com/senders" target="_blank">app.storecove.com/senders</a></p>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">What identifiers do I need for my country?</h3>
                <div class="faq-answer">
                  <p>Required identifiers vary by country. Common examples:</p>
                  <ul>
                    <li><strong>EU Countries:</strong> VAT number (e.g., NL:VAT, DE:VAT)</li>
                    <li><strong>Netherlands:</strong> KVK number + VAT number</li>
                    <li><strong>Germany:</strong> VAT number (for business) or LWID (for government)</li>
                    <li><strong>United States:</strong> EIN number, DUNS, or GLN</li>
                    <li><strong>Singapore:</strong> UEN number</li>
                    <li><strong>Australia:</strong> ABN number</li>
                  </ul>
                  <p>Check our <a href="https://www.storecove.com/docs/#sender-identifiers" target="_blank">Sender Identifiers guide</a> for complete requirements.</p>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">How long does Legal Entity approval take?</h3>
                <div class="faq-answer">
                  <p>Legal Entity approval typically takes:</p>
                  <ul>
                    <li><strong>Standard countries:</strong> Up to 24 hours</li>
                    <li><strong>Special countries (SG, IT, FI, ES, PT):</strong> May require additional setup - contact support first</li>
                    <li><strong>Peppol advertisement:</strong> Additional 24-48 hours to appear in network directory</li>
                  </ul>
                  <p>You can start testing immediately, but wait for approval before going live.</p>
                </div>
              </div>
            </div>

            <!-- Document Sending Section -->
            <div class="faq-section">
              <h2 class="section-title">📤 Sending Documents</h2>
              
              <div class="faq-item">
                <h3 class="faq-question">What is the invoice sending workflow?</h3>
                <div class="faq-answer">
                  <p>Storecove follows a 5-phase sending workflow:</p>
                  <ol>
                    <li><strong>CTC Compliance:</strong> Tax authority clearance (for countries like Italy, India)</li>
                    <li><strong>Tax Compliance:</strong> Integration with tax filing systems</li>
                    <li><strong>Exchange Networks:</strong> Peppol, DBNAlliance routing</li>
                    <li><strong>Static Routes:</strong> Direct connections (Finvoice, etc.)</li>
                    <li><strong>Email Fallback:</strong> Email with country-specific attachments</li>
                  </ol>
                  <p>Storecove automatically determines the best route for each invoice.</p>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">What tax systems are supported?</h3>
                <div class="faq-answer">
                  <p>Storecove supports two tax calculation systems:</p>
                  <ul>
                    <li><strong>tax_line_percentages (Recommended):</strong> Tax calculated from percentages</li>
                    <li><strong>tax_line_amounts:</strong> Pre-calculated tax amounts</li>
                  </ul>
                  <p>Most receivers only support percentage-based taxes, so use <code>tax_line_percentages</code> when possible.</p>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">How do I know if my invoice was delivered successfully?</h3>
                <div class="faq-answer">
                  <p>Storecove provides multiple delivery confirmations:</p>
                  <ul>
                    <li><strong>Webhooks:</strong> Real-time status updates via HTTP callbacks</li>
                    <li><strong>Status Events:</strong> cleared, succeeded, acknowledged, accepted, etc.</li>
                    <li><strong>Sending Evidence:</strong> Retrieve delivery proof via API</li>
                    <li><strong>Response Documents:</strong> Invoice responses from recipients</li>
                  </ul>
                  <p>Configure webhooks for automatic status notifications.</p>
                </div>
              </div>
            </div>

            <!-- Networks & Routing Section -->
            <div class="faq-section">
              <h2 class="section-title">🌐 Networks & Routing</h2>
              
              <div class="faq-item">
                <h3 class="faq-question">What e-invoicing networks does Storecove support?</h3>
                <div class="faq-answer">
                  <p>Storecove connects to major global networks:</p>
                  <ul>
                    <li><strong>Peppol:</strong> European and international network</li>
                    <li><strong>DBNAlliance:</strong> US-based network</li>
                    <li><strong>Country-specific:</strong> Italy SDI, Singapore IRAS, Malaysia LHDNM</li>
                    <li><strong>Legacy networks:</strong> Finvoice (Finland), Svefaktura (Sweden)</li>
                  </ul>
                  <p>If the recipient isn't on a network, we send via email with compliant attachments.</p>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">How do I find out if a recipient can receive e-invoices?</h3>
                <div class="faq-answer">
                  <p>Use the Discovery API to check recipient capabilities:</p>
                  <div class="code-block">
                    <pre><code>POST /api/v2/discovery/receives
{
  "documentTypes": ["invoice"],
  "network": "peppol",
  "scheme": "NL:VAT",
  "identifier": "NL123456789B01"
}</code></pre>
                  </div>
                  <p>Returns whether the recipient can receive electronic invoices and via which networks.</p>
                </div>
              </div>
            </div>

            <!-- Troubleshooting Section -->
            <div class="faq-section">
              <h2 class="section-title">🔧 Troubleshooting</h2>
              
              <div class="faq-item">
                <h3 class="faq-question">Why is my invoice not being sent?</h3>
                <div class="faq-answer">
                  <p>Common issues and solutions:</p>
                  <ul>
                    <li><strong>Invalid Legal Entity:</strong> Ensure your Legal Entity is approved</li>
                    <li><strong>Missing identifiers:</strong> Check recipient has valid routing identifiers</li>
                    <li><strong>No routing found:</strong> Add email address as fallback</li>
                    <li><strong>Invalid JSON:</strong> Validate your invoice structure</li>
                    <li><strong>Tax calculation errors:</strong> Ensure amounts add up correctly</li>
                  </ul>
                  <p>Check the webhook events for detailed error messages.</p>
                </div>
              </div>

              <div class="faq-item">
                <h3 class="faq-question">How do I debug webhook issues?</h3>
                <div class="faq-answer">
                  <p>Webhook troubleshooting steps:</p>
                  <ul>
                    <li><strong>Endpoint accessibility:</strong> Ensure your webhook URL is publicly accessible</li>
                    <li><strong>HTTP 200 response:</strong> Always return 200 OK for successful processing</li>
                    <li><strong>Retry mechanism:</strong> Storecove retries for 5 days if non-200 response</li>
                    <li><strong>Testing:</strong> Use webhook.site for development testing</li>
                  </ul>
                  <p>For pull-mode webhooks, use the WebhookInstances API to retrieve events.</p>
                </div>
              </div>
            </div>

          </div>

          <!-- Support Section -->
          <div class="support-section">
            <h2>Need More Help?</h2>
            <div class="support-cards">
              <div class="support-card">
                <h3>📚 Documentation</h3>
                <p>Comprehensive API documentation and guides</p>
                <a href="https://www.storecove.com/docs/" target="_blank" class="support-link">View Docs</a>
              </div>
              <div class="support-card">
                <h3>💬 Support</h3>
                <p>Get help from our technical support team</p>
                <a href="mailto:apisupport@storecove.com" class="support-link">Contact Support</a>
              </div>
              <div class="support-card">
                <h3>🎯 Sandbox</h3>
                <p>Test your integration in our sandbox environment</p>
                <a href="https://app.storecove.com/" target="_blank" class="support-link">Access Sandbox</a>
              </div>
            </div>
          </div>

        </div>
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
  name: 'IntegrationBasicsFAQ',
  mounted() {
    // Add click handlers for FAQ items
    this.setupFAQInteractivity()
  },
  methods: {
    setupFAQInteractivity() {
      const faqQuestions = document.querySelectorAll('.faq-question')
      faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
          const answer = question.nextElementSibling
          const isOpen = answer.style.display === 'block'
          
          // Close all other answers
          document.querySelectorAll('.faq-answer').forEach(a => {
            a.style.display = 'none'
          })
          
          // Toggle current answer
          if (!isOpen) {
            answer.style.display = 'block'
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.breadcrumb-section {
  background: var(--bg-gray);
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-light);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: var(--primary-color);
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.separator {
  color: var(--text-light);
}

.current {
  color: var(--text-medium);
  font-weight: 500;
}

.main-content {
  flex: 1;
  padding: 3rem 0;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.1rem;
  color: var(--text-medium);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.faq-sections {
  space-y: 3rem;
}

.faq-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-color);
}

.faq-item {
  background: var(--white);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.faq-question {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
  padding: 1.5rem;
  margin: 0;
  cursor: pointer;
  border-bottom: 1px solid var(--border-light);
  transition: background-color 0.2s;
  position: relative;
}

.faq-question:hover {
  background-color: var(--bg-gray);
}

.faq-question::after {
  content: '+';
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 300;
}

.faq-answer {
  padding: 1.5rem;
  background: var(--white);
  display: none;
}

.faq-answer p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.faq-answer ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.faq-answer li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.faq-answer strong {
  color: var(--text-dark);
  font-weight: 600;
}

.code-block {
  background: #f8f9fa;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  color: #333;
}

.support-section {
  background: var(--bg-gray);
  padding: 3rem;
  border-radius: var(--border-radius);
  margin-top: 4rem;
  text-align: center;
}

.support-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 2rem;
}

.support-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.support-card {
  background: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
}

.support-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.support-card p {
  color: var(--text-medium);
  margin-bottom: 1.5rem;
}

.support-link {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
}

.support-link:hover {
  background: var(--primary-dark);
  color: white;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .content-wrapper {
    padding: 0 1rem;
  }
  
  .support-section {
    padding: 2rem 1rem;
  }
  
  .support-cards {
    grid-template-columns: 1fr;
  }
}
</style>