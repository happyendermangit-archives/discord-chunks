function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        useIsWindowFocused: function() {
            return a
        }
    });
    var n = r("884691"),
        i = r("446674"),
        s = r("244201"),
        l = r("471671");

    function a() {
        let {
            windowId: e
        } = n.useContext(s.default);
        return (0, i.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
    }
}