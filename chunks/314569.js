function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Modal: function() {
            return u
        }
    }), n("222007");
    var i = n("884691"),
        s = n("995008"),
        r = n.n(s),
        a = n("551042"),
        o = n("388495"),
        l = n("516256");

    function u(e) {
        let {
            renderModal: t,
            onCloseRequest: n,
            onCloseCallback: s
        } = e, [l] = i.useState(() => r()), u = (0, o.useModalContext)();
        i.useLayoutEffect(() => ((0, a.openModal)(t, {
            modalKey: l,
            onCloseRequest: n,
            onCloseCallback: s
        }, u), () => {
            (0, a.closeModal)(l, u)
        }), []);
        let d = i.useRef(!0);
        return i.useLayoutEffect(() => {
            !d.current && (0, a.updateModal)(l, t, n, s, u), d.current = !1
        }, [t, n]), null
    }
    n.es(l, t)
}