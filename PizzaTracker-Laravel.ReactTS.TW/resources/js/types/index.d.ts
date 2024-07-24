export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Pizza {
    id: number;
    user_id: number;
    size: string;
    crust: string;
    toppings: string[];
    status: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    pizzas: Pizza[]; 
};
