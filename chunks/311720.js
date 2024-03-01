function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFocusLock: function() {
            return u
        },
        FocusLock: function() {
            return c
        }
    });
    var i, r = n("884691"),
        o = n("965955"),
        s = n("446674"),
        l = n("206230");
    let a = null !== (i = document.getElementById("app-mount")) && void 0 !== i ? i : document;

    function u(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = (0, s.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled),
            u = r.useRef(!1);
        return u.current = !i, (0, o.default)(e, {
            ...n,
            disableReturnRef: u,
            attachTo: null !== (t = n.attachTo) && void 0 !== t ? t : a,
            returnRef: n.returnRef
        })
    }

    function c(e) {
        return u(e.containerRef), e.children
    }
}