const fs = require('fs');

const file = 'c:/Users/Niomi Vakani/Desktop/Flow tech/src/data/products.js';
let content = fs.readFileSync(file, 'utf8');

const newDesc = `"This product is engineered for industrial-grade performance, ensuring accurate measurement and reliability under varying process conditions. Designed with robust materials and precision manufacturing, it supports long-term operation in demanding environments such as chemical plants, water treatment facilities, and process industries."`;

const newFeatures = `[
      "High measurement accuracy and repeatability",
      "Corrosion-resistant materials",
      "Suitable for liquids and gases",
      "Wide operating pressure and temperature range",
      "Easy installation and maintenance",
      "Clear and direct reading scale"
    ]`;

const newApps = `[
      "Chemical and petrochemical industries",
      "Water and wastewater treatment plants",
      "Oil & gas processing",
      "Pharmaceutical manufacturing",
      "Food and beverage processing",
      "Power generation systems"
    ]`;

const newUsage = `"Primarily used for monitoring and controlling flow or process conditions in industrial systems. Known for its reliability, ease of operation, and long service life. Ideal for continuous process monitoring where accuracy and durability are critical."`;

content = content.replace(/description:\s*".*?",/g, `description: ${newDesc},`);
content = content.replace(/features:\s*\[[\s\S]*?\],/g, `features: ${newFeatures},`);
content = content.replace(/applications:\s*\[[\s\S]*?\]/g, `applications: ${newApps},\n    usageHighlights: ${newUsage}`);

fs.writeFileSync(file, content, 'utf8');
console.log('Update successful');
