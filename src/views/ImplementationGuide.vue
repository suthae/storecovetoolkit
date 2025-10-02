<template>
  <div class="implementation-guide">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Implementation Guide</h1>
          <p>Step-by-step guide to implementing Storecove e-invoicing</p>
        </div>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <!-- Table of Contents -->
        <div class="toc-section">
          <h2>📋 Implementation Overview</h2>
          <div class="toc-grid">
            <div class="toc-item" @click="scrollToSection('prerequisites')">
              <div class="toc-number">1</div>
              <div class="toc-content">
                <h3>Prerequisites</h3>
                <p>Account setup and initial configuration</p>
              </div>
            </div>
            <div class="toc-item" @click="scrollToSection('authentication')">
              <div class="toc-number">2</div>
              <div class="toc-content">
                <h3>Authentication</h3>
                <p>API key setup and security best practices</p>
              </div>
            </div>
            <div class="toc-item" @click="scrollToSection('legal-entities')">
              <div class="toc-number">3</div>
              <div class="toc-content">
                <h3>Legal Entities</h3>
                <p>Configure your business entities</p>
              </div>
            </div>
            <div class="toc-item" @click="scrollToSection('identifiers')">
              <div class="toc-number">4</div>
              <div class="toc-content">
                <h3>Identifiers</h3>
                <p>Set up PEPPOL and tax identifiers</p>
              </div>
            </div>
            <div class="toc-item" @click="scrollToSection('document-submission')">
              <div class="toc-number">5</div>
              <div class="toc-content">
                <h3>Document Submission</h3>
                <p>Send your first e-invoice</p>
              </div>
            </div>
            <div class="toc-item" @click="scrollToSection('webhooks')">
              <div class="toc-number">6</div>
              <div class="toc-content">
                <h3>Webhooks</h3>
                <p>Handle delivery notifications</p>
              </div>
            </div>
            <div class="toc-item" @click="scrollToSection('testing')">
              <div class="toc-number">7</div>
              <div class="toc-content">
                <h3>Testing</h3>
                <p>Validate your integration</p>
              </div>
            </div>
            <div class="toc-item" @click="scrollToSection('go-live')">
              <div class="toc-number">8</div>
              <div class="toc-content">
                <h3>Go Live</h3>
                <p>Production deployment checklist</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 1: Prerequisites -->
        <div id="prerequisites" class="implementation-step">
          <div class="step-header">
            <span class="step-number">1</span>
            <h2>📋 Prerequisites</h2>
          </div>
          
          <div class="step-content">
            <h3>Before You Begin</h3>
            <div class="checklist">
              <div class="checklist-item">
                <input type="checkbox" id="account" />
                <label for="account">✅ Active Storecove account</label>
              </div>
              <div class="checklist-item">
                <input type="checkbox" id="api-access" />
                <label for="api-access">✅ API access enabled</label>
              </div>
              <div class="checklist-item">
                <input type="checkbox" id="business-info" />
                <label for="business-info">✅ Business registration details ready</label>
              </div>
              <div class="checklist-item">
                <input type="checkbox" id="tax-numbers" />
                <label for="tax-numbers">✅ Tax identification numbers</label>
              </div>
              <div class="checklist-item">
                <input type="checkbox" id="dev-environment" />
                <label for="dev-environment">✅ Development environment set up</label>
              </div>
            </div>

            <div class="info-box">
              <h4>📞 Need Help Getting Started?</h4>
              <p>Contact Storecove support for account activation and API access:</p>
              <ul>
                <li>Email: <a href="mailto:apisupport@storecove.nl">apisupport@storecove.nl</a></li>
                <li>Documentation: <a href="https://www.storecove.com/docs/" target="_blank">https://www.storecove.com/docs/</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Step 2: Authentication -->
        <div id="authentication" class="implementation-step">
          <div class="step-header">
            <span class="step-number">2</span>
            <h2>🔐 Authentication Setup</h2>
          </div>
          
          <div class="step-content">
            <h3>API Key Configuration</h3>
            <p>Storecove uses Bearer token authentication. Your API key should be included in the Authorization header of every request.</p>
            
            <div class="code-example">
              <h4>Environment Setup</h4>
              <div class="code-tabs">
                <button class="code-tab active" onclick="showCodeTab('env-bash')">Bash</button>
                <button class="code-tab" onclick="showCodeTab('env-windows')">Windows</button>
                <button class="code-tab" onclick="showCodeTab('env-node')">Node.js</button>
              </div>
              
              <div id="env-bash" class="code-content active">
                <pre><code># Set environment variable (Linux/Mac)
