function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findFirstVisibleItem: function() {
            return r
        },
        findLastVisibleItem: function() {
            return a
        },
        isItemVisible: function() {
            return s
        }
    }), n("47120");
    var i = n("260866");

    function r(e, t) {
        return new Promise(n => {
            let r = new IntersectionObserver(e => {
                let t = 0,
                    a = null;
                for (let {
                        isIntersecting: s,
                        intersectionRatio: o,
                        target: l
                    }
                    of e) {
                    if (s && 1 === o) {
                        r.disconnect();
                        let e = l.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE);
                        if (null != e) return n(e)
                    }
                    o > t && (t = o, a = l.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE))
                }
                r.disconnect(), n(a)
            }, {
                root: e
            });
            for (let e of t) r.observe(e)
        })
    }

    function a(e, t) {
        return new Promise(n => {
            let r = new IntersectionObserver(e => {
                let t = 0,
                    a = null;
                for (let s = e.length - 1; s >= 0; s--) {
                    let {
                        isIntersecting: o,
                        intersectionRatio: l,
                        target: u
                    } = e[s];
                    if (o && 1 === l) {
                        r.disconnect();
                        let e = u.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE);
                        if (null != e) return n(e)
                    }
                    l > t && (t = l, a = u.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE))
                }
                r.disconnect(), n(a)
            }, {
                root: e
            });
            for (let e of t) r.observe(e)
        })
    }

    function s(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
        return new Promise(i => {
            let r = new IntersectionObserver(e => {
                let t = e[0];
                r.disconnect(), i(t.intersectionRatio >= n)
            }, {
                root: e
            });
            r.observe(t)
        })
    }
}