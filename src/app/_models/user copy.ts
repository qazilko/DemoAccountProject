import { Role } from "./role";

export interface Login {
    id: number;  
    email: string;
    role: Role;
    token?: string;
}
