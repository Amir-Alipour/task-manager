const badgeColors = {
    "UP TO DATE": "green",
    "NEEDS REVIEW": "red",
    "PROPOSED": "yellow",
    "UNDER REVIEW": "purple",
    "PENDING APPROVAL": "indigo",
    "APPROVED": "blue",
};

function TaskBadge({ badge }) {
    return (
        <div
            className={`bg-${badgeColors[badge]}-200 text-${badgeColors[badge]}-500 px-2 rounded-full`}
        >
            {badge}
        </div>
    );
}

export default TaskBadge;
