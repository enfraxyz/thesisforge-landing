<script setup lang="ts">
import { useSeo } from "@/composables/useSeo";

useSeo({
  title: "Privacy Policy",
  description:
    "Learn how ThesisForge collects, uses, and protects your personal information.",
  url: "https://thesisforge.ai/privacy",
});
</script>

<template>
  <main id="main-content" class="container max-w-3xl py-16 md:py-24">
    <p class="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Legal</p>
    <h1 class="mt-3 text-3xl font-semibold md:text-5xl font-serif">Privacy Policy</h1>
    <p class="mt-4 text-sm text-muted-foreground">Last updated March 11, 2026</p>

    <div class="prose-policy mt-12 space-y-10 text-muted-foreground text-sm leading-relaxed">

      <!-- Intro -->
      <div class="space-y-4">
        <p>
          This Privacy Notice for <strong class="text-foreground">Enfra, inc.</strong>
          ("we," "us," or "our"), describes how and why we might access, collect, store,
          use, and/or share ("process") your personal information when you use our
          services ("Services"), including when you:
        </p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Visit our website at <a href="https://thesisforge.ai" class="text-primary hover:underline">thesisforge.ai</a>, or any website of ours that links to this Privacy Notice</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p>
          <strong class="text-foreground">Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at
          <a href="mailto:security@thesisforge.ai" class="text-primary hover:underline">security@thesisforge.ai</a>.
        </p>
      </div>

      <!-- Summary of Key Points -->
      <section>
        <h2 class="text-xl font-semibold text-foreground font-serif">Summary of Key Points</h2>
        <p class="mt-3">This summary provides key points from our Privacy Notice.</p>
        <dl class="mt-4 space-y-4">
          <div>
            <dt class="font-medium text-foreground">What personal information do we process?</dt>
            <dd class="mt-1">When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</dd>
          </div>
          <div>
            <dt class="font-medium text-foreground">Do we process any sensitive personal information?</dt>
            <dd class="mt-1">We do not process sensitive personal information.</dd>
          </div>
          <div>
            <dt class="font-medium text-foreground">Do we collect any information from third parties?</dt>
            <dd class="mt-1">We do not collect any information from third parties.</dd>
          </div>
          <div>
            <dt class="font-medium text-foreground">How do we process your information?</dt>
            <dd class="mt-1">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</dd>
          </div>
          <div>
            <dt class="font-medium text-foreground">In what situations and with which parties do we share personal information?</dt>
            <dd class="mt-1">We may share information in specific situations and with specific third parties.</dd>
          </div>
          <div>
            <dt class="font-medium text-foreground">How do we keep your information safe?</dt>
            <dd class="mt-1">We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</dd>
          </div>
          <div>
            <dt class="font-medium text-foreground">What are your rights?</dt>
            <dd class="mt-1">Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</dd>
          </div>
          <div>
            <dt class="font-medium text-foreground">How do you exercise your rights?</dt>
            <dd class="mt-1">The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</dd>
          </div>
        </dl>
      </section>

      <!-- Table of Contents -->
      <section>
        <h2 class="text-xl font-semibold text-foreground font-serif">Table of Contents</h2>
        <ol class="mt-4 list-decimal pl-6 space-y-1">
          <li><a href="#info-collect" class="text-primary hover:underline">What Information Do We Collect?</a></li>
          <li><a href="#info-process" class="text-primary hover:underline">How Do We Process Your Information?</a></li>
          <li><a href="#info-share" class="text-primary hover:underline">When and With Whom Do We Share Your Personal Information?</a></li>
          <li><a href="#cookies" class="text-primary hover:underline">Do We Use Cookies and Other Tracking Technologies?</a></li>
          <li><a href="#ai" class="text-primary hover:underline">Do We Offer Artificial Intelligence-Based Products?</a></li>
          <li><a href="#social-logins" class="text-primary hover:underline">How Do We Handle Your Social Logins?</a></li>
          <li><a href="#info-retain" class="text-primary hover:underline">How Long Do We Keep Your Information?</a></li>
          <li><a href="#info-safe" class="text-primary hover:underline">How Do We Keep Your Information Safe?</a></li>
          <li><a href="#minors" class="text-primary hover:underline">Do We Collect Information From Minors?</a></li>
          <li><a href="#privacy-rights" class="text-primary hover:underline">What Are Your Privacy Rights?</a></li>
          <li><a href="#dnt" class="text-primary hover:underline">Controls for Do-Not-Track Features</a></li>
          <li><a href="#us-rights" class="text-primary hover:underline">Do United States Residents Have Specific Privacy Rights?</a></li>
          <li><a href="#updates" class="text-primary hover:underline">Do We Make Updates to This Notice?</a></li>
          <li><a href="#contact" class="text-primary hover:underline">How Can You Contact Us About This Notice?</a></li>
          <li><a href="#review-data" class="text-primary hover:underline">How Can You Review, Update, or Delete the Data We Collect From You?</a></li>
        </ol>
      </section>

      <!-- 1. WHAT INFORMATION DO WE COLLECT? -->
      <section id="info-collect">
        <h2 class="text-xl font-semibold text-foreground font-serif">1. What Information Do We Collect?</h2>

        <h3 class="mt-6 text-base font-semibold text-foreground">Personal information you disclose to us</h3>
        <p class="mt-2 italic">In Short: We collect personal information that you provide to us.</p>
        <p class="mt-3">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

        <p class="mt-4"><strong class="text-foreground">Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
        <ul class="mt-2 list-disc pl-6 space-y-1">
          <li>Names</li>
          <li>Email addresses</li>
          <li>Usernames</li>
          <li>Passwords</li>
          <li>Billing addresses</li>
        </ul>

        <p class="mt-4"><strong class="text-foreground">Sensitive Information.</strong> We do not process sensitive information.</p>

        <p class="mt-4"><strong class="text-foreground">Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice here: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://stripe.com/privacy</a>.</p>

        <p class="mt-4"><strong class="text-foreground">Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Google or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "<a href="#social-logins" class="text-primary hover:underline">How Do We Handle Your Social Logins?</a>" below.</p>

        <p class="mt-4">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Information automatically collected</h3>
        <p class="mt-2 italic">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
        <p class="mt-3">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
        <p class="mt-3">Like many businesses, we also collect information through cookies and similar technologies.</p>

        <p class="mt-4">The information we collect includes:</p>
        <ul class="mt-2 list-disc pl-6 space-y-3">
          <li><strong class="text-foreground">Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports, and hardware settings).</li>
          <li><strong class="text-foreground">Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
          <li><strong class="text-foreground">Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
        </ul>

        <p class="mt-4"><strong class="text-foreground">Google API.</strong> Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
      </section>

      <!-- 2. HOW DO WE PROCESS YOUR INFORMATION? -->
      <section id="info-process">
        <h2 class="text-xl font-semibold text-foreground font-serif">2. How Do We Process Your Information?</h2>
        <p class="mt-3 italic">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
        <p class="mt-3">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
        <ul class="mt-2 list-disc pl-6 space-y-2">
          <li><strong class="text-foreground">To facilitate account creation and authentication</strong> and otherwise manage user accounts.</li>
          <li><strong class="text-foreground">To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
          <li><strong class="text-foreground">To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
          <li><strong class="text-foreground">To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
          <li><strong class="text-foreground">To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
          <li><strong class="text-foreground">To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
          <li><strong class="text-foreground">To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</li>
        </ul>
      </section>

      <!-- 3. SHARING -->
      <section id="info-share">
        <h2 class="text-xl font-semibold text-foreground font-serif">3. When and With Whom Do We Share Your Personal Information?</h2>
        <p class="mt-3 italic">In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
        <p class="mt-3">We may need to share your personal information in the following situations:</p>
        <ul class="mt-2 list-disc pl-6 space-y-2">
          <li><strong class="text-foreground">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        </ul>
      </section>

      <!-- 4. COOKIES -->
      <section id="cookies">
        <h2 class="text-xl font-semibold text-foreground font-serif">4. Do We Use Cookies and Other Tracking Technologies?</h2>
        <p class="mt-3 italic">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
        <p class="mt-3">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
        <p class="mt-3">We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
        <p class="mt-3">To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "<a href="#us-rights" class="text-primary hover:underline">Do United States Residents Have Specific Privacy Rights?</a>"</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Google Analytics</h3>
        <p class="mt-2">We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Google Privacy &amp; Terms page</a>.</p>
      </section>

      <!-- 5. AI -->
      <section id="ai">
        <h2 class="text-xl font-semibold text-foreground font-serif">5. Do We Offer Artificial Intelligence-Based Products?</h2>
        <p class="mt-3 italic">In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
        <p class="mt-3">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Use of AI Technologies</h3>
        <p class="mt-2">We provide the AI Products through third-party service providers ("AI Service Providers"), including OpenAI and Anthropic. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in "<a href="#info-share" class="text-primary hover:underline">When and With Whom Do We Share Your Personal Information?</a>" You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Our AI Products</h3>
        <p class="mt-2">Our AI Products are designed for the following functions:</p>
        <ul class="mt-2 list-disc pl-6 space-y-1">
          <li>AI-powered signal extraction and classification</li>
          <li>Theme clustering and pattern discovery</li>
          <li>Natural language querying of customer data</li>
          <li>Evidence-grounded spec generation</li>
        </ul>

        <h3 class="mt-6 text-base font-semibold text-foreground">How We Process Your Data Using AI</h3>
        <p class="mt-2">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</p>
      </section>

      <!-- 6. SOCIAL LOGINS -->
      <section id="social-logins">
        <h2 class="text-xl font-semibold text-foreground font-serif">6. How Do We Handle Your Social Logins?</h2>
        <p class="mt-3 italic">In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>
        <p class="mt-3">Our Services offer you the ability to register and log in using your third-party social media account details (like your Google login). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, and profile picture, as well as other information you choose to make public on such a social media platform.</p>
        <p class="mt-3">We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information.</p>
      </section>

      <!-- 7. RETENTION -->
      <section id="info-retain">
        <h2 class="text-xl font-semibold text-foreground font-serif">7. How Long Do We Keep Your Information?</h2>
        <p class="mt-3 italic">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
        <p class="mt-3">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
        <p class="mt-3">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
      </section>

      <!-- 8. SAFETY -->
      <section id="info-safe">
        <h2 class="text-xl font-semibold text-foreground font-serif">8. How Do We Keep Your Information Safe?</h2>
        <p class="mt-3 italic">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
        <p class="mt-3">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
      </section>

      <!-- 9. MINORS -->
      <section id="minors">
        <h2 class="text-xl font-semibold text-foreground font-serif">9. Do We Collect Information From Minors?</h2>
        <p class="mt-3 italic">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
        <p class="mt-3">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:security@thesisforge.ai" class="text-primary hover:underline">security@thesisforge.ai</a>.</p>
      </section>

      <!-- 10. PRIVACY RIGHTS -->
      <section id="privacy-rights">
        <h2 class="text-xl font-semibold text-foreground font-serif">10. What Are Your Privacy Rights?</h2>
        <p class="mt-3 italic">In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>

        <p class="mt-3"><strong class="text-foreground">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<a href="#contact" class="text-primary hover:underline">How Can You Contact Us About This Notice?</a>" below.</p>
        <p class="mt-3">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Account Information</h3>
        <p class="mt-2">If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
        <ul class="mt-2 list-disc pl-6 space-y-1">
          <li>Contact us using the contact information provided.</li>
          <li>Log in to your account settings and update your user account.</li>
        </ul>
        <p class="mt-3">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

        <p class="mt-4"><strong class="text-foreground">Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</p>

        <p class="mt-4">If you have questions or comments about your privacy rights, you may email us at <a href="mailto:security@thesisforge.ai" class="text-primary hover:underline">security@thesisforge.ai</a>.</p>
      </section>

      <!-- 11. DNT -->
      <section id="dnt">
        <h2 class="text-xl font-semibold text-foreground font-serif">11. Controls for Do-Not-Track Features</h2>
        <p class="mt-3">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
        <p class="mt-3">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>
      </section>

      <!-- 12. US RIGHTS -->
      <section id="us-rights">
        <h2 class="text-xl font-semibold text-foreground font-serif">12. Do United States Residents Have Specific Privacy Rights?</h2>
        <p class="mt-3 italic">In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Categories of Personal Information We Collect</h3>
        <p class="mt-2">We have not collected personal information in the categories listed below in the past twelve (12) months. For a comprehensive inventory of all personal information we process, please refer to the section "<a href="#info-collect" class="text-primary hover:underline">What Information Do We Collect?</a>"</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Your Rights</h3>
        <p class="mt-2">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
        <ul class="mt-2 list-disc pl-6 space-y-1">
          <li>Right to know whether or not we are processing your personal data</li>
          <li>Right to access your personal data</li>
          <li>Right to correct inaccuracies in your personal data</li>
          <li>Right to request the deletion of your personal data</li>
          <li>Right to obtain a copy of the personal data you previously shared with us</li>
          <li>Right to non-discrimination for exercising your rights</li>
          <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects</li>
        </ul>

        <h3 class="mt-6 text-base font-semibold text-foreground">How to Exercise Your Rights</h3>
        <p class="mt-2">To exercise these rights, you can contact us by submitting a data subject access request, by emailing us at <a href="mailto:security@thesisforge.ai" class="text-primary hover:underline">security@thesisforge.ai</a>, or by referring to the contact details at the bottom of this document.</p>
        <p class="mt-3">We will honor your opt-out preferences if you enact the Global Privacy Control (GPC) opt-out signal on your browser.</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Request Verification</h3>
        <p class="mt-2">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request.</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">Appeals</h3>
        <p class="mt-2">Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:security@thesisforge.ai" class="text-primary hover:underline">security@thesisforge.ai</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>

        <h3 class="mt-6 text-base font-semibold text-foreground">California "Shine The Light" Law</h3>
        <p class="mt-2">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "<a href="#contact" class="text-primary hover:underline">How Can You Contact Us About This Notice?</a>"</p>
      </section>

      <!-- 13. UPDATES -->
      <section id="updates">
        <h2 class="text-xl font-semibold text-foreground font-serif">13. Do We Make Updates to This Notice?</h2>
        <p class="mt-3 italic">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
        <p class="mt-3">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
      </section>

      <!-- 14. CONTACT -->
      <section id="contact">
        <h2 class="text-xl font-semibold text-foreground font-serif">14. How Can You Contact Us About This Notice?</h2>
        <p class="mt-3">If you have questions or comments about this notice, you may email us at <a href="mailto:security@thesisforge.ai" class="text-primary hover:underline">security@thesisforge.ai</a> or contact us by post at:</p>
        <address class="mt-4 not-italic text-foreground leading-relaxed">
          Enfra, inc.<br />
          149 New Montgomery St<br />
          4th Floor<br />
          San Francisco, CA 94105<br />
          United States
        </address>
      </section>

      <!-- 15. REVIEW DATA -->
      <section id="review-data">
        <h2 class="text-xl font-semibold text-foreground font-serif">15. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
        <p class="mt-3">Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please submit a data subject access request by emailing <a href="mailto:security@thesisforge.ai" class="text-primary hover:underline">security@thesisforge.ai</a>.</p>
      </section>

    </div>
  </main>
</template>
