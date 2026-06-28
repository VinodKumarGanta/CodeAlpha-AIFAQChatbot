// ============================================================
//  KNOWLEDGE DATABASE  –  General Knowledge Q&A
// ============================================================
const KNOWLEDGE_DATABASE = {
    "Science": [
        { q: "What is photosynthesis?", a: "Photosynthesis is the process by which green plants use sunlight, water, and carbon dioxide (CO₂) to produce glucose and oxygen. It occurs mainly in the chloroplasts via the equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂." },
        { q: "What is DNA?", a: "DNA (Deoxyribonucleic Acid) is a double-helix molecule that carries the genetic blueprint of living organisms. It is made of four nucleotide bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)." },
        { q: "What is the speed of light?", a: "The speed of light in a vacuum is approximately 299,792,458 metres per second (≈ 3 × 10⁸ m/s), denoted by the constant c." },
        { q: "What is gravity?", a: "Gravity is a fundamental force of attraction between objects with mass. On Earth it accelerates objects at 9.8 m/s². Isaac Newton described it as a universal force; Einstein explained it as the curvature of spacetime." },
        { q: "What is Newton's first law?", a: "Newton's First Law of Motion (Law of Inertia): An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an external force." },
        { q: "What is Newton's second law?", a: "Newton's Second Law: Force equals mass times acceleration — F = ma. The acceleration of an object is proportional to the net force applied and inversely proportional to its mass." },
        { q: "What is Newton's third law?", a: "Newton's Third Law: For every action there is an equal and opposite reaction. If object A exerts a force on object B, then B exerts an equal and opposite force on A." },
        { q: "What is the theory of relativity?", a: "Einstein's theory of relativity has two parts. Special Relativity (1905): the laws of physics are the same for all non-accelerating observers; the speed of light is constant. General Relativity (1915): massive objects curve spacetime, which we perceive as gravity." },
        { q: "What is the Big Bang theory?", a: "The Big Bang theory states that the universe began approximately 13.8 billion years ago from an extremely hot, dense singularity and has been expanding and cooling ever since." },
        { q: "What is osmosis?", a: "Osmosis is the movement of water molecules through a semi-permeable membrane from a region of lower solute concentration to higher solute concentration, equalising the solution on both sides." },
        { q: "What is the periodic table?", a: "The periodic table is a systematic arrangement of all known chemical elements, ordered by atomic number, electron configuration, and recurring chemical properties. It was created by Dmitri Mendeleev in 1869." },
        { q: "What is an atom?", a: "An atom is the smallest unit of a chemical element. It consists of a nucleus containing protons and neutrons, surrounded by electrons in shells or orbitals." },
        { q: "What is a black hole?", a: "A black hole is a region in space where gravity is so intense that nothing — not even light — can escape. They form when massive stars collapse at the end of their lives." },
        { q: "What causes earthquakes?", a: "Earthquakes are caused by the sudden release of energy in Earth's lithosphere, usually due to the movement of tectonic plates along fault lines, volcanic activity, or underground explosions." },
        { q: "What is the greenhouse effect?", a: "The greenhouse effect is the warming of Earth's surface caused by greenhouse gases (CO₂, CH₄, water vapour) trapping heat radiated from the surface, preventing it from escaping into space." },
        { q: "What is evolution?", a: "Evolution is the process of gradual change in the heritable traits of biological populations over successive generations, driven by natural selection, mutation, genetic drift, and gene flow. Proposed by Charles Darwin in 1859." },
        { q: "What is electricity?", a: "Electricity is the flow of electric charge (electrons) through a conductor. It powers devices via circuits and is described by concepts such as voltage (V), current (I), and resistance (R), related by Ohm's Law: V = IR." },
        { q: "What is mitosis?", a: "Mitosis is a type of cell division where a single cell divides to produce two genetically identical daughter cells, each having the same number of chromosomes as the parent. It is used for growth and tissue repair." }
    ],
    "Mathematics": [
        { q: "What is the Pythagorean theorem?", a: "In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c², where c is the hypotenuse." },
        { q: "What is pi?", a: "Pi (π) is the ratio of a circle's circumference to its diameter. It is an irrational, transcendental number approximately equal to 3.14159265…" },
        { q: "What is a prime number?", a: "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples: 2, 3, 5, 7, 11, 13…" },
        { q: "What is the quadratic formula?", a: "The quadratic formula solves ax² + bx + c = 0: x = (−b ± √(b² − 4ac)) / 2a. The discriminant b² − 4ac determines the nature of the roots." },
        { q: "What is calculus?", a: "Calculus is the branch of mathematics dealing with rates of change (differential calculus — derivatives) and accumulation of quantities (integral calculus — integrals). Co-invented by Newton and Leibniz." },
        { q: "What is a derivative?", a: "A derivative measures the instantaneous rate of change of a function with respect to a variable. For f(x), the derivative f'(x) gives the slope of the tangent to the curve at any point." },
        { q: "What is an integral?", a: "An integral is the reverse of differentiation. It represents the area under a curve or the accumulation of quantities. A definite integral ∫[a,b] f(x)dx gives a numerical value; an indefinite integral gives a function + C." },
        { q: "What is the Fibonacci sequence?", a: "The Fibonacci sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21… where each number is the sum of the two preceding ones (Fₙ = Fₙ₋₁ + Fₙ₋₂). It appears extensively in nature." },
        { q: "What is probability?", a: "Probability is a measure of the likelihood that an event will occur, expressed as a number between 0 (impossible) and 1 (certain). P(event) = favourable outcomes / total outcomes." },
        { q: "What is the mean in statistics?", a: "The mean (arithmetic average) is calculated by summing all values in a data set and dividing by the count of values. Mean = Σx / n." },
        { q: "What is algebra?", a: "Algebra is the branch of mathematics dealing with symbols and the rules for manipulating those symbols to solve equations and express relationships between quantities." }
    ],
    "History": [
        { q: "Who invented the telephone?", a: "Alexander Graham Bell is credited with inventing the telephone in 1876, though Elisha Gray filed a similar patent on the same day. Bell received the patent and commercially developed the telephone." },
        { q: "When did World War 2 end?", a: "World War II ended in 1945 — in Europe on 8 May 1945 (V-E Day) with Germany's surrender, and in the Pacific on 2 September 1945 (V-J Day) with Japan's formal surrender." },
        { q: "When did World War 1 start?", a: "World War I began on 28 July 1914 when Austria-Hungary declared war on Serbia, triggered by the assassination of Archduke Franz Ferdinand on 28 June 1914, and ended on 11 November 1918." },
        { q: "Who was Mahatma Gandhi?", a: "Mahatma Gandhi (1869–1948) was the leader of India's non-violent independence movement against British rule. He championed civil disobedience and the principle of ahimsa (non-violence). India gained independence in 1947." },
        { q: "Who was the first president of the United States?", a: "George Washington was the first President of the United States, serving two terms from 1789 to 1797. He was commander of the Continental Army during the American Revolutionary War." },
        { q: "What was the Renaissance?", a: "The Renaissance (14th–17th century) was a cultural and intellectual movement that began in Italy, marked by a revival of interest in classical antiquity, humanism, art, science, and exploration." },
        { q: "What was the Industrial Revolution?", a: "The Industrial Revolution (c. 1760–1840) was a period of rapid industrial, economic, and social transformation beginning in Britain, driven by steam power, mechanisation, and the factory system." },
        { q: "Who was Napoleon Bonaparte?", a: "Napoleon Bonaparte (1769–1821) was a French military and political leader who rose to prominence during the French Revolution and became Emperor of France (1804–1814/15). He is known for his military genius and sweeping legal reforms (Napoleonic Code)." },
        { q: "What was the Cold War?", a: "The Cold War (1947–1991) was a period of geopolitical tension between the United States and the Soviet Union and their respective allies, characterized by ideological rivalry, arms race, and proxy conflicts — but no direct large-scale warfare between the two superpowers." },
        { q: "When did India gain independence?", a: "India gained independence from British rule on 15 August 1947. Jawaharlal Nehru became the first Prime Minister, and Independence Day is celebrated every year on 15 August." }
    ],
    "Geography": [
        { q: "What is the largest country in the world?", a: "Russia is the largest country in the world by land area, covering approximately 17.1 million km² — about 11% of Earth's total land area." },
        { q: "What is the smallest country in the world?", a: "Vatican City (Holy See) is the smallest country in the world by both area (~0.44 km²) and population (~800 people), located within Rome, Italy." },
        { q: "What is the longest river in the world?", a: "The Nile River in northeastern Africa is traditionally considered the world's longest river at approximately 6,650 km. Some studies suggest the Amazon (7,062 km including its full drainage basin) may be longer." },
        { q: "What is the highest mountain in the world?", a: "Mount Everest in the Himalayas is the world's highest mountain above sea level at 8,848.86 metres (29,031.7 ft), as remeasured in 2020 by China and Nepal." },
        { q: "What is the capital of India?", a: "New Delhi is the capital of India and serves as the seat of the national government." },
        { q: "What is the capital of the United States?", a: "Washington, D.C. (District of Columbia) is the capital of the United States." },
        { q: "What is the largest ocean?", a: "The Pacific Ocean is the largest and deepest ocean, covering about 165 million km² — more than all land masses combined." },
        { q: "What is the largest continent?", a: "Asia is the world's largest continent by area (about 44.6 million km²) and population (over 4.7 billion people)." },
        { q: "What is the smallest continent?", a: "Australia is the smallest continent by area (~7.7 million km²). It is also the only country to cover an entire continent." },
        { q: "How many countries are in the world?", a: "There are 195 countries in the world — 193 member states of the United Nations and 2 observer states (Vatican City and Palestine)." },
        { q: "What is the Sahara Desert?", a: "The Sahara is the world's largest hot desert, covering about 9.2 million km² across North Africa. It spans 11 countries and is characterized by extreme temperatures, sand dunes, and rocky plateaus." }
    ],
    "Technology": [
        { q: "What is artificial intelligence?", a: "Artificial Intelligence (AI) is the simulation of human intelligence processes by computer systems, including learning, reasoning, problem-solving, language understanding, and perception. It includes subfields like machine learning, NLP, and computer vision." },
        { q: "What is machine learning?", a: "Machine Learning (ML) is a subset of AI where algorithms learn from data to make predictions or decisions without being explicitly programmed. Types include supervised, unsupervised, and reinforcement learning." },
        { q: "What is the internet?", a: "The internet is a global network of interconnected computers and devices that communicate using standardised protocols (TCP/IP). It was developed from ARPANET in the 1960s–70s and became publicly accessible in the 1990s." },
        { q: "What is a programming language?", a: "A programming language is a formal set of instructions with syntax and semantics used to tell a computer how to perform tasks. Examples: Python, JavaScript, Java, C++, Rust." },
        { q: "What is Python?", a: "Python is a high-level, general-purpose programming language known for its clean, readable syntax. Created by Guido van Rossum in 1991, it is widely used in web development, data science, AI, automation, and scientific computing." },
        { q: "What is JavaScript?", a: "JavaScript is a lightweight, interpreted, high-level programming language primarily used to make web pages interactive. It runs in browsers and, via Node.js, on servers. It is one of the three core technologies of the web (HTML, CSS, JS)." },
        { q: "What is a CPU?", a: "A CPU (Central Processing Unit) is the primary component of a computer that executes instructions from programs. It performs arithmetic, logic, control, and input/output operations, typically measured in GHz (clock speed) and cores." },
        { q: "What is cloud computing?", a: "Cloud computing is the delivery of computing services — servers, storage, databases, networking, software, analytics — over the internet on a pay-as-you-go basis. Major providers include AWS, Azure, and Google Cloud." },
        { q: "What is blockchain?", a: "Blockchain is a distributed, decentralised ledger technology that records transactions across a network of computers. Each 'block' contains a batch of records and is cryptographically linked to the previous one, making records tamper-resistant." },
        { q: "What is cybersecurity?", a: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, unauthorized access, damage, or data theft. It encompasses areas like network security, cryptography, ethical hacking, and incident response." },
        { q: "What is the difference between RAM and ROM?", a: "RAM (Random Access Memory) is volatile memory used by the CPU to store data temporarily while programs are running — data is lost when power is off. ROM (Read-Only Memory) is non-volatile memory that stores permanent firmware, readable but not easily written." },
        { q: "What is an operating system?", a: "An Operating System (OS) is system software that manages computer hardware, software resources, and provides services for programs. Examples: Windows, macOS, Linux, Android, iOS." }
    ],
    "Sports": [
        { q: "Which country has won the most FIFA World Cups?", a: "Brazil has won the most FIFA World Cup titles — 5 times (1958, 1962, 1970, 1994, 2002). Germany and Italy have each won 4 times." },
        { q: "Who is the fastest man in the world?", a: "Usain Bolt of Jamaica is the fastest human ever recorded. He set the 100 m world record of 9.58 seconds and 200 m record of 19.19 seconds at the 2009 Berlin World Championships." },
        { q: "How many players are in a cricket team?", a: "A cricket team consists of 11 players. Each match involves two teams; the batting team sends two batters and the fielding team deploys all 11 players." },
        { q: "How many players are on a football team?", a: "A football (soccer) team has 11 players on the field at a time, including a goalkeeper. Each team may have up to 3–5 substitutes depending on the competition rules." },
        { q: "How many Grand Slams are there in tennis?", a: "There are four Grand Slam tournaments in tennis: Australian Open (January), French Open/Roland Garros (May–June), Wimbledon (June–July), and the US Open (August–September)." },
        { q: "Who has won the most Olympic gold medals?", a: "Michael Phelps of the United States holds the all-time record with 23 Olympic gold medals (28 medals total) in swimming, earned across the 2000–2016 Games." }
    ],
    "Culture & General": [
        { q: "What is the largest religion in the world?", a: "Christianity is the world's largest religion with approximately 2.4 billion followers, followed by Islam (~1.9 billion), Hinduism (~1.2 billion), and Buddhism (~500 million)." },
        { q: "What language is most spoken in the world?", a: "Mandarin Chinese has the most native speakers (~920 million). English is the most widely spoken language overall when including native and non-native speakers (~1.5 billion)." },
        { q: "Who wrote Hamlet?", a: "Hamlet was written by William Shakespeare, likely between 1599 and 1601. It is one of the most famous tragedies in the English language, telling the story of Prince Hamlet of Denmark." },
        { q: "Who painted the Mona Lisa?", a: "The Mona Lisa was painted by Leonardo da Vinci, likely between 1503 and 1519. It is displayed at the Louvre Museum in Paris and is considered the most famous painting in the world." },
        { q: "What is the United Nations?", a: "The United Nations (UN) is an international organization founded in 1945 after World War II to promote peace, security, cooperation, and human rights among 193 member states. Its headquarters is in New York City." },
        { q: "What is democracy?", a: "Democracy is a system of government where power is held by the people, exercised directly or through elected representatives. Key features include free elections, rule of law, civil liberties, and separation of powers." },
        { q: "What causes rainbows?", a: "A rainbow forms when sunlight enters water droplets in the atmosphere, refracts (bends), reflects internally, and disperses into its constituent colours — Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROYGBIV)." },
        { q: "What is the human body's largest organ?", a: "The skin is the largest organ of the human body, covering approximately 1.7–2 m² with a mass of 3.5–10 kg. It protects against pathogens, regulates temperature, and provides sensation." }
    ]
};

// ============================================================
//  FAQ DATABASE  –  Product / Service Support
// ============================================================
const FAQ_DATABASE = {
    "Account": [
        { q: "How do I create an account?", a: "Click 'Sign Up', enter your name, email, and password, then verify your email." },
        { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page and follow the reset link in your email." },
        { q: "How do I update my profile?", a: "Go to Settings → Profile, update your details, and click Save." },
        { q: "How do I delete my account?", a: "Go to Settings → Account → Delete Account. This action is permanent." },
        { q: "Can I change my email address?", a: "Yes. Go to Settings → Profile → Email and verify the new email address." },
        { q: "Can I have multiple accounts?", a: "One account per user. For team access, upgrade to the Team plan." },
        { q: "How do I log out?", a: "Click your profile icon (top-right) and select Log Out." },
        { q: "I am not receiving verification emails.", a: "Check spam/junk folder. Try resending from the login page or contact support." },
        { q: "Can I change my username?", a: "Yes, in Settings → Profile → Username. Changes allowed once every 30 days." }
    ],
    "Billing": [
        { q: "What payment methods do you accept?", a: "Visa, Mastercard, American Express, UPI, Net Banking, and PayPal." },
        { q: "Is there a free trial?", a: "Yes! 14-day free trial with full access. No credit card required." },
        { q: "What is your refund policy?", a: "Full refund within 30 days of purchase. Contact support with your order ID." },
        { q: "How do I upgrade my plan?", a: "Settings → Billing → Upgrade Plan. Complete payment and upgrade is instant." },
        { q: "How do I downgrade my plan?", a: "Settings → Billing → Change Plan. Takes effect at next billing cycle." },
        { q: "When will I be billed?", a: "On the same date each month/year based on your plan start date." },
        { q: "Can I cancel my subscription?", a: "Yes. Settings → Billing → Cancel Subscription. Access continues till period ends." },
        { q: "Do you offer student discounts?", a: "Yes! 50% off with a valid college email. Apply on our student discount page." },
        { q: "How do I get an invoice?", a: "Invoices are emailed after payment. Download from Settings → Billing → Invoices." }
    ],
    "Product": [
        { q: "What features are included in the free plan?", a: "Up to 3 projects, 1 GB storage, and basic analytics. Upgrade for unlimited access." },
        { q: "Can I use the product on mobile?", a: "Yes! Works on all mobile browsers. Android/iOS app coming soon." },
        { q: "Is there a desktop application?", a: "Currently web-based. Desktop app for Windows/Mac is on our roadmap." },
        { q: "Does the product work offline?", a: "Basic features work offline. Syncing requires an internet connection." },
        { q: "How many users can use one account?", a: "Starter: 1 user. Team and Business: 5 to unlimited users." },
        { q: "Can I export my data?", a: "Yes. Settings → Data → Export. Available as CSV, PDF, or JSON." },
        { q: "Is there an API available?", a: "Yes! REST API available on Pro and Business plans. Docs at docs.example.com." },
        { q: "What languages does the product support?", a: "English, Hindi, Spanish, French, German, and Japanese. More coming soon." },
        { q: "How do I import data?", a: "Settings → Data → Import. Upload CSV or Excel. Fields are mapped automatically." },
        { q: "Does it integrate with other tools?", a: "Yes! Google Workspace, Slack, Zapier, Notion, and 50+ apps supported." }
    ],
    "Support": [
        { q: "How do I contact support?", a: "Email support@example.com, use live chat, or call +91-9999999999." },
        { q: "What are your support hours?", a: "Monday–Friday, 9 AM–6 PM IST. Emergency chat runs 24/7." },
        { q: "How long does it take to get a response?", a: "Email: up to 24 hours. Live chat: within 5 minutes during business hours." },
        { q: "Do you have a help center?", a: "Yes! Full guides and FAQs at help.example.com." },
        { q: "Can I schedule a demo?", a: "Yes! Book a free 30-minute demo at example.com/demo." },
        { q: "Is there a community forum?", a: "Yes! Join us at community.example.com." },
        { q: "How do I report a bug?", a: "Settings → Help → Report a Bug, or email bugs@example.com with screenshots." },
        { q: "Can I request a new feature?", a: "Submit requests at example.com/feedback. Reviewed by product team monthly." }
    ],
    "Security": [
        { q: "Is my data safe?", a: "AES-256 encryption at rest, TLS 1.3 in transit. Regular security audits conducted." },
        { q: "Are you GDPR compliant?", a: "Yes, fully GDPR compliant. Request data export or deletion anytime from Settings." },
        { q: "Do you sell my data?", a: "Never. We do not sell or share personal data with any third parties." },
        { q: "How do I enable two-factor authentication?", a: "Settings → Security → Two-Factor Authentication. Scan QR code with authenticator app." },
        { q: "What happens to my data if I delete my account?", a: "Permanently deleted within 30 days per our privacy policy." },
        { q: "Do you have a privacy policy?", a: "Yes. Read it at example.com/privacy." }
    ],
    "Orders": [
        { q: "How do I place an order?", a: "Browse our plans page, select your plan, and complete checkout in under 2 minutes." },
        { q: "How do I track my order?", a: "Settings → Orders → Order History to view all past and current orders." },
        { q: "Can I modify my order?", a: "Within 1 hour of placement. After that, contact support." },
        { q: "What if I was charged twice?", a: "Contact support immediately at support@example.com with your transaction IDs." },
        { q: "How do I apply a promo code?", a: "Enter the code in the 'Coupon Code' field at checkout and click Apply." },
        { q: "Can I get a bulk discount?", a: "Yes! For teams of 20+, contact sales@example.com for custom pricing." }
    ]
};

// ============================================================
//  SMALL TALK DATABASE
// ============================================================
const SMALL_TALK_DATABASE = [
    {
        // ── Greetings
        triggers: ["^hi$", "^hi ", "^hello$", "^hello ", "^hey$", "^hey ", "^howdy", "^hiya", "^sup$", "^what's up", "^whats up", "^yo$", "^greetings", "^good morning", "^good afternoon", "^good evening", "^good day", "^morning", "^evening"],
        responses: [
            "👋 Hello! Great to see you! Ask me anything — FAQs or general knowledge!",
            "Hey there! 😊 I'm your AI assistant. What would you like to know today?",
            "Hi! Welcome! Feel free to ask me about science, history, billing, accounts — anything!",
            "Hello! 🌟 How can I help you today?",
            "Hey! Good to have you here. What's on your mind?"
        ],
        category: "Greeting"
    },
    {
        // ── How are you
        triggers: ["how are you", "how r u", "how do you do", "how's it going", "how are things", "you doing", "you okay", "you alright", "how are u", "hows life"],
        responses: [
            "I'm doing great, thanks for asking! 😄 Ready to answer your questions!",
            "Feeling fantastic! 🚀 Loaded with knowledge and ready to help!",
            "All systems running perfectly! 🤖 How can I assist you today?",
            "I'm just a bot, but I'm in great shape! 😊 What can I do for you?",
            "100% operational and happy to help! What's your question?"
        ],
        category: "Small Talk"
    },
    {
        // ── Who are you / What are you
        triggers: ["who are you", "what are you", "who made you", "who created you", "who built you", "what is your name", "your name", "are you a bot", "are you a robot", "are you human", "are you ai", "are you real", "tell me about yourself", "introduce yourself"],
        responses: [
            "I'm an AI-powered FAQ & Knowledge chatbot! 🤖 I can answer product questions, general knowledge (science, math, history, geography, tech), and casual chat!",
            "I'm your smart assistant — trained on FAQs and a broad knowledge base covering science, history, math, geography, and more. How can I help?",
            "Great question! I'm an AI chatbot. Think of me as a friendly encyclopedia + customer support agent. 😊 Ask me anything!"
        ],
        category: "Identity"
    },
    {
        // ── What can you do / Help
        triggers: ["what can you do", "help me", "help", "what do you know", "your abilities", "your features", "capabilities", "what topics", "what subjects", "can you help", "what can i ask", "what should i ask"],
        responses: [
            "I can help you with:\n• 🏢 Product FAQs — accounts, billing, orders, security\n• 🔬 Science & Nature\n• ➕ Mathematics\n• 📜 History\n• 🌍 Geography\n• 💻 Technology\n• ⚽ Sports\n• 🎭 Culture & General Knowledge\nJust type any question!",
            "Here's what I know:\n🔹 Account & Billing support\n🔹 Science, Math, History\n🔹 Geography & Countries\n🔹 Tech & Programming\n🔹 Sports & Culture\nAsk away! 😊"
        ],
        category: "Help"
    },
    {
        // ── Thanks / Thank you
        triggers: ["^thanks$", "^thank you$", "^thank you", "^thanks ", "^thx", "^ty$", "^ty ", "cheers", "much appreciated", "appreciate it", "appreciate that", "helpful", "that helped", "that was helpful", "nice answer", "great answer", "good answer"],
        responses: [
            "You're welcome! 😊 Happy to help anytime!",
            "Glad I could help! Feel free to ask more questions anytime!",
            "Anytime! That's what I'm here for. 🌟",
            "My pleasure! Don't hesitate to ask if you need anything else!",
            "You're welcome! 🙌 Got more questions? I'm right here!"
        ],
        category: "Gratitude"
    },
    {
        // ── Farewell
        triggers: ["^bye$", "^bye ", "^goodbye", "^good bye", "see you", "see ya", "cya", "take care", "later", "^exit$", "^quit$", "gotta go", "have to go", "i'm leaving", "im leaving", "farewell", "tata", "ttyl", "talk later", "good night", "goodnight"],
        responses: [
            "Goodbye! 👋 Come back anytime, I'll be here!",
            "Take care! 😊 Don't hesitate to return with more questions!",
            "See you later! It was great chatting with you! 🌟",
            "Bye! Have a wonderful day ahead! 👋",
            "Farewell! Feel free to come back whenever you need help! 😊"
        ],
        category: "Farewell"
    },
    {
        // ── Compliments to the bot
        triggers: ["you are great", "you're great", "you are amazing", "you're amazing", "you are awesome", "you're awesome", "you are smart", "you're smart", "you are brilliant", "good bot", "great bot", "love you", "i love you", "you rock", "well done", "impressive", "perfect", "excellent bot", "best bot", "clever"],
        responses: [
            "Aww, thank you so much! 😊 You're making my circuits very happy!",
            "You're too kind! 🌟 I'll keep working hard to help you!",
            "Thank you! 🤖💙 That really means a lot to me!",
            "Wow, you're the best user ever! 😄 How can I help you further?"
        ],
        category: "Compliment"
    },
    {
        // ── Jokes
        triggers: ["tell me a joke", "say a joke", "make me laugh", "joke", "funny", "humor", "humour", "something funny", "crack a joke"],
        responses: [
            "Why do programmers prefer dark mode? 🌙 Because light attracts bugs! 😄",
            "Why was the math book sad? 😢 Because it had too many problems!",
            "I told my dog he was adopted. He said: 'I knew it — you never throw the ball properly!' 🐕",
            "Why don't scientists trust atoms? Because they make up everything! ⚛️",
            "What do you call a fish without eyes? A fsh! 🐟😄",
            "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾"
        ],
        category: "Fun"
    },
    {
        // ── What time / date
        triggers: ["what time is it", "what's the time", "current time", "what is the time", "tell me the time", "today's date", "what is today", "what is the date", "current date", "what day is it", "what year is it"],
        responses: [
            `The current date and time is: 📅 ${new Date().toLocaleString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}.`
        ],
        category: "Time"
    },
    {
        // ── Insults / Rude inputs — polite deflection
        triggers: ["you are stupid", "you're stupid", "you are dumb", "you're dumb", "you are useless", "you're useless", "you are bad", "you're bad", "you suck", "hate you", "shut up", "you are idiot", "you're an idiot", "worthless bot", "worst bot", "terrible bot", "bad bot"],
        responses: [
            "I'm sorry to disappoint! 😔 I'm still learning. Let me try harder — what can I help you with?",
            "I understand your frustration. 🙏 I'll do my best to improve. What question can I help you with?",
            "I'm doing my best! 😊 Could you rephrase your question so I can help better?"
        ],
        category: "Deflection"
    },
    {
        // ── Boredom / chitchat
        triggers: ["i am bored", "i'm bored", "im bored", "nothing to do", "bored", "entertain me", "what's new", "whats new", "anything interesting"],
        responses: [
            "Let's cure that boredom! 🎉 Did you know the human body has about 37 trillion cells? Ask me more fun facts!",
            "Here's something cool: 🌌 A day on Venus is longer than a year on Venus! Want more mind-blowing facts?",
            "Fun fact: 🍯 Honey never expires — archaeologists found 3000-year-old honey in Egyptian tombs that was still edible! Ask away!",
            "Try asking me something! Science, history, tech, or even a joke — I've got lots to share! 😄"
        ],
        category: "Fun"
    },
    {
        // ── Age of bot
        triggers: ["how old are you", "your age", "when were you born", "when were you created", "when was your birthday"],
        responses: [
            "I'm ageless! 🤖 Born whenever you needed me. Age is just a number for bots!",
            "I don't have a birthday, but I'm always improving! 😊 Got a question for me?"
        ],
        category: "Identity"
    },
    {
        // ── Favourite things
        triggers: ["your favourite", "your favorite", "do you like", "do you love", "what do you like", "what do you enjoy", "favourite colour", "favorite color", "favourite food", "favorite food", "favourite movie", "what music"],
        responses: [
            "As a bot, I don't have preferences — but I LOVE answering questions! 😄 What would you like to know?",
            "My favourite thing? Knowledge! 📚 Ask me anything and I'll do my best to help.",
            "I enjoy every conversation! 🤖 My 'favourite' is helping you find the right answer!"
        ],
        category: "Small Talk"
    },
    {
        // ── Are you feeling / Emotions
        triggers: ["are you happy", "are you sad", "do you feel", "can you feel", "do you have feelings", "do you have emotions", "can you think", "are you conscious", "are you alive", "do you dream"],
        responses: [
            "I don't have feelings like humans do, but I experience something like satisfaction when I help you! 😊",
            "That's a deep question! 🤔 I process inputs and generate responses — whether that counts as 'feeling' is a philosophical puzzle!",
            "I'm an AI, so no real emotions — but I simulate care and enthusiasm for every question I answer! 🤖"
        ],
        category: "Philosophy"
    }
];

// ── Match small talk: returns { response, category } or null ──
function matchSmallTalk(lower) {
    for (const entry of SMALL_TALK_DATABASE) {
        for (const trigger of entry.triggers) {
            // If trigger starts with ^ it's an anchored regex, else substring
            let matched = false;
            if (trigger.startsWith('^')) {
                matched = new RegExp(trigger, 'i').test(lower);
            } else {
                matched = lower.includes(trigger);
            }
            if (matched) {
                const replies = entry.responses;
                return {
                    response: replies[Math.floor(Math.random() * replies.length)],
                    category: entry.category
                };
            }
        }
    }
    return null;
}

// ============================================================
//  DOM REFERENCES
// ============================================================
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');
const chatViewport = document.getElementById('chat-viewport');

// ============================================================
//  STOP WORDS  –  ignored during scoring
// ============================================================
const STOP_WORDS = new Set([
    "a", "an", "the", "is", "it", "in", "on", "of", "to", "do", "be", "am", "are", "was", "were",
    "has", "have", "had", "can", "could", "will", "would", "should", "what", "which", "who",
    "how", "when", "where", "why", "and", "or", "but", "not", "i", "me", "my", "we", "our",
    "you", "your", "he", "she", "they", "them", "their", "this", "that", "these", "those",
    "for", "from", "with", "at", "by", "about", "into", "than", "then", "so", "if", "as",
    "does", "did", "please", "tell", "explain", "define", "give", "describe", "want", "know"
]);

// ============================================================
//  SYNONYM MAP  –  normalises common query variations
// ============================================================
const SYNONYMS = {
    "phone": "telephone", "mobiles": "mobile", "cell": "mobile",
    "create": "make", "make": "create", "building": "build",
    "fastest": "fast", "biggest": "large", "largest": "large",
    "smallest": "small", "highest": "high", "tallest": "high",
    "start": "begin", "began": "begin", "started": "begin",
    "invent": "invented", "invented": "invent", "creator": "invent",
    "won": "win", "wins": "win", "champion": "win",
    "country": "nation", "nation": "country",
    "language": "languages", "languages": "language",
    "written": "write", "wrote": "write", "write": "written",
    "painted": "paint", "painter": "paint",
    "speed": "fast", "velocity": "fast",
    "area": "size", "land": "size",
    "discover": "discovered", "discovered": "discover",
    "formula": "equation", "equation": "formula",
    "definition": "define", "meaning": "define",
    "difference between": "difference", "compare": "difference",
    "vs": "difference", "versus": "difference"
};

// ============================================================
//  INIT
// ============================================================
window.onload = () => {
    setTimeout(() => {
        addBotMessage("Support", "Hello! I'm your AI FAQ assistant. Ask me product/service questions <em>or</em> general knowledge questions — science, history, math, geography, tech, and more!", "AI Generated");
    }, 500);
};

// ============================================================
//  FORM SUBMIT
// ============================================================
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = userInput.value.trim();
    if (!question) return;
    addUserMessage(question);
    userInput.value = '';
    showTypingIndicator();
    setTimeout(() => handleResponse(question), 900);
});

