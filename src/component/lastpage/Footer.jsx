import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 relative">
      <img src="/shape-01.png" alt="Wave" className="absolute bottom-0 left-0 w-full opacity-30" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
            <ul className="flex space-x-4">
              <li><a href="https://www.linkedin.com/company/waysaheadglobal/mycompany/" target="_blank" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a></li>
              <li><a href="https://www.instagram.com/waysahead/" target="_blank" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a></li>
              <li><a href="https://www.facebook.com/waysahead" target="_blank" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a></li>
              <li><a href="https://x.com/WaysAhead" target="_blank" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a></li>
            </ul>
          </div>

          {[
            { title: "Company", links: ["About", "FAQ", "Contact"] },
            { title: "Services", links: ["Rapid Product Development", "Data Analytics", "AI as a service"] },
            { title: "Solution", links: ["BI Kiosk", "News & Media", "Blog/Vlog"] },
            { title: "More", links: ["Terms", "Privacy Policy", "HustleX 1.0 Results"] },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
          <h4>© 2025 Copyright <span className="text-white">WaysAhead Global</span></h4>
          <a href="https://www.waysaheadglobal.com/privacy-policy.html" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;