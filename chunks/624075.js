function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("47120");
    var i = n("191532");

    function r(e, t, n, r) {
        let s = (0, i.default)(e, t, r),
            a = (e, t) => n.computeScrollPosition(e, t);
        return {
            ...s,
            getScrollPosition: a,
            isItemVisible(e, n) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    [r, s] = a(e, n),
                    o = t();
                return i ? r >= o.scrollTop && r + s <= o.scrollTop + o.offsetHeight : r + s >= o.scrollTop && r <= o.scrollTop + o.offsetHeight
            },
            scrollToIndex(e) {
                let {
                    section: t,
                    row: n,
                    animate: i,
                    callback: r,
                    padding: o = 0
                } = e, [l, u] = a(t, n);
                s.scrollIntoViewRect({
                    start: l,
                    end: l + u,
                    padding: o,
                    animate: i,
                    callback: r
                })
            }
        }
    }
}