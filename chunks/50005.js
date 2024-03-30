function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n.n(r),
        i = n("898511"),
        a = n("622780"),
        u = n("405026");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e) {
        var t, n, l = e.animationData,
            c = e.className;
        var f = (t = (0, r.useState)(0), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            d = f[0],
            _ = f[1],
            E = (0, i.useStateFromStores)([a.default], function() {
                return a.default.useReducedMotion
            });
        return (0, r.useEffect)(function() {
            var e = d + 1;
            e < l.length && l[e]()
        }, [d, l]), o().createElement(u.default, {
            importData: l[d],
            className: c,
            shouldAnimate: !E,
            versionKey: d,
            onComplete: function() {
                d < l.length - 1 && _(d + 1)
            },
            loop: d === l.length - 1
        })
    }
}