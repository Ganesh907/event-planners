import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="bg-gray-100 text-gray-700 py-16 px-6 md:px-20">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#9c27b0] italic"
          style={{ fontFamily: "Playfair Display" }}
        >
          Terms & Conditions
        </h1>
        <p className="text-md md:text-lg mt-4">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Terms Content */}
      <div className="space-y-10">
        {/* Section 1: Agreement Overview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            1. Agreement Overview
          </h2>
          <p className="mt-3 text-gray-600">
            These Terms & Conditions ("Terms") govern your access and use of our
            website and services. By accessing or using our services, you agree
            to be bound by these Terms. If you do not agree, please discontinue
            use immediately.
          </p>
        </div>

        {/* Section 2: Service Eligibility */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            2. Service Eligibility
          </h2>
          <p className="mt-3 text-gray-600">
            To use our services, you must:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>Be at least 18 years of age.</li>
            <li>
              Provide accurate and complete personal information during booking.
            </li>
            <li>
              Ensure compliance with applicable local laws and regulations.
            </li>
          </ul>
        </div>

        {/* Section 3: Booking and Payments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            3. Booking and Payments
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>
              All bookings must be made in advance through our website or
              customer support team.
            </li>
            <li>
              A deposit may be required to secure your booking, which is
              non-refundable unless specified otherwise.
            </li>
            <li>
              Payments can be made via accepted credit cards, debit cards, or
              other approved methods.
            </li>
          </ul>
        </div>

        {/* Section 4: Cancellations and Refunds */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            4. Cancellations and Refunds
          </h2>
          <p className="mt-3 text-gray-600">
            Cancellation and refund policies are as follows:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>
              Cancellations made at least 7 days before the event are eligible
              for a partial refund.
            </li>
            <li>
              Cancellations within 7 days of the event are not eligible for a
              refund.
            </li>
            <li>
              In case of unforeseen circumstances or force majeure events, we
              reserve the right to reschedule or cancel services with prior
              notice.
            </li>
          </ul>
        </div>

        {/* Section 5: User Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            5. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>
              Provide accurate event details, preferences, and contact
              information.
            </li>
            <li>
              Ensure proper access and permissions for event setup and
              execution.
            </li>
            <li>
              Avoid engaging in illegal, harmful, or fraudulent activities when
              using our services.
            </li>
          </ul>
        </div>

        {/* Section 6: Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            6. Limitation of Liability
          </h2>
          <p className="mt-3 text-gray-600">
            We are not liable for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>
              Delays, cancellations, or disruptions caused by third-party
              vendors or external factors.
            </li>
            <li>
              Damages or losses arising from user-provided incorrect or
              incomplete information.
            </li>
            <li>
              Any indirect, incidental, or consequential damages resulting from
              your use of our services.
            </li>
          </ul>
        </div>

        {/* Section 7: Changes to Terms */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            7. Changes to Terms
          </h2>
          <p className="mt-3 text-gray-600">
            We reserve the right to modify these Terms at any time. Changes will
            be effective upon posting on this page. We encourage you to review
            the Terms periodically to stay informed.
          </p>
        </div>

        {/* Section 8: Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#9c27b0]">
            8. Contact Information
          </h2>
          <p className="mt-3 text-gray-600">
            For any questions or concerns regarding these Terms, please contact
            us at:
          </p>
          <ul className="mt-2">
            <li>Email: support@eventplanners.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Event Avenue, City, Country</li>
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

export default TermsAndConditions;
