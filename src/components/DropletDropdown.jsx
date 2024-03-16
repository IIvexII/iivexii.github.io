import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DropletDropdown({ className, socialInfo }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className={`relative ${className}`}>
      {/* Button to show drop down */}
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="bg-black text-base py-1 px-5 text-white rounded-full cursor-pointer hover:bg-slate-800 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faLink} className="w-5" />
      </div>

      {/* Dropdown that will be show after button is clicked */}
      <div
        className={`absolute top-0 left-[10px] mt-10 transition duration-500  ${
          showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col space-y-2">
          {socialInfo.map((social, index) => (
            // show abbrevation via tag
            <abbr
              key={index}
              title={social.name}
              className="py-3 px-3 rounded-full bg-white text-black border border-slate-700 shadow-lg hover:bg-black hover:text-white transition duration-500 ease-in-out bg-opacity-90"
            >
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="flex items-center justify-center"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </abbr>
          ))}

          {/* Close button */}
          <abbr
            title="Close"
            onClick={() => setShowDropdown(!showDropdown)}
            className="py-3 px-3 rounded-full bg-black text-white border border-slate-700 shadow-lg hover:bg-red-700 hover:text-white transition duration-500 ease-in-out bg-opacity-80"
          >
            <a className="flex items-center justify-center">
              <FontAwesomeIcon icon={faXmark} className="w-4" />
            </a>
          </abbr>
        </div>
      </div>
    </nav>
  );
}
