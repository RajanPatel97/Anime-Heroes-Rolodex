import { Card } from '../card/card-component';
import './card-list.styles.css';

export const CardList = ({ heroes }) => {
    return (
        <div className='card-list'>
            {heroes.map(hero => (
               <Card key={hero.id} hero={hero}></Card>
            ))}
        </div>
    )
}

