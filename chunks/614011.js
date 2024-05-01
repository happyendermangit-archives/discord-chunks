function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PremiumStreamingEffectOverlay: function() {
            return u
        },
        preloadPremiumStreamingEffectImage: function() {
            return l
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("134432"),
        s = n("357271"),
        o = n("242493");

    function l() {
        (0, a.loadImage)("".concat(o, "?query=true"))
    }

    function u(e) {
        let {
            onPlayed: t,
            played: n
        } = e, [a, l] = r.useState(n), u = r.useRef(0);
        if (r.useEffect(() => (clearTimeout(u.current), u.current = setTimeout(() => {
                t()
            }, 3e3), () => {
                clearTimeout(u.current), t()
            }), [t]), r.useEffect(() => {
                l(e => !e)
            }, [n]), n) return null;
        let d = "".concat(o, "?query=").concat(a);
        return (0, i.jsx)("div", {
            className: s.demoEffectOverlay,
            children: (0, i.jsx)("img", {
                alt: "",
                className: s.demoEffectImg,
                src: d
            })
        })
    }
}