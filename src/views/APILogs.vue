<template>
  <div class="api-logs">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>API Logs & Monitoring</h1>
          <p>Best practices for API logging, monitoring approaches, and real-world examples for production systems</p>
        </div>
      </div>
    </div>

    <!-- Logging Strategy Overview -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Comprehensive Logging Strategy</h2>
          <p>Essential logging practices for robust e-invoicing integration monitoring</p>
        </div>

        <div class="strategy-grid">
          <div class="strategy-card">
            <div class="strategy-icon">📊</div>
            <h3>Request/Response Logging</h3>
            <p>Log all API interactions including headers, payloads, response times, and status codes for complete audit trails.</p>
            <div class="strategy-features">
              <span class="feature">Full request context</span>
              <span class="feature">Response validation</span>
              <span class="feature">Performance metrics</span>
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-icon">🔄</div>
            <h3>Event-Driven Logging</h3>
            <p>Capture business events like document submissions, delivery confirmations, and webhook notifications.</p>
            <div class="strategy-features">
              <span class="feature">Business context</span>
              <span class="feature">State transitions</span>
              <span class="feature">Event correlation</span>
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-icon">⚠️</div>
            <h3>Error & Exception Tracking</h3>
            <p>Detailed error logging with stack traces, context, and automated alerting for critical failures.</p>
            <div class="strategy-features">
              <span class="feature">Error categorization</span>
              <span class="feature">Automated alerts</span>
              <span class="feature">Recovery tracking</span>
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-icon">📈</div>
            <h3>Performance Monitoring</h3>
            <p>Track API performance metrics, identify bottlenecks, and monitor quota usage patterns.</p>
            <div class="strategy-features">
              <span class="feature">Response times</span>
              <span class="feature">Throughput analysis</span>
              <span class="feature">Resource utilization</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Log Levels & Categories -->
    <section class="content-section bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Log Levels & Categories</h2>
          <p>Structured approach to categorizing and prioritizing log messages</p>
        </div>

        <div class="log-levels">
          <div class="level-card error">
            <div class="level-header">
              <span class="level-icon">🚨</span>
              <h3>ERROR</h3>
            </div>
            <div class="level-content">
              <p><strong>When to use:</strong> API failures, authentication errors, document rejection</p>
              <div class="level-examples">
                <h4>Examples:</h4>
                <ul>
                  <li>HTTP 4xx/5xx responses</li>
                  <li>Authentication failures</li>
                  <li>Document validation errors</li>
                  <li>Webhook delivery failures</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="level-card warning">
            <div class="level-header">
              <span class="level-icon">⚠️</span>
              <h3>WARN</h3>
            </div>
            <div class="level-content">
              <p><strong>When to use:</strong> Recoverable issues, rate limiting, retries</p>
              <div class="level-examples">
                <h4>Examples:</h4>
                <ul>
                  <li>Rate limit approached</li>
                  <li>Retry attempts</li>
                  <li>Quota warnings</li>
                  <li>Deprecated API usage</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="level-card info">
            <div class="level-header">
              <span class="level-icon">ℹ️</span>
              <h3>INFO</h3>
            </div>
            <div class="level-content">
              <p><strong>When to use:</strong> Business events, successful operations, state changes</p>
              <div class="level-examples">
                <h4>Examples:</h4>
                <ul>
                  <li>Document submitted</li>
                  <li>Delivery confirmed</li>
                  <li>Webhook received</li>
                  <li>Configuration changes</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="level-card debug">
            <div class="level-header">
              <span class="level-icon">🔍</span>
              <h3>DEBUG</h3>
            </div>
            <div class="level-content">
              <p><strong>When to use:</strong> Detailed flow tracking, development debugging</p>
              <div class="level-examples">
                <h4>Examples:</h4>
                <ul>
                  <li>Request/response details</li>
                  <li>Internal state changes</li>
                  <li>Performance timings</li>
                  <li>Variable values</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Implementation Examples -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Implementation Examples</h2>
          <p>Production-ready logging implementations for different platforms</p>
        </div>

        <div class="implementation-tabs">
          <div class="tab-buttons">
            <button class="tab-btn active" @click="activeTab = 'python'">Python</button>
            <button class="tab-btn" @click="activeTab = 'nodejs'">Node.js</button>
            <button class="tab-btn" @click="activeTab = 'java'">Java</button>
            <button class="tab-btn" @click="activeTab = 'csharp'">C#</button>
          </div>

          <div class="tab-content">
            <!-- Python Implementation -->
            <div v-show="activeTab === 'python'" class="tab-panel">
              <h3>Python Logging with Structured JSON</h3>
              <div class="code-block">
                <pre><code>import logging
import json
import time
import uuid
from datetime import datetime
from typing import Dict, Any, Optional
import requests

