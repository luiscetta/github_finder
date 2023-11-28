type GenericButtonProps = {
  onClick: () => void;
  className: string;
  content: string;
};

const GenericButton = ({ onClick, className, content }: GenericButtonProps) => {
  return (
    <a className={className} onClick={onClick}>
      {content}
    </a>
  );
};

export default GenericButton;
