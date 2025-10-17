'use client'
import Container from "@/components/shared/Container";
import SignIn from "./_components/SignInForm";

export default function page() {
    return (
        <>

           <div className=" ">
        <Container>
            <div className="flex justify-center gap-5  min-h-screen shadow  rounded-2xl overflow-hidden">
                <div className="w-3/5 hidden md:flex  bg-auth py-4 items-end ">
                     <div className="">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                </div>
                <div className="md:w-2/5 w-full  p-8 flex flex-col justify-center items-center  ">
                <SignIn />
                </div>
            </div>
        </Container>
           </div>
        </>
    )
}