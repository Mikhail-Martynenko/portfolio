import React from 'react';

const ContactsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="https://t.me/anekaif">@anekaif</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">E-mail</h2>
                        <p><a href="mailto:misha.martynenko8@yandex.ru">misha.martynenko8@yandex.ru</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default ContactsPage;