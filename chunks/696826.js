function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimatedStatus: function() {
            return p
        },
        Status: function() {
            return C
        },
        StatusTypes: function() {
            return _.StatusTypes
        },
        getStatusBackdropColor: function() {
            return S
        },
        getStatusBackdropOpacity: function() {
            return f
        },
        getStatusMask: function() {
            return O
        },
        getStatusSize: function() {
            return R
        },
        getStatusValues: function() {
            return m
        },
        renderStatusMask: function() {
            return N
        },
        useStatusFillColor: function() {
            return T
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("718017"),
        l = n("780384"),
        u = n("44315"),
        d = n("806519"),
        _ = n("981631"),
        c = n("182294"),
        E = n("681848");
    let I = {
        tension: 600,
        friction: 70
    };

    function T(e, t) {
        let n = (0, u.useColorValue)(function(e) {
                switch (e) {
                    case _.StatusTypes.ONLINE:
                        return _.Color.GREEN_360;
                    case _.StatusTypes.IDLE:
                        return _.Color.YELLOW_300;
                    case _.StatusTypes.DND:
                        return _.Color.RED_400;
                    case _.StatusTypes.STREAMING:
                        return _.Color.TWITCH;
                    case _.StatusTypes.INVISIBLE:
                    case _.StatusTypes.UNKNOWN:
                    case _.StatusTypes.OFFLINE:
                    default:
                        return _.Color.PRIMARY_400
                }
            }(e)).hex,
            i = (0, u.useDesaturatedColorString)(null != t ? t : n);
        return null != i ? i : void 0
    }

    function f(e, t) {
        return t === c.StatusBackdropColors.WHITE && e === _.StatusTypes.IDLE ? c.StatusBackdropOpacity.HIGH : c.StatusBackdropOpacity.LOW
    }

    function S(e) {
        return (0, l.isThemeDark)(e) ? c.StatusBackdropColors.BLACK : c.StatusBackdropColors.WHITE
    }

    function h(e, t, n, i) {
        return "scale(".concat(t, ") translate(").concat(.5625 * e + i, " ").concat(.75 * e + n, ")")
    }

    function A(e, t, n) {
        return "".concat(.5625 * e + n, "px ").concat(.75 * e + t, "px")
    }

    function m(e) {
        let {
            size: t,
            status: n,
            isMobile: i,
            isTyping: r,
            topOffset: a = 0,
            leftOffset: s = 0
        } = e, o = a / 8 * t, l = s / 8 * t;
        if (r) return {
            bgRadius: .5 * t,
            bgY: .25 * t + o,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * c.TYPING_WIDTH_RATIO,
            cutoutX: .5 * t + l,
            cutoutY: .75 * t + o,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: h(t, 0, o, l),
            polygonOrigin: A(t, o, l),
            dotY: .75 * t + o,
            dotX: .5 * t + l,
            dotRadius: 0
        };
        switch (n) {
            case _.StatusTypes.ONLINE:
                if (i) return {
                    bgRadius: t * c.MOBILE_HEIGHT_RATIO * c.MOBILE_ICON_RADIUS,
                    bgY: 0,
                    bgX: l,
                    bgHeight: t * c.MOBILE_HEIGHT_RATIO,
                    bgWidth: t,
                    cutoutX: .125 * t + l,
                    cutoutY: .25 * t,
                    cutoutWidth: .75 * t,
                    cutoutHeight: .75 * t,
                    cutoutRadius: 0,
                    polygonScale: h(t, 0, o, l),
                    polygonOrigin: A(t, o, l),
                    dotY: 1.25 * t,
                    dotX: .5 * t + l,
                    dotRadius: .125 * t
                };
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + o, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: 0, polygonScale: h(t, 0, o, l), polygonOrigin: A(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case _.StatusTypes.IDLE:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: -(.125 * t) + l, cutoutY: .125 * t + o, cutoutWidth: .75 * t, cutoutHeight: .75 * t, cutoutRadius: .375 * t, polygonScale: h(t, 0, o, l), polygonOrigin: A(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case _.StatusTypes.DND:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .125 * t + l, cutoutY: .625 * t + o, cutoutWidth: .75 * t, cutoutHeight: .25 * t, cutoutRadius: .125 * t, polygonScale: h(t, 0, o, l), polygonOrigin: A(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case _.StatusTypes.STREAMING:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + o, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: .25 * t, polygonScale: h(t, 1, o, l), polygonOrigin: A(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                };
            case _.StatusTypes.INVISIBLE:
            case _.StatusTypes.UNKNOWN:
            case _.StatusTypes.OFFLINE:
            default:
                return {
                    bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .25 * t + l, cutoutY: .5 * t + o, cutoutWidth: .5 * t, cutoutHeight: .5 * t, cutoutRadius: .25 * t, polygonScale: h(t, 0, o, l), polygonOrigin: A(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
                }
        }
    }

    function N(e, t, n) {
        var r;
        let {
            bgRadius: a,
            bgY: s,
            bgX: l,
            bgHeight: u,
            bgWidth: d,
            cutoutX: _,
            cutoutY: c,
            cutoutWidth: E,
            cutoutHeight: I,
            cutoutRadius: T,
            polygonScale: f,
            polygonOrigin: S,
            dotY: h,
            dotX: A,
            dotRadius: m
        } = e;
        return (0, i.jsxs)("mask", {
            id: n,
            children: [(0, i.jsx)(o.animated.rect, {
                x: l,
                y: s,
                width: d,
                height: u,
                rx: a,
                ry: a,
                fill: "white"
            }), (0, i.jsx)(o.animated.rect, {
                x: _,
                y: c,
                width: E,
                height: I,
                rx: T,
                ry: T,
                fill: "black"
            }), (0, i.jsx)(o.animated.polygon, {
                points: (r = t, "-".concat(.216506 * r, ",-").concat(.25 * r, " ").concat(.216506 * r, ",0 -").concat(.216506 * r, ",").concat(.25 * r)),
                fill: "black",
                transform: f,
                style: {
                    transformOrigin: S
                }
            }), (0, i.jsx)(o.animated.circle, {
                fill: "black",
                cx: A,
                cy: h,
                r: m
            })]
        })
    }

    function p(e) {
        let {
            status: t,
            isMobile: n = !1,
            size: a = 8,
            color: l,
            className: u,
            style: d
        } = e, f = r.useId(), S = t === _.StatusTypes.ONLINE && n, h = r.useMemo(() => m({
            size: a,
            status: t,
            isMobile: S
        }), [a, t, S]), A = (0, o.useSpring)({
            config: I,
            to: h
        }), p = T(t, l), [{
            fill: O
        }] = (0, o.useSpring)({
            config: I,
            fill: p
        }, [p]), R = Math.ceil(a * c.MOBILE_HEIGHT_RATIO);
        return (0, i.jsxs)("svg", {
            width: a,
            height: R,
            viewBox: "0 0 ".concat(a, " ").concat(R),
            className: s()(E.mask, u),
            style: d,
            children: [N(A, a, f), (0, i.jsx)(o.animated.rect, {
                x: 0,
                y: 0,
                width: a,
                height: R,
                fill: O,
                mask: "url(#".concat(f, ")")
            })]
        })
    }

    function O(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (n) return d.default.Masks.STATUS_TYPING;
        switch (e) {
            case _.StatusTypes.IDLE:
                return d.default.Masks.STATUS_IDLE;
            case _.StatusTypes.DND:
                return d.default.Masks.STATUS_DND;
            case _.StatusTypes.STREAMING:
                return d.default.Masks.STATUS_STREAMING;
            case _.StatusTypes.INVISIBLE:
            case _.StatusTypes.UNKNOWN:
            case _.StatusTypes.OFFLINE:
                return d.default.Masks.STATUS_OFFLINE;
            case _.StatusTypes.ONLINE:
            default:
                if (t) return d.default.Masks.STATUS_ONLINE_MOBILE;
                return d.default.Masks.STATUS_ONLINE
        }
    }

    function R(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return t === _.StatusTypes.ONLINE && n && !i ? {
            width: e,
            height: e * c.MOBILE_HEIGHT_RATIO
        } : {
            width: i ? e * c.TYPING_WIDTH_RATIO : e,
            height: e
        }
    }

    function C(e) {
        let {
            status: t,
            isMobile: n = !1,
            size: r = 8,
            className: a,
            style: o,
            color: l
        } = e, u = t === _.StatusTypes.ONLINE && n, c = T(t, l);
        return (0, i.jsx)(d.default, {
            mask: O(t, u),
            className: s()(E.mask, a),
            style: o,
            ...R(r, t, u),
            children: (0, i.jsx)("div", {
                style: {
                    backgroundColor: c
                },
                className: E.status
            })
        })
    }
}