class StorecoveLogger:
    def __init__(self, name: str = "storecove", level: str = "INFO"):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(getattr(logging, level))
        
        # JSON formatter for structured logs
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        
        # Console handler
        console_handler = logging.StreamHandler()
        console_handler.setFormatter(formatter)
        self.logger.addHandler(console_handler)
        
        # File handler for persistent logs
        file_handler = logging.FileHandler('storecove_api.log')
        file_handler.setFormatter(formatter)
        self.logger.addHandler(file_handler)
    
    def log_request(self, method: str, url: str, headers: Dict, 
                   payload: Optional[Dict] = None, request_id: str = None):
        """Log outgoing API request"""
        log_data = {
            "event_type": "api_request",
            "request_id": request_id or str(uuid.uuid4()),
            "method": method,
            "url": url,
            "headers": self._sanitize_headers(headers),
            "payload_size": len(json.dumps(payload)) if payload else 0,
            "timestamp": datetime.utcnow().isoformat()
        }
        
        # Log payload in debug mode only
        if self.logger.isEnabledFor(logging.DEBUG):
            log_data["payload"] = payload
            
        self.logger.info(json.dumps(log_data))
        return log_data["request_id"]
    
    def log_response(self, request_id: str, status_code: int, 
                    response_time: float, response_data: Optional[Dict] = None):
        """Log API response"""
        log_data = {
            "event_type": "api_response",
            "request_id": request_id,
            "status_code": status_code,
            "response_time_ms": round(response_time * 1000, 2),
            "response_size": len(json.dumps(response_data)) if response_data else 0,
            "timestamp": datetime.utcnow().isoformat()
        }
        
        if self.logger.isEnabledFor(logging.DEBUG) and response_data:
            log_data["response_data"] = response_data
        
        # Log level based on status code
        if 200 <= status_code < 300:
            self.logger.info(json.dumps(log_data))
        elif 400 <= status_code < 500:
            self.logger.warning(json.dumps(log_data))
        else:
            self.logger.error(json.dumps(log_data))
    
    def log_business_event(self, event_type: str, document_id: str, 
                          details: Dict[str, Any]):
        """Log business-level events"""
        log_data = {
            "event_type": f"business.{event_type}",
            "document_id": document_id,
            "details": details,
            "timestamp": datetime.utcnow().isoformat()
        }
        self.logger.info(json.dumps(log_data))
    
    def log_error(self, error: Exception, context: Dict[str, Any] = None):
        """Log error with full context"""
        log_data = {
            "event_type": "error",
            "error_type": type(error).__name__,
            "error_message": str(error),
            "context": context or {},
            "timestamp": datetime.utcnow().isoformat()
        }
        self.logger.error(json.dumps(log_data), exc_info=True)
    
    def log_performance_metric(self, operation: str, duration: float, 
                              metadata: Dict[str, Any] = None):
        """Log performance metrics"""
        log_data = {
            "event_type": "performance_metric",
            "operation": operation,
            "duration_ms": round(duration * 1000, 2),
            "metadata": metadata or {},
            "timestamp": datetime.utcnow().isoformat()
        }
        self.logger.info(json.dumps(log_data))
    
    def _sanitize_headers(self, headers: Dict) -> Dict:
        """Remove sensitive information from headers"""
        sanitized = headers.copy()
        sensitive_keys = ['authorization', 'x-api-key', 'cookie']
        
        for key in sensitive_keys:
            if key.lower() in [k.lower() for k in sanitized.keys()]:
                sanitized[key] = "[REDACTED]"
                
        return sanitized

class StorecoveClientWithLogging:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.storecove.com"
        self.logger = StorecoveLogger()
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        })
    
    def submit_document(self, document_data: Dict[str, Any]) -> Dict[str, Any]:
        """Submit document with comprehensive logging"""
        operation_start = time.time()
        
        # Log business event
        self.logger.log_business_event(
            "document_submission_started",
            document_data.get("invoice_number", "unknown"),
            {
                "recipient": document_data.get("customer", {}).get("name"),
                "amount": document_data.get("invoice_total"),
                "currency": document_data.get("invoice_currency_code")
            }
        )
        
        try:
            # Log request
            request_id = self.logger.log_request(
                "POST",
                f"{self.base_url}/api/v2/document_submissions",
                self.session.headers,
                document_data
            )
            
            # Make API call
            start_time = time.time()
            response = self.session.post(
                f"{self.base_url}/api/v2/document_submissions",
                json=document_data,
                timeout=30
            )
            response_time = time.time() - start_time
            
            # Log response
            response_data = None
            if response.content:
                try:
                    response_data = response.json()
                except ValueError:
                    pass
            
            self.logger.log_response(
                request_id,
                response.status_code,
                response_time,
                response_data
            )
            
            # Log business outcome
            if response.status_code in [200, 201]:
                submission_id = response_data.get("id") if response_data else "unknown"
                self.logger.log_business_event(
                    "document_submission_succeeded",
                    document_data.get("invoice_number", "unknown"),
                    {
                        "submission_id": submission_id,
                        "response_time_ms": round(response_time * 1000, 2)
                    }
                )
            else:
                self.logger.log_business_event(
                    "document_submission_failed",
                    document_data.get("invoice_number", "unknown"),
                    {
                        "status_code": response.status_code,
                        "error": response_data.get("error") if response_data else None
                    }
                )
            
            # Log performance metric
            operation_time = time.time() - operation_start
            self.logger.log_performance_metric(
                "document_submission",
                operation_time,
                {
                    "status_code": response.status_code,
                    "document_size": len(json.dumps(document_data))
                }
            )
            
            return response_data
            
        except Exception as e:
            # Log error with context
            self.logger.log_error(e, {
                "operation": "document_submission",
                "document_id": document_data.get("invoice_number"),
                "request_id": request_id
            })
            
            # Log business event
            self.logger.log_business_event(
                "document_submission_error",
                document_data.get("invoice_number", "unknown"),
                {"error": str(e)}
            )
            raise

