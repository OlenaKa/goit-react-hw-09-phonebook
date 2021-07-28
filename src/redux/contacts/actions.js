// import { v4 as uuidv4 } from "uuid"
import { createAction } from "@reduxjs/toolkit";

// const addContact = createAction("contacts/add", (name, number) => ({
//   payload: {
//     // id: uuidv4(),
//     name,
//     number,
//   },
// }))

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const changeContactRequest = createAction("contacts/changeContactRequest");
const changeContactSuccess = createAction("contacts/changeContactSuccess");
const changeContactError = createAction("contacts/changeContactError");
// const deleteContact = createAction("contacts/delete")
const filterContacts = createAction("contacts/filter");
// const needChangeContact = createAction("contacts/needChange")
// eslint-disable-next-line
export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
};