export STORECOVE_API_KEY="your_api_key_here"
export STORECOVE_BASE_URL="https://api.storecove.com/api/v2"

# Test authentication
curl -H "Authorization: Bearer $STORECOVE_API_KEY" \
     "$STORECOVE_BASE_URL/legal_entities"</code></pre>
              </div>
              
              <div id="env-windows" class="code-content">
                <pre><code># Set environment variable (Windows)
set STORECOVE_API_KEY=your_api_key_here
set STORECOVE_BASE_URL=https://api.storecove.com/api/v2

# Test authentication
curl -H "Authorization: Bearer %STORECOVE_API_KEY%" ^
     "%STORECOVE_BASE_URL%/legal_entities"</code></pre>
              </div>
              
              <div id="env-node" class="code-content">
                <pre><code>// .env file
STORECOVE_API_KEY=your_api_key_here
STORECOVE_BASE_URL=https://api.storecove.com/api/v2

// Node.js usage
require('dotenv').config();

const apiKey = process.env.STORECOVE_API_KEY;
const baseUrl = process.env.STORECOVE_BASE_URL;

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};</code></pre>
              </div>
            </div>

            <div class="warning-box">
              <h4>🚨 Security Best Practices</h4>
              <ul>
                <li>Never hardcode API keys in your source code</li>
                <li>Use environment variables or secure key management</li>
                <li>Rotate API keys regularly</li>
                <li>Use different keys for development and production</li>
                <li>Implement proper error handling for authentication failures</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Step 3: Legal Entities -->
        <div id="legal-entities" class="implementation-step">
          <div class="step-header">
            <span class="step-number">3</span>
            <h2>🏢 Legal Entity Configuration</h2>
          </div>
          
          <div class="step-content">
            <h3>Create Your Business Entity</h3>
            <p>A Legal Entity represents your business in the Storecove system. You need at least one Legal Entity to send or receive documents.</p>
            
            <div class="code-example">
              <h4>Create Legal Entity</h4>
              <pre><code>POST /legal_entities
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "party_name": "Your Company Name",
  "line1": "123 Business Street",
  "city": "Business City",
  "zip": "12345",
  "country": "US",
  "public": true,
  "acts_as_sender": true,
  "acts_as_receiver": true,
  "tax_registered": true,
  "advertisements": ["invoice", "order"]
}</code></pre>
            </div>

            <div class="field-guide">
              <h4>📝 Field Guide</h4>
              <div class="field-grid">
                <div class="field-item">
                  <strong>party_name</strong>
                  <p>Your legal business name (2-64 characters)</p>
                </div>
                <div class="field-item">
                  <strong>line1</strong>
                  <p>Primary business address (required)</p>
                </div>
                <div class="field-item">
                  <strong>country</strong>
                  <p>ISO 3166-1 alpha-2 country code</p>
                </div>
                <div class="field-item">
                  <strong>public</strong>
                  <p>List in PEPPOL directory (recommended: true)</p>
                </div>
                <div class="field-item">
                  <strong>acts_as_sender</strong>
                  <p>Can send documents (true for invoicing)</p>
                </div>
                <div class="field-item">
                  <strong>acts_as_receiver</strong>
                  <p>Can receive documents (true for purchases)</p>
                </div>
              </div>
            </div>

            <div class="response-example">
              <h4>📤 Response Example</h4>
              <pre><code>{
  "id": 12345,
  "party_name": "Your Company Name",
  "line1": "123 Business Street",
  "city": "Business City",
  "zip": "12345",
  "country": "US",
  "public": true,
  "acts_as_sender": true,
  "acts_as_receiver": true,
  "tax_registered": true,
  "advertisements": ["invoice", "order"],
  "api_keys": ["api_key_123"],
  "peppol_identifiers": [],
  "additional_tax_identifiers": []
}</code></pre>
            </div>
          </div>
        </div>

        <!-- Step 4: Identifiers -->
        <div id="identifiers" class="implementation-step">
          <div class="step-header">
            <span class="step-number">4</span>
            <h2>🏷️ Identifier Configuration</h2>
          </div>
          
          <div class="step-content">
            <h3>PEPPOL Identifiers</h3>
            <p>PEPPOL identifiers are required for electronic document exchange. Common identifier schemes include VAT numbers, company registration numbers, and GLN codes.</p>
            
            <div class="identifier-types">
              <div class="identifier-type">
                <h4>🇪🇺 European Union</h4>
                <ul>
                  <li><strong>DE:VAT</strong> - German VAT number</li>
                  <li><strong>NL:VAT</strong> - Dutch VAT number</li>
                  <li><strong>FR:VAT</strong> - French VAT number</li>
                  <li><strong>IT:VAT</strong> - Italian VAT number</li>
                </ul>
              </div>
              <div class="identifier-type">
                <h4>🌏 Asia Pacific</h4>
                <ul>
                  <li><strong>SG:UEN</strong> - Singapore UEN</li>
                  <li><strong>AU:ABN</strong> - Australian ABN</li>
                  <li><strong>NZ:GST</strong> - New Zealand GST</li>
                  <li><strong>MY:TIN</strong> - Malaysia TIN</li>
                </ul>
              </div>
              <div class="identifier-type">
                <h4>🌍 Global</h4>
                <ul>
                  <li><strong>GLN</strong> - Global Location Number</li>
                  <li><strong>DUNS</strong> - DUNS Number</li>
                  <li><strong>LEI</strong> - Legal Entity Identifier</li>
                </ul>
              </div>
            </div>

            <div class="code-example">
              <h4>Add PEPPOL Identifier</h4>
              <pre><code>POST /legal_entities/{legal_entity_id}/peppol_identifiers
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "superscheme": "iso6523-actorid-upis",
  "scheme": "DE:VAT",
  "identifier": "DE123456789"
}</code></pre>
            </div>

            <div class="discovery-section">
              <h4>🔍 Identifier Discovery</h4>
              <p>Use the discovery endpoint to check if a recipient can receive electronic documents:</p>
              
              <div class="code-example">
                <pre><code>POST /discovery/receives
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "metaScheme": "iso6523-actorid-upis",
  "scheme": "DE:VAT",
  "identifier": "DE987654321",
  "documentTypes": ["invoice", "creditnote"]
}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 5: Document Submission -->
        <div id="document-submission" class="implementation-step">
          <div class="step-header">
            <span class="step-number">5</span>
            <h2>📄 Document Submission</h2>
          </div>
          
          <div class="step-content">
            <h3>Send Your First E-Invoice</h3>
            <p>Document submission is the core functionality of Storecove. Here's how to send a complete invoice:</p>
            
            <div class="submission-workflow">
              <div class="workflow-step">
                <div class="workflow-number">5.1</div>
                <div class="workflow-content">
                  <h4>Prepare Invoice Data</h4>
                  <p>Structure your invoice according to UBL or CII standards</p>
                </div>
              </div>
              <div class="workflow-step">
                <div class="workflow-number">5.2</div>
                <div class="workflow-content">
                  <h4>Configure Routing</h4>
                  <p>Specify recipient identifiers and fallback options</p>
                </div>
              </div>
              <div class="workflow-step">
                <div class="workflow-number">5.3</div>
                <div class="workflow-content">
                  <h4>Submit Document</h4>
                  <p>Send via the document_submissions endpoint</p>
                </div>
              </div>
              <div class="workflow-step">
                <div class="workflow-number">5.4</div>
                <div class="workflow-content">
                  <h4>Monitor Status</h4>
                  <p>Track delivery via webhooks or polling</p>
                </div>
              </div>
            </div>

            <div class="code-example">
              <h4>Complete Invoice Submission</h4>
              <pre><code>POST /document_submissions
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "legalEntityId": 12345,
  "routing": {
    "eIdentifiers": [
      {
        "scheme": "DE:VAT",
        "id": "DE987654321"
      }
    ],
    "emails": ["fallback@example.com"]
  },
  "document": {
    "documentType": "Invoice",
    "invoice": {
      "invoiceNumber": "INV-2024-001",
      "issueDate": "2024-01-15",
      "dueDate": "2024-02-15",
      "documentCurrencyCode": "EUR",
      "accountingCustomerParty": {
        "party": {
          "companyName": "Customer Company Ltd",
          "address": {
            "street1": "456 Customer St",
            "city": "Customer City",
            "zip": "67890",
            "country": "DE"
          }
        },
        "publicIdentifiers": [
          {
            "scheme": "DE:VAT",
            "id": "DE987654321"
          }
        ]
      },
      "invoiceLines": [
        {
          "lineId": "1",
          "name": "Professional Services",
          "description": "Consulting services Q1 2024",
          "quantity": 40,
          "quantityUnitCode": "HUR",
          "itemPrice": 150.00,
          "amountExcludingTax": 6000.00,
          "taxesDutiesFees": [
            {
              "taxAmount": 1140.00,
              "percentage": 19.0,
              "country": "DE",
              "category": "standard"
            }
          ]
        }
      ],
      "taxSubtotals": [
        {
          "taxableAmount": 6000.00,
          "taxAmount": 1140.00,
          "percentage": 19.0,
          "country": "DE",
          "category": "standard"
        }
      ],
      "paymentMeansArray": [
        {
          "code": "credit_transfer",
          "account": "DE89370400440532013000",
          "holder": "Your Company Name",
          "paymentId": "INV-2024-001"
        }
      ]
    }
  }
}</code></pre>
            </div>

            <div class="tips-box">
              <h4>💡 Pro Tips</h4>
              <ul>
                <li>Always include fallback email addresses for reliable delivery</li>
                <li>Use meaningful invoice numbers and payment IDs for reconciliation</li>
                <li>Validate customer identifiers before submission</li>
                <li>Include complete address information for compliance</li>
                <li>Set appropriate due dates according to payment terms</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Step 6: Webhooks -->
        <div id="webhooks" class="implementation-step">
          <div class="step-header">
            <span class="step-number">6</span>
            <h2>🔗 Webhook Configuration</h2>
          </div>
          
          <div class="step-content">
            <h3>Real-time Delivery Notifications</h3>
            <p>Webhooks provide real-time updates about document processing and delivery status.</p>
            
            <div class="webhook-events">
              <h4>📨 Webhook Events</h4>
              <div class="event-grid">
                <div class="event-item">
                  <strong>document_submitted</strong>
                  <p>Document received and queued for processing</p>
                </div>
                <div class="event-item">
                  <strong>document_cleared</strong>
                  <p>Document validated and ready for delivery</p>
                </div>
                <div class="event-item">
                  <strong>document_delivered</strong>
                  <p>Document successfully delivered to recipient</p>
                </div>
                <div class="event-item">
                  <strong>document_failed</strong>
                  <p>Delivery failed (with error details)</p>
                </div>
                <div class="event-item">
                  <strong>received_document</strong>
                  <p>New document received for your entity</p>
                </div>
              </div>
            </div>

            <div class="code-example">
              <h4>Webhook Endpoint Implementation</h4>
              <div class="code-tabs">
                <button class="code-tab active" onclick="showCodeTab('webhook-node')">Node.js</button>
                <button class="code-tab" onclick="showCodeTab('webhook-python')">Python</button>
                <button class="code-tab" onclick="showCodeTab('webhook-php')">PHP</button>
              </div>
              
              <div id="webhook-node" class="code-content active">
                <pre><code>const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhooks/storecove', (req, res) => {
  const event = req.body;
  
  console.log('Received webhook:', event.type);
  
  switch(event.type) {
    case 'document_delivered':
      console.log(`Document ${event.document_guid} delivered successfully`);
      // Update your database
      updateInvoiceStatus(event.document_guid, 'delivered');
      break;
      
    case 'document_failed':
      console.log(`Document ${event.document_guid} failed:`, event.error);
      // Handle delivery failure
      handleDeliveryFailure(event.document_guid, event.error);
      break;
      
    case 'received_document':
      console.log(`New document received: ${event.document_guid}`);
      // Process incoming document
      processIncomingDocument(event);
      break;
  }
  
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});</code></pre>
              </div>
              
              <div id="webhook-python" class="code-content">
                <pre><code>from flask import Flask, request, jsonify