# Usage Example
client = StorecoveClientWithLogging("your-api-key")

try:
    result = client.submit_document({
        "invoice_number": "INV-2024-001",
        "customer": {"name": "Acme Corp"},
        "invoice_total": 1000.00,
        "invoice_currency_code": "EUR"
    })
    print(f"Document submitted: {result['id']}")
except Exception as e:
    print(f"Submission failed: {e}")
</code></pre>
              </div>
            </div>

            <!-- Node.js Implementation -->
            <div v-show="activeTab === 'nodejs'" class="tab-panel">
              <h3>Node.js Logging with Winston</h3>
              <div class="code-block">
                <pre><code>const winston = require('winston');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

class StorecoveLogger {
    constructor(options = {}) {
        this.logger = winston.createLogger({
            level: options.level || 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.errors({ stack: true }),
                winston.format.json()
            ),
            transports: [
                new winston.transports.File({ 
                    filename: 'error.log', 
                    level: 'error' 
                }),
                new winston.transports.File({ 
                    filename: 'combined.log' 
                }),
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                })
            ]
        });
    }

    logRequest(method, url, headers, payload = null, requestId = null) {
        const logData = {
            event_type: 'api_request',
            request_id: requestId || uuidv4(),
            method,
            url,
            headers: this.sanitizeHeaders(headers),
            payload_size: payload ? JSON.stringify(payload).length : 0,
            timestamp: new Date().toISOString()
        };

        if (this.logger.level === 'debug' && payload) {
            logData.payload = payload;
        }

        this.logger.info('API Request', logData);
        return logData.request_id;
    }

    logResponse(requestId, statusCode, responseTime, responseData = null) {
        const logData = {
            event_type: 'api_response',
            request_id: requestId,
            status_code: statusCode,
            response_time_ms: Math.round(responseTime),
            response_size: responseData ? JSON.stringify(responseData).length : 0,
            timestamp: new Date().toISOString()
        };

        if (this.logger.level === 'debug' && responseData) {
            logData.response_data = responseData;
        }

        if (statusCode >= 200 && statusCode < 300) {
            this.logger.info('API Response', logData);
        } else if (statusCode >= 400 && statusCode < 500) {
            this.logger.warn('API Response', logData);
        } else {
            this.logger.error('API Response', logData);
        }
    }

    logBusinessEvent(eventType, documentId, details) {
        const logData = {
            event_type: `business.${eventType}`,
            document_id: documentId,
            details,
            timestamp: new Date().toISOString()
        };
        this.logger.info('Business Event', logData);
    }

    logError(error, context = {}) {
        const logData = {
            event_type: 'error',
            error_type: error.constructor.name,
            error_message: error.message,
            stack: error.stack,
            context,
            timestamp: new Date().toISOString()
        };
        this.logger.error('Error occurred', logData);
    }

    logPerformanceMetric(operation, duration, metadata = {}) {
        const logData = {
            event_type: 'performance_metric',
            operation,
            duration_ms: Math.round(duration),
            metadata,
            timestamp: new Date().toISOString()
        };
        this.logger.info('Performance Metric', logData);
    }

    sanitizeHeaders(headers) {
        const sanitized = { ...headers };
        const sensitiveKeys = ['authorization', 'x-api-key', 'cookie'];
        
        Object.keys(sanitized).forEach(key => {
            if (sensitiveKeys.includes(key.toLowerCase())) {
                sanitized[key] = '[REDACTED]';
            }
        });
        
        return sanitized;
    }
}

