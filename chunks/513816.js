function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIntersectionObserver: function() {
            return a
        },
        unwatch: function() {
            return s
        },
        watch: function() {
            return u
        }
    });
    var r = new WeakMap,
        o = new WeakMap;

    function i(e, t) {
        e.forEach(function(e) {
            var n, r = null === (n = o.get(t)) || void 0 === n ? void 0 : n.get(e.target);
            null != r && r.call(null, e)
        })
    }

    function a(e) {
        var t = r.get(e);
        return null == t && (t = new IntersectionObserver(i, e), r.set(e, t), o.set(t, new WeakMap)), t
    }

    function u(e, t, n) {
        var r, i = null !== (r = o.get(e)) && void 0 !== r ? r : new WeakMap;
        !i.has(t) && e.observe(t), i.set(t, n), o.set(e, i)
    }

    function s(e, t) {
        var n, r = null !== (n = o.get(e)) && void 0 !== n ? n : new WeakMap;
        r.has(t) && (r.delete(t), e.unobserve(t), o.set(e, r))
    }
}