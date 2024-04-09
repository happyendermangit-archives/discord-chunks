function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dismissedGuildOnboardingUpsell: function() {
            return A
        },
        shouldShowGuildOnboardingUpsell: function() {
            return h
        }
    }), n("47120");
    var i = n("913527"),
        r = n.n(i),
        s = n("524437"),
        a = n("835913"),
        o = n("605236"),
        l = n("675478"),
        u = n("581883"),
        d = n("430824"),
        _ = n("709054"),
        c = n("866817"),
        E = n("637853"),
        I = n("981631"),
        T = n("921944");
    let f = [s.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, s.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, s.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
        S = [0, 1, 7];

    function h(e, t) {
        var n;
        let i = d.default.getGuilds(),
            s = _.default.entries(i).some(e => {
                let [t, n] = e, i = (0, E.isGuildOnboardingSettingsAvailable)(t), r = n.hasFeature(I.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                return i && r
            });
        if (s || !(0, E.isGuildOnboardingSettingsAvailable)(e)) return !1;
        let l = null === (n = u.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
            T = null != l ? a.Timestamp.toDate(l) : void 0,
            h = null != T ? r()().diff(T, "days") : null,
            A = f.indexOf(t);
        if (-1 === A || !(null == h || h > S[A]) || f.find(e => !(0, o.isDismissibleContentDismissed)(e)) !== t) return !1;
        let {
            showLifecycleUpsells: m
        } = c.default.getCurrentConfig({
            guildId: e,
            location: "7f5b67_1"
        }, {
            disable: s || !(0, E.isGuildOnboardingSettingsAvailable)(e),
            autoTrackExposure: !0
        });
        return m
    }

    function A(e, t) {
        let n = a.Timestamp.now();
        l.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
            e.guildOnboardingUpsellDismissedAt = n
        }, l.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, o.markDismissibleContentAsDismissed)(t, {
            forceTrack: !0,
            dismissAction: T.ContentDismissActionType.AUTO,
            guildId: e
        })
    }
}