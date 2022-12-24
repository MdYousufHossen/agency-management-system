declare interface messageType {
    _id: string;
    conversationId: string;
    sender: {
        _id: string;
        email: string;
        role: string;
        firstName: string;
        lastName: string;
    };
    receiver: {
        _id: string;
        email: string;
        role: string;
        firstName: string;
        lastName: string;
    };
    message: String;
    createdAt: String;
    updatedAt: String;
}