class StorecoveClientWithLogging {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.storecove.com';
        this.logger = new StorecoveLogger();
        
        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });

        // Request interceptor
        this.client.interceptors.request.use(
            (config) => {
                config.metadata = { startTime: Date.now() };
                config.requestId = this.logger.logRequest(
                    config.method.toUpperCase(),
                    `${this.baseURL}${config.url}`,
                    config.headers,
                    config.data
                );
                return config;
            },
            (error) => {
                this.logger.logError(error, { stage: 'request_setup' });
                return Promise.reject(error);
            }
        );

        // Response interceptor
        this.client.interceptors.response.use(
            (response) => {
                const responseTime = Date.now() - response.config.metadata.startTime;
                this.logger.logResponse(
                    response.config.requestId,
                    response.status,
                    responseTime,
                    response.data
                );
                return response;
            },
            (error) => {
                if (error.response) {
                    const responseTime = Date.now() - error.config.metadata.startTime;
                    this.logger.logResponse(
                        error.config.requestId,
                        error.response.status,
                        responseTime,
                        error.response.data
                    );
                } else {
                    this.logger.logError(error, {
                        request_id: error.config?.requestId,
                        stage: 'network'
                    });
                }
                return Promise.reject(error);
            }
        );
    }

    async submitDocument(documentData) {
        const operationStart = Date.now();
        const documentId = documentData.invoice_number || 'unknown';

        try {
            // Log business event
            this.logger.logBusinessEvent('document_submission_started', documentId, {
                recipient: documentData.customer?.name,
                amount: documentData.invoice_total,
                currency: documentData.invoice_currency_code
            });

            const response = await this.client.post('/api/v2/document_submissions', documentData);

            // Log successful business event
            this.logger.logBusinessEvent('document_submission_succeeded', documentId, {
                submission_id: response.data.id,
                response_time_ms: Date.now() - operationStart
            });

            // Log performance metric
            this.logger.logPerformanceMetric('document_submission', Date.now() - operationStart, {
                status_code: response.status,
                document_size: JSON.stringify(documentData).length
            });

            return response.data;

        } catch (error) {
            // Log business failure
            this.logger.logBusinessEvent('document_submission_failed', documentId, {
                error: error.message,
                status_code: error.response?.status
            });

            // Log error with context
            this.logger.logError(error, {
                operation: 'document_submission',
                document_id: documentId
            });

            throw error;
        }
    }
}

// Usage
const client = new StorecoveClientWithLogging('your-api-key');

client.submitDocument({
    invoice_number: 'INV-2024-001',
    customer: { name: 'Acme Corp' },
    invoice_total: 1000.00,
    invoice_currency_code: 'EUR'
}).then(result => {
    console.log(`Document submitted: ${result.id}`);
}).catch(error => {
    console.error(`Submission failed: ${error.message}`);
});
</code></pre>
              </div>
            </div>

            <!-- Java Implementation -->
            <div v-show="activeTab === 'java'" class="tab-panel">
              <h3>Java Logging with SLF4J and Logback</h3>
              <div class="code-block">
                <pre><code>import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.time.Instant;
import java.util.Map;
import java.util.UUID;

public class StorecoveLogger {
    private final Logger logger;
    private final ObjectMapper objectMapper;
    
    public StorecoveLogger(String name) {
        this.logger = LoggerFactory.getLogger(name);
        this.objectMapper = new ObjectMapper();
    }
    
    public String logRequest(String method, String url, Map&lt;String, String&gt; headers, 
                           Object payload) {
        String requestId = UUID.randomUUID().toString();
        
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "api_request");
            logData.put("request_id", requestId);
            logData.put("method", method);
            logData.put("url", url);
            logData.set("headers", objectMapper.valueToTree(sanitizeHeaders(headers)));
            logData.put("payload_size", payload != null ? 
                objectMapper.writeValueAsString(payload).length() : 0);
            logData.put("timestamp", Instant.now().toString());
            
            // Set MDC for request correlation
            MDC.put("request_id", requestId);
            
