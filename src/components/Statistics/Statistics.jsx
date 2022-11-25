import { PropTypes } from "prop-types"
import css from "../Statistics/Statistics.module.css"

export const Statistics = ({ stats: { label, percentage, title } }) => {
    return <>
    {title && (
            <h1>{title}</h1>
        )} 
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
        </>
}

Statistics.propTypes = {
    stats: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        title: PropTypes.string,
    }).isRequired
}