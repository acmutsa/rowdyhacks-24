//JSX for the hero page

export default function Hero() {
  return (
    // If it is in daytime mode, make a blue sky and if it is in dark mode, make it a more nighttime theme
    <div className=" flex h-full w-full flex-col sm:pt-6 dark:bg-[url('/assets/hero_background_dark.png')] dark:text-gray-50 bg-[url('/assets/hero_background_light.png')] bg-cover bg-center text-black">
      <div className="flex flex-col sm:flex-row w-full justify-center items-center">
        <img src="/assets/RH_logo.png" className="h-24 sm:h-28 md:h-28 lg:h-48 max-h-60 max-w-xs"/>
        <div className="flex flex-col items-center sm:pt-8 md:pl-6 font-bold">
          <h1 className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl">RowdyHacks</h1>
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl pt-5">A Land Before Hackathons</h1>
        </div>
      </div>
      <div className="flex justify-center items-center pt-12">
        <img className="h-10 md:pr-4 lg:pr-4 xl:pr-6 sm:h-12 sm:pl-[15%]  md:h-16 lg:h-20 " src="/assets/event_dates.png" />
      </div>
    </div>
  );
}
