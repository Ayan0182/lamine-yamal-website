import { useState, useEffect } from 'react'
import './App.css'
// import GoalsChart from './GoalsChart'
// import ComparisonChart from './ComparisonChart'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { TypeAnimation } from 'react-type-animation'
import StatsPage from './StatsPage'
import {Routes, Route, Link } from 'react-router-dom'

function App() {

const [loading,setLoading]=useState(true)

const [active,setActive]=useState('home')

const [showTop,setShowTop]=useState(false)

useEffect(()=>{

AOS.init({

duration:1200,

once:true

})

const timer=setTimeout(()=>{

setLoading(false)

},2500)

return ()=>clearTimeout(timer)

},[])

useEffect(()=>{

const handleScroll=()=>{

const sections=[
'home',
'bio',
'achievements',
'gallery',
'stats'
]

sections.forEach(section=>{

const element=
document.getElementById(section)

if(element){

const top=
element.offsetTop-150

const bottom=
top+element.offsetHeight

if(

window.scrollY>=top &&
window.scrollY<bottom

){

setActive(section)

}

}

})

}

window.addEventListener(
'scroll',
handleScroll
)

return ()=>{

window.removeEventListener(
'scroll',
handleScroll
)

}

},[])

useEffect(()=>{

const handleTopButton=()=>{

if(window.scrollY>500){

setShowTop(true)

}
else{

setShowTop(false)

}

}

window.addEventListener(
'scroll',
handleTopButton
)

return()=>{

window.removeEventListener(
'scroll',
handleTopButton
)

}

},[])

if(loading){

return(

<div className="loading-screen">

<h1>

LAMINE YAMAL

</h1>

<p>

Future Of Football ⚽

</p>

<div className="loader"></div>

</div>

)

}

return(

<Routes>

<Route

path="/"

element={

<div className="container">

<nav className="navbar">

<h2>Lamine Yamal</h2>

<ul>

<li>

<a
href="#home"
className={
active==='home'
?'active-link'
:''
}
>

Home

</a>

</li>

<li>

<a
href="#bio"
className={
active==='bio'
?'active-link'
:''
}
>

Biography

</a>

</li>

<li>

<a
href="#achievements"
className={
active==='achievements'
?'active-link'
:''
}
>

Achievements

</a>

</li>

<li>

<a
href="#gallery"
className={
active==='gallery'
?'active-link'
:''
}
>

Gallery

</a>

</li>

<li>

<Link to="/stats">
Stats
</Link>

</li>

</ul>

</nav>


<section
id="home"
className="hero"
>

<div className="hero-text">

<h1>LAMINE YAMAL</h1>

<h3>

<TypeAnimation

sequence={[

'The Future Of Football',

1500,

'Barcelona Wonderkid',

1500,

'Spain Rising Superstar',

1500

]}

wrapper="span"

speed={45}

repeat={Infinity}

/>

</h3>

<p>

Rising Barcelona and Spain superstar.
One of football's brightest young talents.

</p>

<button>

Explore Career

</button>

</div>

<div className="hero-image">

<img
src="/src/assets/lamine-yamal-1.png"
alt="Lamine Yamal"
/>

</div>

</section>

<hr />

<section
id="bio"
className="bio"
>

<h2>Biography</h2>

<div className="bio-cards">

<div className="card" data-aos="fade-up">
<h3>Birth Date</h3>
<p>13 July 2007</p>
</div>

<div className="card" data-aos="fade-up">
<h3>Nationality</h3>
<p>Spain</p>
</div>

<div className="card" data-aos="fade-up">
<h3>Club</h3>
<p>FC Barcelona</p>
</div>

<div className="card" data-aos="fade-up">
<h3>Position</h3>
<p>Right Winger</p>
</div>

<div className="card" data-aos="fade-up">
<h3>Height</h3>
<p>1.80 m</p>
</div>

<div className="card" data-aos="fade-up">
<h3>National Team</h3>
<p>Spain</p>
</div>

</div>

</section>


<hr />

<section className="timeline">

<h2>Career Timeline</h2>

<div className="timeline-box">

<div className="timeline-item" data-aos="fade-right">
<h3>2014</h3>
<p>Joined La Masia Academy</p>
</div>

<div className="timeline-item" data-aos="fade-right">
<h3>2023</h3>
<p>FC Barcelona First Team Debut</p>
</div>

<div className="timeline-item" data-aos="fade-right">
<h3>2023</h3>
<p>Spain National Team Debut</p>
</div>

<div className="timeline-item" data-aos="fade-right">
<h3>2024</h3>
<p>UEFA Euro Success</p>
</div>

<div className="timeline-item" data-aos="fade-right">
<h3>2025</h3>
<p>Global Football Rising Star</p>
</div>

</div>

</section>


<hr />

<section
id="stats"
className="stats"
>

<h2>Career Stats</h2>

<div className="stats-container">

<div className="stat-card" data-aos="zoom-in">
<h1>25+</h1>
<p>Goals</p>
</div>

<div className="stat-card" data-aos="zoom-in">
<h1>30+</h1>
<p>Assists</p>
</div>

<div className="stat-card" data-aos="zoom-in">
<h1>100+</h1>
<p>Matches</p>
</div>

<div className="stat-card" data-aos="zoom-in">
<h1>5+</h1>
<p>Trophies</p>
</div>

</div>

</section>

<hr />

<section
id="achievements"
className="achievements"
>

<h2>Achievements</h2>

<div className="achievement-container">

<div className="achievement-card" data-aos="zoom-in">
<h3>UEFA Euro Champion</h3>
<p>Won major international success with Spain at a young age.</p>
</div>

<div className="achievement-card" data-aos="zoom-in">
<h3>Barcelona First Team</h3>
<p>Became one of Barcelona's youngest rising stars.</p>
</div>

<div className="achievement-card" data-aos="zoom-in">
<h3>Record Breaker</h3>
<p>Set multiple football milestones.</p>
</div>

<div className="achievement-card" data-aos="zoom-in">
<h3>Global Talent</h3>
<p>Recognized worldwide as football's future superstar.</p>
</div>

</div>

</section>


<hr />

<section
id="gallery"
className="gallery"
>

<h2>Gallery</h2>

<div
className="gallery-grid"
data-aos="flip-left"
>

<img src="/src/assets/gal-1.jpg" alt="Lamine Yamal 1"/>
<img src="/src/assets/gal-2.jpg" alt="Lamine Yamal 2"/>
<img src="/src/assets/gal-3.jpg" alt="Lamine Yamal 3"/>
<img src="/src/assets/gal-4.jpg" alt="Lamine Yamal 4"/>

</div>

</section>

{
showTop && (

<button className="top-btn" onClick={()=>{
window.scrollTo({
top:0,
behavior:'smooth'
})
}}>
⬆
</button>

)
}

<footer className="footer">

<div className="footer-top-line">

<div className="line"></div>

<div className="star">

☆

</div>

<div className="line"></div>

</div>

<h2>

Lamine Yamal

</h2>

<p className="footer-text">

Future Of Football

</p>

<div className="football-animation">
⚽
</div>

<p className="copyright">

© 2026 All About Lamine Yamal

</p>

<div className="social-icons">

<a href="#">

<i className="fa-brands fa-facebook-f"></i>

</a>

<a href="#">

<i className="fa-brands fa-instagram"></i>

</a>

<a href="#">

<i className="fa-brands fa-x-twitter"></i>

</a>

<a href="#">

<i className="fa-brands fa-youtube"></i>

</a>

<a href="#">

<i className="fa-brands fa-linkedin-in"></i>

</a>

</div>

</footer>

</div>

}

/>

<Route

path="/stats"

element={<StatsPage/>}

/>

</Routes>

)

}

export default App