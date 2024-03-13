function(e, t, n) {
    n("781738");
    var r = n("143498"),
        i = n("610664"),
        o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        s = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
    e.exports = function(e) {
        return (e = i(e)) && e.replace(o, r).replace(s, "")
    }
}