import { collection, deleteDoc, doc, getDoc, getDocs,orderBy, query, setDoc, updateDoc} from "firebase/firestore";
import { bd, collImages, collUtilisateurs } from "./init";



// lire les dossiers
export async function lireUne(jour) {
    const idj = await getDoc(doc(bd, collImages, jour));
    //Ajuster le tableau comme voulu et le retourner
}

// modifier un dossier
//export async function modifier(idUtil, idDossier, infoDossier) {
//    // Utiliser updateDoc
//    const refDossier = doc(bd, collUtilisateurs, idUtil, collDossiers, idDossier);
//    await updateDoc(refDossier, infoDossier);
//}

// supprimer un commentaire
//export async function supprimer(idUtil, idDossier) {
//    const refDossier = doc(bd, collUtilisateurs, idUtil, collDossiers, idDossier);
//    await deleteDoc(refDossier);
//}