type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: string;
  width?: string;
  label?: string;
  style?: any;
};

export const SuccessCircleIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      width={width || '14'}
      height={height || '14'}
      viewBox="0 0 14 14"
      fill="none"
      style={style}
      {...props}
    >
      <g clip-path="url(#clip0_22116_127336)">
        <path
          d="M7.00065 0.583252C3.44232 0.583252 0.583984 3.44159 0.583984 6.99992C0.583984 10.5583 3.44232 13.4166 7.00065 13.4166C10.559 13.4166 13.4173 10.5583 13.4173 6.99992C13.4173 3.44159 10.559 0.583252 7.00065 0.583252ZM6.12565 9.97492L2.859 6.70825L4.08398 5.48325L6.06733 7.46658L9.80064 3.73325L11.0257 4.95825L6.12565 9.97492Z"
          fill={fill || '#0E8345'}
        />
      </g>
      <defs>
        <clipPath id="clip0_22116_127336">
          <rect width="14" height="14" fill={fill || 'white'} />
        </clipPath>
      </defs>
    </svg>
  );
};
