<template>
  <div class="sample-code">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Sample Code</h1>
          <p>Ready-to-use code examples for Storecove integration</p>
        </div>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <!-- Quick Start Guide -->
        <div class="section-block">
          <h2>🚀 Quick Start Examples</h2>
          <p>Jump right in with these essential code examples for common Storecove operations.</p>
          
          <div class="quick-start-grid">
            <div class="quick-start-card" @click="scrollToSection('authentication')">
              <div class="card-icon">🔐</div>
              <h3>Authentication</h3>
              <p>API key setup and requests</p>
            </div>
            <div class="quick-start-card" @click="scrollToSection('submit-invoice')">
              <div class="card-icon">📄</div>
              <h3>Submit Invoice</h3>
              <p>Send your first e-invoice</p>
            </div>
            <div class="quick-start-card" @click="scrollToSection('webhooks')">
              <div class="card-icon">🔗</div>
              <h3>Handle Webhooks</h3>
              <p>Process delivery notifications</p>
            </div>
            <div class="quick-start-card" @click="scrollToSection('discovery')">
              <div class="card-icon">🔍</div>
              <h3>Recipient Discovery</h3>
              <p>Check if recipients can receive e-invoices</p>
            </div>
          </div>
        </div>

        <!-- Authentication Examples -->
        <div id="authentication" class="code-section">
          <h2>🔐 Authentication Examples</h2>
          <p>All Storecove API requests require Bearer token authentication.</p>
          
          <div class="language-tabs">
            <button class="tab-btn active" onclick="showTab('auth-curl')">cURL</button>
            <button class="tab-btn" onclick="showTab('auth-js')">JavaScript</button>
            <button class="tab-btn" onclick="showTab('auth-python')">Python</button>
            <button class="tab-btn" onclick="showTab('auth-java')">Java</button>
            <button class="tab-btn" onclick="showTab('auth-csharp')">C#</button>
          </div>

          <div id="auth-curl" class="tab-content active">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">cURL - Basic Authentication</span>
                <button class="copy-btn" onclick="copyCode('auth-curl-code')">📋 Copy</button>
              </div>
              <pre id="auth-curl-code"><code># Set your API key as environment variable
export STORECOVE_API_KEY="your_api_key_here"

# Test authentication with a simple request
curl -X GET "https://api.storecove.com/api/v2/legal_entities" \
  -H "Authorization: Bearer $STORECOVE_API_KEY" \
  -H "Content-Type: application/json"

# Expected response: 200 OK with your legal entities</code></pre>
            </div>
          </div>

          <div id="auth-js" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">JavaScript - Node.js Authentication</span>
                <button class="copy-btn" onclick="copyCode('auth-js-code')">📋 Copy</button>
              </div>
              <pre id="auth-js-code"><code>const axios = require('axios');

// Create reusable HTTP client
const storecoveAPI = axios.create({
  baseURL: 'https://api.storecove.com/api/v2',
  headers: {
    'Authorization': `Bearer ${process.env.STORECOVE_API_KEY}`,
    'Content-Type': 'application/json'
  },
  timeout: 30000 // 30 second timeout
});

// Test authentication
async function testAuthentication() {
  try {
    const response = await storecoveAPI.get('/legal_entities');
    console.log('✅ Authentication successful');
    console.log('Legal entities:', response.data);
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.error('❌ Authentication failed - check your API key');
    } else {
      console.error('❌ Request failed:', error.message);
    }
    throw error;
  }
}

// Usage
testAuthentication();</code></pre>
            </div>
          </div>

          <div id="auth-python" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">Python - Requests Authentication</span>
                <button class="copy-btn" onclick="copyCode('auth-python-code')">📋 Copy</button>
              </div>
              <pre id="auth-python-code"><code>import requests
import os
from typing import Dict, Any

class StorecoveClient:
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv('STORECOVE_API_KEY')
        if not self.api_key:
            raise ValueError("API key is required")
        
        self.base_url = "https://api.storecove.com/api/v2"
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        })
    
    def test_authentication(self) -> Dict[str, Any]:
        """Test API authentication by fetching legal entities"""
        try:
            response = self.session.get(f"{self.base_url}/legal_entities")
            response.raise_for_status()
            print("✅ Authentication successful")
            return response.json()
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 401:
                print("❌ Authentication failed - check your API key")
            raise
        except requests.exceptions.RequestException as e:
            print(f"❌ Request failed: {e}")
            raise

# Usage
client = StorecoveClient()
legal_entities = client.test_authentication()</code></pre>
            </div>
          </div>

          <div id="auth-java" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">Java - HTTP Client Authentication</span>
                <button class="copy-btn" onclick="copyCode('auth-java-code')">📋 Copy</button>
              </div>
              <pre id="auth-java-code"><code>import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.time.Duration;
import com.fasterxml.jackson.databind.ObjectMapper;

public class StorecoveClient {
    private final String apiKey;
    private final String baseUrl = "https://api.storecove.com/api/v2";
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    
    public StorecoveClient(String apiKey) {
        this.apiKey = apiKey;
        this.httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(30))
            .build();
        this.objectMapper = new ObjectMapper();
    }
    
    public String testAuthentication() throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/legal_entities"))
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .GET()
            .build();
            
        HttpResponse&lt;String&gt; response = httpClient.send(request, 
            HttpResponse.BodyHandlers.ofString());
            
        if (response.statusCode() == 200) {
            System.out.println("✅ Authentication successful");
            return response.body();
        } else if (response.statusCode() == 401) {
            throw new RuntimeException("❌ Authentication failed - check your API key");
        } else {
            throw new RuntimeException("❌ Request failed with status: " + response.statusCode());
        }
    }
    
    // Usage
    public static void main(String[] args) {
        try {
            StorecoveClient client = new StorecoveClient(System.getenv("STORECOVE_API_KEY"));
            String result = client.testAuthentication();
            System.out.println(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}</code></pre>
            </div>
          </div>

          <div id="auth-csharp" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">C# - HttpClient Authentication</span>
                <button class="copy-btn" onclick="copyCode('auth-csharp-code')">📋 Copy</button>
              </div>
              <pre id="auth-csharp-code"><code>using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;

public class StorecoveClient : IDisposable
{
    private readonly HttpClient _httpClient;
    private readonly string _baseUrl = "https://api.storecove.com/api/v2";
    
    public StorecoveClient(string apiKey)
    {
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        _httpClient.DefaultRequestHeaders.Add("Content-Type", "application/json");
        _httpClient.Timeout = TimeSpan.FromSeconds(30);
    }
    
    public async Task&lt;string&gt; TestAuthenticationAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync($"{_baseUrl}/legal_entities");
            
            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine("✅ Authentication successful");
                return await response.Content.ReadAsStringAsync();
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
            {
                throw new UnauthorizedAccessException("❌ Authentication failed - check your API key");
            }
            else
            {
                throw new HttpRequestException($"❌ Request failed with status: {response.StatusCode}");
            }
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"❌ Request failed: {ex.Message}");
            throw;
        }
    }
    
    public void Dispose()
    {
        _httpClient?.Dispose();
    }
}

