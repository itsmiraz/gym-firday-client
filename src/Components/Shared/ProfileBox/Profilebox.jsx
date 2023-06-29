import { AuthContext } from '@/Context/UserContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const Profilebox = () => {
    return (
        <div>
      <Image
              width={40}
              height={40}
              alt="User Profile"
              className="rounded-full"
              src={"https://www.w3schools.com/howto/img_avatar.png"}
            />        
        </div>
    );
};

export default Profilebox;