function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("379649"),
        r = n("866960"),
        s = n("981631");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null != e ? Math.round(e) : t
    }
    class l {
        _initStats() {
            let e = {
                effectiveConnectionSpeedBuckets: {},
                connectionTypeBuckets: {}
            };
            return Object.values(s.NetworkConnectionTypes).forEach(t => {
                e.connectionTypeBuckets[t] = 0
            }), Object.values(s.NetworkConnectionSpeeds).forEach(t => {
                e.effectiveConnectionSpeedBuckets[t] = 0
            }), e
        }
        getStats() {
            let {
                _networkStats: e
            } = this;
            return {
                duration_connection_type_wifi: o(e.connectionTypeBuckets[s.NetworkConnectionTypes.WIFI]),
                duration_connection_type_cellular: o(e.connectionTypeBuckets[s.NetworkConnectionTypes.CELLULAR]),
                duration_connection_type_ethernet: o(e.connectionTypeBuckets[s.NetworkConnectionTypes.ETHERNET]),
                duration_connection_type_bluetooth: o(e.connectionTypeBuckets[s.NetworkConnectionTypes.BLUETOOTH]),
                duration_connection_type_other: o(e.connectionTypeBuckets[s.NetworkConnectionTypes.OTHER]),
                duration_connection_type_unknown: o(e.connectionTypeBuckets[s.NetworkConnectionTypes.UNKNOWN]),
                duration_connection_type_none: o(e.connectionTypeBuckets[s.NetworkConnectionTypes.NONE]),
                duration_effective_connection_speed_2g: o(e.effectiveConnectionSpeedBuckets[s.NetworkConnectionSpeeds.TWO_G]),
                duration_effective_connection_speed_3g: o(e.effectiveConnectionSpeedBuckets[s.NetworkConnectionSpeeds.THREE_G]),
                duration_effective_connection_speed_4g: o(e.effectiveConnectionSpeedBuckets[s.NetworkConnectionSpeeds.FOUR_G]),
                duration_effective_connection_speed_5g: o(e.effectiveConnectionSpeedBuckets[s.NetworkConnectionSpeeds.FIVE_G]),
                duration_effective_connection_speed_unknown: o(e.effectiveConnectionSpeedBuckets[s.NetworkConnectionSpeeds.UNKNOWN])
            }
        }
        incrementNetworkStats(e) {
            let t = (e - this._lastSampleTimestamp) / 1e3,
                n = r.default.getEffectiveConnectionSpeed();
            n === s.NetworkConnectionSpeeds.SLOW_TWO_G && (n = s.NetworkConnectionSpeeds.TWO_G);
            let i = r.default.getType();
            i === s.NetworkConnectionTypes.WIMAX && (i = s.NetworkConnectionTypes.WIFI), this._networkStats.effectiveConnectionSpeedBuckets[n] += t, this._networkStats.connectionTypeBuckets[i] += t, this._lastSampleTimestamp = e
        }
        constructor() {
            a(this, "_networkStats", void 0), a(this, "_lastSampleTimestamp", void 0), this._networkStats = this._initStats(), this._lastSampleTimestamp = (0, i.now)()
        }
    }
}