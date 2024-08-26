# Dmoney-Api-Testing-By-Postman
# Overview 
Dmoney is a digital money transfer service that allows users to send and receive funds securely. This project includes various test cases covering different aspects of the Dmoney API, including user authentication, transactions, and check statements. The tests are organized into collections that can be easily executed within Postman.
# Prerequisites
Before you can run the tests in this project, ensure you have the following installed:
- NodeJS (Latest LTS)
- Newman
- newman-html-extra
# Setup (How to Run)
### Execute following commands-
- Clone the Repository:
  - ```git clone https://github.com/AmenaIslamRimi/Dmoney-Api-Testing-By-Postman.git```

- Navigate to the project directory:
  - ```cd Dmoney-Api-Testing-By-Postman```

- Install Dependencies:
  - ```npm i```

- Import the Postman Collection:
  - Open Postman.
  - Click on File > Import.
  - Select the Postman collection file from this repository (dmoney-postman-collection.json).

- Configure Environment Variables:
  - Set up the required environment variables, such as baseUrl, and X-AUTH-SECRET-KEY in Postman.
  - Add the .env file (on request)
  
- Run to see the report status:
  - node report.js
# Test Case File 
https://docs.google.com/spreadsheets/d/1tQ6-mxP-mZ1mCWOnLGf1P0BjOtLxN4Jw8dUWyRTjNzQ/edit?gid=0#gid=0 
# Bug Report File
https://docs.google.com/spreadsheets/d/1oLe_y7zQx5gf_hISEVY7qUQ3JXzMzxExTfuoNzf1zPA/edit?gid=0#gid=0 
# API Documentation 
https://documenter.getpostman.com/view/33990483/2sAXjGbtRW 
# Output 
![newman report](https://i.postimg.cc/TPjBNwt3/Newman-Report.png)
