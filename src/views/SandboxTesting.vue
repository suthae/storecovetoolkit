<template>
  <div class="sandbox-testing">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Sandbox Environment</h1>
          <p>Complete testing environment with sample data, validation tools, and webhook testing capabilities for safe integration development</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section">
      <div class="container">
        <!-- Introduction Section -->
        <div class="intro-section">
          <h2>Storecove Sandbox Environment</h2>
          <p>The Storecove sandbox provides a complete testing environment where you can safely develop and test your e-invoicing integration without affecting real transactions or sending actual invoices to recipients.</p>
          
          <div class="highlight-box">
            <h3>Sandbox Features</h3>
            <ul>
              <li><strong>Safe Testing:</strong> No real invoices are sent to actual recipients</li>
              <li><strong>Complete API Access:</strong> Full access to all Storecove API endpoints</li>
              <li><strong>Test Data:</strong> Pre-configured test recipients and legal entities</li>
              <li><strong>Webhook Testing:</strong> Real webhook events for integration testing</li>
              <li><strong>Format Validation:</strong> Test UBL, CII, and other e-invoice formats</li>
              <li><strong>Network Simulation:</strong> Simulate different delivery networks (Peppol, AS4, etc.)</li>
            </ul>
          </div>
        </div>

        <!-- Getting Started Section -->
        <div class="section-content">
          <h2 class="section-title">Getting Started with Sandbox</h2>
          
          <div class="setup-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Create Sandbox Account</h3>
                <p>Sign up for a free Storecove sandbox account to get access to the testing environment.</p>
                <div class="code-block">
                  <div class="code-header">
                    <span class="code-language">Sandbox Registration</span>
                    <button @click="copySandboxUrl" class="copy-btn">Copy URL</button>
                  </div>
                  <pre id="sandbox-url"><code>https://www.storecove.com/us/en/start-now/
# Free sandbox account with full API access
# No pyment required for testing</code></pre>
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Get Sandbox API Credentials</h3>
                <p>Generate your sandbox API key from the developer dashboard to authenticate your requests.</p>
                <div class="sandbox-credentials">
                  <div class="credential-item">
                    <strong>Base URL:</strong> <code>https://api.sandbox.storecove.com/api/v2</code>
                  </div>
                  <div class="credential-item">
                    <strong>Authentication:</strong> <code>Bearer YOUR_SANDBOX_API_KEY</code>
                  </div>
                  <div class="credential-item">
                    <strong>Rate Limits:</strong> <code>1000 requests/hour (testing)</code>
                  </div>
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Configure Test Environment</h3>
                <p>Set up your development environment to use sandbox endpoints and test credentials.</p>
                <div class="code-block">
                  <div class="code-header">
                    <span class="code-language">Environment Configuration</span>
                    <button @click="copyCode('env-config')" class="copy-btn">Copy</button>
                  </div>
                  <pre id="env-config"><code># Environment Variables (.env)
STORECOVE_API_BASE_URL=https://api.sandbox.storecove.com/api/v2
STORECOVE_API_KEY=your_sandbox_api_key_here
STORECOVE_WEBHOOK_SECRET=your_webhook_secret_here
ENVIRONMENT=sandbox
DEBUG=true</code></pre>
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>Test API Connection</h3>
                <p>Verify your sandbox setup by making a test API call to check connectivity.</p>
                <div class="code-block">
                  <div class="code-header">
                    <span class="code-language">Test Connection</span>
                    <button @click="copyCode('test-connection')" class="copy-btn">Copy</button>
                  </div>
                  <pre id="test-connection"><code>curl -X GET "https://api.sandbox.storecove.com/api/v2/legal_entities" \
  -H "Authorization: Bearer YOUR_SANDBOX_API_KEY" \
  -H "Content-Type: application/json"

