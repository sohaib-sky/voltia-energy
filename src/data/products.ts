export interface Product {
  id: string;
  name: string;
  image: string;
  accentColor: string;
  description: string;
  ingredients: string[];
  nutrition: {
    calories: number;
    caffeine: number; // mg
    sugar: number; // g
    carbs: number; // g
  };
  servingInfo: string;
}

export const products: Product[] = [
  {
    id: 'midnight-berry',
    name: 'MIDNIGHT BERRY',
    image: '/images/products/01-midnight-berry.png',
    accentColor: '#8a2be2', // violet
    description: 'A deep, electric blend of dark berries and wild açaí, engineered for late-night focus and sustained energy without the crash.',
    ingredients: ['Carbonated Water', 'Açaí Extract', 'Natural Blackberry Flavor', 'Caffeine (from Green Tea)', 'L-Theanine', 'B-Vitamins', 'Stevia Leaf Extract'],
    nutrition: { calories: 15, caffeine: 150, sugar: 0, carbs: 3 },
    servingInfo: 'Serve chilled. Do not exceed 2 cans daily.'
  },
  {
    id: 'electric-lime',
    name: 'ELECTRIC LIME',
    image: '/images/products/02-electric-lime.png',
    accentColor: '#32cd32', // lime
    description: 'A sharp, crisp shock of citrus and lime. Pure kinetic energy designed to awaken the senses and push physical boundaries.',
    ingredients: ['Carbonated Water', 'Lime Juice Concentrate', 'Citric Acid', 'Caffeine (from Coffee Beans)', 'Electrolytes (Sodium, Potassium)', 'B-Vitamins'],
    nutrition: { calories: 10, caffeine: 150, sugar: 0, carbs: 2 },
    servingInfo: 'Serve chilled. Hydrate during physical activity.'
  },
  {
    id: 'solar-orange',
    name: 'SOLAR ORANGE',
    image: '/images/products/03-solar-orange.png',
    accentColor: '#ffa500', // orange
    description: 'Vibrant and intense. The bright power of blood orange and tangerine infused with adaptogens for a balanced, radiant lift.',
    ingredients: ['Carbonated Water', 'Blood Orange Extract', 'Tangerine Flavor', 'Ashwagandha', 'Caffeine', 'Vitamin C', 'Zinc'],
    nutrition: { calories: 20, caffeine: 140, sugar: 0, carbs: 4 },
    servingInfo: 'Serve chilled. Ideal for morning momentum.'
  },
  {
    id: 'neon-pink',
    name: 'NEON PINK',
    image: '/images/products/04-neon-pink.png',
    accentColor: '#ff1493', // pink
    description: 'A futuristic fusion of dragon fruit and watermelon. Unapologetically bold flavor with a clean, euphoric energy curve.',
    ingredients: ['Carbonated Water', 'Dragon Fruit Puree', 'Watermelon Essence', 'Caffeine', 'Guarana Seed Extract', 'Electrolytes'],
    nutrition: { calories: 15, caffeine: 150, sugar: 0, carbs: 3 },
    servingInfo: 'Serve chilled. Perfect pre-workout catalyst.'
  },
  {
    id: 'arctic-blue',
    name: 'ARCTIC BLUE',
    image: '/images/products/05-arctic-blue.png',
    accentColor: '#00bfff', // blue
    description: 'Ice-cold refreshment. A sub-zero blast of blue raspberry and glacial minerals for absolute clarity and cool precision.',
    ingredients: ['Carbonated Water', 'Blue Raspberry Flavor', 'Glacial Minerals', 'Caffeine', 'Ginseng Root Extract', 'B-Vitamins'],
    nutrition: { calories: 10, caffeine: 150, sugar: 0, carbs: 2 },
    servingInfo: 'Serve chilled. Maximum focus formula.'
  },
  {
    id: 'citrus-volt',
    name: 'CITRUS VOLT',
    image: '/images/products/06-citrus-volt.png',
    accentColor: '#ffd700', // yellow/citrus
    description: 'The core signature flavor. A high-voltage collision of lemon, yuzu, and grapefruit. Classic, powerful, and uncompromising.',
    ingredients: ['Carbonated Water', 'Lemon Extract', 'Yuzu Juice', 'Grapefruit Essence', 'Caffeine', 'Taurine', 'B-Vitamins'],
    nutrition: { calories: 15, caffeine: 160, sugar: 0, carbs: 3 },
    servingInfo: 'Serve chilled. The ultimate daily driver.'
  }
];
