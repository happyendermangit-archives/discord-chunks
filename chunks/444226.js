function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackUserProfileAction: function() {
            return S
        },
        trackUserProfileActivityJoined: function() {
            return v
        },
        trackUserProfileBadgePressed: function() {
            return g
        }
    });
    var r = n("140817"),
        o = n("957808"),
        i = n("868447"),
        a = n("776982"),
        u = n("92704"),
        s = n("208454"),
        l = n("870331"),
        c = n("299529"),
        f = n("903716"),
        d = n("794173"),
        _ = n("731616"),
        E = n("281767"),
        p = n("563090");

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function y(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }
    var I = function(e) {
            var t = e.user,
                n = e.userProfile,
                r = e.guildMember,
                o = e.guildMemberProfile,
                i = null != n ? n : o,
                a = [];
            if ((null == r ? void 0 : r.nick) && a.push(_.TrackUserProfileProperties.NICKNAME), (null == i ? void 0 : i.pronouns) && a.push(_.TrackUserProfileProperties.PRONOUNS), null == t ? void 0 : t.avatar) {
                var u = (0, c.isAnimatedIconHash)(null == t ? void 0 : t.avatar);
                a.push(u ? _.TrackUserProfileProperties.ANIMATED_AVATAR : _.TrackUserProfileProperties.AVATAR)
            }
            if (null == i ? void 0 : i.banner) {
                var s = (0, c.isAnimatedIconHash)(null == i ? void 0 : i.banner);
                a.push(s ? _.TrackUserProfileProperties.ANIMATED_BANNER : _.TrackUserProfileProperties.BANNER)
            }
            return (null == i ? void 0 : i.bio) && a.push(_.TrackUserProfileProperties.BIO), (null == i ? void 0 : i.themeColors) != null && void 0 !== i.themeColors.find(function(e) {
                return null !== e
            }) && a.push(_.TrackUserProfileProperties.THEME), (null == t ? void 0 : t.avatarDecoration) != null && a.push(_.TrackUserProfileProperties.AVATAR_DECORATION), (null == i ? void 0 : i.profileEffectId) != null && a.push(_.TrackUserProfileProperties.PROFILE_EFFECT), a
        },
        h = function(e) {
            var t = i.default.getStatus(e),
                n = i.default.isMobileOnline(e);
            return t === p.StatusTypes.ONLINE && n ? "".concat(t, "-mobile") : t === p.StatusTypes.ONLINE ? "".concat(t, "-desktop") : t
        },
        O = function(e) {
            var t, n, r = e.layout,
                a = e.userId,
                u = e.guildId,
                l = s.default.getUser(a);
            if (null == l) return {};
            var c = (0, d.getDisplayProfile)(null == l ? void 0 : l.id, u),
                f = null != u ? o.default.getMember(u, null == l ? void 0 : l.id) : null;
            return {
                profile_layout: r,
                profile_properties: I({
                    user: l,
                    userProfile: null == c ? void 0 : c._userProfile
                }),
                guild_profile_properties: I({
                    guildMember: f,
                    guildMemberProfile: null == c ? void 0 : c._guildMemberProfile
                }),
                profile_activity_types: i.default.getActivities(l.id, u).map(function(e) {
                    return e.type
                }).filter(function(e) {
                    return void 0 !== e
                }),
                profile_badges: null == c ? void 0 : null === (t = c.getBadges()) || void 0 === t ? void 0 : t.map(function(e) {
                    return e.id
                }),
                avatar_decoration_sku_id: null === (n = l.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
                profile_effect_sku_id: null == c ? void 0 : c.profileEffectId,
                user_status: h(l.id)
            }
        },
        T = function(e) {
            var t, n;
            return null == e ? {} : {
                related_user_id: e,
                relationship_type: a.default.getRelationshipType(e),
                related_since: a.default.getSince(e),
                num_mutual_friends: f.default.getMutualFriendsCount(e),
                num_mutual_guilds: null === (t = f.default.getMutualGuilds(e)) || void 0 === t ? void 0 : t.length,
                affinity: null === (n = u.default.getUserAffinity(e)) || void 0 === n ? void 0 : n.affinity
            }
        },
        S = function(e) {
            var t = e.userId,
                n = e.guildId,
                o = e.channelId,
                i = e.messageId,
                a = e.roleId,
                u = e.analyticsLocations,
                s = e.layout,
                c = e.action,
                f = e.section;
            l.default.track(E.AnalyticEvents.USER_PROFILE_ACTION, y(m({}, (0, r.collectGuildAnalyticsMetadata)(n), (0, r.collectChannelAnalyticsMetadataFromId)(o), O({
                layout: s,
                userId: t,
                guildId: n
            }), T(t)), {
                location_stack: u,
                profile_action: c,
                profile_section: f,
                source_message_id: i,
                source_role_id: a
            }))
        },
        v = function(e) {
            var t, n = e.userId,
                o = e.guildId,
                i = e.channelId,
                a = e.analyticsLocations,
                u = e.layout,
                s = e.activityType,
                c = e.applicationId,
                f = e.voiceChannelId;
            l.default.track(E.AnalyticEvents.USER_PROFILE_ACTIVITY_JOINED, y(m({}, (0, r.collectGuildAnalyticsMetadata)(o), (0, r.collectChannelAnalyticsMetadataFromId)(i), O({
                layout: u,
                userId: n,
                guildId: o
            }), T(n)), {
                location_stack: a,
                activity_type: "string" == typeof(t = s) || null == t ? t : Object.keys(E.ActivityTypes)[Object.values(E.ActivityTypes).indexOf(t)],
                application_id: c,
                voice_channel_id: f
            }))
        },
        g = function(e) {
            var t = e.userId,
                n = e.guildId,
                o = e.channelId,
                i = e.analyticsLocations,
                a = e.layout,
                u = e.badge;
            l.default.track(E.AnalyticEvents.USER_PROFILE_BADGE_PRESSED, y(m({}, (0, r.collectGuildAnalyticsMetadata)(n), (0, r.collectChannelAnalyticsMetadataFromId)(o), O({
                layout: a,
                userId: t,
                guildId: n
            }), T(t)), {
                location_stack: i,
                badge: u
            }))
        }
}