import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'app','data', 'users.json');

// Read users from file
export const getUsers = () => {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading users file:', error);
    return [];
  }
};

// Find user by email
export const findUserByEmail = (email) => {
  const users = getUsers();
  console.log("Users :",users);
  return users.find(user => user.email === email);
};

// Verify user credentials
export const verifyUser = (email, password) => {
  const user = findUserByEmail(email);
  console.log("User :",user);
  if (!user) return null;
  if (user.password === password) {
    return user;
  }
  return null;
};