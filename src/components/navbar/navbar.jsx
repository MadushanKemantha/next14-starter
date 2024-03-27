import Links from "./Links/links";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <Links />
        </div>
        <div className="text-xl font-bold">
          <img src="https://files.catbox.moe/d4a5r9.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
