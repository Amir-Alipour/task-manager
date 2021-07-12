import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../utils/AxiosConfig";
import { selectProfile } from "../../store/profileSlice/profileSlice";
import { addNewTask } from "../../store/tasksSlice/tasksActions";
import { addHistory } from "../../store/historySlice/historyActions";

function AddTask({ func }) {
    const dispatch = useDispatch();
    const user = useSelector(selectProfile)[0];

    const [badges, setBadges] = useState([]);
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [description, setDescription] = useState("");
    const [badge, setBadge] = useState();

    const canAdd = () => {
        return [title, note, description, badge].every(Boolean);
    };

    useEffect(() => {
        Api.get("/badges").then((badges) => setBadges(badges));
    }, []);
    const badgeOptions = badges.map((badge) => (
        <option key={badge} value={badge}>{badge}</option>
    ));

    const handleAddTask = () => {
        if (canAdd()) {
            dispatch(
                addNewTask({
                    user: user.id,
                    title,
                    text: description,
                    note,
                    badge,
                })
            );

            dispatch(
                addHistory({
                    Text: "Added a Task in To Do column",
                    user: user.id,
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
                    className="bg-gray-100 rounded shadow-md box-border p-4"
                    style={{ height: "90vh", width: "80%" }}
                >
                    <div className="row">
                        <h3>Add Task ✍</h3>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 mt-3">
                            <label htmlFor="title">Task Title</label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="we need example Todo"
                                id="title"
                                type="text"
                                className="form-control shadow-none mt-2"
                            />
                        </div>

                        <div className="col-12 mt-3">
                            <label htmlFor="profile">Task Note</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="some NOTE for my teammate .."
                                id="profile"
                                type="text"
                                className="form-control shadow-none mt-2"
                            />
                        </div>

                        <div className="col-12 mt-3">
                            <label htmlFor="profile">
                                Complete Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="my complete description for have better concept for my task .."
                                id="profile"
                                type="text"
                                className="form-control shadow-none mt-2"
                                rows="5"
                            />
                        </div>

                        <div className="col-12 mt-3">
                            <label htmlFor="profile">Task Badge</label>
                            <select
                                value={badge}
                                onChange={(e) => setBadge(e.target.value)}
                                placeholder="my complete description for have better concept for my task .."
                                id="profile"
                                className="form-control shadow-none mt-2"
                            >
                                <option>select badge</option>
                                {badgeOptions}
                            </select>
                        </div>
                    </div>

                    <div className="row mt-5 float-left">
                        <div className="col-6">
                            <button
                                className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-400"
                                onClick={handleAddTask}
                            >
                                Add
                            </button>
                        </div>
                        <div className="col-6">
                            <button
                                className="p-2 px-3 -ml-1 border-1 border-red-500 text-red-500 rounded"
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

export default AddTask;
