import "./App.css";
const Header = () => {
  return (
    <div
      className="flex bg-black text-white"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/456/376/non_2x/brain-3d-icon-isolated-on-transparent-background-gold-texture-3d-rendering-free-png.png"
          alt="logo"
          height="50"
          width="80"
        />
        <h2 className="text-transform: uppercase letter-spacing: 1rem">
          Psychiatry
        </h2>
      </div>
      <ul className="flex items-center">
        <li className="mr-2">Who we are</li>
        <li className="mr-2">Who we treat</li>
        <li className="mr-2">Serivces Resources</li>
        <li className="mr-2">
          <button className="button text-black rounded-2xl text-xs p-3 ml-2">
            Book an Appointemnt
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
