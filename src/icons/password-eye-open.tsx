type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: string;
  width?: string;
  label?: string;
  style?: any;
  onClick?: any;
};

export const PasswordEyeOpendIcon = ({
  fill,
  filled,
  size,
  height,
  width,
  label,
  style,
  onClick,
  ...props
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      onClick={onClick}
      {...props}
      style={style}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 8.00016C0.933333 4.1335 4.13333 1.3335 8 1.3335C11.8667 1.3335 15.0667 4.1335 16 8.00016C15.0667 11.8668 11.8667 14.6668 8 14.6668C4.13333 14.6668 0.933333 11.8668 0 8.00016ZM4.66667 8.00016C4.66667 9.86683 6.13333 11.3335 8 11.3335C9.86667 11.3335 11.3333 9.86683 11.3333 8.00016C11.3333 6.1335 9.86667 4.66683 8 4.66683C6.13333 4.66683 4.66667 6.1335 4.66667 8.00016ZM9.33333 8.00016C9.33333 8.73654 8.73638 9.3335 8 9.3335C7.26362 9.3335 6.66667 8.73654 6.66667 8.00016C6.66667 7.26378 7.26362 6.66683 8 6.66683C8.73638 6.66683 9.33333 7.26378 9.33333 8.00016Z"
        fill="black"
      />
    </svg>
  );
};
