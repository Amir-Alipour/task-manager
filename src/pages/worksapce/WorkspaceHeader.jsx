function WorkspaceHeader() {
    return (
        <div className="col-12 h-full flex items-center justify-between">
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <h3>Team &nbsp; | &nbsp;</h3>
                </div>
                <div className="flex -space-x-2 overflow-hidden">
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                    />
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>
                <div className="hidden md:flex ml-4">
                    <button className="flex">
                        <p className="text-blue-300 mt-4">add member ..</p>
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
    );
}

export default WorkspaceHeader;
