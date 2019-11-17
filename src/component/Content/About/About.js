import React from "react";
import classes from './About.module.css';

const about = () => {
  return (
    <div className={classes.About}>
      <p>
        Мне 20 лет, я закончил учебу в СПК и получил диплом техника-программиста, а так же обрел
        навыки программирования в разных сферах, начиная от Гейм-дева и заканчивая корпоративными
        приложениями. Если вас заинтересовали мои навыки то вы можете обратиться ко мне по контактным
        данным предоставленным ниже.
      </p>
      <h2>Контакты</h2>
      <div className={classes.ContactInfo}>
          <span>+7 951 403 66 17</span>
          <span>romagladyshev@gmail.com</span>
          <span>Git: <a href="https://github.com/real-festil" style={{color: 'black', textDecoration: 'none'}}>real-festil</a></span>
      </div>
    </div>
  );
};

export default about;
