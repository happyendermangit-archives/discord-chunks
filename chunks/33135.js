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
            dirty: 2
        });

    function i() {
        var e = (0, r.useRef)(null),
            t = (0, r.useRef)(o),
            n = (0, r.useCallback)(function() {
                var n = e.current,
                    r = t.current.dirty;
                if (null == n || 0 === r) return t.current;
                if (1 === r) {
                    var o, i, a = n.scrollTop,
                        u = n.scrollLeft;
                    t.current = (o = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r, o, i;
                                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[o] = i
                            })
                        }
                        return e
                    }({}, t.current), i = (i = {
                        scrollTop: a,
                        scrollLeft: u,
                        dirty: 0
                    }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                    }), o)
                } else {
                    var s = n.scrollTop,
                        l = n.scrollLeft,
                        c = n.scrollHeight,
                        f = n.scrollWidth,
                        d = n.offsetHeight,
                        _ = n.offsetWidth;
                    t.current = {
                        scrollTop: s,
                        scrollLeft: l,
                        scrollHeight: c,
                        scrollWidth: f,
                        offsetHeight: d,
                        offsetWidth: _,
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