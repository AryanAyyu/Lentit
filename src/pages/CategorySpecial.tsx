I want to display this page 

import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";



// Mock product data for categories
const categoryProducts = {
  Sherwani : [
    {
      id: 101,
      name: "Sherwani",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1534217466718-ef4950786e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1681717055630-c62333c22fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 101,
      name: "Sherwani",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1534217466718-ef4950786e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1681717055630-c62333c22fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 101,
      name: "Sherwani",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1534217466718-ef4950786e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1681717055630-c62333c22fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 101,
      name: "Sherwani",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1534217466718-ef4950786e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1681717055630-c62333c22fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
  ]
,
Kurta :[
    {
      id: 102,
      name: "Kurta & Pajama",
      price: 79.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 102,
      name: "Kurta & Pajama",
      price: 79.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 102,
      name: "Kurta & Pajama",
      price: 79.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 102,
      name: "Kurta & Pajama",
      price: 79.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 102,
      name: "Kurta & Pajama",
      price: 79.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
  ],
  EthnicWear:[
    {
      id: 103,
      name: "Ethnic Wear",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhdGhhbmklMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 103,
      name: "Ethnic Wear",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhdGhhbmklMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 103,
      name: "Ethnic Wear",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhdGhhbmklMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 103,
      name: "Ethnic Wear",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhdGhhbmklMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 103,
      name: "Ethnic Wear",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhdGhhbmklMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
  ],
  EthnicFootwear:[
    {
      id: 104,
      name: "Ethnic Footwear",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1670983855679-05158dc6fb6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZvb3R3ZWFyfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 104,
      name: "Ethnic Footwear",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1670983855679-05158dc6fb6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZvb3R3ZWFyfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 104,
      name: "Ethnic Footwear",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1670983855679-05158dc6fb6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZvb3R3ZWFyfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 104,
      name: "Ethnic Footwear",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1670983855679-05158dc6fb6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZvb3R3ZWFyfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 104,
      name: "Ethnic Footwear",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1670983855679-05158dc6fb6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZvb3R3ZWFyfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
  ],
  suits: [
    {
      id: 105,
      name: "Suits & Blazers",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1679412330191-6b2faa2f476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1679412330075-ef0c1c79f8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 105,
      name: "Suits & Blazers",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1679412330191-6b2faa2f476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1679412330075-ef0c1c79f8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 105,
      name: "Suits & Blazers",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1679412330191-6b2faa2f476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1679412330075-ef0c1c79f8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 105,
      name: "Suits & Blazers",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1679412330191-6b2faa2f476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1679412330075-ef0c1c79f8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 105,
      name: "Suits & Blazers",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1679412330191-6b2faa2f476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1679412330075-ef0c1c79f8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
  ],
  jackets: [
    {
        id: 106,
        name: "Jackets",
        price: 59.99,
        imageUrl: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        hoverImageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 106,
      name: "Jackets",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 106,
      name: "Jackets",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 106,
      name: "Jackets",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 106,
      name: "Jackets",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
      
  ],
};


const CategorySpecial = () => {
  const { category } = useParams<{ category: string }>();
  const productsRef = useRef<HTMLDivElement>(null);  
  const validCategory = category as keyof typeof categoryProducts;  
  const products = categoryProducts[validCategory] || [];

  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
    
    // Animation for products
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

    const productsElements = document.querySelectorAll(".reveal-on-scroll");

    productsElements.forEach((el) => observer.observe(el));

    return () => {
      productsElements.forEach((el) => observer.unobserve(el));
    };
  }, [category]);

    

  return (
    <div className="min-h-screen">

        <div className="py-6 text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text uppercase tracking-wide drop-shadow-lg">
            Special Categories
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full"></div>
        </div>



      
      {/* Products Grid */}
      <section className="py-12 px-6 bg-gray-50">
          <div className="container mx-auto">
              {products.length > 0 ? (
                  <div
                  ref={productsRef}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                  >
                  {products.map((product, index) => (
                      <div key={product.id} className="group">
                      <ProductCard
                          {...product}
                          index={index}
                          className="transform transition duration-300 group-hover:scale-105"
                      />
                  </div>
                  ))}
          </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                No products found
              </h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any products in this category. Please check back later.
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

    </div>
  );
};

export default CategorySpecial;