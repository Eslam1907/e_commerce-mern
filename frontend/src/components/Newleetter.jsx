

function Newleetter() {
  return (
    <section className="max_padd_container bg-white py-10 xl:py-20 mt-10 ">
    <div className="  flexCenter flex-col gap-y-6 w-full max-w-[666px] mx-auto">
      <h3 className="h3 xs:bold-22">Get Exclusive offers on Your Email</h3>
      <h4 className="h4 bold-18 xs:bold-16">Subscribe to Our Newletters and Stay Update  </h4>
      
        <div className=" flexBetween bg-primary ring-1 rounded-full ring-slate-900/10 shadow-lg hover:ring-sky-900/15 w-full max-w-[588px] ">
          <input className=" w-full bg-transparent ml-8 border-none outline-none" type="email" placeholder="Your Email Address" />
          <button className="btn_dark_rounded">Subscribe</button>
        </div>
    </div>
    </section>
  )
}

export default Newleetter