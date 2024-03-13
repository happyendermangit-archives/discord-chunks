function(t, r, e) {
    e("424973"), e("781738");
    var n = e("91589"),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = n(function(t) {
            var r = [];
            return 46 === t.charCodeAt(0) && r.push(""), t.replace(o, function(t, e, n, o) {
                r.push(n ? o.replace(i, "$1") : e || t)
            }), r
        });
    t.exports = a
}