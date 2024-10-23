# Metro Shop

### Live URL: &nbsp; &nbsp; [metro-shop-server.vercel.app](https://metro-shop-server.vercel.app/)

## Description:

MetroShop is a full-stack e-commerce platform built to provide a seamless shopping experience for users while offering robust administrative functionalities. It includes user roles for both general users and administrators, focusing on intuitive navigation, secure payments, and efficient product management.

### Admin Actions:

Administrators have extensive control over the platform, enabling them to:

- Manage products by adding, editing, and deleting items, including detailed information like product name, price, stock, categories, and images.
- Manage categories for better product organization, ensuring easy navigation for users.
- View and update orders placed by users, allowing actions like order confirmation and cancellation.
- Manage user accounts, including the ability to change roles or remove users.

### User Interactions:

Users can effortlessly browse and shop through MetroShop’s catalog:

- Browse and search through a wide range of products, filtering by categories, price, and more.
- View detailed information for each product, including reviews and availability.
- Add items to their shopping cart and proceed to a smooth checkout process with integrated payment gateways.
- View their order history with detailed records of past purchases, status updates, and payment information.

### Validation and Error Handling:

MetroShop ensures robust error handling mechanisms:

- Informative error messages for issues like product availability, payment errors, or invalid inputs.
- Ensures secure and seamless shopping experiences.

## Features

- **User Management:**: Secure user authentication with sign-up, login, and role-based access control for admins.
- **Product Management:**: Allows admins to manage products with full CRUD functionality, including images and categories.
- **Order Management:**: Facilitates viewing, updating, and canceling of user orders.
- **Category Management:**: Admins can create, update, and delete categories for better product organization.
- **Shopping Cart:**: Users can add products to their cart, update quantities, and proceed to checkout.
- **Payment Gateway Integration:**: Secure online payment using Aamarpay for seamless transactions.
- **Error Handling**: Implement robust error handling middleware for consistent and informative responses.
- **Authentication & Authorization**: Secure API endpoints using JWT-based authentication and role-based authorization.
- **Data Validation**: Ensure data integrity and consistency with Zod for input validation.

## Technology Stack

- **Next.js:** Server-side rendering for optimized user experiences and SEO benefits.
- **Node.js & Express:** For building fast, scalable REST APIs.
- **MongoDB:** Document-based database, ideal for product and order management.
- **JWT (JSON Web Tokens):** For secure user authentication and authorization.
- **Zod:** Schema validation to ensure data integrity across the platform.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mdsejan/MetroShop-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd metro-shop-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables to the `.env` file:

   ```plaintext
   PORT=5000
   DATABASE_URL=<mongodb-uri>
   BCRYPT_SALT_ROUNDS=<salt>
   JWT_SECRET=<jwt-secret>
   ```

### Running the Application

Start the server:

```bash
npm run start:dev
```

The server will start running at `http://localhost:5000`.

## API Endpoints

1. **User Sign Up**

   - **Route:** `{domain}/api/auth/signup` `POST`

2. **User Login**

   - **Route:** `{domain}/api/auth/login` `POST`

3. **Update User**

   - **Route:** `{domain}/api/auth/:id` `PUT`

4. **delete User**

   - **Route:** `{domain}/api/auth/:id` `DELETE`

5. **Create Room (Only Accessible by Admin)**

   - **Route:** `{domain}/api/rooms` `POST`

6. **Get a Room**

   - **Route:** `{domain}/api/rooms/:id` `GET`

7. **Get All Rooms**

   - **Route:** `{domain}/api/rooms` `GET`

8. **Update Room (Only Accessible by Admin)**

   - **Route:** `{domain}/api/rooms/:id` `PUT`

9. **Delete a Room (Soft Delete, Only Accessible by Admin)**

   - **Route:** `{domain}/api/rooms/:id` `DELETE`

10. **Create Slot (Only Accessible by Admin)**

    - **Route:** `{domain}/api/slots` `POST`

11. **Get available slots**

