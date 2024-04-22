function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return h
        }
    });
    var n = s("512722"),
        a = s.n(n),
        l = s("525654"),
        i = s.n(l),
        r = s("39612"),
        u = s("271579"),
        o = s("756647"),
        d = s("703656"),
        c = s("314897"),
        f = s("896797"),
        E = s("626135"),
        I = s("954824"),
        _ = s("981631");

    function h(e) {
        let t = function(e) {
                var t;
                let s = null === (t = i().os) || void 0 === t ? void 0 : t.family;
                if ("Android" === s || "iOS" === s) {
                    let t = c.default.getFingerprint(),
                        s = (0, u.generateAttemptId)();
                    return a()(null != e, "generateAppPath: guildId cannot be null"), (0, u.default)((0, r.getInviteDynamicLinkTemplate)(e), {
                        utmSource: "verify_hub_email",
                        fingerprint: t,
                        attemptId: s
                    })
                }
                return "discord://"
            }(e),
            s = (0, u.parseDynamicLink)(t);
        null != s && E.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.maybeExtractId)(s.fingerprint),
            attempt_id: s.attemptId,
            source: s.utmSource
        }), I.default.launch(t, e => {
            !e && (0, d.replaceWith)(f.default.fallbackRoute)
        })
    }
}