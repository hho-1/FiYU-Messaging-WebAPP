import React from 'react'
import { LoginForm } from '@/components/auth/LoginForm';
import Layout from "../layout";

const Login = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    </Layout>
  );
}

export default Login;
