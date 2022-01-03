import { getAuth, signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

import { Link } from 'react-router-dom';

const Footer = () => {

  let { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => setUser(false))
      .catch(error => console.error(error));
  };

  return (
    <footer>
      <p>Ce site a été créé à but uniquement personnel.</p>
      <div className='admin'>
        { user 
            ? <button className='sign-out' onClick={handleSignOut}>Déconnexion</button> 
            : <Link to='/admin'>Admin</Link>
        }
      </div>
    </footer>
  );
};

export default Footer;
