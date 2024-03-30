function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = Object.freeze({
            scrollTop: 0,
            scrollLeft: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            offsetHeight: 0,
            offsetWidth: 0,
            dirty: 0
        });

    function i() {
        var e = (0, r.useRef)(null),
            t = (0, r.useCallback)(function() {
                var t = e.current;
                return null != t ? {
                    scrollTop: t.scrollTop,
                    scrollLeft: t.scrollLeft,
                    scrollHeight: t.scrollHeight,
                    scrollWidth: t.scrollWidth,
                    offsetHeight: t.offsetHeight,
                    offsetWidth: t.offsetWidth,
                    dirty: 0
                } : o
            }, []);
        return {
            scrollerRef: e,
            getScrollerState: t
        }
    }
}