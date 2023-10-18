import React, {forwardRef} from 'react';
import {AvatarRoot, AvatarImage, AvatarFallback, Flex, User} from './styles';


interface Props {
   src?: string;
   alt?: string;
   fallback?: string;
   user?: string;
  }

const Avatar = forwardRef<HTMLDivElement, Props>(({src, alt, fallback, user}, ref) =>{
 return (
    <Flex css={{ gap: 20 }}>
      
      <AvatarRoot>
        <AvatarImage
          src={src}
          alt={alt}
        />
        <AvatarFallback delayMs={60}>{fallback}</AvatarFallback> 
        {/* fallback here is the user's initials */}
      </AvatarRoot>
     <User>{user}</User>
    </Flex>
 );
 
}); 
   
 

export default Avatar