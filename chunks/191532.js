function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("374470");

    function r(e, t) {
        if ("horizontal" === t) {
            let {
                scrollLeft: t,
                scrollWidth: n,
                offsetWidth: i
            } = e;
            return {
                scrollPosition: t,
                scrollSize: n,
                offsetSize: i
            }
        }
        let {
            scrollTop: n,
            scrollHeight: i,
            offsetHeight: r
        } = e;
        return {
            scrollPosition: n,
            scrollSize: i,
            offsetSize: r
        }
    }

    function a(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
            s = e => {
                let {
                    to: i,
                    animate: s,
                    callback: o
                } = e, {
                    scrollPosition: l,
                    scrollSize: u,
                    offsetSize: d
                } = r(t(), a);
                n.to({
                    to: function(e, t, n) {
                        let i = t - n + 1;
                        return e >= i - 1 ? i : Math.max(0, e)
                    }(i, u, d),
                    from: l,
                    animate: s,
                    callback: o
                })
            },
            o = e => {
                let {
                    start: n,
                    end: i,
                    padding: o = 0,
                    animate: l,
                    callback: u
                } = e, {
                    scrollPosition: d,
                    offsetSize: _
                } = r(t(), a);
                n -= o, i += o, n >= d && i <= d + _ ? null != u && u() : n < d ? s({
                    to: n,
                    animate: l,
                    callback: u
                }) : s({
                    to: i - _,
                    animate: l,
                    callback: u
                })
            };
        return {
            spring: n,
            scrollTo: s,
            mergeTo: n.mergeTo,
            scrollIntoViewRect: o,
            scrollIntoViewNode(t) {
                let {
                    node: n,
                    padding: r = 0,
                    animate: s = !1,
                    callback: l
                } = t, {
                    current: u
                } = e;
                if (null == u) return;
                let {
                    offset: d,
                    offsetSize: _
                } = function(e, t, n) {
                    let r = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
                        a = "horizontal" === t ? e.offsetLeft : e.offsetTop,
                        s = e.offsetParent;
                    for (; null != s && s !== n;)(0, i.isElement)(s, HTMLElement) ? (a += "horizontal" === t ? s.offsetLeft : s.offsetTop, s = s.offsetParent) : s = s.parentNode;
                    return {
                        offset: a,
                        offsetSize: r
                    }
                }(n, a, u);
                o({
                    start: d,
                    end: d + _,
                    padding: r,
                    animate: s,
                    callback: l
                })
            },
            scrollPageUp() {
                let {
                    animate: e = !1,
                    callback: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                    scrollPosition: i,
                    offsetSize: o
                } = r(t(), a);
                s({
                    to: i - .9 * o,
                    animate: e,
                    callback: n
                })
            },
            scrollPageDown() {
                let {
                    animate: e = !1,
                    callback: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                    scrollPosition: i,
                    offsetSize: o
                } = r(t(), a);
                s({
                    to: i + .9 * o,
                    animate: e,
                    callback: n
                })
            },
            scrollToTop() {
                let {
                    animate: e = !1,
                    callback: t
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s({
                    to: 0,
                    animate: e,
                    callback: t
                })
            },
            scrollToBottom() {
                let {
                    animate: e = !1,
                    callback: t
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s({
                    to: Number.MAX_SAFE_INTEGER,
                    animate: e,
                    callback: t
                })
            },
            isScrolledToTop: () => 0 === r(t(), a).scrollPosition,
            isScrolledToBottom() {
                let {
                    scrollPosition: e,
                    scrollSize: n,
                    offsetSize: i
                } = r(t(), a);
                return e >= n - i
            }
        }
    }
}