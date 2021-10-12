import http from "../http";

const firestoreCall = async (collection_) => {
    const res = await http.getCollection(collection_);
    var data = res.data;
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
            return y.from._seconds - x.from._seconds
        })
        state.commit("setProjectsData", data);
    },
    async setEducationData(state) {
        var data = await firestoreCall("education");
        data.sort((x, y) => {
            return y.from._seconds - x.from._seconds
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
            return y.from._seconds - x.from._seconds
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
    },
    async setPersonalProjects(state) {
        var data = await firestoreCall("personalprojects");
        state.commit("setPersonalProjects", data);
    }
}