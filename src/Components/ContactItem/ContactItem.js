import Button from "react-bootstrap/Button";
import "./ContactItem.css";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts";
import ChangeContactForm from "../ChangeContactForm";
import { useState } from "react";

export default function ContactItem({ contacts }) {
  const dispatch = useDispatch();
  const [needChange, setNeedChange] = useState("");

  const onDelete = (id) => dispatch(contactsOperations.deleteContact(id));
  const onChangeContact = (id) => {
    setNeedChange(id);
  };

  const onChangeSubmit = () => {
    setNeedChange(false);
  };
  return contacts.map((contact) => (
    <li key={contact.id} className="contactItem">
      {needChange !== contact.id ? (
        <>
          <p>
            {contact.name}: {contact.number}
          </p>
          <Button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
          <Button type="button" onClick={() => onChangeContact(contact.id)}>
            Change
          </Button>
        </>
      ) : (
        <ChangeContactForm id={contact.id} onChangeSubmit={onChangeSubmit} />
      )}
    </li>
  ));
}
