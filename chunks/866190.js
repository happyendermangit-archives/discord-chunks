function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsWindowFocused: function() {
            return o
        }
    });
    var i = n("884691"),
        s = n("446674"),
        r = n("244201"),
        l = n("471671");

    function o() {
        let {
            windowId: e
        } = i.useContext(r.default);
        return (0, s.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
    }
}