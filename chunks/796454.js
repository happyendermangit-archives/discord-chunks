function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsWindowFocused: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("813970"),
        a = n("290976");

    function u() {
        var e = r.useContext(i.default).windowId;
        return (0, o.useStateFromStores)([a.default], function() {
            return a.default.isFocused(e)
        }, [e])
    }
}