// Usage
class Program
{
    static async Task Main(string[] args)
    {
        var apiKey = Environment.GetEnvironmentVariable("STORECOVE_API_KEY");
        using var client = new StorecoveClient(apiKey);
        
        try
        {
            var result = await client.TestAuthenticationAsync();
            Console.WriteLine(result);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}</code></pre>
            </div>
          </div>
        </div>

        <!-- Invoice Submission Examples -->
        <div id="submit-invoice" class="code-section">
          <h2>📄 Invoice Submission Examples</h2>
          <p>Complete examples for submitting invoices through the Storecove API.</p>
          
          <div class="language-tabs">
            <button class="tab-btn active" onclick="showTab('invoice-curl')">cURL</button>
            <button class="tab-btn" onclick="showTab('invoice-js')">JavaScript</button>
            <button class="tab-btn" onclick="showTab('invoice-python')">Python</button>
            <button class="tab-btn" onclick="showTab('invoice-php')">PHP</button>
          </div>

          <div id="invoice-curl" class="tab-content active">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">cURL - Submit Complete Invoice</span>
                <button class="copy-btn" onclick="copyCode('invoice-curl-code')">📋 Copy</button>
              </div>
              <pre id="invoice-curl-code"><code>curl -X POST "https://api.storecove.com/api/v2/document_submissions" \
  -H "Authorization: Bearer $STORECOVE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "legalEntityId": 12345,
    "routing": {
      "eIdentifiers": [
        {
          "scheme": "DE:VAT",
          "id": "DE123456789"
        }
      ],
      "emails": ["fallback@customer.com"]
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
              "street1": "123 Customer Street",
              "city": "Berlin",
              "zip": "10115",
              "country": "DE"
            }
          },
          "publicIdentifiers": [
            {
              "scheme": "DE:VAT",
              "id": "DE123456789"
            }
          ]
        },
        "invoiceLines": [
          {
            "lineId": "1",
            "name": "Consulting Services",
            "description": "Monthly consulting services",
            "quantity": 20,
            "quantityUnitCode": "HUR",
            "itemPrice": 150.00,
            "amountExcludingTax": 3000.00,
            "taxesDutiesFees": [
              {
                "taxAmount": 570.00,
                "percentage": 19.0,
                "country": "DE",
                "category": "standard"
              }
            ]
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
  }'</code></pre>
            </div>
          </div>

          <div id="invoice-js" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">JavaScript - Submit Invoice with Error Handling</span>
                <button class="copy-btn" onclick="copyCode('invoice-js-code')">📋 Copy</button>
              </div>
              <pre id="invoice-js-code"><code>async function submitInvoice(invoiceData) {
  try {
    const response = await storecoveAPI.post('/document_submissions', {
      legalEntityId: invoiceData.legalEntityId,
      routing: {
        eIdentifiers: invoiceData.recipientIdentifiers,
        emails: invoiceData.fallbackEmails || []
      },
      document: {
        documentType: "Invoice",
        invoice: {
          invoiceNumber: invoiceData.invoiceNumber,
          issueDate: invoiceData.issueDate,
          dueDate: invoiceData.dueDate,
          documentCurrencyCode: invoiceData.currency || "EUR",
          accountingCustomerParty: {
            party: {
              companyName: invoiceData.customer.name,
              address: invoiceData.customer.address
            },
            publicIdentifiers: invoiceData.recipientIdentifiers
          },
          invoiceLines: invoiceData.lines.map((line, index) => ({
            lineId: (index + 1).toString(),
            name: line.name,
            description: line.description,
            quantity: line.quantity,
            quantityUnitCode: line.unitCode || "C62",
            itemPrice: line.unitPrice,
            amountExcludingTax: line.quantity * line.unitPrice,
            taxesDutiesFees: [{
              taxAmount: (line.quantity * line.unitPrice) * (line.taxRate / 100),
              percentage: line.taxRate,
              country: invoiceData.taxCountry,
              category: "standard"
            }]
          })),
          paymentMeansArray: invoiceData.paymentMeans ? [invoiceData.paymentMeans] : []
        }
      }
    });

    console.log('✅ Invoice submitted successfully');
    console.log('Document GUID:', response.data.guid);
    return response.data;

  } catch (error) {
    console.error('❌ Invoice submission failed');
    
    if (error.response?.status === 422) {
      console.error('Validation errors:', error.response.data);
    } else if (error.response?.status === 401) {
      console.error('Authentication failed - check your API key');
    } else {
      console.error('Error:', error.message);
    }
    
    throw error;
  }
}

// Example usage
const invoiceData = {
  legalEntityId: 12345,
  invoiceNumber: "INV-2024-001",
  issueDate: "2024-01-15",
  dueDate: "2024-02-15",
  currency: "EUR",
  taxCountry: "DE",
  recipientIdentifiers: [
    { scheme: "DE:VAT", id: "DE123456789" }
  ],
  fallbackEmails: ["customer@example.com"],
  customer: {
    name: "Customer Company Ltd",
    address: {
      street1: "123 Customer Street",
      city: "Berlin",
      zip: "10115",
      country: "DE"
    }
  },
  lines: [
    {
      name: "Consulting Services",
      description: "Monthly consulting services",
      quantity: 20,
      unitCode: "HUR",
      unitPrice: 150.00,
      taxRate: 19.0
    }
  ],
  paymentMeans: {
    code: "credit_transfer",
    account: "DE89370400440532013000",
    holder: "Your Company Name",
    paymentId: "INV-2024-001"
  }
};

submitInvoice(invoiceData);</code></pre>
            </div>
          </div>

          <div id="invoice-python" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">Python - Invoice Submission with Validation</span>
                <button class="copy-btn" onclick="copyCode('invoice-python-code')">📋 Copy</button>
              </div>
              <pre id="invoice-python-code"><code>from datetime import datetime, timedelta
from decimal import Decimal
from typing import List, Dict, Any, Optional

class InvoiceLine:
    def __init__(self, name: str, description: str, quantity: float, 
                 unit_price: float, tax_rate: float, unit_code: str = "C62"):
        self.name = name
        self.description = description
        self.quantity = quantity
        self.unit_price = unit_price
        self.tax_rate = tax_rate
        self.unit_code = unit_code
    
    def to_dict(self, line_id: str, tax_country: str) -> Dict[str, Any]:
        amount_excluding_tax = self.quantity * self.unit_price
        tax_amount = amount_excluding_tax * (self.tax_rate / 100)
        
        return {
            "lineId": line_id,
            "name": self.name,
            "description": self.description,
            "quantity": self.quantity,
            "quantityUnitCode": self.unit_code,
            "itemPrice": self.unit_price,
            "amountExcludingTax": amount_excluding_tax,
            "taxesDutiesFees": [{
                "taxAmount": tax_amount,
                "percentage": self.tax_rate,
                "country": tax_country,
                "category": "standard"
            }]
        }

class StorecoveInvoice:
    def __init__(self, client: StorecoveClient):
        self.client = client
    
    def submit_invoice(self, 
                      legal_entity_id: int,
                      invoice_number: str,
                      customer_name: str,
                      customer_address: Dict[str, str],
                      recipient_identifiers: List[Dict[str, str]],
                      lines: List[InvoiceLine],
                      currency: str = "EUR",
                      payment_terms_days: int = 30,
                      fallback_emails: Optional[List[str]] = None) -> Dict[str, Any]:
        
        # Calculate dates
        issue_date = datetime.now().date()
        due_date = issue_date + timedelta(days=payment_terms_days)
        
        # Build invoice payload
        payload = {
            "legalEntityId": legal_entity_id,
            "routing": {
                "eIdentifiers": recipient_identifiers,
                "emails": fallback_emails or []
            },
            "document": {
                "documentType": "Invoice",
                "invoice": {
                    "invoiceNumber": invoice_number,
                    "issueDate": issue_date.isoformat(),
                    "dueDate": due_date.isoformat(),
                    "documentCurrencyCode": currency,
                    "accountingCustomerParty": {
                        "party": {
                            "companyName": customer_name,
                            "address": customer_address
                        },
                        "publicIdentifiers": recipient_identifiers
                    },
                    "invoiceLines": [
                        line.to_dict(str(i + 1), customer_address["country"])
                        for i, line in enumerate(lines)
                    ]
                }
            }
        }
        
        try:
            response = self.client.session.post(
                f"{self.client.base_url}/document_submissions",
                json=payload
            )
            response.raise_for_status()
            
            result = response.json()
            print(f"✅ Invoice {invoice_number} submitted successfully")
            print(f"Document GUID: {result.get('guid')}")
            return result
            
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 422:
                errors = e.response.json()
                print("❌ Validation errors:")
                for error in errors:
                    print(f"  - {error.get('source', 'Unknown')}: {error.get('details', 'No details')}")
            else:
                print(f"❌ HTTP Error {e.response.status_code}: {e.response.text}")
            raise
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
            raise

# Example usage
client = StorecoveClient()
invoice_service = StorecoveInvoice(client)

# Create invoice lines
lines = [
    InvoiceLine(
        name="Consulting Services",
        description="Monthly consulting services",
        quantity=20.0,
        unit_price=150.00,
        tax_rate=19.0,
        unit_code="HUR"
    ),
    InvoiceLine(
        name="Software License",
        description="Annual software license",
        quantity=1.0,
        unit_price=1200.00,
        tax_rate=19.0
    )
]

# Submit invoice
result = invoice_service.submit_invoice(
    legal_entity_id=12345,
    invoice_number="INV-2024-001",
    customer_name="Customer Company Ltd",
    customer_address={
        "street1": "123 Customer Street",
        "city": "Berlin",
        "zip": "10115",
        "country": "DE"
    },
    recipient_identifiers=[
        {"scheme": "DE:VAT", "id": "DE123456789"}
    ],
    lines=lines,
    fallback_emails=["customer@example.com"]
)</code></pre>
            </div>
          </div>

          <div id="invoice-php" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">PHP - Invoice Submission Class</span>
                <button class="copy-btn" onclick="copyCode('invoice-php-code')">📋 Copy</button>
              </div>
              <pre id="invoice-php-code"><code>&lt;?php

class StorecoveInvoice {
    private $apiKey;
    private $baseUrl = 'https://api.storecove.com/api/v2';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
    
    public function submitInvoice($invoiceData) {
        $payload = [
            'legalEntityId' => $invoiceData['legalEntityId'],
            'routing' => [
                'eIdentifiers' => $invoiceData['recipientIdentifiers'],
                'emails' => $invoiceData['fallbackEmails'] ?? []
            ],
            'document' => [
                'documentType' => 'Invoice',
                'invoice' => [
                    'invoiceNumber' => $invoiceData['invoiceNumber'],
                    'issueDate' => $invoiceData['issueDate'],
                    'dueDate' => $invoiceData['dueDate'],
                    'documentCurrencyCode' => $invoiceData['currency'] ?? 'EUR',
                    'accountingCustomerParty' => [
                        'party' => [
                            'companyName' => $invoiceData['customer']['name'],
                            'address' => $invoiceData['customer']['address']
                        ],
                        'publicIdentifiers' => $invoiceData['recipientIdentifiers']
                    ],
                    'invoiceLines' => $this->buildInvoiceLines($invoiceData['lines'], $invoiceData['taxCountry']),
                    'paymentMeansArray' => isset($invoiceData['paymentMeans']) ? [$invoiceData['paymentMeans']] : []
                ]
            ]
        ];
        
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $this->baseUrl . '/document_submissions',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($payload),
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . $this->apiKey,
                'Content-Type: application/json'
            ],
            CURLOPT_TIMEOUT => 30
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);
        
        if ($error) {
            throw new Exception("cURL Error: " . $error);
        }
        
        $responseData = json_decode($response, true);
        
        if ($httpCode >= 200 && $httpCode < 300) {
            echo "✅ Invoice {$invoiceData['invoiceNumber']} submitted successfully\n";
            echo "Document GUID: " . $responseData['guid'] . "\n";
            return $responseData;
        } else {
            echo "❌ Invoice submission failed (HTTP $httpCode)\n";
            if ($httpCode === 422) {
                echo "Validation errors:\n";
                foreach ($responseData as $error) {
                    echo "  - {$error['source']}: {$error['details']}\n";
                }
            }
            throw new Exception("HTTP Error $httpCode: " . $response);
        }
    }
    
    private function buildInvoiceLines($lines, $taxCountry) {
        $invoiceLines = [];
        
        foreach ($lines as $index => $line) {
            $amountExcludingTax = $line['quantity'] * $line['unitPrice'];
            $taxAmount = $amountExcludingTax * ($line['taxRate'] / 100);
            
            $invoiceLines[] = [
                'lineId' => (string)($index + 1),
                'name' => $line['name'],
                'description' => $line['description'],
                'quantity' => $line['quantity'],
                'quantityUnitCode' => $line['unitCode'] ?? 'C62',
                'itemPrice' => $line['unitPrice'],
                'amountExcludingTax' => $amountExcludingTax,
                'taxesDutiesFees' => [[
                    'taxAmount' => $taxAmount,
                    'percentage' => $line['taxRate'],
                    'country' => $taxCountry,
                    'category' => 'standard'
                ]]
            ];
        }
        
        return $invoiceLines;
    }
}