- **Route:** `{domain}/api/slots/availability` `GET`
- **Route:** `{domain}/api/slots/availability?date=2024-06-15` `GET`
- **Route:** `{domain}/api/slots/availability?roomId=60d9c4e4f3b4b544b8b8d1c5` `GET`
- **Route:** `{domain}/api/slots/availability?date=2024-06-15&roomId=60d9c4e4f3b4b544b8b8d1c5` `GET`

11. **Create a Booking (Only Accessible by Authenticated User)**

- **Route:** `{domain}/api/bookings` `POST`

11. **Get All Bookings (Only Accessible by Admin)**

- **Route:** `{domain}/api/bookings` `GET`

12. **Get User's Bookings (Only Accessible by Authenticated User)**

- **Route:** `{domain}/api/my-bookings` `GET`

13. **Update Booking (Only Accessible by Admin)**

- **Route:** `{domain}/api/bookings/:id` `PUT`

14. **Delete Booking (Soft Delete, Only Accessible by Admin)**

- **Route:** `{domain}/api/bookings/:id` `DELETE`

1.  **get Available Dates of Slots**

- **Route:** `{domain}/api/slots/dates/:id` `GET`

## API Endpoints Detailed

### User Routes

1. **User Sign Up**

- _*Route:*_ `/api/auth/signup` (POST)
- **Request Body:**

```json
{
  "name": "Programming Hero",
  "email": "web@programming-hero.com",
  "password": "ph-password",
  "phone": "1234567890",
  "role": "admin", //role can be user or admin
  "address": "123 Main Street, City, Country"
}
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User registered successfully",
  "data": {
    "_id": "60629b8e8cfcd926384b6e5e",
    "name": "Programming Hero",
    "email": "web@programming-hero.com",
    "phone": "1234567890",
    "role": "admin",
    "address": "123 Main Street, City, Country"
  }
}
```

**2\. User Login**

- _*Route:*_ `/api/auth/login` (POST)
- **Request Body:**

```json
{
  "email": "web@programming-hero.com",
  "password": "ph-password"
}
```

- Response:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDYyOWI4ZThjZmNkOTI2Mzg0YjZlNWUiLCJuYW1lIjoiUHJvZ3JhbW1pbmcgSGVyb3MiLCJlbWFpbCI6IndlYkBwcm9ncmFtbWluZy1oZXJvLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5MCIsInJvbGUiOiJhZG1pbiIsImFkZHJlc3MiOiIxMjMgTWFpbiBTdHJlZXQsIENpdHksIENvdW50cnkiLCJpYXQiOjE2MjQ1MTY2MTksImV4cCI6MTYyNDUyMDYxOX0.kWrEphO6lE9P5tvzrNBwx0sNogNuXpdyG-YoN9fB1W8",
  "data": {
    "_id": "60629b8e8cfcd926384b6e5e",
    "name": "Programming Hero",
    "email": "web@programming-hero.com",
    "phone": "1234567890",
    "role": "admin",
    "address": "123 Main Street, City, Country"
  }
}
```

###

### Room Routes

**3\. Create Room (Only Accessible by Admin)**

- _*Route:*_ `/api/rooms` (POST)
- **Request Headers:**

```plain
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token! Do not copy and apply directly from the module. If you blindly follow the modules, you will be a copy master, not a developer.
```

- _*Request Body:*_

```json
{
  "name": "Conference Room",
  "roomNo": 201,
  "floorNo": 1,
  "capacity": 20,
  "pricePerSlot": 100,
  "amenities": ["Projector", "Whiteboard"]
}
```

- _*Response:*_

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Room added successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 100,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": false
  }
}
```

**4\. Get a Room**

- _*Route:*_ `/api/rooms/:id` (GET)
- _*Response:*_

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Room retrieved successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 100,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": false
  }
}
```

**5\. Get All Rooms**

- _*Route:*_ `/api/rooms` (GET)
- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Rooms retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Conference Room",
      "roomNo": 201,
      "floorNo": 1,
      "capacity": 20,
      "pricePerSlot": 100,
      "amenities": ["Projector", "Whiteboard"],
      "isDeleted": false
    },
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c6",
      "name": "Meeting Room",
      "roomNo": 301,
      "floorNo": 2,
      "capacity": 10,
      "pricePerSlot": 200,
      "amenities": ["Whiteboard"],
      "isDeleted": false
    }
    // Other available rooms
  ]
}
```

