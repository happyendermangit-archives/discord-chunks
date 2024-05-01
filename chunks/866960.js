function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("931619"),
        d = n("981631");
    let _ = d.NetworkConnectionTypes.UNKNOWN,
        c = d.NetworkConnectionSpeeds.UNKNOWN,
        E = null;

    function I(e) {
        var t;
        _ = null != e.type ? e.type : d.NetworkConnectionTypes.UNKNOWN, c = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : d.NetworkConnectionSpeeds.UNKNOWN, E = e.serviceProvider, f.emitChange()
    }
    class T extends(a = o.default.Store) {
        initialize() {
            u.default.getNetworkInformation().then(I), u.default.addChangeCallback(I)
        }
        getType() {
            return _
        }
        getEffectiveConnectionSpeed() {
            return c
        }
        getServiceProvider() {
            return E
        }
    }
    s = "NetworkStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s;
    let f = new T(l.default, {});
    t.default = f
}