// Example usage
$apiKey = $_ENV['STORECOVE_API_KEY'];
$invoice = new StorecoveInvoice($apiKey);

$invoiceData = [
    'legalEntityId' => 12345,
    'invoiceNumber' => 'INV-2024-001',
    'issueDate' => '2024-01-15',
    'dueDate' => '2024-02-15',
    'currency' => 'EUR',
    'taxCountry' => 'DE',
    'recipientIdentifiers' => [
        ['scheme' => 'DE:VAT', 'id' => 'DE123456789']
    ],
    'fallbackEmails' => ['customer@example.com'],
    'customer' => [
        'name' => 'Customer Company Ltd',
        'address' => [
            'street1' => '123 Customer Street',
            'city' => 'Berlin',
            'zip' => '10115',
            'country' => 'DE'
        ]
    ],
    'lines' => [
        [
            'name' => 'Consulting Services',
            'description' => 'Monthly consulting services',
            'quantity' => 20,
            'unitCode' => 'HUR',
            'unitPrice' => 150.00,
            'taxRate' => 19.0
        ]
    ],
    'paymentMeans' => [
        'code' => 'credit_transfer',
        'account' => 'DE89370400440532013000',
        'holder' => 'Your Company Name',
        'paymentId' => 'INV-2024-001'
    ]
];

try {
    $result = $invoice->submitInvoice($invoiceData);
    print_r($result);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}

?&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- Webhook Handling Examples -->
        <div id="handle-webhooks" class="code-section">
          <h2>🔔 Webhook Handling Examples</h2>
          <p>Implement webhook endpoints to receive real-time updates from Storecove.</p>
          
          <div class="language-tabs">
            <button class="tab-btn active" onclick="showTab('webhook-node')">Node.js</button>
            <button class="tab-btn" onclick="showTab('webhook-python')">Python</button>
            <button class="tab-btn" onclick="showTab('webhook-php')">PHP</button>
            <button class="tab-btn" onclick="showTab('webhook-java')">Java</button>
          </div>

          <div id="webhook-node" class="tab-content active">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">Node.js + Express - Complete Webhook Handler</span>
                <button class="copy-btn" onclick="copyCode('webhook-node-code')">📋 Copy</button>
              </div>
              <pre id="webhook-node-code"><code>const express = require('express');
const crypto = require('crypto');
const app = express();

// Middleware to capture raw body for signature verification
app.use('/webhook/storecove', express.raw({ type: 'application/json' }));
app.use(express.json());

// Webhook secret from Storecove dashboard
const WEBHOOK_SECRET = process.env.STORECOVE_WEBHOOK_SECRET;

// Verify webhook signature
function verifyWebhookSignature(payload, signature) {
    const computedSignature = crypto
        .createHmac('sha256', WEBHOOK_SECRET)
        .update(payload)
        .digest('hex');
    
    const expectedSignature = `sha256=${computedSignature}`;
    
    return crypto.timingSafeEqual(
        Buffer.from(signature, 'utf8'),
        Buffer.from(expectedSignature, 'utf8')
    );
}

