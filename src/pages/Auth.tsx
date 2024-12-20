import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Auth() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <Authenticator>
        {({ signOut, user }) => {
          useEffect(() => {
            if (user) {
              navigate('/');
            }
          }, [user]);

          return <div>Authenticating...</div>;  // Return a placeholder while checking auth
        }}
      </Authenticator>
    </div>
  );
}

export default Auth;