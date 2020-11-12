import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDz7ggmimWjLTKZj4qYMp8Ilw7760MgUE",
  authDomain: "test-application-7b401.firebaseapp.com",
  databaseURL: "https://test-application-7b401.firebaseio.com",
  projectId: "test-application-7b401",
  storageBucket: "test-application-7b401.appspot.com",
  messagingSenderId: "616795545730",
  appId: "1:616795545730:web:a45a106b415847e3ce949b",
  measurementId: "G-0CHXTRVG7C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const addCollectionToCollectionsItems = async (docId, addItem) => {
  const DocRef = firestore.collection("collections").doc(docId);
  const DocSnapshot = await DocRef.get();
  const data = DocSnapshot.data();
  const items = data.items;

  const createdAt = new Date();
  const watch =
    createdAt.getFullYear() +
    "年" +
    String(+createdAt.getMonth() + 1) +
    "月" +
    createdAt.getDate() +
    "日";

  const batch = firestore.batch();
  batch.set(DocRef, {
    ...data,
    items: [
      ...items,
      {
        ...addItem,
        createdAt: createdAt,
        watch: watch,
      },
    ],
  });

  return await batch.commit();
};

export const deleteCollectionFromCollectionsItems = async (
  docId,
  deleteItemId
) => {
  const DocRef = firestore.collection("collections").doc(docId);
  const DocSnapshot = await DocRef.get();
  const data = DocSnapshot.data();
  const items = data.items;

  const newItems = items.filter((item) => item.id !== deleteItemId);

  const batch = firestore.batch();
  batch.set(DocRef, {
    ...data,
    items: newItems,
  });

  return await batch.commit();
};

export const updateCollectionOfCollectionsItems = async (
  docId,
  updateItem,
  updateItemId
) => {
  const DocRef = firestore.collection("collections").doc(docId);
  const DocSnapshot = await DocRef.get();
  const data = DocSnapshot.data();
  const items = data.items;

  const createdAt = new Date();
  const watch =
    createdAt.getFullYear() +
    "年" +
    createdAt.getMonth() +
    "月" +
    createdAt.getDate() +
    "日";

  const newItems = items.map((item) => {
    if (item.id === updateItemId) {
      return {
        ...item,
        ...updateItem,
        createdAt: createdAt,
        watch: watch,
      };
    } else {
      return item;
    }
  });

  const batch = firestore.batch();
  batch.set(DocRef, {
    ...data,
    items: newItems,
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) =>
  collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items,
    };
  });

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
