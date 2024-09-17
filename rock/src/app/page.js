import CustomHero from '@/components/hero/page.js';
import CustomNavbar from '../components/navbar/page.jsx';
import CoustomProduct from '@/components/product/page.js';


export default function Home() {
  return (
    <div className=''>
      <CustomNavbar />
      <CustomHero />
      <CoustomProduct />
    </div>
  );
}
