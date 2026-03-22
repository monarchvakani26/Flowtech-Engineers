import acrylicRotameter from '../assets/Flow tech/Acrylic tube rotameter.jpeg';
import acrylicRotameterPng1 from '../assets/Flow tech/Acrylic tube rotameter.png';
import acrylicRotameterPng2 from '../assets/Flow tech/Acrylic tube rotameter -2.png';
import acrylicRotameterPng3 from '../assets/Flow tech/Acrylic tube rotameter-3.png';
import bypassRotameter from '../assets/Flow tech/Bypass rotameter.jpeg';
import bypassRotameterPng1 from '../assets/Flow tech/Bypass rotameter.png';
import bypassRotameterPng2 from '../assets/Flow tech/Bypass rotameter-2.png';
import bypassRotameterPng3 from '../assets/Flow tech/Bypass rotameter-3.png';
import chlorineEvaporator from '../assets/Flow tech/Chlorine evaparotor.jpeg';
import dwSightGlass1 from '../assets/Flow tech/Double window sight glass.jpeg';
import dwSightGlass2 from '../assets/Flow tech/Double window sight glass-2.jpeg';
import dwSightGlassPng1 from '../assets/Flow tech/Double window sight glass.png';
import dwSightGlassPng2 from '../assets/Flow tech/Double window sight glass-2.png';
import flameArrestor from '../assets/Flow tech/Flame arrestor.jpeg';
import gtrMetalPlastic from '../assets/Flow tech/Glass tube Rotameter Metal + Plastice body.jpeg';
import gtrMetalPlasticPng from '../assets/Flow tech/Glass tube Rotameter Metal + Plastice body.png';
import gtr1 from '../assets/Flow tech/Glass tube rotameter 1.jpeg';
import gtr1Png from '../assets/Flow tech/Glass tube rotameter 1.png';
import gtr2 from '../assets/Flow tech/Glass tube rotameter 2.jpeg';
import gtr3 from '../assets/Flow tech/Glass tube rotameter 3.jpeg';
import gtr3Png1 from '../assets/Flow tech/Glass Tude Rotameter 3.png';
import gtr3Png2 from '../assets/Flow tech/Glass Tube Rotameter 3-2.png';
import lowFlowGtr from '../assets/Flow tech/Low flow glass tube rotameter.jpeg';
import lowFlowGtrPng1 from '../assets/Flow tech/Low flow glass tube rotameter.png';
import lowFlowGtrPng2 from '../assets/Flow tech/Low flow glass tube rotameter-2.png';
import lowFlowGtrPng3 from '../assets/Flow tech/Low flow glass tube rotameter-3.png';
import lowFlowGtrPng4 from '../assets/Flow tech/Low flow glass tube rotameter-4.png';
import metalRotameter from '../assets/Flow tech/Metal tube rotameter.jpeg';
import metalRotameterPng1 from '../assets/Flow tech/Metal tube rotameter.png';
import metalRotameterPng2 from '../assets/Flow tech/Metal tube rotameter-2.png';
import metalRotameterPng3 from '../assets/Flow tech/Metal tube rotameter-3.png';
import metalRotameterPng4 from '../assets/Flow tech/Metal tube rotameter-4.png';
import orificeFlange from '../assets/Flow tech/Orifice flange assembly.jpeg';
import orificePlate from '../assets/Flow tech/Orifice plate.jpeg';
import orificePlatePng from '../assets/Flow tech/Orifice plate.png';
import polyRotameter from '../assets/Flow tech/Polycarbonate Rotameter.jpeg';
import levelInd1 from '../assets/Flow tech/Side mounted level indicator-1.jpeg';
import levelInd2 from '../assets/Flow tech/Side mounted level indicator-2.jpeg';
import levelSwitch from '../assets/Flow tech/Side mounted level switch.jpeg';