**6\. Update Room (Only Accessible by Admin)**

- _*Route:*_ `/api/rooms/:id` (PUT)
- **Request Headers:**

```plain
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token! Do not copy and apply directly from the module. If you blindly follow the modules, you will be a copy master, not a developer.
```

- **Request Body:**

```json
{
  "pricePerSlot": 200 //we can update any field dynamically, (e.g., name, roomNo, floorNo, capacity, pricePerSlot, amenities)..
}
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Room updated successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 200,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": false
  }
}
```

**7\. Delete a Room (Soft Delete, Only Accessible by Admin)**

- _*Route:*_ `/api/rooms/:id` (DELETE)
- **Request Headers:**

```plain
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token! Do not copy and apply directly from the module. If you blindly follow the modules, you will be a copy master, not a developer.
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Room deleted successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 200,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": true
  }
}
```

###

### Slot Routes

8\. **Create Slot (Only Accessible by Admin)**

- _*Route:*_ `/api/slots`(**POST**)

**Request Headers:**

```javascript
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token! Do not copy and apply directly from the module. If you blindly follow the modules, you will be a copy master, not a developer.
```

**Request Body:**

```json
{
  "room": "60d9c4e4f3b4b544b8b8d1c5",
  "date": "2024-06-15",
  "startTime": "09:00",
  "endTime": "14:00"
}
```

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Slots created successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c6",
      "room": "60d9c4e4f3b4b544b8b8d1c5",
      "date": "2024-06-15",
      "startTime": "09:00",
      "endTime": "10:00",
      "isBooked": false
    },
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c7",
      "room": "60d9c4e4f3b4b544b8b8d1c5",
      "date": "2024-06-15",
      "startTime": "10:00",
      "endTime": "11:00",
      "isBooked": false
    },
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c8",
      "room": "60d9c4e4f3b4b544b8b8d1c5",
      "date": "2024-06-15",
      "startTime": "11:00",
      "endTime": "12:00",
      "isBooked": false
    },
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c9",
      "room": "60d9c4e4f3b4b544b8b8d1c5",
      "date": "2024-06-15",
      "startTime": "12:00",
      "endTime": "13:00",
      "isBooked": false
    },
    {
      "_id": "60d9c4e4f3b4b544b8b8d1ca",
      "room": "60d9c4e4f3b4b544b8b8d1c5",
      "date": "2024-06-15",
      "startTime": "13:00",
      "endTime": "14:00",
      "isBooked": false
    }
  ]
}
```

**9\. Get available slots**

**Route:** `/api/slots/availability`(**GET**)

**Query Parameters:**

- `date`: The specific date for which available slots are requested (format: YYYY-MM-DD).
- `roomId`: ID of the room for which available slots are requested.

> Special Remarks

If we hit `/api/slots/availability` without any query params then we should get all the slots that are not booked ( isBooked: false)

**Request endpoint example**

`/api/slots/availability?date=2024-06-15&roomId=60d9c4e4f3b4b544b8b8d1c5`

or

`/api/slots/availability`

**Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Available slots retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c6",
      "room": {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "name": "Conference Room",
        "roomNo": 201,
        "floorNo": 1,
        "capacity": 20,
        "pricePerSlot": 100,
        "amenities": ["Projector", "Whiteboard"],
        "isDeleted": false
      },
      "date": "2024-06-15",
      "startTime": "09:00",
      "endTime": "10:00",
      "isBooked": false
    },
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c7",
      "room": {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "name": "Conference Room",
        "roomNo": 201,
        "floorNo": 1,
        "capacity": 20,
        "pricePerSlot": 100,
        "amenities": ["Projector", "Whiteboard"],
        "isDeleted": false
      },
      "date": "2024-06-15",
      "startTime": "10:00",
      "endTime": "11:00",
      "isBooked": false
    }
  ]
}
```

###

### Booking Routes

