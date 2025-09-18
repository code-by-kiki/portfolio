import React, { useEffect, useRef, useState } from 'react';
const NAV_ITEMS = [
{ id: 'about', label: 'About' },
{ id: 'project', label: 'Project' },
{ id: 'resume', label: 'Resume'},
{ id: 'contact', label: 'Contact' },
];


function Navbar() {
const [active, setActive] = useState('home');
const observerRef = useRef(null);


// observe sections to mark active link
useEffect(() => {
const sections = NAV_ITEMS.map(i => document.getElementById(i.id)).filter(Boolean);
if (!sections.length) return;


const observer = new IntersectionObserver(
entries => {
entries.forEach(entry => {
if (entry.isIntersecting) setActive(entry.target.id);
});
},
{
root: null,
rootMargin: '-40% 0px -40% 0px',
threshold: 0,
}
);


sections.forEach(s => observer.observe(s));
observerRef.current = observer;
return () => observer.disconnect();
}, []);


const handleNavClick = id => {
const el = document.getElementById(id);
if (!el) return;
el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};


return (
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
<div className="container">
<a className="navbar-brand fw-bold" href="#home" onClick={() => handleNavClick('home')}>Krithika</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ms-auto">
{NAV_ITEMS.map(item => (
<li key={item.id} className="nav-item">
<button
onClick={() => handleNavClick(item.id)}
className={`nav-link btn btn-link ${active === item.id ? 'active text-primary fw-bold' : ''}`}
style={{ textDecoration: 'none' }}
>
{item.label}
</button>
</li>
))}
</ul>
</div>
</div>
</nav>
);
}

export default Navbar;