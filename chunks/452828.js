function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("470079");
    let r = Object.freeze({
        scrollTop: 0,
        scrollLeft: 0,
        scrollHeight: 0,
        scrollWidth: 0,
        offsetHeight: 0,
        offsetWidth: 0,
        dirty: 2
    });

    function s() {
        let e = (0, i.useRef)(null),
            t = (0, i.useRef)(r),
            n = (0, i.useCallback)(() => {
                let {
                    current: n
                } = e, {
                    dirty: i
                } = t.current;
                if (null == n || 0 === i) return t.current;
                if (1 === i) {
                    let {
                        scrollTop: e,
                        scrollLeft: i
                    } = n;
                    t.current = {
                        ...t.current,
                        scrollTop: e,
                        scrollLeft: i,
                        dirty: 0
                    }
                } else {
                    let {
                        scrollTop: e,
                        scrollLeft: i,
                        scrollHeight: r,
                        scrollWidth: s,
                        offsetHeight: a,
                        offsetWidth: o
                    } = n;
                    t.current = {
                        scrollTop: e,
                        scrollLeft: i,
                        scrollHeight: r,
                        scrollWidth: s,
                        offsetHeight: a,
                        offsetWidth: o,
                        dirty: 0
                    }
                }
                return t.current
            }, []);
        return {
            scrollerRef: e,
            scrollerState: t,
            getScrollerState: n
        }
    }
}