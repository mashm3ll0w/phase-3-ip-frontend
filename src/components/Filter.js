export default function Filter({filter, setFilter}) {

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFilter({
          ...filter,
          [name]: value,
        });
      }

  return (
    <div className="filter-container">
      <select name="place" id="filterSelect" className="form-select" onChange={handleChange}>
        <option selected disabled>
          Filter by...
        </option>
        <option value="origin">Origin</option>
        <option value="destination">Destination</option>
      </select>

      <input
        className="form-control"
        type="text"
        name="name"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}
