function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceInThreadsExperiment: function() {
            return S
        },
        canUnarchiveThread: function() {
            return v
        },
        computeCanStartPublicThread: function() {
            return h
        },
        computeIsReadOnlyThread: function() {
            return P
        },
        getIsActiveChannelOrUnarchivableThread: function() {
            return y
        },
        useCanJoinThreadVoice: function() {
            return G
        },
        useCanManageThread: function() {
            return C
        },
        useCanStartPrivateThread: function() {
            return m
        },
        useCanStartPublicThread: function() {
            return A
        },
        useCanStartThread: function() {
            return N
        },
        useCanUnarchiveThread: function() {
            return D
        },
        useCanViewThreadForMessage: function() {
            return p
        },
        useHasActiveThreads: function() {
            return R
        },
        useIsActiveChannelOrUnarchivableThread: function() {
            return M
        },
        useIsNonModInLockedThread: function() {
            return w
        },
        useIsThreadModerator: function() {
            return b
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("149765"),
        a = n("442837"),
        o = n("987170"),
        l = n("590293"),
        u = n("901461"),
        d = n("131704"),
        _ = n("314897"),
        c = n("592125"),
        E = n("496675"),
        I = n("709054"),
        T = n("601070"),
        f = n("981631");
    let S = (0, o.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "On",
            config: {
                enabled: !0
            }
        }]
    });

    function A(e, t) {
        return O((0, a.useStateFromStores)([E.default], () => {
            let t = e.isForumLikeChannel() ? f.Permissions.SEND_MESSAGES : s.combine(f.Permissions.CREATE_PUBLIC_THREADS, f.Permissions.READ_MESSAGE_HISTORY);
            return E.default.can(t, e)
        }, [e]), e, t)
    }

    function h(e, t) {
        let n = e.isForumLikeChannel() ? f.Permissions.SEND_MESSAGES : s.combine(f.Permissions.CREATE_PUBLIC_THREADS, f.Permissions.READ_MESSAGE_HISTORY);
        return O(E.default.can(n, e), e, t)
    }

    function m(e) {
        let t = (0, a.useStateFromStores)([E.default], () => E.default.can(s.combine(f.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
        return e.type === f.ChannelTypes.GUILD_TEXT && O(t, e)
    }

    function N(e) {
        let t = A(e),
            n = m(e);
        return t || n
    }

    function O(e, t, n) {
        return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(f.MessageFlags.HAS_THREAD) || (0, u.default)(n))) && !0
    }

    function p(e) {
        let t = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(I.default.castMessageIdAsChannelId(e.id)), [e]);
        return function(e, t, n) {
            return !!t.hasFlag(f.MessageFlags.HAS_THREAD) && null != n && !!e || !1
        }((0, a.useStateFromStores)([E.default], () => E.default.can(f.Permissions.VIEW_CHANNEL, t), [t]), e, t)
    }

    function R(e) {
        return (0, a.useStateFromStoresObject)([T.default, E.default], () => {
            let t = T.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                n = T.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                i = T.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                s = r()(n).some(e => E.default.can(f.Permissions.VIEW_CHANNEL, e.channel)),
                a = r()(t).some(e => !(e.channel.id in n) && E.default.can(f.Permissions.VIEW_CHANNEL, e.channel)),
                o = r()(i).some(e => E.default.can(f.Permissions.VIEW_CHANNEL, e));
            return {
                hasActiveThreads: s || a || o,
                hasMoreActiveThreads: o || a
            }
        })
    }

    function C(e) {
        let t = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(null == e ? void 0 : e.parent_id)),
            n = (0, a.useStateFromStores)([E.default], () => null != t && E.default.can(f.Permissions.MANAGE_THREADS, t), [t]),
            i = (0, a.useStateFromStores)([_.default], () => _.default.getId());
        return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
    }

    function g(e, t) {
        return null != e && t.can(f.Permissions.SEND_MESSAGES_IN_THREADS, e)
    }

    function L(e, t, n) {
        var i;
        return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
    }

    function D(e) {
        let t = (0, a.useStateFromStores)([E.default], () => g(e, E.default)),
            n = b(e);
        return L(e, t, n)
    }

    function v(e) {
        let t = g(e, E.default),
            n = function(e) {
                return U(e, E.default)
            }(e);
        return L(e, t, n)
    }

    function M(e) {
        var t;
        let n = (0, a.useStateFromStores)([E.default], () => null != e && E.default.can(f.Permissions.SEND_MESSAGES_IN_THREADS, e));
        return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
    }

    function y(e) {
        var t;
        return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.default.can(f.Permissions.SEND_MESSAGES_IN_THREADS, e))
    }

    function P(e) {
        let t = E.default.can(f.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t
    }

    function U(e, t) {
        return null != e && t.can(f.Permissions.MANAGE_THREADS, e)
    }

    function b(e) {
        return (0, a.useStateFromStores)([E.default], () => U(e, E.default))
    }

    function G(e) {
        let t = (0, l.default)(),
            n = (0, a.useStateFromStores)([E.default], () => E.default.can(f.Permissions.CONNECT, e)),
            i = M(e),
            r = S.useExperiment({
                guildId: e.guild_id,
                location: "e791ea_1"
            }, {
                autoTrackExposure: !1
            }).enabled;
        return !t && e.isVocalThread() && r && n && i
    }

    function w(e) {
        let t = b(e);
        return e.isLockedThread() && !t
    }
}