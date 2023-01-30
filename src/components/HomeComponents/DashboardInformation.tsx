import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { matchCounter } from '../../types/matchCounter';
import Preferences from './Preferences'



interface IProps{
    match: matchCounter
}

function Information(props: IProps) {
    const {match} = props;

    //maybe add contact info here?

  return (
    <Card className="dashCard">
      <Card.Img variant="top" src="placeholder.png" alt="Picture" />
      <Card.Body>
        <Card.Title>{match.user.name} <span className='percentage'>{match.percentage}%</span></Card.Title>
        <Preferences key={"pref/"+match.user.id} match={match} />
        <span>
        <Button variant="warning">send friend request</Button>
        </span>
      </Card.Body>
    </Card>
  );
}

export default Information;