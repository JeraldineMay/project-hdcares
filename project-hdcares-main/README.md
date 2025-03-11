API Documentation 
Overview
The HD CARES: Collection, Analytics, and Reporting System API allows you to manage patient accounts with authentication, role-based access, and data management capabilities. This API provides endpoints to add, retrieve, update, and delete patient records, as well as manage access permissions.
Base URL
http://localhost:3000/api/v1
Features
•	Create, read, update, and delete patients
•	Secure authentication via API keys
•	Rate limiting for fair usage
•	Error handling and validation
Authentication
This API requires authentication via an API key.
How to Authenticate
1.	Sign up and get your API key from the API Dashboard.
2.	Include the API key in the request headers:
Authorization: Bearer YOUR_API_KEY
Alternatively, you can pass the API key as a query parameter:
 https://api.hdcares.com/api/v1/patients?api_key=YOUR_API_KEY
 Note: Always keep your API key secure and avoid exposing it in public repositories.
Endpoints
1. Get All Patients
Retrieves a list of patients.
Request:
GET /patients
Headers:
Authorization: Bearer YOUR_API_KEY
Response:
{
  "patients": [
{ "id": 1, "fullName": "Jane Cruz", "age": "45", "gender": "female", "address": "123 Purok 4, Brgy. Maharlika, Sta. Cruz", "contactNumber": 09171234567, "email": "janecruz@gmail.com", "category": "Pregnant", "medicalHistory": "Hypertension"}
{ "id": 2, "fullName": "Mandy Perez", "age": "70", "gender": "Male", "address": "456 Purok 2, Brgy. Banahaw, Sta. Cruz", "contactNumber": 09179876543, "email": "mandyperez@gmail.com", "category": "Senior Citizen", "medicalHistory": "Diabetes"}
  ]
}
Status Codes:
•	200 OK - Request successful
•	401 Unauthorized - Invalid API Key

2. Get Patient by ID
Fetches details of a single patient.
Request:
GET /patients/{id}
Example Request:
GET /patients/1
Response:
{
  "id": 1,
  "fullName": "Jane Cruz",
  "age": "45",
  "gender": "Female",
  "address": "123 Purok 4, Brgy. Maharlika, Sta. Cruz",
  "contactNumber": 09171234567,
  "email": "janecruz@gmail.com",
  "category": "Pregnant",
  "medicalHistory": "Hypertension"
}
Status Codes:
•	200 OK - Success
•	404 Not Found - Patient not found

3. Create a Patient
Adds a new patient to the system.
Request:
POST /patients
Content-Type: application/json
Body:
{
  "fullName": "Nina Rey",
  "age": 34,
  "gender": "Female",
  "address": "123 Purok 4, Brgy. Maniwaya, Sta. Cruz",
  "contactNumber": 09096773321,
  "email": "ninarey@gmail.com",
  "category": "Pregnant",
  "medicalHistory": "none"
}
Response:
{
  "id": 3,
  "fullName": "Nina Rey",
  "age": 34,
  "gender": "Female",
  "address": "123 Purok 4, Brgy. Maniwaya, Sta. Cruz",
  "contactNumber": 09096773321,
  "email": "ninarey@gmail.com",
  "category": "Pregnant",
  "medicalHistory": "none"
}


Status Codes:
•	201 Created - Patient successfully created
•	400 Bad Request - Invalid input

4. Update a Patient
Modifies an existing patient’s details.
Request:
PUT /patients/{id}
Body:
{
  "fullName": "Nina Rey",
  "contactNumber": 09096773321,
  "email": "ninarey@gmail.com",
}
Response:
{
    "id": 3,
  "fullName": "Nina Rey",
  "age": 34,
  "gender": "Female",
  "address": "123 Purok 4, Brgy. Maniwaya, Sta. Cruz",
  "contactNumber": 09096773321,
  "email": "ninarey@gmail.com",
  "category": "Pregnant",
  "medicalHistory": "none"
}
Status Codes:
•	200 OK - Updated successfully
•	400 Bad Request - Invalid data


5. Delete a Patient
Removes a user from the system.
Request:
DELETE /patients/{id}
Response:
{
  "message": "Patient deleted successfully"
}
Status Codes:
•	200 OK - Patient deleted
•	404 Not Found - Patient does not exist
Error Handling
Common Error Responses
All error messages follow this format:
{
  "error": "Error message",
  "code": 400
}
Status Code	Meaning	Description
400	Bad Request	Invalid input data
401	Unauthorized	Invalid API key
403	Forbidden	No access rights
404	Not Found	Resource not found
500	Server Error	Internal API failure

Rate Limits
This API enforces rate limits to prevent misuse.
Plan	Requests per Minute
Free Plan	100 requests
Premium	1000 requests
 Exceeding the limit returns:
{
  "error": "Too many requests",
  "code": 429
}

Changelog & Versioning
Changelog
•	v1.2.0 - Added rate limits
•	v1.1.0 - Added update user endpoint
•	v1.0.0 - Initial API release
Versioning
To ensure backward compatibility, include version numbers in API requests:
https://api.hdcares.com/api/v1/patients
Contact & Support
For API issues, contact our support team:
•	Email: jeraldinemaytumulakvizarr@gmail.com 
•	API Dashboard: https://dashboard.example.com
localhost