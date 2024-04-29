function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i = n("803930"),
        r = n("159791"),
        s = n.n(r),
        a = n("78650"),
        o = n.n(a),
        l = n("505444"),
        u = n.n(l);

    function d(e) {
        let t = Object.keys(e)[0];
        return "".concat(t, "(").concat(e[t], ")")
    }
    let _ = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;

    function c(e) {
        let t = e.match(_);
        return null != t && (e = "rgba(".concat(0 | t[1], ", ").concat(0 | t[2], ", ").concat(0 | t[3], ", ").concat(t[4], ")")), e
    }
    i.inject.ApplyAnimatedValues(function(e, t, n) {
        if (e.setNativeProps) e.setNativeProps(t);
        else {
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            var i;
            u().setValueForStyles(e, ((i = t.style) && (i.transform && (i.transform = i.WebkitTransform = i.MozTransform = i.transform.map(d).join(" ")), i.color && (i.color = c(i.color)), i.backgroundColor && (i.backgroundColor = c(i.backgroundColor))), i), n._reactInternalInstance)
        }
    }, e => e);

    function E(e, t, n) {
        return void 0 !== t && void 0 != n ? o()(t, n) : e
    }
    t.default = {
        ...i,
        Easing: s(),
        accelerate: function(e) {
            return e.transform = e.transform || [], e.transform.push({
                translateZ: 0
            }), e
        },
        animate: function e(t, n) {
            let r;
            let {
                toValueMin: s,
                toValueMax: a,
                tension: o = 0,
                friction: l = 0,
                loop: u,
                reverse: d,
                invert: _,
                callback: c,
                type: I = "spring",
                shouldLoop: T,
                durationMin: f,
                durationMax: S,
                ...h
            } = n, A = t._value, m = E(n.duration, f, S), N = E(n.toValue, s, a), p = i[I](t, {
                ...h,
                toValue: N,
                tension: o,
                friction: l,
                duration: m
            }), O = p;
            if (d || _) {
                let e = E(n.duration, f, S);
                r = i[I](t, {
                    ...h,
                    toValue: d ? A : -N,
                    tension: o,
                    friction: l,
                    duration: e
                }), O = i.sequence([p, r])
            }
            u ? O.start(() => {
                (!T || T && T()) && (c ? c(e.bind(null, t, n)) : e(t, n))
            }) : O.start(c)
        },
        interpolate: function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return e.interpolate({
                inputRange: [0, 1],
                outputRange: n
            })
        },
        Extrapolate: {
            CLAMP: "clamp"
        },
        div: i.createAnimatedComponent("div"),
        span: i.createAnimatedComponent("span"),
        img: i.createAnimatedComponent("img"),
        a: i.createAnimatedComponent("a"),
        form: i.createAnimatedComponent("form"),
        ul: i.createAnimatedComponent("ul"),
        li: i.createAnimatedComponent("li"),
        g: i.createAnimatedComponent("g"),
        use: i.createAnimatedComponent("use"),
        path: i.createAnimatedComponent("path"),
        section: i.createAnimatedComponent("section"),
        video: i.createAnimatedComponent("video")
    }
}