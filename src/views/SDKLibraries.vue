<template>
  <div class="sdk-libraries">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>SDK Libraries</h1>
          <p>Official and community-maintained SDKs for Storecove integration</p>
        </div>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <!-- OpenAPI Overview -->
        <div class="section-block">
          <h2>🚀 OpenAPI 2.0 Specification</h2>
          <div class="highlight-box">
            <p>Storecove API is built on <strong>OpenAPI 2.0 specification</strong>, making it easy to generate client libraries in multiple programming languages.</p>
            <div class="api-info">
              <div class="api-detail">
                <strong>API Version:</strong> 2.0.1
              </div>
              <div class="api-detail">
                <strong>Base URL:</strong> <code>https://api.storecove.com/api/v2</code>
              </div>
              <div class="api-detail">
                <strong>OpenAPI Spec:</strong> <code>https://api.storecove.com/api/v2/openapi.json</code>
              </div>
            </div>
          </div>
        </div>

        <!-- Client Library Generation -->
        <div class="section-block">
          <h2>⚡ Generate Client Libraries</h2>
          <p>Use Swagger Codegen to automatically generate client libraries for your preferred programming language:</p>
          
          <div class="code-example">
            <h3>Java Example</h3>
            <pre><code># Download Swagger Codegen JAR
wget https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.32/swagger-codegen-cli-2.4.32.jar

# Generate Java client
java -jar swagger-codegen-cli-2.4.32.jar generate \
  -i https://api.storecove.com/api/v2/openapi.json \
  -l java \
  -o ./storecove-java-client</code></pre>
          </div>

          <div class="code-example">
            <h3>C# Example</h3>
            <pre><code># Generate C# client
java -jar swagger-codegen-cli-2.4.32.jar generate \
  -i https://api.storecove.com/api/v2/openapi.json \
  -l csharp \
  -o ./storecove-csharp-client</code></pre>
          </div>
        </div>

        <!-- Supported Languages -->
        <div class="section-block">
          <h2>🌍 Supported Programming Languages</h2>
          <p>Swagger Codegen supports client library generation for these languages and frameworks:</p>
          
          <div class="language-grid">
            <div class="language-category">
              <h3>Popular Languages</h3>
              <div class="language-list">
                <span class="language-tag featured">Java</span>
                <span class="language-tag featured">C#</span>
                <span class="language-tag featured">Node.js</span>
                <span class="language-tag featured">Python</span>
                <span class="language-tag featured">PHP</span>
                <span class="language-tag featured">Ruby</span>
                <span class="language-tag featured">Go</span>
                <span class="language-tag featured">Swift</span>
              </div>
            </div>

            <div class="language-category">
              <h3>Mobile Development</h3>
              <div class="language-list">
                <span class="language-tag">Android</span>
                <span class="language-tag">Objective-C</span>
                <span class="language-tag">Swift (iOS)</span>
                <span class="language-tag">Kotlin</span>
                <span class="language-tag">Dart (Flutter)</span>
              </div>
            </div>

            <div class="language-category">
              <h3>Web & JavaScript</h3>
              <div class="language-list">
                <span class="language-tag">JavaScript</span>
                <span class="language-tag">TypeScript</span>
                <span class="language-tag">Angular</span>
                <span class="language-tag">React</span>
                <span class="language-tag">Vue.js</span>
              </div>
            </div>

            <div class="language-category">
              <h3>Other Languages</h3>
              <div class="language-list">
                <span class="language-tag">Perl</span>
                <span class="language-tag">Scala</span>
                <span class="language-tag">R</span>
                <span class="language-tag">Rust</span>
                <span class="language-tag">Haskell</span>
                <span class="language-tag">Erlang</span>
                <span class="language-tag">Clojure</span>
                <span class="language-tag">Ada</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Integration Examples -->
        <div class="section-block">
          <h2>💡 Quick Integration Examples</h2>
          
          <div class="integration-tabs">
            <div class="tab-buttons">
              <button class="tab-button active" onclick="showTab('curl')">cURL</button>
              <button class="tab-button" onclick="showTab('javascript')">JavaScript</button>
              <button class="tab-button" onclick="showTab('python')">Python</button>
              <button class="tab-button" onclick="showTab('java')">Java</button>
            </div>

            <div id="curl" class="tab-content active">
              <h3>cURL Example</h3>
              <pre><code># Submit a document
curl -X POST "https://api.storecove.com/api/v2/document_submissions" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "legalEntityId": 123,
    "routing": {
      "eIdentifiers": [
        {
          "scheme": "DE:VAT",
          "id": "DE123456789"
        }
      ]
    },
    "document": {
      "documentType": "Invoice",
      "invoice": {
        "invoiceNumber": "INV-2024-001",
        "issueDate": "2024-01-15",
        "accountingCustomerParty": {
          "party": {
            "companyName": "Example Company"
          }
        },
        "invoiceLines": []
      }
    }
  }'</code></pre>
            </div>

            <div id="javascript" class="tab-content">
              <h3>JavaScript/Node.js Example</h3>
              <pre><code>const axios = require('axios');

