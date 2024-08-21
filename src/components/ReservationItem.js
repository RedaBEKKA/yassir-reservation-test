import React from "react";

const ReservationItem = ({ reservation }) => (
    <article className="w-full flex-1 flex flex-col items-center justify-center gap-2 border border-gray-300 shadow-md rounded-lg hover:shadow-lg transition-shadow">
        <header className="px-2 pt-2">
            <h3 className="text-lg font-semibold">
                {reservation.customer.firstName} {reservation.customer.lastName}
            </h3>
        </header>
        <section className="px-2 pb-2 text-center">
            <p>Status: {reservation.status}</p>
            <p>Date: {reservation.businessDate}</p>
            <p>Shift: {reservation.shift}</p>
            <p>Area: {reservation.area}</p>
            <p>Guest Count: {reservation.quantity}</p>
        </section>
        {reservation.guestNotes && (
            <footer className="bg-blue-600 text-white w-full rounded-b-md py-1 px-4 text-center text-pretty">
                <p>{reservation.guestNotes}</p>
            </footer>
        )}
    </article>
);

export default ReservationItem;
