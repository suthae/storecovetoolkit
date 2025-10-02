<template>
  <div class="developer-dashboard">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Developer Dashboard</h1>
          <p>Monitor your e-invoicing integration with comprehensive administrative tools and real-time insights</p>
        </div>
      </div>
    </div>

    <!-- Dashboard Overview -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Dashboard Components</h2>
          <p>Essential monitoring and management components for your e-invoicing integration</p>
        </div>

        <!-- Key Metrics Cards -->
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-icon">📊</div>
            <div class="metric-content">
              <h3 class="metric-value">1,247</h3>
              <p class="metric-label">Documents Sent</p>
              <span class="metric-change positive">+12% this month</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">✅</div>
            <div class="metric-content">
              <h3 class="metric-value">98.5%</h3>
              <p class="metric-label">Success Rate</p>
              <span class="metric-change positive">+0.3% this month</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">⚠️</div>
            <div class="metric-content">
              <h3 class="metric-value">18</h3>
              <p class="metric-label">Failed Deliveries</p>
              <span class="metric-change negative">-5 from last week</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">⏱️</div>
            <div class="metric-content">
              <h3 class="metric-value">2.3s</h3>
              <p class="metric-label">Avg Response Time</p>
              <span class="metric-change neutral">No change</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Document Management -->
    <section class="content-section bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Document Management</h2>
          <p>Track and manage your e-invoicing documents</p>
        </div>

        <div class="dashboard-component">
          <div class="component-header">
            <h3>Recent Document Submissions</h3>
            <div class="component-actions">
              <select class="filter-select">
                <option>All Status</option>
                <option>Submitted</option>
                <option>Delivered</option>
                <option>Failed</option>
              </select>
              <button class="btn-secondary">Export</button>
            </div>
          </div>

          <div class="document-table">
            <table>
              <thead>
                <tr>
                  <th>Document ID</th>
                  <th>Recipient</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Submitted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>INV-2024-001234</code></td>
                  <td>Acme Corp B.V.</td>
                  <td>Invoice</td>
                  <td><span class="status delivered">Delivered</span></td>
                  <td>2024-01-15 14:30</td>
                  <td>
                    <button class="btn-link">View</button>
                    <button class="btn-link">Resend</button>
                  </td>
                </tr>
                <tr>
                  <td><code>CN-2024-000456</code></td>
                  <td>Tech Solutions Ltd.</td>
                  <td>Credit Note</td>
                  <td><span class="status pending">Processing</span></td>
                  <td>2024-01-15 13:45</td>
                  <td>
                    <button class="btn-link">View</button>
                    <button class="btn-link">Cancel</button>
                  </td>
                </tr>
                <tr>
                  <td><code>INV-2024-001233</code></td>
                  <td>Global Imports GmbH</td>
                  <td>Invoice</td>
                  <td><span class="status failed">Failed</span></td>
                  <td>2024-01-15 12:20</td>
                  <td>
                    <button class="btn-link">View</button>
                    <button class="btn-link">Retry</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Webhook Monitoring -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Webhook Monitoring</h2>
          <p>Monitor webhook delivery status and manage endpoints</p>
        </div>

        <div class="dashboard-grid">
          <div class="dashboard-component">
            <div class="component-header">
              <h3>Webhook Endpoints</h3>
              <button class="btn-primary">Add Endpoint</button>
            </div>

            <div class="webhook-list">
              <div class="webhook-item">
                <div class="webhook-info">
                  <h4>Production Webhook</h4>
                  <code>https://api.yourcompany.com/webhooks/storecove</code>
                  <span class="webhook-status active">Active</span>
                </div>
                <div class="webhook-actions">
                  <button class="btn-link">Test</button>
                  <button class="btn-link">Edit</button>
                  <button class="btn-link">Disable</button>
                </div>
              </div>

              <div class="webhook-item">
                <div class="webhook-info">
                  <h4>Staging Webhook</h4>
                  <code>https://staging.yourcompany.com/webhooks/storecove</code>
                  <span class="webhook-status inactive">Inactive</span>
                </div>
                <div class="webhook-actions">
                  <button class="btn-link">Test</button>
                  <button class="btn-link">Edit</button>
                  <button class="btn-link">Enable</button>
                </div>
              </div>
            </div>
          </div>

          <div class="dashboard-component">
            <div class="component-header">
              <h3>Recent Webhook Events</h3>
            </div>

            <div class="webhook-events">
              <div class="event-item">
                <div class="event-icon success">✓</div>
                <div class="event-content">
                  <h4>document_submission.succeeded</h4>
                  <p>INV-2024-001234 delivered successfully</p>
                  <span class="event-time">2 minutes ago</span>
                </div>
              </div>

              <div class="event-item">
                <div class="event-icon error">✗</div>
                <div class="event-content">
                  <h4>document_submission.failed</h4>
                  <p>INV-2024-001233 delivery failed</p>
                  <span class="event-time">15 minutes ago</span>
                </div>
              </div>

              <div class="event-item">
                <div class="event-icon success">✓</div>
                <div class="event-content">
                  <h4>document_submission.succeeded</h4>
                  <p>CN-2024-000455 delivered successfully</p>
                  <span class="event-time">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal Entity Management -->
    <section class="content-section bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Legal Entity Management</h2>
          <p>Manage your organization's legal entities and their configurations</p>
        </div>

        <div class="dashboard-component">
          <div class="component-header">
            <h3>Configured Legal Entities</h3>
            <button class="btn-primary">Add Legal Entity</button>
          </div>

          <div class="entity-grid">
            <div class="entity-card">
              <div class="entity-header">
                <h4>Your Company B.V.</h4>
                <span class="entity-status active">Active</span>
              </div>
              <div class="entity-details">
                <p><strong>VAT ID:</strong> NL123456789B01</p>
                <p><strong>Country:</strong> Netherlands</p>
                <p><strong>Network:</strong> Peppol</p>
                <p><strong>Documents:</strong> 1,247 sent</p>
              </div>
              <div class="entity-actions">
                <button class="btn-secondary">Configure</button>
                <button class="btn-link">View Details</button>
              </div>
            </div>

            <div class="entity-card">
              <div class="entity-header">
                <h4>Your Company GmbH</h4>
                <span class="entity-status active">Active</span>
              </div>
              <div class="entity-details">
                <p><strong>VAT ID:</strong> DE987654321</p>
                <p><strong>Country:</strong> Germany</p>
                <p><strong>Network:</strong> Peppol</p>
                <p><strong>Documents:</strong> 432 sent</p>
              </div>
              <div class="entity-actions">
                <button class="btn-secondary">Configure</button>
                <button class="btn-link">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- API Usage Analytics -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>API Usage Analytics</h2>
          <p>Monitor your API usage, performance, and quotas</p>
        </div>

        <div class="dashboard-grid">
          <div class="dashboard-component">
            <div class="component-header">
              <h3>API Call Statistics</h3>
              <select class="filter-select">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>

            <div class="api-stats">
              <div class="stat-item">
                <h4>Total API Calls</h4>
                <p class="stat-value">12,547</p>
                <span class="stat-change positive">+8.2%</span>
              </div>
              <div class="stat-item">
                <h4>Success Rate</h4>
                <p class="stat-value">99.2%</p>
                <span class="stat-change positive">+0.1%</span>
              </div>
              <div class="stat-item">
                <h4>Avg Response Time</h4>
                <p class="stat-value">234ms</p>
                <span class="stat-change positive">-12ms</span>
              </div>
            </div>

            <div class="chart-placeholder">
              <p>📈 API Usage Chart (7 days)</p>
              <div class="mock-chart">
                <div class="chart-bar" style="height: 60%"></div>
                <div class="chart-bar" style="height: 80%"></div>
                <div class="chart-bar" style="height: 45%"></div>
                <div class="chart-bar" style="height: 90%"></div>
                <div class="chart-bar" style="height: 70%"></div>
                <div class="chart-bar" style="height: 55%"></div>
                <div class="chart-bar" style="height: 85%"></div>
              </div>
            </div>
          </div>

          <div class="dashboard-component">
            <div class="component-header">
              <h3>Rate Limits & Quotas</h3>
            </div>

            <div class="quota-list">
              <div class="quota-item">
                <div class="quota-info">
                  <h4>Document Submissions</h4>
                  <p>Monthly quota usage</p>
                </div>
                <div class="quota-meter">
                  <div class="quota-bar">
                    <div class="quota-fill" style="width: 67%"></div>
                  </div>
                  <span class="quota-text">1,340 / 2,000</span>
                </div>
              </div>

              <div class="quota-item">
                <div class="quota-info">
                  <h4>API Requests</h4>
                  <p>Per minute rate limit</p>
                </div>
                <div class="quota-meter">
                  <div class="quota-bar">
                    <div class="quota-fill" style="width: 23%"></div>
                  </div>
                  <span class="quota-text">23 / 100</span>
                </div>
              </div>

              <div class="quota-item">
                <div class="quota-info">
                  <h4>Webhook Deliveries</h4>
                  <p>Monthly quota usage</p>
                </div>
                <div class="quota-meter">
                  <div class="quota-bar">
                    <div class="quota-fill" style="width: 45%"></div>
                  </div>
                  <span class="quota-text">4,500 / 10,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Code Examples -->
    <section class="content-section bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Dashboard Implementation Examples</h2>
          <p>Code examples for implementing dashboard components</p>
        </div>

        <div class="code-section">
          <h3>Fetching Dashboard Metrics</h3>
          <div class="code-block">
            <pre><code>import requests
