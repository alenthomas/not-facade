const get = (strUrl, callBack) => {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", strUrl);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
    // handle response here
    if(this.readyState == 4 && this.status == 200)
     return callBack(JSON.parse(xmlhttp.response));
  };
};

const helpers = {
  get: get
};

module.exports = helpers;
