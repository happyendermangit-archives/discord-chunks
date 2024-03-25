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
            return S
        },
        IncludeStickersInAutocomplete: function() {
            return E
        },
        RenderSpoilers: function() {
            return g
        },
        UseThreadSidebar: function() {
            return m
        },
        FocusMode: function() {
            return h
        },
        FocusModeExpiresAtSetting: function() {
            return p
        },
        EmojiPickerCollapsedSections: function() {
            return T
        },
        StickerPickerCollapsedSections: function() {
            return v
        },
        SoundboardPickerCollapsedSections: function() {
            return A
        },
        ViewImageDescriptions: function() {
            return N
        },
        ShowCommandSuggestions: function() {
            return C
        },
        AlwaysPreviewVideo: function() {
            return R
        },
        NotifyFriendsOnGoLive: function() {
            return O
        },
        NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET: function() {
            return L
        },
        NotificationCenterAckedBeforeId: function() {
            return y
        },
        InstallShortcutDesktop: function() {
            return D
        },
        InstallShortcutStartMenu: function() {
            return P
        },
        AllowActivityPartyPrivacyFriends: function() {
            return M
        },
        AllowActivityPartyPrivacyVoiceChannel: function() {
            return U
        },
        MessageRequestRestrictedGuildIds: function() {
            return w
        },
        MessageRequestRestrictedDefault: function() {
            return G
        },
        NonSpamRetrainingOptIn: function() {
            return F
        },
        DefaultGuildsRestricted: function() {
            return k
        },
        RestrictedGuildIds: function() {
            return B
        },
        FriendSourceFlagsSetting: function() {
            return x
        },
        RtcPanelShowVoiceStates: function() {
            return V
        },
        ConvertEmoticons: function() {
            return H
        },
        MessageDisplayCompact: function() {
            return W
        },
        SoundboardSettings: function() {
            return Y
        },
        DropsOptedOut: function() {
            return z
        },
        NativePhoneIntegrationEnabled: function() {
            return j
        },
        AfkTimeout: function() {
            return K
        },
        ViewNsfwGuilds: function() {
            return Z
        },
        ViewNsfwCommands: function() {
            return X
        },
        DisableGamesTab: function() {
            return q
        },
        EnableTTSCommand: function() {
            return J
        },
        ExplicitContentFilter: function() {
            return Q
        },
        DmSpamFilterV2: function() {
            return $
        },
        ShowCurrentGame: function() {
            return ee
        },
        RecentGamesEnabled: function() {
            return et
        },
        StatusSetting: function() {
            return ei
        },
        StatusExpiresAtSetting: function() {
            return er
        },
        CustomStatusSetting: function() {
            return eo
        },
        BroadcastAllowFriends: function() {
            return el
        },
        BroadcastAllowedGuildIds: function() {
            return ea
        },
        BroadcastAllowedUserIds: function() {
            return eu
        },
        BroadcastAutoBroadcast: function() {
            return ec
        },
        ClipsAllowVoiceRecording: function() {
            return ed
        },
        InlineAttachmentMedia: function() {
            return e_
        },
        InlineEmbedMedia: function() {
            return ef
        },
        RenderEmbeds: function() {
            return eS
        },
        RenderReactions: function() {
            return eE
        },
        TimezoneOffset: function() {
            return eg
        },
        DeveloperMode: function() {
            return ep
        },
        ClientThemeSettings: function() {
            return eI
        },
        GifAutoPlay: function() {
            return eT
        },
        AnimateEmoji: function() {
            return ev
        },
        AnimateStickers: function() {
            return eA
        },
        ActivityRestrictedGuilds: function() {
            return eC
        },
        ActivityJoiningRestrictedGuilds: function() {
            return eO
        },
        DefaultGuildsActivityRestricted: function() {
            return eL
        },
        DisableHomeAutoNav: function() {
            return ey
        },
        FamilyCenterEnabled: function() {
            return eD
        },
        LegacyUsernameDisabled: function() {
            return eP
        },
        ExplicitContentSettings: function() {
            return eM
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
        S = (0, l.defineProtoSetting)("textAndImages", "expressionSuggestionsEnabled", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        E = (0, l.defineProtoSetting)("textAndImages", "includeStickersInAutocomplete", e => {
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
        m = (0, l.defineProtoSetting)("textAndImages", "useThreadSidebar", e => {
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
    let h = (0, l.defineProtoSetting)("notifications", "quietMode", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: !!e
        })),
        p = (0, l.defineProtoSetting)("notifications", "focusModeExpiresAtMs", e => null != e ? e : "0", e => e),
        I = [],
        T = (0, l.defineProtoSetting)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : I, e => e),
        v = (0, l.defineProtoSetting)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : I, e => e),
        A = (0, l.defineProtoSetting)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : I, e => e),
        N = (0, l.defineProtoSetting)("textAndImages", "viewImageDescriptions", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        C = (0, l.defineProtoSetting)("textAndImages", "showCommandSuggestions", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        R = (0, l.defineProtoSetting)("voiceAndVideo", "alwaysPreviewVideo", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        O = (0, l.defineProtoSetting)("notifications", "notifyFriendsOnGoLive", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
            value: e
        })),
        L = "0",
        y = (0, l.defineProtoSetting)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : L, e => e);
    (0, l.defineProtoSetting)("notifications", "enableBurstReactionNotifications", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => o.BoolValue.create({
        value: e
    }));
    let D = (0, l.defineProtoSetting)("gameLibrary", "installShortcutDesktop", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        P = (0, l.defineProtoSetting)("gameLibrary", "installShortcutStartMenu", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        M = (0, l.defineProtoSetting)("privacy", "allowActivityPartyPrivacyFriends", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        U = (0, l.defineProtoSetting)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        b = [],
        w = (0, l.defineProtoSetting)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : b, e => e),
        G = (0, l.defineProtoSetting)("privacy", "defaultMessageRequestRestricted", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        F = (0, l.defineProtoSetting)("privacy", "nonSpamRetrainingOptIn", e => null == e ? void 0 : e.value, e => null == e ? void 0 : o.BoolValue.create({
            value: e
        }));
    (0, l.defineProtoSetting)("privacy", "contactSyncEnabled", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
    }, e => o.BoolValue.create({
        value: e
    }));
    let k = (0, l.defineProtoSetting)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
        B = (0, l.defineProtoSetting)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
    (0, l.defineProtoSetting)("privacy", "friendDiscoveryFlags", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0
    }, e => o.UInt32Value.create({
        value: e
    }));
    let x = (0, l.defineProtoSetting)("privacy", "friendSourceFlags", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.AllFriendSourceFlags
        }, e => o.UInt32Value.create({
            value: e
        })),
        V = (0, l.defineProtoSetting)("debug", "rtcPanelShowVoiceStates", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        H = (0, l.defineProtoSetting)("textAndImages", "convertEmoticons", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        W = (0, l.defineProtoSetting)("textAndImages", "messageDisplayCompact", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        Y = (0, l.defineProtoSetting)("voiceAndVideo", "soundboardSettings", e => e, e => e);
    (0, l.defineProtoSetting)("voiceAndVideo", "streamNotificationsEnabled", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => o.BoolValue.create({
        value: e
    }));
    let z = (0, l.defineProtoSetting)("privacy", "dropsOptedOut", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        j = (0, l.defineProtoSetting)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        K = (0, l.defineProtoSetting)("voiceAndVideo", "afkTimeout", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600
        }, e => o.UInt32Value.create({
            value: e
        })),
        Z = (0, l.defineProtoSetting)("textAndImages", "viewNsfwGuilds", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        X = (0, l.defineProtoSetting)("textAndImages", "viewNsfwCommands", e => {
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
    let q = (0, l.defineProtoSetting)("gameLibrary", "disableGamesTab", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        J = (0, l.defineProtoSetting)("textAndImages", "enableTtsCommand", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        Q = (0, l.defineProtoSetting)("textAndImages", "explicitContentFilter", e => {
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
    let $ = (0, l.defineProtoSetting)("textAndImages", "dmSpamFilterV2", e => null != e ? e : r.DmSpamFilterV2.DEFAULT_UNSET, e => e),
        ee = (0, l.defineProtoSetting)("status", "showCurrentGame", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        et = (0, l.defineProtoSetting)("privacy", "recentGamesEnabled", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        en = new Set(Object.values(c.StatusTypes)),
        ei = (0, l.defineProtoSetting)("status", "status", e => null != e && en.has(e.value) ? e.value : c.StatusTypes.UNKNOWN, e => o.StringValue.create({
            value: e
        })),
        er = (0, l.defineProtoSetting)("status", "statusExpiresAtMs", e => null != e ? e : "0", e => e),
        eo = (0, l.defineProtoSetting)("status", "customStatus", e => e, e => e),
        es = [],
        el = (0, l.defineProtoSetting)("broadcast", "allowFriends", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
            value: e
        })),
        ea = (0, l.defineProtoSetting)("broadcast", "allowedGuildIds", e => null != e ? e : es, e => e),
        eu = (0, l.defineProtoSetting)("broadcast", "allowedUserIds", e => null != e ? e : es, e => e),
        ec = (0, l.defineProtoSetting)("broadcast", "autoBroadcast", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        ed = (0, l.defineProtoSetting)("clips", "allowVoiceRecording", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })),
        e_ = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "inlineAttachmentMedia", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "inlineAttachmentMedia"),
        ef = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "inlineEmbedMedia", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "inlineEmbedMedia"),
        eS = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "renderEmbeds", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "renderEmbeds"),
        eE = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "renderReactions", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => o.BoolValue.create({
            value: e
        })), "text", "renderReactions"),
        eg = (0, l.defineProtoSetting)("localization", "timezoneOffset", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null
        }, e => o.Int32Value.create({
            value: null != e ? e : 0
        }));
    (0, l.defineProtoSetting)("appearance", "mobileRedesignDisabled", e => null != e && e, e => e);
    let em = new Set([s.ChannelListLayoutTypes.COZY, s.ChannelListLayoutTypes.COMPACT]);
    (0, l.defineProtoSetting)("appearance", "channelListLayout", e => null != e && em.has(e.value) ? e.value : s.ChannelListLayoutTypes.COZY, e => o.StringValue.create({
        value: e
    }));
    let eh = new Set([s.MessagePreviewTypes.ALL, s.MessagePreviewTypes.UNREADS, s.MessagePreviewTypes.NONE]);
    (0, l.defineProtoSetting)("appearance", "messagePreviews", e => null != e && eh.has(e.value) ? e.value : s.MessagePreviewTypes.ALL, e => o.StringValue.create({
        value: e
    }));
    let ep = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
        eI = (0, l.defineProtoSetting)("appearance", "clientThemeSettings", e => {
            var t;
            return {
                backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value
            }
        }, e => ({
            backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.UInt32Value.create({
                value: e.backgroundGradientPresetId
            }) : void 0
        })),
        eT = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "gifAutoPlay", e => {
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
        ev = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "animateEmoji", e => {
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
        eA = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "animateStickers", e => {
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
        eN = [],
        eC = (0, l.defineProtoSetting)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eN, e => e),
        eR = [],
        eO = (0, l.defineProtoSetting)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : eR, e => e),
        eL = (0, l.defineProtoSetting)("privacy", "defaultGuildsActivityRestricted", e => e === r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS, e => !0 === e ? r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS : r.GuildActivityStatusRestrictionDefault.OFF),
        ey = (0, l.defineProtoSetting)("communities", "disableHomeAutoNav", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        eD = (0, l.defineProtoSetting)("privacy", "familyCenterEnabledV2", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
            value: e
        })),
        eP = (0, l.defineProtoSetting)("privacy", "hideLegacyUsername", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => o.BoolValue.create({
            value: e
        })),
        eM = (0, l.defineProtoSetting)("textAndImages", "explicitContentSettings", e => {
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