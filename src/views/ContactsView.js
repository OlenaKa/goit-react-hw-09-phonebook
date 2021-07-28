import ContactForm from "../Components/ContactForm";
import Filter from "../Components/Filter";
import ContactList from "../Components/ContactList";

const ContactsView = () => (
  <>
    <h1> Phonebook </h1>
    <div className="manage-contacts-container">
      <ContactForm />
      <Filter />
    </div>
    <h2> Contacts </h2>
    <ContactList />
  </>
);

export default ContactsView;