// Main webhook endpoint
app.post('/webhook/storecove', (req, res) => {
    try {
        const signature = req.headers['x-storecove-signature'];
        
        if (!signature) {
            console.error('❌ Missing webhook signature');
            return res.status(401).json({ error: 'Missing signature' });
        }
        
        if (!verifyWebhookSignature(req.body, signature)) {
            console.error('❌ Invalid webhook signature');
            return res.status(401).json({ error: 'Invalid signature' });
        }
        
        const event = JSON.parse(req.body.toString());
        console.log('✅ Webhook received:', event.eventType);
        
        // Handle different event types
        switch (event.eventType) {
            case 'document.sent':
                handleDocumentSent(event);
                break;
                
            case 'document.delivered':
                handleDocumentDelivered(event);
                break;
                
            case 'document.failed':
                handleDocumentFailed(event);
                break;
                
            case 'document.legal_validation_failed':
                handleLegalValidationFailed(event);
                break;
                
            case 'document.updated':
                handleDocumentUpdated(event);
                break;
                
            default:
                console.log(`⚠️ Unhandled event type: ${event.eventType}`);
        }
        
        // Always respond with 200 to acknowledge receipt
        res.status(200).json({ status: 'received' });
        
    } catch (error) {
        console.error('❌ Webhook processing error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

function handleDocumentSent(event) {
    console.log(`📤 Document sent: ${event.documentGuid}`);
    
    // Update your database
    updateDocumentStatus(event.documentGuid, 'sent', {
        sentAt: event.timestamp,
        recipientInfo: event.recipientInfo
    });
    
    // Send notification to user
    notifyUser(event.legalEntityId, 'Document successfully sent', {
        documentGuid: event.documentGuid,
        recipientName: event.recipientInfo?.name
    });
}

function handleDocumentDelivered(event) {
    console.log(`✅ Document delivered: ${event.documentGuid}`);
    
    updateDocumentStatus(event.documentGuid, 'delivered', {
        deliveredAt: event.timestamp,
        deliveryMethod: event.deliveryMethod
    });
    
    // Trigger business logic (e.g., payment reminders)
    schedulePaymentReminder(event.documentGuid, event.dueDate);
}

function handleDocumentFailed(event) {
    console.error(`❌ Document failed: ${event.documentGuid}`);
    console.error('Failure reason:', event.failureReason);
    
    updateDocumentStatus(event.documentGuid, 'failed', {
        failedAt: event.timestamp,
        reason: event.failureReason,
        details: event.failureDetails
    });
    
    // Alert administrators
    alertAdministrators('Document delivery failed', {
        documentGuid: event.documentGuid,
        reason: event.failureReason
    });
}

function handleLegalValidationFailed(event) {
    console.error(`⚖️ Legal validation failed: ${event.documentGuid}`);
    
    updateDocumentStatus(event.documentGuid, 'validation_failed', {
        failedAt: event.timestamp,
        validationErrors: event.validationErrors
    });
    
    // Notify document creator for corrections
    notifyDocumentCreator(event.documentGuid, event.validationErrors);
}

function handleDocumentUpdated(event) {
    console.log(`🔄 Document updated: ${event.documentGuid}`);
    
    // Sync document updates
    syncDocumentUpdates(event.documentGuid, event.updates);
}

// Helper functions (implement based on your architecture)
async function updateDocumentStatus(documentGuid, status, metadata) {
    // Update your database
    console.log(`Updating ${documentGuid} to status: ${status}`);
}

async function notifyUser(legalEntityId, message, data) {
    // Send notification (email, push, etc.)
    console.log(`Notifying entity ${legalEntityId}: ${message}`);
}

async function schedulePaymentReminder(documentGuid, dueDate) {
    // Schedule payment reminder logic
    console.log(`Scheduling payment reminder for ${documentGuid} due ${dueDate}`);
}

async function alertAdministrators(message, data) {
    // Alert system administrators
    console.log(`ADMIN ALERT: ${message}`, data);
}

async function notifyDocumentCreator(documentGuid, errors) {
    // Notify document creator about validation errors
    console.log(`Validation errors for ${documentGuid}:`, errors);
}

async function syncDocumentUpdates(documentGuid, updates) {
    // Sync document updates to your system
    console.log(`Syncing updates for ${documentGuid}:`, updates);
}

// Health check endpoint
app.get('/webhook/health', (req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Webhook server running on port ${PORT}`);
    console.log(`📡 Storecove webhook endpoint: http://localhost:${PORT}/webhook/storecove`);
});</code></pre>
            </div>
          </div>

          <div id="webhook-python" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">Python + Flask - Webhook Handler with Database</span>
                <button class="copy-btn" onclick="copyCode('webhook-python-code')">📋 Copy</button>
              </div>
              <pre id="webhook-python-code"><code>from flask import Flask, request, jsonify
import hashlib
import hmac
import json
import logging
from datetime import datetime
from typing import Dict, Any

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Configuration
WEBHOOK_SECRET = os.getenv('STORECOVE_WEBHOOK_SECRET')

class StorecoveWebhookHandler:
    def __init__(self, secret: str):
        self.secret = secret
        
    def verify_signature(self, payload: bytes, signature: str) -> bool:
        """Verify webhook signature for security."""
        if not signature:
            return False
            
        computed_signature = hmac.new(
            self.secret.encode('utf-8'),
            payload,
            hashlib.sha256
        ).hexdigest()
        
        expected_signature = f"sha256={computed_signature}"
        
        return hmac.compare_digest(signature, expected_signature)
    
    def handle_event(self, event: Dict[str, Any]) -> None:
        """Route events to appropriate handlers."""
        event_type = event.get('eventType')
        document_guid = event.get('documentGuid')
        
        logger.info(f"Processing event: {event_type} for document: {document_guid}")
        
        handlers = {
            'document.sent': self.handle_document_sent,
            'document.delivered': self.handle_document_delivered,
            'document.failed': self.handle_document_failed,
            'document.legal_validation_failed': self.handle_legal_validation_failed,
            'document.updated': self.handle_document_updated,
            'recipient.created': self.handle_recipient_created,
            'payment.received': self.handle_payment_received
        }
        
        handler = handlers.get(event_type)
        if handler:
            try:
                handler(event)
            except Exception as e:
                logger.error(f"Error handling {event_type}: {e}")
                raise
        else:
            logger.warning(f"No handler for event type: {event_type}")
    
    def handle_document_sent(self, event: Dict[str, Any]) -> None:
        """Handle document sent event."""
        document_guid = event['documentGuid']
        recipient_info = event.get('recipientInfo', {})
        
        # Update document status in database
        self.update_document_status(
            document_guid, 
            'sent',
            metadata={
                'sent_at': event['timestamp'],
                'recipient_name': recipient_info.get('name'),
                'delivery_method': event.get('deliveryMethod')
            }
        )
        
        # Send notification
        self.send_notification(
            event['legalEntityId'],
            f"Invoice sent to {recipient_info.get('name', 'recipient')}",
            {'document_guid': document_guid}
        )
        
        logger.info(f"✅ Document {document_guid} sent successfully")
    
    def handle_document_delivered(self, event: Dict[str, Any]) -> None:
        """Handle document delivered event."""
        document_guid = event['documentGuid']
        
        self.update_document_status(
            document_guid,
            'delivered',
            metadata={
                'delivered_at': event['timestamp'],
                'delivery_confirmation': event.get('deliveryConfirmation')
            }
        )
        
        # Start payment tracking if it's an invoice
        if event.get('documentType') == 'invoice':
            self.start_payment_tracking(document_guid, event.get('dueDate'))
        
        logger.info(f"✅ Document {document_guid} delivered")
    
    def handle_document_failed(self, event: Dict[str, Any]) -> None:
        """Handle document delivery failure."""
        document_guid = event['documentGuid']
        failure_reason = event.get('failureReason', 'Unknown error')
        
        self.update_document_status(
            document_guid,
            'failed',
            metadata={
                'failed_at': event['timestamp'],
                'failure_reason': failure_reason,
                'failure_details': event.get('failureDetails')
            }
        )
        
        # Alert administrators
        self.alert_administrators(
            f"Document delivery failed: {document_guid}",
            {'reason': failure_reason}
        )
        
        logger.error(f"❌ Document {document_guid} failed: {failure_reason}")
    
    def handle_legal_validation_failed(self, event: Dict[str, Any]) -> None:
        """Handle legal validation failure."""
        document_guid = event['documentGuid']
        validation_errors = event.get('validationErrors', [])
        
        self.update_document_status(
            document_guid,
            'validation_failed',
            metadata={
                'failed_at': event['timestamp'],
                'validation_errors': validation_errors
            }
        )
        
        # Notify document creator
        self.notify_document_creator(document_guid, validation_errors)
        
        logger.error(f"⚖️ Legal validation failed for {document_guid}")
    
    def handle_document_updated(self, event: Dict[str, Any]) -> None:
        """Handle document update event."""
        document_guid = event['documentGuid']
        updates = event.get('updates', {})
        
        # Sync updates to local database
        self.sync_document_updates(document_guid, updates)
        
        logger.info(f"🔄 Document {document_guid} updated")
    
    def handle_recipient_created(self, event: Dict[str, Any]) -> None:
        """Handle new recipient creation."""
        recipient_id = event.get('recipientId')
        recipient_info = event.get('recipientInfo', {})
        
        # Store recipient information
        self.store_recipient_info(recipient_id, recipient_info)
        
        logger.info(f"👤 New recipient created: {recipient_id}")
    
    def handle_payment_received(self, event: Dict[str, Any]) -> None:
        """Handle payment received event."""
        document_guid = event['documentGuid']
        payment_info = event.get('paymentInfo', {})
        
        # Update payment status
        self.update_payment_status(document_guid, 'paid', payment_info)
        
        # Send payment confirmation
        self.send_payment_confirmation(document_guid, payment_info)
        
        logger.info(f"💰 Payment received for {document_guid}")
    
    # Database operations (implement based on your database)
    def update_document_status(self, document_guid: str, status: str, metadata: Dict = None):
        # Update document status in your database
        logger.info(f"Updating {document_guid} to status: {status}")
        pass
    
    def send_notification(self, legal_entity_id: int, message: str, data: Dict = None):
        # Send notification to users
        logger.info(f"Notification for entity {legal_entity_id}: {message}")
        pass
    
    def start_payment_tracking(self, document_guid: str, due_date: str):
        # Start payment tracking and reminders
        logger.info(f"Starting payment tracking for {document_guid}, due: {due_date}")
        pass
    
    def alert_administrators(self, message: str, data: Dict = None):
        # Alert system administrators
        logger.warning(f"ADMIN ALERT: {message}")
        pass
    
    def notify_document_creator(self, document_guid: str, errors: list):
        # Notify document creator about issues
        logger.info(f"Notifying creator about errors in {document_guid}")
        pass
    
    def sync_document_updates(self, document_guid: str, updates: Dict):
        # Sync document updates
        logger.info(f"Syncing updates for {document_guid}")
        pass
    
    def store_recipient_info(self, recipient_id: str, info: Dict):
        # Store recipient information
        logger.info(f"Storing recipient info for {recipient_id}")
        pass
    
    def update_payment_status(self, document_guid: str, status: str, payment_info: Dict):
        # Update payment status
        logger.info(f"Payment status for {document_guid}: {status}")
        pass
    
    def send_payment_confirmation(self, document_guid: str, payment_info: Dict):
        # Send payment confirmation
        logger.info(f"Sending payment confirmation for {document_guid}")
        pass

# Initialize webhook handler
webhook_handler = StorecoveWebhookHandler(WEBHOOK_SECRET)

@app.route('/webhook/storecove', methods=['POST'])
def handle_webhook():
    try:
        # Get signature from headers
        signature = request.headers.get('X-Storecove-Signature')
        
        if not signature:
            logger.error("Missing webhook signature")
            return jsonify({'error': 'Missing signature'}), 401
        
        # Verify signature
        payload = request.get_data()
        if not webhook_handler.verify_signature(payload, signature):
            logger.error("Invalid webhook signature")
            return jsonify({'error': 'Invalid signature'}), 401
        
        # Parse event
        event = request.get_json()
        if not event:
            logger.error("Invalid JSON payload")
            return jsonify({'error': 'Invalid JSON'}), 400
        
        # Handle event
        webhook_handler.handle_event(event)
        
        return jsonify({'status': 'received'}), 200
        
    except Exception as e:
        logger.error(f"Webhook processing error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/webhook/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat()
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)</code></pre>
            </div>
          </div>

          <div id="webhook-php" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">PHP - WordPress Compatible Webhook Handler</span>
                <button class="copy-btn" onclick="copyCode('webhook-php-code')">📋 Copy</button>
              </div>
              <pre id="webhook-php-code"><code>&lt;?php

class StorecoveWebhookHandler {
    private $webhookSecret;
    private $logger;
    
    public function __construct($webhookSecret) {
        $this->webhookSecret = $webhookSecret;
        $this->logger = new Logger();
    }
    
    public function handleWebhook() {
        try {
            // Get raw POST data
            $payload = file_get_contents('php://input');
            $signature = $_SERVER['HTTP_X_STORECOVE_SIGNATURE'] ?? '';
            
            if (!$this->verifySignature($payload, $signature)) {
                $this->logger->error('Invalid webhook signature');
                http_response_code(401);
                echo json_encode(['error' => 'Invalid signature']);
                return;
            }
            
            $event = json_decode($payload, true);
            if (!$event) {
                $this->logger->error('Invalid JSON payload');
                http_response_code(400);
                echo json_encode(['error' => 'Invalid JSON']);
                return;
            }
            
            $this->processEvent($event);
            
            http_response_code(200);
            echo json_encode(['status' => 'received']);
            
        } catch (Exception $e) {
            $this->logger->error('Webhook processing error: ' . $e->getMessage());
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    private function verifySignature($payload, $signature) {
        if (empty($signature)) {
            return false;
        }
        
        $computedSignature = 'sha256=' . hash_hmac('sha256', $payload, $this->webhookSecret);
        
        return hash_equals($signature, $computedSignature);
    }
    
    private function processEvent($event) {
        $eventType = $event['eventType'] ?? '';
        $documentGuid = $event['documentGuid'] ?? '';
        
        $this->logger->info("Processing event: $eventType for document: $documentGuid");
        
        switch ($eventType) {
            case 'document.sent':
                $this->handleDocumentSent($event);
                break;
                
            case 'document.delivered':
                $this->handleDocumentDelivered($event);
                break;
                
            case 'document.failed':
                $this->handleDocumentFailed($event);
                break;
                
            case 'document.legal_validation_failed':
                $this->handleLegalValidationFailed($event);
                break;
                
            case 'document.updated':
                $this->handleDocumentUpdated($event);
                break;
                
            default:
                $this->logger->warning("Unhandled event type: $eventType");
        }
    }
    
    private function handleDocumentSent($event) {
        $documentGuid = $event['documentGuid'];
        $recipientInfo = $event['recipientInfo'] ?? [];
        
        // Update database
        $this->updateDocumentStatus($documentGuid, 'sent', [
            'sent_at' => $event['timestamp'],
            'recipient_name' => $recipientInfo['name'] ?? null,
            'delivery_method' => $event['deliveryMethod'] ?? null
        ]);
        
        // Send notification
        $this->sendNotification(
            $event['legalEntityId'],
            "Document sent to " . ($recipientInfo['name'] ?? 'recipient'),
            ['document_guid' => $documentGuid]
        );
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_document_sent', $event);
        }
        
        $this->logger->info("✅ Document $documentGuid sent successfully");
    }
    
    private function handleDocumentDelivered($event) {
        $documentGuid = $event['documentGuid'];
        
        $this->updateDocumentStatus($documentGuid, 'delivered', [
            'delivered_at' => $event['timestamp'],
            'delivery_confirmation' => $event['deliveryConfirmation'] ?? null
        ]);
        
        // Start payment tracking for invoices
        if (($event['documentType'] ?? '') === 'invoice') {
            $this->startPaymentTracking($documentGuid, $event['dueDate'] ?? null);
        }
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_document_delivered', $event);
        }
        
        $this->logger->info("✅ Document $documentGuid delivered");
    }
    
    private function handleDocumentFailed($event) {
        $documentGuid = $event['documentGuid'];
        $failureReason = $event['failureReason'] ?? 'Unknown error';
        
        $this->updateDocumentStatus($documentGuid, 'failed', [
            'failed_at' => $event['timestamp'],
            'failure_reason' => $failureReason,
            'failure_details' => $event['failureDetails'] ?? null
        ]);
        
        // Alert administrators
        $this->alertAdministrators(
            "Document delivery failed: $documentGuid",
            ['reason' => $failureReason]
        );
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_document_failed', $event);
        }
        
        $this->logger->error("❌ Document $documentGuid failed: $failureReason");
    }
    
    private function handleLegalValidationFailed($event) {
        $documentGuid = $event['documentGuid'];
        $validationErrors = $event['validationErrors'] ?? [];
        
        $this->updateDocumentStatus($documentGuid, 'validation_failed', [
            'failed_at' => $event['timestamp'],
            'validation_errors' => $validationErrors
        ]);
        
        $this->notifyDocumentCreator($documentGuid, $validationErrors);
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_validation_failed', $event);
        }
        
        $this->logger->error("⚖️ Legal validation failed for $documentGuid");
    }
    
    private function handleDocumentUpdated($event) {
        $documentGuid = $event['documentGuid'];
        $updates = $event['updates'] ?? [];
        
        $this->syncDocumentUpdates($documentGuid, $updates);
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_document_updated', $event);
        }
        
        $this->logger->info("🔄 Document $documentGuid updated");
    }
    
    // Database operations
    private function updateDocumentStatus($documentGuid, $status, $metadata = []) {
        global $wpdb;
        
        if ($wpdb) {
            // WordPress database update
            $wpdb->update(
                'storecove_documents',
                [
                    'status' => $status,
                    'metadata' => json_encode($metadata),
                    'updated_at' => current_time('mysql')
                ],
                ['document_guid' => $documentGuid]
            );
        } else {
            // Standard database update
            $pdo = $this->getDatabaseConnection();
            $stmt = $pdo->prepare("
                UPDATE documents 
                SET status = ?, metadata = ?, updated_at = NOW() 
                WHERE document_guid = ?
            ");
            $stmt->execute([$status, json_encode($metadata), $documentGuid]);
        }
        
        $this->logger->info("Updated $documentGuid to status: $status");
    }
    
    private function sendNotification($legalEntityId, $message, $data = []) {
        // WordPress notification
        if (function_exists('wp_mail')) {
            $user = get_user_by('meta_key', 'storecove_legal_entity_id');
            if ($user) {
                wp_mail(
                    $user->user_email,
                    'Storecove Document Update',
                    $message . "\n\nDetails: " . json_encode($data)
                );
            }
        }
        
        $this->logger->info("Notification sent for entity $legalEntityId: $message");
    }
    
    private function startPaymentTracking($documentGuid, $dueDate) {
        // Schedule payment reminders
        if (function_exists('wp_schedule_event')) {
            $reminderTime = strtotime($dueDate . ' -7 days');
            wp_schedule_single_event($reminderTime, 'storecove_payment_reminder', [$documentGuid]);
        }
        
        $this->logger->info("Payment tracking started for $documentGuid, due: $dueDate");
    }
    
    private function alertAdministrators($message, $data = []) {
        // Send admin email
        if (function_exists('wp_mail')) {
            $adminEmail = get_option('admin_email');
            wp_mail(
                $adminEmail,
                'Storecove Alert',
                $message . "\n\nDetails: " . json_encode($data)
            );
        }
        
        $this->logger->warning("ADMIN ALERT: $message");
    }
    
    private function notifyDocumentCreator($documentGuid, $errors) {
        $this->logger->info("Validation errors for $documentGuid: " . json_encode($errors));
    }
    
    private function syncDocumentUpdates($documentGuid, $updates) {
        $this->logger->info("Syncing updates for $documentGuid: " . json_encode($updates));
    }
    
    private function getDatabaseConnection() {
        // Return PDO connection for non-WordPress environments
        return new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME,
            DB_USER,
            DB_PASSWORD
        );
    }
}

class Logger {
    public function info($message) {
        error_log("[INFO] " . $message);
    }
    
    public function error($message) {
        error_log("[ERROR] " . $message);
    }
    
    public function warning($message) {
        error_log("[WARNING] " . $message);
    }
}

// Usage for WordPress
if (defined('ABSPATH')) {
    // WordPress webhook endpoint
    add_action('wp_ajax_nopriv_storecove_webhook', function() {
        $handler = new StorecoveWebhookHandler(get_option('storecove_webhook_secret'));
        $handler->handleWebhook();
        wp_die();
    });
    
    // Custom WordPress actions
    add_action('storecove_document_sent', function($event) {
        // Custom logic when document is sent
    });
    
    add_action('storecove_document_delivered', function($event) {
        // Custom logic when document is delivered
    });
    
} else {
    // Standalone PHP usage
    $webhookSecret = $_ENV['STORECOVE_WEBHOOK_SECRET'];
    $handler = new StorecoveWebhookHandler($webhookSecret);
    $handler->handleWebhook();
}

?&gt;</code></pre>
            </div>
          </div>

          <div id="webhook-java" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">Java Spring Boot - Enterprise Webhook Handler</span>
                <button class="copy-btn" onclick="copyCode('webhook-java-code')">📋 Copy</button>
              </div>
              <pre id="webhook-java-code"><code>@RestController
@RequestMapping("/webhook")
@Slf4j
public class StorecoveWebhookController {
    
    @Value("${storecove.webhook.secret}")
    private String webhookSecret;
    
    @Autowired
    private StorecoveWebhookService webhookService;
    
    @PostMapping("/storecove")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; handleWebhook(
            @RequestBody String payload,
            @RequestHeader("X-Storecove-Signature") String signature) {
        
        try {
            // Verify signature
            if (!verifySignature(payload, signature)) {
                log.error("Invalid webhook signature");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid signature"));
            }
            
            // Parse event
            ObjectMapper mapper = new ObjectMapper();
            JsonNode event = mapper.readTree(payload);
            
            // Process event
            webhookService.processEvent(event);
            
            log.info("Webhook processed successfully");
            return ResponseEntity.ok(Map.of("status", "received"));
            
        } catch (Exception e) {
            log.error("Webhook processing error", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Internal server error"));
        }
    }
    
    @GetMapping("/health")
    public ResponseEntity&lt;Map&lt;String, Object&gt;&gt; healthCheck() {
        return ResponseEntity.ok(Map.of(
            "status", "healthy",
            "timestamp", Instant.now().toString()
        ));
    }
    
    private boolean verifySignature(String payload, String signature) {
        if (signature == null || signature.isEmpty()) {
            return false;
        }
        
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(
                webhookSecret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            mac.init(secretKey);
            
            byte[] hash = mac.doFinal(payload.getBytes(StandardCharsets.UTF_8));
            String computedSignature = "sha256=" + 
                DatatypeConverter.printHexBinary(hash).toLowerCase();
            
            return MessageDigest.isEqual(
                signature.getBytes(StandardCharsets.UTF_8),
                computedSignature.getBytes(StandardCharsets.UTF_8)
            );
            
        } catch (Exception e) {
            log.error("Error verifying signature", e);
            return false;
        }
    }
}

@Service
@Slf4j
public class StorecoveWebhookService {
    
    @Autowired
    private DocumentRepository documentRepository;
    
    @Autowired
    private NotificationService notificationService;
    
    @Autowired
    private PaymentTrackingService paymentTrackingService;
    
    @EventListener
    @Async
    public void processEvent(JsonNode event) {
        String eventType = event.get("eventType").asText();
        String documentGuid = event.get("documentGuid").asText();
        
        log.info("Processing event: {} for document: {}", eventType, documentGuid);
        
        switch (eventType) {
            case "document.sent":
                handleDocumentSent(event);
                break;
                
            case "document.delivered":
                handleDocumentDelivered(event);
                break;
                
            case "document.failed":
                handleDocumentFailed(event);
                break;
                
            case "document.legal_validation_failed":
                handleLegalValidationFailed(event);
                break;
                
            case "document.updated":
                handleDocumentUpdated(event);
                break;
                
            default:
                log.warn("Unhandled event type: {}", eventType);
        }
        
        // Publish Spring event for other components
        publishApplicationEvent(eventType, event);
    }
    
    private void handleDocumentSent(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        JsonNode recipientInfo = event.get("recipientInfo");
        
        // Update document status
        updateDocumentStatus(documentGuid, DocumentStatus.SENT, Map.of(
            "sentAt", event.get("timestamp").asText(),
            "recipientName", recipientInfo != null ? 
                recipientInfo.get("name").asText() : null,
            "deliveryMethod", event.has("deliveryMethod") ? 
                event.get("deliveryMethod").asText() : null
        ));
        
        // Send notification
        notificationService.sendNotification(
            event.get("legalEntityId").asLong(),
            "Document sent successfully",
            Map.of("documentGuid", documentGuid)
        );
        
        log.info("✅ Document {} sent successfully", documentGuid);
    }
    
    private void handleDocumentDelivered(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        
        updateDocumentStatus(documentGuid, DocumentStatus.DELIVERED, Map.of(
            "deliveredAt", event.get("timestamp").asText(),
            "deliveryConfirmation", event.has("deliveryConfirmation") ? 
                event.get("deliveryConfirmation").asText() : null
        ));
        
        // Start payment tracking for invoices
        if ("invoice".equals(event.get("documentType").asText())) {
            String dueDate = event.has("dueDate") ? event.get("dueDate").asText() : null;
            paymentTrackingService.startTracking(documentGuid, dueDate);
        }
        
        log.info("✅ Document {} delivered", documentGuid);
    }
    
    private void handleDocumentFailed(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        String failureReason = event.has("failureReason") ? 
            event.get("failureReason").asText() : "Unknown error";
        
        updateDocumentStatus(documentGuid, DocumentStatus.FAILED, Map.of(
            "failedAt", event.get("timestamp").asText(),
            "failureReason", failureReason,
            "failureDetails", event.has("failureDetails") ? 
                event.get("failureDetails").toString() : null
        ));
        
        // Alert administrators
        notificationService.alertAdministrators(
            "Document delivery failed: " + documentGuid,
            Map.of("reason", failureReason)
        );
        
        log.error("❌ Document {} failed: {}", documentGuid, failureReason);
    }
    
    private void handleLegalValidationFailed(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        JsonNode validationErrors = event.get("validationErrors");
        
        updateDocumentStatus(documentGuid, DocumentStatus.VALIDATION_FAILED, Map.of(
            "failedAt", event.get("timestamp").asText(),
            "validationErrors", validationErrors != null ? 
                validationErrors.toString() : null
        ));
        
        notificationService.notifyDocumentCreator(documentGuid, validationErrors);
        
        log.error("⚖️ Legal validation failed for {}", documentGuid);
    }
    
    private void handleDocumentUpdated(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        JsonNode updates = event.get("updates");
        
        syncDocumentUpdates(documentGuid, updates);
        
        log.info("🔄 Document {} updated", documentGuid);
    }
    
    @Transactional
    private void updateDocumentStatus(String documentGuid, DocumentStatus status, 
                                     Map&lt;String, Object&gt; metadata) {
        Optional&lt;Document&gt; documentOpt = documentRepository.findByGuid(documentGuid);
        
        if (documentOpt.isPresent()) {
            Document document = documentOpt.get();
            document.setStatus(status);
            document.setMetadata(metadata);
            document.setUpdatedAt(Instant.now());
            documentRepository.save(document);
            
            log.info("Updated {} to status: {}", documentGuid, status);
        } else {
            log.warn("Document not found: {}", documentGuid);
        }
    }
    
    private void syncDocumentUpdates(String documentGuid, JsonNode updates) {
        // Implement document synchronization logic
        log.info("Syncing updates for {}", documentGuid);
    }
    
    private void publishApplicationEvent(String eventType, JsonNode event) {
        // Publish Spring application event for other components
        StorecoveEvent storecoveEvent = new StorecoveEvent(this, eventType, event);
        // applicationEventPublisher.publishEvent(storecoveEvent);
    }
}

@Entity
@Table(name = "documents")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "document_guid", unique = true, nullable = false)
    private String guid;
    
    @Enumerated(EnumType.STRING)
    private DocumentStatus status;
    
    @Convert(converter = JsonConverter.class)
    @Column(columnDefinition = "json")
    private Map&lt;String, Object&gt; metadata;
    
    @CreationTimestamp
    private Instant createdAt;
    
    @UpdateTimestamp
    private Instant updatedAt;
}

