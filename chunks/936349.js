function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("570140"),
        l = n("70956");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = {
            preferredRegions: null,
            lastTestTimestamp: null,
            lastGeoRankedOrder: null
        },
        _ = d,
        c = 1 * l.default.Millis.HOUR;
    class E extends(i = a.default.DeviceSettingsStore) {
        initialize(e) {
            _ = null != e ? e : d
        }
        shouldIncludePreferredRegion() {
            return null != _.preferredRegions
        }
        getPreferredRegion() {
            var e, t;
            return null !== (t = null === (e = _.preferredRegions) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : null
        }
        getPreferredRegions() {
            return _.preferredRegions
        }
        getRegion(e) {
            if (null != e) return e.substr(0, e.search(/\d/))
        }
        getUserAgnosticState() {
            return _
        }
        shouldPerformLatencyTest(e) {
            var t, n;
            return null === _.preferredRegions || !s().isEqual(e, null !== (t = _.lastGeoRankedOrder) && void 0 !== t ? t : []) || Date.now() - (null !== (n = _.lastTestTimestamp) && void 0 !== n ? n : 0) >= c
        }
    }
    u(E, "displayName", "RTCRegionStore"), u(E, "persistKey", "RTCRegionStore"), u(E, "migrations", [e => (e.preferredRegion ? e.preferredRegions = [e.preferredRegion] : e.preferredRegions = null, delete e.preferredRegion, e)]), t.default = new E(o.default, {
        RTC_LATENCY_TEST_COMPLETE: function(e) {
            e.latencyRankedRegions.length > 0 && (_.lastGeoRankedOrder = e.geoRankedRegions, _.preferredRegions = e.latencyRankedRegions), _.lastTestTimestamp = Date.now()
        }
    })
}