from datetime import datetime, timedelta

class StorecoveDashboard:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.storecove.com"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def get_document_metrics(self, days=30):
        """Get document submission metrics for the dashboard"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days)
        
        params = {
            "start_date": start_date.isoformat(),
            "end_date": end_date.isoformat()
        }
        
        response = requests.get(
            f"{self.base_url}/api/v2/document_submissions/metrics",
            headers=self.headers,
            params=params
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"API error: {response.status_code}")
    
    def get_webhook_status(self):
        """Get webhook endpoint status"""
        response = requests.get(
            f"{self.base_url}/api/v2/webhooks",
            headers=self.headers
        )
        
        return response.json() if response.status_code == 200 else None
    
    def get_legal_entities(self):
        """Get configured legal entities"""
        response = requests.get(
            f"{self.base_url}/api/v2/legal_entities",
            headers=self.headers
        )
        
        return response.json() if response.status_code == 200 else None

# Usage example
dashboard = StorecoveDashboard("your-api-key")

# Get metrics for dashboard
metrics = dashboard.get_document_metrics(days=7)
print(f"Documents sent: {metrics['total_documents']}")
print(f"Success rate: {metrics['success_rate']}%")

# Get webhook status
webhooks = dashboard.get_webhook_status()
for webhook in webhooks:
    print(f"Webhook: {webhook['url']} - Status: {webhook['status']}")

# Get legal entities
entities = dashboard.get_legal_entities()
for entity in entities:
    print(f"Entity: {entity['name']} - VAT: {entity['tax_id']}")
</code></pre>
          </div>
        </div>

        <div class="code-section">
          <h3>Real-time Dashboard Updates</h3>
          <div class="code-block">
            <pre><code>import asyncio
import websockets
import json

class RealtimeDashboard:
    def __init__(self, api_key):
        self.api_key = api_key
        self.websocket_url = "wss://api.storecove.com/ws/dashboard"
        
    async def connect_to_updates(self):
        """Connect to real-time dashboard updates"""
        headers = {"Authorization": f"Bearer {self.api_key}"}
        
        try:
            async with websockets.connect(self.websocket_url, extra_headers=headers) as websocket:
                print("Connected to Storecove real-time updates")
                
                # Subscribe to dashboard events
                subscribe_msg = {
                    "action": "subscribe",
                    "events": [
                        "document_submission.succeeded",
                        "document_submission.failed", 
                        "webhook.delivered",
                        "quota.warning"
                    ]
                }
                
                await websocket.send(json.dumps(subscribe_msg))
                
                # Listen for updates
                async for message in websocket:
                    event = json.loads(message)
                    await self.handle_dashboard_event(event)
                    
        except websockets.exceptions.ConnectionClosed:
            print("Connection closed, attempting to reconnect...")
            await asyncio.sleep(5)
            await self.connect_to_updates()
    
    async def handle_dashboard_event(self, event):
        """Handle real-time dashboard events"""
        event_type = event.get("type")
        data = event.get("data", {})
        
        if event_type == "document_submission.succeeded":
            print(f"✅ Document {data['document_id']} delivered successfully")
            self.update_success_counter()
            
        elif event_type == "document_submission.failed":
            print(f"❌ Document {data['document_id']} delivery failed: {data['error']}")
            self.update_error_counter()
            
        elif event_type == "webhook.delivered":
            print(f"🔄 Webhook delivered to {data['endpoint_url']}")
            self.update_webhook_status(data['endpoint_url'], 'delivered')
            
        elif event_type == "quota.warning":
            print(f"⚠️ Quota warning: {data['quota_type']} at {data['usage_percentage']}%")
            self.show_quota_alert(data)
    
    def update_success_counter(self):
        """Update success counter in dashboard UI"""
        # Implementation depends on your frontend framework
        pass
    
    def update_error_counter(self):
        """Update error counter in dashboard UI"""
        # Implementation depends on your frontend framework  
        pass

# Usage
dashboard = RealtimeDashboard("your-api-key")
asyncio.run(dashboard.connect_to_updates())
</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Implementation Tips -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Dashboard Implementation Tips</h2>
          <p>Best practices for building effective e-invoicing dashboards</p>
        </div>

        <div class="tips-grid">
          <div class="tip-card">
            <div class="tip-icon">⚡</div>
            <h3>Real-time Updates</h3>
            <p>Implement WebSocket connections or periodic polling to keep dashboard data current. Update metrics automatically when document status changes.</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">📊</div>
            <h3>Key Metrics</h3>
            <p>Focus on essential KPIs: success rate, average response time, failed deliveries, and quota usage. Avoid information overload.</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🎯</div>
            <h3>Actionable Alerts</h3>
            <p>Set up meaningful alerts for quota limits, delivery failures, and webhook issues. Include clear next steps for resolution.</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🔍</div>
            <h3>Detailed Filtering</h3>
            <p>Provide robust filtering and search capabilities for document lists. Enable filtering by status, date range, recipient, and document type.</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">📱</div>
            <h3>Mobile Responsive</h3>
            <p>Ensure your dashboard works well on mobile devices. Administrators often need to check status while away from their desk.</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🔒</div>
            <h3>Security & Access</h3>
            <p>Implement proper authentication and role-based access controls. Log all administrative actions for audit purposes.</p>
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
  name: 'DeveloperDashboard'
}
</script>

<style scoped>
.developer-dashboard {
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

.bg-light {
  background-color: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.metric-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.metric-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f7ff;
  border-radius: 12px;
}

.metric-value {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.metric-label {
  color: #666;
  margin-bottom: 0.5rem;
}

.metric-change {
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.metric-change.positive {
  color: #22c55e;
  background: #f0fdf4;
}

.metric-change.negative {
  color: #ef4444;
  background: #fef2f2;
}

.metric-change.neutral {
  color: #6b7280;
  background: #f9fafb;
}

/* Dashboard Components */
.dashboard-component {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.component-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.component-header h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.component-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.filter-select {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
}

.btn-primary {
  background: #0066cc;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #004499;
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
  padding: 0.75rem 1.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

.btn-link {
  background: none;
  color: #0066cc;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
}

.btn-link:hover {
  color: #004499;
}

/* Document Table */
.document-table {
  padding: 2rem;
}

.document-table table {
  width: 100%;
  border-collapse: collapse;
}

.document-table th {
  text-align: left;
  padding: 1rem;
  border-bottom: 2px solid #e5e7eb;
  color: #374151;
  font-weight: 600;
}

.document-table td {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.document-table code {
  background: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.status.delivered {
  background: #d1fae5;
  color: #065f46;
}

.status.pending {
  background: #fef3c7;
  color: #92400e;
}

.status.failed {
  background: #fee2e2;
  color: #991b1b;
}

/* Dashboard Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

/* Webhooks */
.webhook-list {
  padding: 2rem;
}

.webhook-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.webhook-info h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.webhook-info code {
  display: block;
  background: #f3f4f6;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.webhook-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.webhook-status.active {
  background: #d1fae5;
  color: #065f46;
}

.webhook-status.inactive {
  background: #fee2e2;
  color: #991b1b;
}

.webhook-actions {
  display: flex;
  gap: 1rem;
}

/* Webhook Events */
.webhook-events {
  padding: 2rem;
}

.event-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-left: 3px solid transparent;
  margin-bottom: 1rem;
}

.event-item:hover {
  background: #f9fafb;
}

.event-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.event-icon.success {
  background: #22c55e;
}

.event-icon.error {
  background: #ef4444;
}

.event-content h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1rem;
}

.event-content p {
  margin: 0 0 0.5rem 0;
  color: #666;
}

.event-time {
  font-size: 0.875rem;
  color: #9ca3af;
}

/* Entity Management */
.entity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.entity-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
}

.entity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.entity-header h4 {
  margin: 0;
  color: #333;
}

.entity-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.entity-status.active {
  background: #d1fae5;
  color: #065f46;
}

.entity-details {
  margin-bottom: 1.5rem;
}

.entity-details p {
  margin: 0.5rem 0;
  color: #666;
}

.entity-actions {
  display: flex;
  gap: 1rem;
}

/* API Stats */
.api-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding: 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.stat-item h4 {
  margin: 0 0 0.5rem 0;
  color: #666;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.stat-change {
  font-size: 0.875rem;
  font-weight: 600;
}

.stat-change.positive {
  color: #22c55e;
}

/* Chart Placeholder */
.chart-placeholder {
  padding: 2rem;
  text-align: center;
}

.mock-chart {
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 150px;
  margin-top: 1rem;
  gap: 8px;
}

.chart-bar {
  background: #0066cc;
  width: 100%;
  border-radius: 4px 4px 0 0;
  min-height: 20px;
}

/* Quota Management */
.quota-list {
  padding: 2rem;
}

.quota-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.quota-item:last-child {
  border-bottom: none;
}

.quota-info h4 {
  margin: 0 0 0.25rem 0;
  color: #333;
}

.quota-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.quota-meter {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 200px;
}

.quota-bar {
  flex: 1;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.quota-fill {
  height: 100%;
  background: #0066cc;
  transition: width 0.3s ease;
}

.quota-text {
  font-size: 0.875rem;
  color: #666;
  white-space: nowrap;
}

/* Code Sections */
.code-section {
  margin-bottom: 3rem;
}

.code-section h3 {
  color: #333;
  margin-bottom: 1rem;
}

.code-block {
  background: #1f2937;
  border-radius: 8px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  padding: 2rem;
}

.code-block code {
  color: #f9fafb;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Tips Grid */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tip-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.tip-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tip-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.tip-card p {
  color: #666;
  line-height: 1.6;
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
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .component-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .component-actions {
    width: 100%;
    justify-content: space-between;
  }
  
  .webhook-item {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .entity-grid {
    grid-template-columns: 1fr;
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>