import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
interface BackTabProps {
  text: string;
  
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  isFirst?: boolean;
  isLast?: boolean;
}
export const Tab = ({
  text,
  active,
  setActive,
  isFirst,
  isLast,
}: BackTabProps) => {
  const theme = useSelector((state: any) => state.theme.value.name);
  return (
    <Link to={`${text}-infoGraphic`}>
    <div
      data-active={active === text}
      data-isLast={isLast}
      data-isFirst={isFirst}
      onClick={() => setActive(text)}
      className={`${theme}-tab`}
    >
      <img className={`${theme}-icons-${text}`} alt="" />
      <h5 className= {`${theme}-tab-text`}>{text}</h5>
    </div>
    </Link>
  );
};
