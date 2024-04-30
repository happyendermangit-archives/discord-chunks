function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelCoverageForOnboarding: function() {
            return N
        },
        getChattableDefaultChannels: function() {
            return v
        },
        getMinimumSetOfDefaultChannelIds: function() {
            return g
        },
        getSelectedChannelIds: function() {
            return P
        },
        getSelectedRoleIds: function() {
            return y
        },
        isBlockedByOnboarding: function() {
            return A
        },
        isChattableChannel: function() {
            return R
        },
        isChattableChannelId: function() {
            return O
        },
        isGuildOnboardingSettingsAvailable: function() {
            return h
        },
        useChannelCoverageForOnboarding: function() {
            return p
        },
        useChattableDefaultChannels: function() {
            return M
        },
        useGuildOnboardingSettingsAvailable: function() {
            return S
        },
        useIsChattableChannel: function() {
            return C
        }
    }), n("789020"), n("47120"), n("724458"), n("653041"), n("536091");
    var i = n("442837"),
        r = n("902704"),
        s = n("447003"),
        a = n("592125"),
        o = n("984933"),
        l = n("430824"),
        u = n("496675"),
        d = n("630388"),
        _ = n("823379"),
        c = n("700785"),
        E = n("977258"),
        I = n("981631"),
        T = n("372897");
    let f = new Date(16824888e5);

    function S(e) {
        return (0, i.useStateFromStores)([l.default, u.default], () => {
            let t = l.default.getGuild(e),
                n = !!(null == t ? void 0 : t.hasFeature(I.GuildFeatures.COMMUNITY)),
                i = u.default.can(I.Permissions.MANAGE_GUILD, t),
                r = u.default.can(I.Permissions.MANAGE_ROLES, t);
            return n && i && r
        })
    }

    function h(e) {
        let t = l.default.getGuild(e),
            n = !!(null == t ? void 0 : t.hasFeature(I.GuildFeatures.COMMUNITY)),
            i = u.default.can(I.Permissions.MANAGE_GUILD, t),
            r = u.default.can(I.Permissions.MANAGE_ROLES, t);
        return n && i && r
    }

    function A(e, t) {
        var n;
        if (null == e || !e.hasFeature(I.GuildFeatures.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < f) return !1;
        let i = null !== (n = t.flags) && void 0 !== n ? n : 0;
        return d.hasFlag(i, T.GuildMemberFlags.STARTED_ONBOARDING) && !d.hasFlag(i, T.GuildMemberFlags.COMPLETED_ONBOARDING)
    }

    function m(e, t, n) {
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
            a = r.filter(e => i.has(e.id) || null != e.parent_id && i.has(e.parent_id));
        return [a, r.filter(e => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id)))]
    }

    function N(e, t, n) {
        return m(t, n, o.default.getChannels(e)[0, o.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
            let {
                channel: t
            } = e;
            return t
        }))
    }

    function p(e, t, n) {
        return m(t, n, (0, i.useStateFromStores)([o.default], () => o.default.getChannels(e))[0, o.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
            let {
                channel: t
            } = e;
            return t
        }))
    }

    function O(e) {
        return R(a.default.getChannel(e))
    }

    function R(e) {
        return !!(null != e && (0, E.canChannelBeDefault)(e.guild_id, e.id)) && (e.isForumChannel() ? c.canEveryoneRole(I.Permissions.SEND_MESSAGES_IN_THREADS, e) : c.canEveryoneRole(I.Permissions.SEND_MESSAGES, e))
    }

    function C(e) {
        return (0, i.useStateFromStores)([a.default], () => {
            let t = a.default.getChannel(e);
            return (0, _.isNotNullish)(t) && R(t)
        })
    }

    function g(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
            r = L(e, t, e => e.id, i);
        return n.forEach(t => {
            var n, s;
            if (!t.required) return;
            let a = L(e, null !== (s = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== s ? s : [], e => e.id),
                o = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let s = L(e, n.channelIds, e => e.id, e => i(e) && !r.includes(e));
                    return s.length < t.length ? s : t
                }, a);
            r.push(...o)
        }), r
    }

    function L(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
            r = o.default.getChannels(e)[o.GUILD_SELECTABLE_CHANNELS_KEY],
            s = [];
        for (let {
                channel: e
            }
            of r)
            if ((0, E.canChannelBeDefault)(e.guild_id, e.id) && (t.includes(e.id) && !e.isCategory() || !e.isThread() && null != e.parent_id && t.includes(e.parent_id))) {
                let t = n(e);
                i(t) && s.push(t)
            } return s
    }

    function v(e, t) {
        var n, i;
        let r = L(e, t),
            s = o.default.getChannels(e)[o.GUILD_SELECTABLE_CHANNELS_KEY],
            a = {};
        for (let e of s) a[e.channel.id] = e;
        return [(n = r.map(e => {
            let {
                id: t
            } = e;
            return t
        }), i = a, n.filter(e => {
            var t;
            return R(null === (t = i[e]) || void 0 === t ? void 0 : t.channel)
        })), r]
    }

    function D(e, t) {
        return e[0].length === t[0].length && e[1].length === t[1].length && (0, r.default)(e[0], t[0]) && (0, r.default)(e[1], t[1])
    }

    function M(e, t) {
        return (0, i.useStateFromStores)([o.default], () => {
            let n = o.default.getChannels(e),
                i = [],
                r = [],
                s = {};
            for (let e of n[o.GUILD_SELECTABLE_CHANNELS_KEY])(0, E.canChannelBeDefault)(e.channel.guild_id, e.channel.id) && (t.has(e.channel.id) && !e.channel.isCategory() || !e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id)) && (s[e.channel.id] = e, i.push(e.channel), R(e.channel) && r.push(e.channel.id));
            return [r, i]
        }, [e, t], D)
    }

    function y(e) {
        return new Set(e.map(e => e.roleIds).flat().filter(_.isNotNullish))
    }

    function P(e) {
        return new Set(e.map(e => e.channelIds).flat().filter(_.isNotNullish))
    }
}