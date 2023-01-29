
import { Accordion } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { User } from '../types/user';
import PreferenceForm from './PreferenceForm';
import ContactInfoForm from './ContactInfoForm';
import { Hobby } from '../types/hobby';

interface IProps{
    user: User | undefined;
}

function ProfilCard(props: IProps) {
    const {user} = props;
    //maybe add contact info here?

  return (
    <Card className= "profilCard">
      <Card.Img variant="top" src="placeholder.png" alt="Picture" className= "profilPicture" />
      <Card.Body>
        <Card.Title className="userName"><span>{user?.name}</span> <span style={{color: "grey"}}>{user?.contact.email}</span></Card.Title>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Contact Information</Accordion.Header>
                <Accordion.Body>
                   <ContactInfoForm user={user} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Preferences</Accordion.Header>
                <Accordion.Body>
                    <PreferenceForm user={user}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default ProfilCard;