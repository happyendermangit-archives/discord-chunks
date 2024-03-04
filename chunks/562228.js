function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateEmptyPollAnswer: function() {
            return u
        },
        filterOutUUID: function() {
            return d
        },
        hasNonVoteReactions: function() {
            return c
        },
        useCanPostPollsInChannel: function() {
            return f
        },
        useCanPostImagePolls: function() {
            return _
        },
        isPollCreationEmpty: function() {
            return h
        },
        isAnswerFilled: function() {
            return E
        },
        isIncompleteAnswer: function() {
            return g
        },
        createPollServerDataFromCreateRequest: function() {
            return m
        },
        getTotalVotes: function() {
            return p
        }
    }), n("781738"), n("222007"), n("808653");
    var i = n("748820"),
        s = n("418009"),
        r = n("957255"),
        a = n("718517"),
        o = n("83995"),
        l = n("49111");

    function u() {
        return {
            text: void 0,
            image: void 0,
            localCreationAnswerId: function() {
                return (0, i.v4)()
            }()
        }
    }

    function d(e) {
        return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
    }

    function c(e) {
        for (let t of e.reactions)
            if (null == t.me_vote) return !0;
        return !1
    }

    function f(e) {
        let t = l.ChannelTypesSets.POLLS.has(e.type),
            {
                enabled: n
            } = o.CreateGuildPollsExperiment.useExperiment({
                guildId: e.guild_id,
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || e.isPrivate() || !r.default.can(l.Permissions.SEND_MESSAGES, e)
            }),
            {
                enabled: i
            } = o.CreateGDMPollsExperiment.useExperiment({
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || !e.isPrivate()
            });
        return n || i
    }

    function _() {
        return !1
    }

    function h(e, t, n) {
        return 0 === e.length && null == t.find(e => E(e, n))
    }

    function E(e, t) {
        if (t === s.PollLayoutTypes.IMAGE_ONLY_ANSWERS) return null != e.image;
        {
            var n;
            let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
            return null != t && t.length > 0
        }
    }

    function g(e, t) {
        var n;
        let i = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return t === s.PollLayoutTypes.DEFAULT && null != e.image && (null == i || 0 === i.length)
    }

    function m(e) {
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
        let s = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * a.default.Millis.HOUR).toISOString()) : "0";
        return {
            ...e,
            expiry: s,
            answers: i
        }
    }

    function p(e) {
        return e.reduce((e, t) => {
            var n, i;
            return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0)
        }, 0)
    }
}