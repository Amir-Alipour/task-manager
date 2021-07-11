import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../store/usersSlice/usersActions";

function AddMember({ func }) {
    const [username, setUsername] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const canAdd = () => {
        return [username, profileUrl].every(Boolean);
    };

    const dispatch = useDispatch();

    const handleAddNewMember = () => {
        if (canAdd()) {
            dispatch(
                addNewUser({
                    name: username,
                    profile: profileUrl,
                })
            );
            func();
        } else {
            return;
        }
    };

    return (
        <div className="z-50 h-screen absolute top-0 bg-black bg-opacity-50 -left-2">
            <div className="container py-10 flex items-center justify-center">
                <div
                    className="bg-gray-100 rounded shadow box-border p-4 mt-5"
                    style={{ height: "50vh", width: "60%" }}
                >
                    <div className="row mt-5">
                        <h3>Add Member 👨‍💻</h3>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 mt-2">
                            <label htmlFor="username">Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="David"
                                id="username"
                                type="text"
                                className="form-control shadow-none mt-2"
                            />
                        </div>
                        <div className="col-12 mt-4">
                            <label htmlFor="profile">Profile</label>
                            <input
                                value={profileUrl}
                                onChange={(e) => setProfileUrl(e.target.value)}
                                placeholder="URL"
                                id="profile"
                                type="text"
                                className="form-control shadow-none mt-2"
                            />
                        </div>
                    </div>
                    <div className="row mt-5 float-left">
                        <div className="col-6">
                            <button
                                className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-400"
                                onClick={handleAddNewMember}
                            >
                                Add
                            </button>
                        </div>
                        <div className="col-6">
                            <button
                                className="p-2 px-4 -ml-3 border-1 border-red-500 text-red-500 rounded"
                                onClick={() => func()}
                            >
                                cancle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMember;
