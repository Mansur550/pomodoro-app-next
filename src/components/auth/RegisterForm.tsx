'use client'
import * as z from "zod"
import{useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "../Ui/input";


const formSchema = z.object({
    firstName: z.string().min(2 , "First name is required"),
    lastName: z.string().min(2 , "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters long"),

})
.refine((data)=>data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path:  ["confirmPassword"],
        
    });
    

type  FormSchema = z.infer<typeof formSchema>

export default function RegisterForm() {

    const onSubmit = (data: FormSchema) => {
        console.log(data)
        //Handle form submission logic here
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
     } = useForm<FormSchema>({
        resolver : zodResolver(formSchema)
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}
         action=""
         className="space-y-4 w-full max-w-md"
         >
            <h2 className="text-2xl font-bold mb-4">Create you Account</h2>
            <Input
                label="First Name"
                type ="text"
                {...register("firstName")}
                error ={errors.firstName?.message}
            /> 
            <Input
                label="Last Name"
                type ="text"
                {...register("lastName")}
                error ={errors.lastName?.message}
            /> 
            <Input
                label="Email"
                type ="email"
                {...register("email")}
                error ={errors.email?.message}
            /> 

        </form>
       
    );
}