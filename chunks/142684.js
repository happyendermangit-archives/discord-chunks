function(t, r, n) {
    n("424973"), n("781738");
    var e = n("954995"),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        u = e(function(t) {
            var r = [];
            return 46 === t.charCodeAt(0) && r.push(""), t.replace(o, function(t, n, e, o) {
                r.push(e ? o.replace(i, "$1") : n || t)
            }), r
        });
    t.exports = u
}