/* global XMLHttpRequest fetch */
const get = (strUrl, callBack) => {
  const xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', strUrl)
  xmlhttp.send()
  xmlhttp.onreadystatechange = function () {
    // handle response here
    if (this.readyState === 4 && this.status === 200) { return callBack(JSON.parse(xmlhttp.response)) }
  }
}

const myFetch = (strUrl, callBack) => {
  console.log('URL', strUrl)
  fetch(strUrl)
    .then(res => res.json())
    .then(myJson => callBack(myJson))
    .catch(err => callBack(err))
}

const helpers = {
  get: get,
  myFetch: myFetch
}

export default helpers
