function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("525654"),
        s = n.n(r),
        i = n("39612"),
        a = n("271579"),
        l = n("756647"),
        o = n("232567"),
        u = n("703656"),
        d = n("314897"),
        c = n("896797"),
        p = n("626135"),
        f = n("954824"),
        _ = n("981631");
    async function m(e) {
        var t, n;
        let r = null === (t = s().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === r || "iOS" === r) {
            let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
                r = (0, a.generateAttemptId)();
            if (null == t && d.default.isAuthenticated()) try {
                await (0, o.fetchCurrentUser)(), t = d.default.getId()
            } catch {}
            return (0, a.default)((0, i.getDefaultDynamicLinkTemplate)(), {
                utmSource: e,
                fingerprint: t,
                attemptId: r
            })
        }
        return "discord://"
    }
    async function g(e) {
        let t = await m(e),
            n = (0, a.parseDynamicLink)(t);
        null != n && p.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }), f.default.launch(t, e => {
            !e && (0, u.replaceWith)(c.default.fallbackRoute)
        })
    }
}