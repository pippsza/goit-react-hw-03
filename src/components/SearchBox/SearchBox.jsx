import css from "../SearchBox/SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  const handleFilter = (event) => {
    onFilter(event.target.value);
    // console.log(event.target.value);
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input value={value} onChange={handleFilter} type="text" />
    </div>
  );
}
