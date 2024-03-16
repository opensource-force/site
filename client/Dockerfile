# Build environment
FROM node:14-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Clear npm cache
RUN npm cache clean --force

# Reinstall dependencies
RUN rm -rf node_modules
RUN npm install

# Install react-scripts
RUN npm install react-scripts@3.4.1 -g --silent

# Copy project files
COPY . ./

# Build the React app
RUN npm run build

# Production environment
FROM nginx:stable-alpine

# Copy the built app to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start nginx
CMD ["nginx", "-g", "daemon off;"]
