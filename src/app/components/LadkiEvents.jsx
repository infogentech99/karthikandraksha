"use client";

export default function LadkiEvents() {
  return (
<div
      id="itinerary"
      className="flex scroll-mt-6 flex-col justify-center mt-20 lg:mt-40 items-center"
    >
      <p className="md:text-2xl text-[16px] text-[#B35800] font-cormorant-garamond">
        Two days of celebration
      </p>
      <h2
        className="text-[#B35800] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
      >
        Wedding Events
      </h2>

      


      <h2 className="font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] border px-8 py-2  mt-5 rounded-xl text-white bg-[#B35800]">
        Thursday, 5th November 2026
      </h2>

      <div className="flex flex-col bg-[#E85D4A] rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-6">
        <h2 className="text-[#F6EFE2] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
          Meet and Greet
        </h2>
        <p className="text-[#F6EFE2]  font-cormorant-garamond text-[16px] md:text-base mt-2">
          7:00 pm to 10:00 pm
        </p>

        <p className="text-[#F6EFE2]  font-cormorant-garamond text-sm md:text-base mt-2">
          <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
            Pai Vista Convention Hall, South End Circle
          </span>
          <br />
          Metro, Pattalamma Temple Rd, near South End Circle, Basavanagudi,
          Bengaluru, Karnataka 560004
        </p>

        <a
          href="https://maps.app.goo.gl/8cWkZ4vCTL1Gga2R7"
          className="text-[#F6EFE2] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
          target="_blank"
        >
          View Location
        </a>
      </div>

 <div className="flex flex-col justify-center items-center bg-[#7F1D2E] rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-8">
        <img
          src="/assets/valet.png"
          alt="Shree Ganesh"
          className="w-[60px] sm:w-[65px] md:w-[150px]"
        />
        <h2 className="text-[#F6EFE2] font-cormorant-garamond text-[28px] md:text-2xl lg:text-[50px]">
          Parking
        </h2>
        <p className="text-[#F6EFE2]  font-cormorant-garamond text-sm md:text-base mt-2">
          Valet parking for all our guests will be available at the venue
        </p>
      </div>



      <div className="flex items-center w-full mt-16 mb-13">
        <div className="flex-1">
          <div className="border-t-2 border-[#B35800]" />
          <div className="border-t border-[#B35800] mt-1" />
        </div>

        <span className="mx-4 text-[#B35800] text-lg">✦</span>

        <div className="flex-1">
          <div className="border-t-2 border-[#B35800]" />
          <div className="border-t border-[#B35800] mt-1" />
        </div>
      </div>

      <h2 className="text-white bg-[#B35800] font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] border px-8 py-2 rounded-xl">
        Friday, 30th October 2026
      </h2>
      <div className="flex flex-col bg-[#D9825B] rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 mt-6">
        <h2 className="text-[#F6EFE2] font-cormorant-garamond text-[23px] md:text-2xl lg:text-[50px] leading-7 md:leading-12">
          Linga Bhairavi Vivaha and Bhuta Shuddi Vivaha
        </h2>
        <p className="text-[#F6EFE2]  font-cormorant-garamond text-[16px] md:text-base mt-2">
          6 am to 10:30 am
        </p>

        <p className="text-[#F6EFE2]  font-cormorant-garamond text-sm md:text-base mt-2">
          <span className="text-[17px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
            Isha ashram
          </span>
          <br />
          Yoga Center Velliangiri Foothills, Ishana Vihar Post, Coimbatore,
          Tamil Nadu 641114
        </p>

        <a
          href="https://maps.app.goo.gl/tdvTg9GxqBQGUxMe9"
          className="text-[#F6EFE2] underline md:text-sm text-[13px] mt-2  font-cormorant-garamond"
          target="_blank"
        >
          View Location
        </a>
      </div>

      
    </div>
  );
}
