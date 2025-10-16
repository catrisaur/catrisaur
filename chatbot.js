// Ethics and Compliance Knowledge Base
const knowledgeBase = {
    codeOfConduct: {
        keywords: ['code of conduct', 'conduct', 'behavior', 'workplace behavior', 'professional conduct'],
        response: `Our Code of Conduct outlines expected behaviors for all employees:

• Treat everyone with respect and dignity
• Maintain professional behavior at all times
• Foster an inclusive and diverse workplace
• Act with integrity and honesty
• Protect company and customer information
• Avoid conflicts of interest
• Report ethical concerns promptly

All employees are required to read, understand, and comply with our Code of Conduct. Violations may result in disciplinary action, up to and including termination.`
    },
    
    dataPrivacy: {
        keywords: ['data privacy', 'privacy', 'gdpr', 'personal data', 'data protection', 'confidential', 'pii', 'personally identifiable'],
        response: `Our Data Privacy Policy ensures protection of personal information:

• Collect only necessary data for legitimate purposes
• Secure all personal and sensitive data appropriately
• Never share customer data without authorization
• Follow GDPR, CCPA, and other applicable regulations
• Report data breaches immediately to security team
• Use encryption for sensitive data transmission
• Delete data when no longer needed
• Obtain consent before collecting personal information

For questions, contact: privacy@company.com`
    },
    
    antiCorruption: {
        keywords: ['corruption', 'bribery', 'bribe', 'kickback', 'gift', 'gifts', 'entertainment', 'anti-corruption'],
        response: `Our Anti-Corruption and Bribery Policy prohibits:

• Offering or accepting bribes or kickbacks
• Providing improper gifts or entertainment
• Facilitating payments to government officials
• Using third parties to circumvent policies

Guidelines for gifts and entertainment:
• Must be reasonable, infrequent, and legal
• Cannot influence business decisions
• Gifts over $100 must be reported to manager
• Government officials: Maximum $25 value
• Always maintain transparency

Report any suspected corruption to: ethics@company.com`
    },
    
    conflictOfInterest: {
        keywords: ['conflict of interest', 'conflict', 'personal interest', 'outside business', 'financial interest', 'relationship'],
        response: `Conflict of Interest Policy requires disclosure of:

• Financial interests in competitors or vendors
• Outside employment or business activities
• Personal relationships with vendors/competitors
• Family members working for business partners
• Serving on boards of other organizations

How to handle conflicts:
1. Disclose potential conflicts to your manager
2. Complete the Conflict of Interest form
3. Recuse yourself from related decisions
4. Seek guidance from Ethics team when uncertain

Contact ethics@company.com for disclosure forms.`
    },
    
    workplaceSafety: {
        keywords: ['safety', 'workplace safety', 'health', 'hazard', 'accident', 'injury', 'emergency'],
        response: `Workplace Safety is our top priority:

Employee responsibilities:
• Follow all safety procedures and guidelines
• Use required safety equipment
• Report unsafe conditions immediately
• Attend mandatory safety training
• Never work under influence of alcohol/drugs

In case of emergency:
• Medical emergency: Call 911
• Fire: Evacuate and call emergency services
• Safety concerns: Contact safety@company.com
• Report all accidents/injuries to HR immediately

Your safety matters - speak up about any concerns!`
    },
    
    reportingViolations: {
        keywords: ['report', 'reporting', 'violation', 'hotline', 'whistleblow', 'concern', 'complaint', 'ethics line'],
        response: `How to Report Violations and Concerns:

Multiple reporting channels available:
• Ethics Hotline: 1-800-XXX-XXXX (24/7, anonymous)
• Email: ethics@company.com
• Online: Submit via ethics portal
• Manager or HR representative
• Legal Department: legal@company.com

What to report:
• Policy violations
• Ethical concerns
• Fraud or theft
• Discrimination or harassment
• Safety hazards
• Data breaches

We prohibit retaliation against anyone who reports concerns in good faith. All reports are investigated promptly and confidentially.`
    },
    
    harassment: {
        keywords: ['harassment', 'harass', 'discrimination', 'discriminate', 'hostile', 'sexual harassment', 'bullying'],
        response: `Zero Tolerance for Harassment and Discrimination:

Prohibited behaviors include:
• Sexual harassment or unwelcome advances
• Discrimination based on protected characteristics
• Bullying or intimidating behavior
• Hostile work environment creation
• Retaliation against complainants

Protected characteristics:
• Race, color, national origin
• Gender, gender identity, sexual orientation
• Religion, age, disability
• Pregnancy, veteran status

Report immediately:
• HR Department: hr@company.com
• Ethics Hotline: 1-800-XXX-XXXX
• Your manager or any HR representative

All complaints are investigated promptly and confidentially.`
    },
    
    socialMedia: {
        keywords: ['social media', 'social', 'facebook', 'twitter', 'linkedin', 'online', 'posting'],
        response: `Social Media Policy Guidelines:

When posting online:
• Don't disclose confidential company information
• Don't speak on behalf of the company (unless authorized)
• Respect copyright and trademark laws
• Be respectful and professional
• Include disclaimer if discussing work-related topics
• Think before you post - content is permanent

Acceptable:
• Sharing company public announcements
• Professional networking on LinkedIn
• Celebrating team achievements (with permission)

Not acceptable:
• Revealing trade secrets or strategies
• Disparaging company, colleagues, or customers
• Posting offensive or discriminatory content

Questions? Contact: communications@company.com`
    },
    
    intellectualProperty: {
        keywords: ['intellectual property', 'ip', 'copyright', 'trademark', 'patent', 'trade secret', 'proprietary'],
        response: `Intellectual Property (IP) Protection:

Company IP includes:
• Software code and algorithms
• Product designs and specifications
• Business strategies and plans
• Customer and vendor lists
• Marketing materials and branding
• Research and development

Your responsibilities:
• Protect all company IP and trade secrets
• Don't use company IP for personal projects
• Report IP infringement immediately
• Respect third-party IP rights
• Sign and comply with IP agreements

When you leave:
• Return all company property and files
• Don't take confidential information
• Continue to protect trade secrets

Contact: legal@company.com for IP questions.`
    },
    
    compliance: {
        keywords: ['compliance', 'regulation', 'law', 'legal requirement', 'regulatory'],
        response: `Compliance with Laws and Regulations:

We comply with all applicable laws including:
• Employment and labor laws
• Environmental regulations
• Tax laws and reporting requirements
• Industry-specific regulations
• International trade laws
• Securities regulations

Your role in compliance:
• Complete required compliance training
• Follow all policies and procedures
• Speak up when you see violations
• Seek guidance when uncertain
• Maintain accurate records

Non-compliance can result in:
• Personal liability
• Company penalties and fines
• Loss of licenses or contracts
• Reputational damage

Questions? Contact: compliance@company.com`
    }
};

