function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    });
    var t = E("37983"),
        o = E("884691"),
        n = E("868233"),
        r = E("446674"),
        i = E("368694"),
        a = E("773336"),
        I = E("370492"),
        s = E("584369");
    let T = (0, n.makeLazy)({
        createPromise: () => E.el("304207").then(E.bind(E, "304207")),
        webpackId: "304207"
    });

    function S(e) {
        let {
            mobile: _
        } = e, E = (0, r.useStateFromStores)([i.default], () => i.default.isDeveloper), n = (0, r.useStateFromStores)([s.default], () => s.default.displayTools), S = o.useCallback(e => {
            let _ = (0, a.isMac)() ? e.metaKey : e.ctrlKey;
            _ && e.altKey && "KeyO" === e.code && (0, I.toggleDisplayDevTools)()
        }, []);
        return (o.useLayoutEffect(() => (window.addEventListener("keydown", S), () => {
            window.removeEventListener("keydown", S)
        }), [S]), _ ? E : n) ? (0, t.jsx)(T, {
            mobile: _
        }) : null
    }
}