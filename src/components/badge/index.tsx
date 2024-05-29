import {FC} from "react";
import {useSelector} from "react-redux";

interface BadgeProps {
    color: string;
    children?: React.ReactNode;
}

export const Badge: FC<BadgeProps> = ({color, children}) => {
    const theme = useSelector((state: any) => state.theme.value.name)

    return (
        <div data-color={color} className={`${theme}-Badge-container`}>
            {children}
        </div>
    );
};
