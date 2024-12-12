export default function EmployeeEditor() {
  return (
    <>
      <h1>Flight Editor</h1>
      <form id="updateForm" class="flight-form">
        <label for="currentId">Flight ID:</label>
        <input type="text" id="currentId" required />
        <br />
        <br />

        <label for="currentOrigin">Current Origin:</label>
        <input type="text" id="currentOrigin" required />
        <br />
        <br />

        <label for="currentDestination">Current Destination:</label>
        <input type="text" id="currentDestination" required />
        <br />
        <br />

        <label for="currentDate">Current Date:</label>
        <input type="text" id="currentDate" required />
        <br />
        <br />

        <label for="currentTime">Current Time:</label>
        <input type="text" id="currentTime" required />
        <br />
        <br />

        <label for="newOrigin">New Origin:</label>
        <input type="text" id="newOrigin" required />
        <br />
        <br />

        <label for="newDestination">New Destination:</label>
        <input type="text" id="newDestination" required />
        <br />
        <br />

        <label for="newDate">New Date:</label>
        <input type="text" id="newDate" required />
        <br />
        <br />

        <label for="newTime">New Time:</label>
        <input type="text" id="newTime" required />
        <br />
        <br />

        <button type="submit">Update Flight</button>
      </form>
    </>
  );
}
