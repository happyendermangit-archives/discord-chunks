function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addFocusSubscriber: function() {
            return r
        },
        notifyFocusSubscribers: function() {
            return s
        }
    }), n("47120");
    let i = new Map;

    function r(e, t) {
        let n = i.get(e);
        return null == n && (n = new Set, i.set(e, n)), n.add(t), () => null == n ? void 0 : n.delete(t)
    }

    function s(e, t, n) {
        let r = i.get(e);
        if (null != r)
            for (let e of r) e(t, n)
    }
}