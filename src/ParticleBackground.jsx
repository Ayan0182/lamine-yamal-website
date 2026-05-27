import Particles from "react-tsparticles"

function ParticleBackground(){

return(

<Particles

options={{

background:{
color:"#0A0F2C"
},

fpsLimit:60,

particles:{

number:{
value:50
},

color:{
value:"#FFD700"
},

links:{

enable:true,

distance:150,

color:"#004D98",

opacity:.3

},

move:{

enable:true,

speed:1

},

opacity:{

value:.5

},

size:{

value:3

}

}

}}

/>

)

}

export default ParticleBackground