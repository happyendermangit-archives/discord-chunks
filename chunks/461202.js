function(t, e, n) {
    n("70102");
    var r = n("907416").default;
    t.exports = function(t, e) {
        if ("object" !== r(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" !== r(i)) return i;
            throw TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}