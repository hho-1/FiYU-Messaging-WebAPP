import RegisterForm from "@/components/auth/RegisterForm";
import Layout from "../layout";

const Register = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Register;
