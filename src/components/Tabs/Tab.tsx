import { useSelector } from "react-redux";
import '../../Themes/Aurora/icons/index.scss'
interface BackTabProps {
  text: string;
  icon: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  isFirst?: boolean;
  isLast?: boolean;
}
export const Tab = ({
  text,
  icon,
  active,
  setActive,
  isFirst,
  isLast,
}: BackTabProps) => {
  const theme = useSelector((state: any) => state.theme.value.name);
  return (
    <div
      data-active={active === text}
      data-isLast={isLast}
      data-isFirst={isFirst}
      onClick={() => setActive(text)}
      className={`${theme}-Tab ${theme}-icons-message-square`}
    >
      
      <h5 className="text-white font-normal text-[14px]  ">{text}</h5>
    </div>
  );
};
