function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsWindowFocused: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("40851"),
        s = n("451478");

    function o() {
        let {
            windowId: e
        } = i.useContext(a.default);
        return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
    }
}