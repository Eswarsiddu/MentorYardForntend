export function Login() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(
          formData.get("section"),
          formData.get("email"),
          formData.get("password")
        );
      }}
    >
      <div>
        <div>
          <input type="radio" name="section" value="mentee" defaultChecked />
          <label>Mentee</label>
        </div>
        <div>
          <input type="radio" name="section" value="mentor" />
          <label>Mentor</label>
        </div>
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
