export default function SignUp() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(
          formData.get("name"),
          formData.get("email"),
          formData.get("password"),
          formData.get("section")
        );
      }}
    >
      <div>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
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
      <button type="submit">Singup</button>
    </form>
  );
}
