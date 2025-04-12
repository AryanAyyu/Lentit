import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const subCategories = {
  men: [
    {
      id: 101,
      name: "Sherwani",
      categorySlug :"sherwani",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1534217466718-ef4950786e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1681717055630-c62333c22fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 102,
      name: "Kurta & Pajama",
      categorySlug :"kurta-pajama",
      price: 79.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 103,
      name: "Ethnic Wear",
      categorySlug :"ethnic-wear",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhdGhhbmklMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 104,
      name: "Ethnic Footwear",
      categorySlug :"ethnic-footwear",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1670983855679-05158dc6fb6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZvb3R3ZWFyfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 105,
      name: "Suits & Blazers",
      categorySlug :"suits-blazers",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1679412330191-6b2faa2f476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1679412330075-ef0c1c79f8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 106,
        name: "Jackets",
        categorySlug :"jackets",
        price: 59.99,
        imageUrl: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        hoverImageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      }
  ],
  women: [
    {
      id: 201,
      name: "Lehengas",
      categorySlug :"lehengas",
      price: 129.99,
      imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80"
    },
    {
      id: 202,
      name: "Sarees",
      categorySlug :"sarees",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1502727135886-df285cc8379f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 203,
      name: "Gowns",
      categorySlug :"gowns",
      price: 119.99,
      imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=873&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 204,
      name: "Jackets",
      categorySlug :"jacketswomen",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 205,
      name: "Heels",
      categorySlug :"heels",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1518482207194-1e379dffe574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1559309123-86f0a7e3183a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 206,
      name: "Kurtis & Suit Sets",
      categorySlug :"kurtis-suit-sets",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1581101767113-899c31f65b71?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
    }
  ],
  costumes: [
    {
      id: 301,
      name: "Indian Ethnic Costumes",
      categorySlug :"indian-ethnic-costumes",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1608889476518-53d57fa37859?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1608889476518-53d57fa37859?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 302,
      name: "Japanese Kimono & Yukata",
      categorySlug :"japanese-kimono-yukata",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80"
    },
    {
      id: 303,
      name: "Superhero Costumes",
      categorySlug :"superhero-costumes",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80"
    },
    {
      id: 304,
      name: "Doctor, Nurse & Lab Coat Costumes",
      categorySlug :"doctor-nurse-lab-coat-costumes",
      price: 74.99,
      imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1022&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1022&q=80"
    },
    {
      id: 305,
      name: "Police, Army & Firefighter Costumes",
      categorySlug :"police-army-firefighter-costumes",
      price: 64.99,
      imageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80"
    },
    {
      id: 306,
      name: "Halloween Costumes",
      categorySlug :"halloween-costumes",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    }
  ],
  accessories: [
    {
      id: 401,
      name: "Jewellery",
      categorySlug :"jewelry",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 402,
      name: "Watches",
      categorySlug :"watches",
      price: 149.99,
      imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 403,
      name: "Sunglasses",
      categorySlug :"sunglasses",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1608505362930-d3aabcee5d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 404,
      name: "Belts & Scarves",
      categorySlug :"belts-scarves",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 405,
      name: "Bags",
      categorySlug :"bags",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1638290109243-597e5b8c838a?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1601370552761-6eb9c9928f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 406,
      name: "Bridal & Ethnic Accessories",
      categorySlug :"bridal-ethnic-accessories",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1629219793431-cad84116b32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1628947733273-fb0ff2348497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    }
  ],
  
};

