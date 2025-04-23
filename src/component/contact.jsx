import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from './SendIcon';
import { CircularProgress, Snackbar, Alert } from '@mui/material';

const Contact = ({ isdarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      if (formData.message.length < 10) {
        throw new Error('Message must be at least 10 characters long');
      }

      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setNotification({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setNotification({
        open: true,
        message: err.message || 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  return (
    <>
      <section className={`text-gray-600 body-font relative ${isdarkMode ? 'text-gray-300' : ''}`}>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            {/* Left side map and contact info */}
            <div className={`lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ${isdarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9502310846997!2d73.91003397556928!3d18.62130816608857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7007ca391d7%3A0x9da4723c416a8ee5!2sNewton%20school%20of%20technology%20pune%20campus!5e0!3m2!1sen!2sin!4v1743999624433!5m2!1sen!2sin"
                    style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.6)' }}
                ></iframe>
                <div className={`relative flex flex-wrap py-6 rounded shadow-md z-10 ${isdarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="lg:w-1/2 px-6">
                        <h2 className={`title-font font-semibold tracking-widest text-xs ${isdarkMode ? 'text-white' : 'text-gray-900'}`}>ADDRESS</h2>
                        <p className={`mt-1 ${isdarkMode ? 'text-gray-300' : 'text-gray-600'}`}>NSTxADYPU, Pune,Maharastra, India - 412105</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className={`title-font font-semibold tracking-widest text-xs ${isdarkMode ? 'text-white' : 'text-gray-900'}`}>EMAIL</h2>
                            <a
                                    href="mailto:nitya@curiouscoder.live"
                                    className={`leading-relaxed break-all ${isdarkMode ? 'text-indigo-500 hover:text-indigo-400' : 'text-indigo-600 hover:text-indigo-800'}`}
                            >nitya@curiouscoder.live</a>
                    </div>

                </div>
            </div>

            {/* Right side form */}
            <div className={`lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-lg p-6 ${isdarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <h2 className={`text-center text-3xl mb-1 font-bold  title-font ${isdarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <label htmlFor="name" className={`leading-7 text-sm ${isdarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full rounded border focus:border-indigo-500 focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                                isdarkMode 
                                    ? 'bg-gray-800 border-gray-600 focus:ring-indigo-500 text-white' 
                                    : 'bg-gray-50 border-gray-300 focus:ring-indigo-200 text-gray-900'
                            }`}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className={`leading-7 text-sm ${isdarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full rounded border focus:border-indigo-500 focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                                isdarkMode 
                                    ? 'bg-gray-800 border-gray-600 focus:ring-indigo-500 text-white' 
                                    : 'bg-gray-50 border-gray-300 focus:ring-indigo-200 text-gray-900'
                            }`}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className={`leading-7 text-sm ${isdarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={`w-full rounded border focus:border-indigo-500 focus:ring-2 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${
                                isdarkMode 
                                    ? 'bg-gray-800 border-gray-600 focus:ring-indigo-500 text-white' 
                                    : 'bg-gray-50 border-gray-300 focus:ring-indigo-200 text-gray-900'
                            }`}
                        ></textarea>
                    </div>
                    
                    <div className="flex justify-center">
                        <Button 
                            variant="contained" 
                            endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                            disabled={isSubmitting}
                            type="submit"
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </Button>
                    </div>
                </form>
                <p className={`text-xs mt-3 ${isdarkMode ? 'text-gray-400' : 'text-gray-500'}`}>I'll get back to you as soon as possible.</p>
            </div>
        </div>
      </section>
      
      <Snackbar 
          open={notification.open} 
          autoHideDuration={6000} 
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
          <Alert 
              onClose={handleCloseNotification} 
              severity={notification.severity} 
              sx={{ width: '100%' }}
          >
              {notification.message}
          </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
