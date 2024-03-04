function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findFirstVisibleItem: function() {
            return s
        },
        findLastVisibleItem: function() {
            return r
        },
        isItemVisible: function() {
            return a
        }
    }), n("222007");
    var i = n("74139");

    function s(e, t) {
        return new Promise(n => {
            let s = new IntersectionObserver(e => {
                let t = 0,
                    r = null;
                for (let {
                        isIntersecting: a,
                        intersectionRatio: o,
                        target: l
                    }
                    of e) {
                    if (a && 1 === o) {
                        s.disconnect();
                        let e = l.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE);
                        if (null != e) return n(e)
                    }
                    o > t && (t = o, r = l.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE))
                }
                s.disconnect(), n(r)
            }, {
                root: e
            });
            for (let e of t) s.observe(e)
        })
    }

    function r(e, t) {
        return new Promise(n => {
            let s = new IntersectionObserver(e => {
                let t = 0,
                    r = null;
                for (let a = e.length - 1; a >= 0; a--) {
                    let {
                        isIntersecting: o,
                        intersectionRatio: l,
                        target: u
                    } = e[a];
                    if (o && 1 === l) {
                        s.disconnect();
                        let e = u.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE);
                        if (null != e) return n(e)
                    }
                    l > t && (t = l, r = u.getAttribute(i.LIST_ITEM_ID_ATTRIBUTE))
                }
                s.disconnect(), n(r)
            }, {
                root: e
            });
            for (let e of t) s.observe(e)
        })
    }

    function a(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
        return new Promise(i => {
            let s = new IntersectionObserver(e => {
                let t = e[0];
                s.disconnect(), i(t.intersectionRatio >= n)
            }, {
                root: e
            });
            s.observe(t)
        })
    }
}