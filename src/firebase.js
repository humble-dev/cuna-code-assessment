import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

firebase.initializeApp(window.FIREBASE_CONFIG_JSON)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return

  // Get a reference to the location in the Firestore where the user
  // document may or may not exist.
  const userRef = firestore.doc(`users/${user.uid}`)

  // Go and fetch a document from that location.
  const snapshot = await userRef.get()

  // If there isn't a document for that user. Let's use information
  // that we got from either Google or our sign up form.
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user
    console.log(email)
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.error('Error creating user', console.error)
    }
  }

  // Get the document and return it, since that's what we're
  // likely to want to do next.
  return getUserDocument(user.uid)
}

export const signInWithEmail = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch(error => {
    if (error.code === 'auth/wrong-password') {
      alert('Wrong password.')
    } else {
      alert(error.message)
    }
  })
}

export const signOut = () => {
  auth.signOut().catch(error => {
    console.error(error)
  })
}

export const getUserDocument = uid => {
  if (!uid) return null
  try {
    return firestore.collection('users').doc(uid)
  } catch (error) {
    console.error('Error fetching user', error.message)
  }
}

export default firebase
