type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: string;
  width?: string;
  label?: string;
  style?: any;
  viewBox?: string;
};

export const InfoIcon = ({
  fill,
  filled,
  size,
  height,
  width,
  label,
  style,
  viewBox,
  ...props
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1ZM13.5 19H10.5V11H13.5V19ZM12 9C10.9 9 10 8.1 10 7C10 5.9 10.9 5 12 5C13.1 5 14 5.9 14 7C14 8.1 13.1 9 12 9Z"
        fill={fill || 'white'}
      />
    </svg>
  );
};
