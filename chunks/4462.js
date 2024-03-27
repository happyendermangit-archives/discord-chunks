function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackUserProfileAction: function() {
            return C
        },
        trackUserProfileActivityJoined: function() {
            return T
        },
        trackUserProfileBadgePressed: function() {
            return _
        }
    }), n("424973");
    var i = n("716241"),
        l = n("26989"),
        a = n("824563"),
        s = n("27618"),
        r = n("843823"),
        o = n("697218"),
        u = n("599110"),
        d = n("315102"),
        c = n("713135"),
        f = n("217513"),
        m = n("590456"),
        p = n("49111"),
        h = n("843455");
    let x = e => {
            let {
                user: t,
                userProfile: n,
                guildMember: i,
                guildMemberProfile: l
            } = e, a = null != n ? n : l, s = [];
            if ((null == i ? void 0 : i.nick) && s.push(m.TrackUserProfileProperties.NICKNAME), (null == a ? void 0 : a.pronouns) && s.push(m.TrackUserProfileProperties.PRONOUNS), null == t ? void 0 : t.avatar) {
                let e = (0, d.isAnimatedIconHash)(null == t ? void 0 : t.avatar);
                s.push(e ? m.TrackUserProfileProperties.ANIMATED_AVATAR : m.TrackUserProfileProperties.AVATAR)
            }
            if (null == a ? void 0 : a.banner) {
                let e = (0, d.isAnimatedIconHash)(null == a ? void 0 : a.banner);
                s.push(e ? m.TrackUserProfileProperties.ANIMATED_BANNER : m.TrackUserProfileProperties.BANNER)
            }
            return (null == a ? void 0 : a.bio) && s.push(m.TrackUserProfileProperties.BIO), (null == a ? void 0 : a.themeColors) != null && void 0 !== a.themeColors.find(e => null !== e) && s.push(m.TrackUserProfileProperties.THEME), (null == t ? void 0 : t.avatarDecoration) != null && s.push(m.TrackUserProfileProperties.AVATAR_DECORATION), (null == a ? void 0 : a.profileEffectId) != null && s.push(m.TrackUserProfileProperties.PROFILE_EFFECT), s
        },
        E = e => {
            let t = a.default.getStatus(e),
                n = a.default.isMobileOnline(e);
            return t === h.StatusTypes.ONLINE && n ? "".concat(t, "-mobile") : t === h.StatusTypes.ONLINE ? "".concat(t, "-desktop") : t
        },
        y = e => "string" == typeof e || null == e ? e : Object.keys(p.ActivityTypes)[Object.values(p.ActivityTypes).indexOf(e)],
        g = e => {
            var t, n;
            let {
                layout: i,
                userId: s,
                guildId: r
            } = e, u = o.default.getUser(s);
            if (null == u) return {};
            let d = (0, f.getDisplayProfile)(null == u ? void 0 : u.id, r),
                c = null != r ? l.default.getMember(r, null == u ? void 0 : u.id) : null;
            return {
                profile_layout: i,
                profile_properties: x({
                    user: u,
                    userProfile: null == d ? void 0 : d._userProfile
                }),
                guild_profile_properties: x({
                    guildMember: c,
                    guildMemberProfile: null == d ? void 0 : d._guildMemberProfile
                }),
                profile_activity_types: a.default.getActivities(u.id, r).map(e => {
                    let {
                        type: t
                    } = e;
                    return t
                }).filter(e => void 0 !== e),
                profile_badges: null == d ? void 0 : null === (t = d.getBadges()) || void 0 === t ? void 0 : t.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }),
                avatar_decoration_sku_id: null === (n = u.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
                profile_effect_sku_id: null == d ? void 0 : d.profileEffectId,
                user_status: E(u.id)
            }
        },
        S = e => {
            var t, n;
            return null == e ? {} : {
                related_user_id: e,
                relationship_type: s.default.getRelationshipType(e),
                related_since: s.default.getSince(e),
                num_mutual_friends: c.default.getMutualFriendsCount(e),
                num_mutual_guilds: null === (t = c.default.getMutualGuilds(e)) || void 0 === t ? void 0 : t.length,
                affinity: null === (n = r.default.getUserAffinity(e)) || void 0 === n ? void 0 : n.affinity
            }
        },
        C = e => {
            let {
                userId: t,
                guildId: n,
                channelId: l,
                messageId: a,
                roleId: s,
                analyticsLocations: r,
                layout: o,
                action: d,
                section: c
            } = e;
            u.default.track(p.AnalyticEvents.USER_PROFILE_ACTION, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(l),
                ...g({
                    layout: o,
                    userId: t,
                    guildId: n
                }),
                ...S(t),
                location_stack: r,
                profile_action: d,
                profile_section: c,
                source_message_id: a,
                source_role_id: s
            })
        },
        T = e => {
            let {
                userId: t,
                guildId: n,
                channelId: l,
                analyticsLocations: a,
                layout: s,
                activityType: r,
                applicationId: o,
                voiceChannelId: d
            } = e;
            u.default.track(p.AnalyticEvents.USER_PROFILE_ACTIVITY_JOINED, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(l),
                ...g({
                    layout: s,
                    userId: t,
                    guildId: n
                }),
                ...S(t),
                location_stack: a,
                activity_type: y(r),
                application_id: o,
                voice_channel_id: d
            })
        },
        _ = e => {
            let {
                userId: t,
                guildId: n,
                channelId: l,
                analyticsLocations: a,
                layout: s,
                badge: r
            } = e;
            u.default.track(p.AnalyticEvents.USER_PROFILE_BADGE_PRESSED, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(l),
                ...g({
                    layout: s,
                    userId: t,
                    guildId: n
                }),
                ...S(t),
                location_stack: a,
                badge: r
            })
        }
}