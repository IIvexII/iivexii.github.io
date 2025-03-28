import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropletDropdown, Hamburger } from "../components";

export default function Header({ name, socialInfo, pageInfo }) {
  return (
    <header className="fixed z-10 py-3 px-8 pb-4 w-full flex justify-center items-center bg-white bg-opacity-95 firefox:bg-opacity-95">
      <div className="w-full flex justify-between items-center max-w-[1024px]">
        {/* Navigation Hamburger for mobiles */}
        <Hamburger pageInfo={pageInfo} />

        {/* My Name as Logo */}
        <a href="/" className="cursor-pointer text-center">
          <span className="text-4xl max-sm:text-3xl">{name}</span>
          <span className="text-6xl leading-[0]">.</span>
        </a>

        {/* Navigation icons */}
        <nav className="flex items-center px-8 space-x-8 text-xl max-sm:hidden">
          {pageInfo.map((page, index) => (
            <a
              href={page.link}
              key={index}
              className="group relative flex flex-col justify-center items-center py-3 px-3 hover:bg-black hover:text-white rounded-full transition-all duration-300"
            >
              <FontAwesomeIcon icon={page.icon} className="w-5" />
              <p className="group-hover:opacity-100 group-hover:visible opacity-0 invisible absolute translate-y-10 text-xs text-black bg-white px-3 py-1 border border-gray-300 rounded transition duration-300 ease-in-out">
                {page.name}
              </p>
            </a>
          ))}
        </nav>

        {/* Mobile Social Links button for mobile */}
        <DropletDropdown socialInfo={socialInfo} />
      </div>
    </header>
  );
}
