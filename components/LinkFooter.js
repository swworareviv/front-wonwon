import Image from 'next/image';
import doc from '@/public/document.svg';
import message from '@/public/message.svg';
import mark from '@/public/mark.svg';
import location from '@/public/location.svg';

const LinkFooter = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div style={{ position: 'sticky', bottom: '0', 'z-index': '5' }}>
      <div className="flex p-2 space-x-2 text-butter-light font-kanit">
        <div
          onClick={() =>
            openInNewTab(
              'https://docs.google.com/forms/d/e/1FAIpQLScIEoSedtD3w-cvMDp6U4h_pe2aIUpWaE4tpf14maPhZUTlRQ/viewform'
            )
          }
          className=" cursor-pointer bg-[#835020] h-[48px] rounded-lg w-2/4 justify-between items-center flex p-2"
        >
          <Image
            alt="logo"
            src={doc}
            fit
            className="w-10"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(78%) sepia(11%) saturate(4156%) hue-rotate(13deg) brightness(105%) contrast(72%)'
            }}
          />
          <p>แนะนำ-ติชม</p>
          <Image
            alt="logo"
            src={message}
            fit
            className="w-10"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(78%) sepia(11%) saturate(4156%) hue-rotate(13deg) brightness(105%) contrast(72%)'
            }}
          />
        </div>
        <div
          onClick={() =>
            openInNewTab(
              'https://docs.google.com/forms/d/e/1FAIpQLSf_0Sg7j_PHtpFzFLVRMKdR7Lbjj_8-o3HdJB4NxeyJlso8jw/viewform'
            )
          }
          className=" cursor-pointer bg-[#835020] h-[48px] rounded-lg w-2/4 justify-between items-center flex p-2"
        >
          <Image
            alt="logo"
            src={mark}
            fit
            className="w-10"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(78%) sepia(11%) saturate(4156%) hue-rotate(13deg) brightness(105%) contrast(72%)'
            }}
          />
          <div className="flex flex-col items-center justify-between p-2">
            <p>บอกต่อ</p>
            <p>ร้านซ่อมแถวบ้าน</p>
          </div>
          <Image
            alt="logo"
            src={location}
            fit
            className="w-10"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(78%) sepia(11%) saturate(4156%) hue-rotate(13deg) brightness(105%) contrast(72%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkFooter;
