# **Tech Conference List App**
This repository contains a React application that displays a list of tech conferences. The app allows you to filter conferences by country and city. To get started, follow the instructions below to set up the development environment and run the app.

## **Installation**

Before running the application, you need to install its dependencies. Open your terminal and navigate to the project directory, then run the following command:
```bash
npm install
```
This command will install all the required packages and dependencies listed in the 'package.json' file.

## **Usage**
Once you have installed the dependencies, you can run the development server using the following command:
```bash
npm run dev
```
This will start the development server and the app will be accessible in your browser at 'http://localhost:3000'.
## **How It Works**
The app fetches conference data from a remote API and displays it in a user-friendly format. Here's an overview of how the code works:
- The "axios" library is used to fetch conference data from the API endpoint.
- "useState" hooks are utilized to manage the app's state, including the list of conferences, selected country and city filters, and unique lists of countries and cities.
- The "useEffect" hook is used to fetch data from the API when the component mounts. It also populates the unique country and city lists for filtering options.
- The UI allows users to filter conferences based on selected country and city filters using dropdown menus.
- The conferences are then mapped and displayed on the page based on the selected filters.

## **Components**
The main component of the app is "ConferenceList", which handles the fetching and rendering of conference data. The component is designed to be modular and reusable.
## **Technologies Used**
- REACT
- AXIOS
- CSS
