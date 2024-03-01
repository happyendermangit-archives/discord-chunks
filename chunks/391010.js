function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StatusTypes: function() {
            return d.StatusTypes
        },
        useStatusFillColor: function() {
            return h
        },
        getStatusBackdropOpacity: function() {
            return _
        },
        getStatusBackdropColor: function() {
            return S
        },
        getStatusValues: function() {
            return g
        },
        renderStatusMask: function() {
            return I
        },
        AnimatedStatus: function() {
            return C
        },
        getStatusMask: function() {
            return v
        },
        getStatusSize: function() {
            return A
        },
        Status: function() {
            return R
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("907002"),
        l = n("819855"),
        u = n("449918"),
        c = n("587974"),
        d = n("49111"),
        f = n("52904"),
        E = n("143820");
    let p = {
        tension: 600,
        friction: 70
    };

    function h(e, t) {
        let n = (0, u.useColorValue)(function(e) {
                switch (e) {
                    case d.StatusTypes.ONLINE:
                        return d.Color.GREEN_360;
                    case d.StatusTypes.IDLE:
                        return d.Color.YELLOW_300;
                    case d.StatusTypes.DND:
                        return d.Color.RED_400;
                    case d.StatusTypes.STREAMING:
                        return d.Color.TWITCH;
                    case d.StatusTypes.INVISIBLE:
                    case d.StatusTypes.UNKNOWN:
                    case d.StatusTypes.OFFLINE:
                    default:
                        return d.Color.PRIMARY_400
                }
            }(e)).hex,
            i = (0, u.useDesaturatedColorString)(null != t ? t : n);
        return null != i ? i : void 0
    }

    function _(e, t) {
        return t === f.StatusBackdropColors.WHITE && e === d.StatusTypes.IDLE ? f.StatusBackdropOpacity.HIGH : f.StatusBackdropOpacity.LOW
    }

    function S(e) {
        return (0, l.isThemeDark)(e) ? f.StatusBackdropColors.BLACK : f.StatusBackdropColors.WHITE
    }

    function m(e, t, n, i) {
        return "scale(".concat(t, ") translate(").concat(.5625 * e + i, " ").concat(.75 * e + n, ")")
    }

    function T(e, t, n) {
        return "".concat(.5625 * e + n, "px ").concat(.75 * e + t, "px")
    }

    function g(e) {
        let {
            size: t,
            status: n,
            isMobile: i,
            isTyping: r,
            topOffset: s = 0,
            leftOffset: a = 0
        } = e, o = s / 8 * t, l = a / 8 * t;
        if (r) return {
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
            polygonScale: m(t, 0, o, l),
            polygonOrigin: T(t, o, l),
            dotY: .75 * t + o,
            dotX: .5 * t + l,
            dotRadius: 0
        };
        switch (n) {
            case d.StatusTypes.ONLINE:
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
                    polygonScale: m(t, 0, o, l),
                    polygonOrigin: T(t, o, l),
                    dotY: 1.25 * t,
                    dotX: .5 * t + l,
                    dotRadius: .125 * t
                };
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + o, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: 0, polygonScale: m(t, 0, o, l), polygonOrigin: T(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case d.StatusTypes.IDLE:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: -(.125 * t) + l, cutoutY: .125 * t + o, cutoutWidth: .75 * t, cutoutHeight: .75 * t, cutoutRadius: .375 * t, polygonScale: m(t, 0, o, l), polygonOrigin: T(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case d.StatusTypes.DND:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .125 * t + l, cutoutY: .625 * t + o, cutoutWidth: .75 * t, cutoutHeight: .25 * t, cutoutRadius: .125 * t, polygonScale: m(t, 0, o, l), polygonOrigin: T(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case d.StatusTypes.STREAMING:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + o, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: .25 * t, polygonScale: m(t, 1, o, l), polygonOrigin: T(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case d.StatusTypes.INVISIBLE:
            case d.StatusTypes.UNKNOWN:
            case d.StatusTypes.OFFLINE:
            default:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .25 * t + l, cutoutY: .5 * t + o, cutoutWidth: .5 * t, cutoutHeight: .5 * t, cutoutRadius: .25 * t, polygonScale: m(t, 0, o, l), polygonOrigin: T(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                }
        }
    }

    function I(e, t, n) {
        var r;
        let {
            bgRadius: s,
            bgY: a,
            bgX: l,
            bgHeight: u,
            bgWidth: c,
            cutoutX: d,
            cutoutY: f,
            cutoutWidth: E,
            cutoutHeight: p,
            cutoutRadius: h,
            polygonScale: _,
            polygonOrigin: S,
            dotY: m,
            dotX: T,
            dotRadius: g
        } = e;
        return (0, i.jsxs)("mask", {
            id: n,
            children: [(0, i.jsx)(o.animated.rect, {
                x: l,
                y: a,
                width: c,
                height: u,
                rx: s,
                ry: s,
                fill: "white"
            }), (0, i.jsx)(o.animated.rect, {
                x: d,
                y: f,
                width: E,
                height: p,
                rx: h,
                ry: h,
                fill: "black"
            }), (0, i.jsx)(o.animated.polygon, {
                points: (r = t, "-".concat(.216506 * r, ",-").concat(.25 * r, " ").concat(.216506 * r, ",0 -").concat(.216506 * r, ",").concat(.25 * r)),
                fill: "black",
                transform: _,
                style: {
                    transformOrigin: S
                }
            }), (0, i.jsx)(o.animated.circle, {
                fill: "black",
                cx: T,
                cy: m,
                r: g
            })]
        })
    }

    function C(e) {
        let {
            status: t,
            isMobile: n = !1,
            size: s = 8,
            color: l,
            className: u,
            style: c
        } = e, _ = r.useId(), S = t === d.StatusTypes.ONLINE && n, m = r.useMemo(() => g({
            size: s,
            status: t,
            isMobile: S
        }), [s, t, S]), T = (0, o.useSpring)({
            config: p,
            to: m
        }), C = h(t, l), [{
            fill: v
        }] = (0, o.useSpring)({
            config: p,
            fill: C
        }, [C]), A = Math.ceil(s * f.MOBILE_HEIGHT_RATIO);
        return (0, i.jsxs)("svg", {
            width: s,
            height: A,
            viewBox: "0 0 ".concat(s, " ").concat(A),
            className: a(E.mask, u),
            style: c,
            children: [I(T, s, _), (0, i.jsx)(o.animated.rect, {
                x: 0,
                y: 0,
                width: s,
                height: A,
                fill: v,
                mask: "url(#".concat(_, ")")
            })]
        })
    }

    function v(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (n) return c.default.Masks.STATUS_TYPING;
        switch (e) {
            case d.StatusTypes.IDLE:
                return c.default.Masks.STATUS_IDLE;
            case d.StatusTypes.DND:
                return c.default.Masks.STATUS_DND;
            case d.StatusTypes.STREAMING:
                return c.default.Masks.STATUS_STREAMING;
            case d.StatusTypes.INVISIBLE:
            case d.StatusTypes.UNKNOWN:
            case d.StatusTypes.OFFLINE:
                return c.default.Masks.STATUS_OFFLINE;
            case d.StatusTypes.ONLINE:
            default:
                if (t) return c.default.Masks.STATUS_ONLINE_MOBILE;
                return c.default.Masks.STATUS_ONLINE
        }
    }

    function A(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return t === d.StatusTypes.ONLINE && n && !i ? {
            width: e,
            height: e * f.MOBILE_HEIGHT_RATIO
        } : {
            width: i ? e * f.TYPING_WIDTH_RATIO : e,
            height: e
        }
    }

    function R(e) {
        let {
            status: t,
            isMobile: n = !1,
            size: r = 8,
            className: s,
            style: o,
            color: l
        } = e, u = t === d.StatusTypes.ONLINE && n, f = h(t, l);
        return (0, i.jsx)(c.default, {
            mask: v(t, u),
            className: a(E.mask, s),
            style: o,
            ...A(r, t, u),
            children: (0, i.jsx)("div", {
                style: {
                    backgroundColor: f
                },
                className: E.status
            })
        })
    }
}