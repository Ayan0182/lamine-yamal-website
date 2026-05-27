import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

function GoalsChart(){

const data = {

labels:[
'2022',
'2023',
'2024',
'2025'
],

datasets:[

{

label:'Goals',

data:[
5,
12,
18,
25
],

backgroundColor:[

'#004D98',

'#004D98',

'#004D98',

'#004D98'

],

borderColor:'#ffffff',

borderRadius:10

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

export default GoalsChart