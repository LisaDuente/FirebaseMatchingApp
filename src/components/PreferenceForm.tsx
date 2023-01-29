
import { Button, Tab, Tabs } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { User } from '../types/user';
import "../styles/profil.css"
import { Hobby } from '../types/hobby';
import { useEffect, useState } from 'react';
import { hobbyCollection } from '../lib/Controller';
import { DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { addHobby, deleteHobby, getAllHobbies } from '../lib/hobbyFunctions';



interface IProps{
    user: User | undefined;
}

function PreferenceForm(props: IProps) {
    const {user} = props;
    const [hobby, setHobby] = useState<Hobby>()
    const [userHobbies, setUserHobbies] = useState<String[]>()

    useEffect(() =>{
      onSnapshot(hobbyCollection,(snapshot: QuerySnapshot<DocumentData>) =>{
        const hobby = getAllHobbies(snapshot)
        setHobby(hobby[0])
      })
    }, [])

    const testHobby = {...hobby}
   

  return (
    <Card className= "preferenceCard" >
      <Card.Body className= "preferenceCardBody">
        <Card.Title>Change your preferences</Card.Title>
        <hr />
        <Tabs
          defaultActiveKey="Moba"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          {
            Object.keys(testHobby as Hobby).map((caption: string) => {
              return <Tab eventKey={caption} title={caption}>
                {
                  testHobby[caption as keyof Hobby]?.map((gameName: string) => {
                    return <Button style={{margin: "0.1rem"}} variant="success" className="addBtn" onClick={async() => {await addHobby((user as User), gameName); setUserHobbies(user?.preferences)}}>{gameName} +</Button>
                  })

                }          
              </Tab>})
          }
        </Tabs>
        <hr />
        <Card.Title>Current preferences</Card.Title>
        <span className= "preferenceSpan">
          {user?.preferences.map((pref) => {return <Button style={{margin: "0.1rem"}} variant="secondary" className="close" onClick={async () => {await deleteHobby((user as User), pref); setUserHobbies(user?.preferences)}}>{pref} -</Button>})}
        </span>
        
      </Card.Body>
    </Card>
  );
}

export default PreferenceForm;