function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        extractTraceparentData: function() {
            return o
        },
        generateSentryTraceHeader: function() {
            return u
        },
        tracingContextFromHeaders: function() {
            return s
        }
    });
    var r = n("545459"),
        i = n("862315");
    let a = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

    function o(t) {
        let e;
        if (!t) return;
        let n = t.match(a);
        if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
            traceId: n[1],
            parentSampled: e,
            parentSpanId: n[2]
        }
    }

    function s(t, e) {
        let n = o(t),
            a = (0, r.baggageHeaderToDynamicSamplingContext)(e),
            {
                traceId: s,
                parentSpanId: u,
                parentSampled: l
            } = n || {},
            c = {
                traceId: s || (0, i.uuid4)(),
                spanId: (0, i.uuid4)().substring(16),
                sampled: void 0 !== l && l
            };
        return u && (c.parentSpanId = u), a && (c.dsc = a), {
            traceparentData: n,
            dynamicSamplingContext: a,
            propagationContext: c
        }
    }

    function u(t = (0, i.uuid4)(), e = (0, i.uuid4)().substring(16), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
    }
}