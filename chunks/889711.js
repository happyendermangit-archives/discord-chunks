function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getResizeObserver: function() {
            return a
        },
        unwatch: function() {
            return l
        },
        watch: function() {
            return o
        }
    }), n("47120");
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
        return null == t && (t = new ResizeObserver(s), i.set(e, t), r.set(t, new WeakMap)), t
    }

    function o(e, t, n) {
        var i;
        let s = a(e),
            o = null !== (i = r.get(s)) && void 0 !== i ? i : new WeakMap;
        !o.has(t) && s.observe(t), o.set(t, n), r.set(s, o)
    }

    function l(e, t) {
        var n;
        let i = a(e),
            s = null !== (n = r.get(i)) && void 0 !== n ? n : new WeakMap;
        s.has(t) && (s.delete(t), i.unobserve(t), r.set(i, s))
    }
}