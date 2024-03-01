function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsBroadcastingGDM: function() {
            return a
        },
        getIsBroadcastingGDM: function() {
            return o
        },
        filterBroadcastingGDMs: function() {
            return l
        }
    });
    var i = n("446674"),
        r = n("42203"),
        s = n("9759");

    function a(e) {
        let {
            canViewBroadcasts: t
        } = s.default.useExperiment({
            location: "use_is_broadcasting_gdm"
        }, {
            autoTrackExposure: !1
        }), n = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(e));
        return !!t && !!(null == n ? void 0 : n.isBroadcastChannel())
    }

    function o(e) {
        let {
            canViewBroadcasts: t
        } = s.default.getCurrentConfig({
            location: "get_is_broadcasting_gdm"
        }, {
            autoTrackExposure: !1
        });
        if (!t) return !1;
        let n = r.default.getChannel(e);
        return !!(null == n ? void 0 : n.isBroadcastChannel())
    }

    function l(e) {
        return e.filter(e => {
            let t = o(e);
            return !t
        })
    }
}