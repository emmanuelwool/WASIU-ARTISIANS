import z from "zod";

export const SignInFormSchema = z.object({
    email:z.email().min(2).max(50),
    password:z.string().min(2).max(50),
})