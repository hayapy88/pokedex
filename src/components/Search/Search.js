import { React } from "react";
const typeIcons = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fight",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

function importTypeIconsAll(r) {
  return r.keys().map(r);
}

const icons = importTypeIconsAll(
  require.context("../../images/", false, /\.png/)
);

const handleToggleTypes = () => {
  const typeIcons = document.getElementById("typeIcons");
  if (typeIcons.classList.contains("hidden")) {
    typeIcons.classList.remove("hidden");
    typeIcons.classList.add("flex");
  } else {
    typeIcons.classList.add("hidden");
  }
};

const handleTypeSelect = (e, onTypeClick) => {
  const type = e.target.getAttribute("data-type");
  console.log(type);

  onTypeClick(type);
};

const IconsGallery = ({ icons, typeIcons, onTypeClick, activeType }) => (
  <div className="absolute top-2.5 right-3 sm:top-auto w-20 sm:w-72 py-1.5 bg-slate-500 sm:bg-transparent rounded">
    <button className="text-white sm:hidden" onClick={handleToggleTypes}>
      Type ▼
    </button>
    <div
      id="typeIcons"
      className="hidden sm:flex items-center justify-center flex-wrap mt-1 sm:mt-0"
    >
      {icons.map((icon, index) => (
        <img
          className={`typeIcon w-6 h-6 my-0.5 mx-1 sm:ml-2 sm:mr-0 ${
            activeType.includes(typeIcons[index]) ? "drop-shadow-5px" : ""
          }`}
          key={index}
          src={icon}
          alt={`Type: ${typeIcons[index]}`}
          data-type={`${typeIcons[index]}`}
          onClick={(e) => handleTypeSelect(e, onTypeClick)}
        />
      ))}
    </div>
  </div>
);

const Search = ({ onSearchChange, onTypeClick, activeType }) => {
  return (
    <>
      <div className="container fixed top-12 left-1/2 -translate-x-1/2 flex items-center justify-between sm:flex-wrap w-full h-14 sm:h-20 px-3 sm:px-2 bg-blue-100">
        <input
          className="search relative placeholder-slate-400 shadow appearance-none border rounded w-50 h-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline)]"
          id="username"
          type="text"
          placeholder="Search Pokemon..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <IconsGallery
          icons={icons}
          typeIcons={typeIcons}
          onTypeClick={onTypeClick}
          activeType={activeType}
        />
      </div>
    </>
  );
};

export default Search;
