function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        trackAppUIViewed: function() {
            return o
        }
    }), l("47120");
    var n = l("153832"),
        a = l("579806"),
        i = l("626135"),
        s = l("981631");

    function r(e, t, l) {
        return t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = l, e
    }
    let d = new class e {
        trackEvent(e, t) {
            let l = Date.now();
            requestIdleCallback(() => {
                i.default.track(e, {
                    ... function() {
                        var e, t, l;
                        let n = "--campaign-id=";
                        for (let i of null !== (l = null === a.default || void 0 === a.default ? void 0 : null === (t = a.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== l ? l : [])
                            if (i.startsWith(n)) return {
                                referrer: i.substr(n.length)
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
                        return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(l => {
                            let n = null != l.encodedBodySize ? l.encodedBodySize : l.decodedBodySize,
                                a = null != l.decodedBodySize ? l.decodedBodySize : l.encodedBodySize,
                                i = l.transferSize;
                            null != a && null != n && (e = !0, t.total_compressed_byte_size += n, t.total_uncompressed_byte_size += a, null != i && (t.total_uncompressed_byte_size += i), "resource" === l.entryType && ("script" === l.initiatorType && null != l.name && null != l.name.match(/\.js/) && (t.js_compressed_byte_size += n, t.js_uncompressed_byte_size += a, null != i && (t.js_uncompressed_byte_size += i)), "link" === l.initiatorType && null != l.name && null != l.name.match(/\.css/) && (t.css_compressed_byte_size += n, t.css_uncompressed_byte_size += a, null != i && (t.css_uncompressed_byte_size += i))))
                        }), e ? t : {}
                    }(),
                    load_id: this.loadId,
                    screen_name: t,
                    duration_ms_since_app_opened: l - window.GLOBAL_ENV.HTML_TIMESTAMP
                })
            })
        }
        trackAppUIViewed(e) {
            !this.appUIViewed && (this.trackEvent(s.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
        }
        constructor() {
            r(this, "loadId", (0, n.v4)()), r(this, "appUIViewed", !1)
        }
    };

    function o(e) {
        d.trackAppUIViewed(e)
    }
}