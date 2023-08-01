const Layout = ({ header, children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div style={{ position: 'sticky', top: '0', 'z-index': '999' }}>
        {header}
      </div>
      {children}
    </div>
  );
};

export default Layout;
