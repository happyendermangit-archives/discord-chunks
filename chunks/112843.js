function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("399606"),
        s = n("745510"),
        a = n("351780");

    function o() {
        let {
            createMultipleConfettiAt: e
        } = i.useContext(s.ConfettiCannonContext), t = (0, r.useStateFromStores)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
            size: {
                type: "static-random",
                minValue: e.confettiSize - 7,
                maxValue: e.confettiSize + 7
            }
        }), []);
        return i.useMemo(() => ({
            fire: (i, r, s) => {
                var a, o;
                let l = (null == s ? void 0 : s.settings) != null ? {
                    ...t,
                    ...s.settings
                } : t;
                e(i, r, n(l), (null !== (a = null == s ? void 0 : s.count) && void 0 !== a ? a : l.confettiCount) * (null !== (o = null == s ? void 0 : s.countMultiplier) && void 0 !== o ? o : 1), {
                    sprite: null == s ? void 0 : s.sprite
                })
            }
        }), [e, n, t])
    }
}