export interface TaskWithID {
    task: {
        uid: string;
        status: boolean;
        task: string;
        description: string
    },
    id: string
}
