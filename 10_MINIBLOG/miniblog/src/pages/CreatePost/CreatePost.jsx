import React from 'react'
import styles from "./CreatePost.module.css";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from '../../hooks/useInsertDocument';


const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");
  const {insertDocument, response} = useInsertDocument("posts");
  
  const { user } = useAuthValue();
  
  const Navigate  = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // Validar a URL da imagem
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL");
      return;
    }

    //Criar o array das tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    //Checar todos os valores
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
      return;
    }


    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    //Redireciona para a Home
    Navigate("/")
  }

  return (
    <div className={styles.createPost}>
      <h2 className={styles.postTitle}>Criar Post</h2>
      <p className={styles.postDescription}>Escreva sobre o que você quiser e compatilhe suas ideias</p>
      <form className={styles.formCreatePost} onSubmit={handleSubmit}>
        <label>
          <span className={styles.formLabelText}>Titulo: </span>
          <input
            className={styles.formInput}
            type="text"
            name='title'
            required
            placeholder='Pense em algum titulo'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span className={styles.formLabelText}>URL da Imagem: </span>
          <input
            className={styles.formInput}
            type="text"
            name='image'
            required
            placeholder='Insira uma imagem para o post'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span className={styles.formLabelText}>Conteúdo: </span>
          <textarea
            className={styles.formInput}
            name='body'
            required
            placeholder='Insira o conteúdo do seu post'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <label>
          <span className={styles.formLabelText}>Tags: </span>
          <input
            className={styles.formInput}
            type="text"
            name='tags'
            required
            placeholder='Insira as tags do teu post'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && (
          <button className={styles.btnCreatePost}>Cadastrar</button>
        )}
        {response.loading && (
          <button className={styles.btnCreatePost} disabled>Aguarde...</button>
        )}
        {response.error && <p className={styles.error}>{response.error}</p>}
        {formError && <p className={styles.error}>{formError}</p>}
      </form>
    </div>
  )
}

export default CreatePost