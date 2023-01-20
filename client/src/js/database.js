import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO/DONE: Add logic to a method that accepts some content and adds it to the database

// // PUT function
export const putDb = async (content) => { 
  console.log('Put- Added to the database');
  // // connect to DB and version we want to use. 
  const jateDb = await openDB('jate', 1);
  //   // make new transaction...need to specify the DB we are posting to and the data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  //   // open the object store
  const store = tx.objectStore('jate');
  //   // use the .add() method to pass in content
  const request = store.put({ id: 1, value: content });
  //   // confirm the data was added
  const result = await request;
  console.log('Data has been saved to the JATE database', result.value);
};

// TODO/DONE: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.log('Get-Retrieved from the database');
//   // connect to DB and version we want to use
  const jateDb = await openDB('jate', 1);
  //   // make new transaction...need to specify the DB we are posting to and the data privileges. 
  const tx = jateDb.transaction('jate', 'readonly');
  //   // open the object store
  const store = tx.objectStore('jate');
  //   // use the .get(1) method to grab all the content in the DB
  const request = store.get(1);
  //   // confirm the data was fetched
  const result = await request;
  if (result) {
    console.log('Data has been retrieved from the JATE database', result.value);
    return result.value;
  } else {
    console.log('Data has not been found from the JATE database');
    return undefined;
  };
};


initdb();