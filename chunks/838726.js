function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceInThreadsExperiment: function() {
            return y
        },
        canUnarchiveThread: function() {
            return C
        },
        computeCanStartPublicThread: function() {
            return h
        },
        computeIsReadOnlyThread: function() {
            return L
        },
        getIsActiveChannelOrUnarchivableThread: function() {
            return D
        },
        useCanJoinThreadVoice: function() {
            return w
        },
        useCanManageThread: function() {
            return A
        },
        useCanStartPrivateThread: function() {
            return O
        },
        useCanStartPublicThread: function() {
            return I
        },
        useCanStartThread: function() {
            return T
        },
        useCanUnarchiveThread: function() {
            return R
        },
        useCanViewThreadForMessage: function() {
            return v
        },
        useHasActiveThreads: function() {
            return g
        },
        useIsActiveChannelOrUnarchivableThread: function() {
            return P
        },
        useIsNonModInLockedThread: function() {
            return k
        },
        useIsThreadModerator: function() {
            return U
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("22287"),
        a = n("898511"),
        u = n("886138"),
        s = n("387878"),
        l = n("746373"),
        c = n("569492"),
        f = n("217014"),
        d = n("935741"),
        _ = n("29884"),
        E = n("523018"),
        p = n("914535"),
        m = n("281767"),
        y = (0, u.default)({
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

    function I(e, t) {
        return S((0, a.useStateFromStores)([_.default], function() {
            var t = e.isForumLikeChannel() ? m.Permissions.SEND_MESSAGES : i.combine(m.Permissions.CREATE_PUBLIC_THREADS, m.Permissions.READ_MESSAGE_HISTORY);
            return _.default.can(t, e)
        }, [e]), e, t)
    }

    function h(e, t) {
        var n = e.isForumLikeChannel() ? m.Permissions.SEND_MESSAGES : i.combine(m.Permissions.CREATE_PUBLIC_THREADS, m.Permissions.READ_MESSAGE_HISTORY);
        return S(_.default.can(n, e), e, t)
    }

    function O(e) {
        var t = (0, a.useStateFromStores)([_.default], function() {
            return _.default.can(i.combine(m.Permissions.CREATE_PRIVATE_THREADS), e)
        }, [e]);
        return e.type === m.ChannelTypes.GUILD_TEXT && S(t, e)
    }

    function T(e) {
        var t = I(e),
            n = O(e);
        return t || n
    }

    function S(e, t, n) {
        return !(__OVERLAY__ || !e || !c.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(m.MessageFlags.HAS_THREAD) || (0, l.default)(n))) && !0
    }

    function v(e) {
        var t = (0, a.useStateFromStores)([d.default], function() {
            return d.default.getChannel(E.default.castMessageIdAsChannelId(e.id))
        }, [e]);
        return function(e, t, n) {
            return !!t.hasFlag(m.MessageFlags.HAS_THREAD) && null != n && !!e || !1
        }((0, a.useStateFromStores)([_.default], function() {
            return _.default.can(m.Permissions.VIEW_CHANNEL, t)
        }, [t]), e, t)
    }

    function g(e) {
        return (0, a.useStateFromStoresObject)([p.default, _.default], function() {
            var t = p.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                n = p.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                r = p.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                i = o()(n).some(function(e) {
                    return _.default.can(m.Permissions.VIEW_CHANNEL, e.channel)
                }),
                a = o()(t).some(function(e) {
                    return !(e.channel.id in n) && _.default.can(m.Permissions.VIEW_CHANNEL, e.channel)
                }),
                u = o()(r).some(function(e) {
                    return _.default.can(m.Permissions.VIEW_CHANNEL, e)
                });
            return {
                hasActiveThreads: i || a || u,
                hasMoreActiveThreads: u || a
            }
        })
    }

    function A(e) {
        var t = (0, a.useStateFromStores)([d.default], function() {
                return d.default.getChannel(null == e ? void 0 : e.parent_id)
            }),
            n = (0, a.useStateFromStores)([_.default], function() {
                return null != t && _.default.can(m.Permissions.MANAGE_THREADS, t)
            }, [t]),
            r = (0, a.useStateFromStores)([f.default], function() {
                return f.default.getId()
            });
        return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
    }

    function b(e, t) {
        return null != e && t.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e)
    }

    function N(e, t, n) {
        var r;
        return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
    }

    function R(e) {
        var t = (0, a.useStateFromStores)([_.default], function() {
                return b(e, _.default)
            }),
            n = U(e);
        return N(e, t, n)
    }

    function C(e) {
        var t = b(e, _.default),
            n = function(e) {
                return M(e, _.default)
            }(e);
        return N(e, t, n)
    }

    function P(e) {
        var t, n = (0, a.useStateFromStores)([_.default], function() {
            return null != e && _.default.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e)
        });
        return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
    }

    function D(e) {
        var t;
        return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && _.default.can(m.Permissions.SEND_MESSAGES_IN_THREADS, e))
    }

    function L(e) {
        var t = _.default.can(m.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t
    }

    function M(e, t) {
        return null != e && t.can(m.Permissions.MANAGE_THREADS, e)
    }

    function U(e) {
        return (0, a.useStateFromStores)([_.default], function() {
            return M(e, _.default)
        })
    }

    function w(e) {
        var t = (0, s.default)(),
            n = (0, a.useStateFromStores)([_.default], function() {
                return _.default.can(m.Permissions.CONNECT, e)
            }),
            r = P(e),
            o = y.useExperiment({
                guildId: e.guild_id,
                location: "e791ea_1"
            }, {
                autoTrackExposure: !1
            }).enabled;
        return !t && e.isVocalThread() && o && n && r
    }

    function k(e) {
        var t = U(e);
        return e.isLockedThread() && !t
    }
}