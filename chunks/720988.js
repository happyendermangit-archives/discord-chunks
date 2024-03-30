function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("665471"),
        s = n("953801"),
        l = n("98682"),
        c = n("995254"),
        f = n("120447"),
        d = n("281767"),
        _ = n("941504"),
        E = n("784562");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = r.memo(function(e) {
        var t, n, o = e.width,
            y = e.height,
            I = e.src,
            h = e.url,
            O = e.format,
            T = e.className;
        var S = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            v = S[0],
            g = S[1],
            A = (0, s.useIsFavoriteGIF)(h),
            b = A ? _.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : _.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES,
            N = A ? c.default : l.default;
        r.useEffect(function() {
            if (v) {
                var e = setTimeout(function() {
                    g(!1)
                }, 500);
                return function() {
                    return clearTimeout(e)
                }
            }
        }, [v]);
        var R = function(e) {
            e.preventDefault(), e.stopPropagation(), g(!0), A ? (0, u.removeFavoriteGIF)(h) : ((0, u.addFavoriteGIF)({
                url: h,
                src: I,
                width: o,
                height: y,
                format: O
            }), f.ComponentDispatch.dispatch(d.ComponentActions.FAVORITE_GIF))
        };
        return r.createElement(a.Tooltip, {
            text: b
        }, function(e) {
            var t, n, o;
            return r.createElement(a.Clickable, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        m(e, t, n[t])
                    })
                }
                return e
            }({}, e), o = (o = {
                className: i()(T, E.size, E.gifFavoriteButton, (m(t = {}, E.selected, A), m(t, E.showPulse, v), t)),
                onMouseDown: function(e) {
                    return e.preventDefault()
                },
                onClick: R,
                onDoubleClick: function(e) {
                    return e.preventDefault()
                }
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
            }), n), r.createElement(N, {
                className: E.icon
            }))
        })
    })
}