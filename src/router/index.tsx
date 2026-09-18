import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const WorkPage = lazy(() => import('../pages/WorkPage'));
const EcosystemPage = lazy(() => import('../pages/EcosystemPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const PricingPage = lazy(() => import('../pages/PricingPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const AppsPage = lazy(() => import('../pages/services/AppsPage'));
const PortalsPage = lazy(() => import('../pages/services/PortalsPage'));
const DashboardsPage = lazy(() => import('../pages/services/DashboardsPage'));
const GHLPage = lazy(() => import('../pages/services/GHLPage'));
const AgenticPage = lazy(() => import('../pages/services/AgenticPage'));
const IntegrationsPage = lazy(() => import('../pages/services/IntegrationsPage'));
const WebsitesPage = lazy(() => import('../pages/services/WebsitesPage'));
const SimplyScrapablePage = lazy(() => import('../pages/ecosystem/SimplyScrapablePage'));
const ProfitibullPage = lazy(() => import('../pages/ecosystem/ProfitibullPage'));
const ProfitBotPage = lazy(() => import('../pages/ecosystem/ProfitBotPage'));
const GHLBuildoutPage = lazy(() => import('../pages/ecosystem/GHLBuildoutPage'));
const ProfitLinkPage = lazy(() => import('../pages/ecosystem/ProfitLinkPage'));
const ProfitMailPage = lazy(() => import('../pages/ecosystem/ProfitMailPage'));
const ProcessPage = lazy(() => import('../pages/about/ProcessPage'));
const IndustriesPage = lazy(() => import('../pages/about/IndustriesPage'));
const WhyCustomPage = lazy(() => import('../pages/about/WhyCustomPage'));
const StartProjectPage = lazy(() => import('../pages/about/StartProjectPage'));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <SuspenseWrapper><HomePage /></SuspenseWrapper> },
      { path: 'services', element: <SuspenseWrapper><ServicesPage /></SuspenseWrapper> },
      { path: 'services/apps', element: <SuspenseWrapper><AppsPage /></SuspenseWrapper> },
      { path: 'services/portals', element: <SuspenseWrapper><PortalsPage /></SuspenseWrapper> },
      { path: 'services/dashboards', element: <SuspenseWrapper><DashboardsPage /></SuspenseWrapper> },
      { path: 'services/ghl-buildouts', element: <SuspenseWrapper><GHLPage /></SuspenseWrapper> },
      { path: 'services/agentic-apps', element: <SuspenseWrapper><AgenticPage /></SuspenseWrapper> },
      { path: 'services/integrations', element: <SuspenseWrapper><IntegrationsPage /></SuspenseWrapper> },
      { path: 'services/websites', element: <SuspenseWrapper><WebsitesPage /></SuspenseWrapper> },
      { path: 'work', element: <SuspenseWrapper><WorkPage /></SuspenseWrapper> },
      { path: 'ecosystem', element: <SuspenseWrapper><EcosystemPage /></SuspenseWrapper> },
      { path: 'ecosystem/simply-scrapable', element: <SuspenseWrapper><SimplyScrapablePage /></SuspenseWrapper> },
      { path: 'ecosystem/profitibull', element: <SuspenseWrapper><ProfitibullPage /></SuspenseWrapper> },
      { path: 'ecosystem/profitbot', element: <SuspenseWrapper><ProfitBotPage /></SuspenseWrapper> },
      { path: 'ecosystem/profitibull/ghl-buildout', element: <SuspenseWrapper><GHLBuildoutPage /></SuspenseWrapper> },
      { path: 'ecosystem/profitlink', element: <SuspenseWrapper><ProfitLinkPage /></SuspenseWrapper> },
      { path: 'ecosystem/profitmail', element: <SuspenseWrapper><ProfitMailPage /></SuspenseWrapper> },
      { path: 'about', element: <SuspenseWrapper><AboutPage /></SuspenseWrapper> },
      { path: 'about/process', element: <SuspenseWrapper><ProcessPage /></SuspenseWrapper> },
      { path: 'about/industries', element: <SuspenseWrapper><IndustriesPage /></SuspenseWrapper> },
      { path: 'about/why-custom', element: <SuspenseWrapper><WhyCustomPage /></SuspenseWrapper> },
      { path: 'about/start-a-project', element: <SuspenseWrapper><StartProjectPage /></SuspenseWrapper> },
      { path: 'about/start-project', element: <SuspenseWrapper><StartProjectPage /></SuspenseWrapper> },
      { path: 'pricing', element: <SuspenseWrapper><PricingPage /></SuspenseWrapper> },
      { path: 'blog', element: <SuspenseWrapper><BlogPage /></SuspenseWrapper> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
