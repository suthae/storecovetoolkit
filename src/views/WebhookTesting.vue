<template>
  <div class="page-container">
    <!-- Header -->
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">← Back to Toolkit</router-link>
        <h1 class="page-title">Webhook Testing Guide</h1>
        <p class="page-description">Learn how to implement and test webhooks for real-time e-invoicing status updates using Storecove API</p>
      </div>
    </div>

    <!-- Introduction Section -->
    <section class="content-section">
      <div class="container">
        <div class="intro-section">
          <h2>What are Webhooks?</h2>
          <p>Webhooks are HTTP callbacks that Storecove sends to your application when specific events occur during e-invoice processing. Instead of polling our API for status updates, webhooks provide real-time notifications about document delivery, acceptance, rejection, and other important events.</p>
          
          <div class="highlight-box">
            <h3>Key Benefits</h3>
            <ul>
              <li><strong>Real-time updates:</strong> Get instant notifications when invoice status changes</li>
              <li><strong>Reduced API calls:</strong> No need for constant polling to check status</li>
              <li><strong>Better user experience:</strong> Provide immediate feedback to your users</li>
              <li><strong>Automated workflows:</strong> Trigger business processes based on events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Webhook Events Section -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Webhook Events in Storecove API</h2>
        <p class="section-description">Storecove sends webhooks for various e-invoicing lifecycle events</p>
        
        <div class="events-grid">
          <div class="event-card">
            <div class="event-icon">📤</div>
            <div class="event-content">
              <h3>Document Sent</h3>
              <p><code>document.sent</code></p>
              <p>Triggered when an e-invoice is successfully sent to the recipient's network or system.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-icon">📥</div>
            <div class="event-content">
              <h3>Document Delivered</h3>
              <p><code>document.delivered</code></p>
              <p>Fired when the recipient's system confirms receipt of the e-invoice.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-icon">✅</div>
            <div class="event-content">
              <h3>Document Accepted</h3>
              <p><code>document.accepted</code></p>
              <p>Sent when the recipient accepts the e-invoice for processing.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-icon">❌</div>
            <div class="event-content">
              <h3>Document Rejected</h3>
              <p><code>document.rejected</code></p>
              <p>Triggered when the recipient rejects the e-invoice, often with rejection reason.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-icon">⚠️</div>
            <div class="event-content">
              <h3>Delivery Failed</h3>
              <p><code>document.failed</code></p>
              <p>Fired when document delivery fails due to network or validation issues.</p>
            </div>
          </div>

          <div class="event-card">
            <div class="event-icon">🔄</div>
            <div class="event-content">
              <h3>Status Updated</h3>
              <p><code>document.status_changed</code></p>
              <p>General status change event for any document lifecycle updates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Setup Guide Section -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Setting Up Webhooks</h2>
        
        <div class="setup-steps">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Configure Webhook URL</h3>
              <p>Set up your webhook endpoint URL in the Storecove dashboard or via API. This URL must be publicly accessible and support HTTPS.</p>
              <div class="code-block">
                <div class="code-header">
                  <span class="code-language">API Request</span>
                  <button @click="copyCode('webhook-config')" class="copy-btn">Copy</button>
                </div>
                <pre id="webhook-config"><code>POST /api/v2/webhooks
{
  "url": "https://your-domain.com/webhooks/storecove",
  "events": ["document.sent", "document.delivered", "document.accepted"],
  "secret": "your-webhook-secret"
}</code></pre>
              </div>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Implement Webhook Endpoint</h3>
              <p>Create an HTTP endpoint that can receive POST requests from Storecove and process the webhook payload.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Verify Webhook Signatures</h3>
              <p>Implement signature verification to ensure webhooks are authentic and from Storecove.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Handle Events Appropriately</h3>
              <p>Process different event types and update your application state accordingly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Python Implementation Section -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Python Implementation Examples</h2>
        
        <!-- Basic Flask Webhook Handler -->
        <div class="code-example">
          <h3>Basic Flask Webhook Handler</h3>
          <p>Simple Flask application to receive and process Storecove webhooks:</p>
          
          <div class="code-block">
            <div class="code-header">
              <span class="code-language">Python - Flask</span>
              <button @click="copyCode('flask-basic')" class="copy-btn">Copy</button>
            </div>
            <pre id="flask-basic"><code>from flask import Flask, request, jsonify
