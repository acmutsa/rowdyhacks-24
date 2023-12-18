import HeadObject from '../components/head'
import Nav from '../components/nav';
import Hero from '../components/hero';
export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <Hero/>
    </div>
  )
}
