import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddMember from "../../components/addMember/AddMember";
import { fetchUsers } from "../../store/usersSlice/usersActions";
import TeamProfile from "./TeamProfile";

function WorkspaceHeader() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.users.status);
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchUsers());
        }
    }, [dispatch, status]);

    const handleOpenAddMemberModal = () => {
        setIsModalOpen((prev) => !prev);
        isModalOpen
            ? (document.querySelector("body").style.overflowY = "scroll")
            : (document.querySelector("body").style.overflowY = "hidden");
    };

    return (
        <>
            {status === "loading" ? null : (
                <>
                    {isModalOpen ? <AddMember func={handleOpenAddMemberModal} /> : null}
                    <div className="col-12 h-full flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="hidden md:flex">
                                <h3>Team &nbsp; | &nbsp;</h3>
                            </div>
                            <TeamProfile />
                            <div className="hidden md:flex ml-4">
                                <button
                                    className="flex"
                                    onClick={handleOpenAddMemberModal}
                                >
                                    <p className="text-blue-300 mt-4">
                                        add member ..
                                    </p>
                                </button>
                            </div>
                        </div>

                        <div>
                            <button className="bg-blue-500 p-2 text-white rounded shadow hover:bg-blue-400">
                                Add Task
                            </button>
                            <button className="border p-2 rounded ml-3 md:mx-3">
                                history
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default WorkspaceHeader;
