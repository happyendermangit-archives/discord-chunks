function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsWindowFocused: function() {
            return a
        }
    });
    var i = n("884691"),
        r = n("446674"),
        s = n("244201"),
        l = n("471671");

    function a() {
        let {
            windowId: e
        } = i.useContext(s.default);
        return (0, r.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
    }
}