const storecoveClient = axios.create({
  baseURL: 'https://api.storecove.com/api/v2',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

async function submitDocument() {
  try {
    const response = await storecoveClient.post('/document_submissions', {
      legalEntityId: 123,
      routing: {
        eIdentifiers: [
          {
            scheme: "DE:VAT",
            id: "DE123456789"
          }
        ]
      },
      document: {
        documentType: "Invoice",
        invoice: {
          invoiceNumber: "INV-2024-001",
          issueDate: "2024-01-15",
          accountingCustomerParty: {
            party: {
              companyName: "Example Company"
            }
          },
          invoiceLines: []
        }
      }
    });
    
    console.log('Document submitted:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}</code></pre>
            </div>

            <div id="python" class="tab-content">
              <h3>Python Example</h3>
              <pre><code>import requests
import json

class StorecoveClient:
    def __init__(self, api_key):
        self.base_url = "https://api.storecove.com/api/v2"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def submit_document(self, document_data):
        url = f"{self.base_url}/document_submissions"
        response = requests.post(url, headers=self.headers, json=document_data)
        return response.json()

# Usage
client = StorecoveClient("YOUR_API_KEY")

document = {
    "legalEntityId": 123,
    "routing": {
        "eIdentifiers": [
            {
                "scheme": "DE:VAT",
                "id": "DE123456789"
            }
        ]
    },
    "document": {
        "documentType": "Invoice",
        "invoice": {
            "invoiceNumber": "INV-2024-001",
            "issueDate": "2024-01-15",
            "accountingCustomerParty": {
                "party": {
                    "companyName": "Example Company"
                }
            },
            "invoiceLines": []
        }
    }
}

result = client.submit_document(document)
print(json.dumps(result, indent=2))</code></pre>
            </div>

            <div id="java" class="tab-content">
              <h3>Java Example</h3>
              <pre><code>import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import com.fasterxml.jackson.databind.ObjectMapper;

public class StorecoveClient {
    private final String baseUrl = "https://api.storecove.com/api/v2";
    private final String apiKey;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    
    public StorecoveClient(String apiKey) {
        this.apiKey = apiKey;
        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }
    
    public String submitDocument(Object documentData) throws Exception {
        String json = objectMapper.writeValueAsString(documentData);
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/document_submissions"))
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();
            
        HttpResponse&lt;String&gt; response = httpClient.send(request, 
            HttpResponse.BodyHandlers.ofString());
            
        return response.body();
    }
}</code></pre>
            </div>
          </div>
        </div>

        <!-- Integration Tools -->
        <div class="section-block">
          <h2>🛠️ Integration Tools & Resources</h2>
          
          <div class="tools-grid">
            <div class="tool-card">
              <h3>📮 Postman Collection</h3>
              <p>Ready-to-use Postman collection with all Storecove API endpoints pre-configured.</p>
              <div class="tool-actions">
                <a href="https://api.storecove.com/api/v2/openapi.json" class="btn-secondary" target="_blank">
                  Import OpenAPI Spec
                </a>
              </div>
            </div>

            <div class="tool-card">
              <h3>🔧 Swagger UI</h3>
              <p>Interactive API documentation with live testing capabilities.</p>
              <div class="tool-actions">
                <a href="https://api.storecove.com/docs" class="btn-secondary" target="_blank">
                  Open Swagger UI
                </a>
              </div>
            </div>

            <div class="tool-card">
              <h3>⚡ Code Generator</h3>
              <p>Generate client libraries automatically using Swagger Codegen.</p>
              <div class="tool-actions">
                <button class="btn-secondary" onclick="showCodeGenInstructions()">
                  View Instructions
                </button>
              </div>
            </div>

            <div class="tool-card">
              <h3>📚 REST Clients</h3>
              <p>Use any generic REST client library with the OpenAPI specification.</p>
              <div class="tool-actions">
                <span class="tool-note">Language agnostic</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Best Practices -->
        <div class="section-block">
          <h2>✅ SDK Development Best Practices</h2>
          
          <div class="best-practices">
            <div class="practice-item">
              <div class="practice-icon">🔐</div>
              <div class="practice-content">
                <h3>Authentication</h3>
                <p>Always use Bearer token authentication and store API keys securely. Never commit API keys to version control.</p>
              </div>
            </div>

            <div class="practice-item">
              <div class="practice-icon">🔄</div>
              <div class="practice-content">
                <h3>Error Handling</h3>
                <p>Implement comprehensive error handling for HTTP status codes, network failures, and API validation errors.</p>
              </div>
            </div>

            <div class="practice-item">
              <div class="practice-icon">📊</div>
              <div class="practice-content">
                <h3>Rate Limiting</h3>
                <p>Respect API rate limits and implement exponential backoff for retries.</p>
              </div>
            </div>

            <div class="practice-item">
              <div class="practice-icon">🔍</div>
              <div class="practice-content">
                <h3>Logging</h3>
                <p>Log API requests and responses for debugging, but never log sensitive data like API keys.</p>
              </div>
            </div>

            <div class="practice-item">
              <div class="practice-icon">🏗️</div>
              <div class="practice-content">
                <h3>Data Validation</h3>
                <p>Validate data before sending to the API. Use the OpenAPI schema for client-side validation.</p>
              </div>
            </div>

            <div class="practice-item">
              <div class="practice-icon">🧪</div>
              <div class="practice-content">
                <h3>Testing</h3>
                <p>Use the sandbox environment for testing. Implement unit and integration tests for your SDK.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- SDK Maintenance -->
        <div class="section-block">
          <h2>🔄 Keeping SDKs Updated</h2>
          <div class="maintenance-info">
            <p>The Storecove API evolves over time. Keep your generated SDKs updated by:</p>
            <ul>
              <li>Regularly checking the OpenAPI specification for changes</li>
              <li>Regenerating client libraries when new API versions are released</li>
              <li>Testing compatibility with new API features</li>
              <li>Updating your application code to handle API deprecations</li>
            </ul>
            
            <div class="update-command">
              <h4>Quick Update Command</h4>
              <pre><code># Regenerate your client library
java -jar swagger-codegen-cli-2.4.32.jar generate \
  -i https://api.storecove.com/api/v2/openapi.json \
  -l [your-language] \
  -o ./storecove-client</code></pre>
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
  name: 'SDKLibraries',
  mounted() {
    // Add tab functionality
    window.showTab = (tabName) => {
      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Remove active class from all tab buttons
      document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
      });
      
      // Show selected tab content
      document.getElementById(tabName).classList.add('active');
      
      // Add active class to clicked button
      event.target.classList.add('active');
    };

    // Add code generation instructions
    window.showCodeGenInstructions = () => {
      alert('To generate a client library:\n\n1. Download Swagger Codegen CLI\n2. Run: java -jar swagger-codegen-cli.jar generate -i https://api.storecove.com/api/v2/openapi.json -l [language] -o ./output\n3. Replace [language] with your target language (java, csharp, python, etc.)');
    };
  }
}
</script>

<style scoped>
.sdk-libraries {
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

.section-block {
  margin-bottom: 4rem;
}

.section-block h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #0066cc;
  padding-bottom: 0.5rem;
}

.highlight-box {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 4px solid #0066cc;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.highlight-box p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #333;
}

.api-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.api-detail {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.api-detail code {
  background: #f1f3f4;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.code-example {
  margin: 2rem 0;
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
}

.code-example h3 {
  background: #333;
  color: white;
  padding: 1rem 1.5rem;
  margin: 0;
  font-size: 1.1rem;
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

.language-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.language-category {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #e1e5e9;
}

.language-category h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 0.5rem;
}

.language-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.language-tag {
  background: #e9ecef;
  color: #495057;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.language-tag.featured {
  background: #0066cc;
  color: white;
  font-weight: 600;
}

.language-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.integration-tabs {
  margin: 2rem 0;
}

.tab-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tab-button {
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  color: #495057;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tab-button:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

.tab-button.active {
  background: #0066cc;
  border-color: #0066cc;
  color: white;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.tool-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #e1e5e9;
  transition: transform 0.2s ease;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.tool-card h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.tool-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.tool-actions {
  margin-top: auto;
}

.btn-secondary {
  background: #6c757d;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  transition: background-color 0.2s ease;
  border: none;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #5a6268;
  color: white;
}

.tool-note {
  color: #6c757d;
  font-style: italic;
  font-size: 0.9rem;
}

.best-practices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.practice-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-left: 4px solid #0066cc;
}

.practice-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.practice-content h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.practice-content p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.maintenance-info {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  border-left: 4px solid #28a745;
}

.maintenance-info p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #333;
}

.maintenance-info ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.maintenance-info li {
  margin-bottom: 0.5rem;
  color: #555;
  line-height: 1.5;
}

.update-command {
  margin-top: 2rem;
  background: white;
  border-radius: 6px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.update-command h4 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
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
  
  .section-block h2 {
    font-size: 2rem;
  }
  
  .api-info {
    grid-template-columns: 1fr;
  }
  
  .language-grid {
    grid-template-columns: 1fr;
  }
  
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .best-practices {
    grid-template-columns: 1fr;
  }
  
  .tab-buttons {
    flex-direction: column;
  }
  
  .tab-button {
    text-align: center;
  }
}
</style>