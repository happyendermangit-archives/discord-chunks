function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        trackAppUIViewed: function() {
            return d
        }
    }), i("47120");
    var s = i("153832"),
        n = i("579806"),
        l = i("626135"),
        r = i("981631");

    function a(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    let o = new class e {
        trackEvent(e, t) {
            let i = Date.now();
            requestIdleCallback(() => {
                l.default.track(e, {
                    ... function() {
                        var e, t, i;
                        let s = "--campaign-id=";
                        for (let l of null !== (i = null === n.default || void 0 === n.default ? void 0 : null === (t = n.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== i ? i : [])
                            if (l.startsWith(s)) return {
                                referrer: l.substr(s.length)
                            };
                        return {}
                    }(),
                    ... function() {
                        let e = !1,
                            t = {
                                total_compressed_byte_size: 0,
                                total_uncompressed_byte_size: 0,
                                total_transfer_byte_size: 0,
                                js_compressed_byte_size: 0,
                                js_uncompressed_byte_size: 0,
                                js_transfer_byte_size: 0,
                                css_compressed_byte_size: 0,
                                css_uncompressed_byte_size: 0,
                                css_transfer_byte_size: 0
                            };
                        return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(i => {
                            let s = null != i.encodedBodySize ? i.encodedBodySize : i.decodedBodySize,
                                n = null != i.decodedBodySize ? i.decodedBodySize : i.encodedBodySize,
                                l = i.transferSize;
                            null != n && null != s && (e = !0, t.total_compressed_byte_size += s, t.total_uncompressed_byte_size += n, null != l && (t.total_uncompressed_byte_size += l), "resource" === i.entryType && ("script" === i.initiatorType && null != i.name && null != i.name.match(/\.js/) && (t.js_compressed_byte_size += s, t.js_uncompressed_byte_size += n, null != l && (t.js_uncompressed_byte_size += l)), "link" === i.initiatorType && null != i.name && null != i.name.match(/\.css/) && (t.css_compressed_byte_size += s, t.css_uncompressed_byte_size += n, null != l && (t.css_uncompressed_byte_size += l))))
                        }), e ? t : {}
                    }(),
                    load_id: this.loadId,
                    screen_name: t,
                    duration_ms_since_app_opened: i - window.GLOBAL_ENV.HTML_TIMESTAMP
                })
            })
        }
        trackAppUIViewed(e) {
            !this.appUIViewed && (this.trackEvent(r.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
        }
        constructor() {
            a(this, "loadId", (0, s.v4)()), a(this, "appUIViewed", !1)
        }
    };

    function d(e) {
        o.trackAppUIViewed(e)
    }
}