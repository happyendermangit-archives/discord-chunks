function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackUserProfileAction: function() {
            return N
        },
        trackUserProfileActivityJoined: function() {
            return p
        },
        trackUserProfileBadgeHovered: function() {
            return C
        },
        trackUserProfileBadgePressed: function() {
            return O
        },
        trackUserProfileRecentGamesViewed: function() {
            return R
        }
    }), n("653041");
    var i = n("367907"),
        r = n("271383"),
        a = n("158776"),
        s = n("699516"),
        o = n("800599"),
        l = n("594174"),
        u = n("626135"),
        d = n("768581"),
        _ = n("621853"),
        c = n("318661"),
        E = n("228168"),
        I = n("981631"),
        T = n("231338");
    let f = e => {
            let {
                user: t,
                userProfile: n,
                guildMember: i,
                guildMemberProfile: r
            } = e, a = null != n ? n : r, s = [];
            if ((null == i ? void 0 : i.nick) && s.push(E.TrackUserProfileProperties.NICKNAME), (null == a ? void 0 : a.pronouns) && s.push(E.TrackUserProfileProperties.PRONOUNS), null == t ? void 0 : t.avatar) {
                let e = (0, d.isAnimatedIconHash)(null == t ? void 0 : t.avatar);
                s.push(e ? E.TrackUserProfileProperties.ANIMATED_AVATAR : E.TrackUserProfileProperties.AVATAR)
            }
            if (null == a ? void 0 : a.banner) {
                let e = (0, d.isAnimatedIconHash)(null == a ? void 0 : a.banner);
                s.push(e ? E.TrackUserProfileProperties.ANIMATED_BANNER : E.TrackUserProfileProperties.BANNER)
            }
            return (null == a ? void 0 : a.bio) && s.push(E.TrackUserProfileProperties.BIO), (null == a ? void 0 : a.themeColors) != null && void 0 !== a.themeColors.find(e => null !== e) && s.push(E.TrackUserProfileProperties.THEME), (null == t ? void 0 : t.avatarDecoration) != null && s.push(E.TrackUserProfileProperties.AVATAR_DECORATION), (null == a ? void 0 : a.profileEffectId) != null && s.push(E.TrackUserProfileProperties.PROFILE_EFFECT), s
        },
        S = e => {
            let t = a.default.getStatus(e),
                n = a.default.isMobileOnline(e);
            return t === T.StatusTypes.ONLINE && n ? "".concat(t, "-mobile") : t === T.StatusTypes.ONLINE ? "".concat(t, "-desktop") : t
        },
        h = e => null == e ? e : Object.keys(I.ActivityTypes)[Object.values(I.ActivityTypes).indexOf(e)],
        A = e => {
            var t, n;
            let {
                layout: i,
                userId: s,
                guildId: o
            } = e, u = l.default.getUser(s);
            if (null == u) return {};
            let d = (0, c.getDisplayProfile)(null == u ? void 0 : u.id, o),
                _ = null != o ? r.default.getMember(o, null == u ? void 0 : u.id) : null;
            return {
                profile_layout: i,
                profile_properties: f({
                    user: u,
                    userProfile: null == d ? void 0 : d._userProfile
                }),
                guild_profile_properties: f({
                    guildMember: _,
                    guildMemberProfile: null == d ? void 0 : d._guildMemberProfile
                }),
                profile_activity_types: a.default.getActivities(u.id).map(e => {
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
                user_status: S(u.id)
            }
        },
        m = e => {
            var t, n;
            return null == e ? {} : {
                related_user_id: e,
                relationship_type: s.default.getRelationshipType(e),
                related_since: s.default.getSince(e),
                num_mutual_friends: _.default.getMutualFriendsCount(e),
                num_mutual_guilds: null === (t = _.default.getMutualGuilds(e)) || void 0 === t ? void 0 : t.length,
                affinity: null === (n = o.default.getUserAffinity(e)) || void 0 === n ? void 0 : n.affinity
            }
        },
        N = e => {
            let {
                userId: t,
                guildId: n,
                channelId: r,
                messageId: a,
                roleId: s,
                analyticsLocations: o,
                layout: l,
                action: d,
                section: _
            } = e;
            u.default.track(I.AnalyticEvents.USER_PROFILE_ACTION, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
                ...A({
                    layout: l,
                    userId: t,
                    guildId: n
                }),
                ...m(t),
                location_stack: o,
                profile_action: d,
                profile_section: _,
                source_message_id: a,
                source_role_id: s
            })
        },
        p = e => {
            let {
                userId: t,
                guildId: n,
                channelId: r,
                analyticsLocations: a,
                layout: s,
                activity: o,
                voiceChannelId: l
            } = e;
            u.default.track(I.AnalyticEvents.USER_PROFILE_ACTIVITY_JOINED, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
                ...A({
                    layout: s,
                    userId: t,
                    guildId: n
                }),
                ...m(t),
                location_stack: a,
                activity_type: null != l ? "VOICE" : h(null == o ? void 0 : o.type),
                activity_name: null == o ? void 0 : o.name,
                activity_platform: null == o ? void 0 : o.platform,
                activity_session_id: null == o ? void 0 : o.session_id,
                application_id: null == o ? void 0 : o.application_id,
                voice_channel_id: l
            })
        },
        O = e => {
            let {
                userId: t,
                guildId: n,
                channelId: r,
                analyticsLocations: a,
                layout: s,
                badge: o
            } = e;
            u.default.track(I.AnalyticEvents.USER_PROFILE_BADGE_PRESSED, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
                ...A({
                    layout: s,
                    userId: t,
                    guildId: n
                }),
                ...m(t),
                location_stack: a,
                badge: o
            })
        },
        R = e => {
            let {
                userId: t,
                guildId: n,
                channelId: r,
                analyticsLocations: a,
                layout: s,
                applicationIds: o,
                newApplicationIds: l,
                sharedApplicationIds: d
            } = e;
            u.default.track(I.AnalyticEvents.USER_PROFILE_RECENT_GAMES_VIEWED, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
                ...A({
                    layout: s,
                    userId: t,
                    guildId: n
                }),
                ...m(t),
                location_stack: a,
                profile_application_ids: o,
                profile_new_applications_ids: l,
                profile_shared_applications_ids: d
            })
        },
        C = e => {
            let {
                userId: t,
                guildId: n,
                channelId: r,
                analyticsLocations: a,
                layout: s,
                badge: o
            } = e;
            u.default.track(I.AnalyticEvents.USER_PROFILE_BADGE_HOVERED, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
                ...A({
                    layout: s,
                    userId: t,
                    guildId: n
                }),
                ...m(t),
                location_stack: a,
                badge: o
            })
        }
}