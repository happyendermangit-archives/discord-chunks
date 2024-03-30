function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        transformColorContrast: function() {
            return i
        },
        transformColorForReducedSaturation: function() {
            return t
        }
    }), e("47120");
    var I = e("688619"),
        o = e.n(I);

    function a(_, E, e) {
        let [I, o] = _, [a, R] = E, t = (I + o) / 2;
        return e === t ? t : e < t ? a + (e - I) / (t - I) * (t - a) : t + (e - t) / (o - t) * (R - t)
    }
    let R = [0, 2];

    function t(_, E, e) {
        let I = o()(_);
        if ("background" !== E) return I.set("hsl.s", "*".concat(e)).hex();
        {
            let _ = function(_, E, e) {
                let [I, o] = _, [a, R] = E;
                return a + (e - I) / (o - I) * (R - a)
            }([0, 1], [.25, 1], e);
            return I.set("hsl.s", "*".concat(_)).hex()
        }
    }
    let A = [1.3, .7],
        T = [.98, 1],
        r = [.75, 1.5],
        N = [1.45, .45];

    function i(_, E, e, I) {
        switch (E) {
            case "background":
            case "border":
                return o()(_).set("hsl.l", "*".concat(a(R, "light" === e ? T : A, I))).hex();
            case "text":
                return o()(_).set("hsl.l", "*".concat(a(R, "light" === e ? N : r, I))).hex();
            default:
                return _
        }
    }
}