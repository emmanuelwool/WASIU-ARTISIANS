import z from "zod";
export const ProfileFormSchema = z.object({
  email: z.string().email("Email invalide").min(2, "Email requis").max(50),
  firstname: z.string().min(2, "Prénom requis").max(50),
  lastname: z.string().min(2, "Nom requis").max(50),
  birth: z.string().min(1, "Date de naissance requise"),
  country: z.string().min(2, "Pays requis").max(50),
  phone: z.string().min(8, "Numéro de téléphone invalide").max(20),
  adress: z.string().min(5, "Adresse requise").max(100),
gender: z.enum(["male", "female", "other"]).optional().refine(
  (val) => val !== undefined,
  { message: "Genre requis" }
)
});