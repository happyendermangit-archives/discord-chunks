function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsMessageInteractionForcedEphemeral: function() {
            return s
        },
        useShouldShowUserAppBetaBar: function() {
            return r
        }
    });
    var i = n("891189"),
        l = n("988721"),
        a = n("389153");

    function s(e, t, n) {
        let l = (0, a.useIsGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
        if (null == e.interactionMetadata || l) return !1;
        let s = e.interactionMetadata.authorizing_integration_owners;
        return 1 === Object.keys(s).length && i.ApplicationIntegrationType.USER_INSTALL in s
    }

    function r(e, t, n) {
        var i, s;
        let r = (0, l.useUserIndexState)(!0, !1),
            o = (0, a.isGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
        if (null == e || o) return !1;
        let u = null === (s = r.result) || void 0 === s ? void 0 : null === (i = s.sections[e.applicationId]) || void 0 === i ? void 0 : i.commands;
        return null != u && e.id in u
    }
}