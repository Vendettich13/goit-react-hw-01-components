import { Statistics } from "../Statistics/Statistics"

export const StatisticList = ({stats}) => {
    return <ul>
        {stats.map(stat => 
            <li key={stat.id}>
                <Statistics stats={stat}/>
            </li>
            )}
    </ul>
}