            logger.info("API Request: {}", logData.toString());
            
        } catch (Exception e) {
            logger.error("Failed to log request", e);
        }
        
        return requestId;
    }
    
    public void logResponse(String requestId, int statusCode, long responseTimeMs, 
                          Object responseData) {
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "api_response");
            logData.put("request_id", requestId);
            logData.put("status_code", statusCode);
            logData.put("response_time_ms", responseTimeMs);
            logData.put("response_size", responseData != null ? 
                objectMapper.writeValueAsString(responseData).length() : 0);
            logData.put("timestamp", Instant.now().toString());
            
            // Set MDC for correlation
            MDC.put("request_id", requestId);
            
            if (statusCode >= 200 && statusCode < 300) {
                logger.info("API Response: {}", logData.toString());
            } else if (statusCode >= 400 && statusCode < 500) {
                logger.warn("API Response: {}", logData.toString());
            } else {
                logger.error("API Response: {}", logData.toString());
            }
            
        } catch (Exception e) {
            logger.error("Failed to log response", e);
        } finally {
            MDC.clear();
        }
    }
    
    public void logBusinessEvent(String eventType, String documentId, Map&lt;String, Object&gt; details) {
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "business." + eventType);
            logData.put("document_id", documentId);
            logData.set("details", objectMapper.valueToTree(details));
            logData.put("timestamp", Instant.now().toString());
            
            MDC.put("document_id", documentId);
            logger.info("Business Event: {}", logData.toString());
            
        } catch (Exception e) {
            logger.error("Failed to log business event", e);
        } finally {
            MDC.clear();
        }
    }
    
    public void logError(Exception error, Map&lt;String, Object&gt; context) {
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "error");
            logData.put("error_type", error.getClass().getSimpleName());
            logData.put("error_message", error.getMessage());
            logData.set("context", objectMapper.valueToTree(context));
            logData.put("timestamp", Instant.now().toString());
            
            // Add context to MDC
            context.forEach((key, value) -> 
                MDC.put(key, value != null ? value.toString() : null));
            
            logger.error("Error occurred: {}", logData.toString(), error);
            
        } catch (Exception e) {
            logger.error("Failed to log error", e);
        } finally {
            MDC.clear();
        }
    }
    
    public void logPerformanceMetric(String operation, long durationMs, 
                                   Map&lt;String, Object&gt; metadata) {
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "performance_metric");
            logData.put("operation", operation);
            logData.put("duration_ms", durationMs);
            logData.set("metadata", objectMapper.valueToTree(metadata));
            logData.put("timestamp", Instant.now().toString());
            
            logger.info("Performance Metric: {}", logData.toString());
            
        } catch (Exception e) {
            logger.error("Failed to log performance metric", e);
        }
    }
    
    private Map&lt;String, String&gt; sanitizeHeaders(Map&lt;String, String&gt; headers) {
        Map&lt;String, String&gt; sanitized = new HashMap&lt;&gt;(headers);
        String[] sensitiveKeys = {"authorization", "x-api-key", "cookie"};
        
        for (String key : sensitiveKeys) {
            if (sanitized.containsKey(key.toLowerCase())) {
                sanitized.put(key, "[REDACTED]");
            }
        }
        
        return sanitized;
    }
}

// Client implementation with logging
public class StorecoveClientWithLogging {
    private final StorecoveLogger logger;
    private final String apiKey;
    private final String baseUrl;
    private final HttpClient httpClient;
    
    public StorecoveClientWithLogging(String apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.storecove.com";
        this.logger = new StorecoveLogger("StorecoveClient");
        this.httpClient = HttpClient.newHttpClient();
    }
    
    public DocumentSubmissionResponse submitDocument(DocumentSubmissionRequest document) 
            throws StorecoveException {
        long operationStart = System.currentTimeMillis();
        String documentId = document.getInvoiceNumber();
        
        try {
            // Log business event
            Map&lt;String, Object&gt; details = Map.of(
                "recipient", document.getCustomer().getName(),
                "amount", document.getInvoiceTotal(),
                "currency", document.getInvoiceCurrencyCode()
            );
            logger.logBusinessEvent("document_submission_started", documentId, details);
            
            // Prepare request
            String requestBody = objectMapper.writeValueAsString(document);
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/api/v2/document_submissions"))
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();
            
            // Log request
            String requestId = logger.logRequest("POST", request.uri().toString(), 
                Map.of("Authorization", "[REDACTED]", "Content-Type", "application/json"),
                document);
            
            // Make request
            long requestStart = System.currentTimeMillis();
            HttpResponse&lt;String&gt; response = httpClient.send(request, 
                HttpResponse.BodyHandlers.ofString());
            long responseTime = System.currentTimeMillis() - requestStart;
            
            // Parse response
            DocumentSubmissionResponse responseData = null;
            if (!response.body().isEmpty()) {
                responseData = objectMapper.readValue(response.body(), 
                    DocumentSubmissionResponse.class);
            }
            
            // Log response
            logger.logResponse(requestId, response.statusCode(), responseTime, responseData);
            
            // Log business outcome
            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                Map&lt;String, Object&gt; successDetails = Map.of(
                    "submission_id", responseData.getId(),
                    "response_time_ms", responseTime
                );
                logger.logBusinessEvent("document_submission_succeeded", documentId, successDetails);
            } else {
                Map&lt;String, Object&gt; failureDetails = Map.of(
                    "status_code", response.statusCode(),
                    "error", response.body()
                );
                logger.logBusinessEvent("document_submission_failed", documentId, failureDetails);
                throw new StorecoveException("API call failed: " + response.statusCode());
            }
            
            // Log performance
            long operationTime = System.currentTimeMillis() - operationStart;
            Map&lt;String, Object&gt; perfMetadata = Map.of(
                "status_code", response.statusCode(),
                "document_size", requestBody.length()
            );
            logger.logPerformanceMetric("document_submission", operationTime, perfMetadata);
            
            return responseData;
            
        } catch (Exception e) {
            // Log error
            Map&lt;String, Object&gt; errorContext = Map.of(
                "operation", "document_submission",
                "document_id", documentId
            );
            logger.logError(e, errorContext);
            
            // Log business failure
            logger.logBusinessEvent("document_submission_error", documentId, 
                Map.of("error", e.getMessage()));
            
            throw new StorecoveException("Document submission failed", e);
        }
    }
}
</code></pre>
              </div>
            </div>

            <!-- C# Implementation -->
            <div v-show="activeTab === 'csharp'" class="tab-panel">
              <h3>C# Logging with Serilog</h3>
              <div class="code-block">
                <pre><code>using Serilog;
