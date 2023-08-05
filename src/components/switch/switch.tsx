import React, {forwardRef, useEffect, useState, useRef, useMemo} from 'react';
import {__DEV__} from 'utils/assertion';
import withDefaults from 'utils/with-defaults';
import {StyledSwitchRoot, StyledSwitchThumb} from './styles';

interface Props {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  defaultChecked?: boolean;
}

const defaultProps = {
  disabled: false,
};
const Switch = forwardRef<HTMLDivElement, Props>(
  ({disabled, checked, onChange, defaultChecked}, ref) => {
    const [isChecked, setIsChecked] = useState(checked);

    const isControlled = useMemo(() => typeof checked === 'boolean', [checked]);

    useEffect(() => {
      if (!isControlled) return;
      setIsChecked(checked);
    }, [checked]);

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const handleChange = () => {
      if (disabled) return;
      setIsChecked(!isChecked);
      onChange && onChange(!isChecked);
    };

    return (
      <StyledSwitchRoot
        disabled={disabled}
        // @ts-ignore
        ref={ref}
        onCheckedChange={handleChange}
        checked={isChecked}
        defaultChecked={defaultChecked}
      >
        <StyledSwitchThumb disabled={disabled} />
      </StyledSwitchRoot>
    );
  }
);

if (__DEV__) {
  Switch.displayName = 'UberUI.Switch';
}

Switch.toString = () => '.uberui-switch';

export default withDefaults(Switch, defaultProps);
