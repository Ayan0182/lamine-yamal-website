import './StatsPage.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import GoalsChart from './GoalsChart'
import ComparisonChart from './ComparisonChart'



function StatsPage(){

const [team,setTeam]=useState('barcelona')

const barcelona={

"Supercopa de España":[
["2026",2,0,0,0,0],
["2025",2,2,0,0,0],
["2024",2,1,0,0,0]
],

"La Liga":[
["2025-26",28,16,11,1,0],
["2024-25",35,9,13,3,0],
["2023-24",37,5,6,3,0]
],

"UEFA Champions League":[
["2025-26",10,6,4,4,0],
["2024-25",13,5,3,0,0],
["2023-24",10,0,2,2,0]
]

}

const spain={

"World Cup Qualifiers":[
["2025-26",2,0,3,0,0]
],

"UEFA EURO":[
["2024",7,1,4,1,0]
],

"UEFA EURO Qualifiers":[
["2023-24",4,2,0,0,0]
]

}

const current=
team==='barcelona'
?barcelona
:spain

return(

<div className="stats-page">

<div className="stats-header">

<h1>Lamine Yamal Stats</h1>

<p>
<span id='fcb'>Barcelona</span> • <span id='esp'>Spain</span>
</p>

<Link to="/">

<button>

← Back Home

</button>

</Link>

</div>

<div className="tabs">

<button

className={
team==='barcelona'
?'active-tab'
:''
}

onClick={()=>setTeam('barcelona')}

>

BARCELONA

</button>

<button

className={
team==='spain'
?'active-tab'
:''
}

onClick={()=>setTeam('spain')}

>

SPAIN

</button>

</div>

{

Object.entries(current)
.map(

([title,data])=>(

<div
className="table-section"
key={title}
>

<h2>

{title}

</h2>

<table>

<thead>

<tr>

<th>Year</th>

<th>Matches</th>

<th>Goals</th>

<th>Assists</th>

<th>🟨</th>

<th>🟥</th>

</tr>

</thead>

<tbody>

{

data.map(

(row,index)=>(

<tr key={index}>

<td>{row[0]}</td>

<td>{row[1]}</td>

<td>{row[2]}</td>

<td>{row[3]}</td>

<td>{row[4]}</td>

<td>{row[5]}</td>

</tr>

)

)

}

</tbody>

</table>

</div>

)

)

}


<div className="stats-chart">

<h2>

Goals Analysis

</h2>

<div className="chart-box">

<GoalsChart/>

</div>

</div>

<div className="stats-chart">

<h2>

Player Comparison &nbsp; - &nbsp; Yamal &nbsp; vs &nbsp; Messi &nbsp; vs &nbsp; Neymar

</h2>

<div className="chart-box">

<ComparisonChart/>

</div>

</div>

</div>

)

}

export default StatsPage