import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-grey-200 shadow-lg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Support</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="mb-2">
                <a href="mailto:support@example.com" className="hover:underline">support@example.com</a>
              </li>
              <li className="mb-2">
                <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Live Chat</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;