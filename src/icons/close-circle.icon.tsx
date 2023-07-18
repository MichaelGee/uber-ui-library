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

export const CloseCircleIcon = ({
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
      width={width || '16'}
      height={height || '16'}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_22116_184414)">
        <path
          d="M7.99935 0.666748C3.93268 0.666748 0.666016 3.93341 0.666016 8.00008C0.666016 12.0667 3.93268 15.3334 7.99935 15.3334C12.066 15.3334 15.3327 12.0667 15.3327 8.00008C15.3327 3.93341 12.066 0.666748 7.99935 0.666748ZM11.9993 10.6667L10.666 12.0001L7.99935 9.33341L5.33268 12.0001L3.99935 10.6667L6.66602 8.00008L3.99935 5.33341L5.33268 4.00008L7.99935 6.66675L10.666 4.00008L11.9993 5.33341L9.33268 8.00008L11.9993 10.6667Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_22116_184414">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
