function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createPollServerDataFromCreateRequest: function() {
            return v
        },
        filterOutUUID: function() {
            return N
        },
        generateEmptyPollAnswer: function() {
            return m
        },
        getPollAnswerVotesTooltipText: function() {
            return y
        },
        getTotalVotes: function() {
            return M
        },
        hasNonVoteReactions: function() {
            return O
        },
        isAnswerFilled: function() {
            return L
        },
        isIncompleteAnswer: function() {
            return D
        },
        isPollCreationEmpty: function() {
            return g
        },
        useCanPostImagePolls: function() {
            return C
        },
        useCanPostPollsInChannel: function() {
            return p
        },
        useCanShowPollsChatInputCoachmarkInGuild: function() {
            return R
        }
    }), n("757143"), n("47120"), n("724458");
    var i = n("392711"),
        r = n.n(i),
        s = n("153832"),
        a = n("263568"),
        o = n("442837"),
        l = n("566006"),
        u = n("592125"),
        d = n("542578"),
        _ = n("375954"),
        c = n("496675"),
        E = n("699516"),
        I = n("70956"),
        T = n("5192"),
        f = n("192616"),
        S = n("489887"),
        A = n("981631"),
        h = n("689938");

    function m() {
        return {
            text: void 0,
            image: void 0,
            localCreationAnswerId: function() {
                return (0, s.v4)()
            }()
        }
    }

    function N(e) {
        return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
    }

    function O(e) {
        for (let t of e.reactions)
            if (null == t.me_vote) return !0;
        return !1
    }

    function p(e) {
        let t = A.ChannelTypesSets.POLLS.has(null == e ? void 0 : e.type),
            n = (0, o.useStateFromStores)([c.default], () => c.default.can(A.Permissions.SEND_MESSAGES, e)),
            {
                enabled: i
            } = f.CreateGuildPollsExperiment.useExperiment({
                guildId: null == e ? void 0 : e.guild_id,
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || (null == e ? void 0 : e.isPrivate()) || !n
            }),
            {
                enabled: r
            } = f.CreateGDMPollsExperiment.useExperiment({
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || !(null == e ? void 0 : e.isPrivate())
            });
        return i || r
    }

    function R(e) {
        let {
            enabled: t
        } = f.CreatePollsCoachmarkExperiment.useExperiment({
            guildId: e,
            location: "useCanShowPollsChatInputCoachmarkInGuild"
        });
        return t
    }

    function C() {
        return !1
    }

    function g(e, t, n) {
        return 0 === e.length && null == t.find(e => L(e, n))
    }

    function L(e, t) {
        if (t === a.PollLayoutTypes.IMAGE_ONLY_ANSWERS) return null != e.image;
        {
            var n;
            let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
            return null != t && t.length > 0
        }
    }

    function D(e, t) {
        var n;
        let i = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return t === a.PollLayoutTypes.DEFAULT && null != e.image && (null == i || 0 === i.length)
    }

    function v(e) {
        var t, n;
        if (null == e) return;
        let i = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
            var n, i;
            let r = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                s = {
                    ...e.poll_media,
                    emoji: null != r ? {
                        id: r.id,
                        name: null !== (i = r.name) && void 0 !== i ? i : ""
                    } : void 0
                };
            return {
                ...e,
                answer_id: t + 1,
                poll_media: s
            }
        });
        let r = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * I.default.Millis.HOUR).toISOString()) : "0";
        return {
            ...e,
            expiry: r,
            answers: i
        }
    }

    function M(e) {
        return e.reduce((e, t) => {
            var n, i;
            return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0)
        }, 0)
    }

    function y(e, t, n) {
        var i, s;
        let a = _.default.getMessage(t, e);
        if (null == a) return "";
        let o = a.getReaction({
                id: n,
                name: "",
                animated: !1
            }),
            c = null !== (s = null == o ? void 0 : null === (i = o.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== s ? s : 0,
            I = function(e, t) {
                let n = e.getChannelId(),
                    i = d.default.getReactions(n, e.id, {
                        id: t,
                        name: "",
                        animated: !1
                    }, S.VOTES_TOOLTIP_MAX_USERS, l.ReactionTypes.VOTE),
                    s = u.default.getChannel(n),
                    a = null == s || s.isPrivate() ? null : s.getGuildId();
                return r()(i).reject(e => E.default.isBlocked(e.id)).take(S.VOTES_TOOLTIP_MAX_USERS).map(e => T.default.getName(a, null == s ? void 0 : s.id, e)).value()
            }(a, n);
        return 0 === I.length ? "" : function(e, t) {
            let n = Math.max(0, t - e.length);
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
        }(I, c)
    }
}