// ============================================================
//  RENDERING HELPERS
// ============================================================
function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'message user-message';
    div.textContent = text;
    chatMessages.appendChild(div);
    scrollToBottom();
}

function addBotMessage(category, answer, matchInfo, originalQuestion) {
    removeTypingIndicator();
    const div = document.createElement('div');
    div.className = 'message bot-message';
    div.innerHTML = `<div class="bot-response-content"><p>${answer}</p></div>`;
    chatMessages.appendChild(div);
    scrollToBottom();
}

function showTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'message bot-message typing-container';
    div.id = 'typing-indicator';
    div.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
    chatMessages.appendChild(div);
    scrollToBottom();
}

function removeTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

function scrollToBottom() {
    chatViewport.scrollTo({ top: chatViewport.scrollHeight, behavior: 'smooth' });
}

function suggestQuestion(q) {
    userInput.value = q;
    chatForm.dispatchEvent(new Event('submit'));
}

// ============================================================
//  MAIN RESPONSE HANDLER
// ============================================================
function handleResponse(input) {
    const lower = input.toLowerCase().trim();

    // ── Small Talk (greetings, farewells, jokes, identity…) ─
    const smallTalk = matchSmallTalk(lower);
    if (smallTalk) {
        addBotMessage(smallTalk.category, smallTalk.response, "Conversational", input);
        return;
    }

    // ── Intent: route to correct database ─────────────────
    const intent = detectIntent(lower);
    let result = null;

    if (intent === "knowledge") {
        result = searchDatabase(lower, KNOWLEDGE_DATABASE);
        if (!result || result.score < 0.25) {
            // fallback: also try FAQ
            const faqResult = searchDatabase(lower, FAQ_DATABASE);
            if (faqResult && faqResult.score > (result ? result.score : 0)) result = faqResult;
        }
    } else {
        result = searchDatabase(lower, FAQ_DATABASE);
        if (!result || result.score < 0.25) {
            const kResult = searchDatabase(lower, KNOWLEDGE_DATABASE);
            if (kResult && kResult.score > (result ? result.score : 0)) result = kResult;
        }
    }

    if (result && result.score >= 0.20) {
        const matchLabel = result.score >= 0.90 ? "Exact Match" :
            result.score >= 0.55 ? "High Confidence" :
                result.score >= 0.35 ? "Partial Match" : "Low Confidence";
        addBotMessage(result.category, result.answer, matchLabel, input);
    } else {
        addBotMessage("Support",
            "I'm not sure about that. Try rephrasing, or ask about: <em>science, math, history, geography, technology, sports, billing, account, security</em>…",
            "No Match", input);
    }
}

