import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61579403515026",
    twitter: "https://www.twitter.com/yourhandle",
    instagram: "https://www.instagram.com/avanicsoft_technologies/",
    linkedin: "https://www.linkedin.com/company/yourcompany"
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-purple-500 text-sm uppercase tracking-wider mb-4">Let's Discuss</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            You Have Questions and We<br />
            Have Answers
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <p className="text-gray-300 mb-2">inquiry@AvanicSoft.com</p>
              <p className="text-purple-500 text-sm">General Enquiries</p>
            </div>

            <div>
              <p className="text-gray-300 mb-2">support@AvanicSoft.com</p>
              <p className="text-purple-500 text-sm">Service Complaint</p>
            </div>

            <div className="flex space-x-4">
              <div 
                onClick={() => handleSocialClick('facebook')}
                className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
              >
                <Facebook size={20} />
              </div>
              <div 
                onClick={() => handleSocialClick('twitter')}
                className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
              >
                <Twitter size={20} />
              </div>
              <div 
                onClick={() => handleSocialClick('instagram')}
                className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
              >
                <Instagram size={20} />
              </div>
              <div 
                onClick={() => handleSocialClick('linkedin')}
                className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
              >
                <Linkedin size={20} />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-gray-300 text-sm leading-relaxed">
                AvanicSoft Technologies Inc. Ibn-Al-haytam block. Sector<br />
                H10, walking distance from Police line, Near to Air univ<br />
                Block 'C' IIUI, 44360, Islamabad, Pakistan.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white mb-1">200+</p>
              <p className="text-purple-500 text-sm">Customers</p>
              <p className="text-gray-400 text-xs">Increased from 2025</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Ready to talk with us?</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-800">
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-purple-500 transition-colors">About</a></li>
              <li><a href="/news" className="hover:text-purple-500 transition-colors">News</a></li>
              <li><a href="/pricing" className="hover:text-purple-500 transition-colors">Pricing</a></li>
              <li><a href="/team" className="hover:text-purple-500 transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/blog" className="hover:text-purple-500 transition-colors">Blog</a></li>
              <li><a href="/services" className="hover:text-purple-500 transition-colors">Service</a></li>
              <li><a href="/faq" className="hover:text-purple-500 transition-colors">FAQ</a></li>
              <li><a href="/testimonials" className="hover:text-purple-500 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Link</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/help" className="hover:text-purple-500 transition-colors">Help Center</a></li>
              <li><a href="/knowledge-base" className="hover:text-purple-500 transition-colors">Knowledge base</a></li>
              <li><a href="/contact" className="hover:text-purple-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-400">Powered By</span>
            <span className="text-white font-medium">AvanicSoft Technologies</span>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center ml-4">
              <span className="text-gray-900 font-bold text-xs">avs</span>
            </div>
          </div>
          
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="/privacy" className="hover:text-purple-500 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-purple-500 transition-colors">Terms of Use</a>
            <a href="/gdpr" className="hover:text-purple-500 transition-colors">GDPR</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;