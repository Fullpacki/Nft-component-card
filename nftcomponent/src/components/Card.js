import ImgEquilibrium from "../images/image-equilibrium.jpg";
import ImgEth from "../images/icon-ethereum.svg";
import ImgClock from "../images/icon-clock.svg";
import ImgAvatar from "../images/image-avatar.png";
import IconView from "../images/icon-view.svg";

function Card() {
  return (
    <div className="flex flex-col p-5 bg-[#15263f] rounded-xl gap-6 max-w-sm">
      {/* Header section */}
      <div className="flex flex-col bg-[#15263f] rounded-xl gap-6 max-w-sm relative">
        {/* Creating an hover background */}
        <div className="relative group">
          <img
            className="rounded-xl"
            src={ImgEquilibrium}
            alt="A cube in balance created with a diamond"
          />

          <img
            className="absolute top-1/2 left-1/2 transform z-10 cursor-pointer -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src={IconView}
            alt="An icon with a eye"
          />

          <div className="absolute inset-0 bg-[#00FFF8] cursor-pointer bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-xl"></div>
        </div>
      </div>
      {/* Main section */}
      <main className="flex flex-col gap-3">
        <h1 className="text-2xl text-white font-semibold hover:text-[#00FFF8] cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="text-[#8BACD9] text-lg text-think">
          Our equilibrium collection <br /> promotes balance and calm.
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row  items-center gap-1.5">
            <img src={ImgEth} alt="An ETH crypto symbol" />
            <p className="text-lg text-[#00FFF8] font-semibold">0.041 ETH</p>
          </div>
          <div className="flex flex-row  items-center gap-1.5">
            <img src={ImgClock} alt="An icon of a clock symbol" />
            <p className="text-lg text-[#8BACD9] font-semibold">3 days left</p>
          </div>
        </div>
        <div className="w-full border-t-[0.1em] border-[#2E405A]/80"></div>
        <div className="flex flex-row items-center gap-4">
          <img className="w-8 h-8 border rounded-full" src={ImgAvatar} alt="" />
          <p className="text-lg text-white hover:text-[#00FFF8] cursor-pointer">
            <span className="text-[#8BACD9]">Creation of</span> Jules Wyvern
          </p>
        </div>
      </main>
      {/* End of Main section */}
    </div>
  );
}

export default Card;
