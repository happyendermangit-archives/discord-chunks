function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addFocusSubscriber: function() {
            return s
        },
        notifyFocusSubscribers: function() {
            return r
        }
    }), n("222007");
    let i = new Map;

    function s(e, t) {
        let n = i.get(e);
        return null == n && (n = new Set, i.set(e, n)), n.add(t), () => null == n ? void 0 : n.delete(t)
    }

    function r(e, t, n) {
        let s = i.get(e);
        if (null != s)
            for (let e of s) e(t, n)
    }
}