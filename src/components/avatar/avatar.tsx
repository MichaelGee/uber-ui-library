import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import withDefaults from 'utils/with-defaults';
import {AvatarRoot, AvatarImage, AvatarFallback, Flex} from './styles';


const Avatar = () => (
    <Flex css={{ gap: 20 }}>
      <AvatarRoot>
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <AvatarFallback delayMs={600}>CT</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarImage
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Pedro Duarte"
        />
        <AvatarFallback delayMs={600}>JD</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>PD</AvatarFallback>
      </AvatarRoot>
    </Flex>
  );

export default Avatar