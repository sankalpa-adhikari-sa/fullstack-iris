
# Full-Stack Iris Classification

This repository contains a comprehensive Iris Flower classification project that includes data analysis, machine learning implementation in a Django backend, and a React.js frontend. The project is containerized using Docker Compose for easy deployment and scalability.
## Table of Contents

- [Introduction](#introduction)
- [Project Scope and Features](#project-scope-and-features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation and Setup](#installation-and-setup)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
## Introduction
In the realm of machine learning and data analysis, the ability to accurately predict and classify species based on specific features is a fundamental challenge. The Iris Prediction Project aims to address this challenge by employing advanced data science techniques to predict the species of iris flowers based on their various attributes. Iris flowers, known for their distinct species—setosa, versicolor, and virginica—present a classic problem in the field of pattern recognition and classification. This project delves into exploring and implementing different machine learning algorithms, leveraging a dataset containing measurements of iris petals and sepals. By delving into this project, we seek to not only deepen our understanding of machine learning methodologies but also contribute to the broader knowledge of predictive modeling in the context of botanical species classification.

## Project Scope and Features
The Full-stack Iris Classification project comprises the following key features:

1. Data Preprocessing: The provided dataset, containing Iris flower charactersics, undergoes preprocessing to handle missing values, normalization, and feature engineering. This ensures that the data is suitable for training the machine learning model.

2. Machine Learning Model: We implement a classification model using a suitable algorithm (e.g., Random Forest, Support Vector Machine, etc.) to predict the potability of Iris class based on the input parameters.

3. Django Backend: The backend, built with Django, serves as the foundation for the classification model. It handles data processing, prediction requests, and interactions with the frontend.

4. React.js Frontend: The frontend, developed with React.js, offers an intuitive web interface where users can input water quality parameters and view the predicted potability class.

5. Docker Compose: The project is containerized using Docker Compose, making it easy to deploy and run the entire application stack consistently across different environments.
## Project Structure
The project is organized into the following directories:

- `/iris_api`: Django backend implementation.
- `/frontend`: React.js frontend implementation.
- `docker-compose.yml`: Docker Compose configuration file for orchestrating the entire application.
## Requirements
To run this project locally, you need to have the following installed on your system:
- [Docker](https://docs.docker.com/desktop/install/windows-install/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation and Setup

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sankalpa-adhikari-sa/fullstack-iris.git
```
2. Change directory to the project folder:
```bash
cd fullstack-iris
```
3. Build the Docker images and set up the project:
```bash
docker-compose build
docker-compose up -d
```
4. Access the application:
- Frontend
```bash
http://localhost:5173
```
- Backend
```bash
http://localhost:8000
```
## Demo

Here's a Quick demo how webapp looks like


https://github.com/sankalpa-adhikari-sa/fullstack-iris/assets/106131019/3da95b23-6dca-4e1a-ae3e-498f8c4af5cf


 
## Contributing

Contributions are always welcome!

If you find any issues or want to add new features, feel free to submit a pull request.


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. You are free to modify and distribute the code as long as you retain the original license and attribution.
