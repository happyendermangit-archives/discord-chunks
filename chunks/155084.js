function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("222007"), n("424973");
    var i = n("615361"),
        s = n("872717"),
        r = n("773336"),
        a = n("827032"),
        o = n("49111");
    let l = new Set(["darwin", "linux", "win32", "ios", "android"]);
    var u = new class e {
        increment(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                {
                    name: n,
                    tags: s
                } = e,
                o = {
                    name: n,
                    tags: (0, a.getGlobalTagsArray)()
                };
            null != s && s.forEach(e => {
                o.tags.push(e)
            });
            let u = function() {
                if ((0, r.isWeb)()) return "web";
                {
                    let e = (0, r.getPlatformName)();
                    return l.has(e) ? e : null
                }
            }();
            null != u && o.tags.push("platform:".concat(u));
            let d = function() {
                let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                return i.ReleaseChannelsSets.ALL.has(e) ? e : null
            }();
            null != d && o.tags.push("release_channel:".concat(d)), this._metrics.push(o), (t || this._metrics.length >= 100) && this._flush()
        }
        _flush() {
            if (this._metrics.length > 0) {
                let e = [...this._metrics];
                s.default.post({
                    url: o.Endpoints.METRICS,
                    body: {
                        metrics: e,
                        client_info: {
                            built_at: "1709589420169",
                            build_number: "272036"
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