function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPopoutType: function() {
            return a
        },
        getEmojiPopoutData: function() {
            return _
        }
    });
    var i, r, s, a, o = n("689938");
    (i = s || (s = {})).DEFAULT = "Custom Emoji Popout", i.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", i.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", i.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", i.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", i.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (r = a || (a = {})).GET_PREMIUM = "GET_PREMIUM", r.JOIN_GUILD = "JOIN_GUILD", r.UNAVAILABLE = "UNAVAILABLE";
    let l = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                emojiComesFromCurrentGuild: r,
                isDiscoverable: s
            } = e, a = "Custom Emoji Popout";
            return t && !n && s ? a = "Custom Emoji Popout (Cross-Server)" : t || !n || i ? !t && !n && (a = s ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : a = r ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", a
        },
        u = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                isDiscoverable: r,
                emojiComesFromCurrentGuild: s,
                userIsRoleSubscriber: a,
                isRoleSubscriptionEmoji: l,
                shouldHideRoleSubscriptionCTA: u,
                onOpenPremiumSettings: d
            } = e, _ = null;
            return _ = t ? n ? l ? u && i ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : i ? a ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : s ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : r ? o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? u && i ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : i ? a ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : s ? o.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : r ? o.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                openPremiumSettings: d
            })
        },
        d = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                isDiscoverable: r
            } = e, s = !n && r;
            return t && s ? {
                type: "JOIN_GUILD",
                text: o.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                description: null
            } : !t && (n && !i || s) ? {
                type: "GET_PREMIUM",
                text: o.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                description: null
            } : {
                type: "UNAVAILABLE",
                text: null,
                description: null
            }
        },
        _ = e => {
            let t = u(e),
                n = l(e);
            return {
                ...d(e),
                emojiDescription: t,
                analyticsType: n
            }
        }
}