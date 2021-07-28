import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts";
import store from "../../redux/store";
import "./ContactForm.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSubmit = (name, number) => {
      const state = store.store.getState();
      state.contacts.items.some((item) => item.name === name)
        ? alert("ups, this name is on the list already")
        : dispatch(contactsOperations.addContact(name, number));
    };

    onSubmit(name, number);

    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <label>
        <input
          name="name"
          id="name"
          type="text"
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
          required
          onChange={handleChangeNumber}
        />
        <div className="label-text">Number</div>
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
}
