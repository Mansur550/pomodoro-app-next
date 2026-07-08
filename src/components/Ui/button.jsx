import React from "react";
import clsx  from "clsx";


type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' ;
    className?: string;
    isloading?: boolean;
    disabled?: boolean;
}