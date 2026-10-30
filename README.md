# Wayfarer Frontend Demo

A complete, runnable React frontend for a travel booking website and demo admin dashboard.

## Run in VS Code

1. Extract `wayfarer-frontend.zip`.
2. Open the extracted `wayfarer-frontend` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Demo admin login

- Email: `admin@wayfarer.com`
- Password: `Admin@123`

Open `/admin/login` to log in. The demo login uses browser localStorage and is **not secure production authentication**.

## Included pages

- Public home page and trip listings
- Trip details
- Booking form and booking confirmation
- Admin login / protected admin routes
- Admin dashboard with charts and recent bookings
- Manage trips (add, edit, delete, search)
- Manage bookings (update booking status)
- Responsive layout

## Notes

- This is a frontend demo and uses sample data stored in the browser's localStorage.
- It does not connect to a real backend or process payments.
- To reset demo data, clear this site's localStorage in your browser's developer tools.
