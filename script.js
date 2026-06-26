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

const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');
const chatViewport = document.getElementById('chat-viewport');

// Initial Greeting
window.onload = () => {
    setTimeout(() => {
        addBotMessage("Support", "Hello! I'm your AI FAQ assistant. How can I help you today?", "Match: AI Generated");
    }, 500);
};

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = userInput.value.trim();
    if (!question) return;

    addUserMessage(question);
    userInput.value = '';

    // Simulate thinking
    showTypingIndicator();

    setTimeout(() => {
        handleResponse(question);
    }, 1000);
});

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

    // Formatting to match requested structure
    div.innerHTML = `
        <div class="bot-response-content">
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Answer:</strong> ${answer}</p>
            <p><strong>Match:</strong> ${matchInfo}</p>
            ${originalQuestion ? `<p class="orig-q"><em>User question: "${originalQuestion}"</em></p>` : ''}
        </div>
    `;

    chatMessages.appendChild(div);
    scrollToBottom();
}

function showTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'message bot-message typing-container';
    div.id = 'typing-indicator';
    div.innerHTML = `
        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatMessages.appendChild(div);
    scrollToBottom();
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

function scrollToBottom() {
    chatViewport.scrollTo({
        top: chatViewport.scrollHeight,
        behavior: 'smooth'
    });
}

function suggestQuestion(q) {
    userInput.value = q;
    chatForm.dispatchEvent(new Event('submit'));
}

function handleResponse(input) {
    const lowerInput = input.toLowerCase();

    // 1. Handle Greetings
    if (["hi", "hello", "hey", "greetings"].some(g => lowerInput.includes(g))) {
        addBotMessage("Support", "Warm greetings! I am here to help you with any questions regarding our services. What can I assist you with today?", "AI Generated", input);
        return;
    }

    // 2. Handle Farewells
    if (["bye", "thanks", "thank you", "exit"].some(f => lowerInput.includes(f))) {
        addBotMessage("Support", "You're very welcome! If you have any more questions, feel free to ask. Have a great day!", "AI Generated", input);
        return;
    }

    // 3. Search Database
    let bestMatch = null;
    let maxScore = 0;
    let matchType = "Partial";

    for (const category in FAQ_DATABASE) {
        for (const item of FAQ_DATABASE[category]) {
            const score = calculateMatchScore(lowerInput, item.q.toLowerCase());

            if (score > maxScore) {
                maxScore = score;
                bestMatch = { category, ...item };
            }
        }
    }

    // Logic for Exact vs Partial
    if (maxScore > 0.95) {
        matchType = "Exact";
    }

    if (maxScore > 0.3) {
        addBotMessage(bestMatch.category, bestMatch.a, matchType, input);
    } else {
        // 4. Default Case
        addBotMessage("Support", "I don't have that info. Please contact support@example.com or call +91-9999999999.", "AI Generated", input);
    }
}

// Simple word-based similarity score
function calculateMatchScore(input, target) {
    if (input === target) return 1.0;

    const inputWords = input.split(/\s+/);
    const targetWords = target.split(/\s+/);

    let matches = 0;
    inputWords.forEach(word => {
        if (word.length > 2 && target.includes(word)) {
            matches++;
        }
    });

    return matches / targetWords.length;
}
