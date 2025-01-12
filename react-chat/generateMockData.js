import { writeFileSync } from 'fs';
import { generateChats } from './dataGenerator.js';

const mockData = generateChats(5);

writeFileSync('./src/mockData.json', JSON.stringify(mockData, null, 2), 'utf-8');

console.log('Mock data generated successfully!');