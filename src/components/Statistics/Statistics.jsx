export const Statistics = ({stats: {label, percentage, title}}) => {
    return <section className="statistics">
        {title && (
            <h1>{title}</h1>
        )}
    <ul className="stat-list">
            
    <li className="item">
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
    </li>    
  </ul>
</section>
}