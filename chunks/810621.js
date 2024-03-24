function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var s = n("627445"),
        a = n.n(s),
        l = n("597755"),
        i = n.n(l),
        r = n("742270"),
        u = n("815157"),
        o = n("391679"),
        d = n("393414"),
        c = n("271938"),
        f = n("476108"),
        E = n("599110"),
        _ = n("65300"),
        I = n("49111");

    function h(e) {
        let t = function(e) {
                var t;
                let n = null === (t = i.os) || void 0 === t ? void 0 : t.family;
                if ("Android" === n || "iOS" === n) {
                    let t = c.default.getFingerprint(),
                        n = (0, u.generateAttemptId)();
                    return a(null != e, "generateAppPath: guildId cannot be null"), (0, u.default)((0, r.getInviteDynamicLinkTemplate)(e), {
                        utmSource: "verify_hub_email",
                        fingerprint: t,
                        attemptId: n
                    })
                }
                return "discord://"
            }(e),
            n = (0, u.parseDynamicLink)(t);
        null != n && E.default.track(I.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }), _.default.launch(t, e => {
            !e && (0, d.replaceWith)(f.default.fallbackRoute)
        })
    }
}