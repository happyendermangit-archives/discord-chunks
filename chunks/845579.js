function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UseLegacyChatInput: function() {
            return _
        },
        UseRichChatInput: function() {
            return f
        },
        ExpressionSuggestionsEnabled: function() {
            return E
        },
        IncludeStickersInAutocomplete: function() {
            return S
        },
        RenderSpoilers: function() {
            return g
        },
        UseThreadSidebar: function() {
            return h
        },
        QuietMode: function() {
            return m
        },
        EmojiPickerCollapsedSections: function() {
            return I
        },
        StickerPickerCollapsedSections: function() {
            return T
        },
        SoundboardPickerCollapsedSections: function() {
            return v
        },
        ViewImageDescriptions: function() {
            return A
        },
        ShowCommandSuggestions: function() {
            return N
        },
        AlwaysPreviewVideo: function() {
            return C
        },
        NotifyFriendsOnGoLive: function() {
            return R
        },
        NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET: function() {
            return O
        },
        NotificationCenterAckedBeforeId: function() {
            return L
        },
        InstallShortcutDesktop: function() {
            return y
        },
        InstallShortcutStartMenu: function() {
            return D
        },
        AllowActivityPartyPrivacyFriends: function() {
            return P
        },
        AllowActivityPartyPrivacyVoiceChannel: function() {
            return M
        },
        MessageRequestRestrictedGuildIds: function() {
            return b
        },
        MessageRequestRestrictedDefault: function() {
            return w
        },
        NonSpamRetrainingOptIn: function() {
            return G
        },
        DefaultGuildsRestricted: function() {
            return F
        },
        RestrictedGuildIds: function() {
            return k
        },
        FriendSourceFlagsSetting: function() {
            return B
        },
        RtcPanelShowVoiceStates: function() {
            return x
        },
        ConvertEmoticons: function() {
            return V
        },
        MessageDisplayCompact: function() {
            return H
        },
        SoundboardSettings: function() {
            return W
        },
        DropsOptedOut: function() {
            return Y
        },
        NativePhoneIntegrationEnabled: function() {
            return z
        },
        AfkTimeout: function() {
            return j
        },
        ViewNsfwGuilds: function() {
            return K
        },
        ViewNsfwCommands: function() {
            return Z
        },
        DisableGamesTab: function() {
            return X
        },
        EnableTTSCommand: function() {
            return q
        },
        ExplicitContentFilter: function() {
            return J
        },
        DmSpamFilterV2: function() {
            return Q
        },
        ShowCurrentGame: function() {
            return $
        },
        StatusSetting: function() {
            return et
        },
        StatusExpiresAtSetting: function() {
            return en
        },
        CustomStatusSetting: function() {
            return ei
        },
        BroadcastAllowFriends: function() {
            return eo
        },
        BroadcastAllowedGuildIds: function() {
            return es
        },
        BroadcastAllowedUserIds: function() {
            return el
        },
        BroadcastAutoBroadcast: function() {
            return ea
        },
        ClipsAllowVoiceRecording: function() {
            return eu
        },
        InlineAttachmentMedia: function() {
            return ec
        },
        InlineEmbedMedia: function() {
            return ed
        },
        RenderEmbeds: function() {
            return e_
        },
        RenderReactions: function() {
            return ef
        },
        TimezoneOffset: function() {
            return eE
        },
        DeveloperMode: function() {
            return eh
        },
        ClientThemeSettings: function() {
            return em
        },
        GifAutoPlay: function() {
            return ep
        },
        AnimateEmoji: function() {
            return eI
        },
        AnimateStickers: function() {
            return eT
        },
        ActivityRestrictedGuilds: function() {
            return eA
        },
        ActivityJoiningRestrictedGuilds: function() {
            return eC
        },
        DefaultGuildsActivityRestricted: function() {
            return eR
        },
        DisableHomeAutoNav: function() {
            return eO
        },
        FamilyCenterEnabled: function() {
            return eL
        },
        LegacyUsernameDisabled: function() {
            return ey
        },
        ExplicitContentSettings: function() {
            return eD
        }
    }), n("222007");
    var i = n("446674"),
        r = n("151426"),
        o = n("750028"),
        s = n("357626"),
        l = n("281473"),
        a = n("186709"),
        u = n("568456"),
        c = n("49111"),
        d = n("560241");
    let _ = (0, l.defineProtoSetting)("textAndImages", "useLegacyChatInput", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        f = (0, l.defineProtoSetting)("textAndImages", "useRichChatInput", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        E = (0, l.defineProtoSetting)("textAndImages", "expressionSuggestionsEnabled", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        S = (0, l.defineProtoSetting)("textAndImages", "includeStickersInAutocomplete", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        g = (0, l.defineProtoSetting)("textAndImages", "renderSpoilers", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.SpoilerRenderSetting.ON_CLICK
        }, e => o.StringValue.create({
            value: e
        })),
        h = (0, l.defineProtoSetting)("textAndImages", "useThreadSidebar", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        }));
    (0, l.defineProtoSetting)("notifications", "showInAppNotifications", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => o.BoolValue.create({
        value: e
    }));
    let m = (0, l.defineProtoSetting)("notifications", "quietMode", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: !!e
        })),
        p = [],
        I = (0, l.defineProtoSetting)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : p, e => e),
        T = (0, l.defineProtoSetting)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : p, e => e),
        v = (0, l.defineProtoSetting)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : p, e => e),
        A = (0, l.defineProtoSetting)("textAndImages", "viewImageDescriptions", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        N = (0, l.defineProtoSetting)("textAndImages", "showCommandSuggestions", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        C = (0, l.defineProtoSetting)("voiceAndVideo", "alwaysPreviewVideo", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        R = (0, l.defineProtoSetting)("notifications", "notifyFriendsOnGoLive", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
            value: e
        })),
        O = "0",
        L = (0, l.defineProtoSetting)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : O, e => e);
    (0, l.defineProtoSetting)("notifications", "enableBurstReactionNotifications", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => o.BoolValue.create({
        value: e
    }));
    let y = (0, l.defineProtoSetting)("gameLibrary", "installShortcutDesktop", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        D = (0, l.defineProtoSetting)("gameLibrary", "installShortcutStartMenu", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        P = (0, l.defineProtoSetting)("privacy", "allowActivityPartyPrivacyFriends", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        M = (0, l.defineProtoSetting)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        U = [],
        b = (0, l.defineProtoSetting)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : U, e => e),
        w = (0, l.defineProtoSetting)("privacy", "defaultMessageRequestRestricted", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        G = (0, l.defineProtoSetting)("privacy", "nonSpamRetrainingOptIn", e => null == e ? void 0 : e.value, e => null == e ? void 0 : o.BoolValue.create({
            value: e
        }));
    (0, l.defineProtoSetting)("privacy", "contactSyncEnabled", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
    }, e => o.BoolValue.create({
        value: e
    }));
    let F = (0, l.defineProtoSetting)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
        k = (0, l.defineProtoSetting)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
    (0, l.defineProtoSetting)("privacy", "friendDiscoveryFlags", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0
    }, e => o.UInt32Value.create({
        value: e
    }));
    let B = (0, l.defineProtoSetting)("privacy", "friendSourceFlags", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.AllFriendSourceFlags
        }, e => o.UInt32Value.create({
            value: e
        })),
        x = (0, l.defineProtoSetting)("debug", "rtcPanelShowVoiceStates", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        V = (0, l.defineProtoSetting)("textAndImages", "convertEmoticons", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        H = (0, l.defineProtoSetting)("textAndImages", "messageDisplayCompact", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        W = (0, l.defineProtoSetting)("voiceAndVideo", "soundboardSettings", e => e, e => e);
    (0, l.defineProtoSetting)("voiceAndVideo", "streamNotificationsEnabled", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => o.BoolValue.create({
        value: e
    }));
    let Y = (0, l.defineProtoSetting)("privacy", "dropsOptedOut", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        z = (0, l.defineProtoSetting)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        j = (0, l.defineProtoSetting)("voiceAndVideo", "afkTimeout", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600
        }, e => o.UInt32Value.create({
            value: e
        })),
        K = (0, l.defineProtoSetting)("textAndImages", "viewNsfwGuilds", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        Z = (0, l.defineProtoSetting)("textAndImages", "viewNsfwCommands", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        }));
    (0, l.defineProtoSetting)("privacy", "detectPlatformAccounts", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => o.BoolValue.create({
        value: e
    }));
    let X = (0, l.defineProtoSetting)("gameLibrary", "disableGamesTab", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        q = (0, l.defineProtoSetting)("textAndImages", "enableTtsCommand", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        J = (0, l.defineProtoSetting)("textAndImages", "explicitContentFilter", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.ExplicitContentFilterTypes.NON_FRIENDS
        }, e => o.UInt32Value.create({
            value: e
        }));
    (0, l.defineProtoSetting)("textAndImages", "dmSpamFilter", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.DmSpamFilterTypes.NON_FRIENDS
    }, e => o.UInt32Value.create({
        value: e
    }));
    let Q = (0, l.defineProtoSetting)("textAndImages", "dmSpamFilterV2", e => null != e ? e : r.DmSpamFilterV2.DEFAULT_UNSET, e => e),
        $ = (0, l.defineProtoSetting)("status", "showCurrentGame", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        ee = new Set(Object.values(c.StatusTypes)),
        et = (0, l.defineProtoSetting)("status", "status", e => null != e && ee.has(e.value) ? e.value : c.StatusTypes.UNKNOWN, e => o.StringValue.create({
            value: e
        })),
        en = (0, l.defineProtoSetting)("status", "statusExpiresAtMs", e => null != e ? e : "0", e => e),
        ei = (0, l.defineProtoSetting)("status", "customStatus", e => e, e => e),
        er = [],
        eo = (0, l.defineProtoSetting)("broadcast", "allowFriends", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
            value: e
        })),
        es = (0, l.defineProtoSetting)("broadcast", "allowedGuildIds", e => null != e ? e : er, e => e),
        el = (0, l.defineProtoSetting)("broadcast", "allowedUserIds", e => null != e ? e : er, e => e),
        ea = (0, l.defineProtoSetting)("broadcast", "autoBroadcast", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        eu = (0, l.defineProtoSetting)("clips", "allowVoiceRecording", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        ec = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "inlineAttachmentMedia", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "inlineAttachmentMedia"),
        ed = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "inlineEmbedMedia", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "inlineEmbedMedia"),
        e_ = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "renderEmbeds", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "renderEmbeds"),
        ef = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "renderReactions", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "renderReactions"),
        eE = (0, l.defineProtoSetting)("localization", "timezoneOffset", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null
        }, e => o.Int32Value.create({
            value: null != e ? e : 0
        }));
    (0, l.defineProtoSetting)("appearance", "mobileRedesignDisabled", e => null != e && e, e => e);
    let eS = new Set([s.ChannelListLayoutTypes.COZY, s.ChannelListLayoutTypes.COMPACT]);
    (0, l.defineProtoSetting)("appearance", "channelListLayout", e => null != e && eS.has(e.value) ? e.value : s.ChannelListLayoutTypes.COZY, e => o.StringValue.create({
        value: e
    }));
    let eg = new Set([s.MessagePreviewTypes.ALL, s.MessagePreviewTypes.UNREADS, s.MessagePreviewTypes.NONE]);
    (0, l.defineProtoSetting)("appearance", "messagePreviews", e => null != e && eg.has(e.value) ? e.value : s.MessagePreviewTypes.ALL, e => o.StringValue.create({
        value: e
    }));
    let eh = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
        em = (0, l.defineProtoSetting)("appearance", "clientThemeSettings", e => {
            var t;
            return {
                backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value
            }
        }, e => ({
            backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.UInt32Value.create({
                value: e.backgroundGradientPresetId
            }) : void 0
        })),
        ep = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "gifAutoPlay", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
            var e;
            return null === (e = a.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
        }, () => (0, i.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
        })),
        eI = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "animateEmoji", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "animateEmoji"), "animateEmoji", () => {
            var e;
            return null === (e = a.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
        }, () => (0, i.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
        })),
        eT = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "animateStickers", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.StickerAnimationSettings.ALWAYS_ANIMATE
        }, e => o.UInt32Value.create({
            value: e
        })), "text", "animateStickers"), "animateStickers", () => {
            var e;
            return null === (e = a.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
        }, () => (0, i.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
        })),
        ev = [],
        eA = (0, l.defineProtoSetting)("privacy", "activityRestrictedGuildIds", e => null != e ? e : ev, e => e),
        eN = [],
        eC = (0, l.defineProtoSetting)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : eN, e => e),
        eR = (0, l.defineProtoSetting)("privacy", "defaultGuildsActivityRestricted", e => e === r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS, e => !0 === e ? r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS : r.GuildActivityStatusRestrictionDefault.OFF),
        eO = (0, l.defineProtoSetting)("communities", "disableHomeAutoNav", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        eL = (0, l.defineProtoSetting)("privacy", "familyCenterEnabledV2", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
            value: e
        })),
        ey = (0, l.defineProtoSetting)("privacy", "hideLegacyUsername", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        eD = (0, l.defineProtoSetting)("textAndImages", "explicitContentSettings", e => {
            let {
                explicitContentGuilds: t,
                explicitContentFriendDm: n,
                explicitContentNonFriendDm: i
            } = null != e ? e : {};
            return {
                explicitContentGuilds: null != t ? t : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != n ? n : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != i ? i : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
            }
        }, e => {
            let {
                explicitContentGuilds: t,
                explicitContentFriendDm: n,
                explicitContentNonFriendDm: i
            } = e;
            return {
                explicitContentGuilds: null != t ? t : void 0,
                explicitContentFriendDm: null != n ? n : void 0,
                explicitContentNonFriendDm: null != i ? i : void 0
            }
        });
    (0, l.defineProtoSetting)("appearance", "searchResultExactCountEnabled", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
    }, e => o.BoolValue.create({
        value: e
    }))
}