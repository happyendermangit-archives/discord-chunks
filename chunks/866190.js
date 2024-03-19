function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        useIsWindowFocused: function() {
            return a
        }
    });
    var r = i("884691"),
        n = i("446674"),
        s = i("244201"),
        l = i("471671");

    function a() {
        let {
            windowId: e
        } = r.useContext(s.default);
        return (0, n.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
    }
}