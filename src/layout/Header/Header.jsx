import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfile } from "../../store/profileSlice/profileActions";
import { selectProfile } from "../../store/profileSlice/profileSlice";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.profile.status);
    const profile = useSelector(selectProfile);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProfile());
        }
    }, [status, dispatch]);

    return (
        <div className="w-full h-14 bg-blue-500 px-3 flex items-center justify-between">
            <div className="flex items-center">
                <div className="flex">
                    <Link to="/">
                        <img
                            src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
                            alt="logo"
                            className="w-12 h-10 md:mr-2 ml-5"
                        />
                    </Link>
                    <h3 className="italic mt-1 text-white hidden md:block">
                        TASKO
                    </h3>
                </div>
                <div className="hidden md:block">
                    <Link
                        to="/"
                        className="ml-3 md:ml-12 text-white no-underline"
                    >
                        Worksapce
                    </Link>
                    <Link
                        to="/history"
                        className="ml-4 text-white no-underline"
                    >
                        History
                    </Link>
                </div>
                <div className="ml-7 md:ml-0">
                    <HeaderOptions />
                </div>
            </div>

            {profile.length > 0 ? (
                <div className="flex items-center">
                    <p className="text-white mr-3 mt-3">{profile[0].name}</p>
                    <img
                        src={profile[0].profile}
                        alt={`${profile[0].name} profile`}
                        className="w-10 h-10 rounded-full mr-2"
                    />
                </div>
            ) : null}
        </div>
    );
}

export default Header;
