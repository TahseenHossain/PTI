import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer  lg:px-56 lg:pb-10 bg-[#FFAA33] text-base-content flex flex-col md:flex-row  lg:flex-row lg:gap-[700px]">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
        <div className="my-10 bg-white rounded-lg w-[300px] lg:w-[600px] h-12">
          <form>
            <fieldset className="form-control">
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered join-item w-[200px] lg:w-[400px] "
                />
                <button className="text-white bg-orange-600 rounded-lg h-8 p-1 mt-2 lg:ml-4 px-2 lg:px-10 flex">
                  Subscribe
                  <FiArrowRight className="text-xl"/>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div>
          <h3 className="text-3xl font-bold">
            pti<span className="text-red-500">.</span>
          </h3>
          <div className="flex flex-col lg:flex-row">
            <h3 className="text-xl font-bold pr-10">
              Copyright©Tripp.AllRightReserved
            </h3>
            <div className="flex  gap-2 justify-center">
              <FaGoogle className="text-3xl text-[#FFAA33] bg-white rounded-full p-1" />
              <FaTwitter className="text-3xl text-[#FFAA33] bg-white rounded-full p-1" />
              <FaInstagram className="text-3xl text-[#FFAA33] bg-white rounded-full p-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="https://i.ibb.co/NZMB5tn/Image2.png"
          alt=""
          className="h-full"
        />
      </div>
    </footer>
  );
};

export default Footer;
