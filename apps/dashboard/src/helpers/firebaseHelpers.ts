import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface GetDocumentParams {
  collectionName: string;
  id: string;
}

export const getDocumentById = async ({
  collectionName,
  id,
}: GetDocumentParams): Promise<DocumentData | null> => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    throw error; // Optionally re-throw the error
  }
};
