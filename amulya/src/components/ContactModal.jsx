import React, { useEffect, useState } from 'react';
import { X, Mail, Phone, User, MessageCircle, Send, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContactModal = ({ isOpen, onClose }) => {
  const {darkMode} = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    }, 2000);
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const InputWrapper = ({ icon: Icon, children, label }) => (
    <div className="space-y-2">
      <label className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {label}
      </label>
      <div className="relative group">
        <div className="absolute z-10 -translate-y-1/2 left-4 top-1/2">
          <Icon className={`w-5 h-5 transition-colors duration-200 ${
            darkMode 
              ? 'text-gray-500 group-focus-within:text-blue-400' 
              : 'text-gray-400 group-focus-within:text-blue-600'
          }`} />
        </div>
        {children}
      </div>
    </div>
  );

  const inputClasses = `
    w-full pl-12 pr-4 py-3.5 rounded-xl border-2 outline-none transition-all duration-300 
    text-base font-medium backdrop-blur-sm
    ${darkMode 
      ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 hover:border-gray-600 focus:border-blue-500 focus:bg-gray-800/70' 
      : 'bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:border-blue-500 focus:bg-white/80'
    }
  `;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 transition-opacity duration-300 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex items-center justify-center min-h-full p-4 sm:p-6 lg:p-8">
        <div 
          className={`
            relative w-full max-w-md transform rounded-3xl p-8 shadow-2xl transition-all duration-300
            ${darkMode 
              ? 'bg-gray-900/95 backdrop-blur-xl border border-gray-800/50' 
              : 'bg-white/95 backdrop-blur-xl border border-gray-200/50'
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`
              absolute top-6 right-6 p-2 rounded-xl transition-all duration-300
              ${darkMode 
                ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
              }
            `}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success State */}
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-500/25">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Message Sent!
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Thank you for reaching out. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 shadow-lg rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-blue-500/25">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Form */}
              <div className="space-y-3">
                <InputWrapper icon={User} label="Full Name">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="Enter your full name"
                    required
                  />
                </InputWrapper>

                <InputWrapper icon={Mail} label="Email Address">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="Enter your email address"
                    required
                  />
                </InputWrapper>

                {/* <InputWrapper icon={Phone} label="Phone Number">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="Enter your phone number"
                  />
                </InputWrapper> */}

                <InputWrapper icon={MessageCircle} label="Message">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </InputWrapper>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`
                    group relative w-full py-3.5 px-6 rounded-xl font-semibold text-base transition-all duration-300 
                    flex items-center justify-center space-x-3 shadow-lg overflow-hidden
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-500 hover:via-blue-600 hover:to-purple-600 text-white transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 active:scale-[0.98]'
                    }
                  `}
                >
                  <div className={`
                    absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] 
                    ${!isSubmitting ? 'group-hover:translate-x-[100%] transition-transform duration-700' : ''}
                  `} />
                  
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 rounded-full border-white/30 border-t-white animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;