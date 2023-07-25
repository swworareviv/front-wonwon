import Image from 'next/image';
// import Link from 'next/link';
import Landing_img from '@/public/landing-img.png';
import Reviv_logo from '@/public/Reviv_logo_landing.png';
import wonwon_icon from '@/public/wonwon_icon.svg';

const LandingPage = ({}) => {
  const url = `/shops`;
  return (
    <div className="w-full p-4 bg-butter-default ">
      <div className="p-4 pt-5 text-center">
        <Image
          alt="logo"
          src={wonwon_icon}
          width={120}
          height={100}
          style={{
            filter:
              'brightness(0) saturate(100%) invert(78%) sepia(11%) saturate(4156%) hue-rotate(13deg) brightness(105%) contrast(72%)'
          }}
        />
        <div className="pt-4">
          <Image alt="description" src={Landing_img} width={310} height={310} />
        </div>
        <div className="my-4 text-xs font-normal text-brown-default font-kanit">
          <p>แพลตฟอร์มรวบรวมร้าน (ช่าง) ซ่อมเสื้อผ้า</p>
          <p>จากทั่วกรุงเทพให้คุณได้ค้นพบร้าน local ใหม่ๆ</p>
          <p>ละแวกใกล้คุณ เลือกร้านที่ตรงใจได้ตามระยะทาง,</p>
          <p>บริการและรีวิวจากเพื่อนๆในคอมมูนิตี้</p>
          <p>ไม่ว่าจะตัดขาหรือซ่อมรูขาด ร้านใกล้บ้าน</p>
          <p>หรือใกล้ที่ทำงานก็หาได้ที่ Repair Market</p>
        </div>
        <div className="flex justify-center w-full pt-10 pb-8">
          <a href={url}>
            <button
              type="button"
              className="h-12 text-base font-normal rounded-full w-80 btn btn-primary bg-green-default text-brown-default font-kanit"
            >
              เริ่มเลย
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
