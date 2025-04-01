import React, { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ChatBots from './pages/ChatBots';
import AiAgents from './pages/AiAgents';
import AiWorkflows from './pages/AiWorkflows';
import AgenticRag from './pages/AgenticRag';
import WhyUs from './pages/WhyUs';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import AiStrategist from './pages/AiStrategist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="chatbots" element={<ChatBots />} />
          <Route path="agents" element={<AiAgents />} />
          <Route path="workflows" element={<AiWorkflows />} />
          <Route path="agentic-rag" element={<AgenticRag />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="ai-strategist" element={<AiStrategist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;