import { Statistics } from "../Statistics/Statistics"
import { getRandomColor } from "../../utils/getRandomColor"
import { PropTypes } from "prop-types"
import css from "../Statistics/Statistics.module.css"

export const StatisticList = ({stats}) => {
    return <section>
        <div>
        <ul className={css.list}>
        {stats.map(stat => 
            <li key={stat.id} className={css.item} style={{backgroundColor: getRandomColor()}}>
                <Statistics stats={stat}/>
            </li>
            )}
            </ul>
            </div>
        </section>
    
}

StatisticList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({id: PropTypes.string.isRequired,}),
    ).isRequired
}