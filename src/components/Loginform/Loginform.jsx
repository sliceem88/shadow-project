import './LoginForm.scss'

function LoginForm() {
  return (
  <div className="LoginForm">
      <h2>Pierakstīšanās forma</h2>
      <label for="username"><b>Lietotājvārds</b></label>
      <input type="text" placeholder="Enter Username" id="username" required />
      <label for="password"><b>Parole</b></label>
      <input type="password" placeholder="Enter Password" id="password" required />
      <button onclick="login()">Pierakstīties</button>
  </div>
  );
}

export default LoginForm;