using Serilog.Context;
using System.Text.Json;
using System.Diagnostics;

public class StorecoveLogger
{
    private readonly ILogger _logger;
    
    public StorecoveLogger()
    {
        _logger = new LoggerConfiguration()
            .WriteTo.Console(formatter: new JsonFormatter())
            .WriteTo.File("logs/storecove-.log", 
                rollingInterval: RollingInterval.Day,
                formatter: new JsonFormatter())
            .Enrich.FromLogContext()
            .CreateLogger();
    }
    
    public string LogRequest(string method, string url, 
        Dictionary&lt;string, string&gt; headers, object payload = null)
    {
        var requestId = Guid.NewGuid().ToString();
        
        var logData = new
        {
            EventType = "api_request",
            RequestId = requestId,
            Method = method,
            Url = url,
            Headers = SanitizeHeaders(headers),
            PayloadSize = payload != null ? JsonSerializer.Serialize(payload).Length : 0,
            Timestamp = DateTime.UtcNow
        };
        
        using (LogContext.PushProperty("RequestId", requestId))
        {
            _logger.Information("API Request {@LogData}", logData);
        }
        
        return requestId;
    }
    
    public void LogResponse(string requestId, int statusCode, 
        long responseTimeMs, object responseData = null)
    {
        var logData = new
        {
            EventType = "api_response",
            RequestId = requestId,
            StatusCode = statusCode,
            ResponseTimeMs = responseTimeMs,
            ResponseSize = responseData != null ? 
                JsonSerializer.Serialize(responseData).Length : 0,
            Timestamp = DateTime.UtcNow
        };
        
        using (LogContext.PushProperty("RequestId", requestId))
        {
            if (statusCode >= 200 && statusCode < 300)
                _logger.Information("API Response {@LogData}", logData);
            else if (statusCode >= 400 && statusCode < 500)
                _logger.Warning("API Response {@LogData}", logData);
            else
                _logger.Error("API Response {@LogData}", logData);
        }
    }
    
    public void LogBusinessEvent(string eventType, string documentId, 
        Dictionary&lt;string, object&gt; details)
    {
        var logData = new
        {
            EventType = $"business.{eventType}",
            DocumentId = documentId,
            Details = details,
            Timestamp = DateTime.UtcNow
        };
        
        using (LogContext.PushProperty("DocumentId", documentId))
        {
            _logger.Information("Business Event {@LogData}", logData);
        }
    }
    
    public void LogError(Exception exception, Dictionary&lt;string, object&gt; context = null)
    {
        var logData = new
        {
            EventType = "error",
            ErrorType = exception.GetType().Name,
            ErrorMessage = exception.Message,
            Context = context ?? new Dictionary&lt;string, object&gt;(),
            Timestamp = DateTime.UtcNow
        };
        
        foreach (var item in context ?? new Dictionary&lt;string, object&gt;())
        {
            LogContext.PushProperty(item.Key, item.Value);
        }
        
        _logger.Error(exception, "Error occurred {@LogData}", logData);
    }
    
    public void LogPerformanceMetric(string operation, long durationMs, 
        Dictionary&lt;string, object&gt; metadata = null)
    {
        var logData = new
        {
            EventType = "performance_metric",
            Operation = operation,
            DurationMs = durationMs,
            Metadata = metadata ?? new Dictionary&lt;string, object&gt;(),
            Timestamp = DateTime.UtcNow
        };
        
        _logger.Information("Performance Metric {@LogData}", logData);
    }
    
    private Dictionary&lt;string, string&gt; SanitizeHeaders(Dictionary&lt;string, string&gt; headers)
    {
        var sanitized = new Dictionary&lt;string, string&gt;(headers);
        var sensitiveKeys = new[] { "authorization", "x-api-key", "cookie" };
        
        foreach (var key in sensitiveKeys)
        {
            if (sanitized.ContainsKey(key))
                sanitized[key] = "[REDACTED]";
        }
        
        return sanitized;
    }
}

public class StorecoveClientWithLogging
{
    private readonly HttpClient _httpClient;
    private readonly StorecoveLogger _logger;
    private readonly string _baseUrl;
    
    public StorecoveClientWithLogging(string apiKey)
    {
        _baseUrl = "https://api.storecove.com";
        _logger = new StorecoveLogger();
        
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        _httpClient.DefaultRequestHeaders.Add("Content-Type", "application/json");
    }
    
