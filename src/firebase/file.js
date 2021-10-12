import http from '../http';

const getFile = async (fileName) => {
    var data = await http.getFile(fileName)
    return data.data;
};

export default { getFile }