function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PopoutCSSAnimator: function() {
            return y
        }
    });
    var r, o, i, a = n("470079"),
        u = n("803997"),
        s = n.n(u),
        l = n("945816"),
        c = n("676250"),
        f = n("207240");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e, t) {
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
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(r = o || (o = {}))[r.TRANSLATE = 1] = "TRANSLATE", r[r.SCALE = 2] = "SCALE", r[r.FADE = 3] = "FADE";
    var p = Object.freeze((_(i = {}, 1, f.translate), _(i, 2, f.scale), _(i, 3, f.fade), i)),
        m = Object.freeze({
            top: f.animatorTop,
            bottom: f.animatorBottom,
            left: f.animatorLeft,
            right: f.animatorRight,
            center: f.animatorCenter,
            window_center: f.animatorCenter
        });

    function y(e) {
        var t, n = e.position,
            r = e.type,
            o = e.children,
            i = a.useContext(c.AccessibilityPreferencesContext).reducedMotion.enabled ? 3 : r,
            u = E(a.useState(null != n), 2),
            d = u[0],
            y = u[1],
            I = E(a.useState(function() {
                return new l.Timeout
            }), 1)[0];
        return a.useEffect(function() {
            return function() {
                return I.stop()
            }
        }, [I]), a.useEffect(function() {
            null != n && I.start(10, function() {
                return y(!0)
            })
        }, [n, I]), a.createElement("div", {
            className: s()(null != n ? m[n] : null, (_(t = {}, p[i], null != n), _(t, f.didRender, d), t))
        }, o)
    }
    y.Types = o
}