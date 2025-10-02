<template>
  <div class="error-handling">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Error Handling Guide</h1>
          <p>Comprehensive guide to Storecove API error codes, troubleshooting steps, and resolution strategies</p>
        </div>
      </div>
    </div>

    <!-- Error Model Overview -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Understanding Storecove Error Model</h2>
          <p>Learn about the standardized error response format and how to handle different error types</p>
        </div>

        <div class="error-model-card">
          <h3>Standard Error Response Format</h3>
          <p>All Storecove API errors follow a consistent structure for easy parsing and handling:</p>
          
          <div class="code-block">
            <pre><code>{
  "error": {
    "type": "validation_error",
    "message": "The provided document contains validation errors",
    "details": [
      {
        "field": "invoice.invoice_number",
        "message": "Invoice number is required",
        "code": "required_field_missing"
      },
      {
        "field": "invoice.supplier.name",
        "message": "Supplier name exceeds maximum length of 100 characters",
        "code": "field_too_long"
      }
    ],
    "source": {
      "pointer": "/invoice/invoice_number",
      "parameter": "invoice_number"
    },
    "request_id": "req_1234567890abcdef"
  }
}</code></pre>
          </div>

          <div class="error-fields">
            <h4>Error Response Fields</h4>
            <div class="field-grid">
              <div class="field-item">
                <strong>type</strong>
                <p>The category of error (validation_error, authentication_error, etc.)</p>
              </div>
              <div class="field-item">
                <strong>message</strong>
                <p>Human-readable description of the error</p>
              </div>
              <div class="field-item">
                <strong>details</strong>
                <p>Array of specific validation or field-level errors</p>
              </div>
              <div class="field-item">
                <strong>source</strong>
                <p>Points to the specific location where the error occurred</p>
              </div>
              <div class="field-item">
                <strong>request_id</strong>
                <p>Unique identifier for tracking and support purposes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HTTP Status Codes -->
    <section class="content-section bg-light">
      <div class="container">
        <div class="section-header">
          <h2>HTTP Status Codes</h2>
          <p>Understanding the meaning of different HTTP status codes returned by the Storecove API</p>
        </div>

        <div class="status-grid">
          <div class="status-category">
            <h3>2xx Success</h3>
            <div class="status-list">
              <div class="status-item success">
                <span class="status-code">200</span>
                <div class="status-info">
                  <h4>OK</h4>
                  <p>Request succeeded. The response contains the requested data.</p>
                </div>
              </div>
              <div class="status-item success">
                <span class="status-code">201</span>
                <div class="status-info">
                  <h4>Created</h4>
                  <p>Resource was successfully created (e.g., new document submission).</p>
                </div>
              </div>
              <div class="status-item success">
                <span class="status-code">204</span>
                <div class="status-info">
                  <h4>No Content</h4>
                  <p>Request succeeded but no content to return (e.g., successful deletion).</p>
                </div>
              </div>
            </div>
          </div>

          <div class="status-category">
            <h3>4xx Client Errors</h3>
            <div class="status-list">
              <div class="status-item error">
                <span class="status-code">400</span>
                <div class="status-info">
                  <h4>Bad Request</h4>
                  <p>Invalid request format, missing required fields, or validation errors.</p>
                </div>
              </div>
              <div class="status-item error">
                <span class="status-code">401</span>
                <div class="status-info">
                  <h4>Unauthorized</h4>
                  <p>Authentication failed. Check your API key and authorization header.</p>
                </div>
              </div>
              <div class="status-item error">
                <span class="status-code">403</span>
                <div class="status-info">
                  <h4>Forbidden</h4>
                  <p>Authenticated but not authorized to access this resource.</p>
                </div>
              </div>
              <div class="status-item error">
                <span class="status-code">404</span>
                <div class="status-info">
                  <h4>Not Found</h4>
                  <p>Requested resource does not exist or has been deleted.</p>
                </div>
              </div>
              <div class="status-item error">
                <span class="status-code">409</span>
                <div class="status-info">
                  <h4>Conflict</h4>
                  <p>Resource conflict (e.g., duplicate invoice number).</p>
                </div>
              </div>
              <div class="status-item error">
                <span class="status-code">422</span>
                <div class="status-info">
                  <h4>Unprocessable Entity</h4>
                  <p>Request format is correct but contains semantic errors.</p>
                </div>
              </div>
              <div class="status-item error">
                <span class="status-code">429</span>
                <div class="status-info">
                  <h4>Too Many Requests</h4>
                  <p>Rate limit exceeded. Reduce request frequency.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="status-category">
            <h3>5xx Server Errors</h3>
            <div class="status-list">
              <div class="status-item server-error">
                <span class="status-code">500</span>
                <div class="status-info">
                  <h4>Internal Server Error</h4>
                  <p>Unexpected server error. Contact support with request_id.</p>
                </div>
              </div>
              <div class="status-item server-error">
                <span class="status-code">502</span>
                <div class="status-info">
                  <h4>Bad Gateway</h4>
                  <p>Temporary service unavailability. Retry with exponential backoff.</p>
                </div>
              </div>
              <div class="status-item server-error">
                <span class="status-code">503</span>
                <div class="status-info">
                  <h4>Service Unavailable</h4>
                  <p>Service temporarily unavailable. Check service status.</p>
                </div>
              </div>
              <div class="status-item server-error">
                <span class="status-code">504</span>
                <div class="status-info">
                  <h4>Gateway Timeout</h4>
                  <p>Request timeout. Retry after a delay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Common Error Types -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Common Error Types & Solutions</h2>
          <p>Detailed breakdown of frequent error scenarios and their resolution strategies</p>
        </div>

        <div class="error-types">
          <div class="error-type-card">
            <div class="error-header">
              <span class="error-icon">🔐</span>
              <h3>Authentication Errors</h3>
            </div>
            <div class="error-content">
              <div class="error-scenario">
                <h4>Invalid API Key</h4>
                <div class="code-block small">
                  <pre><code>{
  "error": {
    "type": "authentication_error",
    "message": "Invalid API key provided",
    "code": "invalid_api_key"
  }
}</code></pre>
                </div>
                <div class="solution">
                  <h5>Solution:</h5>
                  <ul>
                    <li>Verify your API key is correct and active</li>
                    <li>Check the Authorization header format: <code>Bearer YOUR_API_KEY</code></li>
                    <li>Ensure you're using the correct environment (sandbox vs production)</li>
                  </ul>
                </div>
              </div>

              <div class="error-scenario">
                <h4>Expired API Key</h4>
                <div class="code-block small">
                  <pre><code>{
  "error": {
    "type": "authentication_error", 
    "message": "API key has expired",
    "code": "api_key_expired"
  }
}</code></pre>
                </div>
                <div class="solution">
                  <h5>Solution:</h5>
                  <ul>
                    <li>Generate a new API key from your dashboard</li>
                    <li>Update your application configuration</li>
                    <li>Implement automatic key rotation if supported</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="error-type-card">
            <div class="error-header">
              <span class="error-icon">📝</span>
              <h3>Validation Errors</h3>
            </div>
            <div class="error-content">
              <div class="error-scenario">
                <h4>Missing Required Fields</h4>
                <div class="code-block small">
                  <pre><code>{
  "error": {
    "type": "validation_error",
    "message": "Document validation failed",
    "details": [
      {
        "field": "invoice.invoice_number",
        "message": "Invoice number is required",
        "code": "required_field_missing"
      }
    ]
  }
}</code></pre>
                </div>
                <div class="solution">
                  <h5>Solution:</h5>
                  <ul>
                    <li>Review the API documentation for required fields</li>
                    <li>Validate your document structure before submission</li>
                    <li>Implement client-side validation to catch errors early</li>
                  </ul>
                </div>
              </div>

              <div class="error-scenario">
                <h4>Invalid Data Format</h4>
                <div class="code-block small">
                  <pre><code>{
  "error": {
    "type": "validation_error",
    "message": "Invalid date format",
    "details": [
      {
        "field": "invoice.issue_date",
        "message": "Date must be in ISO 8601 format (YYYY-MM-DD)",
        "code": "invalid_date_format"
      }
    ]
  }
}</code></pre>
                </div>
                <div class="solution">
                  <h5>Solution:</h5>
                  <ul>
                    <li>Use ISO 8601 date format: YYYY-MM-DD</li>
                    <li>Validate currency codes against ISO 4217</li>
                    <li>Ensure country codes follow ISO 3166-1 alpha-2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="error-type-card">
            <div class="error-header">
              <span class="error-icon">🌍</span>
              <h3>Country-Specific Errors</h3>
            </div>
            <div class="error-content">
              <div class="error-scenario">
                <h4>Unsupported Country</h4>
                <div class="code-block small">
                  <pre><code>{
  "error": {
    "type": "country_not_supported",
    "message": "E-invoicing not available for this country",
    "details": {
      "country": "XX",
      "supported_countries": ["NL", "DE", "FR", "IT", "ES"]
    }
  }
}</code></pre>
                </div>
                <div class="solution">
                  <h5>Solution:</h5>
                  <ul>
                    <li>Check the list of supported countries</li>
                    <li>Use alternative delivery methods for unsupported countries</li>
                    <li>Subscribe to updates for country support expansion</li>
                  </ul>
                </div>
              </div>

              <div class="error-scenario">
                <h4>Country-Specific Validation</h4>
                <div class="code-block small">
                  <pre><code>{
  "error": {
    "type": "validation_error",
    "message": "Country-specific requirements not met",
    "details": [
      {
        "field": "invoice.tax_id",
        "message": "Italian tax ID must be exactly 11 digits",
        "code": "invalid_tax_id_format",
        "country": "IT"
      }
    ]
  }
}</code></pre>
                </div>
                <div class="solution">
                  <h5>Solution:</h5>
                  <ul>
                    <li>Implement country-specific validation rules</li>
                    <li>Reference official tax ID formats for each country</li>
                    <li>Use country-specific field requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="error-type-card">
            <div class="error-header">
              <span class="error-icon">🔄</span>
              <h3>Webhook Errors</h3>
            </div>
            <div class="error-content">
              <div class="error-scenario">
                <h4>Webhook Delivery Failed</h4>
                <div class="code-block small">
                  <pre><code>{
  "event": "webhook.delivery_failed",
  "data": {
    "webhook_id": "wh_123456789",
    "endpoint_url": "https://api.yourcompany.com/webhooks",
    "failure_reason": "connection_timeout",
    "retry_count": 3,
    "next_retry": "2024-01-15T15:30:00Z"
  }
}</code></pre>
                </div>
                <div class="solution">
                  <h5>Solution:</h5>
                  <ul>
                    <li>Verify your webhook endpoint is accessible</li>
                    <li>Check SSL certificate validity</li>
                    <li>Ensure response time is under 30 seconds</li>
                    <li>Return 200 status code for successful processing</li>
                  </ul>
                </div>
              </div>

              <div class="error-scenario">
                <h4>Invalid Webhook Signature</h4>
                <div class="code-block small">
                  <pre><code>{
  "error": {
    "type": "webhook_verification_failed",
    "message": "Webhook signature verification failed",
    "code": "invalid_signature"
  }
}</code></pre>
                </div>
                <div class="solution">
                  <h5>Solution:</h5>
                  <ul>
                    <li>Verify webhook signature using HMAC-SHA256</li>
                    <li>Use the correct webhook secret from your dashboard</li>
                    <li>Ensure timestamp tolerance for signature validation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Error Handling Implementation -->
    <section class="content-section bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Implementation Examples</h2>
          <p>Practical code examples for robust error handling in your integration</p>
        </div>

        <div class="implementation-section">
          <h3>Python Error Handling</h3>
          <div class="code-block">
            <pre><code>import requests
