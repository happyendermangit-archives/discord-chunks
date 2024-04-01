function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelCoverageForOnboarding: function() {
            return m
        },
        getChattableDefaultChannels: function() {
            return D
        },
        getMinimumSetOfDefaultChannelIds: function() {
            return C
        },
        getSelectedChannelIds: function() {
            return y
        },
        getSelectedRoleIds: function() {
            return M
        },
        isBlockedByOnboarding: function() {
            return h
        },
        isChattableChannel: function() {
            return p
        },
        isChattableChannelId: function() {
            return O
        },
        isGuildOnboardingSettingsAvailable: function() {
            return S
        },
        useChannelCoverageForOnboarding: function() {
            return N
        },
        useChattableDefaultChannels: function() {
            return v
        },
        useGuildOnboardingSettingsAvailable: function() {
            return f
        },
        useIsChattableChannel: function() {
            return R
        }
    }), n("789020"), n("47120"), n("724458"), n("653041"), n("536091");
    var i = n("442837"),
        r = n("447003"),
        s = n("592125"),
        a = n("984933"),
        o = n("430824"),
        l = n("496675"),
        u = n("630388"),
        d = n("823379"),
        _ = n("700785"),
        c = n("977258"),
        E = n("981631"),
        I = n("372897");
    let T = new Date(16824888e5);

    function f(e) {
        let t = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(e)),
            n = !!(null == t ? void 0 : t.hasFeature(E.GuildFeatures.COMMUNITY)),
            r = l.default.can(E.Permissions.MANAGE_GUILD, t),
            s = l.default.can(E.Permissions.MANAGE_ROLES, t);
        return n && r && s
    }

    function S(e) {
        let t = o.default.getGuild(e),
            n = !!(null == t ? void 0 : t.hasFeature(E.GuildFeatures.COMMUNITY)),
            i = l.default.can(E.Permissions.MANAGE_GUILD, t),
            r = l.default.can(E.Permissions.MANAGE_ROLES, t);
        return n && i && r
    }

    function h(e, t) {
        var n;
        if (null == e || !e.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < T) return !1;
        let i = null !== (n = t.flags) && void 0 !== n ? n : 0;
        return u.hasFlag(i, I.GuildMemberFlags.STARTED_ONBOARDING) && !u.hasFlag(i, I.GuildMemberFlags.COMPLETED_ONBOARDING)
    }

    function A(e, t, n) {
        let i = new Set;
        e.forEach(e => {
            e.options.forEach(e => {
                var t;
                null == e || null === (t = e.channelIds) || void 0 === t || t.forEach(e => {
                    i.add(e)
                })
            })
        }), t.forEach(e => i.add(e));
        let s = n.filter(e => !e.isCategory() && !e.isThread() && !(0, r.default)(e)),
            a = s.filter(e => i.has(e.id) || null != e.parent_id && i.has(e.parent_id));
        return [a, s.filter(e => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id)))]
    }

    function m(e, t, n) {
        return A(t, n, a.default.getChannels(e)[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
            let {
                channel: t
            } = e;
            return t
        }))
    }

    function N(e, t, n) {
        return A(t, n, (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e))[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
            let {
                channel: t
            } = e;
            return t
        }))
    }

    function O(e) {
        return p(s.default.getChannel(e))
    }

    function p(e) {
        return !!(null != e && (0, c.canChannelBeDefault)(e.guild_id, e.id)) && (e.isForumChannel() ? _.canEveryoneRole(E.Permissions.SEND_MESSAGES_IN_THREADS, e) : _.canEveryoneRole(E.Permissions.SEND_MESSAGES, e))
    }

    function R(e) {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getChannel(e));
        return (0, d.isNotNullish)(t) && p(t)
    }

    function C(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
            r = L(e, t).map(e => e.id).filter(i);
        return n.forEach(t => {
            var n, s;
            if (!t.required) return;
            let a = L(e, null !== (s = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== s ? s : []).map(e => e.id),
                o = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let s = L(e, n.channelIds).map(e => e.id).filter(e => i(e) && !r.includes(e));
                    return s.length < t.length ? s : t
                }, a);
            r.push(...o)
        }), r
    }

    function g(e, t) {
        return e.filter(e => {
            let n = t.find(t => {
                let {
                    channel: n
                } = t;
                return n.id === e
            });
            return p(null == n ? void 0 : n.channel)
        })
    }

    function L(e, t) {
        return a.default.getChannels(e)[a.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
            let {
                channel: n
            } = e;
            return (0, c.canChannelBeDefault)(n.guild_id, n.id) && (t.includes(n.id) && !n.isCategory() || !n.isThread() && null != n.parent_id && t.includes(n.parent_id))
        }).map(e => {
            let {
                channel: t
            } = e;
            return t
        })
    }

    function D(e, t) {
        let n = L(e, t),
            i = a.default.getChannels(e)[a.GUILD_SELECTABLE_CHANNELS_KEY];
        return [g(n.map(e => {
            let {
                id: t
            } = e;
            return t
        }), i), n]
    }

    function v(e, t) {
        var n, r;
        let s = (n = e, r = t, (0, i.useStateFromStores)([a.default], () => a.default.getChannels(n))[a.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                let {
                    channel: t
                } = e;
                return (0, c.canChannelBeDefault)(t.guild_id, t.id) && (r.includes(t.id) && !t.isCategory() || !t.isThread() && null != t.parent_id && r.includes(t.parent_id))
            }).map(e => {
                let {
                    channel: t
                } = e;
                return t
            })),
            o = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e))[a.GUILD_SELECTABLE_CHANNELS_KEY];
        return [g(s.map(e => {
            let {
                id: t
            } = e;
            return t
        }), o), s]
    }

    function M(e) {
        return new Set(e.map(e => e.roleIds).flat().filter(d.isNotNullish))
    }

    function y(e) {
        return new Set(e.map(e => e.channelIds).flat().filter(d.isNotNullish))
    }
}