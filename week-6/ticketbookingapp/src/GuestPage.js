import React from "react";

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest</h2>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>09:30 AM</td>
          </tr>

          <tr>
            <td>6E-310</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>01:45 PM</td>
          </tr>
        </tbody>
      </table>

      <p>
        Login to book your tickets.
      </p>
    </div>
  );
}

export default GuestPage;