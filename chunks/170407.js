function(e, t, n) {
    "use strict";
    n("426094");
    var r, i, o = Function.prototype.toString,
        s = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
    if ("function" == typeof s && "function" == typeof Object.defineProperty) try {
        r = Object.defineProperty({}, "length", {
            get: function() {
                throw i
            }
        }), i = {}, s(function() {
            throw 42
        }, null, r)
    } catch (e) {
        e !== i && (s = null)
    } else s = null;
    var a = /^\s*class\b/,
        c = function(e) {
            try {
                var t = o.call(e);
                return a.test(t)
            } catch (e) {
                return !1
            }
        },
        u = function(e) {
            try {
                if (c(e)) return !1;
                return o.call(e), !0
            } catch (e) {
                return !1
            }
        },
        d = Object.prototype.toString,
        l = "function" == typeof Symbol && !!Symbol.toStringTag,
        f = !(0 in [, ]),
        p = function() {
            return !1
        };
    if ("object" == typeof document) {
        var h = document.all;
        d.call(h) === d.call(document.all) && (p = function(e) {
            if ((f || !e) && (void 0 === e || "object" == typeof e)) try {
                var t = d.call(e);
                return ("[object HTMLAllCollection]" === t || "[object HTML document.all class]" === t || "[object HTMLCollection]" === t || "[object Object]" === t) && null == e("")
            } catch (e) {}
            return !1
        })
    }
    e.exports = s ? function(e) {
        if (p(e)) return !0;
        if (!e || "function" != typeof e && "object" != typeof e) return !1;
        try {
            s(e, null, r)
        } catch (e) {
            if (e !== i) return !1
        }
        return !c(e) && u(e)
    } : function(e) {
        if (p(e)) return !0;
        if (!e || "function" != typeof e && "object" != typeof e) return !1;
        if (l) return u(e);
        if (c(e)) return !1;
        var t = d.call(e);
        return !!("[object Function]" === t || "[object GeneratorFunction]" === t || /^\[object HTML/.test(t)) && u(e)
    }
}