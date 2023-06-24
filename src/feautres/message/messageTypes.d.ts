declare interface messageType {
    _id: string;
    conversationId: string;
    sender: {
        _id: string;
        email: string;
        role: string;
        firstName: string;
        lastName: string;
        imageURL: string;
    };
    receiver: {
        _id: string;
        email: string;
        role: string;
        firstName: string;
        lastName: string;
        imageURL: string;
    };
    message: String;
    createdAt: String;
    updatedAt: String;
}
