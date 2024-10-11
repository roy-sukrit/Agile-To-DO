# Step 1: Use an official Node.js runtime as a parent image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /src

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies, including TypeScript and Node.js dependencies
RUN npm install

COPY . .

# Step 7: Build the TypeScript code
RUN npm run build

# Step 8: Expose the port your app will listen on
EXPOSE 3000

# Step 9: Define the command to run the app after compiling TypeScript
CMD ["npm", "start"]  