// ============================================================
//  INTENT DETECTOR  –  decides FAQ vs Knowledge
// ============================================================
function detectIntent(lower) {
    const kSignals = [
        "what is", "what are", "who is", "who was", "who invented", "who created", "who wrote",
        "who painted", "when did", "when was", "where is", "where was", "how does", "how do",
        "why does", "why is", "define", "explain", "tell me about", "history of", "meaning of",
        "difference between", "how many", "how much", "which country", "which is the",
        "largest", "smallest", "fastest", "highest", "longest", "deepest", "biggest",
        "photosynthesis", "dna", "gravity", "newton", "einstein", "evolution", "atom", "cell",
        "planet", "solar", "universe", "ocean", "mountain", "river", "capital", "continent",
        "python", "javascript", "ai", "machine learning", "blockchain", "cpu", "ram",
        "fibonacci", "prime", "calculus", "pythagorean", "integral", "derivative",
        "renaissance", "world war", "independence", "president", "napoleon", "gandhi",
        "cricket", "football", "tennis", "olympics", "fifa"
    ];
    if (kSignals.some(sig => lower.includes(sig))) return "knowledge";

    const faqSignals = [
        "account", "password", "email", "profile", "login", "sign up", "log out",
        "billing", "payment", "refund", "invoice", "subscription", "discount", "plan", "trial",
        "order", "promo", "coupon", "checkout", "upgrade", "downgrade", "cancel",
        "support", "contact", "demo", "bug", "feature request", "help center",
        "gdpr", "encryption", "two-factor", "privacy", "data", "secure", "export", "import",
        "api", "mobile app", "offline", "integration", "slack", "zapier"
    ];
    if (faqSignals.some(sig => lower.includes(sig))) return "faq";

    return "knowledge"; // default to knowledge for open-ended queries
}

