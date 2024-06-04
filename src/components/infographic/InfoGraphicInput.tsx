import stars from "../../../public/Themes/Aurora/icons/stars.svg";
import logo from "../../../public/Themes/Aurora/icons/input-logo.svg";
import camera from "../../../public/Themes/Aurora/icons/camera.svg";
import microphone from "../../../public/Themes/Aurora/icons/input-microphone.svg";
import {useSelector} from "react-redux";

export const InfoGraphicInput = () => {
  const theme = useSelector((state: any) => state.theme.value.name)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        <img src={logo} width={24} alt="" />
        <h2 className="text-primary-text text-14 font-medium">AI-Copilot</h2>
      </div>
      <div className={`${theme}-graphicinfo-input-container`}>
        <img width={24} src={stars} alt="" />
        <input
          className={`${theme}-graphicinfo-input`}
          type="text"
          placeholder="Enter a prompt here..."
        />
        <div className="flex gap-2 items-center">
          <img src={camera} alt="" />
          <img src={microphone} alt="" />
        </div>
      </div>
    </div>
  );
};
