function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsWindowFocused: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("40851"),
        a = n("451478");

    function o() {
        let {
            windowId: e
        } = i.useContext(s.default);
        return (0, r.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
    }
}