    public async Task&lt;DocumentSubmissionResponse&gt; SubmitDocumentAsync(
        DocumentSubmissionRequest document)
    {
        var operationStart = Stopwatch.StartNew();
        var documentId = document.InvoiceNumber ?? "unknown";
        
        try
        {
            // Log business event
            var details = new Dictionary&lt;string, object&gt;
            {
                ["recipient"] = document.Customer?.Name,
                ["amount"] = document.InvoiceTotal,
                ["currency"] = document.InvoiceCurrencyCode
            };
            _logger.LogBusinessEvent("document_submission_started", documentId, details);
            
            // Prepare request
            var requestBody = JsonSerializer.Serialize(document);
            var content = new StringContent(requestBody, Encoding.UTF8, "application/json");
            
            // Log request
            var requestId = _logger.LogRequest("POST", 
                $"{_baseUrl}/api/v2/document_submissions",
                new Dictionary&lt;string, string&gt; 
                { 
                    ["Authorization"] = "[REDACTED]",
                    ["Content-Type"] = "application/json"
                },
                document);
            
            // Make request
            var requestStart = Stopwatch.StartNew();
            var response = await _httpClient.PostAsync("/api/v2/document_submissions", content);
            var responseTime = requestStart.ElapsedMilliseconds;
            
            // Parse response
            var responseContent = await response.Content.ReadAsStringAsync();
            DocumentSubmissionResponse responseData = null;
            
            if (!string.IsNullOrEmpty(responseContent))
            {
                responseData = JsonSerializer.Deserialize&lt;DocumentSubmissionResponse&gt;(responseContent);
            }
            
            // Log response
            _logger.LogResponse(requestId, (int)response.StatusCode, responseTime, responseData);
            
            // Log business outcome
            if (response.IsSuccessStatusCode)
            {
                var successDetails = new Dictionary&lt;string, object&gt;
                {
                    ["submission_id"] = responseData?.Id,
                    ["response_time_ms"] = responseTime
                };
                _logger.LogBusinessEvent("document_submission_succeeded", documentId, successDetails);
            }
            else
            {
                var failureDetails = new Dictionary&lt;string, object&gt;
                {
                    ["status_code"] = (int)response.StatusCode,
                    ["error"] = responseContent
                };
                _logger.LogBusinessEvent("document_submission_failed", documentId, failureDetails);
                
                throw new StorecoveException($"API call failed: {response.StatusCode}");
            }
            
            // Log performance
            var perfMetadata = new Dictionary&lt;string, object&gt;
            {
                ["status_code"] = (int)response.StatusCode,
                ["document_size"] = requestBody.Length
            };
            _logger.LogPerformanceMetric("document_submission", 
                operationStart.ElapsedMilliseconds, perfMetadata);
            
            return responseData;
            
        }
        catch (Exception ex)
        {
            // Log error
            var errorContext = new Dictionary&lt;string, object&gt;
            {
                ["operation"] = "document_submission",
                ["document_id"] = documentId
            };
            _logger.LogError(ex, errorContext);
            
            // Log business failure
            _logger.LogBusinessEvent("document_submission_error", documentId,
                new Dictionary&lt;string, object&gt; { ["error"] = ex.Message });
            
            throw;
        }
    }
}
</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Log Analysis & Monitoring -->
    <section class="content-section bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Log Analysis & Monitoring</h2>
          <p>Tools and techniques for effective log analysis and monitoring</p>
        </div>

        <div class="analysis-grid">
          <div class="analysis-card">
            <h3>🔍 ELK Stack Integration</h3>
            <p>Elasticsearch, Logstash, and Kibana for powerful log analysis</p>
            <div class="analysis-features">
              <div class="feature-item">
                <strong>Elasticsearch:</strong> Store and index structured logs
              </div>
              <div class="feature-item">
                <strong>Logstash:</strong> Parse and transform log data
              </div>
              <div class="feature-item">
                <strong>Kibana:</strong> Visualize and explore log data
              </div>
            </div>
            <div class="config-example">
              <h4>Logstash Configuration:</h4>
              <div class="code-block small">
                <pre><code>input {
  file {
    path => "/var/log/storecove/*.log"
    start_position => "beginning"
    codec => "json"
  }
}

filter {
  if [event_type] == "api_request" {
    mutate {
      add_tag => ["api", "request"]
    }
  }
  
  if [event_type] == "api_response" {
    mutate {
      add_tag => ["api", "response"]
    }
    
    if [status_code] >= 400 {
      mutate {
        add_tag => ["error"]
      }
    }
  }
}

