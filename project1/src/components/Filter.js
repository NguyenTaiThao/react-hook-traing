function Filter({ value, onChange }) {
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };
  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={(e) => handleClick('all', e)}
        className={value === "all" ? "is-active" : ""}
      >
        All
      </a>
      <a
        href="#"
        onClick={(e) => handleClick('undone', e)}
        className={value === "undone" ? "is-active" : ""}
      >
        Undone
      </a>
      <a
        href="#"
        onClick={(e) => handleClick('done', e)}
        className={value === "done" ? "is-active" : ""}
      >
        Done
      </a>
    </div>
  );
}

export default Filter;
