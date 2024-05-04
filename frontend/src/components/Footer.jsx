import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";

function Footer() {
  return (
    <footer className=" pb-24 pt-20">
      <div className="max_padd_container flex-col w-full gap-14 ">
        <div className=" mb-20 flex flex-col md:flex-row gap-[10%] justify-between ">
          <Link className=" bold-20" to={""}>
            Shopee
          </Link>
          <div className="flex flex-wrap gap-5 md:flex-1 sm:justify-between ">
            {FOOTER_LINKS.map((link) => (
              <>
                <div key={link.title}>
                  <h3 className="bold-18 mb-5 whitespace-nowrap">{link.title}</h3>
                  <ul className="flex flex-col regular-14 text-gray-20 gap-3">
                    {link.links.map((lin) => (
                      <>
                        <Link to={"/"}>{lin}</Link>
                      </>
                    ))}
                  </ul>
                </div>
              </>
            ))}

            <div className="flex flex-col ">
              <h3 className="bold-18 mb-5 whitespace-nowrap">{FOOTER_CONTACT_INFO.title}</h3>
              <ul className="flex flex-col regular-14 text-gray-20 gap-3">
                {FOOTER_CONTACT_INFO.links.map((lin) => (
                  <>
                    <Link className="flex md:flex-row xs:flex-row gap-2 flex-col justify-between" key={lin.label} to={"/"}>
                      <p>{lin.label}:</p><p>{lin.value}</p>
                    </Link>
                  </>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="bold-18 mb-5 whitespace-nowrap">{SOCIALS.title}</h3>
              <ul className="flex justify-between">
                {SOCIALS.links.map((lin) => (
                  <>
                    <Link key={lin} to={"/"}>
                      <img src={lin} alt="" width={22} height={22} />
                    </Link>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
         <div className="border mb-10 bg-gray-20 "></div>
      <p className=" text-gray-20  text-center regular-14">2024 Shopee | All rights reserved</p>
      </div>
     
    </footer>
  );
}

export default Footer;
