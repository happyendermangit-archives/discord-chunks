function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Modal: function() {
            return u
        }
    }), n("222007");
    var i = n("884691"),
        r = n("995008"),
        s = n.n(r),
        a = n("551042"),
        o = n("388495"),
        l = n("516256");

    function u(e) {
        let {
            renderModal: t,
            onCloseRequest: n,
            onCloseCallback: r
        } = e, [l] = i.useState(() => s()), u = (0, o.useModalContext)();
        i.useLayoutEffect(() => ((0, a.openModal)(t, {
            modalKey: l,
            onCloseRequest: n,
            onCloseCallback: r
        }, u), () => {
            (0, a.closeModal)(l, u)
        }), []);
        let c = i.useRef(!0);
        return i.useLayoutEffect(() => {
            !c.current && (0, a.updateModal)(l, t, n, r, u), c.current = !1
        }, [t, n]), null
    }
    n.es(l, t)
}