import axios from 'axios';

var Api = {
    register: function(data) { return axios.post('http://localhost:5000/register', data)},
    login: function(data) { console.log("2"); return axios.post('http://localhost:5000/login', data)},
    getUser: function() { return axios.get('http://localhost:5000/user')},
    editUser: function(data) { return axios.put('http://localhost:5000/user', data)},
    getUserById: function(id) { return axios.get(`http://localhost:5000/user/${id}`)},
    getPlaylists: function(id, data) { return axios.get(`http://localhost:5000/playlist`)},
    getPlaylistById: function(id) { return axios.get(`http://localhost:5000/playlist/${id}`)},    
    likePlaylistById: function(id) { return axios.put(`http://localhost:5000/playlist/${id}`)},
    editPlaylist: function(id) { return axios.put(`http://localhost:5000/playlist/${id}`)},
    getSearch: function(data) {return axios.get(`http://localhost:5000/search?q=${data}`)},
    getSongs: function(data) {return axios.get('http://localhost:5000/songs')},
    addSong: function(id) {return axios.post(`http://localhost:5000/`)},
    addPlaylist: function(id) {return axios.post(`http://localhost:5000/`)},
};

export default Api;