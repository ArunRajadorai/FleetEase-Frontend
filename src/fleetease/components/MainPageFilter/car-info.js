// Define car makes with corresponding models and years
export const CarMakes = [
  { value: 'ford', label: 'Ford' },
  { value: 'bmw', label: 'BMW' },
  { value: 'audi', label: 'Audi' },
  { value: 'volkswagen', label: 'Volkswagen' },
  { value: 'mercedes-benz', label: 'Mercedes-Benz' },
  { value: 'vauxhall', label: 'Vauxhall' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'honda', label: 'Honda' },
  { value: 'hyundai', label: 'Hyundai' },
];

// Define models for each make
export const CarModels = {
  ford: [
    { value: 'fiesta', label: 'Fiesta' },
    { value: 'focus', label: 'Focus' },
    { value: 'mustang', label: 'Mustang' },
    { value: 'mondeo', label: 'Mondeo' },
    { value: 'kuga', label: 'Kuga' },
    { value: 'ecosport', label: 'EcoSport' },
    { value: 'fusion', label: 'Fusion' },
    { value: 'edge', label: 'Edge' },
    { value: 'explorer', label: 'Explorer' },
    { value: 'expedition', label: 'Expedition' },
  ],
  bmw: [
    { value: '1-series', label: '1 Series' },
    { value: '3-series', label: '3 Series' },
    { value: '5-series', label: '5 Series' },
    { value: '7-series', label: '7 Series' },
    { value: 'x1', label: 'X1' },
    { value: 'x3', label: 'X3' },
    { value: 'x5', label: 'X5' },
    { value: 'x7', label: 'X7' },
    { value: 'm3', label: 'M3' },
    { value: 'm5', label: 'M5' },
  ],
  audi: [
    { value: 'a1', label: 'A1' },
    { value: 'a3', label: 'A3' },
    { value: 'a4', label: 'A4' },
    { value: 'a6', label: 'A6' },
    { value: 'a8', label: 'A8' },
    { value: 'q3', label: 'Q3' },
    { value: 'q5', label: 'Q5' },
    { value: 'q7', label: 'Q7' },
    { value: 'q8', label: 'Q8' },
    { value: 'tt', label: 'TT' },
  ],
  volkswagen: [
    { value: 'polo', label: 'Polo' },
    { value: 'golf', label: 'Golf' },
    { value: 'passat', label: 'Passat' },
    { value: 'tiguan', label: 'Tiguan' },
    { value: 'touareg', label: 'Touareg' },
    { value: 'arteon', label: 'Arteon' },
    { value: 'jetta', label: 'Jetta' },
    { value: 'id3', label: 'ID.3' },
    { value: 'id4', label: 'ID.4' },
    { value: 'amarok', label: 'Amarok' },
  ],
  'mercedes-benz': [
    { value: 'a-class', label: 'A-Class' },
    { value: 'c-class', label: 'C-Class' },
    { value: 'e-class', label: 'E-Class' },
    { value: 's-class', label: 'S-Class' },
    { value: 'gla', label: 'GLA' },
    { value: 'glc', label: 'GLC' },
    { value: 'gle', label: 'GLE' },
    { value: 'gls', label: 'GLS' },
    { value: 'amg-gt', label: 'AMG GT' },
    { value: 'b-class', label: 'B-Class' },
  ],
  vauxhall: [
    { value: 'astra', label: 'Astra' },
    { value: 'corsa', label: 'Corsa' },
    { value: 'insignia', label: 'Insignia' },
    { value: 'mokka', label: 'Mokka' },
    { value: 'zafira', label: 'Zafira' },
    { value: 'grandland', label: 'Grandland' },
    { value: 'crossland', label: 'Crossland' },
    { value: 'vivaro', label: 'Vivaro' },
    { value: 'combo', label: 'Combo' },
    { value: 'mariva', label: 'Meriva' },
  ],
  toyota: [
    { value: 'yaris', label: 'Yaris' },
    { value: 'corolla', label: 'Corolla' },
    { value: 'camry', label: 'Camry' },
    { value: 'rav4', label: 'RAV4' },
    { value: 'hilux', label: 'Hilux' },
    { value: 'chr', label: 'CHR' },
    { value: 'prius', label: 'Prius' },
    { value: 'land-cruiser', label: 'Land Cruiser' },
    { value: 'auris', label: 'Auris' },
    { value: 'supra', label: 'Supra' },
  ],
  nissan: [
    { value: 'micra', label: 'Micra' },
    { value: 'juke', label: 'Juke' },
    { value: 'qashqai', label: 'Qashqai' },
    { value: 'x-trail', label: 'X-Trail' },
    { value: 'nv200', label: 'NV200' },
    { value: 'leaf', label: 'Leaf' },
    { value: 'gt-r', label: 'GT-R' },
    { value: '370z', label: '370Z' },
    { value: 'pathfinder', label: 'Pathfinder' },
    { value: 'armada', label: 'Armada' },
  ],
  honda: [
    { value: 'civic', label: 'Civic' },
    { value: 'accord', label: 'Accord' },
    { value: 'cr-v', label: 'CR-V' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'hr-v', label: 'HR-V' },
    { value: 'pilot', label: 'Pilot' },
    { value: 'odyssey', label: 'Odyssey' },
    { value: 'fit', label: 'Fit' },
    { value: 'ridgeline', label: 'Ridgeline' },
    { value: 'clarity', label: 'Clarity' },
  ],
  hyundai: [
    { value: 'i10', label: 'i10' },
    { value: 'i20', label: 'i20' },
    { value: 'i30', label: 'i30' },
    { value: 'i40', label: 'i40' },
    { value: 'elantra', label: 'Elantra' },
    { value: 'tucson', label: 'Tucson' },
    { value: 'santa-fe', label: 'Santa Fe' },
    { value: 'kona', label: 'Kona' },
    { value: 'sorento', label: 'Sorento' },
    { value: 'nexo', label: 'Nexo' },
  ],
};

// Define years from 2000 to current year
export const CarYears = Array.from({ length: 25 }, (_, i) => ({
  value: (2024 - i).toString(),
  label: (2024 - i).toString(),
}));
