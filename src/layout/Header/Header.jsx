import { Link } from "react-router-dom";
import HeaderOptions from "./HeaderOptions";

function Header() {
    return (
        <div className="w-full h-14 bg-blue-500 px-3 flex items-center">
            <div className="flex">
                <img
                    src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
                    alt="logo"
                    className="w-12 h-10 md:mr-2 ml-5"
                />
                <h3 className="italic mt-1 text-white hidden md:block">
                    TASKO
                </h3>
            </div>
            <div className="hidden md:block">
                <Link to="/" className="ml-3 md:ml-12 text-white no-underline">
                    Worksapce
                </Link>
                <Link to="/history" className="ml-4 text-white no-underline">
                    History
                </Link>
            </div>
            <div className="ml-7 md:ml-0">
                <HeaderOptions />
            </div>
        </div>
    );
}

export default Header;
