import { ProfileFormSchema } from "@/schema/ProfileFormSchema"
import { z } from "zod"

/**
 * @typedef {object} Usersype
 * @property {string} email - The email
 * @property {string} firstname - The user's firstname.
 * @property {string} lastname - The user's lastname.
 * @property {string} birth - The user's birth.
 * @property {string} country - The user's country.
 * @property {string} phone - The user's phone.
 * @property {string} adress - The user's adress.
 * @property {string} gender - The user's gender.
 */

export type Usersype = {
    email:string,
    firstname:string,
    lastname:string,
    birth:string,
    country:string,
    phone:string,
    adress:string,
    gender:string,
}


export type ChangePassType = {
   user:Usersype
   password:string,
   comfirmepassword:string,
}

export type ProfileIForm = z.infer<typeof ProfileFormSchema>