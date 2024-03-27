function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityJoiningRestrictedGuilds: function() {
            return eL
        },
        ActivityRestrictedGuilds: function() {
            return eC
        },
        AfkTimeout: function() {
            return z
        },
        AllowActivityPartyPrivacyFriends: function() {
            return P
        },
        AllowActivityPartyPrivacyVoiceChannel: function() {
            return U
        },
        AlwaysPreviewVideo: function() {
            return g
        },
        AnimateEmoji: function() {
            return eO
        },
        AnimateStickers: function() {
            return ep
        },
        BroadcastAllowFriends: function() {
            return eo
        },
        BroadcastAllowedGuildIds: function() {
            return el
        },
        BroadcastAllowedUserIds: function() {
            return eu
        },
        BroadcastAutoBroadcast: function() {
            return ed
        },
        ClientThemeSettings: function() {
            return em
        },
        ClipsAllowVoiceRecording: function() {
            return e_
        },
        ConvertEmoticons: function() {
            return H
        },
        CustomStatusSetting: function() {
            return es
        },
        DefaultGuildsActivityRestricted: function() {
            return eD
        },
        DefaultGuildsRestricted: function() {
            return B
        },
        DeveloperMode: function() {
            return eA
        },
        DisableGamesTab: function() {
            return q
        },
        DisableHomeAutoNav: function() {
            return ev
        },
        DmSpamFilterV2: function() {
            return $
        },
        DropsOptedOut: function() {
            return W
        },
        EmojiPickerCollapsedSections: function() {
            return N
        },
        EnableTTSCommand: function() {
            return J
        },
        ExplicitContentFilter: function() {
            return Z
        },
        ExplicitContentSettings: function() {
            return eP
        },
        ExpressionSuggestionsEnabled: function() {
            return I
        },
        FamilyCenterEnabled: function() {
            return eM
        },
        FocusMode: function() {
            return h
        },
        FocusModeExpiresAtSetting: function() {
            return A
        },
        FriendSourceFlagsSetting: function() {
            return F
        },
        GifAutoPlay: function() {
            return eN
        },
        IncludeStickersInAutocomplete: function() {
            return T
        },
        InlineAttachmentMedia: function() {
            return ec
        },
        InlineEmbedMedia: function() {
            return eE
        },
        InstallShortcutDesktop: function() {
            return M
        },
        InstallShortcutStartMenu: function() {
            return y
        },
        LegacyUsernameDisabled: function() {
            return ey
        },
        MessageDisplayCompact: function() {
            return Y
        },
        MessageRequestRestrictedDefault: function() {
            return w
        },
        MessageRequestRestrictedGuildIds: function() {
            return G
        },
        NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET: function() {
            return D
        },
        NativePhoneIntegrationEnabled: function() {
            return K
        },
        NonSpamRetrainingOptIn: function() {
            return k
        },
        NotificationCenterAckedBeforeId: function() {
            return v
        },
        NotifyFriendsOnGoLive: function() {
            return L
        },
        RecentGamesEnabled: function() {
            return et
        },
        RenderEmbeds: function() {
            return eI
        },
        RenderReactions: function() {
            return eT
        },
        RenderSpoilers: function() {
            return f
        },
        RestrictedGuildIds: function() {
            return V
        },
        RtcPanelShowVoiceStates: function() {
            return x
        },
        ShowCommandSuggestions: function() {
            return C
        },
        ShowCurrentGame: function() {
            return ee
        },
        SoundboardPickerCollapsedSections: function() {
            return p
        },
        SoundboardSettings: function() {
            return j
        },
        StatusExpiresAtSetting: function() {
            return er
        },
        StatusSetting: function() {
            return ei
        },
        StickerPickerCollapsedSections: function() {
            return O
        },
        TimezoneOffset: function() {
            return ef
        },
        UseLegacyChatInput: function() {
            return c
        },
        UseRichChatInput: function() {
            return E
        },
        UseThreadSidebar: function() {
            return S
        },
        ViewImageDescriptions: function() {
            return R
        },
        ViewNsfwCommands: function() {
            return Q
        },
        ViewNsfwGuilds: function() {
            return X
        }
    }), n("47120");
    var i = n("442837"),
        r = n("524437"),
        s = n("381499"),
        a = n("85746"),
        o = n("560997"),
        l = n("263937"),
        u = n("973005"),
        d = n("981631"),
        _ = n("611480");
    let c = (0, o.defineProtoSetting)("textAndImages", "useLegacyChatInput", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        E = (0, o.defineProtoSetting)("textAndImages", "useRichChatInput", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        I = (0, o.defineProtoSetting)("textAndImages", "expressionSuggestionsEnabled", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        T = (0, o.defineProtoSetting)("textAndImages", "includeStickersInAutocomplete", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        f = (0, o.defineProtoSetting)("textAndImages", "renderSpoilers", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.SpoilerRenderSetting.ON_CLICK
        }, e => s.StringValue.create({
            value: e
        })),
        S = (0, o.defineProtoSetting)("textAndImages", "useThreadSidebar", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        }));
    (0, o.defineProtoSetting)("notifications", "showInAppNotifications", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => s.BoolValue.create({
        value: e
    }));
    let h = (0, o.defineProtoSetting)("notifications", "quietMode", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: !!e
        })),
        A = (0, o.defineProtoSetting)("notifications", "focusModeExpiresAtMs", e => null != e ? e : "0", e => e),
        m = [],
        N = (0, o.defineProtoSetting)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : m, e => e),
        O = (0, o.defineProtoSetting)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : m, e => e),
        p = (0, o.defineProtoSetting)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : m, e => e),
        R = (0, o.defineProtoSetting)("textAndImages", "viewImageDescriptions", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        C = (0, o.defineProtoSetting)("textAndImages", "showCommandSuggestions", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        g = (0, o.defineProtoSetting)("voiceAndVideo", "alwaysPreviewVideo", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        L = (0, o.defineProtoSetting)("notifications", "notifyFriendsOnGoLive", e => null == e ? void 0 : e.value, e => s.BoolValue.create({
            value: e
        })),
        D = "0",
        v = (0, o.defineProtoSetting)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : D, e => e);
    (0, o.defineProtoSetting)("notifications", "enableBurstReactionNotifications", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => s.BoolValue.create({
        value: e
    }));
    let M = (0, o.defineProtoSetting)("gameLibrary", "installShortcutDesktop", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        y = (0, o.defineProtoSetting)("gameLibrary", "installShortcutStartMenu", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        P = (0, o.defineProtoSetting)("privacy", "allowActivityPartyPrivacyFriends", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        U = (0, o.defineProtoSetting)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        b = [],
        G = (0, o.defineProtoSetting)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : b, e => e),
        w = (0, o.defineProtoSetting)("privacy", "defaultMessageRequestRestricted", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        k = (0, o.defineProtoSetting)("privacy", "nonSpamRetrainingOptIn", e => null == e ? void 0 : e.value, e => null == e ? void 0 : s.BoolValue.create({
            value: e
        }));
    (0, o.defineProtoSetting)("privacy", "contactSyncEnabled", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
    }, e => s.BoolValue.create({
        value: e
    }));
    let B = (0, o.defineProtoSetting)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
        V = (0, o.defineProtoSetting)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
    (0, o.defineProtoSetting)("privacy", "friendDiscoveryFlags", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0
    }, e => s.UInt32Value.create({
        value: e
    }));
    let F = (0, o.defineProtoSetting)("privacy", "friendSourceFlags", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.AllFriendSourceFlags
        }, e => s.UInt32Value.create({
            value: e
        })),
        x = (0, o.defineProtoSetting)("debug", "rtcPanelShowVoiceStates", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        H = (0, o.defineProtoSetting)("textAndImages", "convertEmoticons", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        Y = (0, o.defineProtoSetting)("textAndImages", "messageDisplayCompact", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        j = (0, o.defineProtoSetting)("voiceAndVideo", "soundboardSettings", e => e, e => e);
    (0, o.defineProtoSetting)("voiceAndVideo", "streamNotificationsEnabled", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => s.BoolValue.create({
        value: e
    }));
    let W = (0, o.defineProtoSetting)("privacy", "dropsOptedOut", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        K = (0, o.defineProtoSetting)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        z = (0, o.defineProtoSetting)("voiceAndVideo", "afkTimeout", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600
        }, e => s.UInt32Value.create({
            value: e
        })),
        X = (0, o.defineProtoSetting)("textAndImages", "viewNsfwGuilds", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        Q = (0, o.defineProtoSetting)("textAndImages", "viewNsfwCommands", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        }));
    (0, o.defineProtoSetting)("privacy", "detectPlatformAccounts", e => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, e => s.BoolValue.create({
        value: e
    }));
    let q = (0, o.defineProtoSetting)("gameLibrary", "disableGamesTab", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        J = (0, o.defineProtoSetting)("textAndImages", "enableTtsCommand", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        Z = (0, o.defineProtoSetting)("textAndImages", "explicitContentFilter", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.ExplicitContentFilterTypes.NON_FRIENDS
        }, e => s.UInt32Value.create({
            value: e
        }));
    (0, o.defineProtoSetting)("textAndImages", "dmSpamFilter", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.DmSpamFilterTypes.NON_FRIENDS
    }, e => s.UInt32Value.create({
        value: e
    }));
    let $ = (0, o.defineProtoSetting)("textAndImages", "dmSpamFilterV2", e => null != e ? e : r.DmSpamFilterV2.DEFAULT_UNSET, e => e),
        ee = (0, o.defineProtoSetting)("status", "showCurrentGame", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        et = (0, o.defineProtoSetting)("privacy", "recentGamesEnabled", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        en = new Set(Object.values(d.StatusTypes)),
        ei = (0, o.defineProtoSetting)("status", "status", e => null != e && en.has(e.value) ? e.value : d.StatusTypes.UNKNOWN, e => s.StringValue.create({
            value: e
        })),
        er = (0, o.defineProtoSetting)("status", "statusExpiresAtMs", e => null != e ? e : "0", e => e),
        es = (0, o.defineProtoSetting)("status", "customStatus", e => e, e => e),
        ea = [],
        eo = (0, o.defineProtoSetting)("broadcast", "allowFriends", e => null == e ? void 0 : e.value, e => s.BoolValue.create({
            value: e
        })),
        el = (0, o.defineProtoSetting)("broadcast", "allowedGuildIds", e => null != e ? e : ea, e => e),
        eu = (0, o.defineProtoSetting)("broadcast", "allowedUserIds", e => null != e ? e : ea, e => e),
        ed = (0, o.defineProtoSetting)("broadcast", "autoBroadcast", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        e_ = (0, o.defineProtoSetting)("clips", "allowVoiceRecording", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })),
        ec = (0, o.wrapSettingWithSelectiveSyncing)((0, o.defineProtoSetting)("textAndImages", "inlineAttachmentMedia", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })), "text", "inlineAttachmentMedia"),
        eE = (0, o.wrapSettingWithSelectiveSyncing)((0, o.defineProtoSetting)("textAndImages", "inlineEmbedMedia", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })), "text", "inlineEmbedMedia"),
        eI = (0, o.wrapSettingWithSelectiveSyncing)((0, o.defineProtoSetting)("textAndImages", "renderEmbeds", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })), "text", "renderEmbeds"),
        eT = (0, o.wrapSettingWithSelectiveSyncing)((0, o.defineProtoSetting)("textAndImages", "renderReactions", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })), "text", "renderReactions"),
        ef = (0, o.defineProtoSetting)("localization", "timezoneOffset", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null
        }, e => s.Int32Value.create({
            value: null != e ? e : 0
        }));
    (0, o.defineProtoSetting)("appearance", "mobileRedesignDisabled", e => null != e && e, e => e);
    let eS = new Set([a.ChannelListLayoutTypes.COZY, a.ChannelListLayoutTypes.COMPACT]);
    (0, o.defineProtoSetting)("appearance", "channelListLayout", e => null != e && eS.has(e.value) ? e.value : a.ChannelListLayoutTypes.COZY, e => s.StringValue.create({
        value: e
    }));
    let eh = new Set([a.MessagePreviewTypes.ALL, a.MessagePreviewTypes.UNREADS, a.MessagePreviewTypes.NONE]);
    (0, o.defineProtoSetting)("appearance", "messagePreviews", e => null != e && eh.has(e.value) ? e.value : a.MessagePreviewTypes.ALL, e => s.StringValue.create({
        value: e
    }));
    let eA = (0, o.wrapSettingWithSelectiveSyncing)((0, o.defineProtoSetting)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
        em = (0, o.defineProtoSetting)("appearance", "clientThemeSettings", e => {
            var t;
            return {
                backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value
            }
        }, e => ({
            backgroundGradientPresetId: null != e.backgroundGradientPresetId ? s.UInt32Value.create({
                value: e.backgroundGradientPresetId
            }) : void 0
        })),
        eN = (0, o.wrapSettingWithOverride)((0, o.wrapSettingWithSelectiveSyncing)((0, o.defineProtoSetting)("textAndImages", "gifAutoPlay", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
            var e;
            return null === (e = l.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
        }, () => (0, i.useStateFromStores)([l.default], () => {
            var e;
            return null === (e = l.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
        })),
        eO = (0, o.wrapSettingWithOverride)((0, o.wrapSettingWithSelectiveSyncing)((0, o.defineProtoSetting)("textAndImages", "animateEmoji", e => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, e => s.BoolValue.create({
            value: e
        })), "text", "animateEmoji"), "animateEmoji", () => {
            var e;
            return null === (e = l.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
        }, () => (0, i.useStateFromStores)([l.default], () => {
            var e;
            return null === (e = l.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
        })),
        ep = (0, o.wrapSettingWithOverride)((0, o.wrapSettingWithSelectiveSyncing)((0, o.defineProtoSetting)("textAndImages", "animateStickers", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : _.StickerAnimationSettings.ALWAYS_ANIMATE
        }, e => s.UInt32Value.create({
            value: e
        })), "text", "animateStickers"), "animateStickers", () => {
            var e;
            return null === (e = l.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
        }, () => (0, i.useStateFromStores)([l.default], () => {
            var e;
            return null === (e = l.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
        })),
        eR = [],
        eC = (0, o.defineProtoSetting)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eR, e => e),
        eg = [],
        eL = (0, o.defineProtoSetting)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : eg, e => e),
        eD = (0, o.defineProtoSetting)("privacy", "defaultGuildsActivityRestricted", e => e === r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS, e => !0 === e ? r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS : r.GuildActivityStatusRestrictionDefault.OFF),
        ev = (0, o.defineProtoSetting)("communities", "disableHomeAutoNav", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        eM = (0, o.defineProtoSetting)("privacy", "familyCenterEnabledV2", e => null == e ? void 0 : e.value, e => s.BoolValue.create({
            value: e
        })),
        ey = (0, o.defineProtoSetting)("privacy", "hideLegacyUsername", e => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, e => s.BoolValue.create({
            value: e
        })),
        eP = (0, o.defineProtoSetting)("textAndImages", "explicitContentSettings", e => {
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
    (0, o.defineProtoSetting)("appearance", "searchResultExactCountEnabled", e => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
    }, e => s.BoolValue.create({
        value: e
    }))
}