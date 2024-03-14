function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StatusTypes: function() {
            return c.StatusTypes
        },
        useStatusFillColor: function() {
            return h
        },
        getStatusBackdropOpacity: function() {
            return g
        },
        getStatusBackdropColor: function() {
            return m
        },
        getStatusValues: function() {
            return v
        },
        renderStatusMask: function() {
            return T
        },
        AnimatedStatus: function() {
            return I
        },
        getStatusMask: function() {
            return C
        },
        getStatusSize: function() {
            return A
        },
        Status: function() {
            return y
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("907002"),
        l = n("819855"),
        u = n("449918"),
        d = n("587974"),
        c = n("49111"),
        f = n("52904"),
        _ = n("143820");
    let E = {
        tension: 600,
        friction: 70
    };

    function h(e, t) {
        let n = (0, u.useColorValue)(function(e) {
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
            i = (0, u.useDesaturatedColorString)(null != t ? t : n);
        return null != i ? i : void 0
    }

    function g(e, t) {
        return t === f.StatusBackdropColors.WHITE && e === c.StatusTypes.IDLE ? f.StatusBackdropOpacity.HIGH : f.StatusBackdropOpacity.LOW
    }

    function m(e) {
        return (0, l.isThemeDark)(e) ? f.StatusBackdropColors.BLACK : f.StatusBackdropColors.WHITE
    }

    function p(e, t, n, i) {
        return "scale(".concat(t, ") translate(").concat(.5625 * e + i, " ").concat(.75 * e + n, ")")
    }

    function S(e, t, n) {
        return "".concat(.5625 * e + n, "px ").concat(.75 * e + t, "px")
    }

    function v(e) {
        let {
            size: t,
            status: n,
            isMobile: i,
            isTyping: s,
            topOffset: r = 0,
            leftOffset: a = 0
        } = e, o = r / 8 * t, l = a / 8 * t;
        if (s) return {
            bgRadius: .5 * t,
            bgY: .25 * t + o,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * f.TYPING_WIDTH_RATIO,
            cutoutX: .5 * t + l,
            cutoutY: .75 * t + o,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: p(t, 0, o, l),
            polygonOrigin: S(t, o, l),
            dotY: .75 * t + o,
            dotX: .5 * t + l,
            dotRadius: 0
        };
        switch (n) {
            case c.StatusTypes.ONLINE:
                if (i) return {
                    bgRadius: t * f.MOBILE_HEIGHT_RATIO * f.MOBILE_ICON_RADIUS,
                    bgY: 0,
                    bgX: l,
                    bgHeight: t * f.MOBILE_HEIGHT_RATIO,
                    bgWidth: t,
                    cutoutX: .125 * t + l,
                    cutoutY: .25 * t,
                    cutoutWidth: .75 * t,
                    cutoutHeight: .75 * t,
                    cutoutRadius: 0,
                    polygonScale: p(t, 0, o, l),
                    polygonOrigin: S(t, o, l),
                    dotY: 1.25 * t,
                    dotX: .5 * t + l,
                    dotRadius: .125 * t
                };
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + o, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: 0, polygonScale: p(t, 0, o, l), polygonOrigin: S(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case c.StatusTypes.IDLE:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: -(.125 * t) + l, cutoutY: .125 * t + o, cutoutWidth: .75 * t, cutoutHeight: .75 * t, cutoutRadius: .375 * t, polygonScale: p(t, 0, o, l), polygonOrigin: S(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case c.StatusTypes.DND:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .125 * t + l, cutoutY: .625 * t + o, cutoutWidth: .75 * t, cutoutHeight: .25 * t, cutoutRadius: .125 * t, polygonScale: p(t, 0, o, l), polygonOrigin: S(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case c.StatusTypes.STREAMING:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + o, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: .25 * t, polygonScale: p(t, 1, o, l), polygonOrigin: S(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case c.StatusTypes.INVISIBLE:
            case c.StatusTypes.UNKNOWN:
            case c.StatusTypes.OFFLINE:
            default:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .25 * t + l, cutoutY: .5 * t + o, cutoutWidth: .5 * t, cutoutHeight: .5 * t, cutoutRadius: .25 * t, polygonScale: p(t, 0, o, l), polygonOrigin: S(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                }
        }
    }

    function T(e, t, n) {
        var s;
        let {
            bgRadius: r,
            bgY: a,
            bgX: l,
            bgHeight: u,
            bgWidth: d,
            cutoutX: c,
            cutoutY: f,
            cutoutWidth: _,
            cutoutHeight: E,
            cutoutRadius: h,
            polygonScale: g,
            polygonOrigin: m,
            dotY: p,
            dotX: S,
            dotRadius: v
        } = e;
        return (0, i.jsxs)("mask", {
            id: n,
            children: [(0, i.jsx)(o.animated.rect, {
                x: l,
                y: a,
                width: d,
                height: u,
                rx: r,
                ry: r,
                fill: "white"
            }), (0, i.jsx)(o.animated.rect, {
                x: c,
                y: f,
                width: _,
                height: E,
                rx: h,
                ry: h,
                fill: "black"
            }), (0, i.jsx)(o.animated.polygon, {
                points: (s = t, "-".concat(.216506 * s, ",-").concat(.25 * s, " ").concat(.216506 * s, ",0 -").concat(.216506 * s, ",").concat(.25 * s)),
                fill: "black",
                transform: g,
                style: {
                    transformOrigin: m
                }
            }), (0, i.jsx)(o.animated.circle, {
                fill: "black",
                cx: S,
                cy: p,
                r: v
            })]
        })
    }

    function I(e) {
        let {
            status: t,
            isMobile: n = !1,
            size: r = 8,
            color: l,
            className: u,
            style: d
        } = e, g = s.useId(), m = t === c.StatusTypes.ONLINE && n, p = s.useMemo(() => v({
            size: r,
            status: t,
            isMobile: m
        }), [r, t, m]), S = (0, o.useSpring)({
            config: E,
            to: p
        }), I = h(t, l), [{
            fill: C
        }] = (0, o.useSpring)({
            config: E,
            fill: I
        }, [I]), A = Math.ceil(r * f.MOBILE_HEIGHT_RATIO);
        return (0, i.jsxs)("svg", {
            width: r,
            height: A,
            viewBox: "0 0 ".concat(r, " ").concat(A),
            className: a(_.mask, u),
            style: d,
            children: [T(S, r, g), (0, i.jsx)(o.animated.rect, {
                x: 0,
                y: 0,
                width: r,
                height: A,
                fill: C,
                mask: "url(#".concat(g, ")")
            })]
        })
    }

    function C(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (n) return d.default.Masks.STATUS_TYPING;
        switch (e) {
            case c.StatusTypes.IDLE:
                return d.default.Masks.STATUS_IDLE;
            case c.StatusTypes.DND:
                return d.default.Masks.STATUS_DND;
            case c.StatusTypes.STREAMING:
                return d.default.Masks.STATUS_STREAMING;
            case c.StatusTypes.INVISIBLE:
            case c.StatusTypes.UNKNOWN:
            case c.StatusTypes.OFFLINE:
                return d.default.Masks.STATUS_OFFLINE;
            case c.StatusTypes.ONLINE:
            default:
                if (t) return d.default.Masks.STATUS_ONLINE_MOBILE;
                return d.default.Masks.STATUS_ONLINE
        }
    }

    function A(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return t === c.StatusTypes.ONLINE && n && !i ? {
            width: e,
            height: e * f.MOBILE_HEIGHT_RATIO
        } : {
            width: i ? e * f.TYPING_WIDTH_RATIO : e,
            height: e
        }
    }

    function y(e) {
        let {
            status: t,
            isMobile: n = !1,
            size: s = 8,
            className: r,
            style: o,
            color: l
        } = e, u = t === c.StatusTypes.ONLINE && n, f = h(t, l);
        return (0, i.jsx)(d.default, {
            mask: C(t, u),
            className: a(_.mask, r),
            style: o,
            ...A(s, t, u),
            children: (0, i.jsx)("div", {
                style: {
                    backgroundColor: f
                },
                className: _.status
            })
        })
    }
}