public enum DocumentStatus {
    PENDING,
    SENT,
    DELIVERED,
    FAILED,
    VALIDATION_FAILED
}</code></pre>
            </div>
          </div>
        </div>

        <!-- Recipient Discovery Examples -->
        <div id="recipient-discovery" class="code-section">
          <h2>🔍 Recipient Discovery Examples</h2>
          <p>Discover recipient identifiers and capabilities before sending documents.</p>
          
          <div class="language-tabs">
            <button class="tab-btn active" onclick="showTab('discovery-curl')">cURL</button>
            <button class="tab-btn" onclick="showTab('discovery-js')">JavaScript</button>
            <button class="tab-btn" onclick="showTab('discovery-python')">Python</button>
          </div>

          <div id="discovery-curl" class="tab-content active">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">cURL - Recipient Discovery</span>
                <button class="copy-btn" onclick="copyCode('discovery-curl-code')">📋 Copy</button>
              </div>
              <pre id="discovery-curl-code"><code># Discover recipient by VAT number
curl -X GET "https://api.storecove.com/api/v2/discovery/recipients?identifier=DE:VAT:DE123456789" \
  -H "Authorization: Bearer $STORECOVE_API_KEY"

# Discover recipient by email domain
curl -X GET "https://api.storecove.com/api/v2/discovery/recipients?identifier=email:company.com" \
  -H "Authorization: Bearer $STORECOVE_API_KEY"

