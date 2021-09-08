import firebase from "../firebase/index";
import { collection, getDocs } from "firebase/firestore";


const firestoreCall = async (collection_) => {
    const data = [];
    const querySnapshot = await getDocs(collection(firebase.db, collection_));
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    if (data.length === 0)
        throw new Error("Please setup firebase " + collection_ + " collection.");
    return data;
}


export default {
    async setUserMetaData(state) {
        var data = await firestoreCall("meta");
        state.commit("setUserMetaData", data[0]);
    },
    async setSkills(state) {
        var data = await firestoreCall("skills");
        state.commit("setSkills", data[0]);
    },
    async setTechStacks(state) {
        var data = await firestoreCall("tech");
        state.commit("setTechStacks", data);
    },
    async setProjectsData(state) {
        var data = await firestoreCall("projects");
        data.sort((x, y) => {
            return y.from.seconds - x.from.seconds
        })
        state.commit("setProjectsData", data);
    },
    async setEducationData(state) {
        var data = await firestoreCall("education");
        data.sort((x, y) => {
            return y.from.seconds - x.from.seconds
        })
        state.commit("setEducationData", data);
    },
    async setCertificationsData(state) {
        var data = await firestoreCall("certifications");
        state.commit("setCertificationsData", data);
    },
    async setExperienceData(state) {
        var data = await firestoreCall("experience");
        data.sort((x, y) => {
            return y.from.seconds - x.from.seconds
        })
        state.commit("setExperienceData", data);
    },
    async setPublicationsData(state) {
        var data = await firestoreCall("publications");
        state.commit("setPublicationsData", data);
    },
    async setContactDetails(state) {
        var data = await firestoreCall("contact");
        state.commit("setContactDetails", data[0]);
    }
}