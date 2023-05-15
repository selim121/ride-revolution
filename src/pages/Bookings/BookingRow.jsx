
const BookingRow = ({booking}) => {

    const {customerName, email, date, img, title, price} = booking;

    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                            <div className="text-sm opacity-50">{price}</div>
                        </div>
                </td>
                <td>
                    {customerName}
                </td>
                <td>{email}</td>
                <td>{date}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Pending</button>
                </th>
            </tr>
        </>
    );
};

export default BookingRow;