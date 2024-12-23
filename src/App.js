import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
function App() {
    <Navbar/>
return (
<Router>
<div>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>

</ul>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/Contact" element={<Contact />} />

</Routes>
</div>
</Router>
);
}
export default App;
