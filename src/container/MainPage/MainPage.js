import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Header from '../../component/Navigation/Header/Header';
import Skill from '../../component/Content/Skill/Skill';
import Projects from '../../component/Content/Projects/Projects';
import About from '../../component/Content/About/About';
import Footer from '../../component/Navigation/Footer/Footer';
import jsImage from '../../assets/images/js.png';
import sqlImage from '../../assets/images/sql.jpg';
import htmlCssImage from '../../assets/images/htmlcss.svg';
import reactImage from '../../assets/images/react-logo.png';
import burgerBuilderImage from '../../assets/images/burgerBuilder.png';
import shopImage from '../../assets/images/shop.png';
import projectImage from '../../assets/images/projectImage.jpg';
import classes from './MainPage.module.css';

class MainPage extends Component {
    render() {
        return (
            <Aux>
                <Header/>
                <div className={classes.Skills}>
                    <h1 className={classes.Caption}>Навыки</h1>
                    <Skill
                        imgSrc={htmlCssImage}
                        imgAlt='html/css'
                        caption='HTML/CSS'
                        desc='Адаптивная верстка сайтов с помощью flex и grid'
                        />
                    <Skill
                        imgSrc={jsImage}
                        imgAlt='js'
                        caption='JavaScript'
                        desc='Разнообразные скрипты написанные с помощью JS. Курсы Udemy'
                        />
                    <Skill
                        imgSrc={reactImage}
                        imgAlt='react'
                        caption='React'
                        desc='Веб-приложения на React. Курсы Udemy'
                        />
                    <Skill
                        imgSrc={sqlImage}
                        imgAlt='sql'
                        caption='SQL'
                        desc='Подключение баз данных к сайтам и веб приложениям'
                        />
                </div>
                <div className={classes.Projects}>
                    <h1 className={classes.Caption}>Проекты</h1>
                    <Projects
                        href='https://someshop-628a3.firebaseapp.com/'
                        backgroundImage={burgerBuilderImage}
                        caption='Burger Builder'
                        desc='Проект сделанный в течении прохождения React курсов от Udemy'
                        />
                    <Projects
                        href='https://react-edd41.firebaseapp.com/'
                        backgroundImage={shopImage}
                        caption='Shop Project'
                        desc='Проект веб-приложения магазина демонстрирующий навыки React'
                        />
                    <Projects
                        href='#'
                        backgroundImage={projectImage}
                        caption='Место для вашего проекта'
                        desc='Вы можете заказать сайт/веб-приложения обратившись по контактам ниже'
                        />
                </div>
                <div className={classes.About}>
                    <h1 className={classes.Caption}>Обо мне</h1>
                    <About/>
                </div>
                <Footer/>
            </Aux>
        );
    }
}

export default MainPage;
