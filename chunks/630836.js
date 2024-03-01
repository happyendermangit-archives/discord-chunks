function(t, e, n) {
    function r() {
        return t.exports = r = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, t.exports.__esModule = !0, t.exports.default = t.exports, r.apply(this, arguments)
    }
    t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
}