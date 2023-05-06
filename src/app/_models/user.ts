﻿import { Role } from "./role";

export interface User {
    id: number;
    name: string;
    fname: string;
    email: string;
    role: Role;
    token?: string;
}
