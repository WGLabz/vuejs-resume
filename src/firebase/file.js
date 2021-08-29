import fb from './index.js'
import { ref, getDownloadURL } from "firebase/storage";

const getFile = (fileName) => getDownloadURL(ref(fb.storage, fileName));

export default { getFile }