const Roster = async () => {
  const res = await fetch('http://localhost:3000/api/getRoster');
  const data = await res.json();
  return <section className="mb-8">{data}</section>;
};

export default Roster;
