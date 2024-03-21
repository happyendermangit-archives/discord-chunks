function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComboShakeIntensity: function() {
            return a
        },
        getComboPercentage: function() {
            return d
        },
        getComboStyles: function() {
            return c
        },
        getComboScore: function() {
            return _
        }
    }), n("222007"), n("808653");
    var i = n("39141"),
        s = n("49111");
    let r = function(e, t) {
            let {
                multiplier: n,
                value: i
            } = e, [s, r] = t, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, o = i * n;
            if (o <= 0) return 0;
            let l = s.reduce((e, t, n) => {
                if (o > t) {
                    let e = r[n];
                    if (n + 1 === s.length) return r[n];
                    let i = s[n + 1],
                        a = r[n + 1];
                    return (o - t) / (i - t) * (a - e) + e
                }
                return o === t ? r[n] : e
            }, 0);
            return Math.min(a, l)
        },
        a = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ShakeLevel.LEVEL_3;
            return r(e, [i.SHAKE_STEPS[t], i.SHAKE_STEP_DIVIDER[t]], 1e5)
        },
        o = [
            [1, .001],
            [25, .3],
            [100, .5],
            [250, .8],
            [500, .9],
            [2500, .95],
            [9001, 1]
        ],
        l = o.map(e => {
            let [t] = e;
            return t
        }),
        u = o.map(e => {
            let [t, n] = e;
            return n
        }),
        d = e => r(e, [l, u], 1),
        c = e => 1 === e ? {
            color: s.Color.BRAND_500
        } : 2 === e || 3 === e ? {
            color: s.Color.GREEN_360
        } : 4 === e || 5 === e ? {
            color: s.Color.YELLOW_300,
            square: !0
        } : 6 === e ? {
            color: s.Color.RED_400,
            square: !0
        } : {
            color: s.Color.ORANGE_345,
            flair: !0
        };

    function _(e) {
        var t;
        return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
    }
}