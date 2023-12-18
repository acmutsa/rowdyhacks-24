//JSX for the hero page

export default function Hero(){
    return(
        //Added some slight cheese in order to get it centered because the div didn't take up the whole page
        //Removed: dark:text-white dark:bg-black
        <div className=" bg-[url('/assets/hero.png')] flex flex-col pt-12 bg-cover bg-center h-[100vh]  text-black">
            <div className="flex justify-center w-full">
                {/* border-8 border-slate-950 */}
                <img src="/assets/RH_logo.png" className="   rounded-full max-w-[14rem] max-h-[14rem]"/>
                <div className="flex flex-col pl-6 pt-10 font-bold">
                    <h1 className="text-8xl">RowdyHacks</h1>
                    <div className="flex justify-center pt-5 ">
                        <h1 className="text-4xl font-thin">A Land Before Hackathons</h1>
                    </div>
                </div>
            </div>
            <div className="pt-12 pl-[10%] flex justify-center">
                <img src="/assets/event_dates.png"/>
            </div>
            
        </div>

    )
}
