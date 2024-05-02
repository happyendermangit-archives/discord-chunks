function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var i = n("668781"),
        r = n("812206"),
        a = n("835873"),
        s = n("592125"),
        o = n("430824"),
        l = n("496675"),
        u = n("594174"),
        d = n("585483"),
        _ = n("867176"),
        c = n("337682"),
        E = n("566620"),
        I = n("882347"),
        T = n("307091"),
        f = n("374065"),
        S = n("917107"),
        h = n("89425"),
        A = n("275920"),
        m = n("197386"),
        N = n("451576"),
        p = n("701488"),
        O = n("981631"),
        R = n("689938");
    async function C(e) {
        var t;
        let {
            targetApplicationId: n,
            currentEmbeddedApplication: C,
            locationObject: g,
            channelId: L,
            guildId: v,
            embeddedActivitiesManager: D,
            analyticsLocations: M
        } = e, y = o.default.getGuild(v), P = u.default.getCurrentUser();
        if (null == n) return !1;
        let U = null !== (t = r.default.getApplication(n)) && void 0 !== t ? t : await (0, T.default)(n, L);
        if (null == y && !(0, N.isPrivateChannelWithEnabledActivities)(L) || null == P || null == U) return !1;
        if (null == L) return d.ComponentDispatch.dispatch(O.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
            applicationId: n
        }), !1;
        let b = s.default.getChannel(L);
        if (null == b) return !1;
        let G = null != L ? (0, f.getEmbeddedActivityLaunchability)({
            channelId: L,
            ChannelStore: s.default,
            GuildStore: o.default,
            PermissionStore: l.default
        }) : f.EmbeddedActivityLaunchability.NO_CHANNEL;
        if (G !== f.EmbeddedActivityLaunchability.CAN_LAUNCH) return G === f.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, a.showActivitiesInvalidPermissionsAlert)() : G === f.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && i.default.show({
            title: R.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
            body: R.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
            hideActionSheet: !1
        }), !1;
        if (!await (0, I.confirmActivityLaunchChecks)({
                applicationId: U.id,
                application: U,
                channel: b,
                currentEmbeddedApplication: C,
                embeddedActivitiesManager: D,
                user: P
            })) return !1;
        let w = (0, S.default)(L),
            B = p.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(b.type);
        if (w) {
            if (!await (0, h.default)({
                    channelId: L,
                    bypassChangeModal: null != C
                })) return !1
        } else if (!(0, _.isActivitiesInTextEnabled)(b, !0, "handleStartEmbeddedActivity") || !B) return !1;
        return E.startEmbeddedActivity(L, U.id, M), (0, m.default)(v, L), (0, A.default)({
            type: O.AnalyticsGameOpenTypes.LAUNCH,
            userId: P.id,
            applicationId: U.id,
            locationObject: g,
            analyticsLocations: M
        }), c.markActivityUsed(U.id), !0
    }
}