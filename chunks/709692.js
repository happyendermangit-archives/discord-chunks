function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Modal: function() {
            return u
        }
    }), n("47120");
    var i = n("470079"),
        r = n("97613"),
        a = n.n(r),
        s = n("952265"),
        o = n("307616"),
        l = n("466377");

    function u(e) {
        let {
            renderModal: t,
            onCloseRequest: n,
            onCloseCallback: r
        } = e, [l] = i.useState(() => a()()), u = (0, o.useModalContext)();
        i.useLayoutEffect(() => ((0, s.openModal)(t, {
            modalKey: l,
            onCloseRequest: n,
            onCloseCallback: r
        }, u), () => {
            (0, s.closeModal)(l, u)
        }), []);
        let d = i.useRef(!0);
        return i.useLayoutEffect(() => {
            !d.current && (0, s.updateModal)(l, t, n, r, u), d.current = !1
        }, [t, n]), null
    }
    n.es(l, t)
}