import logging

app = Flask(__name__)

@app.route('/webhooks/storecove', methods=['POST'])
def handle_webhook():
    event = request.get_json()
    
    logging.info(f"Received webhook: {event.get('type')}")
    
    event_type = event.get('type')
    document_guid = event.get('document_guid')
    
    if event_type == 'document_delivered':
        logging.info(f"Document {document_guid} delivered successfully")
        update_invoice_status(document_guid, 'delivered')
        
    elif event_type == 'document_failed':
        logging.error(f"Document {document_guid} failed: {event.get('error')}")
        handle_delivery_failure(document_guid, event.get('error'))
        
    elif event_type == 'received_document':
        logging.info(f"New document received: {document_guid}")
        process_incoming_document(event)
    
    return jsonify({'status': 'success'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)</code></pre>
              </div>
              
              <div id="webhook-php" class="code-content">
                <pre><code>&lt;?php
$input = file_get_contents('php://input');
$event = json_decode($input, true);

error_log("Received webhook: " . $event['type']);

switch($event['type']) {
    case 'document_delivered':
        error_log("Document {$event['document_guid']} delivered successfully");
        updateInvoiceStatus($event['document_guid'], 'delivered');
        break;
        
    case 'document_failed':
        error_log("Document {$event['document_guid']} failed: " . $event['error']);
        handleDeliveryFailure($event['document_guid'], $event['error']);
        break;
        
    case 'received_document':
        error_log("New document received: {$event['document_guid']}");
        processIncomingDocument($event);
        break;
}

http_response_code(200);
echo "OK";
?&gt;</code></pre>
              </div>
            </div>

            <div class="webhook-config">
              <h4>⚙️ Webhook Configuration</h4>
              <p>Configure your webhook URL in the Storecove dashboard or contact support to set up webhook endpoints for your account.</p>
              
              <div class="config-checklist">
                <div class="checklist-item">
                  <input type="checkbox" id="webhook-url" />
                  <label for="webhook-url">✅ Webhook URL configured</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="webhook-https" />
                  <label for="webhook-https">✅ HTTPS endpoint (required)</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="webhook-response" />
                  <label for="webhook-response">✅ Returns HTTP 200 status</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="webhook-timeout" />
                  <label for="webhook-timeout">✅ Responds within 30 seconds</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 7: Testing -->
        <div id="testing" class="implementation-step">
          <div class="step-header">
            <span class="step-number">7</span>
            <h2>🧪 Testing Your Integration</h2>
          </div>
          
          <div class="step-content">
            <h3>Sandbox Environment</h3>
            <p>Test your integration thoroughly using the Storecove sandbox environment before going live.</p>
            
            <div class="testing-checklist">
              <h4>🧾 Testing Checklist</h4>
              <div class="test-categories">
                <div class="test-category">
                  <h5>Authentication Tests</h5>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-auth-valid" />
                    <label for="test-auth-valid">✅ Valid API key authentication</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-auth-invalid" />
                    <label for="test-auth-invalid">✅ Invalid API key handling</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-auth-missing" />
                    <label for="test-auth-missing">✅ Missing authorization header</label>
                  </div>
                </div>
                
                <div class="test-category">
                  <h5>Document Submission Tests</h5>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-doc-valid" />
                    <label for="test-doc-valid">✅ Valid invoice submission</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-doc-invalid" />
                    <label for="test-doc-invalid">✅ Invalid document format</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-doc-missing" />
                    <label for="test-doc-missing">✅ Missing required fields</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-doc-routing" />
                    <label for="test-doc-routing">✅ Routing to different recipients</label>
                  </div>
                </div>
                
                <div class="test-category">
                  <h5>Webhook Tests</h5>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-webhook-delivery" />
                    <label for="test-webhook-delivery">✅ Webhook delivery</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-webhook-retry" />
                    <label for="test-webhook-retry">✅ Webhook retry mechanism</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-webhook-parsing" />
                    <label for="test-webhook-parsing">✅ Event payload parsing</label>
                  </div>
                </div>
                
                <div class="test-category">
                  <h5>Error Handling Tests</h5>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-error-network" />
                    <label for="test-error-network">✅ Network timeout handling</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-error-rate" />
                    <label for="test-error-rate">✅ Rate limit handling</label>
                  </div>
                  <div class="checklist-item">
                    <input type="checkbox" id="test-error-server" />
                    <label for="test-error-server">✅ Server error handling</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="test-scenarios">
              <h4>📋 Test Scenarios</h4>
              <div class="scenario-grid">
                <div class="scenario">
                  <h5>Successful Delivery</h5>
                  <p>Submit invoice to known test recipient with valid PEPPOL identifier</p>
                </div>
                <div class="scenario">
                  <h5>Email Fallback</h5>
                  <p>Submit to non-PEPPOL recipient, verify email delivery</p>
                </div>
                <div class="scenario">
                  <h5>Validation Errors</h5>
                  <p>Test with invalid data formats and missing fields</p>
                </div>
                <div class="scenario">
                  <h5>Large Documents</h5>
                  <p>Test with attachments and complex invoice structures</p>
                </div>
              </div>
            </div>

            <div class="code-example">
              <h4>Test Document Submission</h4>
              <pre><code># Test with sandbox environment
curl -X POST "https://api.storecove.com/api/v2/document_submissions" \
  -H "Authorization: Bearer YOUR_SANDBOX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "legalEntityId": 12345,
    "routing": {
      "eIdentifiers": [
        {
          "scheme": "NL:TEST",
          "id": "123456789"
        }
      ]
    },
    "document": {
      "documentType": "Invoice",
      "invoice": {
        "invoiceNumber": "TEST-001",
        "issueDate": "2024-01-15",
        "accountingCustomerParty": {
          "party": {
            "companyName": "Test Customer"
          }
        },
        "invoiceLines": [
          {
            "lineId": "1",
            "quantity": 1,
            "quantityUnitCode": "C62",
            "amountExcludingTax": 100.00
          }
        ]
      }
    }
  }'</code></pre>
            </div>
          </div>
        </div>

        <!-- Step 8: Go Live -->
        <div id="go-live" class="implementation-step">
          <div class="step-header">
            <span class="step-number">8</span>
            <h2>🚀 Go Live Checklist</h2>
          </div>
          
          <div class="step-content">
            <h3>Production Deployment</h3>
            <p>Complete these steps before switching to production:</p>
            
            <div class="go-live-checklist">
              <div class="checklist-section">
                <h4>🔧 Technical Requirements</h4>
                <div class="checklist-item">
                  <input type="checkbox" id="prod-api-key" />
                  <label for="prod-api-key">✅ Production API keys configured</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="prod-urls" />
                  <label for="prod-urls">✅ Production URLs updated</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="prod-webhooks" />
                  <label for="prod-webhooks">✅ Production webhook endpoints</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="prod-ssl" />
                  <label for="prod-ssl">✅ SSL certificates valid</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="prod-monitoring" />
                  <label for="prod-monitoring">✅ Monitoring and logging in place</label>
                </div>
              </div>
              
              <div class="checklist-section">
                <h4>📊 Business Requirements</h4>
                <div class="checklist-item">
                  <input type="checkbox" id="business-entities" />
                  <label for="business-entities">✅ All legal entities configured</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="business-identifiers" />
                  <label for="business-identifiers">✅ PEPPOL identifiers validated</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="business-workflows" />
                  <label for="business-workflows">✅ Invoice workflows tested</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="business-training" />
                  <label for="business-training">✅ Team training completed</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="business-backup" />
                  <label for="business-backup">✅ Backup processes defined</label>
                </div>
              </div>
              
              <div class="checklist-section">
                <h4>🔍 Quality Assurance</h4>
                <div class="checklist-item">
                  <input type="checkbox" id="qa-testing" />
                  <label for="qa-testing">✅ End-to-end testing completed</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="qa-performance" />
                  <label for="qa-performance">✅ Performance testing passed</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="qa-security" />
                  <label for="qa-security">✅ Security review completed</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="qa-compliance" />
                  <label for="qa-compliance">✅ Compliance requirements met</label>
                </div>
                <div class="checklist-item">
                  <input type="checkbox" id="qa-documentation" />
                  <label for="qa-documentation">✅ Documentation updated</label>
                </div>
              </div>
            </div>

            <div class="success-metrics">
              <h4>📈 Success Metrics</h4>
              <p>Monitor these key metrics after going live:</p>
              <div class="metrics-grid">
                <div class="metric">
                  <strong>Delivery Success Rate</strong>
                  <p>Target: >95% successful deliveries</p>
                </div>
                <div class="metric">
                  <strong>Processing Time</strong>
                  <p>Target: <5 minutes end-to-end</p>
                </div>
                <div class="metric">
                  <strong>Error Rate</strong>
                  <p>Target: <2% API errors</p>
                </div>
                <div class="metric">
                  <strong>Webhook Reliability</strong>
                  <p>Target: >99% webhook delivery</p>
                </div>
              </div>
            </div>

            <div class="support-info">
              <h4>🆘 Production Support</h4>
              <div class="support-grid">
                <div class="support-item">
                  <h5>📧 Email Support</h5>
                  <p><a href="mailto:apisupport@storecove.nl">apisupport@storecove.nl</a></p>
                </div>
                <div class="support-item">
                  <h5>📖 Documentation</h5>
                  <p><a href="https://www.storecove.com/docs/" target="_blank">API Documentation</a></p>
                </div>
                <div class="support-item">
                  <h5>📊 Status Page</h5>
                  <p>Monitor API status and maintenance</p>
                </div>
                <div class="support-item">
                  <h5>💬 Community</h5>
                  <p>Developer forums and discussions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Steps -->
        <div class="next-steps">
          <h2>🎯 Next Steps</h2>
          <div class="next-steps-grid">
            <div class="next-step-item">
              <h3>📊 Monitor Performance</h3>
              <p>Set up monitoring dashboards and alerts for your integration</p>
              <router-link to="/developer-dashboard" class="btn-primary">View Dashboard Guide</router-link>
            </div>
            <div class="next-step-item">
              <h3>🛠️ Error Handling</h3>
              <p>Implement robust error handling and recovery mechanisms</p>
              <router-link to="/error-handling" class="btn-primary">Learn Error Handling</router-link>
            </div>
            <div class="next-step-item">
              <h3>📝 API Logging</h3>
              <p>Set up comprehensive logging for debugging and compliance</p>
              <router-link to="/api-logs" class="btn-primary">Setup Logging</router-link>
            </div>
          </div>
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
  name: 'ImplementationGuide',
  mounted() {
    // Add smooth scrolling to sections
    window.scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Add code tab functionality
    window.showCodeTab = (tabId) => {
      // Hide all code contents
      document.querySelectorAll('.code-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // Remove active class from all code tabs
      document.querySelectorAll('.code-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Show selected content
      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
      
      // Add active class to clicked tab
      event.target.classList.add('active');
    };

    // Add progress tracking
    this.trackProgress();
  },
  methods: {
    trackProgress() {
      // Track checkbox changes for progress indication
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          this.updateProgress();
        });
      });
    },
    updateProgress() {
      const totalCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
      const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
      const progress = Math.round((checkedBoxes / totalCheckboxes) * 100);
      
      // Update progress indicator if it exists
      const progressIndicator = document.querySelector('.progress-indicator');
      if (progressIndicator) {
        progressIndicator.textContent = `Progress: ${progress}%`;
      }
    }
  }
}
</script>

