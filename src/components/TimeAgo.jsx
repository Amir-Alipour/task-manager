import moment from "moment";

function TimeAgo({ date }) {
    const momentDate = moment(date);

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <p title={momentDate.format()} className="ml-1">{momentDate.fromNow()}</p>
        </>
    );
}

export default TimeAgo;