export const products = [
  {
    id: "glass-tube-rotameter-1",
    name: "Glass Tube Rotameter (Type 1)",
    image: [gtr1, gtr1Png],
    description: "Standard variable area flow meter for clear liquids and gases with robust casing.",
    features: [
      "Borosilicate glass tube",
      "High accuracy mapping",
      "Easy maintenance and cleaning",
      "Direct reading scale"
    ],
    applications: ["Chemical processing", "Water treatment plants", "Laboratory testing"]
  },
  {
    id: "glass-tube-rotameter-2",
    name: "Glass Tube Rotameter (Type 2)",
    image: [gtr2],
    description: "Flanged series glass tube rotameter for industrial inline pipelines.",
    features: [
      "Heavy duty flanged connections",
      "Protective metal casing",
      "High visibility",
      "Corrosion-resistant wetted parts"
    ],
    applications: ["Petrochemical plants", "Pharmaceutical manufacturing", "Gas flow measurement"]
  },
  {
    id: "glass-tube-rotameter-3",
    name: "Glass Tube Rotameter (Type 3)",
    image: [gtr3, gtr3Png1, gtr3Png2],
    description: "Threaded connection glass tube rotameter for compact installations.",
    features: [
      "Compact design",
      "Threaded inline mounting",
      "Clear visibility",
      "Cost-effective monitoring"
    ],
    applications: ["Cooling water systems", "Air sampling", "RO plants"]
  },
  {
    id: "glass-tube-rotameter-metal-plastic",
    name: "Glass Tube Rotameter (Metal + Plastic Body)",
    image: [gtrMetalPlastic, gtrMetalPlasticPng],
    description: "Hybrid body variable area flow meter combining metal durability with plastic economy.",
    features: [
      "Hybrid casing construction",
      "Excellent visibility",
      "Versatile mounting options",
      "Shatter-resistant protective shield"
    ],
    applications: ["Light chemical processing", "General industrial use"]
  },
  {
    id: "low-flow-glass-tube-rotameter",
    name: "Low Flow Glass Tube Rotameter",
    image: [lowFlowGtr, lowFlowGtrPng1, lowFlowGtrPng2, lowFlowGtrPng3, lowFlowGtrPng4],
    description: "Precision flow meter specifically designed for very low flow rate measurement.",
    features: [
      "High resolution scale",
      "Needle valve for precise control",
      "Compact panel mount design"
    ],
    applications: ["Analytical laboratories", "Medical equipment", "Purge panels"]
  },
  {
    id: "acrylic-rotameter",
    name: "Acrylic Tube Rotameter",
    image: [acrylicRotameter, acrylicRotameterPng1, acrylicRotameterPng2, acrylicRotameterPng3],
    description: "Durable and lightweight acrylic flow meter for liquid and air applications.",
    features: [
      "Machined from solid acrylic block",
      "Shatter-proof design",
      "Direct reading scale",
      "In-line or panel mounting"
    ],
    applications: ["RO plants", "Cooling water", "Air sampling"]
  },
  {
    id: "polycarbonate-rotameter",
    name: "Polycarbonate Rotameter",
    image: [polyRotameter],
    description: "High-impact resistance polycarbonate variable area flow meter.",
    features: [
      "Extreme impact resistance",
      "Lightweight construction",
      "Clear scale visibility"
    ],
    applications: ["Water treatment", "General process lines"]
  },
  {
    id: "bypass-rotameter",
    name: "Bypass Rotameter",
    image: [bypassRotameter, bypassRotameterPng1, bypassRotameterPng2, bypassRotameterPng3],
    description: "Used in conjunction with an orifice plate to measure flow in large pipelines.",
    features: [
      "Economical for large line sizes",
      "Includes carrier ring and orifice",
      "Easy maintenance"
    ],
    applications: ["Main water pipelines", "Cooling towers", "Large industrial mains"]
  },
  {
    id: "metal-tube-rotameter",
    name: "Metal Tube Rotameter",
    image: [metalRotameter, metalRotameterPng1, metalRotameterPng2, metalRotameterPng3, metalRotameterPng4],
    description: "Robust metallic flow meter designed for high pressure, high temperature, and opaque fluids.",
    features: [
      "SS316/SS316L construction",
      "High operating pressure and temperature",
      "Magnetic coupling indicator",
      "Flanged connections"
    ],
    applications: ["Oil & Gas industry", "Petrochemical plants", "Corrosive media"]
  },
  {
    id: "orifice-plate",
    name: "Orifice Plate",
    image: [orificePlate, orificePlatePng],
    description: "Standardized primary flow element for precise differential pressure measurement.",
    features: [
      "Concentric design",
      "High-quality stainless steel",
      "Calculated as per ISO 5167",
      "Long-term stability"
    ],
    applications: ["Steam flow measurement", "Pipeline monitoring", "Natural gas metering"]
  },
  {
    id: "orifice-flange-assembly",
    name: "Orifice Flange Assembly",
    image: [orificeFlange],
    description: "Complete assembly including flanges, orifice plate, and pressure tappings.",
    features: [
      "Includes hardware (studs, nuts)",
      "Weld neck options",
      "High temperature resistance",
      "Rugged industrial build"
    ],
    applications: ["Refineries", "Chemical plants", "Steam lines"]
  },
  {
    id: "side-mounted-level-indicator",
    name: "Side Mounted Level Indicator",
    image: [levelInd1, levelInd2],
    description: "Reliable mechanical indicator for continuous level measurement in tanks.",
    features: [
      "Clear visual indication",
      "Magnetic coupling",
      "Leak-proof construction",
      "High visibility from distance"
    ],
    applications: ["Storage tanks", "Chemical storage", "Water treatment basins"]
  },
  {
    id: "side-mounted-level-switch",
    name: "Side Mounted Level Switch",
    image: [levelSwitch],
    description: "Float-operated level switch for high/low point alarm and control.",
    features: [
      "Microswitch or reed switch mechanisms",
      "Rugged SS construction",
      "Reliable point level detection"
    ],
    applications: ["Pump control", "Alarm systems", "Boiler automation"]
  },
  {
    id: "double-window-sight-glass",
    name: "Double Window Sight Glass",
    image: [dwSightGlass1, dwSightGlass2, dwSightGlassPng1, dwSightGlassPng2],
    description: "Industrial sight flow indicators for visual inspection of fluid flow line.",
    features: [
      "Toughened borosilicate glass",
      "Double view window",
      "High pressure ratings",
      "Easy inline flanged installation"
    ],
    applications: ["Lube oil systems", "Cooling lines", "Chemical process lines"]
  },
  {
    id: "flame-arrestor",
    name: "Flame Arrestor",
    image: [flameArrestor],
    description: "Safety device designed to stop the propagation of a flame front in pipelines.",
    features: [
      "Crimped metal ribbon element",
      "Low pressure drop",
      "High deflagration protection",
      "Robust housing"
    ],
    applications: ["Storage tank vents", "Biogas flare lines", "Petrochemical exhaust"]
  },
  {
    id: "chlorine-evaporator",
    name: "Chlorine Evaporator",
    image: [chlorineEvaporator],
    description: "Industrial unit designed to safely vaporize liquid chlorine for water treatment systems.",
    features: [
      "Safe indirect heating",
      "Precise temperature control",
      "Corrosion-resistant chamber",
      "Heavy-duty industrial build"
    ],
    applications: ["Municipal water treatment", "Large scale disinfection", "Chemical plants"]
  }
];
