import styles from "./Registration.module.scss";
import Footer from "../Footer/Footer";

function Loginform() {
  return (
  <div className="LoginForm">
      <h2>Ienākt TryWork</h2>
      <label for="email"><b>E-pasta adrese</b></label>
      <input type="text" placeholder="Enter email address" id="email" required />
      <label for="password"><b>Parole</b></label>
      <input type="password" placeholder="Enter Password" id="password" required />
      <div>
      <input type="checkbox"/>
      Atcerēties mani 
      </div>
      <button onClick="login()">Ienākt</button>
      <p>Vai ienākt ar</p>
      <p1><Google>Google</Google></p1><p2><Facebook>Facebook</Facebook></p2><p3><LinkedIn>LinkedIn</LinkedIn></p3>
  </div>
  );
}

export default LoginForm;