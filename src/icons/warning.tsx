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

export const WarningIcon = ({
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
        d="M12 1.5L1 21H23L12 1.5ZM10.5 8H13.5V13H10.5V8ZM12 19C10.9 19 10 18.1 10 17C10 15.9 10.9 15 12 15C13.1 15 14 15.9 14 17C14 18.1 13.1 19 12 19Z"
        fill={fill || 'black'}
      />
    </svg>
  );
};
