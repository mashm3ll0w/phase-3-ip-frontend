export default function Filter() {

  return (
    <div className="filter-container">
      <select id="filterSelect" className="form-select">
        <option selected disabled>
          Filter by...
        </option>
        <option value="origin">Origin</option>
        <option value="destination">Destination</option>
      </select>

      <input
        className="form-control"
        type="text"
        name="search"
        placeholder="Search..."
      />
    </div>
  );
}
