function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIntersectionObserver: function() {
            return a
        },
        watch: function() {
            return o
        },
        unwatch: function() {
            return l
        }
    }), n("222007");
    let i = new WeakMap,
        r = new WeakMap;

    function s(e, t) {
        e.forEach(e => {
            var n;
            let i = null === (n = r.get(t)) || void 0 === n ? void 0 : n.get(e.target);
            null != i && i.call(null, e)
        })
    }

    function a(e) {
        let t = i.get(e);
        return null == t && (t = new IntersectionObserver(s, e), i.set(e, t), r.set(t, new WeakMap)), t
    }

    function o(e, t, n) {
        var i;
        let s = null !== (i = r.get(e)) && void 0 !== i ? i : new WeakMap;
        !s.has(t) && e.observe(t), s.set(t, n), r.set(e, s)
    }

    function l(e, t) {
        var n;
        let i = null !== (n = r.get(e)) && void 0 !== n ? n : new WeakMap;
        i.has(t) && (i.delete(t), e.unobserve(t), r.set(e, i))
    }
}