# Expected Response: List of available test legal entities</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Test Data Section -->
        <div class="section-content">
          <h2 class="section-title">Sandbox Test Data</h2>
          <p class="section-description">Pre-configured test entities and recipients for comprehensive testing scenarios</p>
          
          <div class="test-data-grid">
            <div class="test-data-card">
              <div class="test-data-icon">🏢</div>
              <div class="test-data-content">
                <h3>Test Legal Entities</h3>
                <p>Ready-to-use legal entities for different countries and business scenarios</p>
                <div class="test-entities">
                  <div class="entity-item">
                    <strong>EU Entity:</strong> <code>entity_eu_test_001</code>
                    <br><span class="entity-details">VAT: NL123456789B01, Country: Netherlands</span>
                  </div>
                  <div class="entity-item">
                    <strong>US Entity:</strong> <code>entity_us_test_001</code>
                    <br><span class="entity-details">EIN: 12-3456789, Country: United States</span>
                  </div>
                  <div class="entity-item">
                    <strong>UK Entity:</strong> <code>entity_uk_test_001</code>
                    <br><span class="entity-details">VAT: GB123456789, Country: United Kingdom</span>
                  </div>
                  <div class="entity-item">
                    <strong>DE Entity:</strong> <code>entity_de_test_001</code>
                    <br><span class="entity-details">VAT: DE123456789, Country: Germany</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="test-data-card">
              <div class="test-data-icon">👥</div>
              <div class="test-data-content">
                <h3>Test Recipients</h3>
                <p>Simulated recipients that respond to different testing scenarios</p>
                <div class="test-recipients">
                  <div class="recipient-item">
                    <strong>Success Recipient:</strong> <code>test-success@storecove.com</code>
                    <br><span class="recipient-details">Always accepts invoices successfully</span>
                  </div>
                  <div class="recipient-item">
                    <strong>Rejection Recipient:</strong> <code>test-reject@storecove.com</code>
                    <br><span class="recipient-details">Rejects invoices with validation errors</span>
                  </div>
                  <div class="recipient-item">
                    <strong>Timeout Recipient:</strong> <code>test-timeout@storecove.com</code>
                    <br><span class="recipient-details">Simulates network timeouts and delays</span>
                  </div>
                  <div class="recipient-item">
                    <strong>Peppol Recipient:</strong> <code>9999:test-peppol@storecove.com</code>
                    <br><span class="recipient-details">Tests Peppol network delivery</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="test-data-card">
              <div class="test-data-icon">🔢</div>
              <div class="test-data-content">
                <h3>Test Identifiers</h3>
                <p>Valid test identifiers for different e-invoicing networks</p>
                <div class="test-identifiers">
                  <div class="identifier-item">
                    <strong>Peppol ID:</strong> <code>9999:test-peppol-001</code>
                    <br><span class="identifier-details">Test Peppol participant identifier</span>
                  </div>
                  <div class="identifier-item">
                    <strong>VAT Number:</strong> <code>NL999999999B01</code>
                    <br><span class="identifier-details">Netherlands test VAT number</span>
                  </div>
                  <div class="identifier-item">
                    <strong>GLN:</strong> <code>9999999999999</code>
                    <br><span class="identifier-details">Global Location Number for testing</span>
                  </div>
                  <div class="identifier-item">
                    <strong>DUNS:</strong> <code>999999999</code>
                    <br><span class="identifier-details">Test DUNS number</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testing Scenarios Section -->
        <div class="section-content">
          <h2 class="section-title">Common Testing Scenarios</h2>
          
          <div class="scenarios-grid">
            <div class="scenario-card">
              <div class="scenario-header">
                <span class="scenario-icon">✅</span>
                <h3>Successful Invoice Flow</h3>
              </div>
              <div class="scenario-content">
                <p>Test the complete successful invoice delivery process from submission to acceptance.</p>
                <div class="scenario-steps">
                  <div class="scenario-step">1. Submit invoice to success recipient</div>
                  <div class="scenario-step">2. Receive "document.sent" webhook</div>
                  <div class="scenario-step">3. Receive "document.delivered" webhook</div>
                  <div class="scenario-step">4. Receive "document.accepted" webhook</div>
                </div>
                <div class="code-block">
                  <div class="code-header">
                    <span class="code-language">Success Test Example</span>
                    <button @click="copyCode('success-test')" class="copy-btn">Copy</button>
                  </div>
                  <pre id="success-test"><code>POST /document_submissions
{
  "legalEntityId": "entity_eu_test_001",
  "routing": {
    "emails": ["test-success@storecove.com"]
  },
  "document": {
    "documentType": "Invoice",
    "invoice": {
      "invoiceNumber": "TEST-SUCCESS-001",
      "issueDate": "2024-01-15",
      "dueDate": "2024-02-15",
      "documentCurrencyCode": "EUR",
      "accountingCustomerParty": {
        "party": {
          "companyName": "Test Success Company"
        }
      },
      "invoiceLines": [{
        "lineId": "1",
        "name": "Test Item",
        "quantity": 1,
        "itemPrice": 100.00,
        "amountExcludingTax": 100.00
      }]
    }
  }
}</code></pre>
                </div>
              </div>
            </div>

            <div class="scenario-card">
              <div class="scenario-header">
                <span class="scenario-icon">❌</span>
                <h3>Invoice Rejection Flow</h3>
              </div>
              <div class="scenario-content">
                <p>Test how your system handles rejected invoices with validation errors.</p>
                <div class="scenario-steps">
                  <div class="scenario-step">1. Submit invoice with validation errors</div>
                  <div class="scenario-step">2. Receive "document.sent" webhook</div>
                  <div class="scenario-step">3. Receive "document.rejected" webhook</div>
                  <div class="scenario-step">4. Handle rejection reason in your system</div>
                </div>
                <div class="rejection-reasons">
                  <strong>Common rejection reasons in sandbox:</strong>
                  <ul>
                    <li>Invalid VAT rate</li>
                    <li>Missing mandatory fields</li>
                    <li>Incorrect format validation</li>
                    <li>Business rule violations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="scenario-card">
              <div class="scenario-header">
                <span class="scenario-icon">⏱️</span>
                <h3>Network Timeout Flow</h3>
              </div>
              <div class="scenario-content">
                <p>Test handling of network delays and timeout scenarios.</p>
                <div class="scenario-steps">
                  <div class="scenario-step">1. Submit invoice to timeout recipient</div>
                  <div class="scenario-step">2. Experience delayed webhook delivery</div>
                  <div class="scenario-step">3. Receive "document.failed" webhook</div>
                  <div class="scenario-step">4. Implement retry logic testing</div>
                </div>
                <div class="timeout-info">
                  <strong>Timeout scenarios:</strong>
                  <ul>
                    <li>5-second delay simulation</li>
                    <li>30-second timeout test</li>
                    <li>Network connectivity issues</li>
                    <li>Recipient system unavailable</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="scenario-card">
              <div class="scenario-header">
                <span class="scenario-icon">🔄</span>
                <h3>Peppol Network Testing</h3>
              </div>
              <div class="scenario-content">
                <p>Test Peppol network delivery and compliance validation.</p>
                <div class="scenario-steps">
                  <div class="scenario-step">1. Submit UBL 2.1 invoice</div>
                  <div class="scenario-step">2. Validate Peppol BIS compliance</div>
                  <div class="scenario-step">3. Test SMP lookup simulation</div>
                  <div class="scenario-step">4. Verify AS4 delivery process</div>
                </div>
                <div class="peppol-info">
                  <strong>Peppol test features:</strong>
                  <ul>
                    <li>BIS 3.0 validation</li>
                    <li>Schematron rule testing</li>
                    <li>SMP directory simulation</li>
                    <li>AS4 protocol testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Webhook Testing Section -->
        <div class="section-content">
          <h2 class="section-title">Webhook Testing in Sandbox</h2>
          
          <div class="webhook-testing-info">
            <p>The sandbox environment provides comprehensive webhook testing capabilities to help you develop robust event handling.</p>
            
            <div class="webhook-features-grid">
              <div class="webhook-feature">
                <div class="feature-icon">🔔</div>
                <h4>Real Webhook Events</h4>
                <p>Receive actual webhook events for all document lifecycle stages in sandbox</p>
              </div>
              
              <div class="webhook-feature">
                <div class="feature-icon">🔒</div>
                <h4>Signature Verification</h4>
                <p>Test webhook signature validation with sandbox-specific secrets</p>
              </div>
              
              <div class="webhook-feature">
                <div class="feature-icon">⚡</div>
                <h4>Event Simulation</h4>
                <p>Trigger specific events on demand for comprehensive testing</p>
              </div>
              
              <div class="webhook-feature">
                <div class="feature-icon">📊</div>
                <h4>Event Monitoring</h4>
                <p>Monitor webhook delivery success and failure rates in sandbox dashboard</p>
              </div>
            </div>
          </div>

          <div class="webhook-setup">
            <h3>Setting Up Webhooks in Sandbox</h3>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Webhook Configuration</span>
                <button @click="copyCode('webhook-setup')" class="copy-btn">Copy</button>
              </div>
              <pre id="webhook-setup"><code>POST /webhooks
{
  "url": "https://your-test-server.ngrok.io/webhooks/storecove",
  "events": [
    "document.sent",
    "document.delivered", 
    "document.accepted",
    "document.rejected",
    "document.failed"
  ],
  "secret": "your-sandbox-webhook-secret"
}

