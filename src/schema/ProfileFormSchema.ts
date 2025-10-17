import z from "zod";

export const ProfileFormSchema = z.object({
    email:z.email().min(2).max(50),
    password:z.string().min(2).max(50),
})