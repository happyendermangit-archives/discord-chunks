function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("143927"),
        u = n("898511"),
        s = n("237766"),
        l = n("784184"),
        c = n("251384"),
        f = n("851285"),
        d = n("813571"),
        _ = n("443817"),
        E = n("281767"),
        p = n("980671"),
        m = n("941504"),
        y = n("23383");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t) {
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
                if ("string" == typeof e) return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    t.default = r.memo(r.forwardRef(function(e, t) {
        var n = e.disabled,
            o = e.type,
            I = h(r.useState(!1), 2),
            O = I[0],
            T = I[1],
            S = (0, u.useStateFromStores)([f.default], function() {
                var e, t;
                return O && Object.values(null !== (t = null === (e = f.default.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
            }),
            v = h((0, c.useExpressionPickerStore)(function(e) {
                return [e.activeView, e.activeViewType, e.pickerId]
            }, a.default), 3),
            g = v[0],
            A = v[1],
            b = v[2],
            N = r.useRef(0),
            R = r.useCallback(function() {
                T(!0), clearTimeout(N.current), N.current = setTimeout(function() {
                    T(!1)
                }, 1500)
            }, []);
        r.useEffect(function() {
            return function() {
                clearTimeout(N.current)
            }
        }), (0, _.useComponentAction)({
            event: E.ComponentActions.FAVORITE_GIF,
            handler: R
        });
        var C = r.useCallback(function() {
                (0, c.toggleExpressionPicker)(p.ExpressionPickerViewType.GIF, o)
            }, [o]),
            P = (0, s.useGifLottie)(),
            D = P.Component,
            L = P.events,
            M = P.play;
        if (n) return null;
        var U = g === p.ExpressionPickerViewType.GIF && A === o;
        return r.createElement(l.Tooltip, {
            text: S ? m.default.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
            forceOpen: !0
        }, function(e) {
            return r.createElement("div", function(e) {
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
            }({
                ref: t,
                className: i()(p.CHAT_INPUT_BUTTON_CLASSNAME, y.buttonContainer)
            }, e), r.createElement(d.default, {
                innerClassName: y.button,
                onMouseEnter: L.onMouseEnter,
                onMouseLeave: L.onMouseLeave,
                onClick: function() {
                    C(), M()
                },
                isActive: U,
                pulse: O,
                "aria-label": m.default.Messages.GIF_BUTTON_LABEL,
                "aria-expanded": U,
                "aria-haspopup": "dialog",
                "aria-controls": b
            }, r.createElement(D, {
                color: "currentColor"
            })))
        })
    }))
}