# Use ngrok or similar tools for local webhook testing:
# ngrok http 3000</code></pre>
            </div>
          </div>
        </div>

        <!-- Testing Tools Section -->
        <div class="section-content">
          <h2 class="section-title">Sandbox Testing Tools</h2>
          
          <div class="tools-grid">
            <div class="tool-card">
              <div class="tool-icon">🔧</div>
              <div class="tool-content">
                <h3>ngrok</h3>
                <p>Create secure tunnels to localhost for webhook testing during development.</p>
                <div class="tool-command">
                  <code>ngrok http 3000</code>
                </div>
                <a href="https://ngrok.com/" target="_blank" class="tool-link">Download ngrok →</a>
              </div>
            </div>

            <div class="tool-card">
              <div class="tool-icon">📡</div>
              <div class="tool-content">
                <h3>Webhook.site</h3>
                <p>Free tool to inspect and debug incoming webhooks in real-time.</p>
                <a href="https://webhook.site/" target="_blank" class="tool-link">Try webhook.site →</a>
              </div>
            </div>

            <div class="tool-card">
              <div class="tool-icon">🐙</div>
              <div class="tool-content">
                <h3>Postman</h3>
                <p>Test your API endpoints and simulate Storecove API calls.</p>
                <a href="https://www.postman.com/" target="_blank" class="tool-link">Get Postman →</a>
              </div>
            </div>

            <div class="tool-card">
              <div class="tool-icon">📋</div>
              <div class="tool-content">
                <h3>Sample Invoices</h3>
                <p>Download UBL and CII sample invoices for testing.</p>
                <button @click="downloadSampleInvoices" class="tool-link">Download Samples →</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Best Practices Section -->
        <div class="section-content">
          <h2 class="section-title">Sandbox Testing Best Practices</h2>
          
          <div class="best-practices-grid">
            <div class="practice-card">
              <div class="practice-icon">🎯</div>
              <div class="practice-content">
                <h3>Comprehensive Testing</h3>
                <ul>
                  <li>Test all supported document formats (UBL, CII)</li>
                  <li>Verify different currency and country scenarios</li>
                  <li>Test both success and failure scenarios</li>
                  <li>Validate webhook event handling</li>
                </ul>
              </div>
            </div>

            <div class="practice-card">
              <div class="practice-icon">🔄</div>
              <div class="practice-content">
                <h3>Integration Testing</h3>
                <ul>
                  <li>Test complete end-to-end workflows</li>
                  <li>Verify error handling and retry logic</li>
                  <li>Test webhook signature verification</li>
                  <li>Validate status tracking and monitoring</li>
                </ul>
              </div>
            </div>

            <div class="practice-card">
              <div class="practice-icon">📊</div>
              <div class="practice-content">
                <h3>Performance Testing</h3>
                <ul>
                  <li>Test API rate limiting behavior</li>
                  <li>Verify bulk document submission</li>
                  <li>Test webhook delivery reliability</li>
                  <li>Monitor response times and errors</li>
                </ul>
              </div>
            </div>

            <div class="practice-card">
              <div class="practice-icon">🔒</div>
              <div class="practice-content">
                <h3>Security Testing</h3>
                <ul>
                  <li>Verify API key authentication</li>
                  <li>Test webhook signature validation</li>
                  <li>Validate HTTPS requirements</li>
                  <li>Test access control and permissions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Migration to Production Section -->
        <div class="section-content">
          <h2 class="section-title">Migration to Production</h2>
          
          <div class="migration-steps">
            <div class="migration-step">
              <div class="migration-number">1</div>
              <div class="migration-content">
                <h3>Complete Sandbox Testing</h3>
                <p>Ensure all test scenarios pass and your integration handles all edge cases properly.</p>
                <div class="checklist">
                  <div class="checklist-item">✅ All webhook events handled correctly</div>
                  <div class="checklist-item">✅ Error scenarios tested and handled</div>
                  <div class="checklist-item">✅ Document formats validated</div>
                  <div class="checklist-item">✅ Security implementation verified</div>
                </div>
              </div>
            </div>

            <div class="migration-step">
              <div class="migration-number">2</div>
              <div class="migration-content">
                <h3>Update Configuration</h3>
                <p>Switch from sandbox to production endpoints and credentials.</p>
                <div class="code-block">
                  <div class="code-header">
                    <span class="code-language">Production Configuration</span>
                    <button @click="copyCode('prod-config')" class="copy-btn">Copy</button>
                  </div>
                  <pre id="prod-config"><code># Production Environment Variables
