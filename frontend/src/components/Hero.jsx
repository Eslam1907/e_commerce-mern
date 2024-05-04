import { MdOutlineLocalOffer} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Hero() {
  return (
    <section className=" relative bg-hero bg-cover h-screen w-full bg-no-repeat bg-center ">
      <div className="relative max_padd_container top-32 xs:top-52 ">
        <h1 className="h1 capitalize xs:h2 max-w-[37rem]">
          Digital Shopping Hup Junction
        </h1>
        <p className=" text-gray-50 mt-6 regular-16 max-w-[33rem]">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          voluptate exercitationem ea doloremque tenetur, eaque maiores atque
          officia similique sit ullam commodi, autem quia molestias inventore
          qui delectus repellat eveniet.
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className=" flexCenter gap-x-3 !regular-24">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20">
            123k{" "}
            <span className=" regular-16 sm:regular-20">Exellent reviews</span>
          </div>
        </div>

        <div className="flex max-xs:flex-col gap-x-2 mt-5">
          <NavLink to={''} className={"btn_dark_rounded flexCenter capitalize"}>
            shop now
          </NavLink>
          <NavLink to={''} className={"btn_dark_rounded flexCenter capitalize"}>
            {" "}
            <MdOutlineLocalOffer className=" text-2xl mr-2" /> offer
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
