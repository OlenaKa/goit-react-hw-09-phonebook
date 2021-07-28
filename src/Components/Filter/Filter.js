import "./Filter.css";
import { useDispatch } from "react-redux";
import { contactsActions } from "../../redux/contacts";

export default function Filter() {
  const dispatch = useDispatch();
  const onInput = (e) =>
    dispatch(contactsActions.filterContacts(e.target.value));
  return (
    <div className="filter-container">
      <h2>Find contacts by name</h2>
      <label>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onInput}
        />
        <div className="label-text">search here</div>
      </label>
    </div>
  );
}
