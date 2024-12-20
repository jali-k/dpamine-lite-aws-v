import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const components = {
  Header() {
    return (
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="text-gray-600">Please sign in to continue</p>
      </div>
    );
  }
};

function AuthenticatedRedirect() {
  const navigate = useNavigate();
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return null;
}

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6">
        <Authenticator
          components={components}
          socialProviders={['google']}
        >
          <AuthenticatedRedirect />
        </Authenticator>
      </div>
    </div>
  );
}

export default Login;