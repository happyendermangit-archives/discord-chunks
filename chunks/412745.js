function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPopoutType: function() {
            return s
        },
        getEmojiPopoutData: function() {
            return f
        }
    });
    var i, l, a, s, r = n("505233"),
        o = n("782340");
    (i = a || (a = {})).DEFAULT = "Custom Emoji Popout", i.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", i.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", i.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", i.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", i.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (l = s || (s = {})).GET_PREMIUM = "GET_PREMIUM", l.JOIN_GUILD = "JOIN_GUILD", l.UNAVAILABLE = "UNAVAILABLE";
    let u = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                emojiComesFromCurrentGuild: l,
                isDiscoverable: a
            } = e, s = "Custom Emoji Popout";
            return t && !n && a ? s = "Custom Emoji Popout (Cross-Server)" : t || !n || i ? !t && !n && (s = a ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : s = l ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", s
        },
        d = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                isDiscoverable: l,
                emojiComesFromCurrentGuild: a,
                userIsRoleSubscriber: s,
                isRoleSubscriptionEmoji: u,
                shouldHideRoleSubscriptionCTA: d,
                onOpenPremiumSettings: c
            } = e, f = null;
            if (t) {
                if (n) {
                    if (u) f = d && i ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : i ? s ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION;
                    else {
                        let {
                            enabled: e
                        } = r.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                            location: "_getEmojiPopoutDescription_1"
                        });
                        f = e ? a ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION_V2 : o.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION_V2 : a ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION
                    }
                } else {
                    let e = r.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                        location: "_getEmojiPopoutDescription_2"
                    }, {
                        disable: l,
                        autoTrackExposure: !l
                    }).enabled ? o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION_V2 : o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION;
                    f = l ? o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : e
                }
            } else if (n) f = d && i ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : i ? s ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : a ? o.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION;
            else {
                let e = r.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                    location: "_getEmojiPopoutDescription_3"
                }, {
                    disable: l,
                    autoTrackExposure: !l
                }).enabled ? o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION_V2 : o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                    openPremiumSettings: c
                });
                f = l ? o.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : e
            }
            return f
        },
        c = e => {
            let {
                isPremium: t,
                hasJoinedEmojiSourceGuild: n,
                isUnusableRoleSubscriptionEmoji: i,
                isDiscoverable: l
            } = e, a = !n && l, s = !t && (n && !i || r.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                location: "_getTypeTextDescription"
            }).enabled || a);
            return t && a ? {
                type: "JOIN_GUILD",
                text: o.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                description: null
            } : s ? {
                type: "GET_PREMIUM",
                text: o.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                description: null
            } : {
                type: "UNAVAILABLE",
                text: null,
                description: null
            }
        },
        f = e => {
            let t = d(e),
                n = u(e),
                i = c(e);
            return {
                ...i,
                emojiDescription: t,
                analyticsType: n
            }
        }
}