**10\. Create a Booking (Only Accessible by Authenticated User)**

- _*Route:*_ `/api/bookings` (POST)
- **Request Headers:**

```javascript
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token! Do not copy and apply directly from the module. If you blindly follow the modules, you will be a copy master, not a developer.
```

- **Request Body:**

```json
{
  "date": "2024-06-15",
  "slots": ["60d9c4e4f3b4b544b8b8d1c6", "60d9c4e4f3b4b544b8b8d1c7"],
  "room": "60d9c4e4f3b4b544b8b8d1c5",
  "user": "60d9c4e4f3b4b544b8b8d1c4"
}
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Booking created successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c9",
    "date": "2024-06-15",
    "slots": [
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c6",
        "room": "60d9c4e4f3b4b544b8b8d1c5",
        "date": "2024-06-15",
        "startTime": "09:00",
        "endTime": "10:00",
        "isBooked": true
      },
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c7",
        "room": "60d9c4e4f3b4b544b8b8d1c5",
        "date": "2024-06-15",
        "startTime": "10:00",
        "endTime": "11:00",
        "isBooked": true
      }
    ],
    "room": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Conference Room",
      "roomNo": 201,
      "floorNo": 1,
      "capacity": 20,
      "pricePerSlot": 100,
      "amenities": ["Projector", "Whiteboard"],
      "isDeleted": false
    },
    "user": {
      "_id": "60d9c4e4f3b4b544b8b8d1c4",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890",
      "address": "123 Main St, Anytown, USA",
      "role": "user"
    },
    "totalAmount": 200,
    "isConfirmed": "unconfirmed",
    "isDeleted": false
  }
}
```

**11\. Get All Bookings (Only Accessible by Admin)**

- _*Route:*_ `/api/bookings` (GET)
- **Request Headers:**

```javascript
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token! Do not copy and apply directly from the module. If you blindly follow the modules, you will be a copy master, not a developer.
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "All bookings retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c9",
      "date": "2024-06-15",
      "slots": [
        {
          "_id": "60d9c4e4f3b4b544b8b8d1c6",
          "room": "60d9c4e4f3b4b544b8b8d1c5",
          "date": "2024-06-15",
          "startTime": "09:00",
          "endTime": "10:00",
          "isBooked": true
        },
        {
          "_id": "60d9c4e4f3b4b544b8b8d1c7",
          "room": "60d9c4e4f3b4b544b8b8d1c5",
          "date": "2024-06-15",
          "startTime": "10:00",
          "endTime": "11:00",
          "isBooked": true
        }
      ],
      "room": {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "name": "Conference Room",
        "roomNo": 201,
        "floorNo": 1,
        "capacity": 20,
        "pricePerSlot": 100,
        "amenities": ["Projector", "Whiteboard"],
        "isDeleted": false
      },
      "user": {
        "_id": "60d9c4e4f3b4b544b8b8d1c4",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "1234567890",
        "address": "123 Main St, Anytown, USA",
        "role": "user"
      },
      "totalAmount": 200,
      "isConfirmed": "unconfirmed",
      "isDeleted": false
    }
    // other bookings ( If any )
  ]
}
```

**12\. Get User's Bookings (Only Accessible by Authenticated User)**

- _*Route:*_ `/api/my-bookings`(**GET**)
- **Request Headers:**

```javascript
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token!
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User bookings retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1ca",
      "date": "2024-06-15",
      "slots": [
        {
          "_id": "60d9c4e4f3b4b544b8b8d1c6",
          "room": "60d9c4e4f3b4b544b8b8d1c5",
          "date": "2024-06-15",
          "startTime": "09:00",
          "endTime": "10:00",
          "isBooked": true
        },
        {
          "_id": "60d9c4e4f3b4b544b8b8d1c7",
          "room": "60d9c4e4f3b4b544b8b8d1c5",
          "date": "2024-06-15",
          "startTime": "10:00",
          "endTime": "11:00",
          "isBooked": true
        }
      ],
      "room": {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "name": "Conference Room",
        "roomNo": 201,
        "floorNo": 1,
        "capacity": 20,
        "pricePerSlot": 100,
        "amenities": ["Projector", "Whiteboard"],
        "isDeleted": false
      },
      "totalAmount": 200,
      "isConfirmed": "unconfirmed",
      "isDeleted": false
    }
  ]
}
```

