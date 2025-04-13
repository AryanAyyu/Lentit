
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    seller: string;
    size: string;
    brand:string;
    condition: string;
    description: string;
    category: string;
    storeId?: number; // Optional, for store products
  }
  
  export interface ThriftStore {
    id: number;
    name: string;
    image: string;
    isVerified: boolean;
    location: string;
    description: string;
    rating: number;
    products: Product[];
  }
  
  // Individual products data
  export const individualProducts: Product[] = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1556041068-5874261f23e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmludGFnZSUyMERlbmltJTIwSmFja2V0fGVufDB8fDB8fHww",
      seller: "Mia Thompson",
      size: "M",
      condition: "Good",
brand: "Zara",
      description: "Classic vintage denim jacket from the 90s. Slightly worn but in great condition.",
      category: "Outerwear"
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      price: 28.50,
      image: "https://plus.unsplash.com/premium_photo-1723914108893-ac3047a4f1df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmxvcmFsJTIwU3VtbWVyJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D",
      seller: "Emma Wilson",
      size: "S",
      brand: "Zara",
      condition: "Like New",
      description: "Beautiful floral summer dress, worn only once for a photoshoot.",
      category: "Dresses"
    },
    {
      id: 3,
      name: "Leather Chelsea Boots",
      price: 65.00,
      image: "https://images.unsplash.com/photo-1608629601270-a0007becead3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMENoZWxzZWElMjBCb290c3xlbnwwfHwwfHx8MA%3D%3D",
      seller: "James Miller",
      size: "42 EU",
      condition: "Good",
brand: "Zara",
      description: "Genuine leather Chelsea boots. Some signs of wear but still look great.",
      category: "Footwear"
    },
    {
      id: 4,
      name: "Cashmere Sweater",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FzaG1lcmUlMjBTd2VhdGVyfGVufDB8fDB8fHww",
      seller: "Olivia Brown",
      size: "L",
      brand: "Zara",
      condition: "Excellent",
      description: "Soft cashmere sweater in a beautiful cream color. Barely worn.",
      category: "Knitwear"
    },
    {
      id: 5,
      name: "Levi's 501 Jeans",
      price: 32.00,
      image: "https://images.unsplash.com/photo-1666899462970-40dfe2ef3a70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGV2aSdzJTIwNTAxJTIwSmVhbnN8ZW58MHx8MHx8fDA%3D",
      seller: "Noah Garcia",
      size: "32x30",
      condition: "Good",
brand: "Zara",
      description: "Classic Levi's 501 jeans. Slightly faded for that perfect vintage look.",
      category: "Bottoms"
    },
    {
      id: 6,
      name: "Ray-Ban Sunglasses",
      price: 75.00,
      image: "https://images.unsplash.com/photo-1594495024437-db507fd23fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmF5JTIwQmFuJTIwU3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
      seller: "Sophie Martinez",
      size: "One Size",
      brand: "Zara",
      condition: "Like New",
      description: "Authentic Ray-Ban Wayfarer sunglasses with case. No scratches.",
      category: "Accessories"
    },
    {
      id: 7,
      name: "Silk Blouse",
      price: 27.50,
      image: "https://plus.unsplash.com/premium_photo-1729708586826-0f7d8d8357d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2FyZWUlMjBCbG91c2V8ZW58MHx8MHx8fDA%3D",
      seller: "Lily Chen",
      size: "M",
      brand: "Zara",
      condition: "Excellent",
      description: "Elegant silk blouse in a soft blush color. Perfect for office or evening wear.",
      category: "Tops"
    },
    {
      id: 8,
      name: "Vintage Band T-Shirt",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1591193314545-aa2f78ce07a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmludGFnZSUyMEJhbmQlMjBUJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
      seller: "Ethan Williams",
      size: "L",
      condition: "Good",
brand: "Zara",
      description: "Authentic vintage concert t-shirt from the 80s. Rare collector's item.",
      category: "Tops"
    },
    {
      id: 9,
      name: "Designer Handbag",
      price: 120.00,
      image: "https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVzaWduZXIlMjBIYW5kYmFnfGVufDB8fDB8fHww",
      seller: "Isabella Lopez",
      size: "One Size",
      brand: "Zara",
      condition: "Very Good",
      description: "Genuine leather designer handbag. Minor wear but still looks luxurious.",
      category: "Accessories"
    },
    {
      id: 10,
      name: "Wool Peacoat",
      price: 85.00,
      image: "https://plus.unsplash.com/premium_photo-1675130119403-2b03d148773e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V29vbCUyMGNvYXR8ZW58MHx8MHx8fDA%3D",
      seller: "Daniel Taylor",
      size: "XL",
      brand: "Zara",
      condition: "Excellent",
      description: "Classic wool peacoat in navy blue. Warm and stylish for winter.",
      category: "Outerwear"
    }
  ];
  
  // Thrift stores data
  export const thriftStores: ThriftStore[] = [
    {
      id: 1,
      name: "Vintage Treasures",
      image: "https://images.unsplash.com/photo-1717328728300-a077e51e7a14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2xvdGhzJTIwSWNvbnN8ZW58MHx8MHx8fDA%3D",
      isVerified: true,
      location: "123 Main St, Portland, OR",
      description: "Specializing in vintage clothing from the 60s-90s. All items are carefully curated and in excellent condition.",
      rating: 4.7,
      products: [
        {
          id: 101,
          name: "70s Disco Shirt",
          price: 38.99,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Vintage Treasures",
          size: "M",
          condition: "Good",
brand: "Zara",
          description: "Authentic 1970s disco shirt with pointed collar and psychedelic pattern.",
          category: "Tops",
          storeId: 1
        },
        {
          id: 102,
          name: "90s Windbreaker",
          price: 42.50,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Vintage Treasures",
          size: "L",
          brand: "Zara",
          condition: "Excellent",
          description: "Colorful 90s windbreaker jacket. Perfect for that retro look.",
          category: "Outerwear",
          storeId: 1
        },
        {
          id: 103,
          name: "Vintage Levi's Jeans",
          price: 65.00,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Vintage Treasures",
          size: "30x32",
          condition: "Good",
brand: "Zara",
          description: "Authentic vintage Levi's jeans from the 80s. Perfect worn-in look.",
          category: "Bottoms",
          storeId: 1
        }
      ]
    },
    {
      id: 2,
      name: "EcoThrift",
      image: "https://images.unsplash.com/photo-1603820112277-9bcf00bc9a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENsb3RocyUyMEljb25zfGVufDB8fDB8fHww",
      isVerified: true,
      location: "456 Oak Ave, Seattle, WA",
      description: "Sustainable thrift store with a mission to reduce fashion waste. Portion of proceeds goes to environmental charities.",
      rating: 4.5,
      products: [
        {
          id: 201,
          name: "Upcycled Denim Bag",
          price: 29.99,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "EcoThrift",
          size: "One Size",
          brand: "Zara",
          condition: "New",
          description: "Handmade bag created from upcycled denim jeans. Sustainable and stylish.",
          category: "Accessories",
          storeId: 2
        },
        {
          id: 202,
          name: "Organic Cotton Sweater",
          price: 34.50,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "EcoThrift",
          size: "M",
          brand: "Zara",
          condition: "Like New",
          description: "Cozy organic cotton sweater in a neutral beige tone.",
          category: "Knitwear",
          storeId: 2
        }
      ]
    },
    {
      id: 3,
      name: "Urban Secondhand",
      image: "https://plus.unsplash.com/premium_photo-1668902221523-ae71f36d7b4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fENsb3RocyUyMEljb25zfGVufDB8fDB8fHww",
      isVerified: true,
      location: "789 Elm St, Austin, TX",
      description: "Contemporary secondhand clothing with a focus on current trends and designer items.",
      rating: 4.8,
      products: [
        {
          id: 301,
          name: "Designer Silk Scarf",
          price: 85.00,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Urban Secondhand",
          size: "One Size",
          brand: "Zara",
          condition: "Excellent",
          description: "Luxury designer silk scarf in a vibrant print. Perfect accessory for any outfit.",
          category: "Accessories",
          storeId: 3
        },
        {
          id: 302,
          name: "Premium Denim Jeans",
          price: 75.50,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Urban Secondhand",
          size: "28x30",
          brand: "Zara",
          condition: "Like New",
          description: "High-end denim jeans in a classic cut. Barely worn, still has original tags.",
          category: "Bottoms",
          storeId: 3
        }
      ]
    },
    {
      id: 4,
      name: "Retro Revival",
      image: "https://images.unsplash.com/photo-1596520124235-cb64aa3e2214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fENsb3RocyUyMEljb25zfGVufDB8fDB8fHww",
      isVerified: true,
      location: "101 Pine St, Denver, CO",
      description: "Specializing in carefully selected retro fashion from the 50s through the 90s.",
      rating: 4.6,
      products: [
        {
          id: 401,
          name: "50s Style Swing Dress",
          price: 48.99,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Retro Revival",
          size: "S",
          brand: "Zara",
          condition: "Excellent",
          description: "Beautiful 50s-inspired swing dress with polka dot pattern. Perfect for vintage lovers.",
          category: "Dresses",
          storeId: 4
        },
        {
          id: 402,
          name: "80s Leather Jacket",
          price: 95.00,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Retro Revival",
          size: "M",
          condition: "Good",
brand: "Zara",
          description: "Classic 80s biker leather jacket with authentic worn patina.",
          category: "Outerwear",
          storeId: 4
        }
      ]
    },
    {
      id: 5,
      name: "Community Closet",
      image: "https://images.unsplash.com/photo-1628798297827-8954442df69d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fENsb3RocyUyMEljb25zfGVufDB8fDB8fHww",
      isVerified: false,
      location: "222 Maple Dr, Chicago, IL",
      description: "Non-profit thrift store supporting local homeless shelters. Quality secondhand clothing at affordable prices.",
      rating: 4.3,
      products: [
        {
          id: 501,
          name: "Basic White Tee",
          price: 8.99,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Community Closet",
          size: "M",
          condition: "Good",
brand: "Zara",
          description: "Simple white t-shirt in good condition. A wardrobe staple.",
          category: "Tops",
          storeId: 5
        },
        {
          id: 502,
          name: "Black Work Pants",
          price: 15.50,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Community Closet",
          size: "34x32",
          brand: "Zara",
          condition: "Very Good",
          description: "Professional black work pants. Suitable for office wear.",
          category: "Bottoms",
          storeId: 5
        }
      ]
    },
    {
      id: 6,
      name: "Luxury Resale Boutique",
      image: "https://images.unsplash.com/photo-1724167954496-a5c4befea483?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fENsb3RocyUyMEljb25zfGVufDB8fDB8fHww",
      isVerified: true,
      location: "555 Ocean Ave, Los Angeles, CA",
      description: "High-end luxury consignment store featuring authenticated designer items at a fraction of retail price.",
      rating: 4.9,
      products: [
        {
          id: 601,
          name: "Designer Sunglasses",
          price: 150.00,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Luxury Resale Boutique",
          size: "One Size",
          brand: "Zara",
          condition: "Like New",
          description: "Authentic designer sunglasses with case and authentication card. Minimal wear.",
          category: "Accessories",
          storeId: 6
        },
        {
          id: 602,
          name: "Luxury Brand Handbag",
          price: 695.00,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Luxury Resale Boutique",
          size: "One Size",
          brand: "Zara",
          condition: "Excellent",
          description: "Genuine luxury handbag in classic style. Includes dust bag and authentication card.",
          category: "Accessories",
          storeId: 6
        }
      ]
    },
    {
      id: 7,
      name: "Sustainable Style Co.",
      image: "https://plus.unsplash.com/premium_photo-1669075651800-4f1d129eac8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fENsb3RocyUyMEljb25zfGVufDB8fDB8fHww",
      isVerified: true,
      location: "777 Green St, San Francisco, CA",
      description: "Eco-conscious thrift store focusing on sustainable fashion and reducing textile waste.",
      rating: 4.7,
      products: [
        {
          id: 701,
          name: "Recycled Wool Sweater",
          price: 32.50,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Sustainable Style Co.",
          size: "L",
          condition: "Good",
brand: "Zara",
          description: "Warm wool sweater made from recycled materials. Eco-friendly and cozy.",
          category: "Knitwear",
          storeId: 7
        },
        {
          id: 702,
          name: "Organic Cotton Dress",
          price: 45.00,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Sustainable Style Co.",
          size: "M",
          brand: "Zara",
          condition: "Excellent",
          description: "Simple and elegant dress made from organic cotton. Perfect for summer.",
          category: "Dresses",
          storeId: 7
        }
      ]
    },
    {
      id: 8,
      name: "Vintage Sports Gear",
      image: "https://plus.unsplash.com/premium_photo-1723773695185-df46905a1c6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BvcnRzJTIwU3RvcmUlMjBJY29uc3xlbnwwfHwwfHx8MA%3D%3D",
      isVerified: false,
      location: "333 Stadium Blvd, Boston, MA",
      description: "Specializing in vintage and retro sportswear, team apparel, and athletic equipment.",
      rating: 4.4,
      products: [
        {
          id: 801,
          name: "Vintage Basketball Jersey",
          price: 55.99,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Vintage Sports Gear",
          size: "XL",
          condition: "Good",
brand: "Zara",
          description: "Authentic vintage basketball jersey from the 90s. Collector's item for sports fans.",
          category: "Sportswear",
          storeId: 8
        },
        {
          id: 802,
          name: "Retro Track Jacket",
          price: 38.50,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Vintage Sports Gear",
          size: "M",
          brand: "Zara",
          condition: "Very Good",
          description: "Colorful track jacket from the 80s in excellent vintage condition.",
          category: "Sportswear",
          storeId: 8
        }
      ]
    },
    {
      id: 9,
      name: "Kids' Closet Exchange",
      image: "https://images.unsplash.com/photo-1600563093202-337471bde37e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2lkcyUyMFN0b3JlJTIwSWNvbnN8ZW58MHx8MHx8fDA%3D",
      isVerified: false,
      location: "444 Family Way, Minneapolis, MN",
      description: "Children's clothing resale store with high-quality, gently used kids' items.",
      rating: 4.5,
      products: [
        {
          id: 901,
          name: "Children's Winter Coat",
          price: 24.99,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Kids' Closet Exchange",
          size: "5T",
          brand: "Zara",
          condition: "Excellent",
          description: "Warm winter coat for children. Barely worn, in great condition.",
          category: "Kids",
          storeId: 9
        },
        {
          id: 902,
          name: "Kids' Sneakers",
          price: 18.50,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Kids' Closet Exchange",
          size: "US 12 Kids",
          brand: "Zara",
          condition: "Like New",
          description: "Colorful kids' sneakers. Only worn a few times, children grow so fast!",
          category: "Kids",
          storeId: 9
        }
      ]
    },
    {
      id: 10,
      name: "Bookworm's Closet",
      image: "https://plus.unsplash.com/premium_photo-1720430157140-6bb920f831b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8S2lkcyUyMFN0b3JlJTIwSWNvbnN8ZW58MHx8MHx8fDA%3D",
      isVerified: false,
      location: "888 Reader Ln, Atlanta, GA",
      description: "Unique thrift store combining used books and secondhand clothing for literary fashion lovers.",
      rating: 4.2,
      products: [
        {
          id: 1001,
          name: "Book-Themed Tote Bag",
          price: 18.99,
          image: "https://plus.unsplash.com/premium_photo-1709865803550-240a0c1bcb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Bookworm's Closet",
          size: "One Size",
          brand: "Zara",
          condition: "New",
          description: "Handmade tote bag featuring classic book covers. Perfect for carrying your reading material!",
          category: "Accessories",
          storeId: 10
        },
        {
          id: 1002,
          name: "Literary Quote T-Shirt",
          price: 21.50,
          image: "https://images.unsplash.com/photo-1707765643763-aa1f4d3da740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDcwcyUyMERpc2NvJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
          seller: "Bookworm's Closet",
          size: "L",
          brand: "Zara",
          condition: "Excellent",
          description: "Comfortable t-shirt featuring a famous literary quote. For book lovers!",
          category: "Tops",
          storeId: 10
        }
      ]
    }
  ];
  
  // Featured products (combined from both individual and store products)
  export const featuredProducts: Product[] = [
    individualProducts[0],
    individualProducts[2],
    thriftStores[0].products[0],
    individualProducts[5],
    thriftStores[3].products[0],
    individualProducts[8],
    thriftStores[1].products[0],
    individualProducts[3],
    thriftStores[5].products[1],
    individualProducts[7],
    thriftStores[2].products[0],
    individualProducts[9],
    thriftStores[6].products[1],
    individualProducts[4],
    thriftStores[4].products[0]
  ];
  