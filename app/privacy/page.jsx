import React from 'react';
import './privacy-policy.css';

const Privacy = () => {
  return (
    <main className="privacy-container">
      <section>
        <h1>Privacy Policy</h1>
        <p>At Let’s Diskuss, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your information across our services, including website, mobile apps, and other platforms.</p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Personal data such as email address, name, or contact information when provided by you.</li>
          <li>Technical data including IP address, browser type, device info, location, and cookies.</li>
          <li>Usage data like pages visited, links clicked, and time spent on pages.</li>
          <li>Social account data when signing in via platforms like Facebook or Twitter.</li>
          <li>User-generated content and comments on our platform.</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To operate, maintain, and improve our services.</li>
          <li>To send service-related notifications and updates.</li>
          <li>To personalize user experience and content.</li>
          <li>To ensure security and detect/prevent fraud or abuse.</li>
          <li>For legal compliance, audits, and business transfers (e.g. mergers or acquisitions).</li>
        </ul>
      </section>

      <section>
        <h2>3. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar technologies to:</p>
        <ul>
          <li>Remember login sessions and preferences.</li>
          <li>Analyze site traffic and user behavior (Analytics Cookies).</li>
          <li>Provide secure authentication (Security Cookies).</li>
          <li>Deliver relevant advertisements (Advertising Cookies).</li>
          <li>Enable site features like contact importing or media viewing.</li>
        </ul>
        <p>You can manage or disable cookies through your browser settings. However, doing so may impact some site features.</p>
      </section>

      <section>
        <h2>4. Sharing of Information</h2>
        <p>We do not sell your personal information. We may share your data with:</p>
        <ul>
          <li>Service providers (e.g. payment processors, email services).</li>
          <li>Legal authorities if required by law or to enforce our terms.</li>
          <li>Business partners in case of corporate restructuring.</li>
          <li>With your consent for specific purposes.</li>
        </ul>
      </section>

      <section>
        <h2>5. Third-Party Services and Ads</h2>
        <p>We may allow third-party ad networks and analytics providers to use cookies and technologies to track user behavior. Their policies govern their data practices, and we are not responsible for third-party services.</p>
      </section>

      <section>
        <h2>6. Your Choices</h2>
        <ul>
          <li>Opt out of marketing emails through the link in the email.</li>
          <li>Disable location tracking via your mobile device settings.</li>
          <li>Access, update, or delete your account via account settings.</li>
          <li>Adjust cookie preferences via browser settings.</li>
        </ul>
      </section>

      <section>
        <h2>7. Data Security</h2>
        <p>We implement physical, technical, and managerial safeguards to protect your data. However, no system is 100% secure. You are responsible for maintaining the security of your account credentials.</p>
      </section>

      <section>
        <h2>8. Children’s Privacy</h2>
        <p>We do not knowingly collect personal information from children under 13. If we become aware of such data, we delete it promptly.</p>
      </section>

      <section>
        <h2>9. International Data Transfers</h2>
        <p>By using our services, you agree to the transfer of your information to and processing in countries other than your own, in accordance with this Privacy Policy.</p>
      </section>

      <section>
        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted here, and your continued use of our services constitutes acceptance of the updated policy.</p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>If you have any questions about this policy or your personal data, please contact us at: <a href="mailto:privacy@letsdiskuss.com">privacy@letsdiskuss.com</a></p>
      </section>
    </main>
  );
};

export default Privacy;
