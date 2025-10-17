'use client'
import Container from "@/components/shared/Container";
import SignIn from "./_components/SignInForm";

export default function page() {
    return (
        <>

           <div className=" ">
        <Container>
            <div className="flex justify-center  px-2.5 sm:px-4 md:px-[auto] min-h-screen ">
                <div className="w-3/5 hidden md:block bg-amber-400 bg-auth ">
                
                </div>
                <div className="md:w-2/5 w-full bg-black p-8 flex flex-col justify-center items-center  ">
                <SignIn />
                </div>
            </div>
        </Container>
           </div>
        </>
    )
}