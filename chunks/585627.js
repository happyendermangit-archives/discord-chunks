function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findFirstVisibleItem: function() {
            return r
        },
        findLastVisibleItem: function() {
            return s
        },
        isItemVisible: function() {
            return a
        }
    }), n("47120");
    var i = n("260866");

    function r(e, t) {
        return new Promise(n => {
            let r = new IntersectionObserver(e => {
                let t = 0,
                    s = null;
                for (let {
                        isIntersecting: a,
                        intersectionRatio: o,
                        target: l
                    }
                    of e) {
                    if (a && 1 === o) {
                        r.disconnect();
                        let e = l.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE);
                        if (null != e) return n(e)
                    }
                    o > t && (t = o, s = l.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE))
                }
                r.disconnect(), n(s)
            }, {
                root: e
            });
            for (let e of t) r.observe(e)
        })
    }

    function s(e, t) {
        return new Promise(n => {
            let r = new IntersectionObserver(e => {
                let t = 0,
                    s = null;
                for (let a = e.length - 1; a >= 0; a--) {
                    let {
                        isIntersecting: o,
                        intersectionRatio: l,
                        target: u
                    } = e[a];
                    if (o && 1 === l) {
                        r.disconnect();
                        let e = u.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE);
                        if (null != e) return n(e)
                    }
                    l > t && (t = l, s = u.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE))
                }
                r.disconnect(), n(s)
            }, {
                root: e
            });
            for (let e of t) r.observe(e)
        })
    }

    function a(e, t) {
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