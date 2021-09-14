import React from 'react';
import Card from '../../Components/Card';
import App from '../../Layouts/Backend';

export default function Panel() {
    return (
        <>
            <Card>
                <Card.Header>
                    <div className="font-semibold">Lorem ipsum dolor sit amet.</div>
                    <div className="text-xs text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, esse.
                    </div>
                </Card.Header>
                <Card.Body>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa necessitatibus qui animi aspernatur magni iure nisi ducimus odio incidunt, magnam sunt maxime numquam iste itaque sapiente illum similique molestiae.</p>
                    <p className="mb-4">Perspiciatis pariatur esse temporibus atque minus ex excepturi illo ut vel eligendi non a quibusdam explicabo, praesentium eum cum? Sit soluta harum vitae incidunt rerum, excepturi id eveniet maiores reiciendis.</p>
                    <p className="mb-4">Reprehenderit ab praesentium earum. Repudiandae sunt vero dolorum, quisquam in facere non debitis nam. Provident expedita distinctio officiis perspiciatis consequuntur ipsa quia. Numquam esse consectetur dolorem non, quo deserunt ratione!</p>
                    <p className="mb-4">Ratione esse beatae quia libero nihil sapiente incidunt repellendus id dolores perferendis consectetur autem dolorum cumque, nobis eaque modi unde eum a nesciunt, reiciendis ipsam non necessitatibus. Eius, ullam in!</p>
                    <p>Eaque velit quaerat ipsa voluptates sapiente? Necessitatibus voluptas culpa rem officiis quis asperiores veniam neque quasi cupiditate consectetur natus esse, ipsa quae qui nobis reprehenderit pariatur harum. Neque, delectus. Sunt.</p>
                </Card.Body>
            </Card>
        </>
    );
}
