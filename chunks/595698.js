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
        s = new WeakMap;

    function r(e, t) {
        e.forEach(e => {
            var n;
            let i = null === (n = s.get(t)) || void 0 === n ? void 0 : n.get(e.target);
            null != i && i.call(null, e)
        })
    }

    function a(e) {
        let t = i.get(e);
        return null == t && (t = new IntersectionObserver(r, e), i.set(e, t), s.set(t, new WeakMap)), t
    }

    function o(e, t, n) {
        var i;
        let r = null !== (i = s.get(e)) && void 0 !== i ? i : new WeakMap;
        !r.has(t) && e.observe(t), r.set(t, n), s.set(e, r)
    }

    function l(e, t) {
        var n;
        let i = null !== (n = s.get(e)) && void 0 !== n ? n : new WeakMap;
        i.has(t) && (i.delete(t), e.unobserve(t), s.set(e, i))
    }
}