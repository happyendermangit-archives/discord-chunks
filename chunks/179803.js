function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowGuildOnboardingUpsell: function() {
            return C
        },
        dismissedGuildOnboardingUpsell: function() {
            return h
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
        E = n("696326"),
        f = n("380710"),
        S = n("49111"),
        _ = n("994428");
    let T = [r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
        p = [0, 1, 7];

    function C(e, t) {
        var n;
        let s = d.default.getGuilds(),
            r = c.default.entries(s).some(e => {
                let [t, n] = e, s = (0, f.isGuildOnboardingSettingsAvailable)(t), i = n.hasFeature(S.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                return s && i
            });
        if (r || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
        let l = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
            _ = null != l ? a.Timestamp.toDate(l) : void 0,
            C = null != _ ? i().diff(_, "days") : null,
            h = T.indexOf(t);
        if (-1 === h) return !1;
        let A = null == C || C > p[h];
        if (!A) return !1;
        let g = T.find(e => !(0, u.isDismissibleContentDismissed)(e)) === t;
        if (!g) return !1;
        let {
            showLifecycleUpsells: I
        } = E.default.getCurrentConfig({
            guildId: e,
            location: "7f5b67_1"
        }, {
            disable: r || !(0, f.isGuildOnboardingSettingsAvailable)(e),
            autoTrackExposure: !0
        });
        return I
    }

    function h(e, t) {
        let n = a.Timestamp.now();
        l.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
            e.guildOnboardingUpsellDismissedAt = n
        }, l.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, u.markDismissibleContentAsDismissed)(t, {
            forceTrack: !0,
            dismissAction: _.ContentDismissActionType.AUTO,
            guildId: e
        })
    }
}