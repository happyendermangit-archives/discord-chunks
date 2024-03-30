function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("374550"),
        o = n("465059"),
        i = n("175303"),
        a = n("111540"),
        u = n("281767");

    function s(e) {
        var t = e.user,
            n = e.activity,
            s = e.application,
            l = e.channelId,
            c = e.currentUser,
            f = e.isEmbedded,
            d = e.ChannelStore,
            _ = e.GuildStore,
            E = e.GuildMemberCountStore,
            p = e.RelationshipStore,
            m = e.SelectedChannelStore,
            y = e.VoiceStateStore,
            I = e.PermissionStore,
            h = d.getChannel(l),
            O = (0, o.getIsActivitiesEnabledForCurrentPlatform)(h);
        if (null == t) return !1;
        if (f) return (0, i.default)({
            userId: t.id,
            activity: n,
            channelId: l,
            currentUser: c,
            application: s,
            isActivitiesEnabledForCurrentPlatform: O,
            ChannelStore: d,
            VoiceStateStore: y,
            PermissionStore: I,
            GuildStore: _
        }) === i.EmbeddedActivityJoinability.CAN_JOIN;
        if (!(0, r.isDesktop)()) return !1;
        if ((0, a.default)(n, u.ActivityFlags.PARTY_PRIVACY_FRIENDS) && p.isFriend(t.id)) return !0;
        if ((0, a.default)(n, u.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
            var T = d.getChannel(m.getVoiceChannelId());
            if (null == T || !y.isInChannel(T.id, t.id)) return !1;
            switch (T.type) {
                case u.ChannelTypes.DM:
                case u.ChannelTypes.GROUP_DM:
                    return !0
            }
            var S = _.getGuild(T.getGuildId());
            if (null == S || S.hasFeature(u.GuildFeatures.COMMUNITY)) return !1;
            var v = E.getMemberCount(S.id);
            return null != v && v < 100
        }
        return !1
    }
}