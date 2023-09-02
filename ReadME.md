# SOP Generation Tool Documentation

## Introduction

This documentation outlines the development and functionality of the SOP Generation Tool, which is designed to simplify and streamline the process of generating customized Statements of Purpose (SOPs) for users. The tool consists of a web-based user interface (UI) that allows users to input relevant information, which is then sent to the backend for processing. After processing, an email is generated and sent to the user's provided email address, containing the personalized SOP.

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Setting Up the Development Environment](#setting-up-the-development-environment)
4. [Backend](#backend)
    - [Node.js and Express.js](#nodejs-and-expressjs)
    - [Nodemailer](#nodemailer)
    - [PDFKit](#pdfkit)
    - [OpenAI](#openai)
5. [Frontend](#frontend)
    - [React](#react)
    - [React Router](#react-router)
6. [Deployment](#deployment)
    - [Backend Deployment (Render.com)](#backend-deployment-rendercom)
    - [Frontend Deployment (Netlify)](#frontend-deployment-netlify)
7. [User Workflow](#user-workflow)
8. [Conclusion](#conclusion)

---

## 1. Overview

The SOP Generation Tool is a web application that allows users to generate personalized SOPs based on the information they provide in a user-friendly UI. The tool utilizes a MERN (MongoDB, Express.js, React, Node.js) stack to handle the backend and frontend components. Below is a breakdown of the key features and technologies used in this tool.

## 2. Technology Stack

### Backend Technologies

#### Node.js and Express.js

- Node.js serves as the backend runtime environment.
- Express.js is used as the web application framework for handling routes and middleware.

#### Nodemailer

- Nodemailer is employed to send email notifications to users.
- It creates and sends emails with the generated SOPs as attachments.

#### PDFKit

- PDFKit is utilized to generate PDF files from the user's provided information.
- The generated PDFs are attached to the email sent to the user.

#### OpenAI

- OpenAI's API is utilized to generate the customized SOP text based on the information submitted by the user.
- The generated SOP content is incorporated into the final PDF.

### Frontend Technologies

#### React

- React is the frontend library used to build the user interface.
- It allows for dynamic rendering and interaction with the user.

#### React Router

- React Router is used for client-side routing, enabling navigation between different sections of the application.

## 3. Setting Up the Development Environment

Before proceeding with development, ensure you have the necessary dependencies and environment set up:

- Node.js and npm (Node Package Manager)
- MongoDB (for storing user data, if required)
- API keys for services such as Nodemailer and OpenAI

## 4. Backend

### Node.js and Express.js

The backend server is built using Node.js and Express.js. It handles incoming requests from the frontend, processes the data, generates the SOP, and sends emails to users.

### Nodemailer

Nodemailer is used to send emails containing the generated SOP PDF to the user's provided email address. Ensure you configure Nodemailer with your email service provider's credentials.

### PDFKit

PDFKit is responsible for generating PDF files that contain the customized SOPs. You can define the layout and formatting of the SOP PDF within your code.

### OpenAI

OpenAI's API is utilized to generate SOP text based on the user's input. You'll need an API key to access this service, and you'll need to design a process to call the API with the user's data and incorporate the generated text into the PDF. The Fetch API is employed in this process to communicate with OpenAI and retrieve the generated content.

**Fetch API**

- The Fetch API, a built-in JavaScript API, is used in the backend to interact with OpenAI.
- It is responsible for making requests to the OpenAI API, passing user data, and receiving the generated SOP text.
- The Fetch API plays a central role in the process of customizing SOPs based on user input.

## 5. Frontend

### React

The frontend is built using React, providing a user-friendly UI for users to input their information. The application fetches data from the backend and displays relevant messages to the user based on the response.

### React Router

React Router is used for client-side routing, allowing users to navigate between different sections of the application seamlessly.

**Axios**

- Axios, a popular JavaScript library, is used in the frontend to make HTTP requests to the backend.
- It plays a crucial role in sending user data to the backend for SOP generation and handling responses from the server.

## 6. Deployment

### Backend Deployment (Render.com)

The backend server is hosted on Render.com. Ensure that you have a Render account set up and configured for your project. Deploy your Node.js server to Render, and make sure to set environment variables securely for sensitive information like API keys.

### Frontend Deployment (Netlify)

The React frontend is deployed on Netlify. Create a Netlify account, connect your repository, and configure the deployment settings. Netlify allows for easy continuous deployment and provides a secure and scalable hosting solution.

## 7. User Workflow

1. User accesses the SOP Generation Tool via the web interface.
2. The user is presented with a form to input their details, including personal information, academic history, and career goals.
3. After filling out the form, the user submits the information.
4. The frontend sends the data to the backend for processing.
5. The backend uses OpenAI to generate a personalized SOP based on the provided information.
6. A PDF containing the generated SOP is created using PDFKit.
7. Nodemailer sends an email to the user's provided email address with the generated SOP PDF attached.
8. The user receives the email and downloads their customized SOP.

## 8. Conclusion

The SOP Generation Tool provides an efficient and user-friendly solution for generating customized Statements of Purpose. By using a MERN stack, Nodemailer, PDFKit, Axios, and OpenAI, the tool seamlessly processes user data and delivers personalized SOPs to users' email addresses. This tool simplifies the SOP generation process, making it a valuable resource for individuals seeking to create compelling SOPs for their academic or professional pursuits.
