import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInFormSchema } from "@/schema/AuthFormSchema";
import { SignInForm, SignInType } from "@/types/AuthTypes";
import { Google } from "@/components/ui/svgs/google";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

const  SignIn = () => {
    // 1. Initialisation du formulaire
    const form = useForm<SignInForm>({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<SignInForm> = (data) => {
        console.log("Données soumises :", data);
    };

    return (
            <div className="w-full">
                <div className="w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl className="w-full">
                                            <Input placeholder="your@email.com" {...field}  className="w-full"/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                             <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="******" {...field} className="w-full" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            {/* 5. Le bouton de soumission doit avoir type='submit' */}
                            <Button type='submit'>
                                Connexion
                            </Button>
                        </form>

                        <div className="mt-6">
                            <div className="flex space-x-4">
                                <Button>  Google</Button>
                                <Button>Apple</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
    );
};

export default SignIn;