# Discover multiple recipients
curl -X POST "https://api.storecove.com/api/v2/discovery/recipients/batch" \
  -H "Authorization: Bearer $STORECOVE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "identifiers": [
      "DE:VAT:DE123456789",
      "NL:VAT:NL123456789B01",
      "email:customer@company.com"
    ]
  }'</code></pre>
            </div>
          </div>

          <div id="discovery-js" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">JavaScript - Advanced Recipient Discovery</span>
                <button class="copy-btn" onclick="copyCode('discovery-js-code')">📋 Copy</button>
              </div>
              <pre id="discovery-js-code"><code>class RecipientDiscovery {
  constructor(apiClient) {
    this.api = apiClient;
    this.cache = new Map();
    this.cacheTimeout = 30 * 60 * 1000; // 30 minutes
  }

  async discoverRecipient(identifier) {
    // Check cache first
    const cached = this.getCachedResult(identifier);
    if (cached) {
      console.log('📋 Using cached result for:', identifier);
      return cached;
    }

    try {
      const response = await this.api.get('/discovery/recipients', {
        params: { identifier }
      });

      const result = response.data;
      this.cacheResult(identifier, result);

      console.log('🔍 Discovered recipient:', identifier);
      return result;

    } catch (error) {
      if (error.response?.status === 404) {
        console.log('❌ Recipient not found:', identifier);
        return null;
      }
      throw error;
    }
  }

  async discoverMultipleRecipients(identifiers) {
    try {
      const response = await this.api.post('/discovery/recipients/batch', {
        identifiers
      });

      const results = response.data;
      
      // Cache individual results
      results.forEach(result => {
        if (result.identifier) {
          this.cacheResult(result.identifier, result);
        }
      });

      console.log(`🔍 Discovered ${results.length} recipients`);
      return results;

    } catch (error) {
      console.error('❌ Batch discovery failed:', error.message);
      throw error;
    }
  }

  async validateRecipientCapabilities(identifier, documentType = 'invoice') {
    const recipient = await this.discoverRecipient(identifier);
    
    if (!recipient) {
      return {
        canReceive: false,
        reason: 'Recipient not found'
      };
    }

    const capabilities = recipient.capabilities || {};
    const formats = capabilities.supportedFormats || [];
    
    return {
      canReceive: recipient.active && formats.length > 0,
      supportedFormats: formats,
      preferredFormat: capabilities.preferredFormat,
      networkName: recipient.networkName,
      lastSeen: recipient.lastSeen,
      reason: !recipient.active ? 'Recipient inactive' : 
              formats.length === 0 ? 'No supported formats' : null
    };
  }

  async findBestDeliveryMethod(identifiers, documentType = 'invoice') {
    const discoveries = await Promise.all(
      identifiers.map(async (id) => {
        try {
          const validation = await this.validateRecipientCapabilities(id, documentType);
          return { identifier: id, ...validation };
        } catch (error) {
          return { identifier: id, canReceive: false, reason: error.message };
        }
      })
    );

    // Sort by preference: active recipients with electronic delivery first
    const sorted = discoveries.sort((a, b) => {
      if (a.canReceive && !b.canReceive) return -1;
      if (!a.canReceive && b.canReceive) return 1;
      
      // Prefer Peppol over other networks
      if (a.networkName === 'peppol' && b.networkName !== 'peppol') return -1;
      if (a.networkName !== 'peppol' && b.networkName === 'peppol') return 1;
      
      return 0;
    });

    const best = sorted[0];
    
    return {
      recommendedMethod: best.canReceive ? best.identifier : null,
      allMethods: sorted,
      fallbackToEmail: !best.canReceive,
      recommendation: this.getRecommendation(sorted)
    };
  }

  getRecommendation(discoveries) {
    const electronic = discoveries.filter(d => d.canReceive);
    
    if (electronic.length === 0) {
      return 'No electronic delivery options found. Consider email fallback.';
    }
    
    const peppol = electronic.filter(d => d.networkName === 'peppol');
    if (peppol.length > 0) {
      return `Peppol delivery recommended via ${peppol[0].identifier}`;
    }
    
    return `Electronic delivery available via ${electronic[0].identifier}`;
  }

  getCachedResult(identifier) {
    const cached = this.cache.get(identifier);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  }

  cacheResult(identifier, data) {
    this.cache.set(identifier, {
      data,
      timestamp: Date.now()
    });
  }

  clearCache() {
    this.cache.clear();
  }
}

