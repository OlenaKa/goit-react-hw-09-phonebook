import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import "./ChangeContactForm.css";

export default function ChangeContactForm({ id, onChangeSubmit }) {
  const contact = useSelector(contactsSelectors.getContacts).find(
    (contact) => contact.id === id
  );

  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const onSubmit = (name, number, id) =>
      dispatch(contactsOperations.changeContact(name, number, id));

    onSubmit(name, number, id);
    onChangeSubmit();
  };

  return (
    <form className="changeform" onSubmit={handleSave}>
      <p>Change:</p>
      <label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder={contact.name}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleChangeName}
        />
        <div className="label-text">Name</div>
      </label>

      <label className="number-label">
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder={contact.number}
          required
          onChange={handleChangeNumber}
        />
        <div className="label-text">Number</div>
      </label>
      <Button type="submit">Save</Button>
    </form>
  );
}
