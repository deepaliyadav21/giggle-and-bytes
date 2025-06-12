import React from 'react';

export const metadata = {
  title: "Terms and Conditions | Let's Diskuss",
  description: "Read our terms and conditions to understand the rules and guidelines for using Let's Diskuss platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
            <p className="text-lg text-gray-600">
              At Let's Diskuss, we are well aware of the importance of your privacy and we are taking it seriously.
              This privacy policy outlines our practices regarding the collection, use, and disclosure of information
              when using our services.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Information Collection and Use
            </h2>
            <p className="text-gray-600">
              We collect data to analyze service usage, improve performance, personalize content, and comply with
              legal obligations. This may include IP addresses, cookies, user activity logs, and more.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Email & Contact Info
            </h2>
            <p className="text-gray-600">
              We use your email to send service-related notices, updates, and marketing messages. You can opt out of
              promotional emails. If you use social logins, your social account data may be collected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Automatic Data Collection
            </h2>
            <p className="text-gray-600">
              We use cookies, session storage, persistent cookies, log files, and other technologies to enhance your
              user experience and analyze usage. These may collect data like device info, browser type, location,
              pages viewed, and time spent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Cookies
            </h2>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li className="list-disc">
                <strong>Analytics & Research:</strong> Helps us understand how the site is used.
              </li>
              <li className="list-disc">
                <strong>Authentication:</strong> Keeps your session secure and persistent.
              </li>
              <li className="list-disc">
                <strong>Advertising:</strong> Delivers more relevant ads to you.
              </li>
              <li className="list-disc">
                <strong>Feature Preferences:</strong> Stores your settings and preferences.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Third-Party Services
            </h2>
            <p className="text-gray-600">
              We may share data with third-party providers for analytics, infrastructure, support, or to provide
              combined services. Ad networks may collect info, but we don't share personally identifiable data
              without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Business Transfers
            </h2>
            <p className="text-gray-600">
              In the event of a merger, acquisition, or asset sale, your information may be transferred. You'll be
              notified via email or a notice on our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Legal Disclosure
            </h2>
            <p className="text-gray-600">
              We may disclose data if legally required or to protect our rights, safety, and the safety of others.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Children's Privacy
            </h2>
            <p className="text-gray-600">
              We do not knowingly collect personal information from anyone under 13. If we learn we have done so, we
              will delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              External Links
            </h2>
            <p className="text-gray-600">
              We are not responsible for the content or privacy practices of linked third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              Policy Updates
            </h2>
            <p className="text-gray-600">
              We may revise this Privacy Policy. Changes will be posted on this page with the effective date. Please
              review periodically.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-gray-600 font-semibold">
              For questions or concerns, please contact us at:{' '}
              <a href="mailto:support@letsdiskuss.com" className="text-primary hover:underline">
                support@letsdiskuss.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}