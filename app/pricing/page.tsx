import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all group-hover:scale-105">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">HelpDesk AI</span>
                  <p className="text-xs text-gray-500 hidden sm:block">AI-Powered Support</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/#features" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all relative group">
                Features
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all"></span>
              </Link>
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all relative group">
                Blog
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all"></span>
              </a>
              <Link href="/pricing" className="px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg relative">
                Pricing
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-blue-600"></span>
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <a href="#" className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </a>
              <button className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105">
                Free Trial
              </button>
              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-sm font-medium text-gray-700">Monthly</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
              </button>
              <span className="text-sm font-medium text-gray-700">
                Yearly
                <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="relative bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-blue-500 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 text-sm">Perfect for small teams getting started</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Billed annually or $35/month</p>
              </div>
              <button className="w-full py-3 px-4 text-base font-semibold text-gray-900 border-2 border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-600 transition-all mb-8">
                Start Free Trial
              </button>
              <div className="space-y-4">
                {[
                  "Up to 1,000 conversations/month",
                  "1 chatbot",
                  "Basic AI responses",
                  "Email support",
                  "Basic analytics",
                  "Custom branding"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Plan - Featured */}
            <div className="relative bg-white rounded-lg border-2 border-blue-500 p-8 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600 text-sm">For growing businesses with higher volume</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Billed annually or $119/month</p>
              </div>
              <button className="w-full py-3 px-4 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all mb-8">
                Start Free Trial
              </button>
              <div className="space-y-4">
                {[
                  "Up to 10,000 conversations/month",
                  "Up to 5 chatbots",
                  "Advanced AI with learning",
                  "Priority email & chat support",
                  "Advanced analytics & reports",
                  "Custom branding & themes",
                  "API access",
                  "Multi-language support",
                  "Integration with 50+ tools"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="relative bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-blue-500 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 text-sm">For large organizations with custom needs</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">Custom</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Contact us for pricing</p>
              </div>
              <button className="w-full py-3 px-4 text-base font-semibold text-gray-900 border-2 border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-600 transition-all mb-8">
                Contact Sales
              </button>
              <div className="space-y-4">
                {[
                  "Unlimited conversations",
                  "Unlimited chatbots",
                  "Custom AI training & models",
                  "24/7 dedicated support",
                  "Custom analytics & dashboards",
                  "White-label solution",
                  "Advanced API & webhooks",
                  "SSO & advanced security",
                  "Dedicated account manager",
                  "Custom integrations"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-gray-600">
              See what's included in each plan
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 bg-blue-50">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Monthly Conversations", starter: "1,000", professional: "10,000", enterprise: "Unlimited" },
                    { feature: "Number of Chatbots", starter: "1", professional: "5", enterprise: "Unlimited" },
                    { feature: "AI Model", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
                    { feature: "Response Time", starter: "Standard", professional: "Fast", enterprise: "Instant" },
                    { feature: "Knowledge Base", starter: "5 MB", professional: "50 MB", enterprise: "Unlimited" },
                    { feature: "Custom Branding", starter: "✓", professional: "✓", enterprise: "✓" },
                    { feature: "White Label", starter: "—", professional: "—", enterprise: "✓" },
                    { feature: "API Access", starter: "—", professional: "✓", enterprise: "Advanced" },
                    { feature: "Webhooks", starter: "—", professional: "✓", enterprise: "✓" },
                    { feature: "Analytics Dashboard", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
                    { feature: "Export Data", starter: "—", professional: "✓", enterprise: "✓" },
                    { feature: "Multi-language", starter: "—", professional: "✓", enterprise: "✓" },
                    { feature: "Integrations", starter: "10", professional: "50+", enterprise: "Custom" },
                    { feature: "Support", starter: "Email", professional: "Priority", enterprise: "24/7 Dedicated" },
                    { feature: "SLA Guarantee", starter: "—", professional: "99.9%", enterprise: "99.99%" },
                    { feature: "SSO", starter: "—", professional: "—", enterprise: "✓" },
                    { feature: "Custom Training", starter: "—", professional: "—", enterprise: "✓" },
                    { feature: "Account Manager", starter: "—", professional: "—", enterprise: "✓" },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.starter}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600 bg-blue-50 font-medium">{row.professional}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle."
              },
              {
                question: "What happens if I exceed my plan limits?",
                answer: "If you exceed your monthly conversation limit, we'll notify you and you can either upgrade your plan or purchase additional conversations. We won't interrupt your service."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 14-day free trial for all plans. If you're not satisfied within the first 30 days of paid service, we offer a full refund."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, and ACH transfers. Enterprise customers can also pay via invoice."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes, you can cancel your subscription at any time. Your service will continue until the end of your billing period, and you won't be charged again."
              },
              {
                question: "Do you offer discounts for annual plans?",
                answer: "Yes! Annual plans receive a 20% discount compared to monthly billing. This saves you money while providing the same great service."
              },
              {
                question: "What's included in the free trial?",
                answer: "The free trial includes full access to all features of your chosen plan for 14 days. No credit card required to start, and you can cancel anytime during the trial."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help you choose the right plan for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
            <button className="px-8 py-3 text-base font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-900">HelpDesk AI</span>
            </Link>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2024 HelpDesk AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
