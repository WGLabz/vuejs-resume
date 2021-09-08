import firebase from "../firebase/index";
import { collection, getDocs } from "firebase/firestore";

export default {
    async setUserMetaData(state) {
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "meta"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase meta collection.");
        state.commit("setUserMetaData", data[0]);
    },
    async setSkills(state) {
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "skills"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase skills collection.");

        state.commit("setSkills", data[0]);
    },
    async setTechStacks(state) {
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "tech"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase tech collection.");
        state.commit("setTechStacks", data);
    },
    async setProjectsData(state) {
        console.info('Fetching projects data.')
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "projects"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase projects collection.");
        data.sort((x, y) => {
            return y.from.seconds - x.from.seconds
        })
        state.commit("setProjectsData", data);
    },
    async setEducationData(state) {
        console.info('Fetching Education data.')
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "education"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase education collection.");
        data.sort((x, y) => {
            return y.from.seconds - x.from.seconds
        })
        state.commit("setEducationData", data);
    },
    async setCertificationsData(state) {
        console.info('Fetching certifications data.')
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "certifications"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase certifications collection.");
        state.commit("setCertificationsData", data);
    },
    async setExperienceData(state) {
        console.info('Fetching experience data.')
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "experience"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase experience collection.");
        data.sort((x, y) => {
            return y.from.seconds - x.from.seconds
        })
        state.commit("setExperienceData", data);
    },
    async setPublicationsData(state) {
        console.info('Fetching publications data.')
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "publications"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase p collection.");
        state.commit("setPublicationsData", data);
    },
    async setContactDetails(state) {
        console.info('Fetching publications data.')
        const data = [];
        const querySnapshot = await getDocs(collection(firebase.db, "contact"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        if (data.length === 0)
            throw new Error("Please setup firebase contact collection.");
        state.commit("setContactDetails", data[0]);
    }
}