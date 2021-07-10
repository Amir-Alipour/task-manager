function ToDo() {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 h-full flex flex-column box-border p-2">
            <div>
                <div className="text-2xl font-semibold flex items-center justify-between">
                    <p>To Do</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
            </div>
            <div className="w-full bg-gray-100 h-full rounded-lg"></div>
        </div>
    );
}

export default ToDo;
