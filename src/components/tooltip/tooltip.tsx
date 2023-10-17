import React, { forwardRef } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import withDefaults from 'utils/with-defaults';
import { TooltipContent, TooltipArrow, Icon } from './styles';
import { Cross2Icon } from '@radix-ui/react-icons';

interface Props {
  side?: 'top' | 'left' | 'right' | 'bottom';
  variant?: 'simple' | 'icon';
  children: React.ReactNode;
  trigger:  React.ReactNode;
}

const defaultProps = {
  variant: 'simple',
};

const ToolTip = forwardRef<HTMLDivElement, Props>(({ side, variant, children, trigger }, ref) => {
  const isIconVariant = variant === 'icon';

  return (
    <Tooltip.Provider >
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {trigger}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent side={side}>
            <TooltipArrow />
            {isIconVariant ? (
              <Icon >
                {children}
                <Cross2Icon style={{marginLeft: '0.625rem'}}/>
              </Icon>
            ) : (
              <div>{children}</div>
)}
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
});

export default withDefaults (ToolTip, defaultProps);
