function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        initiateChannelPrompts: function() {
            return f
        },
        forcePrompt: function() {
            return E
        },
        sendGamingStatsMessage: function() {
            return _
        },
        updateGamingStats: function() {
            return S
        }
    });
    var s = n("872717"),
        i = n("295426"),
        r = n("819689"),
        a = n("529805"),
        u = n("42203"),
        l = n("474643"),
        o = n("377253"),
        d = n("659500"),
        c = n("49111");

    function f(e) {
        s.default.post({
            url: c.Endpoints.INITIATE_CHANNEL_PROMPTS,
            body: {
                guild_ids: e
            }
        })
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
        s.default.post({
            url: c.Endpoints.FORCE_SEND_PROMPT(e),
            body: {
                prompt_type: t
            }
        })
    }
    async function _(e, t, n) {
        await s.default.post({
            url: c.Endpoints.SEND_GAMING_STATS(t),
            body: {
                message_reference: {
                    guild_id: e,
                    channel_id: t,
                    message_id: n
                }
            }
        }), T(t)
    }
    async function S(e) {
        let t = await s.default.patch({
            url: c.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
        });
        if (null != t.text && "" !== t.text) {
            let n = u.default.getChannel(e.channel_id);
            null != n && ((0, a.createPendingReply)({
                channel: n,
                message: e,
                shouldMention: !1,
                showMentionToggle: !1
            }), T(n.id)), i.default.saveDraft(e.channel_id, t.text, l.DraftType.ChannelMessage)
        }
    }

    function T(e) {
        let t = o.default.getMessages(e);
        t.hasMoreAfter ? r.default.jumpToPresent(e, c.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(c.ComponentActions.SCROLLTO_PRESENT)
    }
}