function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("481060"),
        a = n("40851"),
        o = n("819640"),
        l = n("574254"),
        u = n("981631");

    function d() {
        let e = (0, s.useModalsStore)(e => !Object.entries(e).every(e => {
                let [t, n] = e;
                return 0 === n.length
            })),
            t = (0, r.useStateFromStores)([l.default], () => l.default.isOpen()),
            n = (0, r.useStateFromStores)([o.default], () => o.default.hasLayers()),
            [d, _] = i.useState(!1),
            c = (0, a.useWindowDispatch)();
        return i.useEffect(() => {
            function e() {
                _(!0)
            }

            function t() {
                _(!1)
            }
            return c.subscribe(u.ComponentActions.POPOUT_SHOW, e), c.subscribe(u.ComponentActions.POPOUT_HIDE, t), () => {
                c.unsubscribe(u.ComponentActions.POPOUT_SHOW, e), c.unsubscribe(u.ComponentActions.POPOUT_HIDE, t)
            }
        }, [c]), e || t || d || n
    }
}