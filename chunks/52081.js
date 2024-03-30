function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("629815"),
        u = n("118197"),
        s = n("656377"),
        l = n("719328"),
        c = n("738223"),
        f = n("661458"),
        d = n("866055"),
        _ = n("382021"),
        E = n("941504"),
        p = n("972896");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e) {
        var t, n, y, I, h = e.className,
            O = e.disabled,
            T = e.renderCTAButtons;
        var S = (t = (0, o.useStateFromStoresArray)([c.default], function() {
                return [c.default.getCurrentDesktopIcon(), c.default.isEditorOpen]
            }), n = 2, function(e) {
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
            v = S[0],
            g = S[1],
            A = r.useRef(null);
        (0, s.default)(A, _.AppearanceScrollPositions.CUSTOM_APP_ICONS);
        var b = (0, l.useUID)(),
            N = (0, i.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: b
            }),
            R = function(e) {
                a.default.dispatch({
                    type: "APP_ICON_UPDATED",
                    id: e
                })
            };
        return r.createElement("div", {
            ref: A
        }, r.createElement("div", (y = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, N), I = (I = {
            className: p.__invalid_container
        }, I), Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(I)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(I)).forEach(function(e) {
            Object.defineProperty(y, e, Object.getOwnPropertyDescriptor(I, e))
        }), y), r.createElement("div", {
            className: h
        }, r.createElement("div", {
            className: p.header
        }, r.createElement("div", {
            className: p.headings
        }, g ? null : r.createElement("div", {
            className: p.title
        }, r.createElement(i.Heading, {
            variant: "text-md/medium"
        }, E.default.Messages.APP_ICON_SETTINGS_TITLE), r.createElement(u.default, {
            className: p.premiumIcon
        })), r.createElement(i.Heading, {
            variant: "text-sm/normal"
        }, E.default.Messages.APP_ICON_SETTINGS_DESCRIPTION)), null == T ? void 0 : T()), r.createElement("div", {
            className: p.presets
        }, d.ICONS.filter(function(e) {
            return !0 !== e.isHidden
        }).map(function(e, t) {
            return r.createElement(f.default, {
                key: e.id,
                icon: e,
                isSelected: v === e.id,
                onSelect: function(e) {
                    return R(e)
                },
                disabled: O,
                tabIndex: 0 !== t || O ? void 0 : 0
            })
        })))))
    }
}