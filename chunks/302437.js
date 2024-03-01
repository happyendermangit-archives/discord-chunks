function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("974667"),
        i = n("446674"),
        a = n("206230");

    function s() {
        return Promise.resolve()
    }

    function r(e) {
        let t = document.querySelector(e);
        null != t && t.focus()
    }

    function o(e, t) {
        let n = (0, i.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled);
        return (0, l.default)({
            id: e,
            isEnabled: n,
            orientation: t,
            setFocus: r,
            scrollToStart: s,
            scrollToEnd: s
        })
    }
}