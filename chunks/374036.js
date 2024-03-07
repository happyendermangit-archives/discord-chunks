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
        a = E("368694"),
        i = E("773336"),
        I = E("370492"),
        T = E("584369");
    let s = (0, n.makeLazy)({
        createPromise: () => E.el("304207").then(E.bind(E, "304207")),
        webpackId: "304207"
    });

    function S(e) {
        let {
            mobile: _
        } = e, E = (0, r.useStateFromStores)([a.default], () => a.default.isDeveloper), n = (0, r.useStateFromStores)([T.default], () => T.default.displayTools), S = o.useCallback(e => {
            let _ = (0, i.isMac)() ? e.metaKey : e.ctrlKey;
            _ && e.altKey && "KeyO" === e.code && (0, I.toggleDisplayDevTools)()
        }, []);
        return (o.useLayoutEffect(() => (window.addEventListener("keydown", S), () => {
            window.removeEventListener("keydown", S)
        }), [S]), _ ? E : n) ? (0, t.jsx)(s, {
            mobile: _
        }) : null
    }
}