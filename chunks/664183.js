function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("803930"),
        o = n("159791"),
        i = n.n(o),
        a = n("78650"),
        u = n.n(a),
        s = n("505444"),
        l = n.n(s);

    function c(e) {
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

    function f(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function d(e) {
        var t = Object.keys(e)[0];
        return "".concat(t, "(").concat(e[t], ")")
    }
    var _ = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;

    function E(e) {
        var t = e.match(_);
        return null != t && (e = "rgba(".concat(0 | t[1], ", ").concat(0 | t[2], ", ").concat(0 | t[3], ", ").concat(t[4], ")")), e
    }
    r.inject.ApplyAnimatedValues(function(e, t, n) {
        if (e.setNativeProps) e.setNativeProps(t);
        else {
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            var r;
            l().setValueForStyles(e, ((r = t.style) && (r.transform && (r.transform = r.WebkitTransform = r.MozTransform = r.transform.map(d).join(" ")), r.color && (r.color = E(r.color)), r.backgroundColor && (r.backgroundColor = E(r.backgroundColor))), r), n._reactInternalInstance)
        }
    }, function(e) {
        return e
    });

    function p(e, t, n) {
        return void 0 !== t && void 0 != n ? u()(t, n) : e
    }
    t.default = f(c({}, r), {
        Easing: i(),
        accelerate: function(e) {
            return e.transform = e.transform || [], e.transform.push({
                translateZ: 0
            }), e
        },
        animate: function e(t, n) {
            var o, i = n.toValueMin,
                a = n.toValueMax,
                u = n.tension,
                s = void 0 === u ? 0 : u,
                l = n.friction,
                d = void 0 === l ? 0 : l,
                _ = n.loop,
                E = n.reverse,
                m = n.invert,
                y = n.callback,
                I = n.type,
                h = void 0 === I ? "spring" : I,
                O = n.shouldLoop,
                T = n.durationMin,
                S = n.durationMax,
                v = function(e, t) {
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
                }(n, ["toValueMin", "toValueMax", "tension", "friction", "loop", "reverse", "invert", "callback", "type", "shouldLoop", "durationMin", "durationMax"]),
                g = t._value,
                A = p(n.duration, T, S),
                b = p(n.toValue, i, a),
                N = r[h](t, f(c({}, v), {
                    toValue: b,
                    tension: s,
                    friction: d,
                    duration: A
                })),
                R = N;
            if (E || m) {
                var C = p(n.duration, T, S);
                o = r[h](t, f(c({}, v), {
                    toValue: E ? g : -b,
                    tension: s,
                    friction: d,
                    duration: C
                })), R = r.sequence([N, o])
            }
            _ ? R.start(function() {
                (!O || O && O()) && (y ? y(e.bind(null, t, n)) : e(t, n))
            }) : R.start(y)
        },
        interpolate: function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.interpolate({
                inputRange: [0, 1],
                outputRange: n
            })
        },
        Extrapolate: {
            CLAMP: "clamp"
        },
        div: r.createAnimatedComponent("div"),
        span: r.createAnimatedComponent("span"),
        img: r.createAnimatedComponent("img"),
        a: r.createAnimatedComponent("a"),
        form: r.createAnimatedComponent("form"),
        ul: r.createAnimatedComponent("ul"),
        li: r.createAnimatedComponent("li"),
        g: r.createAnimatedComponent("g"),
        use: r.createAnimatedComponent("use"),
        path: r.createAnimatedComponent("path"),
        section: r.createAnimatedComponent("section"),
        video: r.createAnimatedComponent("video")
    })
}