import time
import logging
from typing import Dict, Any, Optional

class StorecoveClient:
    def __init__(self, api_key: str, base_url: str = "https://api.storecove.com"):
        self.api_key = api_key
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        })
        
    def submit_document(self, document_data: Dict[str, Any]) -> Dict[str, Any]:
        """Submit a document with comprehensive error handling"""
        max_retries = 3
        backoff_factor = 2
        
        for attempt in range(max_retries):
            try:
                response = self.session.post(
                    f"{self.base_url}/api/v2/document_submissions",
                    json=document_data,
                    timeout=30
                )
                
                # Handle successful responses
                if response.status_code in [200, 201]:
                    return response.json()
                
                # Handle client errors (4xx)
                elif 400 <= response.status_code < 500:
                    error_data = self._parse_error_response(response)
                    
                    if response.status_code == 401:
                        raise AuthenticationError("Invalid API key", error_data)
                    elif response.status_code == 400:
                        raise ValidationError("Document validation failed", error_data)
                    elif response.status_code == 409:
                        raise DuplicateDocumentError("Document already exists", error_data)
                    elif response.status_code == 422:
                        raise BusinessLogicError("Business rule violation", error_data)
                    elif response.status_code == 429:
                        # Rate limiting - implement exponential backoff
                        retry_after = int(response.headers.get('Retry-After', 60))
                        logging.warning(f"Rate limited. Waiting {retry_after} seconds")
                        time.sleep(retry_after)
                        continue
                    else:
                        raise APIError(f"Client error: {response.status_code}", error_data)
                
                # Handle server errors (5xx) - retry with backoff
                elif 500 <= response.status_code < 600:
                    if attempt == max_retries - 1:
                        error_data = self._parse_error_response(response)
                        raise ServerError(f"Server error: {response.status_code}", error_data)
                    
                    wait_time = backoff_factor ** attempt
                    logging.warning(f"Server error {response.status_code}. Retrying in {wait_time} seconds")
                    time.sleep(wait_time)
                    continue
                    
            except requests.exceptions.ConnectionError as e:
                if attempt == max_retries - 1:
                    raise NetworkError("Connection failed", str(e))
                wait_time = backoff_factor ** attempt
                logging.warning(f"Connection error. Retrying in {wait_time} seconds")
                time.sleep(wait_time)
                
            except requests.exceptions.Timeout as e:
                if attempt == max_retries - 1:
                    raise TimeoutError("Request timeout", str(e))
                wait_time = backoff_factor ** attempt
                logging.warning(f"Request timeout. Retrying in {wait_time} seconds")
                time.sleep(wait_time)
    
    def _parse_error_response(self, response: requests.Response) -> Dict[str, Any]:
        """Parse error response into structured format"""
        try:
            error_data = response.json()
            return {
                "status_code": response.status_code,
                "error": error_data.get("error", {}),
                "request_id": error_data.get("error", {}).get("request_id"),
                "details": error_data.get("error", {}).get("details", [])
            }
        except ValueError:
            return {
                "status_code": response.status_code,
                "error": {"message": response.text},
                "request_id": response.headers.get("X-Request-ID")
            }

