
import {
    
    backend,
    creator,
    web,
    javascript,
    
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";



  export const navLinks = [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ];
  
  const services = [
    { title: "Frontend Web Developer", icon: web },
    { title: "React Developer", icon: reactjs },
    { title: "Scroll Animation Expert", icon: threejs },
    { title: "Creative Website Designer", icon: figma },
  ];
  
  const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Three JS", icon: threejs },
    { name: "GSAP", icon: threejs },
    { name: "git", icon: git },
    { name: "MongoDB", icon: mongodb },
    { name: "Node JS", icon: nodejs },
    { name: "Redux Toolkit", icon: redux },
    { name: "Backend Developer", icon: backend },
    { name: "Content Creator", icon: creator },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Personal Projects",
      icon: web,
      iconBg: "#383E56",
      date: "2023 - Present",
      points: [
        "Built high-quality websites using React, Tailwind, GSAP, and Three.js.",
        "Implemented custom scroll animations and 3D visuals using Three.js.",
        "Created landing pages with responsive design and modern UI/UX.",
        "Collaborated with design references and converted them into live sites.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He transformed our static concept into a fully animated, interactive experience!",
      name: "Client One",
      designation: "Founder",
      company: "StartupX",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      testimonial:
        "A very creative and skilled frontend developer. Loved the animation work.",
      name: "Client Two",
      designation: "Marketing Lead",
      company: "DesignHive",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Libertans",
      description:
        "Animated landing page with modern scroll effects and smooth transitions built using GSAP, ScrollTrigger, and Locomotive JS.",
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "GSAP", color: "green-text-gradient" },
        { name: "Locomotive", color: "pink-text-gradient" },
      ],
      image: carrent,
      source_code_link: "https://github.com/yourgithub/libertans",
    },
    {
      name: "The Line Clone",
      description:
        "Clone of the award-winning website 'The Line' with stunning animations using ScrollTrigger and smooth scroll using Lenis.",
      tags: [
        { name: "JavaScript", color: "blue-text-gradient" },
        { name: "GSAP", color: "green-text-gradient" },
        { name: "Lenis", color: "pink-text-gradient" },
      ],
      image: jobit,
      source_code_link: "https://github.com/yourgithub/the-line-clone",
    },
    {
      name: "Clear Bank",
      description:
        "A stylish banking website project showcasing responsive design, clean layout, and minimal UI.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "Tailwind", color: "green-text-gradient" },
        { name: "Responsive", color: "pink-text-gradient" },
      ],
      image: tripguide,
      source_code_link: "https://github.com/yourgithub/clear-bank",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };