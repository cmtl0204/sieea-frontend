export interface ActivityInterface{
    id: string;
    code: string;
    label: string;
    name: string;
    description: string;
    category: string;
    completed: boolean;
    sort: number;
    registeredAt?: Date;
}
