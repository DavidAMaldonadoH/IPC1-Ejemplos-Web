export interface CustomerEntry {
    first_name: string;
    last_name: string;
    email: string;
    credit_card: string;
    password: string;
}

export interface CustomerData extends CustomerEntry {
    id: number;
}