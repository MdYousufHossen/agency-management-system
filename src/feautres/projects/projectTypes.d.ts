declare interface projectType {
    author: userType;
    _id: String;
    name: String;
    description: String;
    team: {
        name: String;
        id: String;
    };
    status: "Backlog" | "Ready" | "Doing" | "Review" | "Blocked" | "Done";
    createdAt: String;
    updatedAt: String;
}

declare interface ProjectTypes {
    data: projectType[];
}
declare interface ProjectResType {
    data: projectType;
}

declare interface updateType {
    data: { status: String };
    id: String;
}