# Custom Exception Classes
class StorecoveError(Exception):
    """Base exception for Storecove API errors"""
    def __init__(self, message: str, error_data: Optional[Dict[str, Any]] = None):
        super().__init__(message)
        self.error_data = error_data
        self.request_id = error_data.get("request_id") if error_data else None

class AuthenticationError(StorecoveError):
    """Authentication failed"""
    pass

class ValidationError(StorecoveError):
    """Document validation failed"""
    def __init__(self, message: str, error_data: Optional[Dict[str, Any]] = None):
        super().__init__(message, error_data)
        self.validation_errors = error_data.get("details", []) if error_data else []

class DuplicateDocumentError(StorecoveError):
    """Document already exists"""
    pass

class BusinessLogicError(StorecoveError):
    """Business rule violation"""
    pass

class NetworkError(StorecoveError):
    """Network connection error"""
    pass

class TimeoutError(StorecoveError):
    """Request timeout error"""
    pass

class ServerError(StorecoveError):
    """Server error (5xx)"""
    pass

class APIError(StorecoveError):
    """Generic API error"""
    pass

# Usage Example
def process_invoice(invoice_data: Dict[str, Any]):
    """Example of processing an invoice with error handling"""
    client = StorecoveClient("your-api-key")
    
    try:
        result = client.submit_document(invoice_data)
        logging.info(f"Document submitted successfully: {result['id']}")
        return result
        
    except ValidationError as e:
        logging.error(f"Validation failed: {e}")
        # Handle validation errors - show user-friendly messages
        for error in e.validation_errors:
            print(f"Field '{error['field']}': {error['message']}")
        raise
        
    except DuplicateDocumentError as e:
        logging.warning(f"Document already exists: {e}")
        # Handle duplicate - perhaps fetch existing document
        return None
        
    except AuthenticationError as e:
        logging.error(f"Authentication failed: {e}")
        # Handle auth error - refresh API key
        raise
        
    except NetworkError as e:
        logging.error(f"Network error: {e}")
        # Handle network issues - queue for retry
        raise
        
    except ServerError as e:
        logging.error(f"Server error: {e.request_id}")
        # Handle server errors - alert monitoring
        raise
