import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <SEO
      title="Privacy Policy — Websbond"
      description="Read Websbond's privacy policy to understand how we collect, use, and protect your personal information."
      path="/privacy-policy"
    />
    <section className="container py-14 lg:py-20 max-w-3xl">
      <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Last updated: January 1, 2024</p>

      <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">1. Information We Collect</h2>
          <p>When you use our website or contact us, we may collect:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Name, email address, and phone number submitted via contact forms</li>
            <li>Newsletter subscription email addresses</li>
            <li>Usage data such as pages visited and time spent (via analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Respond to your enquiries and provide consultation</li>
            <li>Send newsletters and updates (only if you subscribed)</li>
            <li>Improve our website and services</li>
          </ul>
          <p className="mt-3">We never sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">3. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorised access, disclosure, or alteration. However, no method of internet transmission is 100% secure.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">4. Cookies</h2>
          <p>Our website may use cookies for analytics and to improve your browsing experience. You can control cookie settings in your browser preferences.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">5. Third-Party Services</h2>
          <p>We may use third-party services such as Google Analytics to understand website usage. These services have their own privacy policies.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">6. Your Rights</h2>
          <p>You have the right to request access to, correction of, or deletion of your personal data. Contact us at <a href="mailto:hello@websbond.com" className="text-brand hover:underline">hello@websbond.com</a> to exercise these rights.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">7. Contact Us</h2>
          <p>For any privacy-related questions, please contact:</p>
          <address className="not-italic mt-2 space-y-1">
            <div><strong>Websbond</strong></div>
            <div>Indore, Madhya Pradesh, India — 452001</div>
            <div>Email: <a href="mailto:hello@websbond.com" className="text-brand hover:underline">hello@websbond.com</a></div>
          </address>
        </section>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
