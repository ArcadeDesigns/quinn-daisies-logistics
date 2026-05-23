// firebaseConfig.js
// Firebase v9+ modular SDK — Authentication & Firestore

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

// ─── Firebase Project Config ───────────────────────────────────────────────
// Replace these values with your own from the Firebase Console:
// Project Settings → General → Your apps → SDK setup and configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// ─── Initialize Firebase ───────────────────────────────────────────────────
const app = initializeApp(firebaseConfig);

// ─── Auth & Firestore Instances ────────────────────────────────────────────
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// ═══════════════════════════════════════════════════════════════════════════
// AUTH HELPERS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Register a new user with email and password.
 * Automatically creates a Firestore user profile document.
 *
 * @param {string} email
 * @param {string} password
 * @param {object} [profileData={}] - Extra fields to store in /users/{uid}
 * @returns {Promise<UserCredential>}
 */
export const registerUser = async (email, password, profileData = {}) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  const { uid } = userCredential.user;

  await setDoc(doc(db, "users", uid), {
    uid,
    email,
    createdAt: serverTimestamp(),
    ...profileData,
  });

  return userCredential;
};

/**
 * Sign in with email and password.
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>}
 */
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

/**
 * Sign in via Google OAuth popup.
 * Creates a Firestore profile on first sign-in.
 *
 * @returns {Promise<UserCredential>}
 */
export const loginWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider);
  const { uid, email, displayName, photoURL } = userCredential.user;

  const userRef = doc(db, "users", uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    await setDoc(userRef, {
      uid,
      email,
      displayName,
      photoURL,
      createdAt: serverTimestamp(),
    });
  }

  return userCredential;
};

/**
 * Sign the current user out.
 *
 * @returns {Promise<void>}
 */
export const logoutUser = () => signOut(auth);

/**
 * Send a password-reset email.
 *
 * @param {string} email
 * @returns {Promise<void>}
 */
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

/**
 * Subscribe to auth state changes.
 * Returns the unsubscribe function — call it to clean up (e.g. in useEffect).
 *
 * @param {function} callback - Receives the Firebase User object (or null)
 * @returns {function} unsubscribe
 *
 * @example
 * useEffect(() => {
 *   const unsubscribe = subscribeToAuthState((user) => setUser(user));
 *   return unsubscribe;
 * }, []);
 */
export const subscribeToAuthState = (callback) =>
  onAuthStateChanged(auth, callback);

// ═══════════════════════════════════════════════════════════════════════════
// FIRESTORE HELPERS
// ═══════════════════════════════════════════════════════════════════════════

// ─── User Profile ──────────────────────────────────────────────────────────

/**
 * Fetch a single user document from /users/{uid}.
 *
 * @param {string} uid
 * @returns {Promise<object|null>} User data or null if not found
 */
export const getUserProfile = async (uid) => {
  const snapshot = await getDoc(doc(db, "users", uid));
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

/**
 * Update fields on an existing user document.
 *
 * @param {string} uid
 * @param {object} data - Fields to merge/update
 * @returns {Promise<void>}
 */
export const updateUserProfile = (uid, data) =>
  updateDoc(doc(db, "users", uid), { ...data, updatedAt: serverTimestamp() });

// ─── Generic Collection CRUD ───────────────────────────────────────────────

/**
 * Add a new document to any collection (auto-generated ID).
 *
 * @param {string} collectionName
 * @param {object} data
 * @returns {Promise<DocumentReference>}
 *
 * @example
 * const ref = await addDocument("posts", { title: "Hello", body: "World" });
 * console.log("New post ID:", ref.id);
 */
export const addDocument = (collectionName, data) =>
  addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });

/**
 * Fetch a single document by collection + ID.
 *
 * @param {string} collectionName
 * @param {string} docId
 * @returns {Promise<object|null>}
 */
export const getDocument = async (collectionName, docId) => {
  const snapshot = await getDoc(doc(db, collectionName, docId));
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

/**
 * Fetch all documents in a collection (optional query constraints).
 *
 * @param {string} collectionName
 * @param {QueryConstraint[]} [constraints=[]] - e.g. [where("uid","==",uid), orderBy("createdAt")]
 * @returns {Promise<object[]>}
 *
 * @example
 * const posts = await getDocuments("posts", [
 *   where("authorId", "==", currentUser.uid),
 *   orderBy("createdAt", "desc"),
 * ]);
 */
export const getDocuments = async (collectionName, constraints = []) => {
  const q = query(collection(db, collectionName), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

/**
 * Set (overwrite) a document at a specific ID.
 *
 * @param {string} collectionName
 * @param {string} docId
 * @param {object} data
 * @returns {Promise<void>}
 */
export const setDocument = (collectionName, docId, data) =>
  setDoc(doc(db, collectionName, docId), {
    ...data,
    updatedAt: serverTimestamp(),
  });

/**
 * Partially update a document (merge fields).
 *
 * @param {string} collectionName
 * @param {string} docId
 * @param {object} data
 * @returns {Promise<void>}
 */
export const updateDocument = (collectionName, docId, data) =>
  updateDoc(doc(db, collectionName, docId), {
    ...data,
    updatedAt: serverTimestamp(),
  });

/**
 * Delete a document.
 *
 * @param {string} collectionName
 * @param {string} docId
 * @returns {Promise<void>}
 */
export const deleteDocument = (collectionName, docId) =>
  deleteDoc(doc(db, collectionName, docId));

// ─── Real-time Listener ─────────────────────────────────────────────────────

/**
 * Subscribe to live updates on a collection query.
 * Returns the unsubscribe function.
 *
 * @param {string} collectionName
 * @param {QueryConstraint[]} constraints
 * @param {function} callback - Receives an array of document objects on every change
 * @returns {function} unsubscribe
 *
 * @example
 * useEffect(() => {
 *   const unsub = subscribeToCollection(
 *     "messages",
 *     [where("roomId", "==", roomId), orderBy("createdAt")],
 *     (msgs) => setMessages(msgs)
 *   );
 *   return unsub;
 * }, [roomId]);
 */
export const subscribeToCollection = (
  collectionName,
  constraints = [],
  callback,
) => {
  const q = query(collection(db, collectionName), ...constraints);
  return onSnapshot(q, (snapshot) => {
    const docs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(docs);
  });
};

// Re-export Firestore query helpers so callers don't need a second import
export { where, orderBy, serverTimestamp };

export default app;
