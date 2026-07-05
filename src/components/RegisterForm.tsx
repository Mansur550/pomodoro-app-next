import * as z from "zod"


const formSchema = z.object({
    firstName: z.string().min(2 , "First name is required"),
    lastName: z.string().min(2 , "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters long"),

})
.refine((data))=>{
    
}

export default function Register() {
    return (
        <div>
            <h1>Register Page</h1>
            
        </div>
    )
}