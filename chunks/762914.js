function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterBroadcastingGDMs: function() {
            return l
        },
        getIsBroadcastingGDM: function() {
            return o
        },
        useIsBroadcastingGDM: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("592125"),
        a = n("770471");

    function s(e) {
        let {
            canViewBroadcasts: t
        } = a.default.useExperiment({
            location: "use_is_broadcasting_gdm"
        }, {
            autoTrackExposure: !1
        }), n = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(e));
        return !!t && !!(null == n ? void 0 : n.isBroadcastChannel())
    }

    function o(e) {
        let {
            canViewBroadcasts: t
        } = a.default.getCurrentConfig({
            location: "get_is_broadcasting_gdm"
        }, {
            autoTrackExposure: !1
        });
        if (!t) return !1;
        let n = r.default.getChannel(e);
        return !!(null == n ? void 0 : n.isBroadcastChannel())
    }

    function l(e) {
        return e.filter(e => !o(e))
    }
}