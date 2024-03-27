function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPopoutType: function() {
            return a
        },
        getEmojiPopoutData: function() {
            return c
        }
    });
    var i, r, s, a, o = n("642345"),
        l = n("689938");
    (i = s || (s = {})).DEFAULT = "Custom Emoji Popout", i.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", i.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", i.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", i.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", i.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (r = a || (a = {})).GET_PREMIUM = "GET_PREMIUM", r.JOIN_GUILD = "JOIN_GUILD", r.UNAVAILABLE = "UNAVAILABLE";
    let u = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                emojiComesFromCurrentGuild: r,
                isDiscoverable: s
            } = e, a = "Custom Emoji Popout";
            return t && !n && s ? a = "Custom Emoji Popout (Cross-Server)" : t || !n || i ? !t && !n && (a = s ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : a = r ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", a
        },
        d = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                isDiscoverable: r,
                emojiComesFromCurrentGuild: s,
                userIsRoleSubscriber: a,
                isRoleSubscriptionEmoji: u,
                shouldHideRoleSubscriptionCTA: d,
                onOpenPremiumSettings: _
            } = e, c = null;
            if (t) {
                if (n) {
                    if (u) c = d && i ? l.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : i ? a ? l.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : l.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : l.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION;
                    else {
                        let {
                            enabled: e
                        } = o.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                            location: "_getEmojiPopoutDescription_1"
                        });
                        c = e ? s ? l.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION_V2 : l.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION_V2 : s ? l.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : l.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION
                    }
                } else {
                    let e = o.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                        location: "_getEmojiPopoutDescription_2"
                    }, {
                        disable: r,
                        autoTrackExposure: !r
                    }).enabled ? l.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION_V2 : l.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION;
                    c = r ? l.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : e
                }
            } else if (n) c = d && i ? l.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : i ? a ? l.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : l.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : s ? l.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : l.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION;
            else {
                let e = o.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                    location: "_getEmojiPopoutDescription_3"
                }, {
                    disable: r,
                    autoTrackExposure: !r
                }).enabled ? l.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION_V2 : l.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                    openPremiumSettings: _
                });
                c = r ? l.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : e
            }
            return c
        },
        _ = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                isDiscoverable: r
            } = e, s = !n && r, a = !t && (n && !i || o.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                location: "_getTypeTextDescription"
            }).enabled || s);
            return t && s ? {
                type: "JOIN_GUILD",
                text: l.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                description: null
            } : a ? {
                type: "GET_PREMIUM",
                text: l.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                description: null
            } : {
                type: "UNAVAILABLE",
                text: null,
                description: null
            }
        },
        c = e => {
            let t = d(e),
                n = u(e);
            return {
                ..._(e),
                emojiDescription: t,
                analyticsType: n
            }
        }
}