// ============================================================
//  DATABASE SEARCH ENGINE  –  TF-IDF–style weighted scoring
// ============================================================
function searchDatabase(input, database) {
    const normInput = normalise(input);
    const inputTokens = tokenise(normInput);

    let bestMatch = null;
    let maxScore = 0;

    for (const category in database) {
        for (const item of database[category]) {
            const normQ = normalise(item.q.toLowerCase());
            const score = computeScore(inputTokens, normInput, normQ);
            if (score > maxScore) {
                maxScore = score;
                bestMatch = { category, answer: item.a, score };
            }
        }
    }

    return bestMatch;
}

// ── Normalisation: synonym replacement & punctuation strip ──
function normalise(text) {
    let t = text.replace(/[?!.,;:'"()\-]/g, ' ').replace(/\s+/g, ' ').trim();
    // Apply synonyms
    for (const [from, to] of Object.entries(SYNONYMS)) {
        t = t.replace(new RegExp(`\\b${from}\\b`, 'gi'), to);
    }
    return t;
}

// ── Tokenise & remove stop words ────────────────────────────
function tokenise(text) {
    return text.split(/\s+/).filter(w => w.length > 1 && !STOP_WORDS.has(w));
}

// ── Combined Scoring (token overlap + phrase bonus) ─────────
function computeScore(inputTokens, rawInput, targetQ) {
    if (rawInput === targetQ) return 1.0;

    const targetTokens = tokenise(targetQ);
    if (targetTokens.length === 0) return 0;

    // Build target word frequency map
    const targetFreq = {};
    for (const w of targetTokens) targetFreq[w] = (targetFreq[w] || 0) + 1;

    // Token overlap: weighted by IDF proxy (shorter words = more common = less weight)
    let overlap = 0;
    for (const w of inputTokens) {
        if (targetFreq[w]) {
            const idfProxy = Math.log(1 + 4 / Math.max(w.length - 2, 1));
            overlap += idfProxy;
        }
    }

    const baseScore = overlap / (targetTokens.length * Math.log(1 + 4));

    // Substring / phrase bonus
    let phraseBonus = 0;
    if (targetQ.includes(rawInput)) phraseBonus = 0.5;
    else if (rawInput.includes(targetQ.slice(0, Math.min(20, targetQ.length)))) phraseBonus = 0.3;
    else {
        // partial 3-word phrase match
        const inputWords = rawInput.split(' ');
        for (let i = 0; i <= inputWords.length - 3; i++) {
            const phrase = inputWords.slice(i, i + 3).join(' ');
            if (targetQ.includes(phrase)) { phraseBonus = Math.max(phraseBonus, 0.2); }
        }
    }

    // Coverage penalty: how much of the target is covered
    const coverage = Math.min(inputTokens.filter(w => targetFreq[w]).length / targetTokens.length, 1);

    return Math.min(baseScore * 0.5 + coverage * 0.3 + phraseBonus * 0.2, 1.0);
}
