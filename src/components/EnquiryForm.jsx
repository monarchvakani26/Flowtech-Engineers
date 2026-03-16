import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const EnquiryForm = ({ prefilledProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productName: prefilledProduct,
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Map fields to match common EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      reply_to: formData.email,
      email: formData.email,
      phone_number: formData.phone,
      phone: formData.phone,
      company_name: formData.company,
      company: formData.company,
      interested_product: formData.productName,
      productName: formData.productName,
      message: formData.message
    };

    try {
      await emailjs.send(
        'service_0imnqtp',
        'template_gua8gok',
        templateParams,
        '0Eh8oB6WCRUpVkOvj'
      );
      
      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: '', email: '', phone: '', company: '', productName: prefilledProduct, message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Email JS Error:', error);
      setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again or contact us directly.' });
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
      <h3 className="text-2xl font-bold text-primary mb-6">Send an Enquiry</h3>
      
      {status.success && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 flex items-start rounded-md">
          <CheckCircle className="mr-3 shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-medium">Enquiry sent successfully!</p>
            <p className="text-sm">We will get back to you shortly.</p>
          </div>
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start rounded-md">
          <AlertCircle className="mr-3 shrink-0 mt-0.5" size={20} />
          <p>{status.error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary outline-none transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary outline-none transition-colors"
              placeholder="ABC Industries"
            />
          </div>
        </div>

        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-slate-700 mb-1">Interested Product</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            readOnly={!!prefilledProduct}
            className={`w-full px-4 py-2 border border-slate-300 rounded-lg outline-none transition-colors ${prefilledProduct ? 'bg-slate-50 text-slate-500' : 'focus:ring-secondary focus:border-secondary'}`}
            placeholder="E.g., Glass Tube Rotameter"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message <span className="text-red-500">*</span></label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary outline-none transition-colors resize-none"
            placeholder="Please provide details about your requirements, specifications, or applications..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 ${
            status.submitting ? 'bg-orange-400 cursor-not-allowed' : 'bg-accent hover:bg-orange-600'
          }`}
        >
          {status.submitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Submit Enquiry
              <Send size={18} className="ml-2" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
