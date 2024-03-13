function(t, r, e) {
    var Symbol = e("506264"),
        n = Object.prototype,
        o = n.hasOwnProperty,
        i = n.toString,
        a = Symbol ? Symbol.toStringTag : void 0;
    t.exports = function(t) {
        var r = o.call(t, a),
            e = t[a];
        try {
            t[a] = void 0;
            var n = !0
        } catch (t) {}
        var u = i.call(t);
        return n && (r ? t[a] = e : delete t[a]), u
    }
}