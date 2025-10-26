// TermsOfService.tsx
import React, { useState } from "react";

interface TermSection {
  id: string;
  title: string;
  content: string;
}

const TermsOfService: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("agreement");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const termSections: TermSection[] = [
    {
      id: "agreement",
      title: "Agreement to Terms",
      content: `By accessing and using the website and services of DK Global Fashion Wear Ltd. ("we," "us," "our"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.`,
    },
    {
      id: "services",
      title: "Description of Services",
      content: `DK Global Fashion Wear Ltd. operates an e-commerce platform that allows users to purchase fashion and apparel products through our website and mobile applications. Our services include:

• Online retail of fashion clothing and accessories
• Order processing and fulfillment
• Customer support and services
• Account management and personalization
• Marketing communications (with user consent)

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.`,
    },
    {
      id: "accounts",
      title: "User Accounts",
      content: `To access certain features of our services, you may be required to create a user account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Maintain the security of your password and accept all risks of unauthorized access
• Notify us immediately of any breach of security or unauthorized use of your account
• Be responsible for all activities that occur under your account

You must be at least 16 years old to create an account. We reserve the right to suspend or terminate accounts that provide false information or violate these terms.`,
    },
    {
      id: "orders",
      title: "Ordering and Purchases",
      content: `When you place an order through our website, you agree that:

• All information you provide is accurate and complete
• You have the legal right to use the payment method provided
• You authorize us to charge your payment method for the total order amount
• We may verify your identity and payment information before processing orders

All orders are subject to product availability and our acceptance. We reserve the right to refuse or cancel any order for any reason, including but not limited to:
• Product unavailability
• Errors in product or pricing information
• Suspicious or fraudulent activity
• Violation of these terms`,
    },
    {
      id: "pricing",
      title: "Pricing and Payment",
      content: `All prices are displayed in the currency indicated on the website and are exclusive of applicable taxes and shipping fees unless otherwise stated.

We strive to ensure accurate pricing but may correct any errors in pricing or product information. If we discover an error after your order is placed, we will notify you and provide options to proceed at the correct price or cancel the order.

Accepted payment methods include major credit cards, debit cards, and other payment options as indicated during checkout. You agree to pay all charges incurred by your account.`,
    },
    {
      id: "shipping",
      title: "Shipping and Delivery",
      content: `Shipping times and costs vary depending on your location and the shipping method selected. Estimated delivery times are provided for guidance only and are not guaranteed.

Risk of loss and title for products pass to you upon delivery to the shipping carrier. We are not responsible for delays caused by customs, weather, carrier delays, or other circumstances beyond our control.

You are responsible for providing accurate shipping information. We are not liable for orders shipped to incorrect addresses provided by the customer.`,
    },
    {
      id: "returns",
      title: "Returns and Refunds",
      content: `We accept returns of unworn, unwashed merchandise with original tags attached within 30 days of delivery. Return shipping costs are the responsibility of the customer unless the return is due to our error.

Refunds will be processed to the original payment method within 7-10 business days after we receive and inspect the returned items. Sale items and customized products may not be eligible for return unless defective.

To initiate a return, please contact our customer service team with your order number and reason for return.`,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: `All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of DK Global Fashion Wear Ltd. or our content suppliers and is protected by international copyright laws.

The DK Global Fashion Wear Ltd. name and logo are registered trademarks. You may not use our trademarks without our prior written permission.

You are granted a limited license to access and make personal use of this site. This license does not include:
• Any resale or commercial use of the site or its contents
• Collection and use of any product listings or descriptions
• Any derivative use of this site or its contents
• Any use of data mining, robots, or similar data gathering tools`,
    },
    {
      id: "user-content",
      title: "User-Generated Content",
      content: `By submitting content (including reviews, comments, photos, and other materials) to our website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, display, and distribute such content in any media.

You represent and warrant that:
• You own or have the necessary rights to the content you submit
• The content is accurate and not misleading
• The content does not violate any third-party rights or applicable laws
• The content is not defamatory, obscene, or otherwise objectionable

We reserve the right to monitor, edit, or remove any user-generated content at our discretion.`,
    },
    {
      id: "prohibited",
      title: "Prohibited Activities",
      content: `You agree not to engage in any of the following prohibited activities:

• Violating any applicable laws or regulations
• Infringing upon our intellectual property rights or the rights of others
• Using the site for any fraudulent or unlawful purpose
• Introducing viruses, worms, or other malicious code
• Attempting to gain unauthorized access to our systems
• Interfering with the proper functioning of the site
• Using automated systems to access the site without permission
• Harassing, abusing, or harming other users
• Collecting personal information about other users

Violation of these prohibitions may result in termination of your account and legal action.`,
    },
    {
      id: "termination",
      title: "Termination",
      content: `We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including but not limited to:

• Breach of these Terms of Service
• Fraudulent or illegal activity
• Non-payment of fees
• Requests by law enforcement

Upon termination, your right to use our services will immediately cease. All provisions of these terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.`,
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties",
      content: `THE SERVICES AND PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, DK GLOBAL FASHION WEAR LTD. DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.`,
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      content: `TO THE FULLEST EXTENT PERMITTED BY LAW, DK GLOBAL FASHION WEAR LTD. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

• YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES
• ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES
• ANY CONTENT OBTAINED FROM THE SERVICES
• UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT

OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID TO US IN THE LAST SIX MONTHS.`,
    },
    {
      id: "indemnification",
      title: "Indemnification",
      content: `You agree to defend, indemnify, and hold harmless DK Global Fashion Wear Ltd., its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the services, including but not limited to:

• Your use of the services in violation of these terms
• Your violation of any law or the rights of a third party
• Any content you submit or transmit through the services
• Your interaction with any other user of the services`,
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: `These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.

Any legal suit, action, or proceeding arising out of, or related to, these Terms of Service or the services shall be instituted exclusively in the courts of Dhaka, Bangladesh. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.`,
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the services.`,
    },
    {
      id: "contact",
      title: "Contact Information",
      content: `If you have any questions about these Terms of Service, please contact us:

DK Global Fashion Wear Ltd.
Legal Department
123 Fashion District, Dhaka 1212
Bangladesh
Email: legal@dkgfashion.com
Phone: +880 2 XXXX-XXXX

We will respond to your inquiry within a reasonable timeframe.`,
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

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    // In a real application, you would save this preference
    localStorage.setItem("termsAccepted", "true");
    alert("Thank you for accepting our Terms of Service!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Last Updated: {lastUpdated}
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Please read these Terms of Service carefully before using our
              website and services. These terms govern your access to and use of
              DK Global Fashion Wear Ltd.
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
                {termSections.map((section) => (
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

              {/* Acceptance Section in Sidebar */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Accept Terms
                </h3>
                <p className="text-blue-700 text-sm mb-3">
                  By using our services, you agree to these terms.
                </p>
                <button
                  onClick={handleAcceptTerms}
                  disabled={acceptedTerms}
                  className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
                    acceptedTerms
                      ? "bg-green-100 text-green-700 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {acceptedTerms ? "Terms Accepted ✓" : "I Accept These Terms"}
                </button>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-lg">
              {termSections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`p-8 ${
                    index !== termSections.length - 1
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

            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">
                    Important Legal Notice
                  </h3>
                  <div className="text-yellow-700 mt-2 space-y-2">
                    <p>
                      These Terms of Service constitute a legally binding
                      agreement between you and DK Global Fashion Wear Ltd.
                    </p>
                    <p>
                      If you do not agree to these terms, you must immediately
                      cease using our website and services.
                    </p>
                    <p className="font-semibold">
                      We recommend that you print or save a copy of these terms
                      for your records.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => window.print()}
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
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
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  Print Terms
                </button>
                <button
                  onClick={() => {
                    const element = document.createElement("a");
                    const file = new Blob(
                      [
                        document.getElementById("terms-content")?.innerText ||
                          "",
                      ],
                      { type: "text/plain" }
                    );
                    element.href = URL.createObjectURL(file);
                    element.download = "dk-global-fashion-terms-of-service.txt";
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
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
                  Download Terms
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
                  Contact Legal Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
