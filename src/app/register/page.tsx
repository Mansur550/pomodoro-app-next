import AuthWrapper from "@/components/auth/AuthWrapper";
import RegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
    return (
        <div>
            <h1>Register Page</h1>
            <AuthWrapper >
                <RegisterForm />
            </AuthWrapper>
        </div>
    )
}
