import React from "react";

const paragraphs = [
  'Welcome to the rosé.com ("we," "our," or "us"). This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit or interact with our website, ensuring compliance with applicable data protection laws worldwide.',
  "We encourage you to read this Privacy Policy carefully to understand how we handle your personal information and how you can exercise your rights. If you have any questions or concerns about this policy or our data practices, please contact us at privacy@rosé.com.",
  "We collect information automatically as you navigate through the Site. This includes data such as your IP address, browser type, operating system, geographic location, and your interactions with the Site, such as pages visited and time spent. We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and tailor content to your preferences.",
  "We do not sell your personal data to third parties. However, we may share your information with trusted service providers who help us operate the Site, manage email communications, or provide analytics. These providers are bound by confidentiality agreements and are only permitted to use your information as necessary to perform their services. We may also share your information to comply with legal obligations, such as responding to law enforcement requests or protecting our rights and interests. If there is a business transfer, such as a merger or sale of assets, your data may be transferred to the new owner under the terms outlined in this Privacy Policy.",
  "We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When your data is no longer needed, we securely delete or anonymize it to ensure it cannot be associated with you.",
  "We are committed to protecting your personal information and have implemented appropriate technical and organizational measures to prevent unauthorized access, disclosure, alteration, or destruction of your data. While we strive to safeguard your information, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  "The Site may contain links to external websites or services. We are not responsible for the privacy practices or content of these third-party platforms. We encourage you to review their privacy policies before interacting with them.",
  "If you are accessing this Site from outside, please note that your data may be transferred to and processed in countries with different data protection laws. We ensure that appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs), to protect your personal information during such transfers.",
  "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your data.",
];

const PrivacyPolicyPage = () => {
  return (
    <div className="mt-20 bg-white text-[#141414]">
      <div className="container mx-auto max-w-6xl px-10 md:px-3 py-16">
        <h1 className="font-orpheus font-bold text-[36px] leading-none text-center mb-10">
          Privacy Policy
        </h1>

        <p className="font-twentienty mb-6 text-black/60">
          Effective Date: December 12, 2024
        </p>

        <div className="space-y-6 font-twentienty font-light text-[20px] leading-7 text-black/80">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at{" "}
            <a
              href="mailto:privacy@rosé.com"
              className="underline underline-offset-2"
            >
              privacy@rosé.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
