// In a real application, this data would be sourced from a CMS, database, or markdown files.
// For this static example, we're defining it directly in this file.

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: 'Chairs' | 'Tables' | 'Sofas' | 'Lighting';
  price: number;
  description: string;
  images: { url: string; hint: string }[];
  specifications: { [key: string]: string };
};

const products: Product[] = [
  {
    id: '1',
    slug: 'classic-oak-armchair',
    name: 'Classic Oak Armchair',
    category: 'Chairs',
    price: 349.99,
    description: 'A timeless armchair crafted from solid oak. Its plush cushioning provides exceptional comfort, making it the perfect addition to any living room or study. The natural wood grain brings a touch of warmth and elegance to your space.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'armchair living room' },
      { url: 'https://placehold.co/600x600', hint: 'armchair side view' },
      { url: 'https://placehold.co/600x600', hint: 'armchair fabric detail' },
    ],
    specifications: {
      'Material': 'Solid Oak, Linen-blend Fabric',
      'Dimensions': '32" H x 28" W x 30" D',
      'Weight': '45 lbs',
      'Color': 'Natural Oak, Beige Fabric',
    },
  },
  {
    id: '2',
    slug: 'minimalist-coffee-table',
    name: 'Minimalist Coffee Table',
    category: 'Tables',
    price: 220.00,
    description: 'Clean lines and a simple form define this minimalist coffee table. Made from sustainably sourced mango wood, it offers a spacious top surface and a lower shelf for storage. Its understated design complements a variety of decor styles.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'coffee table minimalist' },
      { url: 'https://placehold.co/600x600', hint: 'coffee table top down' },
    ],
    specifications: {
      'Material': 'Mango Wood',
      'Dimensions': '18" H x 48" W x 24" D',
      'Weight': '55 lbs',
      'Finish': 'Matte Varnish',
    },
  },
  {
    id: '3',
    slug: 'velvet-dream-sofa',
    name: 'Velvet Dream Sofa',
    category: 'Sofas',
    price: 899.50,
    description: 'Sink into the luxurious comfort of the Velvet Dream Sofa. Upholstered in a rich, jewel-toned velvet, this sofa features a modern silhouette with classic tufting. It\'s the stunning centerpiece your living room has been waiting for.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'velvet sofa' },
      { url: 'https://placehold.co/600x600', hint: 'sofa side profile' },
      { url: 'https://placehold.co/600x600', hint: 'sofa cushion texture' },
    ],
    specifications: {
      'Material': 'Performance Velvet, Kiln-dried Hardwood Frame',
      'Dimensions': '34" H x 84" W x 38" D',
      'Weight': '150 lbs',
      'Color': 'Emerald Green',
    },
  },
  {
    id: '4',
    slug: 'arc-floor-lamp',
    name: 'Arc Floor Lamp',
    category: 'Lighting',
    price: 180.75,
    description: 'Illuminate your space with this elegant arc floor lamp. Its sweeping form and marble base provide a sophisticated touch, while the oversized shade casts a warm, inviting glow. Perfect for positioning over a sofa or reading nook.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'floor lamp' },
      { url: 'https://placehold.co/600x600', hint: 'lamp base detail' },
    ],
    specifications: {
      'Material': 'Steel, Marble Base, Fabric Shade',
      'Dimensions': '80" H x 40" W (max arc)',
      'Weight': '35 lbs',
      'Bulb': 'E26, 100W max (not included)',
    },
  },
  {
    id: '5',
    slug: 'scandinavian-dining-chair',
    name: 'Scandinavian Dining Chair',
    category: 'Chairs',
    price: 129.00,
    description: 'Embrace simplicity with this Scandinavian-inspired dining chair. Its curved backrest and solid wood construction offer both comfort and durability. Available in a set of two, they are perfect for modern dining spaces.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'dining chair' },
      { url: 'https://placehold.co/600x600', hint: 'chair pair' },
    ],
    specifications: {
      'Material': 'Beech Wood',
      'Dimensions': '31" H x 18" W x 20" D',
      'Weight': '15 lbs',
      'Color': 'Natural Beech',
    },
  },
  {
    id: '6',
    slug: 'rustic-console-table',
    name: 'Rustic Console Table',
    category: 'Tables',
    price: 295.00,
    description: 'Add a touch of rustic charm to your entryway or living room with this console table. Crafted from reclaimed pine, each piece has unique knots and grains. Two drawers provide convenient storage for everyday essentials.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'console table rustic' },
      { url: 'https://placehold.co/600x600', hint: 'table drawer open' },
    ],
    specifications: {
      'Material': 'Reclaimed Pine Wood',
      'Dimensions': '30" H x 50" W x 16" D',
      'Weight': '60 lbs',
      'Finish': 'Lightly distressed',
    },
  },
  {
    id: '7',
    slug: 'leather-chesterfield-sofa',
    name: 'Leather Chesterfield Sofa',
    category: 'Sofas',
    price: 1450.00,
    description: 'An iconic design that exudes sophistication. This Chesterfield sofa is upholstered in top-grain leather that will develop a beautiful patina over time. Featuring deep button tufting and rolled arms, it\'s a true statement piece.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'leather sofa' },
      { url: 'https://placehold.co/600x600', hint: 'chesterfield sofa detail' },
    ],
    specifications: {
      'Material': 'Top-grain Leather, Hardwood Frame',
      'Dimensions': '30" H x 90" W x 40" D',
      'Weight': '180 lbs',
      'Color': 'Cognac Brown',
    },
  },
  {
    id: '8',
    slug: 'industrial-pendant-light',
    name: 'Industrial Pendant Light',
    category: 'Lighting',
    price: 95.00,
    description: 'This industrial-style pendant light is perfect for kitchens and dining areas. The metal shade directs light downwards, creating focused illumination. Its simple, functional design adds a modern, urban edge to any room.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'pendant light industrial' },
      { url: 'https://placehold.co/600x600', hint: 'pendant light hanging' },
    ],
    specifications: {
      'Material': 'Spun Steel',
      'Dimensions': '10" H x 12" Diameter Shade',
      'Weight': '8 lbs',
      'Color': 'Matte Black',
    },
  },
  {
    id: '9',
    slug: 'industrial-pendant-light',
    name: 'Industrial Pendant Light',
    category: 'Lighting',
    price: 95.00,
    description: 'This industrial-style pendant light is perfect for kitchens and dining areas. The metal shade directs light downwards, creating focused illumination. Its simple, functional design adds a modern, urban edge to any room.',
    images: [
      { url: 'https://placehold.co/600x600', hint: 'pendant light industrial' },
      { url: 'https://placehold.co/600x600', hint: 'pendant light hanging' },
    ],
    specifications: {
      'Material': 'Spun Steel',
      'Dimensions': '10" H x 12" Diameter Shade',
      'Weight': '8 lbs',
      'Color': 'Matte Black',
    },
  },
];


export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
