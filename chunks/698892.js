function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        isNativeFetch: function() {
            return o
        },
        supportsFetch: function() {
            return a
        },
        supportsNativeFetch: function() {
            return s
        }
    });
    var r = n("529866");
    let i = (0, n("24716").getGlobalObject)();

    function a() {
        if (!("fetch" in i)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch (t) {
            return !1
        }
    }

    function o(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function s() {
        if (!a()) return !1;
        if (o(i.fetch)) return !0;
        let t = !1,
            e = i.document;
        if (e && "function" == typeof e.createElement) try {
            let n = e.createElement("iframe");
            n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = o(n.contentWindow.fetch)), e.head.removeChild(n)
        } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
        }
        return t
    }
}