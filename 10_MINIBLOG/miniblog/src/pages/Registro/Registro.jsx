import React from "react";
import styles from "./Registro.module.css";
import { useAuthentication } from '../../hooks/useAuthentication';

import { useState, useEffect } from "react";

const Registro = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais!");
      return;
    }

    if(!validarEmail(email)){
      setError("Por favor, insira um email válido!");
      return;
    }

    if(displayName.trim().length < 3){
      setError("O nome deve ter pelo menos 3 caracteres!");
      return;
    }

    const res = await createUser(user);
  }

  useEffect(() => {
    if(authError){
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.registro}>
      <h1 className={styles.tituloRegistro}>Cadastre-se para postar</h1>
      <p className={styles.textRegistro}>
        Crie seu usuário e compartilhe sua histórias
      </p>
      <form className={styles.formRegistro} onSubmit={handleSubmit}>
        <label>
          <span className={styles.formTextRegistro}>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            className={styles.formInputRegistro}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span className={styles.formTextRegistro}>Email: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            className={styles.formInputRegistro}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span className={styles.formTextRegistro}>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            className={styles.formInputRegistro}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span className={styles.formTextRegistro}>
            Confirmação de senha:{" "}
          </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Confirme sua senha"
            className={styles.formInputRegistro}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && (
          <button className={styles.btnRegistro}>Cadastrar</button>
        )}
        {loading && (
          <button className={styles.btnRegistro} disabled>
            Aguarde...
          </button>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Registro;
