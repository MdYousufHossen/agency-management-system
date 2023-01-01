declare interface taskType {
    author: userType;
    _id: String;
    description: String;
    team: {
        name: String;
        id: String;
    };
    project: {
        name: String;
        id: String;
    };
    status: "Backlog" | "Ready" | "Doing" | "Review" | "Blocked" | "Done";
    createdAt: String;
    updatedAt: String;
}

declare interface TaskTypes {
    data: taskType[];
}
declare interface TaskResType {
    data: taskType;
}

declare interface updateTaskType {
    data: { status: String };
    id: String;
}
