import React from "react";

const sections = [
  {
    title: "Use of the Site",
    body: "The Site is intended for personal and non-commercial use only. You agree to use the Site in a lawful manner and not for any purpose that is prohibited by these Terms. You may not interfere with the Site's operation, attempt to gain unauthorized access to any part of the Site, or engage in any activity that could damage, disable, or impair the functionality of the Site. You are responsible for ensuring that your use of the Site complies with all applicable laws, regulations, and standards in your jurisdiction.",
  },
  {
    title: "Intellectual Property",
    body: "All content available on the Site, including text, images, graphics, logos, videos, music, trademarks, and other materials, is the property of us, Rosé, or our licensors and is protected by intellectual property laws. You are granted a limited, non-exclusive, and revocable license to access and use the Site and its content for personal use only. You may not copy, reproduce, modify, distribute, or exploit any part of the Site's content without prior written consent. Unauthorized use of the Site or its content may result in legal action.",
  },
  {
    title: "User Accounts and Registration",
    body: "To access certain features of the Site, you may be required to create a user account. By creating an account, you agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and are fully responsible for all activities that occur under your account. If you suspect unauthorized access to your account, you must notify us immediately. We reserve the right to suspend or terminate your account if we suspect any breach of these Terms or fraudulent activity.",
  },
  {
    title: "Prohibited Activities",
    body: "You agree not to use the Site for any unlawful or unauthorized purpose. Prohibited activities include, but are not limited to, attempting to hack or disrupt the Site's functionality, uploading harmful content such as viruses or malware, impersonating another individual or entity, or using automated systems such as bots to scrape or access the Site. Engaging in prohibited activities may result in the suspension or termination of your access to the Site and legal action where appropriate.",
  },
  {
    title: "Third-Party Links and Services",
    body: "The Site may include links to third-party websites or services. These links are provided for convenience and informational purposes only. We do not endorse or guarantee the accuracy or reliability of any third-party content or services, and we are not responsible for their practices. Your interactions with third-party platforms are governed by their terms and privacy policies. You access such third-party content at your own risk.",
  },
  {
    title: "Disclaimer of Warranties",
    body: 'The Site and its content are provided on an "as-is" and "as-available" basis without any warranties, express or implied. We make no representations or guarantees about the accuracy, completeness, reliability, or suitability of the Site\'s content or functionality. To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
  },
  {
    title: "Limitation of Liability",
    body: "To the extent permitted by law, we shall not be held liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the Site. This includes, but is not limited to, loss of profits, data, or goodwill, as well as any damages caused by interruptions, errors, or security breaches. Your sole remedy for dissatisfaction with the Site is to stop using it.",
  },
  {
    title: "Indemnification",
    body: "You agree to indemnify and hold harmless us, Rosé, our affiliates, and our representatives from any claims, damages, liabilities, costs, or expenses (including legal fees) arising from your use of the Site, violation of these Terms, or infringement of any third-party rights. This indemnification obligation survives the termination of these Terms and your use of the Site.",
  },
  {
    title: "Changes to the Terms",
    body: "We reserve the right to update or modify these Terms at any time. Any changes will take effect immediately upon posting on this page, and your continued use of the Site constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed.",
  },
];

const TermsOfUsePage = () => {
  return (
    <div className="mt-20 bg-white text-[#141414]">
      <div className="container mx-auto max-w-6xl px-10 md:px-3 py-16">
        <h1 className="font-orpheus font-bold text-[36px] leading-none text-center mb-10">
          Terms and Conditions
        </h1>

        <p className="font-twentienty font-light text-[20px] leading-7 text-black/80 mb-10">
          Welcome to the official website of Rosé from BLACKPINK rosé.com. By
          accessing or using this Site, you agree to comply with and be bound by
          these Terms and Conditions ("Terms"). These Terms constitute a legal
          agreement between you ("you," "your," or "user") and us ("we," "us,"
          "our"), the operators of this Site. If you do not agree with any part
          of these Terms, you must discontinue your use of the Site immediately.
        </p>

        <div className="space-y-10">
          {sections.map(({ title, body }) => (
            <div key={title}>
              <h2 className="font-twentienty font-medium text-[24px] leading-6 mb-2">
                {title}
              </h2>
              <p className="font-twentienty font-light text-[20px] leading-7 text-black/80">
                {body}
              </p>
            </div>
          ))}

          <div>
            <h2 className="font-twentienty font-medium text-[24px] leading-6 mb-2">
              Contact Us
            </h2>
            <p className="font-twentienty font-light text-[20px] leading-7 text-black/80">
              If you have any questions or concerns regarding these Terms, you
              may contact us at{" "}
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

        <p className="font-twentienty mt-16 text-black/60">
          Last Updated: December 12, 2024
        </p>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
