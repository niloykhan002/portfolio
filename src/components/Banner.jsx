import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import banner from "../assets/bannerImg.png";
const Banner = () => {
  return (
    <div className="relative">
      <div className="bg-sky-100 h-[600px] lg:w-[750px] rounded-l-full  absolute top-0 right-0"></div>

      <div className="flex flex-col md:flex-row-reverse">
        <div className="lg:w-1/2 z-10 flex justify-end">
          <img
            src={banner}
            className=" md:max-w-sm lg:max-w-xl lg:rounded-full"
          />
        </div>
        <div className="lg:w-1/2 mt-12 md:mt-28">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold">
            Hi, I’m Neamul
          </h1>
          <p className="md:text-xl text-lg py-4 font-medium">
            MERN Stack Developer | Building Scalable Web Apps
          </p>
          <p className="text-justify md:w-10/12 md:text-lg">
            Passionate about crafting seamless user experiences and building
            high-performance web applications with MongoDB, Express.js, React,
            and Node.js.
          </p>
          <button className="btn bg-sky-600 text-white my-6">
            Download Resume
          </button>
          <div className="flex gap-6">
            <FaFacebook className="text-2xl text-[#1877F2]" />
            <FaLinkedin className="text-2xl text-[#0A66C2]" />
            <FaGithub className="text-2xl text-[#181717]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
