function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("784184"),
        l = n("932403"),
        c = n("774335"),
        f = n("417234"),
        d = n("866055"),
        _ = n("281767"),
        E = n("941504"),
        p = n("354585");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var I = function() {
        var e;
        return null !== (e = u().sample([E.default.Messages.APP_ICON_PIRATE, E.default.Messages.APP_ICON_PIRATE_1, E.default.Messages.APP_ICON_PIRATE_2, E.default.Messages.APP_ICON_PIRATE_3, E.default.Messages.APP_ICON_PIRATE_4])) && void 0 !== e ? e : E.default.Messages.APP_ICON_PIRATE
    };

    function h(e) {
        var t, n, o = e.id,
            a = e.className,
            u = e.onSelect,
            f = e.isSelected,
            E = void 0 !== f && f,
            h = e.tabIndex,
            O = e.children;
        var T = (t = r.useState(d.ICONS_BY_ID[o].name), n = 2, function(e) {
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
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            S = T[0],
            v = T[1],
            g = o === c.PremiumAppIconIds.PIRATE,
            A = (0, s.useRadioItem)({
                label: S,
                isSelected: E
            });
        return r.createElement(s.Tooltip, {
            text: S,
            onTooltipShow: function() {
                return g && v(I())
            }
        }, function(e) {
            var t, n;
            return r.createElement("div", {
                className: p.appIconSelectionContainer
            }, r.createElement(s.Clickable, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        y(e, t, n[t])
                    })
                }
                return e
            }({}, e, A), n = (n = {
                tabIndex: null != h ? h : A.tabIndex,
                className: i()(p.appIconSelection, y({}, p.selected, E), a),
                onClick: E ? _.NOOP : function() {
                    return null == u ? void 0 : u(o)
                }
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), O), E && r.createElement(l.SelectionCircle, null))
        })
    }

    function O(e) {
        var t = e.icon,
            n = e.isSelected,
            o = e.disabled,
            i = e.tabIndex,
            a = e.onSelect;
        return r.createElement(h, {
            onSelect: o ? void 0 : a,
            isSelected: n,
            id: t.id,
            className: o ? p.disabled : void 0,
            tabIndex: i
        }, r.createElement(f.default, {
            id: t.id,
            width: d.CUSTOM_BASE_SIZE
        }))
    }
}