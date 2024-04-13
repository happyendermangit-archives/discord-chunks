function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var s = n("512722"),
        a = n.n(s),
        i = n("525654"),
        l = n.n(i),
        r = n("39612"),
        u = n("271579"),
        o = n("756647"),
        d = n("703656"),
        c = n("314897"),
        f = n("896797"),
        E = n("626135"),
        I = n("954824"),
        h = n("981631");

    function _(e) {
        let t = function(e) {
                var t;
                let n = null === (t = l().os) || void 0 === t ? void 0 : t.family;
                if ("Android" === n || "iOS" === n) {
                    let t = c.default.getFingerprint(),
                        n = (0, u.generateAttemptId)();
                    return a()(null != e, "generateAppPath: guildId cannot be null"), (0, u.default)((0, r.getInviteDynamicLinkTemplate)(e), {
                        utmSource: "verify_hub_email",
                        fingerprint: t,
                        attemptId: n
                    })
                }
                return "discord://"
            }(e),
            n = (0, u.parseDynamicLink)(t);
        null != n && E.default.track(h.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }), I.default.launch(t, e => {
            !e && (0, d.replaceWith)(f.default.fallbackRoute)
        })
    }
}