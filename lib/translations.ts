export type Translations = {
  en: Record<string, string>
  ar: Record<string, string>
  ru: Record<string, string>
}

// Define translations for the entire website
const translations: Translations = {
  en: {
    // Site metadata
    siteTitle: "BEARS - Patient Transport Service",
    siteDescription:
      "BEARS Patient Transport Service - High quality ambulance service with the highest priority on transporting patients with safety, comfort and care.",

    // Navigation
    home: "Home",
    services: "Our Services",
    joinUs: "Join Us",
    aboutUs: "About Us",
    compliments: "Compliments",
    news: "News",
    contactUs: "Contact Us",

    // Service names
    highDependance: "High Dependance",
    specialistCritical: "Specialist Critical Retrieval Response Service",
    ecmo: "ECMO - Extracorporeal Membrane Oxygenation",
    mentalHealth: "Mental Health Service",
    nepts: "Non Emergency Patient Transport Service",
    bariatric: "Bariatric Service",
    paramedic: "Paramedic Service",
    neonatal: "Neonatal and Paediatric intensive care transfer service",
    clinicalHelpline: "BEARS Clinical Helpline",

    // About section
    meetTeam: "Meet the Team",
    meetCubs: "Meet the Cubs",
    ourValues: "Our Values",
    ourFleet: "Our Fleet",
    bearsNumbers: "BEARS in Numbers",

    // Footer
    ourStory: "Our Story",
    ourTeam: "Our Team",
    coreValues: "Core Values",
    menu: "Menu",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    cookiePolicy: "Cookie Policy",
    modernSlaveryPolicy: "Modern Slavery Policy",
    enquiries: "Enquiries",
    contactForm: "Contact Form",
    allRightsReserved: "All rights reserved.",

    // Home page
    heroTitle: "Providing Safety, Comfort and Care",
    heroDescription:
      "We provide a high quality ambulance service taking great care and pride in our work with the highest priority on transporting patients with SAFETY, COMFORT and CARE.",
    getInTouch: "Get in touch",
    learnMore: "Learn more",
    coreValuesTitle: "Our Core Values",
    coreValuesDescription: "BEARS core values are safety, comfort, and care, we ensure:",
    serviceQuality: "We get our service quality right the first time",
    efficientCare: "We are efficient with passion for patient care",
    bestValue: "We ensure best value for money",
    moreAboutValues: "More about our core values",

    // Services section
    seamlessService: "Delivering a seamless service for our patients",
    innovativePractices: "BEARS is constantly driven to find ways of developing efficiencies and innovative practices.",
    viewAllServices: "View all services",

    // Testimonials
    whatPeopleSay: "What people say about us",
    readMoreCompliments: "Read more compliments",
    testimonial1:
      "The ambulance crew arrived on time, were very polite and friendly. The journey was comfortable. While in the ambulance, they checked and observed everything. Thank you so much!",
    testimonial1Source: "Guy's and St Thomas' NHS Foundation Trust",
    testimonial2:
      "Crew were brilliant, came on time. Driver was very good and the journey was comfortable. The staff member that stayed in the back, kept me entertained and chatted with me all the way home, putting me at ease. Excellent service, 10/10!",
    testimonial2Source: "St Bartholomew's Hospital",

    // Latest news
    latestNews: "Latest News",
    readMore: "Read more",
    christmasTitle: "Christmas @ BEARS Ambulance",
    christmasExcerpt:
      "'Tis the season of giving, and our BEARS Ambulance family came together to celebrate the holidays in true emergency services style. Our dedicated team took ...",
    pulseTitle: "The Pulse Clinical Newsletter",
    pulse4Excerpt:
      "ISSUE 4 – September 2024 Transportation of patients with chest drains What is a chest drain? A chest drain is a narrow tube that is ...",
    pulse3Excerpt:
      "ISSUE 3 – July 2024 Transportation of Children & Young People It is likely that in the course of your duties, you will be asked ...",

    // About page
    aboutBearsTitle: "About BEARS",
    aboutBearsDescription:
      "BEARS Patient Transport Service was established to provide high-quality ambulance services with a focus on patient care, comfort, and safety.",
    ourStoryTitle: "Our Story",
    ourStoryContent1:
      "BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital logistics patient transport service.",
    ourStoryContent2:
      "Supporting the NHS with paramedic, paediatric and neonatal, critical care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport services.",
    ourStoryContent3:
      "At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers. Our emphasis remains to provide high quality service, training, and generous package to our staff as well as providing them with appropriate tools, to enable them to deliver the highest standards of patient care.",
    meetOurTeam: "Meet our team",
    learnMoreAboutBears: "Learn More About BEARS",

    // Services page
    ourServicesTitle: "Our Services",

    // Contact page
    contactUsTitle: "Contact Us",
    getInTouchTitle: "Get in Touch",
    getInTouchDescription:
      "We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.",
    phoneTitle: "Phone",
    emailTitle: "Email",
    addressTitle: "Address",
    bearsAddress: "BEARS Patient Transport Service",
    sendMessageTitle: "Send us a Message",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    messageLabel: "Message",
    sendMessage: "Send Message",

    // Compliments page
    complimentsTitle: "Compliments",
    complimentsDescription:
      "At BEARS, we take pride in the positive feedback we receive from our patients and healthcare partners. Here's what people are saying about our service.",
    shareExperienceTitle: "Share Your Experience",
    shareExperienceDescription:
      "We value your feedback. If you've recently used our services and would like to share your experience, we'd love to hear from you.",
    submitFeedback: "Submit Feedback",

    // Vacancies page
    vacanciesTitle: "Vacancies",
    currentOpenings: "Current openings",
    vacanciesIntro1:
      "BEARS was established in 2009, on the principles of Safety, Comfort and Care. We specialise in hospital logistics patient transport service. Supporting the NHS with paramedic, paediatric and neonatal, critical care, high dependency, bariatric, mental health and ECMO transfers alongside regular patient transport services.",
    vacanciesIntro2:
      "At every level, BEARS focuses on quality, which defines the company and differentiates it from its peers. Our emphasis remains to provide high quality service, training, and generous package to our staff as well as providing them with appropriate tools, to enable them to deliver the highest standards of patient care. The return for this strategy is easily demonstrated by our Key Performance Indicators (KPI's) and the level of retention on our contracts from existing NHS customers.",
    location: "Location",
    salary: "Salary",
    viewDetails: "View Details",
    generalApplicationTitle: "Don't see a position that fits your skills?",
    generalApplicationDescription:
      "We're always looking for talented individuals to join our team. Send us your CV and tell us why you'd be a great fit for BEARS.",
    submitGeneralApplication: "Submit General Application",
    whyWorkWithUsTitle: "Why Work With Us?",
    benefitsList: [
      "Competitive salary and benefits package",
      "Ongoing professional development and training opportunities",
      "Supportive and collaborative work environment",
      "Modern, well-maintained fleet and equipment",
      "Opportunity to make a real difference in patients' lives",
      "Career progression opportunities",
    ],

    // Service details
    whatIsHighDependency:
      "High Dependency Transport refers to the safe and secure transportation of patients who require a higher level of care and monitoring than standard non-emergency transport. This service is designed to meet the specific needs of patients with complex medical conditions who require continuous monitoring and reliance on medical equipment during transit.",
    commitmentToSafety:
      "At BEARS, the safety, comfort, and well-being of our patients are our top priorities. Our High Dependency Transport service is delivered by highly trained and experienced medical professionals who are equipped to provide continuous care, monitoring, and support throughout the journey.",
    specialisedVehicles:
      "We utilise specially designed vehicles equipped with advanced medical equipment and facilities to ensure the highest standards of care during transportation. Our vehicles are customised to the highest standards and undergo regular safety checks to guarantee reliability and performance.",
    personalisedCarePlans:
      "Each High Dependency Transport journey is accompanied by a personalised care plan developed in consultation with healthcare providers and family members. This plan outlines the specific medical requirements, medication schedules, and any special considerations to be addressed during the journey, ensuring a tailored and compassionate approach to care.",

    // Values
    safetyValue: "Safety",
    comfortValue: "Comfort",
    careValue: "Care",
    safetyDescription1:
      "We understand a focus on patient safety is continuously required as the BEARS clinical team with secure storage of all the equipment required.",
    safetyDescription2:
      "We provide time with checks for all vehicles and safety. A commitment to the highest standards of safety is at the core of everything we do. Our vehicles are equipped with the latest in safety technology and our staff are trained to the highest standards to ensure we never compromise safety.",
    safetyDescription3:
      "We take pride in our monitoring process, undertaking monitoring and assessment with continuous improvement. Ensuring that processes are continuously being kept updated with the latest standards of care to ensure the optimal level of safety is achieved for the patient and staff.",
    comfortDescription1:
      "Our crews ensure we provide the most comfortable ride with a dedicated approach to patient planning the journey. They will be an understanding of the patient's needs and requirements to ensure the journey is as comfortable as possible.",
    comfortDescription2:
      "A positive patient journey starts with a comfortable environment for our staff. We believe that when our staff are comfortable in their surroundings, it enables them to provide the highest level of patient care.",
    careDescription1:
      "BEARS Operational crews will work collaboratively with the Trust, working alongside the highest levels of care to provide families. This will ensure that all patients are treated with dignity and respect at all times.",
    careDescription2:
      "We provide care that is tailored to the patient's needs whilst ensuring a safe, comfortable journey. Our crews will work as a team to ensure that all patients are able to contribute openly to the journey.",
    careDescription3:
      "We ensure that the attention to detail that staff will demonstrate with our patients will be present at all times. Our crews will make our great customer service a priority and will always be available to answer any questions.",

    // Partner logos section
    ourPartners: "Our Partners",
  },
  ar: {
    // Site metadata
    siteTitle: "بيرز - خدمة نقل المرضى",
    siteDescription: "خدمة نقل المرضى بيرز - خدمة إسعاف عالية الجودة مع أعلى أولوية لنقل المرضى بأمان وراحة ورعاية.",

    // Navigation
    home: "الرئيسية",
    services: "خدماتنا",
    joinUs: "انضم إلينا",
    aboutUs: "معلومات عنا",
    compliments: "الإشادات",
    news: "الأخبار",
    contactUs: "اتصل بنا",

    // Service names
    highDependance: "الاعتماد العالي",
    specialistCritical: "خدمة الاستجابة للاسترداد الحرجة المتخصصة",
    ecmo: "ECMO - أكسجة الغشاء خارج الجسم",
    mentalHealth: "خدمة الصحة النفسية",
    nepts: "خدمة نقل المرضى غير الطارئة",
    bariatric: "خدمة علاج السمنة",
    paramedic: "خدمة المسعفين",
    neonatal: "خدمة نقل العناية المركزة لحديثي الولادة والأطفال",
    clinicalHelpline: "خط المساعدة السريرية BEARS",

    // About section
    meetTeam: "تعرف على الفريق",
    meetCubs: "تعرف على الأشبال",
    ourValues: "قيمنا",
    ourFleet: "أسطولنا",
    bearsNumbers: "BEARS بالأرقام",

    // Footer
    ourStory: "قصتنا",
    ourTeam: "فريقنا",
    coreValues: "القيم الأساسية",
    menu: "القائمة",
    legal: "قانوني",
    privacyPolicy: "سياسة الخصوصية",
    termsConditions: "الشروط والأحكام",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    modernSlaveryPolicy: "سياسة الرق الحديث",
    enquiries: "استفسارات",
    contactForm: "نموذج الاتصال",
    allRightsReserved: "جميع الحقوق محفوظة.",

    // Home page
    heroTitle: "توفير السلامة والراحة والرعاية",
    heroDescription:
      "نحن نقدم خدمة إسعاف عالية الجودة مع الاهتمام والفخر في عملنا مع أعلى أولوية لنقل المرضى بالسلامة والراحة والرعاية.",
    getInTouch: "تواصل معنا",
    learnMore: "اعرف المزيد",
    coreValuesTitle: "قيمنا الأساسية",
    coreValuesDescription: "القيم الأساسية لـ BEARS هي السلامة والراحة والرعاية، نحن نضمن:",
    serviceQuality: "نحن نحصل على جودة الخدمة الصحيحة من المرة الأولى",
    efficientCare: "نحن فعالون مع شغف لرعاية المرضى",
    bestValue: "نحن نضمن أفضل قيمة مقابل المال",
    moreAboutValues: "المزيد عن قيمنا الأساسية",

    // Services section
    seamlessService: "تقديم خدمة سلسة لمرضانا",
    innovativePractices: "تسعى BEARS باستمرار إلى إيجاد طرق لتطوير الكفاءة والممارسات المبتكرة.",
    viewAllServices: "عرض جميع الخدمات",

    // Testimonials
    whatPeopleSay: "ماذا يقول الناس عنا",
    readMoreCompliments: "قراءة المزيد من الإشادات",
    testimonial1:
      "وصل طاقم سيارة الإسعاف في الوقت المحدد، وكانوا مهذبين وودودين للغاية. كانت الرحلة مريحة. أثناء وجودهم في سيارة الإسعاف، قاموا بفحص ومراقبة كل شيء. شكراً جزيلاً!",
    testimonial1Source: "مؤسسة غايز وسانت توماس للخدمات الصحية الوطنية",
    testimonial2:
      "كان الطاقم رائعاً، وصلوا في الوقت المحدد. كان السائق جيداً جداً والرحلة كانت مريحة. عضو الطاقم الذي بقي في الخلف، أبقاني مستمتعاً وتحدث معي طوال الطريق إلى المنزل، مما جعلني أشعر بالراحة. خدمة ممتازة، 10/10!",
    testimonial2Source: "مستشفى سانت بارثولوميو",

    // Latest news
    latestNews: "أحدث الأخبار",
    readMore: "اقرأ المزيد",
    christmasTitle: "عيد الميلاد @ سيارة إسعاف BEARS",
    christmasExcerpt:
      "إنه موسم العطاء، واجتمعت عائلة سيارة إسعاف BEARS للاحتفال بالعطلات بأسلوب خدمات الطوارئ الحقيقي. فريقنا المتفاني أخذ ...",
    pulseTitle: "النشرة الإخبارية السريرية النبض",
    pulse4Excerpt: "العدد 4 - سبتمبر 2024 نقل المرضى مع تصريف الصدر ما هو تصريف الصدر؟ تصريف الصدر هو أنبوب ضيق ...",
    pulse3Excerpt: "العدد 3 - يوليو 2024 نقل الأطفال والشباب من المحتمل أنه في سياق واجباتك، سيُطلب منك ...",

    // About page
    aboutBearsTitle: "عن BEARS",
    aboutBearsDescription:
      "تأسست خدمة نقل المرضى BEARS لتقديم خدمات إسعاف عالية الجودة مع التركيز على رعاية المرضى وراحتهم وسلامتهم.",
    ourStoryTitle: "قصتنا",
    ourStoryContent1:
      "تأسست BEARS في عام 2009، على مبادئ السلامة والراحة والرعاية. نحن متخصصون في خدمة نقل المرضى اللوجستية بالمستشفى.",
    ourStoryContent2:
      "دعم هيئة الخدمات الصحية الوطنية مع خدمات المسعفين، والأطفال وحديثي الولادة، والرعاية الحرجة، والاعتماد العالي، وعلاج السمنة، والصحة النفسية ونقل ECMO إلى جانب خدمات نقل المرضى العادية.",
    ourStoryContent3:
      "على كل مستوى، تركز BEARS على الجودة، التي تحدد الشركة وتميزها عن نظرائها. يظل تركيزنا على تقديم خدمة عالية الجودة، والتدريب، وحزمة سخية لموظفينا بالإضافة إلى تزويدهم بالأدوات المناسبة، لتمكينهم من تقديم أعلى معايير رعاية المرضى.",
    meetOurTeam: "تعرف على فريقنا",
    learnMoreAboutBears: "تعرف على المزيد عن BEARS",

    // Services page
    ourServicesTitle: "خدماتنا",

    // Contact page
    contactUsTitle: "اتصل بنا",
    getInTouchTitle: "تواصل معنا",
    getInTouchDescription: "نحن هنا للإجابة على أي أسئلة قد تكون لديك حول خدماتنا. تواصل معنا وسنرد في أقرب وقت ممكن.",
    phoneTitle: "الهاتف",
    emailTitle: "البريد الإلكتروني",
    addressTitle: "العنوان",
    bearsAddress: "خدمة نقل المرضى BEARS",
    sendMessageTitle: "أرسل لنا رسالة",
    nameLabel: "الاسم",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    messageLabel: "الرسالة",
    sendMessage: "إرسال الرسالة",

    // Compliments page
    complimentsTitle: "الإشادات",
    complimentsDescription:
      "في BEARS، نفخر بالتعليقات الإيجابية التي نتلقاها من مرضانا وشركاء الرعاية الصحية. إليك ما يقوله الناس عن خدمتنا.",
    shareExperienceTitle: "شارك تجربتك",
    shareExperienceDescription:
      "نحن نقدر ملاحظاتك. إذا كنت قد استخدمت خدماتنا مؤخرًا وترغب في مشاركة تجربتك، فنحن نود أن نسمع منك.",
    submitFeedback: "إرسال التعليقات",

    // Vacancies page
    vacanciesTitle: "الوظائف الشاغرة",
    currentOpenings: "الوظائف الحالية",
    vacanciesIntro1:
      "تأسست BEARS في عام 2009، على مبادئ السلامة والراحة والرعاية. نحن متخصصون في خدمة نقل المرضى اللوجستية بالمستشفى. دعم هيئة الخدمات الصحية الوطنية مع خدمات المسعفين، والأطفال وحديثي الولادة، والرعاية الحرجة، والاعتماد العالي، وعلاج السمنة، والصحة النفسية ونقل ECMO إلى جانب خدمات نقل المرضى العادية.",
    vacanciesIntro2:
      "على كل مستوى، تركز BEARS على الجودة، التي تحدد الشركة وتميزها عن نظرائها. يظل تركيزنا على تقديم خدمة عالية الجودة، والتدريب، وحزمة سخية لموظفينا بالإضافة إلى تزويدهم بالأدوات المناسبة، لتمكينهم من تقديم أعلى معايير رعاية المرضى. يتم إثبات العائد من هذه الاستراتيجية بسهولة من خلال مؤشرات الأداء الرئيسية (KPI) ومستوى الاحتفاظ بعقودنا من عملاء هيئة الخدمات الصحية الوطنية الحاليين.",
    location: "الموقع",
    salary: "الراتب",
    viewDetails: "عرض التفاصيل",
    generalApplicationTitle: "لا ترى وظيفة تناسب مهاراتك؟",
    generalApplicationDescription:
      "نحن دائمًا نبحث عن أفراد موهوبين للانضمام إلى فريقنا. أرسل لنا سيرتك الذاتية وأخبرنا لماذا ستكون مناسبًا رائعًا لـ BEARS.",
    submitGeneralApplication: "تقديم طلب عام",
    whyWorkWithUsTitle: "لماذا تعمل معنا؟",
    benefitsList: [
      "حزمة راتب ومزايا تنافسية",
      "فرص التطوير المهني والتدريب المستمر",
      "بيئة عمل داعمة وتعاونية",
      "أسطول ومعدات حديثة وجيدة الصيانة",
      "فرصة لإحداث فرق حقيقي في حياة المرضى",
      "فرص التقدم الوظيفي",
    ],

    // Service details
    whatIsHighDependency:
      "يشير نقل الاعتماد العالي إلى النقل الآمن والمأمون للمرضى الذين يحتاجون إلى مستوى أعلى من الرعاية والمراقبة من النقل غير الطارئ القياسي. تم تصميم هذه الخدمة لتلبية الاحتياجات المحددة للمرضى الذين يعانون من حالات طبية معقدة والذين يحتاجون إلى مراقبة مستمرة والاعتماد على المعدات الطبية أثناء النقل.",
    commitmentToSafety:
      "في BEARS، تعد سلامة وراحة ورفاهية مرضانا من أهم أولوياتنا. يتم تقديم خدمة نقل الاعتماد العالي من قبل متخصصين طبيين مدربين تدريباً عالياً وذوي خبرة مجهزين لتقديم الرعاية المستمرة والمراقبة والدعم طوال الرحلة.",
    specialisedVehicles:
      "نحن نستخدم مركبات مصممة خصيصًا مجهزة بمعدات طبية متقدمة ومرافق لضمان أعلى معايير الرعاية أثناء النقل. يتم تخصيص مركباتنا وفقًا لأعلى المعايير وتخضع لفحوصات سلامة منتظمة لضمان الموثوقية والأداء.",
    personalisedCarePlans:
      "تصاحب كل رحلة نقل الاعتماد العالي خطة رعاية شخصية تم تطويرها بالتشاور مع مقدمي الرعاية الصحية وأفراد الأسرة. توضح هذه الخطة المتطلبات الطبية المحددة، وجداول الأدوية، وأي اعتبارات خاصة يجب معالجتها أثناء الرحلة، مما يضمن نهجًا مخصصًا ورحيمًا للرعاية.",

    // Values
    safetyValue: "السلامة",
    comfortValue: "الراحة",
    careValue: "الرعاية",
    safetyDescription1:
      "نحن نفهم أن التركيز على سلامة المرضى مطلوب باستمرار كفريق BEARS السريري مع التخزين الآمن لجميع المعدات المطلوبة.",
    safetyDescription2:
      "نحن نوفر الوقت مع فحوصات لجميع المركبات والسلامة. الالتزام بأعلى معايير السلامة هو في صميم كل ما نقوم به. مركباتنا مجهزة بأحدث تقنيات السلامة ويتم تدريب موظفينا على أعلى المعايير لضمان عدم المساومة على السلامة أبدًا.",
    safetyDescription3:
      "نحن نفخر بعملية المراقبة لدينا، وإجراء المراقبة والتقييم مع التحسين المستمر. ضمان أن العمليات يتم تحديثها باستمرار بأحدث معايير الرعاية لضمان تحقيق المستوى الأمثل من السلامة للمريض والموظفين.",
    comfortDescription1:
      "يضمن طاقمنا توفير أكثر الرحلات راحة مع نهج مخصص لتخطيط رحلة المريض. سيكون هناك فهم لاحتياجات المريض ومتطلباته لضمان أن تكون الرحلة مريحة قدر الإمكان.",
    comfortDescription2:
      "تبدأ رحلة المريض الإيجابية ببيئة مريحة لموظفينا. نحن نعتقد أنه عندما يكون موظفونا مرتاحين في محيطهم، فإن ذلك يمكنهم من تقديم أعلى مستوى من رعاية المرضى.",
    careDescription1:
      "ستعمل فرق عمليات BEARS بشكل تعاوني مع الثقة، والعمل جنبًا إلى جنب مع أعلى مستويات الرعاية لتوفير العائلات. هذا سيضمن معاملة جميع المرضى بكرامة واحترام في جميع الأوقات.",
    careDescription2:
      "نحن نقدم رعاية مصممة خصيصًا لاحتياجات المريض مع ضمان رحلة آمنة ومريحة. سيعمل طاقمنا كفريق لضمان أن جميع المرضى قادرون على المساهمة بشكل مفتوح في الرحلة.",
    careDescription3:
      "نحن نضمن أن الاهتمام بالتفاصيل التي سيظهرها الموظفون مع مرضانا ستكون موجودة في جميع الأوقات. سيجعل طاقمنا خدمة العملاء الرائعة أولوية وسيكونون دائمًا متاحين للإجابة على أي أسئلة.",

    // Partner logos section
    ourPartners: "شركاؤنا",
  },
  ru: {
    // Site metadata
    siteTitle: "BEARS - Служба транспортировки пациентов",
    siteDescription:
      "Служба транспортировки пациентов BEARS - высококачественная служба скорой помощи с наивысшим приоритетом транспортировки пациентов с безопасностью, комфортом и заботой.",

    // Navigation
    home: "Главная",
    services: "Наши услуги",
    joinUs: "Присоединяйтесь к нам",
    aboutUs: "О нас",
    compliments: "Отзывы",
    news: "Новости",
    contactUs: "Связаться с нами",

    // Service names
    highDependance: "Высокая зависимость",
    specialistCritical: "Специализированная служба критического реагирования",
    ecmo: "ЭКМО - Экстракорпоральная мембранная оксигенация",
    mentalHealth: "Служба психического здоровья",
    nepts: "Служба транспортировки пациентов не экстренной помощи",
    bariatric: "Бариатрическая служба",
    paramedic: "Парамедицинская служба",
    neonatal: "Служба интенсивной терапии новорожденных и детей",
    clinicalHelpline: "Клиническая горячая линия BEARS",

    // About section
    meetTeam: "Познакомьтесь с командой",
    meetCubs: "Познакомьтесь с медвежатами",
    ourValues: "Наши ценности",
    ourFleet: "Наш флот",
    bearsNumbers: "BEARS в цифрах",

    // Footer
    ourStory: "Наша история",
    ourTeam: "Наша команда",
    coreValues: "Основные ценности",
    menu: "Меню",
    legal: "Юридическая информация",
    privacyPolicy: "Политика конфиденциальности",
    termsConditions: "Условия и положения",
    cookiePolicy: "Политика использования файлов cookie",
    modernSlaveryPolicy: "Политика современного рабства",
    enquiries: "Запросы",
    contactForm: "Контактная форма",
    allRightsReserved: "Все права защищены.",

    // Home page
    heroTitle: "Обеспечение безопасности, комфорта и заботы",
    heroDescription:
      "Мы предоставляем высококачественную службу скорой помощи, проявляя большую заботу и гордость в нашей работе с наивысшим приоритетом транспортировки пациентов с БЕЗОПАСНОСТЬЮ, КОМФОРТОМ и ЗАБОТОЙ.",
    getInTouch: "Связаться",
    learnMore: "Узнать больше",
    coreValuesTitle: "Наши основные ценности",
    coreValuesDescription: "Основные ценности BEARS - это безопасность, комфорт и забота, мы обеспечиваем:",
    serviceQuality: "Мы обеспечиваем качество обслуживания с первого раза",
    efficientCare: "Мы эффективны и страстно заботимся о пациентах",
    bestValue: "Мы обеспечиваем лучшее соотношение цены и качества",
    moreAboutValues: "Подробнее о наших основных ценностях",

    // Services section
    seamlessService: "Предоставление бесперебойного обслуживания для наших пациентов",
    innovativePractices: "BEARS постоянно стремится находить способы повышения эффективности и инновационных практик.",
    viewAllServices: "Просмотреть все услуги",

    // Testimonials
    whatPeopleSay: "Что люди говорят о нас",
    readMoreCompliments: "Прочитать больше отзывов",
    testimonial1:
      "Бригада скорой помощи прибыла вовремя, была очень вежливой и дружелюбной. Поездка была комфортной. Находясь в машине скорой помощи, они проверяли и наблюдали за всем. Большое спасибо!",
    testimonial1Source: "Фонд NHS Гая и Св. Томаса",
    testimonial2:
      "Бригада была великолепна, приехала вовремя. Водитель был очень хорошим, и поездка была комфортной. Сотрудник, который оставался сзади, развлекал меня и разговаривал со мной всю дорогу домой, успокаивая меня. Отличный сервис, 10/10!",
    testimonial2Source: "Больница Св. Варфоломея",

    // Latest news
    latestNews: "Последние новости",
    readMore: "Читать далее",
    christmasTitle: "Рождество @ Скорая помощь BEARS",
    christmasExcerpt:
      "Это сезон дарения, и наша семья скорой помощи BEARS собралась вместе, чтобы отпраздновать праздники в истинном стиле экстренных служб. Наша преданная команда взяла ...",
    pulseTitle: "Клинический информационный бюллетень Пульс",
    pulse4Excerpt:
      "ВЫПУСК 4 – Сентябрь 2024 Транспортировка пациентов с дренажами грудной клетки Что такое дренаж грудной клетки? Дренаж грудной клетки - это узкая трубка, которая ...",
    pulse3Excerpt:
      "ВЫПУСК 3 – Июль 2024 Транспортировка детей и молодежи Вероятно, что в ходе ваших обязанностей вас попросят ...",

    // About page
    aboutBearsTitle: "О BEARS",
    aboutBearsDescription:
      "Служба транспортировки пациентов BEARS была создана для предоставления высококачественных услуг скорой помощи с акцентом на уход за пациентами, комфорт и безопасность.",
    ourStoryTitle: "Наша история",
    ourStoryContent1:
      "BEARS была основана в 2009 году на принципах безопасности, комфорта и заботы. Мы специализируемся на логистической службе транспортировки пациентов в больницах.",
    ourStoryContent2:
      "Поддержка NHS с парамедицинскими, педиатрическими и неонатальными, критическими, высокозависимыми, бариатрическими, психиатрическими и ЭКМО-перевозками наряду с обычными услугами по транспортировке пациентов.",
    ourStoryContent3:
      "На каждом уровне BEARS фокусируется на качестве, что определяет компанию и отличает ее от конкурентов. Наш акцент остается на предоставлении высококачественного обслуживания, обучения и щедрого пакета для наших сотрудников, а также предоставлении им соответствующих инструментов, чтобы они могли обеспечить высочайшие стандарты ухода за пациентами.",
    meetOurTeam: "Познакомьтесь с нашей командой",
    learnMoreAboutBears: "Узнайте больше о BEARS",

    // Services page
    ourServicesTitle: "Наши услуги",

    // Contact page
    contactUsTitle: "Связаться с нами",
    getInTouchTitle: "Свяжитесь с нами",
    getInTouchDescription:
      "Мы здесь, чтобы ответить на любые вопросы, которые у вас могут возникнуть о наших услугах. Свяжитесь с нами, и мы ответим как можно скорее.",
    phoneTitle: "Телефон",
    emailTitle: "Электронная почта",
    addressTitle: "Адрес",
    bearsAddress: "Служба транспортировки пациентов BEARS",
    sendMessageTitle: "Отправьте нам сообщение",
    nameLabel: "Имя",
    emailLabel: "Электронная почта",
    phoneLabel: "Телефон",
    messageLabel: "Сообщение",
    sendMessage: "Отправить сообщение",

    // Compliments page
    complimentsTitle: "Отзывы",
    complimentsDescription:
      "В BEARS мы гордимся положительными отзывами, которые получаем от наших пациентов и партнеров в сфере здравоохранения. Вот что люди говорят о нашем сервисе.",
    shareExperienceTitle: "Поделитесь своим опытом",
    shareExperienceDescription:
      "Мы ценим ваши отзывы. Если вы недавно воспользовались нашими услугами и хотели бы поделиться своим опытом, мы будем рады услышать от вас.",
    submitFeedback: "Отправить отзыв",

    // Vacancies page
    vacanciesTitle: "Вакансии",
    currentOpenings: "Текущие вакансии",
    vacanciesIntro1:
      "BEARS была основана в 2009 году на принципах безопасности, комфорта и заботы. Мы специализируемся на логистической службе транспортировки пациентов в больницах. Поддержка NHS с парамедицинскими, педиатрическими и неонатальными, критическими, высокозависимыми, бариатрическими, психиатрическими и ЭКМО-перевозками наряду с обычными услугами по транспортировке пациентов.",
    vacanciesIntro2:
      "На каждом уровне BEARS фокусируется на качестве, что определяет компанию и отличает ее от конкурентов. Наш акцент остается на предоставлении высококачественного обслуживания, обучения и щедрого пакета для наших сотрудников, а также предоставлении им соответствующих инструментов, чтобы они могли обеспечить высочайшие стандарты ухода за пациентами. Отдача от этой стратегии легко демонстрируется нашими ключевыми показателями эффективности (KPI) и уровнем удержания наших контрактов от существующих клиентов NHS.",
    location: "Местоположение",
    salary: "Зарплата",
    viewDetails: "Посмотреть детали",
    generalApplicationTitle: "Не видите должность, соответствующую вашим навыкам?",
    generalApplicationDescription:
      "Мы всегда ищем талантливых людей для присоединения к нашей команде. Отправьте нам свое резюме и расскажите, почему вы будете отличным дополнением для BEARS.",
    submitGeneralApplication: "Отправить общую заявку",
    whyWorkWithUsTitle: "Почему стоит работать с нами?",
    benefitsList: [
      "Конкурентоспособная зарплата и пакет льгот",
      "Постоянные возможности профессионального развития и обучения",
      "Поддерживающая и совместная рабочая среда",
      "Современный, хорошо обслуживаемый флот и оборудование",
      "Возможность внести реальную разницу в жизнь пациентов",
      "Возможности карьерного роста",
    ],

    // Service details
    whatIsHighDependency:
      "Транспортировка высокой зависимости относится к безопасной и надежной транспортировке пациентов, которым требуется более высокий уровень ухода и мониторинга, чем при стандартной неэкстренной транспортировке. Эта услуга разработана для удовлетворения конкретных потребностей пациентов со сложными медицинскими состояниями, которым требуется постоянный мониторинг и зависимость от медицинского оборудования во время транзита.",
    commitmentToSafety:
      "В BEARS безопасность, комфорт и благополучие наших пациентов являются нашими главными приоритетами. Наша служба транспортировки высокой зависимости предоставляется высококвалифицированными и опытными медицинскими специалистами, которые оснащены для обеспечения непрерывного ухода, мониторинга и поддержки на протяжении всего путешествия.",
    specialisedVehicles:
      "Мы используем специально разработанные транспортные средства, оснащенные передовым медицинским оборудованием и средствами для обеспечения высочайших стандартов ухода во время транспортировки. Наши транспортные средства настроены по высочайшим стандартам и проходят регулярные проверки безопасности для гарантии надежности и производительности.",
    personalisedCarePlans:
      "Каждая поездка по транспортировке высокой зависимости сопровождается персонализированным планом ухода, разработанным в консультации с поставщиками медицинских услуг и членами семьи. Этот план описывает конкретные медицинские требования, графики приема лекарств и любые особые соображения, которые необходимо учесть во время поездки, обеспечивая индивидуальный и сострадательный подход к уходу.",

    // Values
    safetyValue: "Безопасность",
    comfortValue: "Комфорт",
    careValue: "Забота",
    safetyDescription1:
      "Мы понимаем, что фокус на безопасности пациентов постоянно требуется, так как клиническая команда BEARS с безопасным хранением всего необходимого оборудования.",
    safetyDescription2:
      "Мы предоставляем время для проверки всех транспортных средств и безопасности. Приверженность высочайшим стандартам безопасности лежит в основе всего, что мы делаем. Наши транспортные средства оснащены новейшими технологиями безопасности, а наш персонал обучен по высочайшим стандартам, чтобы мы никогда не компрометировали безопасность.",
    safetyDescription3:
      "Мы гордимся нашим процессом мониторинга, проводя мониторинг и оценку с постоянным улучшением. Обеспечение того, чтобы процессы постоянно обновлялись в соответствии с последними стандартами ухода для обеспечения оптимального уровня безопасности для пациента и персонала.",
    comfortDescription1:
      "Наши экипажи обеспечивают наиболее комфортную поездку с целенаправленным подходом к планированию путешествия пациента. Они будут понимать потребности и требования пациента, чтобы обеспечить максимально комфортное путешествие.",
    comfortDescription2:
      "Позитивное путешествие пациента начинается с комфортной среды для нашего персонала. Мы считаем, что когда наш персонал комфортно чувствует себя в своем окружении, это позволяет им обеспечивать высочайший уровень ухода за пациентами.",
    careDescription1:
      "Операционные экипажи BEARS будут работать совместно с Трастом, работая вместе с высочайшими уровнями ухода для обеспечения семей. Это обеспечит, что все пациенты будут обрабатываться с достоинством и уважением во все времена.",
    careDescription2:
      "Мы предоставляем уход, адаптированный к потребностям пациента, обеспечивая при этом безопасное, комфортное путешествие. Наши экипажи будут работать как команда, чтобы обеспечить, что все пациенты могут открыто вносить свой вклад в путешествие.",
    careDescription3:
      "Мы обеспечиваем, что внимание к деталям, которое персонал будет демонстрировать с нашими пациентами, будет присутствовать во все времена. Наши экипажи сделают наше отличное обслуживание клиентов приоритетом и всегда будут доступны для ответа на любые вопросы.",

    // Partner logos section
    ourPartners: "Наши партнеры",
  },
}

export function getTranslations(language: string) {
  return translations[language as keyof Translations] || translations.en
}
