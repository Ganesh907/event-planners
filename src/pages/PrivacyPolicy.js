import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-100 text-gray-700 py-16 px-6 md:px-20">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#9c27b0] italic"
          style={{ fontFamily: "Playfair Display" }}
        >
          Privacy Policy
        </h1>
        <p className="text-md md:text-lg mt-4">
          Learn how we handle your personal information with utmost care and
          transparency.
        </p>
      </div>

      {/* Policy Content */}
      <div className="space-y-10">
        {/* Section 1: Introduction */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">1. Introduction</h2>
          <p className="mt-3 text-gray-600">
            This Privacy Policy explains how our event planning company
            collects, uses, and safeguards your information when you visit our
            website or use our services. By accessing our website, you agree to
            the practices described in this policy.
          </p>
        </div>

        {/* Section 2: Information We Collect */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            2. Information We Collect
          </h2>
          <ul className="mt-3 list-disc pl-6 text-gray-600">
            <li>Personal information: name, email address, phone number.</li>
            <li>Billing information: payment details, billing address.</li>
            <li>
              Usage data: IP address, browser type, pages visited, and time
              spent on our website.
            </li>
            <li>Event details: preferences, themes, and budget information.</li>
          </ul>
        </div>

        {/* Section 3: How We Use Your Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            3. How We Use Your Information
          </h2>
          <p className="mt-3 text-gray-600">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>Provide and deliver services tailored to your preferences.</li>
            <li>Process payments and issue invoices or receipts.</li>
            <li>Communicate updates, offers, or changes to services.</li>
            <li>Improve website functionality and user experience.</li>
            <li>Ensure compliance with legal obligations.</li>
          </ul>
        </div>

        {/* Section 4: Data Sharing */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">4. Data Sharing</h2>
          <p className="mt-3 text-gray-600">
            We value your privacy and do not sell your information. We may share
            your data with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>
              Trusted third-party vendors for payment processing, email
              communications, or analytics.
            </li>
            <li>
              Legal authorities, if required by law or in response to legal
              proceedings.
            </li>
          </ul>
        </div>

        {/* Section 5: Data Protection */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">5. Data Protection</h2>
          <p className="mt-3 text-gray-600">
            We implement the following measures to protect your data:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>Encryption of sensitive information during transmission.</li>
            <li>Regular security audits and updates.</li>
            <li>Access control to restrict unauthorized access to data.</li>
          </ul>
        </div>

        {/* Section 6: Your Rights */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">6. Your Rights</h2>
          <p className="mt-3 text-gray-600">
            As a user, you have the following rights:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>Request access to your personal data.</li>
            <li>Request corrections or updates to your data.</li>
            <li>Request deletion of your data.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
        </div>

        {/* Section 7: Cookie Policy */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">7. Cookie Policy</h2>
          <p className="mt-3 text-gray-600">
            Our website uses cookies to enhance your experience. Cookies help us
            remember your preferences and improve functionality. You can disable
            cookies through your browser settings.
          </p>
        </div>

        {/* Section 8: Contact Us */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">8. Contact Us</h2>
          <p className="mt-3 text-gray-600">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <ul className="mt-2">
            <li>Email: support@eventplanners.com</li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center text-sm text-gray-500">
        <p>© 2025 Event Planners. All rights reserved.</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
