import Image from 'next/image';
// import Link from 'next/link';
import Landing_img from '@/public/landing-img.png';
import Reviv_logo from '@/public/Reviv_logo_landing.png';
import wonwon_icon from '@/public/wonwon_icon.svg';

const LandingPage = ({}) => {
  const url = `/shops`;
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="w-full h-full bg-butter-default ">
      <div className="text-center">
        <Image
          alt="logo"
          src={wonwon_icon}
          width={200}
          height={120}
          style={{
            filter:
              'brightness(0) saturate(100%) invert(78%) sepia(11%) saturate(4156%) hue-rotate(13deg) brightness(105%) contrast(72%)'
          }}
        />
        <div>
          <Image alt="description" src={Landing_img} width={210} height={210} />
        </div>
        <div className="flex flex-col items-center justify-center mt-4 text-xs font-normal text-brown-default font-kanit">
          <p className="text-xl font-medium text-center ">WonWon</p>
          <p className="mt-2 text-base font-normal ">
            รวมร้านซ่อมใกล้บ้านคุณ <br />
            สนับสนุนสังคมแห่งการซ่อมแซมที่ไม่รู้จบ
          </p>
          <p className="mt-4 text-xl font-medium ">ฟีเจอร์ตอนนี้:</p>
          <ul className="flex flex-col items-center mt-2 text-base font-normal list-disc ">
            <li className=" w-fit">ค้นหาร้านซ่อมเสื้อในกรุงเทพฯ</li>
            <li className=" w-fit">รีวิวร้านให้ทุกคนรู้จัก</li>
          </ul>
        </div>
        <div className="flex justify-center w-full pt-3 pb-1">
          <a href={url}>
            <button
              type="button"
              className="h-12 text-base font-normal rounded-full w-80 btn btn-primary bg-green-default text-brown-default font-kanit"
            >
              เริ่มใช้งาน
            </button>
          </a>
        </div>
        <div className="flex p-2 space-x-2 text-butter-light font-kanit">
          <div
            onClick={() =>
              openInNewTab(
                'https://revivcommunity.org/wonwon-future-features/'
              )
            }
            className=" cursor-pointer bg-[#835020] h-[48px] rounded-lg w-full justify-center items-center flex "
          >
            <p>ติดตามฟีเจอร์ใหม่</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
