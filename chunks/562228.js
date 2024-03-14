function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateEmptyPollAnswer: function() {
            return S
        },
        filterOutUUID: function() {
            return v
        },
        hasNonVoteReactions: function() {
            return T
        },
        useCanPostPollsInChannel: function() {
            return I
        },
        useCanPostImagePolls: function() {
            return C
        },
        isPollCreationEmpty: function() {
            return A
        },
        isAnswerFilled: function() {
            return y
        },
        isIncompleteAnswer: function() {
            return N
        },
        createPollServerDataFromCreateRequest: function() {
            return R
        },
        getTotalVotes: function() {
            return O
        },
        getPollAnswerVotesTooltipText: function() {
            return D
        }
    }), n("781738"), n("222007"), n("808653");
    var i = n("917351"),
        s = n.n(i),
        r = n("748820"),
        a = n("418009"),
        o = n("875978"),
        l = n("42203"),
        u = n("486996"),
        d = n("377253"),
        c = n("957255"),
        f = n("27618"),
        _ = n("718517"),
        h = n("387111"),
        E = n("83995"),
        g = n("491096"),
        m = n("49111"),
        p = n("782340");

    function S() {
        return {
            text: void 0,
            image: void 0,
            localCreationAnswerId: function() {
                return (0, r.v4)()
            }()
        }
    }

    function v(e) {
        return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
    }

    function T(e) {
        for (let t of e.reactions)
            if (null == t.me_vote) return !0;
        return !1
    }

    function I(e) {
        let t = m.ChannelTypesSets.POLLS.has(null == e ? void 0 : e.type),
            {
                enabled: n
            } = E.CreateGuildPollsExperiment.useExperiment({
                guildId: null == e ? void 0 : e.guild_id,
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || (null == e ? void 0 : e.isPrivate()) || !c.default.can(m.Permissions.SEND_MESSAGES, e)
            }),
            {
                enabled: i
            } = E.CreateGDMPollsExperiment.useExperiment({
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || !(null == e ? void 0 : e.isPrivate())
            });
        return n || i
    }

    function C() {
        return !1
    }

    function A(e, t, n) {
        return 0 === e.length && null == t.find(e => y(e, n))
    }

    function y(e, t) {
        if (t === a.PollLayoutTypes.IMAGE_ONLY_ANSWERS) return null != e.image;
        {
            var n;
            let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
            return null != t && t.length > 0
        }
    }

    function N(e, t) {
        var n;
        let i = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return t === a.PollLayoutTypes.DEFAULT && null != e.image && (null == i || 0 === i.length)
    }

    function R(e) {
        var t, n;
        if (null == e) return;
        let i = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
            var n, i;
            let s = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                r = {
                    ...e.poll_media,
                    emoji: null != s ? {
                        id: s.id,
                        name: null !== (i = s.name) && void 0 !== i ? i : ""
                    } : void 0
                };
            return {
                ...e,
                answer_id: t + 1,
                poll_media: r
            }
        });
        let s = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * _.default.Millis.HOUR).toISOString()) : "0";
        return {
            ...e,
            expiry: s,
            answers: i
        }
    }

    function O(e) {
        return e.reduce((e, t) => {
            var n, i;
            return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0)
        }, 0)
    }

    function D(e, t, n) {
        var i, r;
        let a = d.default.getMessage(t, e);
        if (null == a) return "";
        let c = a.getReaction({
                id: n,
                name: "",
                animated: !1
            }),
            _ = null !== (r = null == c ? void 0 : null === (i = c.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== r ? r : 0,
            E = function(e, t) {
                let n = e.getChannelId(),
                    i = u.default.getReactions(n, e.id, {
                        id: t,
                        name: "",
                        animated: !1
                    }, g.VOTES_TOOLTIP_MAX_USERS, o.ReactionTypes.VOTE),
                    r = l.default.getChannel(n),
                    a = null == r || r.isPrivate() ? null : r.getGuildId();
                return s(i).reject(e => f.default.isBlocked(e.id)).take(g.VOTES_TOOLTIP_MAX_USERS).map(e => h.default.getName(a, null == r ? void 0 : r.id, e)).value()
            }(a, n);
        return 0 === E.length ? "" : function(e, t) {
            let n = Math.max(0, t - e.length);
            if (1 === e.length) return n > 0 ? p.default.Messages.POLL_VOTES_TOOLTIP_1_N.format({
                a: e[0],
                n: n
            }) : e[0];
            if (2 === e.length) return n > 0 ? p.default.Messages.POLL_VOTES_TOOLTIP_2_N.format({
                a: e[0],
                b: e[1],
                n: n
            }) : p.default.Messages.POLL_VOTES_TOOLTIP_2.format({
                a: e[0],
                b: e[1]
            });
            if (3 !== e.length) return p.default.Messages.POLL_VOTES_TOOLTIP_N.format({
                n: n
            });
            else return n > 0 ? p.default.Messages.POLL_VOTES_TOOLTIP_3_N.format({
                a: e[0],
                b: e[1],
                c: e[2],
                n: n
            }) : p.default.Messages.POLL_VOTES_TOOLTIP_3.format({
                a: e[0],
                b: e[1],
                c: e[2]
            })
        }(E, _)
    }
}