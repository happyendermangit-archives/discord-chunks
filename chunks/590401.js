function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("718517");
    let l = {
            preferredRegions: null,
            lastTestTimestamp: null,
            lastGeoRankedOrder: null
        },
        u = l,
        d = 1 * o.default.Millis.HOUR;
    class c extends r.default.DeviceSettingsStore {
        initialize(e) {
            u = null != e ? e : l
        }
        shouldIncludePreferredRegion() {
            return null != u.preferredRegions
        }
        getPreferredRegion() {
            var e, t;
            return null !== (t = null === (e = u.preferredRegions) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : null
        }
        getPreferredRegions() {
            return u.preferredRegions
        }
        getRegion(e) {
            if (null != e) return e.substr(0, e.search(/\d/))
        }
        getUserAgnosticState() {
            return u
        }
        shouldPerformLatencyTest(e) {
            var t, n;
            return null === u.preferredRegions || !s.isEqual(e, null !== (t = u.lastGeoRankedOrder) && void 0 !== t ? t : []) || Date.now() - (null !== (n = u.lastTestTimestamp) && void 0 !== n ? n : 0) >= d
        }
    }
    c.displayName = "RTCRegionStore", c.persistKey = "RTCRegionStore", c.migrations = [e => (e.preferredRegion ? e.preferredRegions = [e.preferredRegion] : e.preferredRegions = null, delete e.preferredRegion, e)];
    var _ = new c(a.default, {
        RTC_LATENCY_TEST_COMPLETE: function(e) {
            e.latencyRankedRegions.length > 0 && (u.lastGeoRankedOrder = e.geoRankedRegions, u.preferredRegions = e.latencyRankedRegions), u.lastTestTimestamp = Date.now()
        }
    })
}