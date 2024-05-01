function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusLock: function() {
            return d
        },
        useFocusLock: function() {
            return u
        }
    });
    var i, r = n("470079"),
        s = n("802498"),
        a = n("442837"),
        o = n("607070");
    let l = null !== (i = document.getElementById("app-mount")) && void 0 !== i ? i : document;

    function u(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = (0, a.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled),
            u = r.useRef(!1);
        return u.current = !i, (0, s.default)(e, {
            ...n,
            disableReturnRef: u,
            attachTo: null !== (t = n.attachTo) && void 0 !== t ? t : l,
            returnRef: n.returnRef
        })
    }

    function d(e) {
        return u(e.containerRef), e.children
    }
}