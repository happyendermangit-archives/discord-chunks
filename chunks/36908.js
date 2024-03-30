function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("188104");

    function o(e, t) {
        return "horizontal" === t ? {
            scrollPosition: e.scrollLeft,
            scrollSize: e.scrollWidth,
            offsetSize: e.offsetWidth
        } : {
            scrollPosition: e.scrollTop,
            scrollSize: e.scrollHeight,
            offsetSize: e.offsetHeight
        }
    }

    function i(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
            a = function(e) {
                var r, a, u = e.to,
                    s = e.animate,
                    l = e.callback,
                    c = o(t(), i),
                    f = c.scrollPosition,
                    d = c.scrollSize,
                    _ = c.offsetSize;
                n.to({
                    to: (r = u) >= (a = d - _ + 1) - 1 ? a : Math.max(0, r),
                    from: f,
                    animate: s,
                    callback: l
                })
            },
            u = function(e) {
                var n = e.start,
                    r = e.end,
                    u = e.padding,
                    s = void 0 === u ? 0 : u,
                    l = e.animate,
                    c = e.callback,
                    f = o(t(), i),
                    d = f.scrollPosition,
                    _ = f.offsetSize;
                n -= s, r += s, n >= d && r <= d + _ ? null != c && c() : n < d ? a({
                    to: n,
                    animate: l,
                    callback: c
                }) : a({
                    to: r - _,
                    animate: l,
                    callback: c
                })
            };
        return {
            spring: n,
            scrollTo: a,
            mergeTo: n.mergeTo,
            scrollIntoViewRect: u,
            scrollIntoViewNode: function(t) {
                var n = t.node,
                    o = t.padding,
                    a = t.animate,
                    s = t.callback,
                    l = e.current;
                if (null != l) {
                    var c = function(e, t, n) {
                            for (var o = "horizontal" === t ? e.offsetWidth : e.offsetHeight, i = "horizontal" === t ? e.offsetLeft : e.offsetTop, a = e.offsetParent; null != a && a !== n;)(0, r.isElement)(a, HTMLElement) ? (i += "horizontal" === t ? a.offsetLeft : a.offsetTop, a = a.offsetParent) : a = a.parentNode;
                            return {
                                offset: i,
                                offsetSize: o
                            }
                        }(n, i, l),
                        f = c.offset;
                    u({
                        start: f,
                        end: f + c.offsetSize,
                        padding: void 0 === o ? 0 : o,
                        animate: void 0 !== a && a,
                        callback: s
                    })
                }
            },
            scrollPageUp: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.animate,
                    r = e.callback,
                    u = o(t(), i);
                a({
                    to: u.scrollPosition - .9 * u.offsetSize,
                    animate: void 0 !== n && n,
                    callback: r
                })
            },
            scrollPageDown: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.animate,
                    r = e.callback,
                    u = o(t(), i);
                a({
                    to: u.scrollPosition + .9 * u.offsetSize,
                    animate: void 0 !== n && n,
                    callback: r
                })
            },
            scrollToTop: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.animate;
                a({
                    to: 0,
                    animate: void 0 !== t && t,
                    callback: e.callback
                })
            },
            scrollToBottom: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.animate;
                a({
                    to: Number.MAX_SAFE_INTEGER,
                    animate: void 0 !== t && t,
                    callback: e.callback
                })
            },
            isScrolledToTop: function() {
                return 0 === o(t(), i).scrollPosition
            },
            isScrolledToBottom: function() {
                var e = o(t(), i);
                return e.scrollPosition >= e.scrollSize - e.offsetSize
            }
        }
    }
}