import hmac
import hashlib
import json
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

# Your webhook secret from Storecove
WEBHOOK_SECRET = "your-webhook-secret-here"

@app.route('/webhooks/storecove', methods=['POST'])
def handle_storecove_webhook():
    try:
        # Get the payload and signature
        payload = request.get_data()
        signature = request.headers.get('X-Storecove-Signature')
        
        # Verify the webhook signature
        if not verify_signature(payload, signature):
            logging.warning("Invalid webhook signature")
            return jsonify({"error": "Invalid signature"}), 401
        
        # Parse the JSON payload
        event_data = json.loads(payload)
        event_type = event_data.get('type')
        document_data = event_data.get('data', {})
        
        # Process the event based on type
        if event_type == 'document.sent':
            handle_document_sent(document_data)
        elif event_type == 'document.delivered':
            handle_document_delivered(document_data)
        elif event_type == 'document.accepted':
            handle_document_accepted(document_data)
        elif event_type == 'document.rejected':
            handle_document_rejected(document_data)
        elif event_type == 'document.failed':
            handle_document_failed(document_data)
        else:
            logging.info(f"Unhandled event type: {event_type}")
        
        return jsonify({"status": "success"}), 200
        
    except Exception as e:
        logging.error(f"Error processing webhook: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

def verify_signature(payload, signature):
    """Verify the webhook signature using HMAC-SHA256"""
    if not signature:
        return False
    
    expected_signature = hmac.new(
        WEBHOOK_SECRET.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected_signature}", signature)

def handle_document_sent(data):
    """Handle document sent event"""
    document_id = data.get('id')
    logging.info(f"Document {document_id} was sent successfully")
    # Update your database, notify users, etc.

def handle_document_delivered(data):
    """Handle document delivered event"""
    document_id = data.get('id')
    recipient = data.get('recipient', {})
    logging.info(f"Document {document_id} delivered to {recipient.get('name')}")
    # Update delivery status in your system

def handle_document_accepted(data):
    """Handle document accepted event"""
    document_id = data.get('id')
    logging.info(f"Document {document_id} was accepted by recipient")
    # Trigger payment processes, update invoice status

def handle_document_rejected(data):
    """Handle document rejected event"""
    document_id = data.get('id')
    rejection_reason = data.get('rejection_reason', 'No reason provided')
    logging.warning(f"Document {document_id} rejected: {rejection_reason}")
    # Notify sender, trigger correction workflow

def handle_document_failed(data):
    """Handle document delivery failure"""
    document_id = data.get('id')
    error_message = data.get('error_message', 'Unknown error')
    logging.error(f"Document {document_id} delivery failed: {error_message}")
    # Retry logic, error notification

if __name__ == '__main__':
    app.run(debug=True, port=5000)</code></pre>
          </div>
        </div>

        <!-- Advanced Webhook Processor -->
        <div class="code-example">
          <h3>Advanced Webhook Processor with Database Integration</h3>
          <p>More comprehensive example with database updates and error handling:</p>
          
          <div class="code-block">
            <div class="code-header">
              <span class="code-language">Python - Advanced Handler</span>
              <button @click="copyCode('advanced-handler')" class="copy-btn">Copy</button>
            </div>
            <pre id="advanced-handler"><code>import os
import json
import logging
import hmac
import hashlib
from datetime import datetime
from flask import Flask, request, jsonify
from sqlalchemy import create_engine, Column, String, DateTime, Integer, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import requests

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

# Database setup
DATABASE_URL = os.getenv('DATABASE_URL', 'sqlite:///webhooks.db')
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class WebhookEvent(Base):
    __tablename__ = "webhook_events"
    
    id = Column(Integer, primary_key=True, index=True)
    event_type = Column(String(50), nullable=False)
    document_id = Column(String(100), nullable=False, index=True)
    payload = Column(Text, nullable=False)
    processed_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String(20), default='processed')

