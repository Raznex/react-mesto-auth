import React from 'react';
import Card from './Card.js';
import {UserContext} from "../contexts/CurrentUserContext.js"

function Main({cards, onEditAvatar, onEditProfile, onAddPlace, handleCardClick, handleCardLike,  handleDeleteClick}) {
    const currentUser = React.useContext(UserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <button className="profile__container-avatar" type="button" onClick={onEditAvatar}>
                        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
                    </button>
                    <div className="profile__profile-info">
                        <div className="profile__title">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button name='popup-edit-open' type="button" className="profile__edit-button"
                                    onClick={onEditProfile}/>
                        </div>
                        <p className="profile__profession">{currentUser.about}</p>
                    </div>
                </div>
                <button name='popup-add-open' type="button" className="profile__add-button"
                        onClick={onAddPlace}/>
            </section>
            <section className="elements">
                {
                    cards.map((card) => {
                        return (<Card
                            key={card._id}
                            card={card}
                            onCardClick={handleCardClick()}
                            onCardLike={handleCardLike()}
                            onCardDelete={handleDeleteClick()}/>)
                    })
                }
            </section>
        </main>
    );
}

export default Main;