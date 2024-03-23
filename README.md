# Crypto Data

Crypto Data is a web application designed to facilitate the retrieval of price and volume data from sample databases and display it in a tabular format. This application serves as a tool for backend engineers to develop and integrate RESTful APIs efficiently.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- Develops a RESTful API to fetch price and volume data from sample databases.
- Allows proper validation and error handling for API endpoints.
- Integrates MongoDB Atlas cluster to manage databases efficiently.
- Implements CRUD operations to interact with the database.
- Ensures database connectivity and error handling.

## Getting Started
### Prerequisites
- Node.js (version v18.15.0)
- Python (version 3.10.2)
- MongoDB Atlas cluster

### Installation
1. Clone this repository to your local machine.
2. Install the required dependencies for the frontend by running: npm install.
3. Install the required dependencies for the backend by running: pip install -r requirements.txt.
4. Set up your MongoDB Atlas cluster and configure database connection details.
5. Ensure proper database schema design for the sample dataset.

## Usage
1. Start the backend server by running: uvicorn main:app --host 0.0.0.0 --port 8000.
2. Access the API endpoints to fetch price and volume data.
3. Utilize the retrieved data in your frontend application.
4. Ensure error handling and validation mechanisms are in place.

## API Endpoints
- '/fetch_price_data/': GET request to fetch price data from the sample database.
- '/fetch_volume_data/': GET request to fetch volume data from the sample database.

## Technologies Used
- FastAPI (Backend)
- MongoDB Atlas (Database)
- Mongoose (Database Interaction)
- Python (Backend Development)
- Node.js (Frontend Development)

## Contributing
Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Output

![image](https://github.com/Vivek17020/Backend_task/assets/116427464/631a28dc-35cf-4e5d-b7c7-ff7b4f5361cb)

![image](https://github.com/Vivek17020/Backend_task/assets/116427464/dafd6370-ce72-44b9-8a25-680019591a64)
