function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("924826"),
        r = n("442837"),
        a = n("607070");

    function s() {
        return Promise.resolve()
    }

    function o(e) {
        let t = document.querySelector(e);
        null != t && t.focus()
    }

    function l(e, t) {
        let n = (0, r.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled);
        return (0, i.default)({
            id: e,
            isEnabled: n,
            orientation: t,
            setFocus: o,
            scrollToStart: s,
            scrollToEnd: s
        })
    }
}