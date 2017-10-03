function get(strUrl) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", strUrl);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
    // handle response here
    if(this.readyState == 4 && this.status == 200)
     console.log("url: ", strUrl, "\nresp: ", xmlhttp.response);
  };
}

module.exports = get;