function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i, r, s, a, o = n("348327"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("742738");
    let c = [_.default],
        E = [];

    function I() {
        let e = [];
        for (let t of c) {
            let n = t.getActivity();
            null != n && e.push(n)
        }
        return !l()(e, E) && (E = e, !0)
    }
    class T extends(i = u.default.Store) {
        initialize() {
            this.syncWith(c, I)
        }
        getActivities() {
            return E
        }
    }
    a = "FirstPartyRichPresenceStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new T(d.default)
}