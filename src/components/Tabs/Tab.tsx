interface TabProps {
  text: string;
  icon? : boolean;
  number?: number,
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
  icon,
  setActive,
  number,
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
      className={`${theme}-tab ${text== 'All' ? 'px-[85px] ' : 'px-[49px] '}`}
      onClick={() => {
        setActive(text);
        handleClick();
      }}
    >
    
    
      <img className={`${theme}-icons-${text} ${!icon && 'hidden'}`} alt="" />
      <h5 className= {`${theme}-tab-text`}>{text}</h5>
      <div className={`${!number && 'hidden' } ${active===text ? 'bg-transparent' : 'bg-black-secondary'} rounded-xl px-3 py-2 text-primary-text text-xs`}>{number}</div>
    </div>
    
  );
};
