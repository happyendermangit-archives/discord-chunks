function(e, t, n) {
    n("424973"), n("781738");
    var r = n("954995"),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        s = r(function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function(e, n, r, i) {
                t.push(r ? i.replace(o, "$1") : n || e)
            }), t
        });
    e.exports = s
}