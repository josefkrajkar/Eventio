import { memo } from 'react';

// Styles
import '../../styles/components/CircleBtn.css'

// Types
interface CircleBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundImg?: string;
}

function CircleBtn(props: CircleBtnProps) {
  const { backgroundImg, ...restProps} = props;
  const { className, children, value } = restProps;

  return (
    <button
      {...restProps}
      className={`circle-btn ${className || ''}`}
      style={
        backgroundImg
          ? { backgroundImage: `url(${backgroundImg})` }
          : undefined
      }
    >
      {value || children}
    </button>
  );
}

export default memo(CircleBtn);
