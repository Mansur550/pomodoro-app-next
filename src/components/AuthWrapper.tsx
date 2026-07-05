import React from "react";

type AuthWrapperProps = {
    children: React.ReactNode;
};

export default function AuthWrapper({children}: AuthWrapperProps) {
    return(
        <div className= "flex  items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className = "w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {children}
            </div>

        </div>
    );
}