import Bannerstack from "../assets/banner-stack.png"

const Banner = () => {
    return (
      <section className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-between gap-10">
           <div  className="max-w-xl">
             <h2 className=" font-bold text-5xl">Build Your Ideal
               <br />
              <span className="bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h2>


            <p className="mt-5 text-gray-500">Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that fits your
                next project.</p>
          
          <div className="mt-7 flex gap-3">
              <button  className="rounded-md bg-linear-to-r from-orange-500 to-purple-600  px-5 py-2 text-sm text-white">Explore Technologies</button>
            <button className="rounded-md border border-gray-300 px-5 py-2 text-sm text-gray-600"  >Learn More</button>
          </div>
           </div>
           <div>
            <img src={Bannerstack} alt="" />
           </div>
    
        </div>
        <div className="mx-auto mb-20">
      <h2 className="font-bold text-3xl">Explore the <span className="bg-linear-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">Technologies</span></h2>
      <p className="text-gray-400">Pick one technology per category to build your ideal stack.</p>
     </div>
      </section>
    );
};

export default Banner;