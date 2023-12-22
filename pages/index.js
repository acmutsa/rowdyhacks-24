import HeadObject from '../components/head'
import Nav from '../components/nav';
import Hero from '../components/hero';

export default function Home() {
  return (
    // Added the 100vh to this in order to get access to the full screen
    <div className="dark:bg-black dark:text-white h-[100vh]">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />

      <Hero/>
    </div>
  );
}
