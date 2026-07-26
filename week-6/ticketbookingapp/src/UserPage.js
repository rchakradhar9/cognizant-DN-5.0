import React from "react";

function UserPage() {
  return (
    <div>

      <h2>Welcome Back</h2>

      <h3>Ticket Booking</h3>

      <form>

        <label>Name</label><br />

        <input type="text" /><br /><br />

        <label>Flight Number</label><br />

        <input type="text" /><br /><br />

        <button>
          Book Ticket
        </button>

      </form>

    </div>
  );
}

export default UserPage;