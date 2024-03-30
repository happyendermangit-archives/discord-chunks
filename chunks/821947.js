function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createPollServerDataFromCreateRequest: function() {
            return D
        },
        filterOutUUID: function() {
            return v
        },
        generateEmptyPollAnswer: function() {
            return S
        },
        getPollAnswerVotesTooltipText: function() {
            return M
        },
        getTotalVotes: function() {
            return L
        },
        hasNonVoteReactions: function() {
            return g
        },
        isAnswerFilled: function() {
            return C
        },
        isIncompleteAnswer: function() {
            return P
        },
        isPollCreationEmpty: function() {
            return R
        },
        useCanPostImagePolls: function() {
            return N
        },
        useCanPostPollsInChannel: function() {
            return A
        },
        useCanShowPollsChatInputCoachmarkInGuild: function() {
            return b
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("153832"),
        a = n("47354"),
        u = n("898511"),
        s = n("796205"),
        l = n("935741"),
        c = n("812638"),
        f = n("204394"),
        d = n("29884"),
        _ = n("776982"),
        E = n("388990"),
        p = n("62957"),
        m = n("792009"),
        y = n("563250"),
        I = n("281767"),
        h = n("941504");

    function O(e) {
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

    function T(e, t) {
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

    function S() {
        return {
            text: void 0,
            image: void 0,
            localCreationAnswerId: function() {
                return (0, i.v4)()
            }()
        }
    }

    function v(e) {
        return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
    }

    function g(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = e.reactions[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value;
                if (null == a.me_vote) return !0
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
        return !1
    }

    function A(e) {
        var t = I.ChannelTypesSets.POLLS.has(null == e ? void 0 : e.type),
            n = (0, u.useStateFromStores)([d.default], function() {
                return d.default.can(I.Permissions.SEND_MESSAGES, e)
            }),
            r = m.CreateGuildPollsExperiment.useExperiment({
                guildId: null == e ? void 0 : e.guild_id,
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || (null == e ? void 0 : e.isPrivate()) || !n
            }).enabled,
            o = m.CreateGDMPollsExperiment.useExperiment({
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || !(null == e ? void 0 : e.isPrivate())
            }).enabled;
        return r || o
    }

    function b(e) {
        return m.CreatePollsCoachmarkExperiment.useExperiment({
            guildId: e,
            location: "useCanShowPollsChatInputCoachmarkInGuild"
        }).enabled
    }

    function N() {
        return !1
    }

    function R(e, t, n) {
        return 0 === e.length && null == t.find(function(e) {
            return C(e, n)
        })
    }

    function C(e, t) {
        if (t === a.PollLayoutTypes.IMAGE_ONLY_ANSWERS) return null != e.image;
        var n, r = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return null != r && r.length > 0
    }

    function P(e, t) {
        var n, r = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return t === a.PollLayoutTypes.DEFAULT && null != e.image && (null == r || 0 === r.length)
    }

    function D(e) {
        if (null != e) {
            var t, n, r = null == e ? void 0 : null === (n = e.answers) || void 0 === n ? void 0 : n.map(function(e, t) {
                var n, r, o = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                    i = T(O({}, e.poll_media), {
                        emoji: null != o ? {
                            id: o.id,
                            name: null !== (r = o.name) && void 0 !== r ? r : ""
                        } : void 0
                    });
                return T(O({}, e), {
                    answer_id: t + 1,
                    poll_media: i
                })
            });
            var o = (null == e ? void 0 : e.duration) != null ? (t = e.duration, new Date(Date.now() + t * E.default.Millis.HOUR).toISOString()) : "0";
            return T(O({}, e), {
                expiry: o,
                answers: r
            })
        }
    }

    function L(e) {
        return e.reduce(function(e, t) {
            var n, r;
            return e + (null !== (r = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== r ? r : 0)
        }, 0)
    }

    function M(e, t, n) {
        var r, i, a, u, d, E, m, I, O = f.default.getMessage(t, e);
        if (null == O) return "";
        var T = O.getReaction({
                id: n,
                name: "",
                animated: !1
            }),
            S = null !== (I = null == T ? void 0 : null === (m = T.count_details) || void 0 === m ? void 0 : m.vote) && void 0 !== I ? I : 0;
        var v = (r = O, i = n, a = r.getChannelId(), u = c.default.getReactions(a, r.id, {
            id: i,
            name: "",
            animated: !1
        }, y.VOTES_TOOLTIP_MAX_USERS, s.ReactionTypes.VOTE), E = null == (d = l.default.getChannel(a)) || d.isPrivate() ? null : d.getGuildId(), o()(u).reject(function(e) {
            return _.default.isBlocked(e.id)
        }).take(y.VOTES_TOOLTIP_MAX_USERS).map(function(e) {
            return p.default.getName(E, null == d ? void 0 : d.id, e)
        }).value());
        return 0 === v.length ? "" : function(e, t) {
            var n = Math.max(0, t - e.length);
            if (1 === e.length) return n > 0 ? h.default.Messages.POLL_VOTES_TOOLTIP_1_N.format({
                a: e[0],
                n: n
            }) : e[0];
            if (2 === e.length) return n > 0 ? h.default.Messages.POLL_VOTES_TOOLTIP_2_N.format({
                a: e[0],
                b: e[1],
                n: n
            }) : h.default.Messages.POLL_VOTES_TOOLTIP_2.format({
                a: e[0],
                b: e[1]
            });
            if (3 !== e.length) return h.default.Messages.POLL_VOTES_TOOLTIP_N.format({
                n: n
            });
            else return n > 0 ? h.default.Messages.POLL_VOTES_TOOLTIP_3_N.format({
                a: e[0],
                b: e[1],
                c: e[2],
                n: n
            }) : h.default.Messages.POLL_VOTES_TOOLTIP_3.format({
                a: e[0],
                b: e[1],
                c: e[2]
            })
        }(v, S)
    }
}