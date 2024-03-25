function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowGuildOnboardingUpsell: function() {
            return S
        },
        dismissedGuildOnboardingUpsell: function() {
            return I
        }
    }), n("222007");
    var i = n("866227"),
        s = n.n(i),
        l = n("151426"),
        a = n("801340"),
        r = n("10641"),
        o = n("872173"),
        u = n("374363"),
        d = n("305961"),
        c = n("299039"),
        f = n("696326"),
        T = n("380710"),
        E = n("49111"),
        h = n("994428");
    let _ = [l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
        p = [0, 1, 7];

    function S(e, t) {
        var n;
        let i = d.default.getGuilds(),
            l = c.default.entries(i).some(e => {
                let [t, n] = e, i = (0, T.isGuildOnboardingSettingsAvailable)(t), s = n.hasFeature(E.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                return i && s
            });
        if (l || !(0, T.isGuildOnboardingSettingsAvailable)(e)) return !1;
        let o = null === (n = u.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
            h = null != o ? a.Timestamp.toDate(o) : void 0,
            S = null != h ? s().diff(h, "days") : null,
            I = _.indexOf(t);
        if (-1 === I) return !1;
        let g = null == S || S > p[I];
        if (!g) return !1;
        let N = _.find(e => !(0, r.isDismissibleContentDismissed)(e)) === t;
        if (!N) return !1;
        let {
            showLifecycleUpsells: A
        } = f.default.getCurrentConfig({
            guildId: e,
            location: "7f5b67_1"
        }, {
            disable: l || !(0, T.isGuildOnboardingSettingsAvailable)(e),
            autoTrackExposure: !0
        });
        return A
    }

    function I(e, t) {
        let n = a.Timestamp.now();
        o.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
            e.guildOnboardingUpsellDismissedAt = n
        }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, r.markDismissibleContentAsDismissed)(t, {
            forceTrack: !0,
            dismissAction: h.ContentDismissActionType.AUTO,
            guildId: e
        })
    }
}