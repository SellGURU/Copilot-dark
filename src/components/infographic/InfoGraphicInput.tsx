import stars from "../../../public/Themes/Aurora/icons/stars.svg";
import logo from "../../../public/Themes/Aurora/icons/input-logo.svg";
import camera from "../../../public/Themes/Aurora/icons/camera.svg";
import microphone from "../../../public/Themes/Aurora/icons/input-microphone.svg";
export const InfoGraphicInput = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        <img src={logo} width={24} alt="" />
        <h2 className="text-primary-text text-14 font-medium">AI-Copilot</h2>
      </div>
      <div className=" w-full min-w-[518px] px-5 py-3 rounded-2xl flex items-center  justify-between gap-3 bg-black-primary border border-main-border">
        <img width={24} src={stars} alt="" />
        <input
          className="w-full bg-black-secondary rounded-xl outline-none text-third-text p-3"
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
