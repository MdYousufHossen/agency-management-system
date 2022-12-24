declare interface TeamType {
    _id: String;
    name: String;
    description: String;
    user: userType[];
    createdAt: String;
    updatedAt: String;
}
declare interface TeamTypes {
    data: TeamType[];
}
declare interface TeamResType {
    data: TeamType;
}
