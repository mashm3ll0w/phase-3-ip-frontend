export default function Search({ search, setSearch }) {
  function handleChange(e) {
    let name = e.target.value;
    setSearch(name);
  }

  return (
    <div className="filter-container">
      <input
        className="form-control search-input"
        type="text"
        name="name"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}
