function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n("898511"),
        a = n("704532"),
        u = n("813970"),
        s = n("622780"),
        l = n("120447"),
        c = n("281767");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var d = (0, o.debounce)(function(e) {
        setTimeout(function() {
            var t;
            null === (t = e.current) || void 0 === t || t.focus()
        }, 0)
    }, 50);

    function _(e, t) {
        var n, o, _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
            E = (0, i.useStateFromStores)([s.default], function() {
                return s.default.keyboardModeEnabled
            }),
            p = (0, a.default)();
        var m = (n = r.useState(!1), o = 2, function(e) {
                if (Array.isArray(e)) return e
            }(n) || function(e, t) {
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
            }(n, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }
            }(n, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            y = m[0],
            I = m[1],
            h = (0, u.useWindowDispatch)();
        return r.useEffect(function() {
            var e = function() {
                p && (h.dispatch(c.ComponentActions.POPOUT_CLOSE), l.ComponentDispatch.dispatch(c.ComponentActions.CONTEXT_MENU_CLOSE))
            };
            if (t) return _.addEventListener("blur", e),
                function() {
                    return _.removeEventListener("blur", e)
                }
        }, [_, p, t, h]), r.useEffect(function() {
            var n, r, o, i = function(t) {
                var n = t.relatedTarget;
                setTimeout(function() {
                    (null == n || "BUTTON" === n.tagName) && !a && d(e)
                }, 100)
            };
            if (!E && y && t) {
                var a = p;
                return null === (n = e.current) || void 0 === n || n.addEventListener("focusout", i), (null === (r = _.document.activeElement) || void 0 === r ? void 0 : r.tagName) !== "IFRAME" && !a && (null === (o = e.current) || void 0 === o || o.focus()),
                    function() {
                        var t;
                        null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", i), a = !0
                    }
            }
        }, [t, y, E, e, _, p]), I
    }
}