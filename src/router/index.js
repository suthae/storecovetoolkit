import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import IntegrationBasicsFAQ from '../views/IntegrationBasicsFAQ.vue'
import GettingStartedWebinar from '../views/GettingStartedWebinar.vue'
import PlatformPlugins from '../views/PlatformPlugins.vue'
import SDKLibraries from '../views/SDKLibraries.vue'
import ImplementationGuide from '../views/ImplementationGuide.vue'
import SampleCode from '../views/SampleCode.vue'
import WebhookTesting from '../views/WebhookTesting.vue'
import DeveloperDashboard from '../views/DeveloperDashboard.vue'
import ErrorHandling from '../views/ErrorHandling.vue'
import APILogs from '../views/APILogs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/integration-basics-faq',
    name: 'IntegrationBasicsFAQ',
    component: IntegrationBasicsFAQ
  },
  {
    path: '/getting-started-webinar',
    name: 'GettingStartedWebinar',
    component: GettingStartedWebinar
  },
  {
    path: '/platform-plugins',
    name: 'PlatformPlugins',
    component: PlatformPlugins
  },
  {
    path: '/sdk-libraries',
    name: 'SDKLibraries',
    component: SDKLibraries
  },
  {
    path: '/implementation-guide',
    name: 'ImplementationGuide',
    component: ImplementationGuide
  },
  {
    path: '/sample-code',
    name: 'SampleCode',
    component: SampleCode
  },
  {
    path: '/webhook-testing',
    name: 'WebhookTesting',
    component: WebhookTesting
  },
  {
    path: '/developer-dashboard',
    name: 'DeveloperDashboard',
    component: DeveloperDashboard
  },
  {
    path: '/error-handling',
    name: 'ErrorHandling',
    component: ErrorHandling
  },
  {
    path: '/api-logs',
    name: 'APILogs',
    component: APILogs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router