**13\. Update Booking (Only Accessible by Admin)**

- _*Route:*_ `/api/bookings/:id` (PUT)
- **Request Headers:**

```javascript
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token! Do not copy and apply directly from the module. If you blindly follow the modules, you will be a copy master, not a developer.
```

- **Request Body:**

```json
{
  "isConfirmed": "confirmed"
}
```

**Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Booking updated successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1ca",
    "date": "2024-06-15",
    "slots": ["60d9c4e4f3b4b544b8b8d1c6", "60d9c4e4f3b4b544b8b8d1c7"],
    "totalAmount": 200,
    "room": "60d9c4e4f3b4b544b8b8d1c5",
    "user": "60d9c4e4f3b4b544b8b8d1c4",
    "isConfirmed": "confirmed",
    "isDeleted": false
  }
}
```

**14\. Delete Booking (Soft Delete, Only Accessible by Admin)**

- _*Route:*_ `/api/bookings/:id` (DELETE)
- **Request Headers:**

```javascript
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

You must include "Bearer" at the beginning of the token! Do not copy and apply directly from the module. If you blindly follow the modules, you will be a copy master, not a developer.
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Booking deleted successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1ca",
    "date": "2024-06-15",
    "slots": ["60d9c4e4f3b4b544b8b8d1c6", "60d9c4e4f3b4b544b8b8d1c7"],
    "totalAmount": 200,
    "room": "60d9c4e4f3b4b544b8b8d1c5",
    "user": "60d9c4e4f3b4b544b8b8d1c4",
    "isConfirmed": "confirmed",
    "isDeleted": true
  }
}
```

## Others

### **1\. No Data Found:**

When retrieving data, if the database collection is empty or no matching data is found, return the message: "No data found."

```json
{
  "success": false,
  "statusCode": 404,
  "message": "No Data Found",
  "data": []
}
```

### **2\. Error Handling:**

Implement proper error handling throughout the application. Use global error handling `middleware` to catch and handle errors, providing appropriate error responses with error messages.

**Error Response Object Should include the following properties:**

- success → false
- message → Error Type → Validation Error, Cast Error, Duplicate Entry
- errorMessages
- stack

**Sample Error Response**

```json
   {
    "success": false,
    "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \\"user2@gmail.com\\" }",
    "errorMessages": [
        {
            "path": "",
            "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \\"user2@gmail.com\\" }"
        }
    ],
    "stack": "MongoServerError: E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \\"user2@gmail.com\\" }\\n    at H:\\\\next-level-development\\\\university-management-auth-service\\\\node_modules\\\\mongodb\\\\src\\\\operations\\\\insert.ts:85:25\\n    at H:\\\\next-level-development\\\\university-management-auth-service\\\\node_modules\\\\mongodb\\\\src\\\\cmap\\\\connection_pool.ts:574:11\\n    at H:\\\\next-level-development\\\\university-writeOrBuffer (node:internal/streams/writable:391:12)"
}
```

###

### **3\. Not Found Route:**

Implement a global "Not Found" handler for unmatched routes. When a route is not found, respond with a generic message: "Not Found.”

```json
{
  "success": false,
  "statusCode": 404,
  "message": "Not Found"
}
```

### **4\. Authentication Middleware:**

Implement an Authentication Middleware to authenticate your application. Ensures that only user and admin can access their own accessible routes.

```json
{
  "success": false,
  "statusCode": 401,
  "message": "You have no access to this route"
}
```

### **5\. Zod Validation:**

The API employs Zod for input validation, ensuring data consistency. When validation fails, a 400 Bad Request status code is returned, accompanied by detailed error messages specifying the erroneous fields and reasons.

GET /products?keyword=keyboard&category=mechanical&minPrice=100&maxPrice=500&page=2&limit=10
http://localhost:5000/api/auth/user/:id