// Example usage
const discovery = new RecipientDiscovery(storecoveAPI);

// Single recipient discovery
const recipient = await discovery.discoverRecipient('DE:VAT:DE123456789');
console.log('Recipient capabilities:', recipient);

// Validate specific recipient
const validation = await discovery.validateRecipientCapabilities('DE:VAT:DE123456789');
console.log('Can receive invoices:', validation.canReceive);

// Find best delivery method from multiple options
const identifiers = [
  'DE:VAT:DE123456789',
  'email:customer@company.com',
  'NL:VAT:NL123456789B01'
];

const deliveryOptions = await discovery.findBestDeliveryMethod(identifiers);
console.log('Recommended delivery:', deliveryOptions.recommendation);

// Batch discovery
const multipleRecipients = await discovery.discoverMultipleRecipients([
  'DE:VAT:DE123456789',
  'FR:VAT:FR12345678901',
  'IT:VAT:IT12345678901'
]);
console.log('Batch results:', multipleRecipients);</code></pre>
            </div>
          </div>

          <div id="discovery-python" class="tab-content">
            <div class="code-example">
              <div class="code-header">
                <span class="code-title">Python - Recipient Discovery with Caching</span>
                <button class="copy-btn" onclick="copyCode('discovery-python-code')">📋 Copy</button>
              </div>
              <pre id="discovery-python-code"><code>import time
import asyncio
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass
from enum import Enum

class NetworkType(Enum):
    PEPPOL = "peppol"
    EMAIL = "email"
    OTHER = "other"

@dataclass
class RecipientCapability:
    identifier: str
    active: bool
    network_name: str
    supported_formats: List[str]
    preferred_format: Optional[str]
    last_seen: Optional[str]
    can_receive: bool
    reason: Optional[str] = None

class RecipientDiscoveryService:
    def __init__(self, client: StorecoveClient):
        self.client = client
        self.cache = {}
        self.cache_timeout = 30 * 60  # 30 minutes
    
    async def discover_recipient(self, identifier: str) -> Optional[Dict]:
        """Discover a single recipient by identifier."""
        # Check cache first
        cached = self._get_cached_result(identifier)
        if cached:
            print(f"📋 Using cached result for: {identifier}")
            return cached
        
        try:
            response = await self.client.get(
                f"/discovery/recipients",
                params={"identifier": identifier}
            )
            
            result = response.json()
            self._cache_result(identifier, result)
            
            print(f"🔍 Discovered recipient: {identifier}")
            return result
            
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 404:
                print(f"❌ Recipient not found: {identifier}")
                return None
            raise
    
    async def discover_multiple_recipients(self, identifiers: List[str]) -> List[Dict]:
        """Discover multiple recipients in a batch."""
        try:
            response = await self.client.post(
                "/discovery/recipients/batch",
                json={"identifiers": identifiers}
            )
            
            results = response.json()
            
            # Cache individual results
            for result in results:
                if 'identifier' in result:
                    self._cache_result(result['identifier'], result)
            
            print(f"🔍 Discovered {len(results)} recipients")
            return results
            
        except Exception as e:
            print(f"❌ Batch discovery failed: {e}")
            raise
    
    async def validate_recipient_capabilities(
        self, 
        identifier: str, 
        document_type: str = "invoice"
    ) -> RecipientCapability:
        """Validate if recipient can receive specified document type."""
        recipient = await self.discover_recipient(identifier)
        
        if not recipient:
            return RecipientCapability(
                identifier=identifier,
                active=False,
                network_name="unknown",
                supported_formats=[],
                preferred_format=None,
                last_seen=None,
                can_receive=False,
                reason="Recipient not found"
            )
        
        capabilities = recipient.get('capabilities', {})
        formats = capabilities.get('supportedFormats', [])
        active = recipient.get('active', False)
        
        can_receive = active and len(formats) > 0
        reason = None
        
        if not active:
            reason = "Recipient inactive"
        elif len(formats) == 0:
            reason = "No supported formats"
        
        return RecipientCapability(
            identifier=identifier,
            active=active,
            network_name=recipient.get('networkName', 'unknown'),
            supported_formats=formats,
            preferred_format=capabilities.get('preferredFormat'),
            last_seen=recipient.get('lastSeen'),
            can_receive=can_receive,
            reason=reason
        )
    
    async def find_best_delivery_method(
        self, 
        identifiers: List[str], 
        document_type: str = "invoice"
    ) -> Dict:
        """Find the best delivery method from multiple identifier options."""
        # Validate all identifiers concurrently
        tasks = [
            self.validate_recipient_capabilities(identifier, document_type)
            for identifier in identifiers
        ]
        
        capabilities = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Filter out exceptions and create valid capabilities list
        valid_capabilities = []
        for cap in capabilities:
            if isinstance(cap, Exception):
                print(f"⚠️ Error validating recipient: {cap}")
                continue
            valid_capabilities.append(cap)
        
        # Sort by preference
        sorted_capabilities = self._sort_by_preference(valid_capabilities)
        
        best = sorted_capabilities[0] if sorted_capabilities else None
        
        return {
            'recommended_method': best.identifier if best and best.can_receive else None,
            'all_methods': sorted_capabilities,
            'fallback_to_email': not best or not best.can_receive,
            'recommendation': self._get_recommendation(sorted_capabilities)
        }
    
    def _sort_by_preference(self, capabilities: List[RecipientCapability]) -> List[RecipientCapability]:
        """Sort capabilities by delivery preference."""
        def sort_key(cap):
            # Active recipients first
            if not cap.can_receive:
                return (1, cap.identifier)
            
            # Prefer Peppol network
            if cap.network_name == NetworkType.PEPPOL.value:
                return (0, 0, cap.identifier)
            
            # Then other electronic networks
            if cap.network_name != NetworkType.EMAIL.value:
                return (0, 1, cap.identifier)
            
            # Email fallback last
            return (0, 2, cap.identifier)
        
        return sorted(capabilities, key=sort_key)
    
    def _get_recommendation(self, capabilities: List[RecipientCapability]) -> str:
        """Generate human-readable recommendation."""
        electronic = [cap for cap in capabilities if cap.can_receive]
        
        if not electronic:
            return "No electronic delivery options found. Consider email fallback."
        
        peppol = [cap for cap in electronic if cap.network_name == NetworkType.PEPPOL.value]
        if peppol:
            return f"Peppol delivery recommended via {peppol[0].identifier}"
        
        return f"Electronic delivery available via {electronic[0].identifier}"
    
    def _get_cached_result(self, identifier: str) -> Optional[Dict]:
        """Get cached result if still valid."""
        cached = self.cache.get(identifier)
        if cached and time.time() - cached['timestamp'] < self.cache_timeout:
            return cached['data']
        return None
    
    def _cache_result(self, identifier: str, data: Dict) -> None:
        """Cache discovery result."""
        self.cache[identifier] = {
            'data': data,
            'timestamp': time.time()
        }
    
    def clear_cache(self) -> None:
        """Clear discovery cache."""
        self.cache.clear()

