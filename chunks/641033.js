function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComboPercentage: function() {
            return d
        },
        getComboScore: function() {
            return c
        },
        getComboShakeIntensity: function() {
            return s
        },
        getComboStyles: function() {
            return _
        }
    }), n("47120"), n("724458");
    var i = n("524484"),
        r = n("981631");
    let a = function(e, t) {
            let {
                multiplier: n,
                value: i
            } = e, [r, a] = t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, o = i * n;
            return o <= 0 ? 0 : Math.min(s, r.reduce((e, t, n) => {
                if (o > t) {
                    let e = a[n];
                    if (n + 1 === r.length) return a[n];
                    let i = r[n + 1],
                        s = a[n + 1];
                    return (o - t) / (i - t) * (s - e) + e
                }
                return o === t ? a[n] : e
            }, 0))
        },
        s = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ShakeLevel.LEVEL_3;
            return a(e, [i.SHAKE_STEPS[t], i.SHAKE_STEP_DIVIDER[t]], 1e5)
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
        d = e => a(e, [l, u], 1),
        _ = e => 1 === e ? {
            color: r.Color.BRAND_500
        } : 2 === e || 3 === e ? {
            color: r.Color.GREEN_360
        } : 4 === e || 5 === e ? {
            color: r.Color.YELLOW_300,
            square: !0
        } : 6 === e ? {
            color: r.Color.RED_400,
            square: !0
        } : {
            color: r.Color.ORANGE_345,
            flair: !0
        };

    function c(e) {
        var t;
        return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
    }
}