import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

function ComparisonChart(){

const data={

labels:[
'Goals',
'Assists',
'Matches'
],

datasets:[

{

label:'Lamine Yamal',

data:[
25,
30,
100
],

backgroundColor:'#FFD700'

},

{

label:'Messi',

data:[
850,
380,
1000
],

backgroundColor:'#004D98'

},

{

label:'Neymar',

data:[
440,
260,
700
],

backgroundColor:'#A50044'

}

]

}

const options={

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

labels:{

color:'#ffffff'

}

}

},

scales:{

x:{

ticks:{

color:'#ffffff'

}

},

y:{

ticks:{

color:'#ffffff'

}

}

}

}

return <Bar data={data} options={options}/>

}

export default ComparisonChart