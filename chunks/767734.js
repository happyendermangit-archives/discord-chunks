function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("281767"),
        o = [],
        i = !1;

    function a() {
        var e = window.navigator.connection;
        return null == e ? {
            type: r.NetworkConnectionTypes.UNKNOWN,
            effectiveSpeed: r.NetworkConnectionSpeeds.UNKNOWN
        } : {
            type: null != e.type ? e.type : r.NetworkConnectionTypes.UNKNOWN,
            effectiveSpeed: e.effectiveType
        }
    }

    function u() {
        var e = a();
        o.forEach(function(t) {
            return t(e)
        })
    }
    t.default = {
        addOnlineCallback: function(e) {
            window.addEventListener("online", e)
        },
        removeOnlineCallback: function(e) {
            window.removeEventListener("online", e)
        },
        addOfflineCallback: function(e) {
            window.addEventListener("offline", e)
        },
        removeOfflineCallback: function(e) {
            window.removeEventListener("offline", e)
        },
        addChangeCallback: function(e) {
            var t;
            t = e, o.push(t),
                function() {
                    if (!0 !== i) {
                        var e = window.navigator.connection;
                        null != e && (i = !0, e.addEventListener("change", u))
                    }
                }()
        },
        removeChangeCallback: function(e) {
            var t, n;
            t = e, -1 !== (n = o.indexOf(t)) && (o.splice(n, 1), function() {
                if (!1 !== i) {
                    var e = window.navigator.connection;
                    null != e && 0 === o.length && null != e && (e.removeEventListener("change", u), i = !1)
                }
            }())
        },
        getNetworkInformation: function() {
            return Promise.resolve(a())
        },
        isOnline: function() {
            var e = navigator.onLine;
            return void 0 === e || e
        }
    }
}