# Example usage
async def main():
    client = StorecoveClient()
    discovery = RecipientDiscoveryService(client)
    
    # Single recipient discovery
    recipient = await discovery.discover_recipient('DE:VAT:DE123456789')
    print('Recipient info:', recipient)
    
    # Validate capabilities
    capabilities = await discovery.validate_recipient_capabilities('DE:VAT:DE123456789')
    print(f'Can receive invoices: {capabilities.can_receive}')
    print(f'Supported formats: {capabilities.supported_formats}')
    
    # Find best delivery method
    identifiers = [
        'DE:VAT:DE123456789',
        'email:customer@company.com', 
        'NL:VAT:NL123456789B01'
    ]
    
    delivery_options = await discovery.find_best_delivery_method(identifiers)
    print('Recommendation:', delivery_options['recommendation'])
    print('Fallback to email:', delivery_options['fallback_to_email'])
    
    # Batch discovery
    batch_results = await discovery.discover_multiple_recipients([
        'DE:VAT:DE123456789',
        'FR:VAT:FR12345678901',
        'IT:VAT:IT12345678901'
    ])
    
    for result in batch_results:
        print(f"Found: {result.get('identifier')} - Active: {result.get('active')}")

# Run the example
if __name__ == "__main__":
    asyncio.run(main())</code></pre>
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
  name: 'SampleCode',
  mounted() {
    // Add tab switching functionality
    this.initializeTabs();
    // Add copy functionality
    this.initializeCopyButtons();
  },
  methods: {
    initializeTabs() {
      // Make showTab function globally available
      window.showTab = (tabId) => {
        // Hide all tab contents in the same parent section
        const clickedTab = document.querySelector(`#${tabId}`);
        if (!clickedTab) return;
        
        const parentSection = clickedTab.closest('.code-section');
        if (!parentSection) return;
        
        // Hide all tab contents in this section
        const allTabs = parentSection.querySelectorAll('.tab-content');
        allTabs.forEach(tab => tab.classList.remove('active'));
        
        // Remove active class from all tab buttons in this section
        const allButtons = parentSection.querySelectorAll('.tab-btn');
        allButtons.forEach(btn => btn.classList.remove('active'));
        
        // Show the selected tab
        clickedTab.classList.add('active');
        
        // Add active class to the clicked button
        const clickedButton = parentSection.querySelector(`[onclick*="${tabId}"]`);
        if (clickedButton) {
          clickedButton.classList.add('active');
        }
      };
    },
    
    initializeCopyButtons() {
      // Make copyCode function globally available
      window.copyCode = async (codeId) => {
        try {
          const codeElement = document.getElementById(codeId);
          if (!codeElement) return;
          
          const codeText = codeElement.textContent || codeElement.innerText;
          
          if (navigator.clipboard) {
            await navigator.clipboard.writeText(codeText);
          } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = codeText;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }
          
          // Show feedback
          const button = document.querySelector(`[onclick*="${codeId}"]`);
          if (button) {
            const originalText = button.textContent;
            button.textContent = '✅ Copied!';
            button.style.background = 'rgba(34, 197, 94, 0.2)';
            button.style.borderColor = 'rgba(34, 197, 94, 0.3)';
            
            setTimeout(() => {
              button.textContent = originalText;
              button.style.background = '';
              button.style.borderColor = '';
            }, 2000);
          }
        } catch (err) {
          console.error('Failed to copy code:', err);
          
          // Show error feedback
          const button = document.querySelector(`[onclick*="${codeId}"]`);
          if (button) {
            const originalText = button.textContent;
            button.textContent = '❌ Failed';
            button.style.background = 'rgba(239, 68, 68, 0.2)';
            button.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            
            setTimeout(() => {
              button.textContent = originalText;
              button.style.background = '';
              button.style.borderColor = '';
            }, 2000);
          }
        }
      };
    },
    
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}
</script>

<style scoped>
.sample-code {
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

.coming-soon {
  text-align: center;
  padding: 4rem 2rem;
}

.coming-soon h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.coming-soon p {
  font-size: 1.1rem;
  color: #666;
}

/* Quick Start Guide Styles */
.quick-start {
  margin-bottom: 3rem;
}

.quick-start h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.quick-start-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.quick-start-card {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.quick-start-card:hover {
  border-color: #0066cc;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
}

.quick-start-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.quick-start-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.quick-start-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Code Section Styles */
.code-section {
  margin-bottom: 4rem;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.code-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 0.5rem;
}

.code-section > p {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Language Tabs Styles */
.language-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;
}

.tab-btn {
  background: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  font-weight: 600;
  color: #666;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

.tab-btn:hover {
  background: #f8f9fa;
  color: #333;
}

.tab-btn.active {
  color: #0066cc;
  background: #f8f9fa;
  border-bottom-color: #0066cc;
}

/* Tab Content Styles */
.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Code Example Styles */
.code-example {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.code-header {
  background: linear-gradient(135deg, #495057 0%, #343a40 100%);
  color: white;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.code-title {
  font-weight: 600;
}

.copy-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.copy-btn:active {
  transform: scale(0.95);
}

/* Code Block Styles */
.code-example pre {
  margin: 0;
  padding: 1.5rem;
  background: #2d3748;
  color: #e2e8f0;
  font-family: 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  overflow-x: auto;
  border-radius: 0;
}

.code-example code {
  font-family: inherit;
  font-size: inherit;
  background: transparent;
  color: inherit;
  padding: 0;
}

/* Syntax Highlighting */
.code-example pre code {
  display: block;
  white-space: pre;
}

/* Custom scrollbar for code blocks */
.code-example pre::-webkit-scrollbar {
  height: 8px;
}

.code-example pre::-webkit-scrollbar-track {
  background: #1a202c;
  border-radius: 4px;
}

.code-example pre::-webkit-scrollbar-thumb {
  background: #4a5568;
  border-radius: 4px;
}

.code-example pre::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .quick-start-grid {
    grid-template-columns: 1fr;
  }
  
  .language-tabs {
    flex-direction: column;
  }
  
  .tab-btn {
    border-radius: 8px;
    border-bottom: none;
    border-left: 3px solid transparent;
  }
  
  .tab-btn.active {
    border-left-color: #0066cc;
    border-bottom: none;
  }
  
  .code-section {
    padding: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    border-radius: 0;
  }
  
  .code-example pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
  
  .code-header {
    padding: 0.5rem 1rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}

/* Print Styles */
@media print {
  .language-tabs,
  .copy-btn,
  .back-navigation {
    display: none;
  }
  
  .tab-content {
    display: block !important;
  }
  
  .code-example pre {
    background: white;
    color: black;
    border: 1px solid #333;
  }
}

/* Focus styles for accessibility */
.tab-btn:focus,
.copy-btn:focus,
.quick-start-card:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .code-section {
    background: #1a202c;
    color: #e2e8f0;
  }
  
  .code-section h2 {
    color: #f7fafc;
  }
  
  .quick-start-card {
    background: #2d3748;
    border-color: #4a5568;
    color: #e2e8f0;
  }
  
  .quick-start-card h3 {
    color: #f7fafc;
  }
  
  .tab-btn {
    color: #a0aec0;
  }
  
  .tab-btn:hover {
    background: #2d3748;
    color: #f7fafc;
  }
  
  .tab-btn.active {
    background: #2d3748;
    color: #63b3ed;
  }
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
</style>