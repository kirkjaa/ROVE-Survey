// ROVE Survey System - Internationalization (i18n)
// Supports: English (en), Thai (th)

const translations = {
    en: {
        // Navigation
        nav_survey: "Take Survey",
        nav_admin: "Admin Panel",
        
        // Survey Selection
        hero_title: "Choose Your Journey",
        hero_subtitle: "Help us understand your travel vibe",
        empathy_title: "Empathy Questionnaire",
        empathy_desc: "Deep dive into your travel emotions, fears, and desires",
        empathy_time: "~8 minutes",
        quant_title: "Quantitative Survey",
        quant_desc: "Profile-based questions for personalized matching",
        quant_time: "~6 minutes",
        
        // Navigation Buttons
        btn_previous: "← Previous",
        btn_next: "Next →",
        btn_submit: "Submit Survey ✨",
        
        // Success Message
        success_title: "Thank You!",
        success_message: "Your responses have been recorded. You're helping shape the future of travel.",
        success_btn: "Take Another Survey",
        
        // Footer
        footer_text: "ROVE Survey System · Built with ✨ for the future of travel",
        
        // ===== EMPATHY QUESTIONNAIRE =====
        empathy_part1_title: "Discovery & The Inspiration Gap",
        empathy_part1_desc: "This section explores the friction between seeing a \"vibe\" and booking it.",
        
        e_q1: "Where do you typically find travel inspiration?",
        e_q1_tiktok: "TikTok",
        e_q1_instagram: "Instagram",
        e_q1_blogs: "Travel Blogs / YouTube",
        e_q1_other: "Other:",
        e_q1_other_placeholder: "Specify...",
        
        e_q2: "When you find inspiration online, how do you feel when you cannot easily find a way to book exactly what you see?",
        e_q2_placeholder: "Share your feelings...",
        
        e_q3: "What specific visual elements make a travel video feel \"authentic\" to you rather than a \"tourist trap\"?",
        e_q3_placeholder: "Describe what makes content feel real...",
        
        e_q4: "How much time do you spend \"verifying\" a social media trend on sites like TripAdvisor before you feel safe booking?",
        e_q4_opt1: "Less than 30 minutes",
        e_q4_opt2: "1–2 hours",
        e_q4_opt3: "3+ hours / I need extensive peer proof",
        
        empathy_part2_title: "Social Connection & \"Tribe\" Dynamics",
        empathy_part2_desc: "Identifying the \"loneliness epidemic\" and fears regarding group travel.",
        
        e_q5: "Have you ever felt socially isolated while traveling, even if you were in a crowded place?",
        e_q5_yes: "Yes",
        e_q5_no: "No",
        
        e_q6: "What are your top three fears when joining a group of strangers for a trip?",
        e_q6_fear1: "Fear #1",
        e_q6_fear2: "Fear #2",
        e_q6_fear3: "Fear #3",
        
        e_q7: "How much do you trust an algorithm to choose your travel companions versus choosing them yourself from a list of profiles?",
        e_q7_opt1: "I fully trust an algorithm based on my \"vibe.\"",
        e_q7_opt2: "I want to see their profiles first before committing.",
        e_q7_opt3: "I only want to travel with people I already know.",
        
        empathy_part3_title: "\"Life Swap\" & Motivation",
        empathy_part3_desc: "Understanding the desire for skill-based travel over traditional sightseeing.",
        
        e_q8: "If you could \"swap lives\" with a local for one week, what specific skill would you want to learn?",
        e_q8_placeholder: "e.g., Muay Thai, being a barista, pottery, etc.",
        
        e_q9: "Does the opportunity to gain a tangible skill increase your interest in a destination more than its historical landmarks?",
        e_q9_opt1: "Yes, I prioritize learning and daily local life.",
        e_q9_opt2: "No, I still prioritize famous landmarks.",
        
        e_q10: "What does \"cultural empathy\" mean to you in the context of a vacation?",
        e_q10_placeholder: "Share your perspective...",
        
        empathy_part4_title: "Aesthetics & UX (The ROVE \"Vibe\")",
        empathy_part4_desc: "Evaluating the \"Gen Z Premium\" design and TikTok-style interface.",
        
        e_q11: "Does the \"Sunset\" gradient palette (Coral, Magenta, Purple) feel like an authentic representation of Asian travel to you?",
        e_q11_opt1: "Yes, it feels vibrant and modern.",
        e_q11_opt2: "No, it feels too \"digital\" or artificial.",
        
        e_q12: "Does the \"Glassmorphism\" (frosted glass) effect help you focus, or does the screen feel too \"busy\"?",
        e_q12_opt1: "Helps me focus; feels premium.",
        e_q12_opt2: "Feels cluttered/distracting.",
        
        e_q13: "What visual cues make an app feel \"too AI-generated\" to you?",
        e_q13_placeholder: "Describe what feels artificial...",
        
        e_q14: "Does the term \"Tribe\" feel inclusive, or would you prefer a different name for your travel group?",
        e_q14_opt1: "I like \"Tribe.\"",
        e_q14_opt2: "I would prefer:",
        e_q14_placeholder: "Your suggestion...",
        
        empathy_part5_title: "Logistics, Safety, & Risk Tolerance",
        empathy_part5_desc: "Gauging comfort with house-swapping and host transparency.",
        
        e_q15: "How much does a host's personal profile and previous reviews influence your decision to book?",
        e_q15_opt1: "Essential; I won't book without it.",
        e_q15_opt2: "Important, but not the deciding factor.",
        e_q15_opt3: "Not very important.",
        
        e_q16: "What specific data about a home would you need to see to feel safe participating in \"Kindred Hosting\" (house-swapping)?",
        e_q16_opt1: "Exact number of bathrooms/beds.",
        e_q16_opt2: "Specific amenities (Wi-Fi, kitchen).",
        e_q16_opt3: "Neighborhood safety ratings.",
        e_q16_opt4: "Verified video tour.",
        
        e_q17: "Are you willing to be the \"public face\" of a brand by contributing video reviews in exchange for discounts?",
        e_q17_opt1: "Yes, I'm happy to share my experience.",
        e_q17_opt2: "No, I prefer to stay private.",
        
        empathy_part6_title: "Feature Ranking (Evaluation)",
        empathy_part6_desc: "Rank these potential features from 1 (Most Valuable) to 4 (Least Valuable).",
        
        e_q18: "Drag to rank the features:",
        e_q18_video: "Video-to-Booking",
        e_q18_video_desc: "Booking exactly what I see in a feed.",
        e_q18_vibe: "Vibe Matching",
        e_q18_vibe_desc: "Guaranteeing a cohort with identical energy levels.",
        e_q18_skill: "Skill Immersion",
        e_q18_skill_desc: "Learning a profession/craft from a local host.",
        e_q18_kindred: "Kindred Hosting",
        e_q18_kindred_desc: "Authentic local stays through house-swapping.",
        
        // ===== QUANTITATIVE SURVEY =====
        quant_part1_title: "Personal & Professional Profile",
        quant_part1_desc: "This section identifies if you fit the primary Gen Z-first target market.",
        
        q_q1: "What is your email address?",
        q_q1_placeholder: "your@email.com",
        
        q_q2: "Which age bracket do you fall into?",
        q_q2_opt1: "Under 18",
        q_q2_opt2: "18 – 22",
        q_q2_opt3: "23 – 27",
        q_q2_opt4: "28+",
        
        q_q3: "What is your current primary status?",
        q_q3_opt1: "Student",
        q_q3_opt2: "Gap-Year Traveler",
        q_q3_opt3: "Young Professional / Digital Nomad",
        q_q3_opt4: "Other:",
        q_q3_placeholder: "Specify...",
        
        quant_part2_title: "\"Vibe Profile\" & Social Analytics",
        quant_part2_desc: "ROVE aims to solve the \"Loneliness Epidemic\" and \"Travel Anxiety\" through personality-based matching.",
        
        q_q4: "Have you ever felt \"Travel Anxiety\" or loneliness when planning a solo trip?",
        q_q4_opt1: "Yes, frequently",
        q_q4_opt2: "Sometimes",
        q_q4_opt3: "No, never",
        
        q_q5: "What are your biggest fears regarding group travel? (Check all that apply)",
        q_q5_opt1: "Being stuck with \"bad company\" or mismatched personalities.",
        q_q5_opt2: "Safety concerns when traveling alone.",
        q_q5_opt3: "Experiences feeling like a \"tourist trap.\"",
        q_q5_opt4: "Rigid schedules that don't allow for personal time.",
        
        q_q6: "How would you rate your typical travel energy?",
        q_q6_low: "Low Energy",
        q_q6_low_desc: "I prefer wellness, meditation, and quiet cafes.",
        q_q6_mid: "Mid Energy",
        q_q6_mid_desc: "I like a mix of coworking and exploring local food.",
        q_q6_high: "High Energy",
        q_q6_high_desc: "I prefer high-intensity pursuits (e.g., intensive sports or adventure).",
        
        quant_part3_title: "Discovery & Aesthetic Feedback",
        quant_part3_desc: "This section validates the \"Discovery-Booking Gap\" and the convenience of the UI.",
        
        q_q7: "Where do you find travel inspiration? (Check all that apply)",
        q_q7_opt1: "TikTok / Instagram",
        q_q7_opt2: "Google Search",
        q_q7_opt3: "Recommendations from friends",
        q_q7_opt4: "Travel Blogs / YouTube",
        
        q_q8: "Do you find the \"TikTok style\" for your discovery page to be convenient?",
        q_q8_yes: "Yes",
        q_q8_no: "No",
        
        quant_part4_title: "Primary Travel Objective",
        quant_part4_desc: "Refining the \"Life Swap\" model into specific professional and lifestyle goals.",
        
        q_q9: "What is the main driver for your next week-long stay in a new city? (Select one)",
        q_q9_opt1_title: "Professional/Skill Immersion:",
        q_q9_opt1_desc: "Gaining hands-on experience in a specific craft (e.g., specialty coffee, sustainable farming).",
        q_q9_opt2_title: "Remote Work Evaluation:",
        q_q9_opt2_desc: "Testing a location's infrastructure for a long-term digital nomad lifestyle.",
        q_q9_opt3_title: "Intensive Niche Interest:",
        q_q9_opt3_desc: "Dedicated time for a wellness or high-energy pursuit (e.g., meditation or surf camps).",
        q_q9_opt4_title: "Curated Community:",
        q_q9_opt4_desc: "Being matched with a verified cohort who share my daily routine and energy.",
        
        q_q10: "Which specific immersive experience would you be most likely to book?",
        q_q10_vocational: "Vocational",
        q_q10_vocational_desc: "\"Barista Training in Seoul\" or \"Digital Nomad Week in Bali.\"",
        q_q10_wellness: "Wellness",
        q_q10_wellness_desc: "\"Silent Meditation in Chiang Mai.\"",
        q_q10_adventure: "Adventure",
        q_q10_adventure_desc: "\"Surf & Skate Camp in Da Nang.\"",
        
        quant_part5_title: "Host Transparency & Kindred Hosting",
        quant_part5_desc: "Validating the level of data required to build trust in the ROVE marketplace.",
        
        q_q11: "When looking at a host's profile, what information is a \"must-have\"? (Check all that apply)",
        q_q11_opt1: "A hospitality/hostility rating from previous users.",
        q_q11_opt2: "Their personal favorite local spots (gyms, restaurants, etc.).",
        q_q11_opt3: "A video introduction of themselves.",
        q_q11_opt4: "Information on pets.",
        
        q_q12: "Regarding \"Kindred Hosting\" (house-swapping), what data do you need to see? (Check all that apply)",
        q_q12_opt1: "Exact number of beds and bathrooms.",
        q_q12_opt2: "Specific amenities (Wi-Fi speed, kitchen tools).",
        q_q12_opt3: "Verified safety reviews from the ROVE community.",
        
        quant_part6_title: "Local Integration & Language",
        quant_part6_desc: "Addressing your need for localized content and daily routine support.",
        
        q_q13: "In your travel profile, which \"consumer info\" would you like to see integrated? (Check all that apply)",
        q_q13_opt1: "Local Gyms / Fitness Centers",
        q_q13_opt2: "Nail Salons / Grooming",
        q_q13_opt3: "Specialty Coffee / Food spots",
        q_q13_opt4: "Co-working spaces",
        
        q_q14: "If the app is localized for you (e.g., in Japanese), how important is it to remove all English terms?",
        q_q14_opt1: "Very important; use existing local words.",
        q_q14_opt2: "Somewhat important; a mix is fine.",
        q_q14_opt3: "Not important at all.",
        
        quant_part7_title: "Risk Tolerance & Commitment",
        quant_part7_desc: "Understanding your willingness to invest in better experiences.",
        
        q_q15: "Would you be willing to pay a \"Tribe Matching Fee\" to guarantee you are placed in a group with similar energy levels?",
        q_q15_opt1: "Yes, if it ensures I don't have \"bad company.\"",
        q_q15_opt2: "No, I would rather take the risk for free.",
        
        q_q16: "Would you be interested in becoming a \"Head Rover\" (Campus Ambassador) to organize trips?",
        q_q16_opt1: "Yes, show me how to earn discounts.",
        q_q16_opt2: "No, I just want to be a participant.",
        
        quant_part8_title: "Feature Prioritization",
        quant_part8_desc: "Rank the following ROVE app features by how much they would improve your travel experience (1 = Most important, 5 = Least important).",
        
        q_q17: "Drag to rank the features:",
        q_q17_video: "Video-to-Booking",
        q_q17_video_desc: "Booking directly from a TikTok-style feed.",
        q_q17_host: "Host Transparency",
        q_q17_host_desc: "Viewing profiles, ratings, and local favorite spots.",
        q_q17_kindred: "Kindred Hosting",
        q_q17_kindred_desc: "Accessing house-swapping details and neighborhood amenities.",
        q_q17_deep: "Deep Profiling",
        q_q17_deep_desc: "An onboarding process for interests and surroundings.",
        q_q17_multi: "Multi-Language Support",
        q_q17_multi_desc: "Viewing the app in native languages like Japanese.",
        
        // Admin Panel
        admin_title: "Survey Responses",
        admin_subtitle: "Monitor and analyze all submissions",
        admin_empathy_responses: "Empathy Responses",
        admin_quant_responses: "Quantitative Responses",
        admin_total_responses: "Total Responses",
        admin_export_csv: "Export CSV",
        admin_clear_all: "Clear All",
        admin_no_responses: "No responses yet.",
        admin_response_details: "Response Details",
        admin_close: "Close",
        admin_delete: "Delete Response",
        admin_login_title: "Welcome Back",
        admin_login_subtitle: "Sign in to access the admin panel",
        admin_username: "Username",
        admin_password: "Password",
        admin_signin: "Sign In",
        admin_back: "← Back to Survey",
        admin_logout: "Logout",
        
        // Language
        lang_en: "English",
        lang_th: "ไทย"
    },
    
    th: {
        // Navigation
        nav_survey: "ทำแบบสำรวจ",
        nav_admin: "แผงควบคุมผู้ดูแล",
        
        // Survey Selection
        hero_title: "เลือกเส้นทางของคุณ",
        hero_subtitle: "ช่วยเราเข้าใจสไตล์การเดินทางของคุณ",
        empathy_title: "แบบสอบถามเชิงความรู้สึก",
        empathy_desc: "เจาะลึกอารมณ์ ความกลัว และความปรารถนาในการเดินทางของคุณ",
        empathy_time: "~8 นาที",
        quant_title: "แบบสำรวจเชิงปริมาณ",
        quant_desc: "คำถามตามโปรไฟล์เพื่อการจับคู่ที่เหมาะสม",
        quant_time: "~6 นาที",
        
        // Navigation Buttons
        btn_previous: "← ก่อนหน้า",
        btn_next: "ถัดไป →",
        btn_submit: "ส่งแบบสำรวจ ✨",
        
        // Success Message
        success_title: "ขอบคุณ!",
        success_message: "คำตอบของคุณได้รับการบันทึกแล้ว คุณกำลังช่วยสร้างอนาคตของการท่องเที่ยว",
        success_btn: "ทำแบบสำรวจอีกครั้ง",
        
        // Footer
        footer_text: "ระบบสำรวจ ROVE · สร้างด้วย ✨ เพื่ออนาคตของการท่องเที่ยว",
        
        // ===== EMPATHY QUESTIONNAIRE =====
        empathy_part1_title: "การค้นพบและช่องว่างแรงบันดาลใจ",
        empathy_part1_desc: "ส่วนนี้สำรวจความขัดแย้งระหว่างการเห็น \"บรรยากาศ\" และการจอง",
        
        e_q1: "คุณมักจะหาแรงบันดาลใจในการเดินทางจากที่ไหน?",
        e_q1_tiktok: "TikTok",
        e_q1_instagram: "Instagram",
        e_q1_blogs: "บล็อกท่องเที่ยว / YouTube",
        e_q1_other: "อื่นๆ:",
        e_q1_other_placeholder: "ระบุ...",
        
        e_q2: "เมื่อคุณพบแรงบันดาลใจออนไลน์ คุณรู้สึกอย่างไรเมื่อไม่สามารถหาวิธีจองสิ่งที่เห็นได้ง่าย?",
        e_q2_placeholder: "แบ่งปันความรู้สึกของคุณ...",
        
        e_q3: "องค์ประกอบภาพใดที่ทำให้วิดีโอท่องเที่ยวรู้สึก \"จริงแท้\" แทนที่จะเป็น \"กับดักนักท่องเที่ยว\"?",
        e_q3_placeholder: "อธิบายสิ่งที่ทำให้เนื้อหารู้สึกจริง...",
        
        e_q4: "คุณใช้เวลาเท่าไหร่ในการ \"ตรวจสอบ\" เทรนด์โซเชียลมีเดียบนเว็บไซต์อย่าง TripAdvisor ก่อนที่จะรู้สึกปลอดภัยในการจอง?",
        e_q4_opt1: "น้อยกว่า 30 นาที",
        e_q4_opt2: "1–2 ชั่วโมง",
        e_q4_opt3: "3+ ชั่วโมง / ต้องการหลักฐานจากเพื่อนมาก",
        
        empathy_part2_title: "การเชื่อมต่อทางสังคมและพลวัต \"เผ่า\"",
        empathy_part2_desc: "ระบุ \"โรคระบาดความเหงา\" และความกลัวเกี่ยวกับการเดินทางเป็นกลุ่ม",
        
        e_q5: "คุณเคยรู้สึกโดดเดี่ยวทางสังคมขณะเดินทางไหม แม้จะอยู่ในที่ที่มีคนพลุกพล่าน?",
        e_q5_yes: "ใช่",
        e_q5_no: "ไม่",
        
        e_q6: "ความกลัว 3 อันดับแรกของคุณเมื่อเข้าร่วมกลุ่มคนแปลกหน้าในการเดินทางคืออะไร?",
        e_q6_fear1: "ความกลัว #1",
        e_q6_fear2: "ความกลัว #2",
        e_q6_fear3: "ความกลัว #3",
        
        e_q7: "คุณเชื่อถืออัลกอริทึมในการเลือกเพื่อนร่วมเดินทางมากแค่ไหน เทียบกับการเลือกด้วยตัวเองจากรายชื่อโปรไฟล์?",
        e_q7_opt1: "ฉันเชื่อถืออัลกอริทึมอย่างเต็มที่ตาม \"ไวบ์\" ของฉัน",
        e_q7_opt2: "ฉันต้องการดูโปรไฟล์ก่อนตัดสินใจ",
        e_q7_opt3: "ฉันต้องการเดินทางกับคนที่รู้จักเท่านั้น",
        
        empathy_part3_title: "\"การแลกชีวิต\" และแรงจูงใจ",
        empathy_part3_desc: "ทำความเข้าใจความปรารถนาในการเดินทางเพื่อเรียนรู้ทักษะมากกว่าการท่องเที่ยวแบบดั้งเดิม",
        
        e_q8: "ถ้าคุณสามารถ \"แลกชีวิต\" กับคนท้องถิ่นเป็นเวลาหนึ่งสัปดาห์ คุณอยากเรียนรู้ทักษะอะไร?",
        e_q8_placeholder: "เช่น มวยไทย, บาริสต้า, งานปั้น ฯลฯ",
        
        e_q9: "โอกาสในการได้รับทักษะที่จับต้องได้เพิ่มความสนใจในจุดหมายปลายทางของคุณมากกว่าสถานที่ทางประวัติศาสตร์หรือไม่?",
        e_q9_opt1: "ใช่ ฉันให้ความสำคัญกับการเรียนรู้และชีวิตประจำวันของคนท้องถิ่น",
        e_q9_opt2: "ไม่ ฉันยังคงให้ความสำคัญกับสถานที่ที่มีชื่อเสียง",
        
        e_q10: "\"ความเห็นอกเห็นใจทางวัฒนธรรม\" หมายความว่าอย่างไรสำหรับคุณในบริบทของการพักผ่อน?",
        e_q10_placeholder: "แบ่งปันมุมมองของคุณ...",
        
        empathy_part4_title: "สุนทรียศาสตร์และ UX (\"ไวบ์\" ของ ROVE)",
        empathy_part4_desc: "ประเมินการออกแบบ \"Gen Z Premium\" และอินเทอร์เฟซสไตล์ TikTok",
        
        e_q11: "จานสี \"พระอาทิตย์ตก\" (Coral, Magenta, Purple) รู้สึกเป็นตัวแทนที่แท้จริงของการเดินทางในเอเชียสำหรับคุณหรือไม่?",
        e_q11_opt1: "ใช่ รู้สึกมีชีวิตชีวาและทันสมัย",
        e_q11_opt2: "ไม่ รู้สึก \"ดิจิทัล\" หรือเทียมเกินไป",
        
        e_q12: "เอฟเฟกต์ \"Glassmorphism\" (กระจกฝ้า) ช่วยให้คุณโฟกัสได้ หรือหน้าจอรู้สึก \"รก\" เกินไป?",
        e_q12_opt1: "ช่วยให้โฟกัสได้; รู้สึกพรีเมียม",
        e_q12_opt2: "รู้สึกรก/รบกวน",
        
        e_q13: "สิ่งใดที่ทำให้แอปรู้สึก \"ถูกสร้างโดย AI มากเกินไป\" สำหรับคุณ?",
        e_q13_placeholder: "อธิบายสิ่งที่รู้สึกเทียม...",
        
        e_q14: "คำว่า \"Tribe\" รู้สึกครอบคลุม หรือคุณต้องการชื่ออื่นสำหรับกลุ่มท่องเที่ยวของคุณ?",
        e_q14_opt1: "ฉันชอบ \"Tribe\"",
        e_q14_opt2: "ฉันต้องการ:",
        e_q14_placeholder: "ข้อเสนอแนะของคุณ...",
        
        empathy_part5_title: "โลจิสติกส์ ความปลอดภัย และความเสี่ยงที่ยอมรับได้",
        empathy_part5_desc: "ประเมินความสะดวกสบายกับการแลกบ้านและความโปร่งใสของเจ้าของที่พัก",
        
        e_q15: "โปรไฟล์ส่วนตัวของเจ้าของที่พักและรีวิวก่อนหน้ามีอิทธิพลต่อการตัดสินใจจองของคุณมากแค่ไหน?",
        e_q15_opt1: "จำเป็น; ฉันจะไม่จองถ้าไม่มี",
        e_q15_opt2: "สำคัญ แต่ไม่ใช่ปัจจัยตัดสิน",
        e_q15_opt3: "ไม่สำคัญมาก",
        
        e_q16: "ข้อมูลเฉพาะใดเกี่ยวกับบ้านที่คุณต้องเห็นเพื่อรู้สึกปลอดภัยในการเข้าร่วม \"Kindred Hosting\" (การแลกบ้าน)?",
        e_q16_opt1: "จำนวนห้องน้ำ/เตียงที่แน่นอน",
        e_q16_opt2: "สิ่งอำนวยความสะดวกเฉพาะ (Wi-Fi, ครัว)",
        e_q16_opt3: "คะแนนความปลอดภัยของละแวก",
        e_q16_opt4: "วิดีโอทัวร์ที่ได้รับการยืนยัน",
        
        e_q17: "คุณยินดีที่จะเป็น \"หน้าตาสาธารณะ\" ของแบรนด์โดยการมอบรีวิววิดีโอเพื่อแลกกับส่วนลดหรือไม่?",
        e_q17_opt1: "ใช่ ฉันยินดีแบ่งปันประสบการณ์",
        e_q17_opt2: "ไม่ ฉันต้องการความเป็นส่วนตัว",
        
        empathy_part6_title: "การจัดอันดับฟีเจอร์ (การประเมิน)",
        empathy_part6_desc: "จัดอันดับฟีเจอร์เหล่านี้จาก 1 (มีค่ามากที่สุด) ถึง 4 (มีค่าน้อยที่สุด)",
        
        e_q18: "ลากเพื่อจัดอันดับฟีเจอร์:",
        e_q18_video: "วิดีโอสู่การจอง",
        e_q18_video_desc: "จองสิ่งที่เห็นในฟีดได้โดยตรง",
        e_q18_vibe: "การจับคู่ไวบ์",
        e_q18_vibe_desc: "รับประกันกลุ่มที่มีระดับพลังงานเหมือนกัน",
        e_q18_skill: "การเรียนรู้ทักษะ",
        e_q18_skill_desc: "เรียนรู้อาชีพ/งานฝีมือจากเจ้าของที่พักท้องถิ่น",
        e_q18_kindred: "Kindred Hosting",
        e_q18_kindred_desc: "ที่พักท้องถิ่นแท้จริงผ่านการแลกบ้าน",
        
        // ===== QUANTITATIVE SURVEY =====
        quant_part1_title: "โปรไฟล์ส่วนตัวและอาชีพ",
        quant_part1_desc: "ส่วนนี้ระบุว่าคุณเหมาะกับกลุ่มเป้าหมาย Gen Z หรือไม่",
        
        q_q1: "อีเมลของคุณคืออะไร?",
        q_q1_placeholder: "your@email.com",
        
        q_q2: "คุณอยู่ในช่วงอายุใด?",
        q_q2_opt1: "ต่ำกว่า 18",
        q_q2_opt2: "18 – 22",
        q_q2_opt3: "23 – 27",
        q_q2_opt4: "28+",
        
        q_q3: "สถานะหลักปัจจุบันของคุณคืออะไร?",
        q_q3_opt1: "นักศึกษา",
        q_q3_opt2: "นักเดินทาง Gap-Year",
        q_q3_opt3: "มืออาชีพรุ่นใหม่ / Digital Nomad",
        q_q3_opt4: "อื่นๆ:",
        q_q3_placeholder: "ระบุ...",
        
        quant_part2_title: "\"โปรไฟล์ไวบ์\" และการวิเคราะห์ทางสังคม",
        quant_part2_desc: "ROVE มุ่งแก้ปัญหา \"โรคระบาดความเหงา\" และ \"ความวิตกกังวลในการเดินทาง\" ผ่านการจับคู่ตามบุคลิกภาพ",
        
        q_q4: "คุณเคยรู้สึก \"ความวิตกกังวลในการเดินทาง\" หรือความเหงาเมื่อวางแผนเดินทางคนเดียวหรือไม่?",
        q_q4_opt1: "ใช่ บ่อยๆ",
        q_q4_opt2: "บางครั้ง",
        q_q4_opt3: "ไม่เลย",
        
        q_q5: "ความกลัวที่ใหญ่ที่สุดของคุณเกี่ยวกับการเดินทางเป็นกลุ่มคืออะไร? (เลือกได้หลายข้อ)",
        q_q5_opt1: "ติดอยู่กับ \"เพื่อนร่วมเดินทางที่ไม่ดี\" หรือบุคลิกไม่ตรงกัน",
        q_q5_opt2: "ข้อกังวลด้านความปลอดภัยเมื่อเดินทางคนเดียว",
        q_q5_opt3: "ประสบการณ์ที่รู้สึกเหมือน \"กับดักนักท่องเที่ยว\"",
        q_q5_opt4: "ตารางเวลาที่เข้มงวดไม่อนุญาตให้มีเวลาส่วนตัว",
        
        q_q6: "คุณจะให้คะแนนพลังงานการเดินทางทั่วไปของคุณอย่างไร?",
        q_q6_low: "พลังงานต่ำ",
        q_q6_low_desc: "ฉันชอบสุขภาพ การทำสมาธิ และคาเฟ่เงียบๆ",
        q_q6_mid: "พลังงานปานกลาง",
        q_q6_mid_desc: "ฉันชอบผสมผสานการทำงานร่วมและการสำรวจอาหารท้องถิ่น",
        q_q6_high: "พลังงานสูง",
        q_q6_high_desc: "ฉันชอบกิจกรรมที่เข้มข้น (เช่น กีฬาหนักหรือผจญภัย)",
        
        quant_part3_title: "การค้นพบและความคิดเห็นด้านสุนทรียศาสตร์",
        quant_part3_desc: "ส่วนนี้ตรวจสอบ \"ช่องว่างการค้นพบ-การจอง\" และความสะดวกของ UI",
        
        q_q7: "คุณหาแรงบันดาลใจในการเดินทางจากที่ไหน? (เลือกได้หลายข้อ)",
        q_q7_opt1: "TikTok / Instagram",
        q_q7_opt2: "ค้นหา Google",
        q_q7_opt3: "คำแนะนำจากเพื่อน",
        q_q7_opt4: "บล็อกท่องเที่ยว / YouTube",
        
        q_q8: "คุณพบว่า \"สไตล์ TikTok\" สำหรับหน้าค้นพบของคุณสะดวกหรือไม่?",
        q_q8_yes: "ใช่",
        q_q8_no: "ไม่",
        
        quant_part4_title: "วัตถุประสงค์การเดินทางหลัก",
        quant_part4_desc: "ปรับปรุงโมเดล \"การแลกชีวิต\" ให้เป็นเป้าหมายอาชีพและไลฟ์สไตล์ที่เฉพาะเจาะจง",
        
        q_q9: "อะไรคือแรงขับเคลื่อนหลักสำหรับการพักหนึ่งสัปดาห์ในเมืองใหม่ของคุณ? (เลือกหนึ่งข้อ)",
        q_q9_opt1_title: "การเรียนรู้อาชีพ/ทักษะ:",
        q_q9_opt1_desc: "ได้รับประสบการณ์จริงในงานฝีมือเฉพาะ (เช่น กาแฟพิเศษ, เกษตรกรรมยั่งยืน)",
        q_q9_opt2_title: "การประเมินการทำงานระยะไกล:",
        q_q9_opt2_desc: "ทดสอบโครงสร้างพื้นฐานของสถานที่สำหรับไลฟ์สไตล์ Digital Nomad ระยะยาว",
        q_q9_opt3_title: "ความสนใจเฉพาะทางที่เข้มข้น:",
        q_q9_opt3_desc: "เวลาเฉพาะสำหรับการแสวงหาสุขภาพหรือพลังงานสูง (เช่น การทำสมาธิหรือค่ายเซิร์ฟ)",
        q_q9_opt4_title: "ชุมชนที่คัดสรร:",
        q_q9_opt4_desc: "จับคู่กับกลุ่มที่ได้รับการยืนยันซึ่งมีกิจวัตรประจำวันและพลังงานเดียวกัน",
        
        q_q10: "ประสบการณ์ดื่มด่ำใดที่คุณมีแนวโน้มจะจองมากที่สุด?",
        q_q10_vocational: "อาชีพ",
        q_q10_vocational_desc: "\"การฝึกบาริสต้าในโซล\" หรือ \"สัปดาห์ Digital Nomad ในบาหลี\"",
        q_q10_wellness: "สุขภาพ",
        q_q10_wellness_desc: "\"การทำสมาธิเงียบในเชียงใหม่\"",
        q_q10_adventure: "ผจญภัย",
        q_q10_adventure_desc: "\"ค่ายเซิร์ฟและสเก็ตในดานัง\"",
        
        quant_part5_title: "ความโปร่งใสของเจ้าของที่พักและ Kindred Hosting",
        quant_part5_desc: "ตรวจสอบระดับข้อมูลที่จำเป็นเพื่อสร้างความไว้วางใจในตลาด ROVE",
        
        q_q11: "เมื่อดูโปรไฟล์ของเจ้าของที่พัก ข้อมูลใดที่ \"ต้องมี\"? (เลือกได้หลายข้อ)",
        q_q11_opt1: "คะแนนการต้อนรับจากผู้ใช้ก่อนหน้า",
        q_q11_opt2: "สถานที่ท้องถิ่นที่ชื่นชอบ (ยิม, ร้านอาหาร ฯลฯ)",
        q_q11_opt3: "วิดีโอแนะนำตัวเอง",
        q_q11_opt4: "ข้อมูลเกี่ยวกับสัตว์เลี้ยง",
        
        q_q12: "เกี่ยวกับ \"Kindred Hosting\" (การแลกบ้าน) คุณต้องเห็นข้อมูลอะไร? (เลือกได้หลายข้อ)",
        q_q12_opt1: "จำนวนเตียงและห้องน้ำที่แน่นอน",
        q_q12_opt2: "สิ่งอำนวยความสะดวกเฉพาะ (ความเร็ว Wi-Fi, เครื่องครัว)",
        q_q12_opt3: "รีวิวความปลอดภัยที่ได้รับการยืนยันจากชุมชน ROVE",
        
        quant_part6_title: "การผสานรวมท้องถิ่นและภาษา",
        quant_part6_desc: "ตอบสนองความต้องการเนื้อหาท้องถิ่นและการสนับสนุนกิจวัตรประจำวันของคุณ",
        
        q_q13: "ในโปรไฟล์การเดินทางของคุณ คุณต้องการเห็น \"ข้อมูลผู้บริโภค\" ใดที่ผสานรวม? (เลือกได้หลายข้อ)",
        q_q13_opt1: "ยิม / ศูนย์ฟิตเนสท้องถิ่น",
        q_q13_opt2: "ร้านทำเล็บ / ความงาม",
        q_q13_opt3: "กาแฟพิเศษ / ร้านอาหาร",
        q_q13_opt4: "พื้นที่ทำงานร่วม",
        
        q_q14: "หากแอปถูกแปลเป็นภาษาท้องถิ่นสำหรับคุณ (เช่น ภาษาญี่ปุ่น) การลบคำภาษาอังกฤษทั้งหมดสำคัญแค่ไหน?",
        q_q14_opt1: "สำคัญมาก; ใช้คำท้องถิ่นที่มีอยู่",
        q_q14_opt2: "ค่อนข้างสำคัญ; ผสมกันได้",
        q_q14_opt3: "ไม่สำคัญเลย",
        
        quant_part7_title: "ความเสี่ยงที่ยอมรับได้และความมุ่งมั่น",
        quant_part7_desc: "ทำความเข้าใจความเต็มใจที่จะลงทุนเพื่อประสบการณ์ที่ดีขึ้น",
        
        q_q15: "คุณยินดีจ่าย \"ค่าธรรมเนียมการจับคู่ Tribe\" เพื่อรับประกันว่าคุณจะอยู่ในกลุ่มที่มีระดับพลังงานเดียวกันหรือไม่?",
        q_q15_opt1: "ใช่ ถ้ามันทำให้ฉันไม่ต้องมี \"เพื่อนร่วมเดินทางที่ไม่ดี\"",
        q_q15_opt2: "ไม่ ฉันยอมเสี่ยงฟรีมากกว่า",
        
        q_q16: "คุณสนใจที่จะเป็น \"Head Rover\" (ทูตมหาวิทยาลัย) เพื่อจัดทริปหรือไม่?",
        q_q16_opt1: "ใช่ แสดงวิธีรับส่วนลด",
        q_q16_opt2: "ไม่ ฉันแค่ต้องการเป็นผู้เข้าร่วม",
        
        quant_part8_title: "การจัดลำดับความสำคัญของฟีเจอร์",
        quant_part8_desc: "จัดอันดับฟีเจอร์แอป ROVE ต่อไปนี้ตามที่จะปรับปรุงประสบการณ์การเดินทางของคุณ (1 = สำคัญที่สุด, 5 = สำคัญน้อยที่สุด)",
        
        q_q17: "ลากเพื่อจัดอันดับฟีเจอร์:",
        q_q17_video: "วิดีโอสู่การจอง",
        q_q17_video_desc: "จองโดยตรงจากฟีดสไตล์ TikTok",
        q_q17_host: "ความโปร่งใสของเจ้าของที่พัก",
        q_q17_host_desc: "ดูโปรไฟล์ คะแนน และสถานที่ที่ชื่นชอบ",
        q_q17_kindred: "Kindred Hosting",
        q_q17_kindred_desc: "เข้าถึงรายละเอียดการแลกบ้านและสิ่งอำนวยความสะดวกในละแวก",
        q_q17_deep: "การสร้างโปรไฟล์เชิงลึก",
        q_q17_deep_desc: "กระบวนการ onboarding สำหรับความสนใจและสภาพแวดล้อม",
        q_q17_multi: "รองรับหลายภาษา",
        q_q17_multi_desc: "ดูแอปในภาษาท้องถิ่นเช่น ภาษาญี่ปุ่น",
        
        // Admin Panel
        admin_title: "คำตอบแบบสำรวจ",
        admin_subtitle: "ติดตามและวิเคราะห์การส่งทั้งหมด",
        admin_empathy_responses: "คำตอบเชิงความรู้สึก",
        admin_quant_responses: "คำตอบเชิงปริมาณ",
        admin_total_responses: "คำตอบทั้งหมด",
        admin_export_csv: "ส่งออก CSV",
        admin_clear_all: "ลบทั้งหมด",
        admin_no_responses: "ยังไม่มีคำตอบ",
        admin_response_details: "รายละเอียดคำตอบ",
        admin_close: "ปิด",
        admin_delete: "ลบคำตอบ",
        admin_login_title: "ยินดีต้อนรับกลับ",
        admin_login_subtitle: "เข้าสู่ระบบเพื่อเข้าถึงแผงควบคุมผู้ดูแล",
        admin_username: "ชื่อผู้ใช้",
        admin_password: "รหัสผ่าน",
        admin_signin: "เข้าสู่ระบบ",
        admin_back: "← กลับไปแบบสำรวจ",
        admin_logout: "ออกจากระบบ",
        
        // Language
        lang_en: "English",
        lang_th: "ไทย"
    }
};

// Current language
let currentLang = localStorage.getItem('rove_lang') || 'en';

// Get translation
function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('rove_lang', lang);
    updatePageTranslations();
    updateLanguageSwitcher();
}

// Update all translations on page
function updatePageTranslations() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    // Update HTML content (for elements with HTML inside)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        el.innerHTML = t(key);
    });
}

// Update language switcher UI
function updateLanguageSwitcher() {
    const switchers = document.querySelectorAll('.lang-btn');
    switchers.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// Initialize i18n
function initI18n() {
    updatePageTranslations();
    updateLanguageSwitcher();
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', initI18n);

// Export for use in other scripts
window.i18n = {
    t,
    setLanguage,
    currentLang: () => currentLang,
    translations
};