class InvoiceStatus(Base):
    __tablename__ = "invoice_status"
    
    id = Column(Integer, primary_key=True, index=True)
    document_id = Column(String(100), unique=True, nullable=False, index=True)
    current_status = Column(String(50), nullable=False)
    last_updated = Column(DateTime, default=datetime.utcnow)
    recipient_name = Column(String(200))
    rejection_reason = Column(Text)

# Create tables
Base.metadata.create_all(bind=engine)

WEBHOOK_SECRET = os.getenv('STORECOVE_WEBHOOK_SECRET')

class WebhookProcessor:
    def __init__(self):
        self.session = SessionLocal()
    
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.session.close()
    
    def process_webhook(self, event_type, data):
        """Process webhook event and update database"""
        try:
            # Log the webhook event
            webhook_event = WebhookEvent(
                event_type=event_type,
                document_id=data.get('id', ''),
                payload=json.dumps(data)
            )
            self.session.add(webhook_event)
            
            # Update invoice status
            self.update_invoice_status(event_type, data)
            
            # Send notifications if needed
            self.send_notifications(event_type, data)
            
            self.session.commit()
            logging.info(f"Successfully processed {event_type} for document {data.get('id')}")
            
        except Exception as e:
            self.session.rollback()
            logging.error(f"Error processing webhook: {str(e)}")
            raise
    
    def update_invoice_status(self, event_type, data):
        """Update invoice status in database"""
        document_id = data.get('id')
        if not document_id:
            return
        
        # Get or create invoice status record
        invoice_status = self.session.query(InvoiceStatus).filter(
            InvoiceStatus.document_id == document_id
        ).first()
        
        if not invoice_status:
            invoice_status = InvoiceStatus(document_id=document_id)
            self.session.add(invoice_status)
        
        # Update status based on event type
        status_mapping = {
            'document.sent': 'sent',
            'document.delivered': 'delivered',
            'document.accepted': 'accepted',
            'document.rejected': 'rejected',
            'document.failed': 'failed'
        }
        
        invoice_status.current_status = status_mapping.get(event_type, 'unknown')
        invoice_status.last_updated = datetime.utcnow()
        
        # Update additional fields based on event type
        if event_type == 'document.delivered':
            recipient = data.get('recipient', {})
            invoice_status.recipient_name = recipient.get('name')
        elif event_type == 'document.rejected':
            invoice_status.rejection_reason = data.get('rejection_reason')
    
    def send_notifications(self, event_type, data):
        """Send notifications to relevant parties"""
        document_id = data.get('id')
        
        # Define notification logic based on event type
        if event_type == 'document.accepted':
            self.notify_accounting_team(document_id, "Invoice accepted")
        elif event_type == 'document.rejected':
            reason = data.get('rejection_reason', 'No reason provided')
            self.notify_sender(document_id, f"Invoice rejected: {reason}")
        elif event_type == 'document.failed':
            error = data.get('error_message', 'Unknown error')
            self.notify_admin(document_id, f"Delivery failed: {error}")
    
    def notify_accounting_team(self, document_id, message):
        """Send notification to accounting team"""
        # Implement your notification logic (email, Slack, etc.)
        logging.info(f"Notifying accounting team: {message} for {document_id}")
    
    def notify_sender(self, document_id, message):
        """Send notification to invoice sender"""
        logging.info(f"Notifying sender: {message} for {document_id}")
    
    def notify_admin(self, document_id, message):
        """Send notification to system admin"""
        logging.error(f"Admin notification: {message} for {document_id}")

