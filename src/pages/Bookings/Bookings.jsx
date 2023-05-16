import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import useTitle from "../hooks/useTitle";

const Bookings = () => {
    useTitle('Ride Revolution - Bookings')
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `https://ride-revolution-server.vercel.app/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [url])

    const handleDelete = id => {
        const precede = confirm('Are you sure, you want to delete?');
        if (precede) {
            fetch(`https://ride-revolution-server.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully!');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleConfirm = id => {
        const precede = confirm('Are you sure?');
        if (precede) {
            fetch(`https://ride-revolution-server.vercel.app/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        //update state
                        const remaining = bookings.filter(booking => booking._id !== id);
                        const updated = bookings.find(booking => booking._id === id);
                        updated.status = 'confirm'
                        const newBookings = [updated, ...remaining];
                        setBookings(newBookings);

                    }

                })
        }
    }

    return (
        <div className="my-12">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Services</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length > 0 ? (
                            bookings.map(booking => (
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No bookings found</td>
                            </tr>
                        )}
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;