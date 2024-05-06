import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the model name from command-line arguments
const modelName = process.argv[2];

if (!modelName) {
  console.error('Please provide a model name.');
  process.exit(1);
}

// Ensure the models directory exists
const modelsDir = join(__dirname, '../src/models');
if (!existsSync(modelsDir)) {
  mkdirSync(modelsDir, { recursive: true });
}

// Define the path for the new model file
const modelFilePath = join(modelsDir, `${modelName}.js`);

// Check if the file already exists
if (existsSync(modelFilePath)) {
  console.error(`Model ${modelName}.js already exists.`);
  process.exit(1);
}

// Content to write to the model file
const modelContent = `import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

export const ${modelName} = sequelize.define('${modelName}', {
  // Define your fields here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

sequelize.sync();
`;

// Create the file
writeFileSync(modelFilePath, modelContent);

console.log(`Model ${modelName}.js has been created at ${modelFilePath}`);
