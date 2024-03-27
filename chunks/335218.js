function(e) {
    e.exports = function(e, t, n, r) {
        var i = n ? n.call(r, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var a = Object.keys(e),
            o = Object.keys(t);
        if (a.length !== o.length) return !1;
        for (var s = Object.prototype.hasOwnProperty.bind(t), u = 0; u < a.length; u++) {
            var c = a[u];
            if (!s(c)) return !1;
            var l = e[c],
                d = t[c];
            if (!1 === (i = n ? n.call(r, l, d, c) : void 0) || void 0 === i && l !== d) return !1
        }
        return !0
    }
}