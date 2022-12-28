import './Styles.css'
import { Card } from './../Card/Card';

export const CardList = ({monsters}) =>{
  return (
  <div className="card-list">
    {monsters.map((monster) => 
      <Card key={monster.id} monster={monster}/>
    )}
  </div>
)}
