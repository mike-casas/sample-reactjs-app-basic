import Axios from 'axios'

let url= 'https://api.github.com/users/'

function getRepos(username){
  return Axios.get(`${url}${username}/repos`)
};

function getInfo(username){
  return Axios.get(`${url}${username}`)
};

export default function getGithubInfo(username){
  return Axios.all([getRepos(username), getInfo(username) ])
  .then((data)=>({repos: data[0].data,bio: data[1].data}));
}





