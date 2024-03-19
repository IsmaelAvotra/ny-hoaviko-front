import ByProvince from './components/home/ByProvince'
import Header from './components/home/Header'

export default function Home() {
  return (
    <main className='min-h-screen ] max-w-[1600px] mx-auto'>
      <Header />
      <ByProvince />
    </main>
  )
}
