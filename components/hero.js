//JSX for the hero page

export default function Hero() {
  return (
    <div className="flex h-full w-full flex-col pt-14 sm:pt-4 md:pt-14 lg:pt-8  bg-cover bg-center bg-[url('/assets/hero_background_light.png')] dark:bg-[url('/assets/hero_background_dark.png')]">
      <div className="flex flex-col sm:flex-row w-full justify-center items-center">
        {/* RH logo */}
        <img src="/assets/RH_logo.png" className="h-24 sm:h-28 md:h-28 lg:h-48 xl:h-60 2xl:h-72 max-h-96 max-w-lg pt-5 sm:pt-0 sm:pb-4"/>
        {/* Rh and description div */}
        <div className="flex flex-col items-center sm:pt-8 md:pl-6 font-bold">
          <h1 className=" text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl">RowdyHacks</h1>
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-5">A Land Before Hackathons</h1>
        </div>
      </div>
      {/* event dates */}
      <div className="flex justify-center items-center pt-12">
        <img className="h-[4rem] md:pr-4 lg:pr-4 xl:pr-6 sm:h-12 sm:pl-[15%] md:h-[5.5rem] lg:h-20 xl:h-[5.5rem] 2xl:h-28 " src="/assets/event_dates.png" />
      </div>
    </div>
  );
}
