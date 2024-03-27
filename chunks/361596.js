function(t, e, n) {
    var r = n("915646"),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = r(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
                e.push(r ? i.replace(a, "$1") : n || t)
            }), e
        });
    t.exports = o
}