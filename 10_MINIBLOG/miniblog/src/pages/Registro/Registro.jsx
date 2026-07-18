import React from "react";
import styles from "./Registro.module.css";

import { useState, useEffect } from "react";

const Registro = () => {
  return (
    <div className={styles.registro}>
      <h1 className={styles.tituloRegistro}>Cadastre-se para postar</h1>
      <p className={styles.textRegistro}>
        Crie seu usuário e compartilhe sua histórias
      </p>
      <form className={styles.formRegistro}>
        <label>
          <span className={styles.formTextRegistro}>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            className={styles.formInputRegistro}
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
          />
        </label>
        <button className={styles.btnRegistro}>Cadastrar</button>
      </form>
    </div>
  );
};

export default Registro;
