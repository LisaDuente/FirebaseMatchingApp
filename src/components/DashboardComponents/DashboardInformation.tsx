import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { auth } from '../../lib/Firebase';
import { sendfriendRequest } from '../../lib/friendRequests';
import { matchCounter } from '../../types/matchCounter';
import Preferences from './Preferences'



interface IProps{
    match: matchCounter
}


function Information(props: IProps) {
    const {match} = props;

    //maybe add contact info here?
  
    async function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const userId: string = event?.currentTarget.value;
        const requestUser: string = auth.currentUser?.uid as string;
        //check for friend request
        sendfriendRequest(requestUser, userId)
    }


  return (
    <Card className="dashCard">
      <Card.Img variant="top" src="placeholder.png" alt="Picture" />
      <Card.Body>
        <Card.Title>{match.user.name} <span className='percentage'>{match.percentage}%</span></Card.Title>
        <Preferences key={"pref/"+match.user.id} match={match} />
        <span>
        <Button className="friendButton" value={match.user.id} variant="dark" onClick={(e) => {handleClick(e)}}>become friends</Button>
        </span>
      </Card.Body>
    </Card>
  );
}

export default Information;