function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, s = n("404097"),
        a = n("544891"),
        o = n("358085"),
        l = n("747268"),
        u = n("250471"),
        d = n("20186"),
        _ = n("981631");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = new Set(["darwin", "linux", "win32", "ios", "android"]);
    (r = i || (i = {})).COUNT = "count", r.DISTRIBUTION = "distribution";
    t.default = new class e {
        _getMetricWithDefaults(e, t) {
            let {
                name: n,
                tags: i
            } = e, r = {
                name: n,
                type: t,
                tags: (0, d.getGlobalTagsArray)()
            };
            null != i && i.forEach(e => {
                r.tags.push(e)
            });
            let a = function() {
                if ((0, o.isWeb)()) return "web";
                {
                    let e = (0, o.getPlatformName)();
                    return E.has(e) ? e : null
                }
            }();
            null != a && r.tags.push("platform:".concat(a));
            let u = function() {
                let e = l.CurrentReleaseChannel;
                return null != e && s.ReleaseChannelsSets.ALL.has(e) ? e : null
            }();
            return null != u && r.tags.push("release_channel:".concat(u)), r
        }
        increment(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this._getMetricWithDefaults(e, "count");
            this._metrics.push(n), (t || this._metrics.length >= 100) && this._flush()
        }
        distribution(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!(0, u.isMetricsEndpointV2Enabled)("distribution-metric")) return;
            let i = {
                ...this._getMetricWithDefaults(e, "distribution"),
                value: t
            };
            this._metrics.push(i), (n || this._metrics.length >= 100) && this._flush()
        }
        _flush() {
            if (this._metrics.length > 0) {
                let e = [...this._metrics];
                a.HTTP.post({
                    url: (0, u.isMetricsEndpointV2Enabled)("monitoring-agent") ? _.Endpoints.METRICS_V2 : _.Endpoints.METRICS,
                    body: {
                        metrics: e,
                        client_info: {
                            built_at: "1712868370293",
                            build_number: "283899"
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
            c(this, "_metrics", void 0), c(this, "_intervalId", void 0), this._metrics = [], this._intervalId = setInterval(() => {
                this._flush()
            }, 12e4)
        }
    }
}