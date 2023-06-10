import { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    }

    return (
        <section className="work container section" id="work">
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work__item" onClick={() => filterItem("JavaScript")}>JavaScript</span>
                <span className="work__item" onClick={() => filterItem("E-commerce")}>E-commerce</span>
                <span className="work__item" onClick={() => filterItem("Game")}>Game</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const { id, image, title, category } = elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{title}</span>
                            <h3 className="work__title">{category}</h3>
                            <a href="#" className="work__button"></a>
                            <i className="icon-link work__button-icon"></i>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;
