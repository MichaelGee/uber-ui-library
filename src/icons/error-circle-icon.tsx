type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: string;
  width?: string;
  label?: string;
  style?: any;
};

export const ErrorCircleIcon = ({
  fill,
  filled,
  size,
  height,
  width,
  label,
  style,
  ...props
}: Props) => {
  return (
    <svg
      width={width || '14'}
      height={height || '14'}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        d="M7.00065 13.4166C3.44232 13.4166 0.583984 10.5583 0.583984 6.99992C0.583984 3.44159 3.44232 0.583252 7.00065 0.583252C10.559 0.583252 13.4173 3.44159 13.4173 6.99992C13.4173 10.5583 10.559 13.4166 7.00065 13.4166ZM7.87565 2.91659H6.12565V7.58325H7.87565V2.91659ZM7.00065 8.74992C6.35898 8.74992 5.83398 9.27492 5.83398 9.91659C5.83398 10.5583 6.35898 11.0833 7.00065 11.0833C7.64232 11.0833 8.16732 10.5583 8.16732 9.91659C8.16732 9.27492 7.64232 8.74992 7.00065 8.74992Z"
        fill="#DE1135"
      />
    </svg>
  );
};
