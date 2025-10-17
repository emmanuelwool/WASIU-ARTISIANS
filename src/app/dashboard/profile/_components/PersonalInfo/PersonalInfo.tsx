import { Button } from '@/components/ui/button';
import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import { Upload, X, User } from 'lucide-react';

const PersonalInfo = () => {
    return (
        <div className="min-h-screen ">
            <div className="">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Informations Personnelles</h1>
                    <p className="text-gray-600 mt-2">Gérez vos informations de profil</p>
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {/* Photo de profil Section */}
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Photo de profil</h2>
                        
                        <div className="flex items-center gap-6">
                            {/* Avatar */}
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                                    <User className="w-12 h-12 text-blue-600" />
                                    {/* Si vous avez une image : */}
                                    {/* <img src="/path/to/image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                                </div>
                            </div>

                            {/* Boutons */}
                            <div className="flex gap-3">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                    <Upload className="w-4 h-4 mr-2" />
                                    Télécharger
                                </Button>
                                <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                    <X className="w-4 h-4 mr-2" />
                                    Supprimer
                                </Button>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            JPG, PNG ou GIF. Taille maximale 2MB.
                        </p>
                    </div>

                    {/* Formulaire Section */}
                    <div className="p-6">
                        <PersonalInfoForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;