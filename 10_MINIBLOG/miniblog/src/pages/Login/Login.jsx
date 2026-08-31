import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { login, error: authError, loading } = useAuthentication();
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  const handleSubmit =  async (e) => {
    e.preventDefault();
    setError("");
  
    const user = {
      email,
      password,
    }
  
    const res = await login(user);
  
    if(!validarEmail(email)){
      setError("Por favor, insira um email válido!");
      return;
    }
  
  }
  
    useEffect(() => {
      if(authError){
        setError(authError);
      }
    }, [authError]);

  return (
    <div className={styles.login}>
      <h1 className={styles.login_titulo}>Entrar</h1>
            <p className={styles.login_text}>
              Faça login para acessar sua conta
            </p>
            <form className={styles.login_form} onSubmit={handleSubmit}>
              <label>
                <span className={styles.login_form_label}>Email: </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail do usuário"
                  className={styles.login_form_input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                <span className={styles.login_form_label}>Senha: </span>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Insira sua senha"
                  className={styles.login_form_input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {!loading && (
                <button className={styles.login_btn}>Entrar</button>
              )}
              {loading && (
                <button className={styles.login_btn} disabled>
                  Aguarde...
                </button>
              )}
              {error && <p className={styles.error}>{error}</p>}
            </form>
    </div>
  );
};

export default Login;
