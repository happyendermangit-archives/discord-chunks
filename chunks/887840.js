function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clear: function() {
            return i
        },
        getAllForDebugPanel: function() {
            return u
        },
        report: function() {
            return o
        },
        stringify: function() {
            return a
        }
    });
    var r = [];

    function o(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        var i = function(e) {
            var t = "",
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u, s, l, c = i.value;
                    var f = void 0 === c ? "undefined" : (u = c) && "undefined" != typeof Symbol && u.constructor === Symbol ? "symbol" : typeof u;
                    if ("string" === f || "number" === f || "boolean" === f) t += c + " ";
                    else {
                        ;
                        if (s = c, l = Error, null != l && "undefined" != typeof Symbol && l[Symbol.hasInstance] ? !!l[Symbol.hasInstance](s) : s instanceof l) t += c.message + "\n" + c.stack + " ";
                        else t += JSON.stringify(c) + " "
                    }
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            return t
        }(n);
        for ("string" == typeof e ? r.push({
                time: Date.now(),
                category: e,
                message: i
            }) : r.push({
                time: Date.now(),
                category: e.name,
                timing: e.timing,
                message: i
            }); r.length > 5e3;) r.shift()
    }

    function i() {
        r.length = 0
    }

    function a(e) {
        return r.filter(function(t) {
            return null == e || e.includes(t.category)
        }).map(function(e) {
            var t = [];
            return t.push(new Date(e.time).toISOString()), null != e.timing && t.push(e.timing), t.push(e.category, e.message), t.join(" -> ")
        }).join("\n")
    }

    function u() {
        return r
    }
}