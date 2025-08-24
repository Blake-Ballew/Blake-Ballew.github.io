// EmailJS Integration for Portfolio Contact Form

// Initialize EmailJS when the page loads
window.initializeEmailJS = (userId) => {
    try {
        emailjs.init(userId);
        console.log('EmailJS initialized successfully');
        return true;
    } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
        return false;
    }
};

// Send email using EmailJS
window.sendEmail = async (serviceId, templateId, templateParams, userId) => {
    try {
        // Initialize EmailJS if not already done
        if (!window.emailjs) {
            throw new Error('EmailJS library not loaded');
        }

        // Send the email
        const response = await emailjs.send(serviceId, templateId, templateParams, userId);
        
        console.log('Email sent successfully:', response);
        return 'success';
    } catch (error) {
        console.error('Failed to send email:', error);
        return `error: ${error.message || 'Unknown error occurred'}`;
    }
};

// Validate EmailJS configuration
window.validateEmailJSConfig = (serviceId, templateId, userId) => {
    const missingFields = [];
    
    if (!serviceId || serviceId === 'YOUR_EMAILJS_SERVICE_ID') {
        missingFields.push('Service ID');
    }
    
    if (!templateId || templateId === 'YOUR_EMAILJS_TEMPLATE_ID') {
        missingFields.push('Template ID');
    }
    
    if (!userId || userId === 'YOUR_EMAILJS_USER_ID') {
        missingFields.push('User ID');
    }
    
    return {
        isValid: missingFields.length === 0,
        missingFields: missingFields
    };
};