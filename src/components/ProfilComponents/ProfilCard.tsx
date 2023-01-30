
import { Accordion } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { User } from '../../types/user';
import PreferenceForm from './PreferenceForm';
import ContactInfoForm from './ContactInfoForm';
import { Hobby } from '../../types/hobby';
import { Button } from 'react-bootstrap/lib/InputGroup';

interface IProps{
    user: User | undefined;
}

function ProfilCard(props: IProps) {
    const {user} = props;
    //maybe add contact info here?

  return (
    <Card className= "profilCard">
      <Card.Img variant="middle" src="placeholder.png" alt="Picture" className="profilPicture"   />
      <Card.Body>
        <Card.Title className="userName"><span>{user?.name}</span> <span style={{color: "grey"}}>{user?.contact.email}</span></Card.Title>
        <Accordion>
            <Accordion.Item eventKey="0">
              <div className="bgAccordion">
                <Accordion.Header>Contact Information</Accordion.Header>
                <Accordion.Body>
                   <ContactInfoForm user={user} />
                </Accordion.Body>
              </div>             
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <div className="bgAccordion">
                <Accordion.Header>Preferences</Accordion.Header>
                <Accordion.Body>
                    <PreferenceForm user={user}/>
                </Accordion.Body>
              </div>
            </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default ProfilCard;