output {
  elasticsearch {
    hosts => ["localhost:9200"]
    index => "storecove-logs-%{+YYYY.MM.dd}"
  }
}</code></pre>
              </div>
            </div>
          </div>

          <div class="analysis-card">
            <h3>📊 Metrics & Alerting</h3>
            <p>Key metrics to monitor and alert configurations</p>
            <div class="metrics-list">
              <div class="metric-item">
                <h4>Success Rate</h4>
                <p>Alert when below 95% over 5 minutes</p>
              </div>
              <div class="metric-item">
                <h4>Response Time</h4>
                <p>Alert when p95 > 5 seconds</p>
              </div>
              <div class="metric-item">
                <h4>Error Rate</h4>
                <p>Alert when > 5% over 1 minute</p>
              </div>
              <div class="metric-item">
                <h4>Webhook Failures</h4>
                <p>Alert on any webhook delivery failure</p>
              </div>
            </div>
          </div>

          <div class="analysis-card">
            <h3>📈 Performance Monitoring</h3>
            <p>Application Performance Monitoring (APM) integration</p>
            <div class="apm-features">
              <div class="feature-item">
                <strong>Request Tracing:</strong> End-to-end request flow
              </div>
              <div class="feature-item">
                <strong>Error Tracking:</strong> Automatic error detection
              </div>
              <div class="feature-item">
                <strong>Performance Insights:</strong> Bottleneck identification
              </div>
              <div class="feature-item">
                <strong>Business Metrics:</strong> Custom KPI tracking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2>Logging Best Practices</h2>
          <p>Industry-standard practices for effective API logging</p>
        </div>

        <div class="practices-grid">
          <div class="practice-card">
            <div class="practice-icon">🔒</div>
            <h3>Security & Privacy</h3>
            <ul>
              <li>Never log sensitive data (passwords, API keys, PII)</li>
              <li>Sanitize or mask personal information</li>
              <li>Use secure log transmission (TLS)</li>
              <li>Implement log retention policies</li>
              <li>Encrypt logs at rest</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">⚡</div>
            <h3>Performance</h3>
            <ul>
              <li>Use asynchronous logging to avoid blocking</li>
              <li>Implement log level filtering</li>
              <li>Use structured JSON logging</li>
              <li>Batch log writes when possible</li>
              <li>Monitor log volume and performance impact</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">🎯</div>
            <h3>Correlation & Context</h3>
            <ul>
              <li>Use unique request IDs for correlation</li>
              <li>Include business context (document ID, customer)</li>
              <li>Add timestamp and timezone information</li>
              <li>Maintain consistent log format</li>
              <li>Include environment and version info</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">📊</div>
            <h3>Monitoring & Alerting</h3>
            <ul>
              <li>Set up real-time error alerting</li>
              <li>Monitor key business metrics</li>
              <li>Create operational dashboards</li>
              <li>Implement log-based SLA monitoring</li>
              <li>Use log aggregation tools</li>
            </ul>
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
  name: 'APILogs',
  data() {
    return {
      activeTab: 'python'
    }
  }
}
</script>

<style scoped>
.api-logs {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
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

/* Strategy Grid */
.strategy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.strategy-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.strategy-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.strategy-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.strategy-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.strategy-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.feature {
  background: #f0f7ff;
  color: #0066cc;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Log Levels */
.log-levels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.level-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.level-header {
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.level-card.error .level-header {
  background: #fee2e2;
  color: #991b1b;
}

.level-card.warning .level-header {
  background: #fef3c7;
  color: #92400e;
}

.level-card.info .level-header {
  background: #dbeafe;
  color: #1e40af;
}

.level-card.debug .level-header {
  background: #f3f4f6;
  color: #374151;
}

.level-icon {
  font-size: 1.5rem;
}

.level-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.level-content {
  padding: 2rem;
}

.level-content p {
  margin-bottom: 1.5rem;
  color: #666;
}

.level-examples h4 {
  color: #333;
  margin-bottom: 1rem;
}

.level-examples ul {
  margin: 0;
  padding-left: 1.5rem;
}

.level-examples li {
  margin-bottom: 0.5rem;
  color: #666;
}

/* Implementation Tabs */
.implementation-tabs {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.tab-buttons {
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e5e7eb;
}

.tab-btn {
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  background: transparent;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  background: #e5e7eb;
}

.tab-btn.active {
  background: white;
  color: #0066cc;
  border-bottom: 2px solid #0066cc;
}

.tab-content {
  padding: 2rem;
}

.tab-panel h3 {
  color: #333;
  margin-bottom: 1rem;
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
  font-size: 0.85rem;
  line-height: 1.5;
}

/* Analysis Grid */
.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.analysis-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.analysis-card h3 {
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.analysis-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.analysis-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.feature-item strong {
  color: #333;
}

.config-example h4 {
  color: #333;
  margin: 1.5rem 0 1rem 0;
}

.metrics-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.metric-item {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.metric-item h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.metric-item p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.apm-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Best Practices */
.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.practice-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.practice-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.practice-card h3 {
  color: #333;
  margin-bottom: 1.5rem;
}

.practice-card ul {
  margin: 0;
  padding-left: 1.5rem;
}

.practice-card li {
  margin-bottom: 0.75rem;
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
  
  .strategy-grid {
    grid-template-columns: 1fr;
  }
  
  .log-levels {
    grid-template-columns: 1fr;
  }
  
  .tab-buttons {
    flex-direction: column;
  }
  
  .analysis-grid {
    grid-template-columns: 1fr;
  }
  
  .practices-grid {
    grid-template-columns: 1fr;
  }
}
</style>