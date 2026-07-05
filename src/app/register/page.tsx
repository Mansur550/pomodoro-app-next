import AuthWrapper from "@/components/AuthWrapper";
import RegisterForm from "@/components/RegisterForm";

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
