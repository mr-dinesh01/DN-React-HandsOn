import "./App.css";
import officeImage from "./office.jpg"; // Replace with your image

function App() {

  const office = {
    name: "ABC Tech Park",
    rent: 55000,
    address: "Chennai"
  };

  const officeSpaces = [
    {
      name: "ABC Tech Park",
      rent: 55000,
      address: "Chennai"
    },
    {
      name: "Global Business Center",
      rent: 70000,
      address: "Bangalore"
    },
    {
      name: "Innovation Hub",
      rent: 45000,
      address: "Hyderabad"
    },
    {
      name: "Smart Workspace",
      rent: 80000,
      address: "Pune"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental Application</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
        height="250"
      />

      <hr />

      <h2>Single Office Details</h2>

      <p><strong>Name:</strong> {office.name}</p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        <strong>Rent:</strong> ₹{office.rent}
      </p>

      <p><strong>Address:</strong> {office.address}</p>

      <hr />

      <h2>Office Space List</h2>

      {
        officeSpaces.map((space, index) => (

          <div key={index} className="office-card">

            <h3>{space.name}</h3>

            <p
              style={{
                color: space.rent < 60000 ? "red" : "green"
              }}
            >
              <strong>Rent:</strong> ₹{space.rent}
            </p>

            <p>
              <strong>Address:</strong> {space.address}
            </p>

            <hr />

          </div>

        ))
      }

    </div>
  );
}

export default App;