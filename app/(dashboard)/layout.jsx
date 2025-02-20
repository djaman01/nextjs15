//Layout file of the root

const layout = ({ children }) => {
  return (
    <div>
      <p className="text-3xl text-center">Dashboard Navbar in Layout.jsx</p>
      {children}
    </div>
  );
};

export default layout;
