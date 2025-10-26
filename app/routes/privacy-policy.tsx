// PrivacyPolicy.tsx
import React, { useState } from "react";

interface PolicySection {
  id: string;
  title: string;
  content: string;
}

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  const policySections: PolicySection[] = [
    {
      id: "introduction",
      title: "Introduction",
      content: `DK Global Fashion Wear Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or make purchases from us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.`,
    },
    {
      id: "information-collection",
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:
• Personal Identification Information: Name, email address, phone number, shipping address
• Payment Information: Credit card details, billing address (processed securely through our payment processors)
• Account Information: Username, password, profile preferences
• Communications: Records of your correspondence with us
• Technical Data: IP address, browser type, device information, and usage data

We also automatically collect certain information when you visit our website, including through cookies and similar technologies.`,
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      content: `We use the information we collect in the following ways:
• To process and fulfill your orders and transactions
• To provide, maintain, and improve our services
• To communicate with you about products, services, offers, and promotions
• To personalize your experience and deliver content and product offerings relevant to your interests
• To protect against, identify, and prevent fraud and other unlawful activities
• To comply with legal obligations and enforce our terms and conditions
• To send administrative information, such as updates to our policies`,
    },
    {
      id: "data-sharing",
      title: "Data Sharing and Disclosure",
      content: `We may share your information in the following circumstances:
• With Service Providers: We share information with third-party vendors who perform services on our behalf, such as payment processing, shipping, data analysis, email delivery, and hosting services.
• For Business Transfers: In connection with any merger, sale of company assets, or acquisition of all or a portion of our business.
• For Legal Reasons: To comply with applicable laws, regulations, legal processes, or governmental requests.
• With Your Consent: We may share your information with your consent or at your direction.

We do not sell your personal information to third parties.`,
    },
    {
      id: "data-security",
      title: "Data Security",
      content: `We implement appropriate technical and organizational security measures designed to protect your personal information. These measures include:
• Encryption of sensitive data during transmission and storage
• Regular security assessments and vulnerability testing
• Access controls and authentication procedures
• Secure server infrastructure and network protection

While we have implemented reasonable safeguards, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.`,
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      content: `Depending on your location, you may have the following rights regarding your personal information:
• Access: You can request access to the personal information we hold about you.
• Correction: You can request correction of inaccurate or incomplete information.
• Deletion: You can request deletion of your personal information under certain circumstances.
• Restriction: You can request restriction of processing of your personal information.
• Portability: You can request transfer of your data to another organization.
• Objection: You can object to processing of your personal information.

To exercise these rights, please contact us using the information provided in the "Contact Us" section.`,
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to collect information about your browsing behavior. These technologies help us:
• Remember your preferences and settings
• Understand how you use our website
• Deliver personalized content and advertisements
• Analyze and improve our services

You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.`,
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: `We retain your personal information only for as long as necessary to fulfill the purposes for which we collected it, including to satisfy any legal, accounting, or reporting requirements. Our retention periods are based on:
• The amount, nature, and sensitivity of the personal data
• The potential risk of harm from unauthorized use or disclosure
• The purposes for which we process the data
• Applicable legal requirements

Typically, we retain customer data for 7 years after the end of our business relationship.`,
    },
    {
      id: "international-transfer",
      title: "International Data Transfers",
      content: `As a global fashion company, we may transfer your personal information to countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. When we transfer your information internationally, we ensure appropriate safeguards are in place, including:
• Standard contractual clauses approved by relevant authorities
• Adequacy decisions from relevant data protection authorities
• Binding corporate rules for intra-group transfers

We take all reasonable steps to ensure your data is treated securely and in accordance with this Privacy Policy.`,
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information. If you become aware that a child has provided us with personal information, please contact us immediately.`,
    },
    {
      id: "policy-changes",
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last Updated" date at the top of this policy. If we make material changes, we will provide notice through our website or by other means to give you an opportunity to review the changes before they become effective. We encourage you to periodically review this page for the latest information on our privacy practices.`,
    },
    {
      id: "contact-us",
      title: "Contact Us",
      content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:

DK Global Fashion Wear Ltd.
Data Protection Officer
123 Fashion District, Dhaka 1212
Bangladesh
Email: privacy@dkgfashion.com
Phone: +880 2 XXXX-XXXX

We will respond to your inquiry within 30 days.`,
    },
  ];

  const lastUpdated = "January 1, 2024";

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Last Updated: {lastUpdated}
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At DK Global Fashion Wear Ltd., we are committed to protecting
              your privacy and ensuring the security of your personal
              information. This policy outlines how we collect, use, and protect
              your data.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {policySections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Policy Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-lg">
              {policySections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`p-8 ${
                    index !== policySections.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-gray-700 leading-relaxed">
                    {section.content.split("\n").map((paragraph, idx) => (
                      <p key={idx} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Privacy Policy
                </button>
                <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Data Protection Officer
                </button>
              </div>
            </div>

            {/* Consent Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">
                    Your Privacy Choices
                  </h3>
                  <p className="text-blue-700 mt-1">
                    By using our website and services, you consent to the terms
                    of this Privacy Policy. You can manage your privacy
                    preferences through your account settings or by contacting
                    us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