const categoryProducts = {
  men: [
    {
      id: 101,
      name: "Classic Navy Suit",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 102,
      name: "Tailored Dinner Jacket",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=871&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 103,
      name: "Designer Tuxedo",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1589363360147-4f4ae5ed7b8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=930&q=80"
    },
    {
      id: 104,
      name: "Premium Silk Shirt",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1608236415053-3691791bbffe?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 105,
      name: "Cashmere Sweater",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 106,
      name: "Designer Sneakers",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 107,
      name: "Premium Watch",
      price: 129.99,
      imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 108,
      name: "Leather Belt",
      price: 39.99,
      imageUrl: "https://images.unsplash.com/photo-1608505362930-d3aabcee5d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 109,
      name: "Luxury Cufflinks",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1629219793431-cad84116b32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1628947733273-fb0ff2348497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 110,
      name: "Designer Sunglasses",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    }
  ],
  women: [
    {
      id: 201,
      name: "Designer Evening Gown",
      price: 129.99,
      imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80"
    },
    {
      id: 202,
      name: "Silk Cocktail Dress",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1502727135886-df285cc8379f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 203,
      name: "Premium Leather Jacket",
      price: 119.99,
      imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=873&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 204,
      name: "Designer Handbag",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 205,
      name: "Cashmere Scarf",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1518482207194-1e379dffe574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1559309123-86f0a7e3183a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 206,
      name: "Designer Heels",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1581101767113-899c31f65b71?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
    },
    {
      id: 207,
      name: "Premium Jewelry Set",
      price: 149.99,
      imageUrl: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 208,
      name: "Silk Blouse",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 209,
      name: "Designer Sunglasses",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 210,
      name: "Luxury Watch",
      price: 139.99,
      imageUrl: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=694&q=80"
    }
  ],
  costumes: [
    {
      id: 301,
      name: "Superhero Costume",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1608889476518-53d57fa37859?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1608889476518-53d57fa37859?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 302,
      name: "Princess Gown",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80"
    },
    {
      id: 303,
      name: "Pirate Costume",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80"
    },
    {
      id: 304,
      name: "Vampire Costume",
      price: 74.99,
      imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1022&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1022&q=80"
    },
    {
      id: 305,
      name: "Witch Costume",
      price: 64.99,
      imageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80"
    },
    {
      id: 306,
      name: "Zombie Costume",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 307,
      name: "Fairy Costume",
      price: 84.99,
      imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 308,
      name: "Wizard Costume",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1022&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1022&q=80"
    },
    {
      id: 309,
      name: "Superhero Cape",
      price: 39.99,
      imageUrl: "https://images.unsplash.com/photo-1608889476518-53d57fa37859?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1608889476518-53d57fa37859?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 310,
      name: "Medieval Knight",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1589363360147-4f4ae5ed7b8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=930&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1589363360147-4f4ae5ed7b8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=930&q=80"
    }
  ],
  accessories: [
    {
      id: 401,
      name: "Designer Sunglasses",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 402,
      name: "Luxury Watch",
      price: 149.99,
      imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 403,
      name: "Leather Belt",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1608505362930-d3aabcee5d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 404,
      name: "Designer Handbag",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 405,
      name: "Silk Scarf",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1638290109243-597e5b8c838a?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1601370552761-6eb9c9928f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 406,
      name: "Luxury Cufflinks",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1629219793431-cad84116b32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1628947733273-fb0ff2348497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 407,
      name: "Designer Earrings",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 408,
      name: "Premium Necklace",
      price: 119.99,
      imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 409,
      name: "Designer Bracelet",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
    },
    {
      id: 410,
      name: "Luxury Hat",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }
  ],
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};



const Special = () => {
  const { category } = useParams<{ category: string }>();
  const productsRef = useRef<HTMLDivElement>(null);  
  const categoriesRef = useRef<HTMLDivElement>(null);  
  const validCategory = category as keyof typeof subCategories;  
  const categories = subCategories[validCategory] || [];
  const products = categoryProducts[validCategory] || [];

  useEffect(() => {
    window.scrollTo(0, 0);

    

    
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [category]);

  return (


    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
        <div className="container mx-auto">
          <div className="flex items-center mb-4 pt-10">
            <Link to="/" className="text-foreground/70 hover:text-vanilla transition-colors">
              Home
            </Link>
            <span className="mx-2 text-foreground/50">/</span>
            <span className="text-vanilla font-medium">
              {category ? capitalizeFirstLetter(category) : "Category"}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-coffee">
                {category ? capitalizeFirstLetter(category) : "Products"}
              </h1>
              <p className="text-foreground/70 mt-2">
                Discover our premium selection of {category} items available for rent
              </p>
            </div>
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mx-auto px-4 py-2 flex items-center justify-center mt-1" >
        <div className=" w-full">
          <div className="py-1 text-center">
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text uppercase tracking-wide drop-shadow-lg">
                {category} Categories
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full"></div>
          </div>

          <section className="py-12 px-1 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              {categories.length > 0 ? (
                <div
                  ref={categoriesRef}
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                >
                  {categories.map((cat, index) => (
                    <div key={cat.id} className="group">
                      <Link to={`/products/${category}/${cat.categorySlug}`}>
                        <CategoryCard
                          id={cat.id}
                          name={cat.name}
                          imageUrl={cat.imageUrl}
                          hoverImageUrl={cat.hoverImageUrl}
                          index={index}
                          className="transform transition duration-300 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    No categories found
                  </h3>
                  <p className="text-gray-600 mb-8">
                    We couldn't find any categories here. Please check back later.
                  </p>
                  <Link to="/">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </section>

          <div className="py-1 text-center">
            <h1 className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text uppercase tracking-wide drop-shadow-lg">
              Related Products
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full"></div>
          </div>

          <section className="py-12 px-1">
            <div className=" mx-auto">
              {products.length > 0 ? (
                <div ref={productsRef} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {products.map((product, index) => (
                    <ProductCard
                    {...product}
                    index={index}
                    className="reveal-on-scroll transform transition duration-300 hover:scale-105"
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-coffee mb-4">No products found</h3>
                  <p className="text-foreground/70 mb-8">
                    We couldn't find any products in this category. Please check back later.
                  </p>
                  <Link to="/">
                    <Button>Return to Home</Button>
                  </Link>
                </div>
              )}
            </div>
          </section>
        </div>
        
        
      </div>
      <Footer/>
    </div>
  );
};

export default Special;