import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";

const Terms = () => (
  <Layout>
    <SEO
      title="Terms & Conditions — Websbond"
      description="Read Websbond's terms and conditions governing use of our website and services."
      path="/terms"
    />
    <section className="container py-14 lg:py-20 max-w-3xl">
      <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-8">Terms & Conditions</h1>
      <p className="text-muted-foreground mb-6">Last updated: January 1, 2024</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using the Websbond website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">2. Services</h2>
          <p>Websbond provides digital services including website development, SEO, digital marketing, brand identity, and social media management. The specific scope, pricing, and timelines for each engagement are agreed upon in a separate service agreement.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">3. Payments</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Prices are as quoted and agreed before work commences.</li>
            <li>There are no hidden charges — final price is the agreed price.</li>
            <li>Payment terms are specified in the individual service agreement.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">4. Cancellation</h2>
          <p>You may cancel ongoing services at any time with written notice. Work completed up to the point of cancellation may be billed at the agreed rate. No cancellation fees apply for monthly plans.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">5. Intellectual Property</h2>
          <p>Upon full payment, clients receive full ownership of the deliverables created for them. Websbond retains the right to display completed work in its portfolio unless otherwise agreed in writing.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">6. Limitation of Liability</h2>
          <p>Websbond is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our maximum liability is limited to the total fees paid for the specific service.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">7. Website Use</h2>
          <p>You may not use this website to transmit harmful, offensive, or illegal content. Websbond reserves the right to refuse service to anyone for any reason.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">8. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Indore, Madhya Pradesh.</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">9. Contact</h2>
          <address className="not-italic space-y-1">
            <div><strong>Websbond</strong></div>
            <div>Indore, Madhya Pradesh, India — 452001</div>
            <div>Email: <a href="mailto:hello@websbond.com" className="text-brand hover:underline">hello@websbond.com</a></div>
          </address>
        </section>
      </div>
    </section>
  </Layout>
);

export default Terms;
