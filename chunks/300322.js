function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        VoiceInThreadsExperiment: function() {
            return l
        },
        useCanStartPublicThread: function() {
            return u
        },
        computeCanStartPublicThread: function() {
            return L
        },
        useCanStartPrivateThread: function() {
            return C
        },
        useCanStartThread: function() {
            return D
        },
        useCanViewThreadForMessage: function() {
            return d
        },
        useHasActiveThreads: function() {
            return U
        },
        useCanManageThread: function() {
            return M
        },
        useCanUnarchiveThread: function() {
            return m
        },
        canUnarchiveThread: function() {
            return G
        },
        useIsActiveChannelOrUnarchivableThread: function() {
            return p
        },
        getIsActiveChannelOrUnarchivableThread: function() {
            return g
        },
        computeIsReadOnlyThread: function() {
            return y
        },
        useIsThreadModerator: function() {
            return f
        },
        useCanJoinThreadVoice: function() {
            return H
        },
        useIsNonModInLockedThread: function() {
            return v
        }
    });
    var t = E("917351"),
        o = E.n(t),
        n = E("316693"),
        r = E("446674"),
        a = E("296892"),
        i = E("889014"),
        I = E("913491"),
        s = E("233069"),
        T = E("271938"),
        S = E("42203"),
        N = E("957255"),
        O = E("299039"),
        A = E("401690"),
        R = E("49111");
    let l = (0, a.default)({
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

    function u(e, _) {
        let E = (0, r.useStateFromStores)([N.default], () => {
            let _ = e.isForumLikeChannel() ? R.Permissions.SEND_MESSAGES : n.default.combine(R.Permissions.CREATE_PUBLIC_THREADS, R.Permissions.READ_MESSAGE_HISTORY);
            return N.default.can(_, e)
        }, [e]);
        return c(E, e, _)
    }

    function L(e, _) {
        let E = e.isForumLikeChannel() ? R.Permissions.SEND_MESSAGES : n.default.combine(R.Permissions.CREATE_PUBLIC_THREADS, R.Permissions.READ_MESSAGE_HISTORY),
            t = N.default.can(E, e);
        return c(t, e, _)
    }

    function C(e) {
        let _ = (0, r.useStateFromStores)([N.default], () => N.default.can(n.default.combine(R.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
        return e.type === R.ChannelTypes.GUILD_TEXT && c(_, e)
    }

    function D(e) {
        let _ = u(e),
            E = C(e);
        return _ || E
    }

    function c(e, _, E) {
        return !(__OVERLAY__ || !e || !s.THREADED_CHANNEL_TYPES.has(_.type) || null != E && (E.hasFlag(R.MessageFlags.HAS_THREAD) || (0, I.default)(E))) && !0
    }

    function d(e) {
        let _ = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(O.default.castMessageIdAsChannelId(e.id)), [e]),
            E = (0, r.useStateFromStores)([N.default], () => N.default.can(R.Permissions.VIEW_CHANNEL, _), [_]);
        return function(e, _, E) {
            return !!_.hasFlag(R.MessageFlags.HAS_THREAD) && null != E && !!e || !1
        }(E, e, _)
    }

    function U(e) {
        return (0, r.useStateFromStoresObject)([A.default, N.default], () => {
            let _ = A.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                E = A.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                t = A.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                n = o(E).some(e => N.default.can(R.Permissions.VIEW_CHANNEL, e.channel)),
                r = o(_).some(e => !(e.channel.id in E) && N.default.can(R.Permissions.VIEW_CHANNEL, e.channel)),
                a = o(t).some(e => N.default.can(R.Permissions.VIEW_CHANNEL, e));
            return {
                hasActiveThreads: n || r || a,
                hasMoreActiveThreads: a || r
            }
        })
    }

    function M(e) {
        let _ = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(null == e ? void 0 : e.parent_id)),
            E = (0, r.useStateFromStores)([N.default], () => null != _ && N.default.can(R.Permissions.MANAGE_THREADS, _), [_]),
            t = (0, r.useStateFromStores)([T.default], () => T.default.getId());
        return !!(null != e && null != _ && e.isThread()) && (!!E || !e.isLockedThread() && (e.ownerId === t || !1))
    }

    function h(e, _) {
        return null != e && _.can(R.Permissions.SEND_MESSAGES_IN_THREADS, e)
    }

    function P(e, _, E) {
        var t;
        return !!(null != e && e.isThread()) && ((null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) ? E : _)
    }

    function m(e) {
        let _ = (0, r.useStateFromStores)([N.default], () => h(e, N.default)),
            E = f(e);
        return P(e, _, E)
    }

    function G(e) {
        let _ = h(e, N.default),
            E = function(e) {
                return B(e, N.default)
            }(e);
        return P(e, _, E)
    }

    function p(e) {
        var _;
        let E = (0, r.useStateFromStores)([N.default], () => null != e && N.default.can(R.Permissions.SEND_MESSAGES_IN_THREADS, e));
        return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (_ = e.threadMetadata) || void 0 === _ ? void 0 : _.locked) !== !0 && E)
    }

    function g(e) {
        var _;
        return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (_ = e.threadMetadata) || void 0 === _ ? void 0 : _.locked) !== !0 && N.default.can(R.Permissions.SEND_MESSAGES_IN_THREADS, e))
    }

    function y(e) {
        let _ = N.default.can(R.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !_
    }

    function B(e, _) {
        return null != e && _.can(R.Permissions.MANAGE_THREADS, e)
    }

    function f(e) {
        return (0, r.useStateFromStores)([N.default], () => B(e, N.default))
    }

    function H(e) {
        let _ = (0, i.default)(),
            E = (0, r.useStateFromStores)([N.default], () => N.default.can(R.Permissions.CONNECT, e)),
            t = p(e),
            o = l.useExperiment({
                guildId: e.guild_id,
                location: "e791ea_1"
            }, {
                autoTrackExposure: !1
            }).enabled;
        return !_ && e.isVocalThread() && o && E && t
    }

    function v(e) {
        let _ = f(e);
        return e.isLockedThread() && !_
    }
}