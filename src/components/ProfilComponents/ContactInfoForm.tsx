
import { useEffect, useState } from 'react'
import { Button, Card, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import updateContactInfo from '../../lib/updateContactInformation';
import { ContactInputs } from '../../types/formInputs';
import { User } from '../../types/user'

interface contactProps{
    user: User | undefined;
}

function ContactInfoForm(props: contactProps) {
    const [smShow, setSmShow] = useState(false);
    const {user} = props
    const preloadValues = {discord: user?.contact.discord, instagram:user?.contact.instagram, snapchat: user?.contact.snapchat}
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInputs>({defaultValues: preloadValues});

    useEffect(() => {
        const preloadValues = {discord: user?.contact.discord, instagram:user?.contact.instagram, snapchat: user?.contact.snapchat}
        reset(preloadValues)
    }, [user])

    const onSubmit: SubmitHandler<ContactInputs> = data => {
        updateContactInfo(user?.id, user?.contact.email as string, data)
        setSmShow(true)
    };

  return (
    <>
    <Card className= "contactCard">
        <Card.Body>
        <Card.Title >Change your contact information</Card.Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel controlId="floatingInput" label="Discord" className="mb-3">
                    <Form.Control type="text"  defaultValue={user?.contact.discord}  {...register("discord")}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Instagram" className="mb-3">
                    <Form.Control type="text"  defaultValue={user?.contact.instagram}  {...register("instagram")}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Snapchat" className="mb-3">
                    <Form.Control type="text"  defaultValue={user?.contact.snapchat}  {...register("snapchat")}/>
                </FloatingLabel>
                <Button type="submit">Save changes</Button>
            </Form>
        </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Update successfully!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Your contact information has been updated!</Modal.Body>
      </Modal>
    </>
  )
}



export default ContactInfoForm