<style scoped>
.implementation-guide {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Table of Contents */
.toc-section {
  margin-bottom: 4rem;
}

.toc-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.toc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.toc-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #e1e5e9;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.toc-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  border-color: #0066cc;
}

.toc-number {
  background: #0066cc;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.toc-content h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.toc-content p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

/* Implementation Steps */
.implementation-step {
  margin-bottom: 4rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
}

.step-header {
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  color: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-number {
  background: rgba(255,255,255,0.2);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.step-header h2 {
  margin: 0;
  font-size: 2rem;
}

.step-content {
  padding: 2rem;
}

.step-content h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 0.5rem;
}

.step-content h4 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.step-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Checklists */
.checklist {
  margin: 2rem 0;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.checklist-item:hover {
  background: #f8f9fa;
}

.checklist-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #0066cc;
}

.checklist-item label {
  color: #333;
  font-weight: 500;
  cursor: pointer;
  flex-grow: 1;
}

/* Info Boxes */
.info-box, .warning-box, .tips-box {
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.info-box {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
}

.warning-box {
  background: #fff3e0;
  border-left: 4px solid #ff9800;
}

.tips-box {
  background: #e8f5e8;
  border-left: 4px solid #4caf50;
}

.info-box h4, .warning-box h4, .tips-box h4 {
  color: #333;
  margin-bottom: 1rem;
}

.info-box ul, .warning-box ul, .tips-box ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.info-box li, .warning-box li, .tips-box li {
  margin-bottom: 0.5rem;
  color: #555;
}

/* Code Examples */
.code-example {
  margin: 2rem 0;
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
}

.code-example h4 {
  background: #333;
  color: white;
  padding: 1rem 1.5rem;
  margin: 0;
  font-size: 1.1rem;
}

.code-tabs {
  background: #2d2d2d;
  padding: 0.5rem 1rem;
  display: flex;
  gap: 0.5rem;
}

.code-tab {
  background: #444;
  color: #ccc;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.code-tab:hover {
  background: #555;
  color: white;
}

.code-tab.active {
  background: #0066cc;
  color: white;
}

.code-content {
  display: none;
}

.code-content.active {
  display: block;
}

.code-example pre {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-example code {
  color: #f8f8f2;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Field Guide */
.field-guide {
  margin: 2rem 0;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.field-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #0066cc;
}

.field-item strong {
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

.field-item p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

/* Response Example */
.response-example {
  margin: 2rem 0;
}

/* Identifier Types */
.identifier-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.identifier-type {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
}

.identifier-type h4 {
  color: #333;
  margin-bottom: 1rem;
}

.identifier-type ul {
  margin: 0;
  padding-left: 2rem;
}

.identifier-type li {
  margin-bottom: 0.5rem;
  color: #555;
}

/* Discovery Section */
.discovery-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

/* Submission Workflow */
.submission-workflow {
  margin: 2rem 0;
}

.workflow-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.workflow-number {
  background: #0066cc;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.workflow-content h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.workflow-content p {
  color: #666;
  margin: 0;
}

/* Webhook Events */
.webhook-events {
  margin: 2rem 0;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.event-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #28a745;
}

.event-item strong {
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

.event-item p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

/* Webhook Config */
.webhook-config {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.config-checklist {
  margin-top: 1rem;
}

/* Testing */
.testing-checklist {
  margin: 2rem 0;
}

.test-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 1rem 0;
}

.test-category {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
}

.test-category h5 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* Test Scenarios */
.test-scenarios {
  margin: 2rem 0;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.scenario {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-left: 4px solid #17a2b8;
}

.scenario h5 {
  color: #333;
  margin-bottom: 0.5rem;
}

.scenario p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

/* Go Live Checklist */
.go-live-checklist {
  margin: 2rem 0;
}

.checklist-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid #0066cc;
}

.checklist-section h4 {
  color: #333;
  margin-bottom: 1rem;
}

/* Success Metrics */
.success-metrics {
  margin: 2rem 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.metric {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-left: 4px solid #28a745;
}

.metric strong {
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
}

.metric p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

/* Support Info */
.support-info {
  margin: 2rem 0;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.support-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-left: 4px solid #6f42c1;
}

.support-item h5 {
  color: #333;
  margin-bottom: 0.5rem;
}

.support-item p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

.support-item a {
  color: #0066cc;
  text-decoration: none;
}

.support-item a:hover {
  text-decoration: underline;
}

/* Next Steps */
.next-steps {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 3rem;
  border-radius: 12px;
  margin: 4rem 0;
  text-align: center;
}

.next-steps h2 {
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.next-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.next-step-item {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.next-step-item:hover {
  transform: translateY(-2px);
}

.next-step-item h3 {
  color: #333;
  margin-bottom: 1rem;
}

.next-step-item p {
  color: #666;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background: #0066cc;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background: #004499;
  color: white;
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .toc-grid {
    grid-template-columns: 1fr;
  }
  
  .toc-item {
    flex-direction: column;
    text-align: center;
  }
  
  .step-header {
    flex-direction: column;
    text-align: center;
  }
  
  .step-header h2 {
    font-size: 1.5rem;
  }
  
  .field-grid {
    grid-template-columns: 1fr;
  }
  
  .identifier-types {
    grid-template-columns: 1fr;
  }
  
  .test-categories {
    grid-template-columns: 1fr;
  }
  
  .scenario-grid {
    grid-template-columns: 1fr;
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .support-grid {
    grid-template-columns: 1fr;
  }
  
  .next-steps-grid {
    grid-template-columns: 1fr;
  }
  
  .workflow-step {
    flex-direction: column;
    text-align: center;
  }
}
</style>