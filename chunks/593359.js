function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Collapsible: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("718017"),
        u = n("898511"),
        s = n("675865"),
        l = n("622780"),
        c = n("925555");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function E(e) {
        var t = e.children,
            n = e.className,
            o = e.collapsibleContent,
            f = e.isExpanded,
            E = _(r.useState(!1), 2),
            p = E[0],
            m = E[1],
            y = (0, u.useStateFromStores)([l.default], function() {
                return l.default.useReducedMotion
            }),
            I = _(r.useState(!0), 2),
            h = I[0],
            O = I[1],
            T = _(r.useState(!1), 2),
            S = T[0],
            v = T[1],
            g = null != f ? f : p,
            A = (0, s.default)(),
            b = A.ref,
            N = A.height,
            R = (0, s.default)(),
            C = R.ref,
            P = R.height,
            D = void 0 === P ? 0 : P,
            L = (0, a.useSpring)({
                height: g ? (void 0 === N ? 0 : N) + D : D,
                immediate: h || y,
                config: a.config.stiff,
                onRest: function() {
                    return v(!0)
                }
            }),
            M = r.useCallback(function() {
                m(!p)
            }, [p, m]);
        return r.useLayoutEffect(function() {
            var e = setTimeout(function() {
                O(!1)
            }, 100);
            return function() {
                return clearTimeout(e)
            }
        }, []), r.createElement("div", {
            className: i()(c.collapseable, d({}, c.toggled, g), n)
        }, r.createElement(a.animated.div, {
            className: i()(c.contentExpandContainer, d({}, c.showOverflow, g && S)),
            style: L
        }, r.createElement("div", {
            ref: C,
            className: i()(c.header, d({}, c.toggled, g))
        }, t({
            onClick: M
        })), r.createElement("div", {
            ref: b
        }, o)))
    }
}