function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildOnboardingSettingsAvailable: function() {
            return g
        },
        isGuildOnboardingSettingsAvailable: function() {
            return m
        },
        isBlockedByOnboarding: function() {
            return p
        },
        getChannelCoverageForOnboarding: function() {
            return v
        },
        useChannelCoverageForOnboarding: function() {
            return T
        },
        isChattableChannelId: function() {
            return I
        },
        isChattableChannel: function() {
            return A
        },
        useIsChattableChannel: function() {
            return C
        },
        getMinimumSetOfDefaultChannelIds: function() {
            return y
        },
        getChattableDefaultChannels: function() {
            return O
        },
        useChattableDefaultChannels: function() {
            return D
        },
        getSelectedRoleIds: function() {
            return P
        },
        getSelectedChannelIds: function() {
            return L
        }
    }), n("702976"), n("222007"), n("808653"), n("424973"), n("834022");
    var i = n("446674"),
        s = n("656038"),
        r = n("42203"),
        a = n("923959"),
        o = n("305961"),
        l = n("957255"),
        u = n("568734"),
        d = n("449008"),
        c = n("991170"),
        f = n("648747"),
        _ = n("49111"),
        E = n("657944");
    let h = new Date(16824888e5);

    function g(e) {
        let t = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(e)),
            n = !!(null == t ? void 0 : t.hasFeature(_.GuildFeatures.COMMUNITY)),
            s = l.default.can(_.Permissions.MANAGE_GUILD, t),
            r = l.default.can(_.Permissions.MANAGE_ROLES, t);
        return n && s && r
    }

    function m(e) {
        let t = o.default.getGuild(e),
            n = !!(null == t ? void 0 : t.hasFeature(_.GuildFeatures.COMMUNITY)),
            i = l.default.can(_.Permissions.MANAGE_GUILD, t),
            s = l.default.can(_.Permissions.MANAGE_ROLES, t);
        return n && i && s
    }

    function p(e, t) {
        var n;
        if (null == e || !e.hasFeature(_.GuildFeatures.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < h) return !1;
        let i = null !== (n = t.flags) && void 0 !== n ? n : 0;
        return u.hasFlag(i, E.GuildMemberFlags.STARTED_ONBOARDING) && !u.hasFlag(i, E.GuildMemberFlags.COMPLETED_ONBOARDING)
    }

    function S(e, t, n) {
        let i = new Set;
        e.forEach(e => {
            e.options.forEach(e => {
                var t;
                null == e || null === (t = e.channelIds) || void 0 === t || t.forEach(e => {
                    i.add(e)
                })
            })
        }), t.forEach(e => i.add(e));
        let r = n.filter(e => !e.isCategory() && !e.isThread() && !(0, s.default)(e)),
            a = r.filter(e => i.has(e.id) || null != e.parent_id && i.has(e.parent_id)),
            o = r.filter(e => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id)));
        return [a, o]
    }

    function v(e, t, n) {
        let i = a.default.getChannels(e);
        return S(t, n, i[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
            let {
                channel: t
            } = e;
            return t
        }))
    }

    function T(e, t, n) {
        let s = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e));
        return S(t, n, s[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
            let {
                channel: t
            } = e;
            return t
        }))
    }

    function I(e) {
        let t = r.default.getChannel(e);
        return A(t)
    }

    function A(e) {
        return !!(null != e && (0, f.canChannelBeDefault)(e.guild_id, e.id)) && (e.isForumChannel() ? c.default.canEveryoneRole(_.Permissions.SEND_MESSAGES_IN_THREADS, e) : c.default.canEveryoneRole(_.Permissions.SEND_MESSAGES, e))
    }

    function C(e) {
        let t = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(e));
        return (0, d.isNotNullish)(t) && A(t)
    }

    function y(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
            s = R(e, t).map(e => e.id).filter(i);
        return n.forEach(t => {
            var n, r;
            if (!t.required) return;
            let a = R(e, null !== (r = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== r ? r : []).map(e => e.id),
                o = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let r = R(e, n.channelIds),
                        a = r.map(e => e.id).filter(e => i(e) && !s.includes(e));
                    return a.length < t.length ? a : t
                }, a);
            s.push(...o)
        }), s
    }

    function N(e, t) {
        let n = e.filter(e => {
            let n = t.find(t => {
                let {
                    channel: n
                } = t;
                return n.id === e
            });
            return A(null == n ? void 0 : n.channel)
        });
        return n
    }

    function R(e, t) {
        let n = a.default.getChannels(e),
            i = n[a.GUILD_SELECTABLE_CHANNELS_KEY];
        return i.filter(e => {
            let {
                channel: n
            } = e;
            return (0, f.canChannelBeDefault)(n.guild_id, n.id) && (t.includes(n.id) && !n.isCategory() || !n.isThread() && null != n.parent_id && t.includes(n.parent_id))
        }).map(e => {
            let {
                channel: t
            } = e;
            return t
        })
    }

    function O(e, t) {
        let n = R(e, t),
            i = a.default.getChannels(e),
            s = i[a.GUILD_SELECTABLE_CHANNELS_KEY],
            r = N(n.map(e => {
                let {
                    id: t
                } = e;
                return t
            }), s);
        return [r, n]
    }

    function D(e, t) {
        let n = function(e, t) {
                let n = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e)),
                    s = n[a.GUILD_SELECTABLE_CHANNELS_KEY];
                return s.filter(e => {
                    let {
                        channel: n
                    } = e;
                    return (0, f.canChannelBeDefault)(n.guild_id, n.id) && (t.includes(n.id) && !n.isCategory() || !n.isThread() && null != n.parent_id && t.includes(n.parent_id))
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t
                })
            }(e, t),
            s = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e)),
            r = s[a.GUILD_SELECTABLE_CHANNELS_KEY],
            o = N(n.map(e => {
                let {
                    id: t
                } = e;
                return t
            }), r);
        return [o, n]
    }

    function P(e) {
        return new Set(e.map(e => e.roleIds).flat().filter(d.isNotNullish))
    }

    function L(e) {
        return new Set(e.map(e => e.channelIds).flat().filter(d.isNotNullish))
    }
}