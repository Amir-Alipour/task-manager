import HeaderOptions from "./HeaderOptions";

function Header() {
    return (
        <div className="w-full h-14 bg-blue-500 px-5 flex items-center">
            <div className="flex">
                <img
                    src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
                    alt="logo"
                    className="w-12 h-10 mr-2"
                />
                <h3 className="italic text-white">TASKO</h3>
            </div>
            <div className="flex">
                <a href="/" className="ml-12 text-white no-underline">Worksapce</a>
                <a href="/" className="ml-4 text-white no-underline">Bookmark</a>
                <a href="/" className="ml-4 text-white no-underline">History</a>
            </div>
            <div>
            <HeaderOptions />
            </div>
        </div>
    );
}

export default Header;
