function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsMessageInteractionForcedEphemeral: function() {
            return a
        },
        useShouldShowUserAppBetaBar: function() {
            return o
        }
    });
    var i = n("373793"),
        r = n("213459"),
        s = n("581364");

    function a(e, t, n) {
        let r = (0, s.useIsGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
        if (null == e.interactionMetadata || r) return !1;
        let a = e.interactionMetadata.authorizing_integration_owners;
        return 1 === Object.keys(a).length && i.ApplicationIntegrationType.USER_INSTALL in a
    }

    function o(e, t, n) {
        var i, a;
        let o = (0, r.useUserIndexState)(!0, !1),
            l = (0, s.isGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
        if (null == e || l) return !1;
        let u = null === (a = o.result) || void 0 === a ? void 0 : null === (i = a.sections[e.applicationId]) || void 0 === i ? void 0 : i.commands;
        return null != u && e.id in u
    }
}