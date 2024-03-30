function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("762624"),
        o = n("898511"),
        i = n("622780");

    function a() {
        return Promise.resolve()
    }

    function u(e) {
        var t = document.querySelector(e);
        null != t && t.focus()
    }

    function s(e, t) {
        var n = (0, o.useStateFromStores)([i.default], function() {
            return i.default.keyboardModeEnabled
        });
        return (0, r.default)({
            id: e,
            isEnabled: n,
            orientation: t,
            setFocus: u,
            scrollToStart: a,
            scrollToEnd: a
        })
    }
}