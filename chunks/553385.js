function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        forcePrompt: function() {
            return E
        },
        initiateChannelPrompts: function() {
            return c
        },
        sendGamingStatsMessage: function() {
            return I
        },
        updateGamingStats: function() {
            return T
        }
    });
    var i = n("544891"),
        r = n("430742"),
        s = n("904245"),
        a = n("623292"),
        o = n("592125"),
        l = n("703558"),
        u = n("375954"),
        d = n("585483"),
        _ = n("981631");

    function c(e) {
        i.HTTP.post({
            url: _.Endpoints.INITIATE_CHANNEL_PROMPTS,
            body: {
                guild_ids: e
            }
        })
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
        i.HTTP.post({
            url: _.Endpoints.FORCE_SEND_PROMPT(e),
            body: {
                prompt_type: t
            }
        })
    }
    async function I(e, t, n) {
        await i.HTTP.post({
            url: _.Endpoints.SEND_GAMING_STATS(t),
            body: {
                message_reference: {
                    guild_id: e,
                    channel_id: t,
                    message_id: n
                }
            }
        }), f(t)
    }
    async function T(e) {
        let t = await i.HTTP.patch({
            url: _.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
        });
        if (null != t.text && "" !== t.text) {
            let n = o.default.getChannel(e.channel_id);
            null != n && ((0, a.createPendingReply)({
                channel: n,
                message: e,
                shouldMention: !1,
                showMentionToggle: !1
            }), f(n.id)), r.default.saveDraft(e.channel_id, t.text, l.DraftType.ChannelMessage)
        }
    }

    function f(e) {
        u.default.getMessages(e).hasMoreAfter ? s.default.jumpToPresent(e, _.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(_.ComponentActions.SCROLLTO_PRESENT)
    }
}