STORECOVE_API_BASE_URL=https://api.storecove.com/api/v2
STORECOVE_API_KEY=your_production_api_key
STORECOVE_WEBHOOK_SECRET=your_production_webhook_secret
ENVIRONMENT=production
DEBUG=false</code></pre>
                </div>
              </div>
            </div>

            <div class="migration-step">
              <div class="migration-number">3</div>
              <div class="migration-content">
                <h3>Production Verification</h3>
                <p>Perform final verification with production credentials before going live.</p>
                <div class="verification-list">
                  <div class="verification-item">🔍 API connectivity test</div>
                  <div class="verification-item">🔍 Webhook endpoint verification</div>
                  <div class="verification-item">🔍 Legal entity configuration</div>
                  <div class="verification-item">🔍 Monitoring and alerting setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Back Navigation -->
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
  name: 'SandboxTesting',
  methods: {
    copyCode(elementId) {
      const element = document.getElementById(elementId);
      const text = element.textContent;
      navigator.clipboard.writeText(text).then(() => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      });
    },
    
    copySandboxUrl() {
      const url = 'https://sandbox.storecove.com/register';
      navigator.clipboard.writeText(url).then(() => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      });
    },
    
    downloadSampleInvoices() {
      const sampleInvoices = {
        "UBL_Invoice_Sample.xml": `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
  <ID>TEST-INV-001</ID>
  <IssueDate>2024-01-15</IssueDate>
  <DueDate>2024-02-15</DueDate>
  <DocumentCurrencyCode>EUR</DocumentCurrencyCode>
  <!-- Sample UBL invoice structure -->
</Invoice>`,
        "CII_Invoice_Sample.xml": `<?xml version="1.0" encoding="UTF-8"?>
<rsm:CrossIndustryInvoice xmlns:rsm="urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100">
  <!-- Sample CII invoice structure -->
</rsm:CrossIndustryInvoice>`
      };
      
      const blob = new Blob([JSON.stringify(sampleInvoices, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'storecove-sample-invoices.json';
      a.click();
      URL.revokeObjectURL(url);
    }
  }
}
</script>

<style scoped>
.sandbox-testing {
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
  max-width: 600px;
  margin: 0 auto;
}

.content-section {
  padding: 4rem 0;
}

.section-content {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 0.5rem;
}

.section-description {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* Highlight Box */
.highlight-box {
  background: #eff6ff;
  border: 1px solid #dbeafe;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.highlight-box h3 {
  color: #1e40af;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.highlight-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlight-box li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #374151;
  line-height: 1.5;
}

.highlight-box li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #0066cc;
  font-weight: bold;
}

/* Setup Steps */
.setup-steps {
  margin-top: 2rem;
}

.step-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  align-items: flex-start;
}

