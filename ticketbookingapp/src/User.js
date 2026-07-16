function User() {
    return (
        <div>
            <h2>Welcome User</h2>

            <h3>Flight Booking</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Fare</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>₹6500</td>
                        <td>
                            <button>Book Ticket</button>
                        </td>
                    </tr>

                    <tr>
                        <td>6E202</td>
                        <td>Bangalore</td>
                        <td>Mumbai</td>
                        <td>₹4500</td>
                        <td>
                            <button>Book Ticket</button>
                        </td>
                    </tr>

                    <tr>
                        <td>SG303</td>
                        <td>Hyderabad</td>
                        <td>Kolkata</td>
                        <td>₹5200</td>
                        <td>
                            <button>Book Ticket</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default User;