# CRUX Report API

# Introduction 
This project is a CRUX Report API built on Flask and React. It allows you to get an insight into their websites' stats.

## Overview
The CRUX Report API is designed to help users get an insight into their websites' stats. It provides a User Interface which is built on React where a user can provide URLS, filter them and sort them. It uses Google Chrome CRUX API for fetching the data.



## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- npm

### Installation

1. Clone the frontend repository
```bash
git clone https://github.com/ManiYaswanth/CRUX-API-Frontend
```

2. In the project directory of frontend application install dependencies
```bash
npm install
```
3. Start the development server
```bash
npm start
```
The application will be accessible at http://localhost:3001
Now for the backend Application.

4. Clone this repository(backend):

```bash
git clone https://github.com/ManiYaswanth/CRUX-API-Backend
```

5. Install dependencies:
Use Virtual Environment and install dependencies
```bash
python3 -m venv your_env
```
```bash
pip3 install -r requirements.txt
```
Configure the .env file with Google Cloud CRUX API key
CRUX_API_KEY = your-api-key

6. Navigate to the project directory:

```bash
cd app/
```

7. Run the application:

```bash
python3 main.py
```
The application will be accessible at http://localhost:8000


## Usage
On the User Interface type a single url or multiple urls(Comma separated), select filters(Optional) and Search. The user response is sent to the
Flask backend application, calls the Chrome CRUX API, receives and filters data and sent to the frontend.


## Contribute
Contributions are welcome! Feel free to open issues and pull requests.