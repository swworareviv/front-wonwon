import Image from "next/legacy/image";
import Reviv_logo from '@/public/Reviv_logo_header.jpg';
import wonwon_icon from '@/public/wonwon_icon.svg';

const Header = () => {
  return (
    <div className="px-0 pt-1 flex w-full h-[48px] bg-green-default items-center drop-shadow-lg">
      <nav>
        <div
          style={{ width: 'fit-content', height: '100%', position: 'relative' }}
        >
          <Image
            className="cursor-pointer "
            alt="logo"
            src={wonwon_icon}
            height={110}
            width={80}
            onClick={() => (window.location.href = '/shops')}
            style={{
              filter:
                'brightness(0) saturate(100%) invert(95%) sepia(46%) saturate(334%) hue-rotate(314deg) brightness(103%) contrast(95%)'
            }}
          />
        </div>
      </nav>
    </div>
  );
};
export default Header;
