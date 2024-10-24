# Eventio

## Introduction

This web application is built with React and TypeScript, enabling users to authenticate securely and manage events efficiently. After logging in, users can view a list of events fetched from an API, as well as add and edit events through an intuitive interface.

Key Features

-	User Authentication
-	Secure login using access and refresh tokens.
-	Automatic token refreshing to maintain user sessions seamlessly.
-	Event Management
-	View Events: Display a list of events fetched from an external API.
-	Add Events: Create and attend to events using forms with robust validation.
-	Form Handling and Validation
-	Utilizes React Hook Form for efficient form state management.
-	Implements validation schemas with Yup, including custom validation logic.
-	Data Fetching and State Management
-	Employs React Query for effective server state management.
-	Ensures efficient data fetching, caching, and real-time updates.
-	Date and Time Processing
-	Handles various date and time formats accurately.

Technologies Used

-	Frontend: React, TypeScript, React Router, Axios, React Query, React Hook Form, Yup.
-	Security: In-memory access tokens, secure authentication flows.

This project demonstrates best practices in React development, including secure authentication, advanced form handling, effective state management, and robust date/time processing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Future Improvements and Next Steps](#future-improvements-and-next-steps)

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies
  ```
  yarn
  ```
4. Set up environment variables:
	-	Create a .env file in the root directory.
	-	Add necessary variables
  ```
  VITE_EVENTIO_API_BASE_URL
  VITE_EVENTIO_API_KEY
  ```
5. Run aplication in dev mode
  ```
  yarn dev
  ```

## Usage

This guide provides a brief overview of how to use the event management application.

### Accessing the Application

1.	Open the Application: Visit the application’s URL in your web browser (e.g., [https://eventio.com](https://eventio-gsuecfahk-josef-krajkars-projects.vercel.app/)).

### User Authentication

To access the application’s features, you need to log in.

1.	Navigate to the Login Page: You’ll be redirected to the login page.
2.	Enter Your Credentials:
-	Email: Input your registered email address.
-	Password: Enter your password.
3.	Submit: Click the “Login” button to authenticate.
4.	Successful Login: Upon successful authentication, you’ll be redirected to the events page.

If you don’t have an account, please register or contact the administrator to obtain credentials.

### Viewing Events

1.	Events List: After logging in, you’ll see a list of upcoming events.
2.	Every event contains more details, such as the description, date, time, and capacity.
3.	You can filter events or change the view settings.

### Adding a New Event

1.	Navigate to Add Event: Click on the “+” button on the right bottom of the screen.
2.	Fill Out the Event Form:
  -	Title: Enter the event title (minimum 3 characters, maximum 128 characters).
  -	Description: Provide a description (minimum 6 characters, maximum 256 characters).
  -	Date: Select the event date.
  -	Time: Enter the event time (e.g., 14:30 or 2:30 PM).
  -	Capacity: Specify the maximum number of attendees.
3.	Submit: Click the “Create Event” button to add the event.
4.	Confirmation: You’ll be redirected back to the events list, where your new event will appear.

### Attend to an Event

1. Click on "join" button to attend to an event.
2. Once attended, you can click on "leave" button to leave the event.
- Please note, that you can't attend or unattend to an events that are in the past as well as you can't attend to an event that already is at its maximum capacity.

### Editing an Event

- This feature is not implemented yet.

### Logging Out

1.	Logout: Click on the “Log out” option from the profile drop-down menu situated at the right top of the screen.

### Additional Features

-	Responsive Design: The application is optimized for both desktop and mobile devices.
-	Form Validation: The application provides real-time validation feedback on form inputs.
-	Error Handling: User-friendly error messages will guide you if any issues occur.

### Troubleshooting

-	Invalid Credentials: If you cannot log in, ensure your email and password are correct.
-	Form Errors: If you encounter validation errors, check that all required fields are filled out correctly.
-	Session Expiration: If your session expires, you will be prompted to log in again.

## Project Structure

The project is organized into a modular and scalable structure to enhance maintainability and readability. Below is a brief overview of the main directories and their purposes:

```
src/
├── assets/
│   └── Fonts/
│       └── Hind/
│       └── Playfair_Display
├── components/
│   └── common/
│   │   └── BacgroundImg.tsx
│   │   └── Button.tsx
│   │   └── CircleBtn.tsx
│   │   └── ErrorBoundary.tsx
│   │   └── Input.tsx
│   │   └── Layout.tsx
│   │   └── Loader.tsx
│   │   └── SignupLink.tsx
│   ├── Footer/
│   │   └── Footer.tsx
│   ├── Header/
│   │   └── Header.tsx
│   └── Profile/
│       └── Profile.tsx
│       └── ProfileDropdown.tsx
├── context/
│       └── AuthContext.tsx
│       └── ErrorMsgContext.tsx
│       └── EventsContext.tsx
├── hooks/
│       └── useAuth.tsx
│       └── useErrorMsg.tsx
│       └── useEvents.tsx
│       └── useLayoutRules.tsx
│       └── useScreenWidth.tsx
├── pages/
│       └── 404/
│       │   └── 404page.tsx
│       └── Events/
│       │   └── components/
│       │   │   └── EventBtn.tsx
│       │   │   └── EventCard.tsx
│       │   │   └── EventRow.tsx
│       │   │   └── EventsFilter.tsx
│       │   │   └── EventsList.tsx
│       │   │   └── EventsMenu.tsx
│       │   │   └── EventsViewSwitcher.tsx
│       │   └── EventsPage.tsx
│       └── Login/
│       │   └── components/
│       │   │   └── LoginForm.tsx
│       │   │   └── LoginInfo.tsx
│       │   └── LoginPage.tsx
│       └── NewEvent/
│       │   └── components/
│       │   │   └── NewEventForm.tsx
│       │   │   └── NewEventInfo.tsx
│       │   └── NewEvent.tsx
├── routes/
│       └── AppRoutes.tsx
│       └── AppRoutes.tsx
├── services/
│       └── api/
│       │   └── axiosInstance.ts
│       └── auth/
│       │   └── authService.ts
│       └── events/
│           └── eventsService.ts
├── styles/
│   │   └── components/
│   │   │   └── BacgroundImg.css
│   │   │   └── Button.css
│   │   │   └── CircleBtn.css
│   │   │   └── Footer.css
│   │   │   └── Header.css
│   │   │   └── Input.css
│   │   │   └── Layout.css
│   │   │   └── Loader.css
│   │   │   └── ProfileDropdown.css
│   │   │   └── SignupLink.css
│   │   └── pages/
│   │       └── 404/
│   │       │   └── 404.css
│   │       └── Events/
│   │       │   └── EventCard.css
│   │       │   └── EventRow.css
│   │       │   └── EventsFilter.css
│   │       │   └── EventsList.css
│   │       │   └── EventsMenu.css
│   │       │   └── EventsPage.css
│   │       │   └── EventsViewSwitcher.css
│   │       └── Login/
│   │       │   └── LoginForm.css
│   │       │   └── LoginInfo.css
│   │       │   └── LoginPage.css
│   │       └── NewEvent/
│   │           └── NewEvent.css
│   │           └── NewEventForm.css
│   │           └── NewEventInfo.css
│   └── App.css
│   └── colors.css
│   └── index.css
├── types/
│   └── event.d.ts
│   └── login.d.ts
│   └── rofile.d.ts
├── utils/
│   └── combineDateAndTime.ts
│   └── formatAttendees.ts
│   └── formatDate.ts
│   └── getInitialsFromName.ts
│   └── isValidTime.ts
│   └── validationSchema.ts
├── App.tsx
└── main.tsx
```

### Directory Overview

-	components/: Contains reusable UI components.
-	context/:
  -	AuthContext.tsx: Manages authentication state and provides it to the app via React Context.
  -	ErrorMsgContext.tsx: Manages error notifications and provides them to the app via React Context.
  -	EventsContext.tsx: Manages events and their mutations, filters and other settings and provides them to the app via React Context.
-	hooks/:
  -	useLayoutRules.ts: Custom hook to access layout configurations, like wheter or not to show some UI parts.
  -	useScreenWidth.ts: Custom hooks that uses resize observer and is then used mostly in useLayoutRules.ts.
-	pages/: Page-level components corresponding to routes.
  -	404: The page that contains standard 404 error.
  -	Login: Displays login form.
  -	Events: Displays all events to the authenticated user.
  -	NewEvent: Form page for creating new events.
-	routes/:
  -	AppRoutes.tsx: Application router.
  -	PrivateRoute.tsx: Higher-order component that protects routes, allowing access only to authenticated users.
-	services/:
  -	api/:
    -	axiosInstance.ts: Configured Axios instance with interceptors for request and response handling.
  -	auth/:
    -	authService.ts: Functions for authentication-related API calls (login, logout, token refresh).
  -	events/:
    -	eventService.ts: Functions for event-related API calls (fetching, adding, attending to events).
-	styles/: Folder that contain all the css for the app.
-	utils/:	Utility functions for date and time parsing and formatting as well as Yup schemas for form validation.
-	App.tsx: The root component that sets up routing and context providers.
-	index.tsx: The entry point of the application where the React app is rendered to the DOM.

## Features


The application offers a range of features designed to provide a secure and user-friendly experience for managing events.

User Authentication

-	Secure Login System: Utilizes access and refresh tokens to authenticate users securely.
-	Token Management: Access tokens are stored in memory to enhance security.
-	Automatic Token Refreshing: Ensures seamless user experience by automatically refreshing expired access tokens without interrupting user activity.

Event Management

-	View Events: Allows users to view a list of events fetched from an external API.
-	Add Events: Provides a form with robust validation for creating new events.
-	Edit Events: Enables users to attend to existing events through an intuitive interface.

Form Handling and Validation

-	React Hook Form Integration: Efficiently manages form state and input handling.
-	Yup Validation Schemas: Implements validation rules, including custom logic, to ensure data integrity.
-	Real-Time Validation Feedback: Provides immediate feedback on form inputs to guide users.

Data Fetching and State Management

-	React Query for Server State: Manages data fetching, caching, and synchronization with the server.
-	Efficient Data Updates: Optimistically updates UI to reflect changes immediately while ensuring consistency with the backend.
-	Error Handling: Gracefully handles errors during data fetching and mutations, informing users appropriately.

Date and Time Processing

-	Flexible Date Handling: Uses date-fns library to parse and format dates and times accurately.
-	Multiple Format Support: Handles various date and time formats entered by users.
-	Time Zone Awareness: Processes dates and times considering the user’s local time zone (if applicable).

Responsive and Intuitive UI

-	Responsive Design: Optimized for both desktop and mobile devices to ensure accessibility.
-	User-Friendly Interface: Intuitive navigation and clear layouts enhance the user experience.
-	Loading Indicators: Displays spinners or skeleton screens during data fetching to keep users informed.

Security Enhancements

-	In-Memory Token Storage: Reduces the risk of token theft via XSS attacks.
-	Protected Routes: Restricts access to certain pages for authenticated users only.

Reusable Components

-	Modular Components: UI elements are designed to be reusable across different parts of the application.
-	Custom Hooks: Encapsulates logic for authentication and data fetching, promoting code reuse.

Error Handling and User Feedback

-	Validation Messages: Provides clear and specific error messages for form validation issues.
-	Notification System: Alerts users of successful operations or errors that occur during interactions.

Scalability and Maintainability

-	Modular Architecture: Organized code structure facilitates easy maintenance and scalability.
-	TypeScript Usage: Enhances code reliability and developer experience through static type checking.
-	Best Practices Implementation: Follows industry standards for React development and security.

## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - Axios
  - React-Router-Dom
  - React-Query
  - React-hook-form
  - Yup

## Future Improvements and Next Steps

1. 500 page - According to the proposal, we need to add a page in case of an error on the server (e.g. we get an error with code 500 from the API). We can use a 404 error page that matches our needs. We will need to add a response interceptor to axiosInstance that will direct the user to this page in case of an error on the API. I would also recommend using this new page as a fallback in the Errorboundary component to catch critical application errors.

2. Profile detail - The profile detail should be a simple page. Just modify the top part of the page with the user's initials as suggested, and below that the event sheet where we can use the one from the event listing page. The only thing to consider is that in order to filter the events efficiently, it would be ideal to add them to the event context through the userProfile using the useAuth hook.

3. Event detail - In the event detail, we can use the event card, which we just slightly adjust the style to make it wider according to the needs of the viewport. We then create a small card with a list of all the participants of the event using labels.
   
5. Event edit - Editing an event will then just mean replacing the event card from the event detail with a form with values for that event. To work with the form, we can use the inputs that we already use when creating the event and I would use the same validation scheme here.
   
7. Security suggestions - Although the login process is relatively secure, there is a risk that the refresh token may be stolen from the local storage using an XSS stub. It would be ideal to team up with backend colleagues and use an http-only cookie to store the token, which cannot be accessed by javascript.
   
9. Design tips - There are a few elements in the design that are not centered, even though they look that way at first glance, this can cause confusion for the developer using the designs. At the same time, I would suggest meeting with design colleagues to discuss the contrast ratios of the components to make the application friendly to users with visual impairments.
