# User Lookup App

The User Lookup App is a simple REST API designed to test ServiceNow Integration Hub Spoke Generator capabilities. It allows you to check if a user exists in a predefined dataset and retrieve additional user information. This README provides instructions on how to set up and use the app.

## Installation

# Clone the repository:
   

   git clone https://github.com/yourusername/userlookup.git

   cd userlookup

   pm2 start node.js --name userlookupapi

    sudo pm2 status //to check the status of the app

to test the app locally where you are hosting it, you can use this command:

curl "http://localhost:3000/checkUser?firstname=Ashley&lastname=Burney&dateofbirth=1984-01-25"

It should return this: 

{"code":0,"message":"User exists","user":{"guest_title":"Guest","phone":"555-123-4567","host_name":"John Doe","host_id_number":"123456","host_email":"john@example.com","guest_email":"ashley.burney@mycorpabc.com","building_location":"Building AZ","access_expiration":"2023-11-11"}}

If everything is working, then you can use Nginx or other NLB to expose this to HTTP or HTTPS over the internet or something


It should return something like this 

{"code":0,"message":"User exists","user":{"guest_title":"Guest","phone":"555-123-4567","host_name":"John Doe","host_id_number":"123456","host_email":"john@example.com","guest_email":"ashley.burney@mycorpabc.com","building_location":"Building AZ","access_expiration":"2023-11-11"}}

Replace the query parameters with the user's information.
The API will respond with a JSON object indicating if the user exists and providing additional user details if applicable

## Data.json File

The data.json file contains a dataset of users with their information. This dataset is used for checking user existence and retrieving user details. You can add, modify, or remove user entries in this file.

## Swagger.yaml File

The swagger.yaml file provides a Swagger/OpenAPI specification for the User Lookup App's API. This specification can be used with ServiceNow Integration Hub Spoke Generator to generate a spoke for the app. The API specification includes details about endpoints, parameters, responses, and more.

## License

This project is licensed under the MIT License. Feel free to use and modify the code as needed.
contact quentin.carton@servicenow.com if any questions

