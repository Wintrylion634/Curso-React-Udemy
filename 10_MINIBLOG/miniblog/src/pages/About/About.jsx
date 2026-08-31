import React from 'react';

// CSS
import styles from './About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
        <h2 className={styles.about_title}>Sobre o Mini <span>Blog</span></h2>
        <p className={styles.about_text}>
          Este projeto consiste em um blog feito com React no front-end e Firebase no back-end.
        </p> 
        <Link to="/posts/create" className={styles.about_btn}> Criar Post</Link>
    </div>
  )
}

export default About