</code></pre>
          </div>
        </div>

        <div class="implementation-section">
          <h3>JavaScript/Node.js Error Handling</h3>
          <div class="code-block">
            <pre><code>const axios = require('axios');

class StorecoveClient {
    constructor(apiKey, baseURL = 'https://api.storecove.com') {
        this.apiKey = apiKey;
        this.baseURL = baseURL;
        this.client = axios.create({
            baseURL: baseURL,
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });
        
        // Setup response interceptor for error handling
        this.client.interceptors.response.use(
            response => response,
            error => this.handleAPIError(error)
        );
    }
    
    async submitDocument(documentData) {
        const maxRetries = 3;
        const backoffFactor = 2;
        
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                const response = await this.client.post('/api/v2/document_submissions', documentData);
                return response.data;
                
            } catch (error) {
                if (this.shouldRetry(error) && attempt < maxRetries - 1) {
                    const waitTime = Math.pow(backoffFactor, attempt) * 1000;
                    console.warn(`Retrying in ${waitTime}ms due to: ${error.message}`);
                    await this.sleep(waitTime);
                    continue;
                }
                throw error;
            }
        }
    }
    
    handleAPIError(error) {
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;
            const errorData = data.error || {};
            
            switch (status) {
                case 400:
                    throw new ValidationError('Document validation failed', errorData);
                case 401:
                    throw new AuthenticationError('Invalid API key', errorData);
                case 403:
                    throw new AuthorizationError('Access forbidden', errorData);
                case 404:
                    throw new NotFoundError('Resource not found', errorData);
                case 409:
                    throw new DuplicateDocumentError('Document already exists', errorData);
                case 422:
                    throw new BusinessLogicError('Business rule violation', errorData);
                case 429:
                    throw new RateLimitError('Rate limit exceeded', errorData);
                case 500:
                case 502:
                case 503:
                case 504:
                    throw new ServerError(`Server error: ${status}`, errorData);
                default:
                    throw new APIError(`HTTP ${status}: ${errorData.message}`, errorData);
            }
        } else if (error.code === 'ECONNABORTED') {
            throw new TimeoutError('Request timeout', error);
        } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
            throw new NetworkError('Network connection failed', error);
        } else {
            throw new APIError('Unknown error occurred', error);
        }
    }
    
    shouldRetry(error) {
        return error instanceof ServerError || 
               error instanceof NetworkError || 
               error instanceof TimeoutError ||
               (error instanceof RateLimitError && error.retryAfter);
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Custom Error Classes
class StorecoveError extends Error {
    constructor(message, errorData = null) {
        super(message);
        this.name = this.constructor.name;
        this.errorData = errorData;
        this.requestId = errorData?.request_id;
    }
}

class ValidationError extends StorecoveError {
    constructor(message, errorData) {
        super(message, errorData);
        this.validationErrors = errorData?.details || [];
    }
}

class AuthenticationError extends StorecoveError {}
class AuthorizationError extends StorecoveError {}
class NotFoundError extends StorecoveError {}
class DuplicateDocumentError extends StorecoveError {}
class BusinessLogicError extends StorecoveError {}
class RateLimitError extends StorecoveError {
    constructor(message, errorData) {
        super(message, errorData);
        this.retryAfter = errorData?.retry_after;
    }
}
class NetworkError extends StorecoveError {}
class TimeoutError extends StorecoveError {}
class ServerError extends StorecoveError {}
class APIError extends StorecoveError {}

// Usage Example
async function processInvoice(invoiceData) {
    const client = new StorecoveClient('your-api-key');
    
    try {
        const result = await client.submitDocument(invoiceData);
        console.log(`Document submitted successfully: ${result.id}`);
        return result;
        
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error('Validation failed:');
            error.validationErrors.forEach(err => {
                console.error(`Field '${err.field}': ${err.message}`);
            });
        } else if (error instanceof DuplicateDocumentError) {
            console.warn('Document already exists');
            // Handle duplicate case
        } else if (error instanceof AuthenticationError) {
            console.error('Authentication failed - check API key');
        } else if (error instanceof NetworkError) {
            console.error('Network error - check connectivity');
        } else if (error instanceof ServerError) {
            console.error(`Server error - Request ID: ${error.requestId}`);
        } else {
            console.error('Unexpected error:', error.message);
        }
        throw error;
    }
}
</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Troubleshooting Guide -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Troubleshooting Checklist</h2>
          <p>Step-by-step guide to diagnose and resolve common integration issues</p>
        </div>

        <div class="troubleshooting-grid">
          <div class="troubleshooting-card">
            <h3>🔍 Quick Diagnosis</h3>
            <div class="checklist">
              <div class="checklist-item">
                <input type="checkbox" id="check1">
                <label for="check1">Verify API key is valid and active</label>
              </div>
              <div class="checklist-item">
                <input type="checkbox" id="check2">
                <label for="check2">Check request format and headers</label>
              </div>
              <div class="checklist-item">
                <input type="checkbox" id="check3">
                <label for="check3">Validate document structure against schema</label>
              </div>
              <div class="checklist-item">
                <input type="checkbox" id="check4">
                <label for="check4">Review error response details and request_id</label>
              </div>
              <div class="checklist-item">
                <input type="checkbox" id="check5">
                <label for="check5">Test with sandbox environment first</label>
              </div>
            </div>
          </div>

          <div class="troubleshooting-card">
            <h3>🛠️ Common Fixes</h3>
            <div class="fix-list">
              <div class="fix-item">
                <h4>Authentication Issues</h4>
                <ul>
                  <li>Regenerate API key</li>
                  <li>Check environment (sandbox vs production)</li>
                  <li>Verify header format</li>
                </ul>
              </div>
              <div class="fix-item">
                <h4>Validation Errors</h4>
                <ul>
                  <li>Review required fields</li>
                  <li>Check data formats (dates, currencies)</li>
                  <li>Validate against country requirements</li>
                </ul>
              </div>
              <div class="fix-item">
                <h4>Network Issues</h4>
                <ul>
                  <li>Implement retry logic with backoff</li>
                  <li>Check SSL/TLS configuration</li>
                  <li>Verify firewall settings</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="troubleshooting-card">
            <h3>📞 When to Contact Support</h3>
            <div class="support-scenarios">
              <div class="scenario">
                <h4>Persistent 5xx Errors</h4>
                <p>Include request_id and timestamp</p>
              </div>
              <div class="scenario">
                <h4>Unexpected Business Logic Errors</h4>
                <p>Provide document payload and error details</p>
              </div>
              <div class="scenario">
                <h4>Country-Specific Issues</h4>
                <p>Specify country and regulatory requirements</p>
              </div>
              <div class="scenario">
                <h4>Performance Issues</h4>
                <p>Include response times and request patterns</p>
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
  name: 'ErrorHandling'
}
</script>

