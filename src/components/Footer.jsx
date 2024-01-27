import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a
            href="mailto:your-anirudhvats975@gmail.com"
            className="hover:text-gray-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/anirudh-vats-3817141b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AnirudhVats975"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/anirudhsharma975/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://anirudhvats.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            Portfolio
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Anirudh vats. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
