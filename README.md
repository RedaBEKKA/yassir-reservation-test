## Features
- **Filtering**: Filter reservations by status, date, shift, and area.
- **Sorting**: Sort reservations by guest name and guest number in ascending or descending order.
- **Searching**: Search reservations by guest's first and last name.
- **Pagination**: Navigate through reservations using pagination controls.

## Main Steps
1. **Data Handling**: The provided reservation data is stored in a local JavaScript file and imported into the application.
2. **Component Structure**: The application is divided into reusable components:
   - `ReservationList`: Displays reservations with applied filters, sorting, search, and pagination.
   - `ReservationItem`: Shows individual reservation details.
   - `Filters`: Provides options to filter reservations.
   - `SearchBar`: Enables searching reservations by guest name.
   - `SortOptions`: Offers sorting functionality.
   - `Pagination`: Allows navigation through multiple pages of reservations.
3. **State Management**: Utilizes React's `useState` and `useMemo` hooks for efficient state and memoization management.
4. **Filtering and Sorting**: Implemented using JavaScript array methods and `Lodash` utilities.
5. **Pagination Implementation**:
   - Defined a default page size (5 reservations per page).
   - Calculated total pages based on filtered data.
   - Provided controls to navigate between pages, including first, last, previous, and next.
6. **User Interface**: Styled with basic CSS for a clean and intuitive layout.

## Assumptions & Decisions
- **Filter Values**: Filters require exact matches to the reservation fields.
- **Sorting**: Sorting toggles between ascending and descending order upon consecutive clicks.
- **Search**: Performs a case-insensitive search across both first and last names of guests.
- **Pagination**: Chose a simple, straightforward pagination approach suitable for datasets of moderate size.
- **Responsiveness**: Ensured the interface is responsive and user-friendly across different devices.
- **Scalability**: The modular component structure allows for easy scalability and maintenance.

## How to Run the Project
1. **Install Dependencies**:
   ```bash
   npm install

## Future Improvements
- **UI/UX**: Incorporate a more sophisticated design 
- **ERROR handling** : Add proper error handling and loading states for data fetching scenarios
- **Testing**: Implement unit and integration tests using tools like Jest
