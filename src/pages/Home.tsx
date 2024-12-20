import { signOut } from 'aws-amplify/auth';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

function Home() {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setEmail(currentUser.signInDetails?.loginId || '');
      } catch (error) {
        console.error('Error fetching user:', error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [user, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Welcome {email}
        </h2>
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Home;
