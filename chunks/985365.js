function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("35468"),
        a = n("49111");
    let o = a.NetworkConnectionTypes.UNKNOWN,
        l = a.NetworkConnectionSpeeds.UNKNOWN,
        u = null;

    function d(e) {
        var t;
        o = null != e.type ? e.type : a.NetworkConnectionTypes.UNKNOWN, l = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : a.NetworkConnectionSpeeds.UNKNOWN, u = e.serviceProvider, _.emitChange()
    }
    class c extends i.default.Store {
        initialize() {
            r.default.getNetworkInformation().then(d), r.default.addChangeCallback(d)
        }
        getType() {
            return o
        }
        getEffectiveConnectionSpeed() {
            return l
        }
        getServiceProvider() {
            return u
        }
    }
    c.displayName = "NetworkStore";
    let _ = new c(s.default, {});
    var f = _
}