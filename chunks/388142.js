function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        initiateChannelPrompts: function() {
            return f
        },
        forcePrompt: function() {
            return T
        },
        sendGamingStatsMessage: function() {
            return E
        },
        updateGamingStats: function() {
            return h
        }
    });
    var i = n("872717"),
        s = n("295426"),
        l = n("819689"),
        a = n("529805"),
        r = n("42203"),
        o = n("474643"),
        u = n("377253"),
        d = n("659500"),
        c = n("49111");

    function f(e) {
        i.HTTP.post({
            url: c.Endpoints.INITIATE_CHANNEL_PROMPTS,
            body: {
                guild_ids: e
            }
        })
    }

    function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
        i.HTTP.post({
            url: c.Endpoints.FORCE_SEND_PROMPT(e),
            body: {
                prompt_type: t
            }
        })
    }
    async function E(e, t, n) {
        await i.HTTP.post({
            url: c.Endpoints.SEND_GAMING_STATS(t),
            body: {
                message_reference: {
                    guild_id: e,
                    channel_id: t,
                    message_id: n
                }
            }
        }), _(t)
    }
    async function h(e) {
        let t = await i.HTTP.patch({
            url: c.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
        });
        if (null != t.text && "" !== t.text) {
            let n = r.default.getChannel(e.channel_id);
            null != n && ((0, a.createPendingReply)({
                channel: n,
                message: e,
                shouldMention: !1,
                showMentionToggle: !1
            }), _(n.id)), s.default.saveDraft(e.channel_id, t.text, o.DraftType.ChannelMessage)
        }
    }

    function _(e) {
        let t = u.default.getMessages(e);
        t.hasMoreAfter ? l.default.jumpToPresent(e, c.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(c.ComponentActions.SCROLLTO_PRESENT)
    }
}