@app.route('/webhooks/storecove', methods=['POST'])
def handle_storecove_webhook():
    try:
        # Verify signature
        payload = request.get_data()
        signature = request.headers.get('X-Storecove-Signature')
        
        if not verify_signature(payload, signature):
            return jsonify({"error": "Invalid signature"}), 401
        
        # Parse event data
        event_data = json.loads(payload)
        event_type = event_data.get('type')
        document_data = event_data.get('data', {})
        
        # Process the webhook
        with WebhookProcessor() as processor:
            processor.process_webhook(event_type, document_data)
        
        return jsonify({"status": "success"}), 200
        
    except Exception as e:
        logging.error(f"Webhook processing error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/api/invoice-status/&lt;document_id&gt;', methods=['GET'])
def get_invoice_status(document_id):
    """API endpoint to get current invoice status"""
    try:
        with WebhookProcessor() as processor:
            status = processor.session.query(InvoiceStatus).filter(
                InvoiceStatus.document_id == document_id
            ).first()
            
            if not status:
                return jsonify({"error": "Invoice not found"}), 404
            
            return jsonify({
                "document_id": status.document_id,
                "status": status.current_status,
                "last_updated": status.last_updated.isoformat(),
                "recipient_name": status.recipient_name,
                "rejection_reason": status.rejection_reason
            })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def verify_signature(payload, signature):
    """Verify webhook signature"""
    if not signature or not WEBHOOK_SECRET:
        return False
    
    expected_signature = hmac.new(
        WEBHOOK_SECRET.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected_signature}", signature)

if __name__ == '__main__':
    app.run(debug=True, port=5000)</code></pre>
          </div>
        </div>

        <!-- Testing Webhook Handler -->
        <div class="code-example">
          <h3>Testing Your Webhook Handler</h3>
          <p>Python script to test your webhook endpoint locally:</p>
          
          <div class="code-block">
            <div class="code-header">
              <span class="code-language">Python - Test Script</span>
              <button @click="copyCode('test-webhook')" class="copy-btn">Copy</button>
            </div>
            <pre id="test-webhook"><code>import requests
import json
import hmac
import hashlib
import time

class WebhookTester:
    def __init__(self, webhook_url, secret):
        self.webhook_url = webhook_url
        self.secret = secret
    
    def create_signature(self, payload):
        """Create HMAC signature for payload"""
        signature = hmac.new(
            self.secret.encode('utf-8'),
            payload.encode('utf-8'),
            hashlib.sha256
        ).hexdigest()
        return f"sha256={signature}"
    
    def send_test_webhook(self, event_type, document_data):
        """Send a test webhook to your endpoint"""
        payload = {
            "type": event_type,
            "timestamp": int(time.time()),
            "data": document_data
        }
        
        payload_json = json.dumps(payload)
        signature = self.create_signature(payload_json)
        
        headers = {
            'Content-Type': 'application/json',
            'X-Storecove-Signature': signature
        }
        
        try:
            response = requests.post(
                self.webhook_url,
                data=payload_json,
                headers=headers,
                timeout=10
            )
            
            print(f"Test webhook sent: {event_type}")
            print(f"Response status: {response.status_code}")
            print(f"Response body: {response.text}")
            return response.status_code == 200
            
        except Exception as e:
            print(f"Error sending webhook: {str(e)}")
            return False
    
    def run_test_suite(self):
        """Run a complete test suite"""
        test_document = {
            "id": "test-doc-123",
            "invoice_number": "INV-2024-001",
            "amount": 1000.00,
            "currency": "EUR",
            "recipient": {
                "name": "Test Company Ltd",
                "identifier": "1234567890"
            }
        }
        
        test_scenarios = [
            ("document.sent", test_document),
            ("document.delivered", {**test_document, "delivered_at": "2024-01-15T10:30:00Z"}),
            ("document.accepted", {**test_document, "accepted_at": "2024-01-15T11:00:00Z"}),
            ("document.rejected", {
                **test_document, 
                "rejection_reason": "Invalid tax rate",
                "rejected_at": "2024-01-15T11:15:00Z"
            }),
            ("document.failed", {
                **test_document, 
                "error_message": "Network timeout",
                "failed_at": "2024-01-15T10:45:00Z"
            })
        ]
        
        print("Starting webhook test suite...")
        print("-" * 50)
        
        for event_type, data in test_scenarios:
            success = self.send_test_webhook(event_type, data)
            print(f"{'✅' if success else '❌'} {event_type}")
            print("-" * 30)
            time.sleep(1)  # Small delay between tests

# Usage example
if __name__ == "__main__":
    # Configure your test parameters
    WEBHOOK_URL = "http://localhost:5000/webhooks/storecove"
    WEBHOOK_SECRET = "your-webhook-secret-here"
    
    tester = WebhookTester(WEBHOOK_URL, WEBHOOK_SECRET)
    tester.run_test_suite()</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Practices Section -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Best Practices</h2>
        
        <div class="best-practices-grid">
          <div class="practice-card">
            <div class="practice-icon">🔒</div>
            <div class="practice-content">
              <h3>Security</h3>
              <ul>
                <li>Always verify webhook signatures</li>
                <li>Use HTTPS endpoints only</li>
                <li>Implement rate limiting</li>
                <li>Log security events</li>
              </ul>
            </div>
          </div>

          <div class="practice-card">
            <div class="practice-icon">⚡</div>
            <div class="practice-content">
              <h3>Performance</h3>
              <ul>
                <li>Process webhooks asynchronously</li>
                <li>Respond quickly (< 5 seconds)</li>
                <li>Implement proper error handling</li>
                <li>Use database transactions</li>
              </ul>
            </div>
          </div>

          <div class="practice-card">
            <div class="practice-icon">🔄</div>
            <div class="practice-content">
              <h3>Reliability</h3>
              <ul>
                <li>Handle duplicate events gracefully</li>
                <li>Implement idempotent processing</li>
                <li>Use retry logic for failures</li>
                <li>Monitor webhook health</li>
              </ul>
            </div>
          </div>

          <div class="practice-card">
            <div class="practice-icon">📊</div>
            <div class="practice-content">
              <h3>Monitoring</h3>
              <ul>
                <li>Log all webhook events</li>
                <li>Track processing times</li>
                <li>Monitor error rates</li>
                <li>Set up alerts for failures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Troubleshooting Section -->
    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Common Issues & Troubleshooting</h2>
        
        <div class="troubleshooting-list">
          <div class="trouble-item">
            <h3>Webhooks Not Being Received</h3>
            <div class="trouble-content">
              <p><strong>Possible causes:</strong></p>
              <ul>
                <li>Incorrect webhook URL configuration</li>
                <li>Firewall blocking incoming requests</li>
                <li>SSL certificate issues</li>
                <li>Endpoint returning non-200 status codes</li>
              </ul>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Verify webhook URL is publicly accessible</li>
                <li>Check firewall settings and whitelist Storecove IPs</li>
                <li>Ensure valid SSL certificate</li>
                <li>Return 200 status for successful processing</li>
              </ul>
            </div>
          </div>

          <div class="trouble-item">
            <h3>Signature Verification Failing</h3>
            <div class="trouble-content">
              <p><strong>Common issues:</strong></p>
              <ul>
                <li>Incorrect webhook secret</li>
                <li>Wrong signature algorithm</li>
                <li>Payload modification before verification</li>
              </ul>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Double-check webhook secret configuration</li>
                <li>Use raw payload for signature verification</li>
                <li>Verify HMAC-SHA256 implementation</li>
              </ul>
            </div>
          </div>

          <div class="trouble-item">
            <h3>Duplicate Webhook Events</h3>
            <div class="trouble-content">
              <p><strong>Why it happens:</strong></p>
              <ul>
                <li>Network timeouts during processing</li>
                <li>Endpoint returning error status codes</li>
                <li>Storecove retry mechanism</li>
              </ul>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Implement idempotent processing</li>
                <li>Use unique event IDs for deduplication</li>
                <li>Return 200 status quickly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testing Tools Section -->
    <section class="content-section testing-tools-section">
      <div class="container">
        <h2 class="section-title">Testing Tools & Resources</h2>
        
        <div class="tools-grid">
          <div class="tool-card">
            <div class="tool-icon">🔧</div>
            <div class="tool-content">
              <h3>ngrok</h3>
              <p>Create secure tunnels to localhost for webhook testing during development.</p>
              <div class="tool-command">
                <code>ngrok http 5000</code>
              </div>
              <a href="https://ngrok.com/" target="_blank" class="tool-link">Download ngrok →</a>
            </div>
          </div>

          <div class="tool-card">
            <div class="tool-icon">📡</div>
            <div class="tool-content">
              <h3>Webhook.site</h3>
              <p>Free tool to test, inspect, and debug incoming webhooks in real-time.</p>
              <a href="https://webhook.site/" target="_blank" class="tool-link">Try webhook.site →</a>
            </div>
          </div>

          <div class="tool-card">
            <div class="tool-icon">🐙</div>
            <div class="tool-content">
              <h3>Postman</h3>
              <p>Test your webhook endpoints and simulate Storecove webhook payloads.</p>
              <a href="https://www.postman.com/" target="_blank" class="tool-link">Get Postman →</a>
            </div>
          </div>

          <div class="tool-card">
            <div class="tool-icon">📋</div>
            <div class="tool-content">
              <h3>Sample Payloads</h3>
              <p>Download sample webhook payloads for testing different event types.</p>
              <button @click="downloadSamplePayloads" class="tool-link">Download Samples →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback Section -->
    <section class="feedback-section">
      <div class="container">
        <h3 class="feedback-question">Was this webhook guide helpful?</h3>
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
  name: 'WebhookTesting',
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
    copyCode(elementId) {
      const element = document.getElementById(elementId);
      const text = element.textContent;
      navigator.clipboard.writeText(text).then(() => {
        // Visual feedback for copy action
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      });
    },
    downloadSamplePayloads() {
      // In a real implementation, this would trigger a download
      const samplePayloads = {
        "document.sent": {
          "type": "document.sent",
          "timestamp": 1640995200,
          "data": {
            "id": "doc_123456789",
            "invoice_number": "INV-2024-001",
            "amount": 1000.00,
            "currency": "EUR",
            "sent_at": "2024-01-01T10:00:00Z"
          }
        },
        "document.delivered": {
          "type": "document.delivered",
          "timestamp": 1640998800,
          "data": {
            "id": "doc_123456789",
            "invoice_number": "INV-2024-001",
            "delivered_at": "2024-01-01T11:00:00Z",
            "recipient": {
              "name": "Example Company Ltd",
              "identifier": "1234567890"
            }
          }
        }
      };
      
      const blob = new Blob([JSON.stringify(samplePayloads, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'storecove-webhook-samples.json';
      a.click();
      URL.revokeObjectURL(url);
    }
  }
}
</script>

<style scoped>
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.event-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease;
}

.event-card:hover {
  transform: translateY(-2px);
}

.event-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.event-content h3 {
  color: #1f2937;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.event-content p:first-of-type {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-family: 'Courier New', monospace;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.event-content p:last-of-type {
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

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
  background: var(--primary-color);
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

.code-example {
  margin-bottom: 3rem;
}

.code-example h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.code-example > p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.code-block {
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
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
  transition: background-color 0.2s ease;
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
  font-family: 'Courier New', Monaco, monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

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
  color: var(--primary-color);
  font-weight: bold;
}

.troubleshooting-list {
  margin-top: 2rem;
}

.trouble-item {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.trouble-item h3 {
  color: #1f2937;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.trouble-content p {
  color: #374151;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.trouble-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.trouble-content li {
  padding: 0.25rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #6b7280;
  line-height: 1.5;
}

.trouble-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.testing-tools-section {
  background: #f9fafb;
}

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
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.tool-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.tool-link:hover {
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
  color: var(--primary-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .step-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .step-number {
    align-self: flex-start;
  }
  
  .code-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .code-block pre {
    font-size: 0.8rem;
  }
}
</style>