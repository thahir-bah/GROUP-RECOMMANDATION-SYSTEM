# Step 1: Use Node.js image
FROM node:14-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Step 4: Copy the rest of the app
COPY . .

# specify the port number the container should expose
EXPOSE 3000

CMD ["npm", "start"]
