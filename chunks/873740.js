function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimatedStatus: function() {
            return S
        },
        Status: function() {
            return A
        },
        StatusTypes: function() {
            return c.StatusTypes
        },
        getStatusBackdropColor: function() {
            return y
        },
        getStatusBackdropOpacity: function() {
            return m
        },
        getStatusMask: function() {
            return v
        },
        getStatusSize: function() {
            return g
        },
        getStatusValues: function() {
            return O
        },
        renderStatusMask: function() {
            return T
        },
        useStatusFillColor: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("718017"),
        u = n("751848"),
        s = n("405502"),
        l = n("845265"),
        c = n("281767"),
        f = n("962839"),
        d = n("449857");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var E = {
        tension: 600,
        friction: 70
    };

    function p(e, t) {
        var n = (0, s.useColorValue)(function(e) {
                switch (e) {
                    case c.StatusTypes.ONLINE:
                        return c.Color.GREEN_360;
                    case c.StatusTypes.IDLE:
                        return c.Color.YELLOW_300;
                    case c.StatusTypes.DND:
                        return c.Color.RED_400;
                    case c.StatusTypes.STREAMING:
                        return c.Color.TWITCH;
                    case c.StatusTypes.INVISIBLE:
                    case c.StatusTypes.UNKNOWN:
                    case c.StatusTypes.OFFLINE:
                    default:
                        return c.Color.PRIMARY_400
                }
            }(e)).hex,
            r = (0, s.useDesaturatedColorString)(null != t ? t : n);
        return null != r ? r : void 0
    }

    function m(e, t) {
        return t === f.StatusBackdropColors.WHITE && e === c.StatusTypes.IDLE ? f.StatusBackdropOpacity.HIGH : f.StatusBackdropOpacity.LOW
    }

    function y(e) {
        return (0, u.isThemeDark)(e) ? f.StatusBackdropColors.BLACK : f.StatusBackdropColors.WHITE
    }

    function I(e, t, n, r) {
        return "scale(".concat(t, ") translate(").concat(.5625 * e + r, " ").concat(.75 * e + n, ")")
    }

    function h(e, t, n) {
        return "".concat(.5625 * e + n, "px ").concat(.75 * e + t, "px")
    }

    function O(e) {
        var t = e.size,
            n = e.status,
            r = e.isMobile,
            o = e.isTyping,
            i = e.topOffset,
            a = e.leftOffset,
            u = (void 0 === i ? 0 : i) / 8 * t,
            s = (void 0 === a ? 0 : a) / 8 * t;
        if (o) return {
            bgRadius: .5 * t,
            bgY: .25 * t + u,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * f.TYPING_WIDTH_RATIO,
            cutoutX: .5 * t + s,
            cutoutY: .75 * t + u,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: I(t, 0, u, s),
            polygonOrigin: h(t, u, s),
            dotY: .75 * t + u,
            dotX: .5 * t + s,
            dotRadius: 0
        };
        switch (n) {
            case c.StatusTypes.ONLINE:
                if (r) return {
                    bgRadius: t * f.MOBILE_HEIGHT_RATIO * f.MOBILE_ICON_RADIUS,
                    bgY: 0,
                    bgX: s,
                    bgHeight: t * f.MOBILE_HEIGHT_RATIO,
                    bgWidth: t,
                    cutoutX: .125 * t + s,
                    cutoutY: .25 * t,
                    cutoutWidth: .75 * t,
                    cutoutHeight: .75 * t,
                    cutoutRadius: 0,
                    polygonScale: I(t, 0, u, s),
                    polygonOrigin: h(t, u, s),
                    dotY: 1.25 * t,
                    dotX: .5 * t + s,
                    dotRadius: .125 * t
                };
                return {
                    bgRadius: .5 * t, bgY: .25 * t + u, bgX: s, bgHeight: t, bgWidth: t, cutoutX: .5 * t + s, cutoutY: .75 * t + u, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: 0, polygonScale: I(t, 0, u, s), polygonOrigin: h(t, u, s), dotY: .75 * t + u, dotX: .5 * t + s, dotRadius: 0
                };
            case c.StatusTypes.IDLE:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + u, bgX: s, bgHeight: t, bgWidth: t, cutoutX: -(.125 * t) + s, cutoutY: .125 * t + u, cutoutWidth: .75 * t, cutoutHeight: .75 * t, cutoutRadius: .375 * t, polygonScale: I(t, 0, u, s), polygonOrigin: h(t, u, s), dotY: .75 * t + u, dotX: .5 * t + s, dotRadius: 0
                };
            case c.StatusTypes.DND:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + u, bgX: s, bgHeight: t, bgWidth: t, cutoutX: .125 * t + s, cutoutY: .625 * t + u, cutoutWidth: .75 * t, cutoutHeight: .25 * t, cutoutRadius: .125 * t, polygonScale: I(t, 0, u, s), polygonOrigin: h(t, u, s), dotY: .75 * t + u, dotX: .5 * t + s, dotRadius: 0
                };
            case c.StatusTypes.STREAMING:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + u, bgX: s, bgHeight: t, bgWidth: t, cutoutX: .5 * t + s, cutoutY: .75 * t + u, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: .25 * t, polygonScale: I(t, 1, u, s), polygonOrigin: h(t, u, s), dotY: .75 * t + u, dotX: .5 * t + s, dotRadius: 0
                };
            case c.StatusTypes.INVISIBLE:
            case c.StatusTypes.UNKNOWN:
            case c.StatusTypes.OFFLINE:
            default:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + u, bgX: s, bgHeight: t, bgWidth: t, cutoutX: .25 * t + s, cutoutY: .5 * t + u, cutoutWidth: .5 * t, cutoutHeight: .5 * t, cutoutRadius: .25 * t, polygonScale: I(t, 0, u, s), polygonOrigin: h(t, u, s), dotY: .75 * t + u, dotX: .5 * t + s, dotRadius: 0
                }
        }
    }

    function T(e, t, n) {
        var o, i = e.bgRadius,
            u = e.bgY,
            s = e.bgX,
            l = e.bgHeight,
            c = e.bgWidth,
            f = e.cutoutX,
            d = e.cutoutY,
            _ = e.cutoutWidth,
            E = e.cutoutHeight,
            p = e.cutoutRadius,
            m = e.polygonScale,
            y = e.polygonOrigin,
            I = e.dotY,
            h = e.dotX,
            O = e.dotRadius;
        return r.createElement("mask", {
            id: n
        }, r.createElement(a.animated.rect, {
            x: s,
            y: u,
            width: c,
            height: l,
            rx: i,
            ry: i,
            fill: "white"
        }), r.createElement(a.animated.rect, {
            x: f,
            y: d,
            width: _,
            height: E,
            rx: p,
            ry: p,
            fill: "black"
        }), r.createElement(a.animated.polygon, {
            points: (o = t, "-".concat(.216506 * o, ",-").concat(.25 * o, " ").concat(.216506 * o, ",0 -").concat(.216506 * o, ",").concat(.25 * o)),
            fill: "black",
            transform: m,
            style: {
                transformOrigin: y
            }
        }), r.createElement(a.animated.circle, {
            fill: "black",
            cx: h,
            cy: I,
            r: O
        }))
    }

    function S(e) {
        var t, n, o = e.status,
            u = e.isMobile,
            s = e.size,
            l = void 0 === s ? 8 : s,
            m = e.color,
            y = e.className,
            I = e.style,
            h = r.useId(),
            S = o === c.StatusTypes.ONLINE && void 0 !== u && u,
            v = r.useMemo(function() {
                return O({
                    size: l,
                    status: o,
                    isMobile: S
                })
            }, [l, o, S]),
            g = (0, a.useSpring)({
                config: E,
                to: v
            }),
            A = p(o, m);
        var b = (t = (0, a.useSpring)({
                config: E,
                fill: A
            }, [A]), n = 1, function(e) {
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
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0].fill,
            N = Math.ceil(l * f.MOBILE_HEIGHT_RATIO);
        return r.createElement("svg", {
            width: l,
            height: N,
            viewBox: "0 0 ".concat(l, " ").concat(N),
            className: i()(d.mask, y),
            style: I
        }, T(g, l, h), r.createElement(a.animated.rect, {
            x: 0,
            y: 0,
            width: l,
            height: N,
            fill: b,
            mask: "url(#".concat(h, ")")
        }))
    }

    function v(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (n) return l.default.Masks.STATUS_TYPING;
        switch (e) {
            case c.StatusTypes.IDLE:
                return l.default.Masks.STATUS_IDLE;
            case c.StatusTypes.DND:
                return l.default.Masks.STATUS_DND;
            case c.StatusTypes.STREAMING:
                return l.default.Masks.STATUS_STREAMING;
            case c.StatusTypes.INVISIBLE:
            case c.StatusTypes.UNKNOWN:
            case c.StatusTypes.OFFLINE:
                return l.default.Masks.STATUS_OFFLINE;
            case c.StatusTypes.ONLINE:
            default:
                if (t) return l.default.Masks.STATUS_ONLINE_MOBILE;
                return l.default.Masks.STATUS_ONLINE
        }
    }

    function g(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return t === c.StatusTypes.ONLINE && n && !r ? {
            width: e,
            height: e * f.MOBILE_HEIGHT_RATIO
        } : {
            width: r ? e * f.TYPING_WIDTH_RATIO : e,
            height: e
        }
    }

    function A(e) {
        var t = e.status,
            n = e.isMobile,
            o = e.size,
            a = e.className,
            u = e.style,
            s = e.color,
            f = t === c.StatusTypes.ONLINE && void 0 !== n && n,
            _ = p(t, s);
        return r.createElement(l.default, function(e) {
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
            mask: v(t, f),
            className: i()(d.mask, a),
            style: u
        }, g(void 0 === o ? 8 : o, t, f)), r.createElement("div", {
            style: {
                backgroundColor: _
            },
            className: d.status
        }))
    }
}