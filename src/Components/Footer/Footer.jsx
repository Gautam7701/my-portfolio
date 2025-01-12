// import React from 'react'
// import "./Footer.css"

// const Footer = () => {
//   return (
//     <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
//       <div className="text-white-500 flex gap-2">
//         <p>Terms & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>
//       </div>

//       <div className="flex gap-3">
//         <div className="social-icon">
//           <img src="/github.png" alt="github" className="w-8 h-8 object-cover" />
//         </div>
//         <div className="social-icon">
//           <img src="/linkedin.jpg" alt="linkedin" className="w-8 h-8 object-cover" />
//         </div>
//         <div className="social-icon">
//           <img src="/instagram.png" alt="instagram" className="w-8 h-8 object-contain" />
//         </div>
//       </div>

//       <p className="text-white-500">© 2024 Gautam Gupta. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/Gautam7701"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/github.png" alt="GitHub" className="w-8 h-8 object-cover" />
        </a>
        <a
          href="https://www.linkedin.com/in/gautam7701/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/linkedin.jpg"
            alt="LinkedIn"
            className="w-8 h-8 object-cover"
          />
        </a>
        <a
          href="https://www.instagram.com/gautam_gup_26/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-8 h-8 object-contain"
          />
        </a>
      </div>

      <p className="text-white-500">© 2024 Gautam Gupta. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
