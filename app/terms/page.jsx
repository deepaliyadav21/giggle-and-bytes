import "./term.css"; // Import the CSS file for styling


export const metadata = {
  title: "Privacy Policy | Let's Diskuss",
  description: "Read our privacy policy to understand how Let's Diskuss collects and handles your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        At Let’s Diskuss, we are well aware of the importance of your privacy and we are taking it seriously.
        This privacy policy outlines our practices regarding the collection, use, and disclosure of information
        when using our services.
      </p>

      <h2>Information Collection and Use</h2>
      <p>
        We collect data to analyze service usage, improve performance, personalize content, and comply with
        legal obligations. This may include IP addresses, cookies, user activity logs, and more.
      </p>

      <h2>Email & Contact Info</h2>
      <p>
        We use your email to send service-related notices, updates, and marketing messages. You can opt out of
        promotional emails. If you use social logins, your social account data may be collected.
      </p>

      <h2>Automatic Data Collection</h2>
      <p>
        We use cookies, session storage, persistent cookies, log files, and other technologies to enhance your
        user experience and analyze usage. These may collect data like device info, browser type, location,
        pages viewed, and time spent.
      </p>

      <h2>Cookies</h2>
      <ul>
        <li><strong>Analytics & Research:</strong> Helps us understand how the site is used.</li>
        <li><strong>Authentication:</strong> Keeps your session secure and persistent.</li>
        <li><strong>Advertising:</strong> Delivers more relevant ads to you.</li>
        <li><strong>Feature Preferences:</strong> Stores your settings and preferences.</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        We may share data with third-party providers for analytics, infrastructure, support, or to provide
        combined services. Ad networks may collect info, but we don't share personally identifiable data
        without your consent.
      </p>

      <h2>Business Transfers</h2>
      <p>
        In the event of a merger, acquisition, or asset sale, your information may be transferred. You’ll be
        notified via email or a notice on our site.
      </p>

      <h2>Legal Disclosure</h2>
      <p>
        We may disclose data if legally required or to protect our rights, safety, and the safety of others.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        We do not knowingly collect personal information from anyone under 13. If we learn we have done so, we
        will delete it immediately.
      </p>

      <h2>External Links</h2>
      <p>
        We are not responsible for the content or privacy practices of linked third-party websites.
      </p>

      <h2>Policy Updates</h2>
      <p>
        We may revise this Privacy Policy. Changes will be posted on this page with the effective date. Please
        review periodically.
      </p>

      <p className="contact-note">
        For questions or concerns, please contact us at: <a href="mailto:support@letsdiskuss.com">support@letsdiskuss.com</a>
      </p>
    </main>
  );
}
