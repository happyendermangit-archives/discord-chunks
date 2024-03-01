function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowGuildOnboardingUpsell: function() {
            return C
        },
        dismissedGuildOnboardingUpsell: function() {
            return g
        }
    }), n("222007");
    var s = n("866227"),
        i = n.n(s),
        r = n("151426"),
        a = n("801340"),
        u = n("10641"),
        l = n("872173"),
        o = n("374363"),
        d = n("305961"),
        c = n("299039"),
        f = n("696326"),
        E = n("380710"),
        _ = n("49111"),
        S = n("994428");
    let T = [r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
        p = [0, 1, 7];

    function C(e, t) {
        var n;
        let s = d.default.getGuilds(),
            r = c.default.entries(s).some(e => {
                let [t, n] = e, s = (0, E.isGuildOnboardingSettingsAvailable)(t), i = n.hasFeature(_.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                return s && i
            });
        if (r || !(0, E.isGuildOnboardingSettingsAvailable)(e)) return !1;
        let l = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
            S = null != l ? a.Timestamp.toDate(l) : void 0,
            C = null != S ? i().diff(S, "days") : null,
            g = T.indexOf(t);
        if (-1 === g) return !1;
        let h = null == C || C > p[g];
        if (!h) return !1;
        let A = T.find(e => !(0, u.isDismissibleContentDismissed)(e)) === t;
        if (!A) return !1;
        let {
            showLifecycleUpsells: m
        } = f.default.getCurrentConfig({
            guildId: e,
            location: "7f5b67_1"
        }, {
            disable: r || !(0, E.isGuildOnboardingSettingsAvailable)(e),
            autoTrackExposure: !0
        });
        return m
    }

    function g(e, t) {
        let n = a.Timestamp.now();
        l.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
            e.guildOnboardingUpsellDismissedAt = n
        }, l.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, u.markDismissibleContentAsDismissed)(t, {
            forceTrack: !0,
            dismissAction: S.ContentDismissActionType.AUTO,
            guildId: e
        })
    }
}