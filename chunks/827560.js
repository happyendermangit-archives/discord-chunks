function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("222007");
    var a = n("884691"),
        l = n("446674"),
        i = n("77078"),
        o = n("244201"),
        r = n("778588"),
        s = n("144747"),
        d = n("49111");

    function u() {
        let e = (0, i.useModalsStore)(e => !Object.entries(e).every(e => {
                let [t, n] = e;
                return 0 === n.length
            })),
            t = (0, l.useStateFromStores)([s.default], () => s.default.isOpen()),
            n = (0, l.useStateFromStores)([r.default], () => r.default.hasLayers()),
            [u, c] = a.useState(!1),
            p = (0, o.useWindowDispatch)();
        return a.useEffect(() => {
            function e() {
                c(!0)
            }

            function t() {
                c(!1)
            }
            return p.subscribe(d.ComponentActions.POPOUT_SHOW, e), p.subscribe(d.ComponentActions.POPOUT_HIDE, t), () => {
                p.unsubscribe(d.ComponentActions.POPOUT_SHOW, e), p.unsubscribe(d.ComponentActions.POPOUT_HIDE, t)
            }
        }, [p]), e || t || u || n
    }
}