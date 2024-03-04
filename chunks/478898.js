function(e, t, n) {
    "use strict";
    var r, i = Object.prototype.toString,
        o = Function.prototype.toString,
        s = /^\s*(?:function)?\*/,
        a = n("149384")(),
        c = Object.getPrototypeOf,
        u = function() {
            if (!a) return !1;
            try {
                return Function("return function*() {}")()
            } catch (e) {}
        };
    e.exports = function(e) {
        if ("function" != typeof e) return !1;
        if (s.test(o.call(e))) return !0;
        if (!a) return "[object GeneratorFunction]" === i.call(e);
        if (!c) return !1;
        if (void 0 === r) {
            var t = u();
            r = !!t && c(t)
        }
        return c(e) === r
    }
}