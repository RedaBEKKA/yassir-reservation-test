// App.js
import React, { useEffect, useState } from "react";
import ReservationList from "./components/ReservationList";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import SortOptions from "./components/SortOptions";
import reservationsData from "./data/reservation";
import HashLoader from "react-spinners/HashLoader";

const App = () => {
    const [reservations, setReservations] = useState(reservationsData);
    const [filters, setFilters] = useState({
        status: "",
        date: "",
        shift: "",
        area: "",
    });

    const [loading, setLoading] = useState(true); // Ajout du state de chargement

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <HashLoader color={"#007bff"} loading={loading} size={150} />
            </div>
        );
    }

    return (
        <main className="px-4 py-8 lg:py-14 lg:px-24 flex flex-col items-center gap-8 h-full w-full min-h-screen">
            <header className="border-b">
                <h1 className="text-3xl font-bold text-center text-blue-600">
                    Reservation Management
                </h1>
            </header>
            <nav className="flex flex-col lg:flex-row gap-4 w-full">
                <SearchBar className="lg:w-1/4" />
                <Filters filters={filters} setFilters={setFilters} />
                <SortOptions className="lg:ml-auto" />
            </nav>
            <section className="h-full w-full">
                <ReservationList
                    reservations={reservations}
                    filters={filters}
                />
            </section>
        </main>
    );
};

export default App;
