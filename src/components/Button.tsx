interface Props{
    children : string;
    color ?: 'primary' | 'secondary' | 'danger' | 'success';
    onMyClick : () => void;
}

const Button = ({children, color, onMyClick}:Props) => {
  return (
    <button className={'btn btn-'+color} onClick={onMyClick}>{children}</button>
  )
}

export default Button;