export default function UserEditor() {
  return (
    <>
      <h1>User Editor</h1>
      <form id="createUser" className="user-form">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </form>
    </>
  );
}
