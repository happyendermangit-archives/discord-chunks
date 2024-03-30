function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterBroadcastingGDMs: function() {
            return s
        },
        getIsBroadcastingGDM: function() {
            return u
        },
        useIsBroadcastingGDM: function() {
            return a
        }
    });
    var r = n("898511"),
        o = n("935741"),
        i = n("904393");

    function a(e) {
        var t = i.default.useExperiment({
                location: "use_is_broadcasting_gdm"
            }, {
                autoTrackExposure: !1
            }).canViewBroadcasts,
            n = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getChannel(e)
            });
        return !!t && !!(null == n ? void 0 : n.isBroadcastChannel())
    }

    function u(e) {
        if (!i.default.getCurrentConfig({
                location: "get_is_broadcasting_gdm"
            }, {
                autoTrackExposure: !1
            }).canViewBroadcasts) return !1;
        var t = o.default.getChannel(e);
        return !!(null == t ? void 0 : t.isBroadcastChannel())
    }

    function s(e) {
        return e.filter(function(e) {
            return !u(e)
        })
    }
}