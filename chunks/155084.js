function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007"), n("424973");
    var i, s, r = n("615361"),
        a = n("872717"),
        o = n("773336"),
        l = n("82087"),
        u = n("827032"),
        d = n("49111");
    let c = new Set(["darwin", "linux", "win32", "ios", "android"]);
    (s = i || (i = {})).COUNT = "count", s.DISTRIBUTION = "distribution";
    var f = new class e {
        _getMetricWithDefaults(e, t) {
            let {
                name: n,
                tags: i
            } = e, s = {
                name: n,
                type: t,
                tags: (0, u.getGlobalTagsArray)()
            };
            null != i && i.forEach(e => {
                s.tags.push(e)
            });
            let a = function() {
                if ((0, o.isWeb)()) return "web";
                {
                    let e = (0, o.getPlatformName)();
                    return c.has(e) ? e : null
                }
            }();
            null != a && s.tags.push("platform:".concat(a));
            let l = function() {
                let e = window.GLOBAL_ENV.RELEASE_CHANNEL;
                return null != e && r.ReleaseChannelsSets.ALL.has(e) ? e : null
            }();
            return null != l && s.tags.push("release_channel:".concat(l)), s
        }
        increment(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this._getMetricWithDefaults(e, "count");
            this._metrics.push(n), (t || this._metrics.length >= 100) && this._flush()
        }
        distribution(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = {
                    ...this._getMetricWithDefaults(e, "distribution"),
                    value: t
                };
            this._metrics.push(i), (n || this._metrics.length >= 100) && this._flush()
        }
        _flush() {
            if (this._metrics.length > 0) {
                let e = [...this._metrics];
                a.default.post({
                    url: (0, l.isMetricsEndpointV2Enabled)("monitoring-agent") ? d.Endpoints.METRICS_V2 : d.Endpoints.METRICS,
                    body: {
                        metrics: e,
                        client_info: {
                            built_at: "1710361530898",
                            build_number: "274883"
                        }
                    },
                    retries: 1
                }).catch(t => {
                    this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                })
            }
            this._metrics = []
        }
        constructor() {
            this._metrics = [], this._intervalId = setInterval(() => {
                this._flush()
            }, 12e4)
        }
    }
}