<style scoped>
.error-handling {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
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

/* Error Model */
.error-model-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.error-model-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.error-fields {
  margin-top: 2rem;
}

.error-fields h4 {
  color: #333;
  margin-bottom: 1.5rem;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.field-item {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.field-item strong {
  color: #dc2626;
  font-size: 1.1rem;
}

.field-item p {
  margin: 0.5rem 0 0 0;
  color: #666;
}

/* Status Grid */
.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.status-category {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.status-category h3 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.status-item.success {
  background: #f0fdf4;
  border-left-color: #22c55e;
}

.status-item.error {
  background: #fef2f2;
  border-left-color: #ef4444;
}

.status-item.server-error {
  background: #fffbeb;
  border-left-color: #f59e0b;
}

.status-code {
  font-weight: 700;
  font-size: 1.2rem;
  color: #333;
  min-width: 40px;
}

.status-info h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.status-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

/* Error Types */
.error-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.error-type-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.error-header {
  background: #f8f9fa;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.error-icon {
  font-size: 2rem;
}

.error-header h3 {
  margin: 0;
  color: #333;
}

.error-content {
  padding: 2rem;
}

.error-scenario {
  margin-bottom: 2rem;
}

.error-scenario:last-child {
  margin-bottom: 0;
}

.error-scenario h4 {
  color: #333;
  margin-bottom: 1rem;
}

.solution {
  margin-top: 1rem;
  padding: 1rem;
  background: #f0f7ff;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
}

.solution h5 {
  margin: 0 0 0.5rem 0;
  color: #0066cc;
}

.solution ul {
  margin: 0;
  padding-left: 1.5rem;
}

.solution li {
  margin-bottom: 0.5rem;
  color: #333;
}

/* Code Blocks */
.code-block {
  background: #1f2937;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
}

.code-block.small {
  margin: 0.5rem 0;
}

.code-block pre {
  margin: 0;
  padding: 1.5rem;
}

.code-block code {
  color: #f9fafb;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Implementation */
.implementation-section {
  margin-bottom: 3rem;
}

.implementation-section h3 {
  color: #333;
  margin-bottom: 1rem;
}

/* Troubleshooting */
.troubleshooting-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.troubleshooting-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.troubleshooting-card h3 {
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.checklist-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #0066cc;
}

.checklist-item label {
  color: #333;
  cursor: pointer;
}

.fix-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.fix-item h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.fix-item ul {
  margin: 0;
  padding-left: 1.5rem;
}

.fix-item li {
  margin-bottom: 0.25rem;
  color: #666;
}

.support-scenarios {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.scenario {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.scenario h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.scenario p {
  margin: 0;
  color: #666;
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
  
  .status-grid {
    grid-template-columns: 1fr;
  }
  
  .error-types {
    grid-template-columns: 1fr;
  }
  
  .troubleshooting-grid {
    grid-template-columns: 1fr;
  }
  
  .field-grid {
    grid-template-columns: 1fr;
  }
  
  .error-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>