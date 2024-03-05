function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackAppUIViewed: function() {
            return u
        }
    }), n("222007");
    var s = n("748820"),
        r = n("49671"),
        a = n("599110"),
        i = n("49111");
    let l = new class e {
        trackEvent(e, t) {
            let n = Date.now();
            requestIdleCallback(() => {
                a.default.track(e, {
                    ... function() {
                        var e, t, n;
                        let s = "--campaign-id=",
                            a = null !== (n = null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
                        for (let e of a)
                            if (e.startsWith(s)) return {
                                referrer: e.substr(s.length)
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
                        return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(n => {
                            let s = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                r = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                a = n.transferSize;
                            null != r && null != s && (e = !0, t.total_compressed_byte_size += s, t.total_uncompressed_byte_size += r, null != a && (t.total_uncompressed_byte_size += a), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += s, t.js_uncompressed_byte_size += r, null != a && (t.js_uncompressed_byte_size += a)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += s, t.css_uncompressed_byte_size += r, null != a && (t.css_uncompressed_byte_size += a))))
                        }), e ? t : {}
                    }(),
                    load_id: this.loadId,
                    screen_name: t,
                    duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
                })
            })
        }
        trackAppUIViewed(e) {
            !this.appUIViewed && (this.trackEvent(i.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
        }
        constructor() {
            this.loadId = (0, s.v4)(), this.appUIViewed = !1
        }
    };

    function u(e) {
        l.trackAppUIViewed(e)
    }
}