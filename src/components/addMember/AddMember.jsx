function AddMember({ func }) {
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
                                placeholder="David"
                                id="username"
                                type="text"
                                className="form-control shadow-none mt-2"
                            />
                        </div>
                        <div className="col-12 mt-4">
                            <label htmlFor="profile">Profile</label>
                            <input
                                placeholder="URL"
                                id="profile"
                                type="text"
                                className="form-control shadow-none mt-2"
                            />
                        </div>
                    </div>
                    <div className="row mt-5 float-left">
                        <div className="col-6">
                            <button className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-400">
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
