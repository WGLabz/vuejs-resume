import axios from 'axios';

const getFile = async (fileName) => {
    var data = await axios.get('http://localhost:3000/file/' + fileName)
    return data.data;
};

export default { getFile }