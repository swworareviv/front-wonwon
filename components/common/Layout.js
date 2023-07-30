const Layout = ({ header, children, footer }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div style={{ position: 'sticky', top: '0', 'z-index': '999' }}>
        {header}
      </div>
      {children}
      {footer ? (
        <div style={{ position: 'sticky', bottom: '0', 'z-index': '5' }}>
          <div className="flex p-2 space-x-2 text-butter-light font-kanit">
            <div className=" bg-[#835020] h-[48px] rounded-lg w-2/4 justify-center items-center flex ">
              <p>แนะนำ-ติชม</p>
            </div>
            <div className=" bg-[#835020] h-[48px] rounded-lg w-2/4 text-center">
              <p>บอกต่อ</p>
              <p>ร้านซ่อมแถวบ้าน</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Layout;
