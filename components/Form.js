export default ({ className, data }) => {
  return (
    <form className={className}>
      <input
        type="text"
        value={data?.firstName[0]}
        onChange={(e) => data?.firstName[1](e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <label>
        <input
          type="checkbox"
          checked={data?.checked[0]}
          onChange={(e) => data.checked[1](e.target.checked)}
        />
        Not a robot?
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
