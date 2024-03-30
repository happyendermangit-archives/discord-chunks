function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addItemToEnvelope: function() {
            return s
        },
        createAttachmentEnvelopeItem: function() {
            return p
        },
        createEnvelope: function() {
            return o
        },
        createEventEnvelopeHeaders: function() {
            return m
        },
        envelopeContainsItemType: function() {
            return c
        },
        envelopeItemTypeToDataCategory: function() {
            return _
        },
        forEachEnvelopeItem: function() {
            return u
        },
        getSdkMetadataForEnvelopeHeader: function() {
            return g
        },
        parseEnvelope: function() {
            return f
        },
        serializeEnvelope: function() {
            return d
        }
    });
    var r = n("177668"),
        i = n("10674"),
        a = n("442853");

    function o(t, e = []) {
        return [t, e]
    }

    function s(t, e) {
        let [n, r] = t;
        return [n, [...r, e]]
    }

    function u(t, e) {
        for (let n of t[1]) {
            let t = n[0].type;
            if (e(n, t)) return !0
        }
        return !1
    }

    function c(t, e) {
        return u(t, (t, n) => e.includes(n))
    }

    function l(t, e) {
        return (e || new TextEncoder).encode(t)
    }

    function d(t, e) {
        let [n, r] = t, a = JSON.stringify(n);

        function o(t) {
            "string" == typeof a ? a = "string" == typeof t ? a + t : [l(a, e), t] : a.push("string" == typeof t ? l(t, e) : t)
        }
        for (let t of r) {
            let [e, n] = t;
            if (o(`
${JSON.stringify(e)}
`), "string" == typeof n || n instanceof Uint8Array) o(n);
            else {
                let t;
                try {
                    t = JSON.stringify(n)
                } catch (e) {
                    t = JSON.stringify((0, i.normalize)(n))
                }
                o(t)
            }
        }
        return "string" == typeof a ? a : function(t) {
            let e = t.reduce((t, e) => t + e.length, 0),
                n = new Uint8Array(e),
                r = 0;
            for (let e of t) n.set(e, r), r += e.length;
            return n
        }(a)
    }

    function f(t, e, n) {
        let r = "string" == typeof t ? e.encode(t) : t;

        function i(t) {
            let e = r.subarray(0, t);
            return r = r.subarray(t + 1), e
        }

        function a() {
            let t = r.indexOf(10);
            return t < 0 && (t = r.length), JSON.parse(n.decode(i(t)))
        }
        let o = a(),
            s = [];
        for (; r.length;) {
            let t = a(),
                e = "number" == typeof t.length ? t.length : void 0;
            s.push([t, e ? i(e) : a()])
        }
        return [o, s]
    }

    function p(t, e) {
        let n = "string" == typeof t.data ? l(t.data, e) : t.data;
        return [(0, a.dropUndefinedKeys)({
            type: "attachment",
            length: n.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), n]
    }
    let h = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor"
    };

    function _(t) {
        return h[t]
    }

    function g(t) {
        if (!t || !t.sdk) return;
        let {
            name: e,
            version: n
        } = t.sdk;
        return {
            name: e,
            version: n
        }
    }

    function m(t, e, n, i) {
        let o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!n && {
                dsn: (0, r.dsnToString)(i)
            },
            ...o && {
                trace: (0, a.dropUndefinedKeys)({
                    ...o
                })
            }
        }
    }
}