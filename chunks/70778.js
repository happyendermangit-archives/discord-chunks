function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("601094"),
        l = n("306191"),
        c = n("943273"),
        f = n("437404"),
        d = n("813442"),
        _ = n("250436"),
        E = n("244749"),
        p = n("614354"),
        m = n("129852");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h() {
        var e, t, n, o = (0, p.useImpressionStore)(function(e) {
                return {
                    debugTrackedData: e.debugTrackedData,
                    impressions: e.impressions
                }
            }),
            h = o.debugTrackedData,
            O = o.impressions,
            T = (0, a.useStateFromStores)([l.default], function() {
                return l.default.isAnalyticsDebuggerEnabled
            }),
            S = (0, a.useStateFromStores)([s.default], function() {
                return s.default.isDeveloper
            });
        var v = (e = r.useState(!1), t = 2, function(e) {
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
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            g = v[0],
            A = v[1],
            b = null != h ? h : {},
            N = b.name,
            R = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(b, ["name"]),
            C = null != N;
        return S && T ? r.createElement(E.default, null, r.createElement("div", {
            className: i()(m.container, (I(n = {}, m.containerMinimized, g), I(n, m.notTracked, !C), n))
        }, r.createElement(u.Clickable, {
            className: m.minimizeButton,
            onClick: function() {
                A(!g)
            }
        }, g ? r.createElement(d.default, null) : r.createElement(_.default, null)), r.createElement("div", {
            className: i()(m.content, I({}, m.contentMinimized, g))
        }, r.createElement(u.Text, {
            className: i()(m.label, I({}, m.notTracked, !C)),
            variant: "text-xxs/normal"
        }, C ? r.createElement(c.default, {
            className: m.iconTracked
        }) : r.createElement(f.default, {
            className: m.iconNotTracked
        }), null != N ? N : "(untracked)"), r.createElement("div", {
            className: m.current
        }, JSON.stringify(R, void 0, 2)), r.createElement(u.Text, {
            className: i()(m.label, I({}, m.notTracked, !C)),
            variant: "text-xxs/normal"
        }, "impressions stack"), r.createElement("div", {
            className: m.stack
        }, JSON.stringify(O, void 0, 2))))) : null
    }
}