import { Button } from '@/components/ui/button';
import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';

const PersonalInfo = () => {
    return (
        <div>
            <div className="">
                <h2>Personal Info</h2>

                <div className="">
                    <div className="">
                        <img src="" alt="" />
                        <div className="">
                          <Button>Uploaded</Button>
                          <Button>Remove</Button>
                        </div>
                    </div>

                    <div className="">
                        <PersonalInfoForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
