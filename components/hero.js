//JSX for the hero page

export default function Hero() {
  return (
    //Added some slight cheese in order to get it centered because the div didn't take up the whole page
    //Removed: dark:text-white dark:bg-black
    <div className=" flex h-[100vh] flex-col bg-[url('/assets/hero.png')] bg-cover bg-center pt-12 text-black">
      <div className="flex w-full justify-center">
        {/* border-8 border-slate-950 */}
        <img
          src="/assets/RH_logo.png"
          className="max-h-[14rem] max-w-[14rem] rounded-full"
        />
        <div className="flex flex-col pl-6 pt-10 font-bold">
          <h1 className="text-8xl">RowdyHacks</h1>
          <div className="flex justify-center pt-5 ">
            <h1 className="text-4xl font-thin">A Land Before Hackathons</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center pl-[10%] pt-12">
        <img src="/assets/event_dates.png" />
      </div>
    </div>
  );
}
