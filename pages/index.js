import HeadObject from '../components/head'
import Nav from '../components/nav';
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />

      The perfect Next.js Theme. Contains everything. Check README for more information.
        <Footer/>

    </div>
  )
}