.step-number {
  background: #0066cc;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.step-content p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Code Blocks */
.code-block {
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
}

.code-header {
  background: #374151;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.code-language {
  color: #d1d5db;
  font-size: 0.85rem;
  font-weight: 500;
}

.copy-btn {
  background: #4b5563;
  color: #d1d5db;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background: #6b7280;
}

.code-block pre {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
  background: #1f2937;
}

.code-block code {
  color: #e5e7eb;
  font-family: 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Credentials */
.sandbox-credentials {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.credential-item {
  margin-bottom: 0.75rem;
  color: #374151;
}

.credential-item:last-child {
  margin-bottom: 0;
}

.credential-item code {
  background: #e5e7eb;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9rem;
}

/* Test Data Grid */
.test-data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.test-data-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.test-data-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.test-data-content h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.test-data-content p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.entity-item, .recipient-item, .identifier-item {
  background: #f9fafb;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.entity-item:last-child, .recipient-item:last-child, .identifier-item:last-child {
  margin-bottom: 0;
}

.entity-details, .recipient-details, .identifier-details {
  color: #6b7280;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

/* Scenarios */
.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.scenario-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.scenario-header {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.scenario-icon {
  font-size: 1.5rem;
}

.scenario-header h3 {
  color: #1f2937;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.scenario-content {
  padding: 1.5rem;
}

.scenario-content p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.scenario-steps {
  margin-bottom: 1.5rem;
}

.scenario-step {
  background: #eff6ff;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  border-left: 3px solid #0066cc;
  color: #374151;
  font-size: 0.9rem;
}

.rejection-reasons, .timeout-info, .peppol-info {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;
}

.rejection-reasons strong, .timeout-info strong, .peppol-info strong {
  color: #92400e;
  display: block;
  margin-bottom: 0.5rem;
}

.rejection-reasons ul, .timeout-info ul, .peppol-info ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #78350f;
}

/* Webhook Testing */
.webhook-testing-info {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.webhook-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.webhook-feature {
  text-align: center;
  padding: 1rem;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.webhook-feature h4 {
  color: #1e40af;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.webhook-feature p {
  color: #1e40af;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Tools Grid */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.tool-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  text-align: center;
}

.tool-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tool-content h3 {
  color: #1f2937;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.tool-content p {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.tool-command {
  background: #1f2937;
  color: #e5e7eb;
  padding: 0.75rem;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.tool-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.tool-link:hover {
  color: #004499;
}

/* Best Practices */
.best-practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.practice-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.practice-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.practice-content h3 {
  color: #1f2937;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.practice-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.practice-content li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #6b7280;
  line-height: 1.4;
}

.practice-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0066cc;
  font-weight: bold;
}

/* Migration Steps */
.migration-steps {
  margin-top: 2rem;
}

.migration-step {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  align-items: flex-start;
}

.migration-number {
  background: #10b981;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.migration-content {
  flex: 1;
}

.migration-content h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.migration-content p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.checklist, .verification-list {
  margin-top: 1rem;
}

.checklist-item, .verification-item {
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  border-left: 3px solid #10b981;
  color: #166534;
  font-size: 0.9rem;
}

/* Back Navigation */
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .step-item, .migration-step {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .step-number, .migration-number {
    align-self: flex-start;
  }
  
  .test-data-grid, .scenarios-grid {
    grid-template-columns: 1fr;
  }
  
  .code-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}
</style>