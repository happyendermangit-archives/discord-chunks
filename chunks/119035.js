function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComboShakeIntensity: function() {
            return i
        },
        getComboPercentage: function() {
            return o
        },
        getComboStyles: function() {
            return c
        },
        getComboScore: function() {
            return E
        }
    }), n("222007"), n("808653");
    var a = n("39141"),
        l = n("49111");
    let s = function(e, t) {
            let {
                multiplier: n,
                value: a
            } = e, [l, s] = t, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = a * n;
            if (r <= 0) return 0;
            let u = l.reduce((e, t, n) => {
                if (r > t) {
                    let e = s[n];
                    if (n + 1 === l.length) return s[n];
                    let a = l[n + 1],
                        i = s[n + 1];
                    return (r - t) / (a - t) * (i - e) + e
                }
                return r === t ? s[n] : e
            }, 0);
            return Math.min(i, u)
        },
        i = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.ShakeLevel.LEVEL_3;
            return s(e, [a.SHAKE_STEPS[t], a.SHAKE_STEP_DIVIDER[t]], 1e5)
        },
        r = [
            [1, .001],
            [25, .3],
            [100, .5],
            [250, .8],
            [500, .9],
            [2500, .95],
            [9001, 1]
        ],
        u = r.map(e => {
            let [t] = e;
            return t
        }),
        d = r.map(e => {
            let [t, n] = e;
            return n
        }),
        o = e => s(e, [u, d], 1),
        c = e => 1 === e ? {
            color: l.Color.BRAND_500
        } : 2 === e || 3 === e ? {
            color: l.Color.GREEN_360
        } : 4 === e || 5 === e ? {
            color: l.Color.YELLOW_300,
            square: !0
        } : 6 === e ? {
            color: l.Color.RED_400,
            square: !0
        } : {
            color: l.Color.ORANGE_345,
            flair: !0
        };

    function E(e) {
        var t;
        return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
    }
}