function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return new MouseEvent(e, {
            screenX: t,
            screenY: n,
            clientX: t,
            clientY: n,
            bubbles: !0,
            view: window
        })
    }

    function o(e, t, n) {
        var r = document.elementFromPoint(t, n);
        if (null == r) throw Error();
        r.dispatchEvent(e)
    }
    n.r(t), n.d(t, {
        createMouseEvent: function() {
            return r
        },
        dispatchEventToPoint: function() {
            return o
        }
    })
}