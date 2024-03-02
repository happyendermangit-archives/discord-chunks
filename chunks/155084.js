function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return I
        }
    }), E("222007"), E("424973");
    var t = E("615361"),
        o = E("872717"),
        n = E("773336"),
        r = E("827032"),
        i = E("49111");
    let a = new Set(["darwin", "linux", "win32", "ios", "android"]);
    var I = new class e {
        increment(e) {
            let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                {
                    name: E,
                    tags: o
                } = e,
                i = {
                    name: E,
                    tags: (0, r.getGlobalTagsArray)()
                };
            null != o && o.forEach(e => {
                i.tags.push(e)
            });
            let I = function() {
                if ((0, n.isWeb)()) return "web";
                {
                    let e = (0, n.getPlatformName)();
                    return a.has(e) ? e : null
                }
            }();
            null != I && i.tags.push("platform:".concat(I));
            let s = function() {
                let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                return t.ReleaseChannelsSets.ALL.has(e) ? e : null
            }();
            null != s && i.tags.push("release_channel:".concat(s)), this._metrics.push(i), (_ || this._metrics.length >= 100) && this._flush()
        }
        _flush() {
            if (this._metrics.length > 0) {
                let e = [...this._metrics];
                o.default.post({
                    url: i.Endpoints.METRICS,
                    body: {
                        metrics: e,
                        client_info: {
                            built_at: "1709349896501",
                            build_number: "271779"
                        }
                    },
                    retries: 1
                }).catch(_ => {
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