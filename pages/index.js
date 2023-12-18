import HeadObject from '../components/head'
import Nav from '../components/nav';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />

      <Hero/>
    
    </div>
  );
}
