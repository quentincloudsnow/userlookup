# Integration Hub exercise

## Introduction

In this lab we are going to build a new Spoke using the Spoke Generator in IntegrationHub. IntegratoionHub is the central place to consume, create, manage integrations on your ServiceNow instance. In the case you are looking to connect a workflow to an external system but ServiceNow or ServiceNow technology partners do not provide the out of the box integration (Spoke) for it, you can easily create your own. There are many different IntegrationHub Action Step to connect your workflow to external system that use protocols like REST, PowerShell, SSH etc. in that Lab we will focus on REST integration. 

## Goal 

In this lab we are going to highlight the new 'Spoke Generator' Capability, this capability allows you to create new spoke and spoke actions for 3rd Party API that are compliant with the OpenAPI specificiation. You will leverage a provided YAML File. A YAML file for OpenAPI specs is a human-readable configuration file that defines the structure, endpoints, and details of a RESTful API, making it easier for developers to document and communicate the API's design. The spoke generator can leverage thise YAML File to create Spoke actions automatically

## Use case

ACME inc is using a third party system to manage visitor access autorization to their building. this system is managed by a Security and Property Management company.  ACME inc. would like to improve the experience for visitors and their employee. ACME Inc. uses ServiceNow and would like to automate the process of verifying Visitor access and badge printing using ServiceNow Worlflows.  
There are no out of the box integration to that Visitor Access application. As a ServiceNow builder, we need to create that integration (Spoke) so we can query this remote system from a Workflow. 

In this scenario, you have had a meeting with the admin of that 3rd Party visitor access app, they have provided to you the following API Documentation https://quentincloudsnow.github.io/userlookup/#/default/get_checkUser  You can open the link to understand how that API works. 

This is a fairly simple API, as you can see there is only one API Method 'checkUser' and that method requires 3 inputs. 

| Field | type |
   |-------|-------|
   | firstname | string |
   | lastname | string |
   | dateofbirth | YYY-MM-DD |
   
By passing those user information, the API will return a message stating is a user exist or not, if the user exist, it will return additonal information that you need to use in a ServiceNow workflow 

 
{
  "code": "0",
  "message": "User exists",
  "user": {
    "guest_title": "Guest",
    "phone": "123-456-7890",
    "host_name": "Jane Smith",
    "host_id_number": "987654",
    "host_email": "jane@example.com",
    "guest_email": "john@example.com",
    "building_location": "Building A",
    "access_expiration": "2023-12-31"
          }
}


 

