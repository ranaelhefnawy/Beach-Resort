import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends React.Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "We have amazing drinks on pool for our guests for free"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Because that the best view comes after hardest work, we offer safe hiking all day"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "There are sceduled free shuttle for our guests from beach to the resort and vice versa"
            },
            {
                icon: <FaBeer />,
                title: "strongest Beer",
                info: "At night, great beer with great shows in our bar"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
