function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("399606"),
        a = n("745510"),
        s = n("351780");

    function o() {
        let {
            createMultipleConfettiAt: e
        } = i.useContext(a.ConfettiCannonContext), t = (0, r.useStateFromStores)([s.default], () => s.default.getState()), n = i.useCallback(e => ({
            size: {
                type: "static-random",
                minValue: e.confettiSize - 7,
                maxValue: e.confettiSize + 7
            }
        }), []);
        return i.useMemo(() => ({
            fire: (i, r, a) => {
                var s, o;
                let l = (null == a ? void 0 : a.settings) != null ? {
                    ...t,
                    ...a.settings
                } : t;
                e(i, r, n(l), (null !== (s = null == a ? void 0 : a.count) && void 0 !== s ? s : l.confettiCount) * (null !== (o = null == a ? void 0 : a.countMultiplier) && void 0 !== o ? o : 1), {
                    sprite: null == a ? void 0 : a.sprite
                })
            }
        }), [e, n, t])
    }
}