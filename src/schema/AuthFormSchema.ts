import z from "zod";

export const SignInFormSchema = z.object({
    email: z.string()
        .email("Please enter a valid email address.")
        .min(5, "Email must contain at least 5 characters.")
        .max(50),
    password: z.string()
        .min(8, "Password must contain at least 8 characters.")
        .max(50),
});

export const SignUpFormSchema = z.object({
    email: z.string()
        .email("Please enter a valid email address.")
        .min(5, "Email must contain at least 5 characters.")
        .max(50),
    name: z.string()
        .min(2, "First name must contain at least 2 characters.")
        .max(50),
    lastname: z.string()
        .min(2, "Last name must contain at least 2 characters.")
        .max(50),
    password: z.string()
        .min(8, "Password must contain at least 8 characters.")
        .max(50),
    // 1. New field: Confirm Password
    confirmPassword: z.string()
        .min(8, "Password must contain at least 8 characters.")
        .max(50),
})
// 2. Refine method to check if both passwords match
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], // Error path
});