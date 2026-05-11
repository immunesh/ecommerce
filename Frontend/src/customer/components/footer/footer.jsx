import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Company',
      links: ['About', 'Blog', 'Jobs', 'Press', 'Partners'],
    },
    {
      title: 'Solutions',
      links: ['Marketing', 'Analytics', 'Commerce', 'Insights', 'Support'],
    },
    {
      title: 'Documentation',
      links: ['Guides', 'API Status'],
    },
    {
      title: 'Legal',
      links: ['Claim', 'Privacy', 'Terms'],
    },
  ];

  return (
    <footer className="bg-black text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Credits (Border Removed) */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>© 2023 My Company. All rights reserved.</p>
          <p>Made with love by Me.</p>
          <p>
            Icons made by{' '}
            <a href="https://freepik.com" className="hover:underline">Freepik</a> 
            {' '}from{' '}
            <a href="https://flaticon.com" className="hover:underline">www.flaticon.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
