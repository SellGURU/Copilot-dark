interface TabProps {
  text: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  isFirst?: boolean;
  isLast?: boolean;
  theme:string,
  handleClick : () => void;
}
export const Tab = ({
  text,
  active,
  setActive,
  isFirst,
  isLast,
  theme,
  handleClick
}: TabProps) => {
  return (
   
    <div
      data-active={active === text}
      data-isLast={isLast}
      data-isFirst={isFirst}
      className={`${theme}-tab`}
      onClick={() => {
        setActive(text);
        handleClick();
      }}
    >
      <img className={`${theme}-icons-${text}`} alt="" />
      <h5 className= {`${theme}-tab-text`}>{text}</h5>
    </div>
    
  );
};