// Chatbot class
class EthicsComplianceBot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.quickActionButtons = document.querySelectorAll('.quick-action-btn');
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Send button click
        this.sendButton.addEventListener('click', () => this.handleUserMessage());
        
        // Enter key press
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserMessage();
            }
        });
        
        // Quick action buttons
        this.quickActionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const question = button.getAttribute('data-question');
                this.userInput.value = question;
                this.handleUserMessage();
            });
        });
    }
    
    handleUserMessage() {
        const message = this.userInput.value.trim();
        
        if (!message) return;
        
        // Display user message
        this.addMessage(message, 'user');
        
        // Clear input
        this.userInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate and display bot response after a delay
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000);
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        // Convert newlines to <br> and preserve formatting
        const formattedText = text.replace(/\n/g, '<br>');
        contentDiv.innerHTML = formattedText;
        
        messageDiv.appendChild(contentDiv);
        this.chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="message-content typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        this.chatMessages.appendChild(typingDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    removeTypingIndicator() {
        const typingMessage = this.chatMessages.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }
    
    generateResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Check for greetings
        if (this.isGreeting(lowerMessage)) {
            return this.getGreetingResponse();
        }
        
        // Check for thanks
        if (this.isThanks(lowerMessage)) {
            return "You're welcome! Feel free to ask if you have any other questions about ethics or compliance policies.";
        }
        
        // Search knowledge base
        let bestMatch = null;
        let highestScore = 0;
        
        for (const [key, value] of Object.entries(knowledgeBase)) {
            const score = this.calculateMatchScore(lowerMessage, value.keywords);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = value;
            }
        }
        
        // Return response if match found
        if (bestMatch && highestScore > 0) {
            return bestMatch.response;
        }
        
        // Default response if no match
        return this.getDefaultResponse();
    }
    
    calculateMatchScore(message, keywords) {
        let score = 0;
        keywords.forEach(keyword => {
            if (message.includes(keyword)) {
                score += keyword.split(' ').length; // Longer matches get higher scores
            }
        });
        return score;
    }
    
    isGreeting(message) {
        const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'];
        return greetings.some(greeting => message.includes(greeting));
    }
    
    isThanks(message) {
        const thanks = ['thank', 'thanks', 'appreciate', 'grateful'];
        return thanks.some(thank => message.includes(thank));
    }
    
    getGreetingResponse() {
        const responses = [
            "Hello! I'm here to help with ethics and compliance questions. What would you like to know?",
            "Hi there! How can I assist you with ethics and compliance policies today?",
            "Greetings! I'm your Ethics & Compliance Assistant. What questions do you have?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    getDefaultResponse() {
        return `I'm not sure I understand your question. I can help you with:

• Code of Conduct
• Data Privacy & Protection
• Anti-Corruption & Bribery
• Conflict of Interest
• Workplace Safety
• Reporting Violations
• Harassment & Discrimination
• Social Media Policy
• Intellectual Property
• Compliance & Regulations

Please try rephrasing your question, or click one of the quick action buttons below.`;
    }
}

// Initialize the chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EthicsComplianceBot();
});
