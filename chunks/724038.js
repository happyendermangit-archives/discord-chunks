function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var s = n("597755"),
        r = n.n(s),
        a = n("742270"),
        i = n("815157"),
        l = n("391679"),
        u = n("327037"),
        o = n("393414"),
        c = n("271938"),
        d = n("476108"),
        f = n("599110"),
        p = n("65300"),
        m = n("49111");
    async function g(e) {
        var t, n;
        let s = null === (t = r.os) || void 0 === t ? void 0 : t.family;
        if ("Android" === s || "iOS" === s) {
            let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
                s = (0, i.generateAttemptId)();
            if (null == t && c.default.isAuthenticated()) try {
                await (0, u.fetchCurrentUser)(), t = c.default.getId()
            } catch {}
            return (0, i.default)((0, a.getDefaultDynamicLinkTemplate)(), {
                utmSource: e,
                fingerprint: t,
                attemptId: s
            })
        }
        return "discord://"
    }
    async function _(e) {
        let t = await g(e),
            n = (0, i.parseDynamicLink)(t);
        null != n && f.default.track(m.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }), p.default.launch(t, e => {
            !e && (0, o.replaceWith)(d.default.fallbackRoute)
        })
    }
}