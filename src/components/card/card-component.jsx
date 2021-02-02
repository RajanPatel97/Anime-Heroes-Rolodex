import './card-component.styles.css'

export const Card = ({hero}) => (
    <div className='card-container'>
        <img alt="hero" src={`${hero.img}`}/>
        <h1>{hero.name}</h1>
    </div>
)
