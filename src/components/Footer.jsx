import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white p-2  font-sans dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-center">
      
        <div className="flex flex-col p-2 gap-4">
          <div>
            <h1>Bizi sosial media hesablarından izləyin</h1>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="25"
              height="25"
              alt="Facebook"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="25"
              height="25"
              alt="Twitter"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="25"
              height="25"
              alt="Instagram"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              width="25"
              height="25"
              alt="GitHub"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="25"
              height="25"
              alt="Pinterest"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="25"
              height="25"
              alt="LinkedIn"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              width="25"
              height="25"
              alt="Dribbble"
            />
          </div>
        </div>
      </div>
      <p className="p-1 text-center text-xs sm:text-sm">
        © Go telecom. Bütün hüquqlar qorunur.
      </p>
    </footer>
  );
};

export default Footer;
