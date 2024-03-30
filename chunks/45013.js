function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("447515"),
        i = n("784184"),
        a = n("712398"),
        u = n("765866"),
        s = n("341037"),
        l = n("335050"),
        c = n("794173"),
        f = n("53867"),
        d = n("281767"),
        _ = n("971867");

    function E(e) {
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
    }
    t.default = function(e) {
        var t, n, p = e.style,
            m = e.src,
            y = e.backgroundSrc,
            I = e.userId,
            h = e.pulseSpeakingIndicator,
            O = e.speaking,
            T = void 0 !== O && O,
            S = function(e, t) {
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
            }(e, ["style", "src", "backgroundSrc", "userId", "pulseSpeakingIndicator", "speaking"]),
            v = null != y ? y : m,
            g = (0, a.default)(v, o.default.unsafe_rawColors.PRIMARY_800.css),
            A = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled,
            b = (0, c.default)(null != I ? I : d.EMPTY_STRING_SNOWFLAKE_ID),
            N = null == b ? void 0 : b.getBannerURL({
                size: 1024,
                canAnimate: f.GifAutoPlay.getSetting()
            });
        if (r.useEffect(function() {
                null != I && A && (0, l.default)(I, void 0, {
                    dispatchWait: !0
                })
            }, [A, I]), null == m) return null;
        var R = r.createElement(i.Avatar, E({
            className: _.avatarWrapper,
            src: m
        }, S));
        var C = (t = E({}, p), n = (n = {
            backgroundColor: g
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t);
        return null != N && T && A && (C.backgroundImage = "url(".concat(N, ")"), C.backgroundSize = "cover"), r.createElement("div", {
            style: C,
            className: _.background
        }, void 0 !== h && h ? r.createElement(s.default, {
            shouldAnimate: T
        }, R) : R)
    }
}