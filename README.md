# Store API

This is a simple **Store API** built with **Node.js** and **Express.js** to manage a store's products and users. The API allows for CRUD operations on products, user authentication, and query filtering (such as numeric filters for product attributes like price). The project uses **MongoDB** with **Mongoose** for data storage and supports environment variables via **dotenv**. **Nodemon** is used for automatic server restarts during development.

## Features

- **CRUD Operations** for managing products
- **Query Filtering** for products (e.g., by price,company,name,featured,rating)
- **MongoDB** integration for managing data
- **Error Handling** with **express-async-errors**
- **Automatic Server Restart** with **Nodemon** during development

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) - Install the latest version of Node.js.
- [MongoDB](https://www.mongodb.com/) - You can use a local MongoDB instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud database storage.

### Setup Instructions

1. Clone the repository:
   ```bash
https://github.com/pahmadii/Store-API.git


Example of Query Filters
You can use query parameters to filter products based on various criteria:

Price Filtering (numericFilters): Filter products by price ranges.

Example: GET localhost:3000/api/v1/products?numericFilters=price>90,rating=4.5
