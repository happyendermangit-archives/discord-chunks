function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("849680"),
        o = n("649310"),
        i = n("281767");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null != e ? Math.round(e) : t
    }
    var l = function() {
        var e, t, n;

        function l() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), u(this, "_networkStats", void 0), u(this, "_lastSampleTimestamp", void 0), this._networkStats = this._initStats(), this._lastSampleTimestamp = (0, r.now)()
        }
        return e = l, t = [{
            key: "_initStats",
            value: function() {
                var e = {
                    effectiveConnectionSpeedBuckets: {},
                    connectionTypeBuckets: {}
                };
                return Object.values(i.NetworkConnectionTypes).forEach(function(t) {
                    e.connectionTypeBuckets[t] = 0
                }), Object.values(i.NetworkConnectionSpeeds).forEach(function(t) {
                    e.effectiveConnectionSpeedBuckets[t] = 0
                }), e
            }
        }, {
            key: "getStats",
            value: function() {
                var e = this._networkStats;
                return {
                    duration_connection_type_wifi: s(e.connectionTypeBuckets[i.NetworkConnectionTypes.WIFI]),
                    duration_connection_type_cellular: s(e.connectionTypeBuckets[i.NetworkConnectionTypes.CELLULAR]),
                    duration_connection_type_ethernet: s(e.connectionTypeBuckets[i.NetworkConnectionTypes.ETHERNET]),
                    duration_connection_type_bluetooth: s(e.connectionTypeBuckets[i.NetworkConnectionTypes.BLUETOOTH]),
                    duration_connection_type_other: s(e.connectionTypeBuckets[i.NetworkConnectionTypes.OTHER]),
                    duration_connection_type_unknown: s(e.connectionTypeBuckets[i.NetworkConnectionTypes.UNKNOWN]),
                    duration_connection_type_none: s(e.connectionTypeBuckets[i.NetworkConnectionTypes.NONE]),
                    duration_effective_connection_speed_2g: s(e.effectiveConnectionSpeedBuckets[i.NetworkConnectionSpeeds.TWO_G]),
                    duration_effective_connection_speed_3g: s(e.effectiveConnectionSpeedBuckets[i.NetworkConnectionSpeeds.THREE_G]),
                    duration_effective_connection_speed_4g: s(e.effectiveConnectionSpeedBuckets[i.NetworkConnectionSpeeds.FOUR_G]),
                    duration_effective_connection_speed_5g: s(e.effectiveConnectionSpeedBuckets[i.NetworkConnectionSpeeds.FIVE_G]),
                    duration_effective_connection_speed_unknown: s(e.effectiveConnectionSpeedBuckets[i.NetworkConnectionSpeeds.UNKNOWN])
                }
            }
        }, {
            key: "incrementNetworkStats",
            value: function(e) {
                var t = (e - this._lastSampleTimestamp) / 1e3,
                    n = o.default.getEffectiveConnectionSpeed();
                n === i.NetworkConnectionSpeeds.SLOW_TWO_G && (n = i.NetworkConnectionSpeeds.TWO_G);
                var r = o.default.getType();
                r === i.NetworkConnectionTypes.WIMAX && (r = i.NetworkConnectionTypes.WIFI), this._networkStats.effectiveConnectionSpeedBuckets[n] += t, this._networkStats.connectionTypeBuckets[r] += t, this._lastSampleTimestamp = e
            }
        }], a(e.prototype, t), n && a(e, n), l
    }()
}