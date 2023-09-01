import { facebook, instagram,  twitter } from "../assets/icons";

export const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Sop Generator', link: '/sop'},
    { name: 'About Us', link: './#about' },
    { name:'Contact Us',link:"./#contact"}
  
  ];
export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
export const footerLinks = [

    {
        title: "Important Links",
        links: [
            { name: "Home", link: "/" },
            { name: "Sop Generator", link: "/sop" },
            { name: "About Us", link: "#about" },
            { name: "Service", link: "/" },
            { name: "", link: "/" },
        ],
    },
    
    {
        title: "Get in touch",
        links: [
            { name: "Phone: +1 226 774 9168", link: "tel:+1 226 774 9168" },
            { name: "Email: info@effizient.ca", link: "mailto:info@effizient.ca" },
        ],    
    },
    {
        title: "Our NewsLetter",
       links:[
        {name:"For latest Update",link:"/"},
        {name:"subscribe to our newsletter",link:"/"}
       ]
    },
   
];