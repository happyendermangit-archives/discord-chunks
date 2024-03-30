function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPopoutType: function() {
            return a
        },
        getEmojiPopoutData: function() {
            return d
        }
    });
    var r, o, i, a, u = n("330545"),
        s = n("941504");
    (r = i || (i = {})).DEFAULT = "Custom Emoji Popout", r.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", r.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", r.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", r.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", r.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (o = a || (a = {})).GET_PREMIUM = "GET_PREMIUM", o.JOIN_GUILD = "JOIN_GUILD", o.UNAVAILABLE = "UNAVAILABLE";
    var l = function(e) {
            var t = e.isPremium,
                n = e.hasJoinedEmojiSourceGuild,
                r = e.isUnusableRoleSubscriptionEmoji,
                o = e.emojiComesFromCurrentGuild,
                i = e.isDiscoverable,
                a = "Custom Emoji Popout";
            return t && !n && i ? a = "Custom Emoji Popout (Cross-Server)" : t || !n || r ? !t && !n && (a = i ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : a = o ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", a
        },
        c = function(e) {
            var t = e.isPremium,
                n = e.hasJoinedEmojiSourceGuild,
                r = e.isUnusableRoleSubscriptionEmoji,
                o = e.isDiscoverable,
                i = e.emojiComesFromCurrentGuild,
                a = e.userIsRoleSubscriber,
                l = e.isRoleSubscriptionEmoji,
                c = e.shouldHideRoleSubscriptionCTA,
                f = e.onOpenPremiumSettings,
                d = null;
            if (t) {
                if (n) d = l ? c && r ? s.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : r ? a ? s.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : s.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : s.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : u.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                    location: "_getEmojiPopoutDescription_1"
                }).enabled ? i ? s.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION_V2 : s.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION_V2 : i ? s.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : s.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION;
                else {
                    var _ = u.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                        location: "_getEmojiPopoutDescription_2"
                    }, {
                        disable: o,
                        autoTrackExposure: !o
                    }).enabled ? s.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION_V2 : s.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION;
                    d = o ? s.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : _
                }
            } else if (n) d = c && r ? s.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : r ? a ? s.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : s.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : i ? s.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : s.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION;
            else {
                var E = u.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                    location: "_getEmojiPopoutDescription_3"
                }, {
                    disable: o,
                    autoTrackExposure: !o
                }).enabled ? s.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION_V2 : s.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                    openPremiumSettings: f
                });
                d = o ? s.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : E
            }
            return d
        },
        f = function(e) {
            var t = e.isPremium,
                n = e.hasJoinedEmojiSourceGuild,
                r = e.isUnusableRoleSubscriptionEmoji,
                o = e.isDiscoverable,
                i = !n && o,
                a = !t && (n && !r || u.NitroBadgeOnEmojiHoverExperiment.getCurrentConfig({
                    location: "_getTypeTextDescription"
                }).enabled || i);
            return t && i ? {
                type: "JOIN_GUILD",
                text: s.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                description: null
            } : a ? {
                type: "GET_PREMIUM",
                text: s.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                description: null
            } : {
                type: "UNAVAILABLE",
                text: null,
                description: null
            }
        },
        d = function(e) {
            var t, n, r = c(e),
                o = l(e);
            return t = function(e) {
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
            }({}, f(e)), n = (n = {
                emojiDescription: r,
                analyticsType: o
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t
        }
}