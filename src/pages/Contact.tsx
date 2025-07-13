import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map EmailJS field names to formData state properties
    const fieldMapping: { [key: string]: string } = {
      'user_name': 'name',
      'user_email': 'email',
      'subject': 'subject',
      'message': 'message'
    };
    
    const stateField = fieldMapping[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateField]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          'service_s08h026', // Replace 'service_abc123' with your actual Service ID
          'template_p5ieyvo', // Replace 'template_xyz789' with your actual Template ID
          form.current,
          'YMLuNjuNHHVFYomWa' // Replace 'user_def456' with your actual Public Key
        );
        
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset form
        if (form.current) {
          form.current.reset();
        }
      } catch (error) {
        console.error('Email send failed:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: '23lp5@queensu.ca',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=23lp5@queensu.ca'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone (Canada)',
      value: '+1 437-830-9047',
      link: 'tel:+14378309047'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone (India)',
      value: '+91 8368788002',
      link: 'tel:+918368788002'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Kingston, ON, Canada',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Sauravyadav15'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saurabh-yadav-20b19b243/'
    }
  ];

  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
      </motion.div>

      <div className="grid grid-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card"
        >
          <h2>Send Me a Message</h2>
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What's this about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Your message..."
              />
            </div>
            
            <button 
              type="submit" 
              className="btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                Sorry! There was an error sending your message. Please try again or contact me directly at skyjnv124@gmail.com
              </div>
            )}
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card"
        >
          <h2>Contact Information</h2>
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  <a href={info.link}>{info.value}</a>
                </div>
              </div>
            ))}
          </div>

          <h3>Follow Me</h3>
          <div className="social-links-contact">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="card"
      >
        <h2>Let's Work Together</h2>
        <p>
          I'm currently available for freelance work and full-time opportunities. 
          Whether you have a project in mind or just want to chat about technology, 
          feel free to reach out. I'm always excited to hear about new opportunities 
          and interesting projects.
        </p>
        <div className="availability-status">
          <span className="status-indicator available"></span>
          <span>Available for new opportunities</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 