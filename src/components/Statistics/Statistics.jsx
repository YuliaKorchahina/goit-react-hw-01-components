export const Statistics = ({ stats, title }) => {
    return(
  <section className="statistics">
    {title && <h2 className="title">Upload stats</h2>}

    <ul className="stat-list">
      {stats.map(({ id, percentage, label }) => {
        return (
          <li className="item" key={id}>
            <span className="label"> {label}</span>
            <span className="percentage"> {percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>)
};
