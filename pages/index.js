import HeadObject from '../components/head'
import Nav from '../components/nav';
import Hero from '../components/hero';

export default function Home() {
  return (
    

    // Added the 100vh to this in order to get access to the full screen
    // background for dark theme reccomended by Eliza so blame her if you don't like it
    <div className=" text-white h-[100vh] w-full">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav/>
      <Hero/>
    </div>
  );
}
