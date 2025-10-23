'use client'
import Container from "@/components/shared/Container";
import SignIn from "./_components/SignInForm";

export default function Page() {
  return (
    <div className="min-h-screen py-8">
      <Container>
        <div className="flex justify-center gap-0 min-h-[calc(100vh-4rem)] shadow-2xl rounded-3xl overflow-hidden bg-white">
          
          {/* Section Gauche - Image/Illustration */}
          <div className="w-3/5 hidden md:flex relative bg-gradient-to-br bg-auth py-12 px-12 items-end">
            {/* Pattern d'arrière-plan */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            </div>
            
            {/* Contenu */}
            <div className="relative z-10 text-white">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to <span className="text-yellow-300">Wassiu</span>
                  </h1>
                  <p className="text-lg text-blue-100 leading-relaxed max-w-md">
                    Sign in to access your personal space and enjoy all our exclusive services.
                  </p>
              </div>
              
              {/* Stats ou Features */}
              <div className="flex gap-8 mt-8">
                 <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">10k+</div>
                    <div className="text-sm text-blue-200">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4.9</div>
                    <div className="text-sm text-blue-200">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm text-blue-200">Support</div>
                  </div>
              </div>
            </div>
          </div>

          {/* Section Droite - Formulaire */}
          <div className="md:w-2/5 w-full p-8 md:p-12 flex flex-col justify-center items-center">
            <div className="w-full max-w-md">
              {/* En-tête mobile */}
              <div className="md:hidden mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Wa<span className="text-blue-600">ss</span>iu
                </h2>
                <p className="text-gray-600">Connectez-vous à votre compte</p>
              </div>

              {/* Formulaire de connexion */}
              <SignIn />

             
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}