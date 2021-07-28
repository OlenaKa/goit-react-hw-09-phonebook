import { useEffect } from "react";
import ContactItem from "../ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const loader = useSelector(contactsSelectors.getloading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {loader && <h1>Loading...</h1>}
      {!loader && (
        <ul>
          <ContactItem contacts={contacts} />
        </ul>
      )}
    </>
  );
}
