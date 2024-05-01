function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("481060"),
        o = n("923928"),
        l = n("468026"),
        u = n("503856"),
        d = n("209590"),
        _ = n("689938");
    let c = () => {
            o.default.clearSuppressWarning()
        },
        E = () => {
            o.default.clearSuppressWarning(!0)
        };
    t.default = () => {
        let e = r.useRef(null);

        function t() {
            null !== e.current && ((0, s.closeModal)(e.current), e.current = null)
        }
        let [o, I] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.shouldShowWarning(), d.default.isAFKChannel()], []), T = r.useCallback(() => {
            let t = "",
                n = "";
            I ? (t = _.default.Messages.SUPPRESSED_AFK_TITLE, n = _.default.Messages.SUPPRESSED_AFK_BODY) : (t = _.default.Messages.SUPPRESSED, n = _.default.Messages.SUPPRESSED_PERMISSION_BODY), e.current = (0, s.openModal)(e => (0, i.jsx)(l.default, {
                title: t,
                body: n,
                onConfirm: c,
                confirmText: _.default.Messages.OKAY,
                secondaryConfirmText: _.default.Messages.DONT_SHOW_AGAIN,
                onConfirmSecondary: E,
                ...e
            }))
        }, [I]), f = r.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("41281")]).then(n.bind(n, "669732"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    showHideSuppressWarning: !0
                })
            }).then(t => {
                null != t && (e.current = t)
            })
        }, []);
        return r.useEffect(() => (o && (0, u.isRTCConnectedInHub)() ? f() : o ? T() : t(), () => {
            t()
        }), [o, T, f]), null
    }
}