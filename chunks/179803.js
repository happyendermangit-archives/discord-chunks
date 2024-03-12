function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowGuildOnboardingUpsell: function() {
            return h
        },
        dismissedGuildOnboardingUpsell: function() {
            return C
        }
    }), n("222007");
    var s = n("866227"),
        i = n.n(s),
        r = n("151426"),
        a = n("801340"),
        l = n("10641"),
        u = n("872173"),
        o = n("374363"),
        d = n("305961"),
        c = n("299039"),
        E = n("696326"),
        f = n("380710"),
        S = n("49111"),
        _ = n("994428");
    let T = [r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
        p = [0, 1, 7];

    function h(e, t) {
        var n;
        let s = d.default.getGuilds(),
            r = c.default.entries(s).some(e => {
                let [t, n] = e, s = (0, f.isGuildOnboardingSettingsAvailable)(t), i = n.hasFeature(S.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                return s && i
            });
        if (r || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
        let u = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
            _ = null != u ? a.Timestamp.toDate(u) : void 0,
            h = null != _ ? i().diff(_, "days") : null,
            C = T.indexOf(t);
        if (-1 === C) return !1;
        let g = null == h || h > p[C];
        if (!g) return !1;
        let A = T.find(e => !(0, l.isDismissibleContentDismissed)(e)) === t;
        if (!A) return !1;
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

    function C(e, t) {
        let n = a.Timestamp.now();
        u.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
            e.guildOnboardingUpsellDismissedAt = n
        }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, l.markDismissibleContentAsDismissed)(t, {
            forceTrack: !0,
            dismissAction: _.ContentDismissActionType.AUTO,
            guildId: e
        })
    }
}