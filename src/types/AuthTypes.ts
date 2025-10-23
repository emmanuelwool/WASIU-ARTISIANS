import { SignInFormSchema } from "@/schema/AuthFormSchema"
import { z } from "zod"
/**
 * @typedef {object} SignUpType
 * @property {string} email - The user's email
 * @property {string} lastname - The user's last name.
 * @property {string} firstname - The user's first name.
 * @property {string} password - The user's password.
 */
export type SignUpType = {
      email:string,
    latstname:string,
    firstname:string,
    password:string,
}


/**
 * @typedef {object} SignIn
 * @property {string} email - The email
 * @property {string} password - The user's password.
 */

export type SignInType = {
    email:string,
    password:string,
}




export type SignInForm = z.infer<typeof SignInFormSchema>