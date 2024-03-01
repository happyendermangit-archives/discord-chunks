function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        isNativeFetch: function() {
            return o
        },
        supportsFetch: function() {
            return s
        },
        supportsNativeFetch: function() {
            return c
        }
    }), n("101997");
    var r = n("587254"),
        i = n("232945");
    let a = (0, i.getGlobalObject)();

    function s() {
        if (!("fetch" in a)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch (t) {
            return !1
        }
    }

    function o(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function c() {
        if (!s()) return !1;
        if (o(a.fetch)) return !0;
        let t = !1,
            e = a.document;
        if (e && "function" == typeof e.createElement) try {
            let n = e.createElement("iframe");
            n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = o(n.contentWindow.fetch)), e.head.removeChild(n)
        } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
        }
        return t
    }
}