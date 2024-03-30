function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityJoiningRestrictedGuilds: function() {
            return eN
        },
        ActivityRestrictedGuilds: function() {
            return eA
        },
        AfkTimeout: function() {
            return z
        },
        AllowActivityPartyPrivacyFriends: function() {
            return L
        },
        AllowActivityPartyPrivacyVoiceChannel: function() {
            return M
        },
        AlwaysPreviewVideo: function() {
            return b
        },
        AnimateEmoji: function() {
            return eS
        },
        AnimateStickers: function() {
            return ev
        },
        BroadcastAllowFriends: function() {
            return eu
        },
        BroadcastAllowedGuildIds: function() {
            return es
        },
        BroadcastAllowedUserIds: function() {
            return el
        },
        BroadcastAutoBroadcast: function() {
            return ec
        },
        ClientThemeSettings: function() {
            return eO
        },
        ClipsAllowVoiceRecording: function() {
            return ef
        },
        ConvertEmoticons: function() {
            return H
        },
        CustomStatusSetting: function() {
            return ei
        },
        DefaultGuildsActivityRestricted: function() {
            return eR
        },
        DefaultGuildsRestricted: function() {
            return B
        },
        DeveloperMode: function() {
            return eh
        },
        DisableGamesTab: function() {
            return Q
        },
        DisableHomeAutoNav: function() {
            return eC
        },
        DmSpamFilterV2: function() {
            return $
        },
        DropsOptedOut: function() {
            return W
        },
        EmojiPickerCollapsedSections: function() {
            return T
        },
        EnableTTSCommand: function() {
            return J
        },
        ExplicitContentFilter: function() {
            return Z
        },
        ExplicitContentSettings: function() {
            return eL
        },
        ExpressionSuggestionsEnabled: function() {
            return E
        },
        FamilyCenterEnabled: function() {
            return eP
        },
        FocusMode: function() {
            return I
        },
        FocusModeExpiresAtSetting: function() {
            return h
        },
        FriendSourceFlagsSetting: function() {
            return F
        },
        GifAutoPlay: function() {
            return eT
        },
        IncludeStickersInAutocomplete: function() {
            return p
        },
        InlineAttachmentMedia: function() {
            return ed
        },
        InlineEmbedMedia: function() {
            return e_
        },
        InstallShortcutDesktop: function() {
            return P
        },
        InstallShortcutStartMenu: function() {
            return D
        },
        LegacyUsernameDisabled: function() {
            return eD
        },
        MessageDisplayCompact: function() {
            return x
        },
        MessageRequestRestrictedDefault: function() {
            return k
        },
        MessageRequestRestrictedGuildIds: function() {
            return w
        },
        NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET: function() {
            return R
        },
        NativePhoneIntegrationEnabled: function() {
            return K
        },
        NonSpamRetrainingOptIn: function() {
            return G
        },
        NotificationCenterAckedBeforeId: function() {
            return C
        },
        NotifyFriendsOnGoLive: function() {
            return N
        },
        RecentGamesEnabled: function() {
            return et
        },
        RenderEmbeds: function() {
            return eE
        },
        RenderReactions: function() {
            return ep
        },
        RenderSpoilers: function() {
            return m
        },
        RestrictedGuildIds: function() {
            return j
        },
        RtcPanelShowVoiceStates: function() {
            return V
        },
        ShowCommandSuggestions: function() {
            return A
        },
        ShowCurrentGame: function() {
            return ee
        },
        SoundboardPickerCollapsedSections: function() {
            return v
        },
        SoundboardSettings: function() {
            return Y
        },
        StatusExpiresAtSetting: function() {
            return eo
        },
        StatusSetting: function() {
            return er
        },
        StickerPickerCollapsedSections: function() {
            return S
        },
        TimezoneOffset: function() {
            return em
        },
        UseLegacyChatInput: function() {
            return d
        },
        UseRichChatInput: function() {
            return _
        },
        UseThreadSidebar: function() {
            return y
        },
        ViewImageDescriptions: function() {
            return g
        },
        ViewNsfwCommands: function() {
            return q
        },
        ViewNsfwGuilds: function() {
            return X
        }
    });
    var r = n("898511"),
        o = n("14782"),
        i = n("700449"),
        a = n("126530"),
        u = n("692367"),
        s = n("985036"),
        l = n("709446"),
        c = n("281767"),
        f = n("271172"),
        d = (0, u.defineProtoSetting)("textAndImages", "useLegacyChatInput", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        _ = (0, u.defineProtoSetting)("textAndImages", "useRichChatInput", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        E = (0, u.defineProtoSetting)("textAndImages", "expressionSuggestionsEnabled", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        p = (0, u.defineProtoSetting)("textAndImages", "includeStickersInAutocomplete", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        m = (0, u.defineProtoSetting)("textAndImages", "renderSpoilers", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.SpoilerRenderSetting.ON_CLICK
        }, function(e) {
            return i.StringValue.create({
                value: e
            })
        }),
        y = (0, u.defineProtoSetting)("textAndImages", "useThreadSidebar", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        });
    (0, u.defineProtoSetting)("notifications", "showInAppNotifications", function(e) {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, function(e) {
        return i.BoolValue.create({
            value: e
        })
    });
    var I = (0, u.defineProtoSetting)("notifications", "quietMode", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: !!e
            })
        }),
        h = (0, u.defineProtoSetting)("notifications", "focusModeExpiresAtMs", function(e) {
            return null != e ? e : "0"
        }, function(e) {
            return e
        }),
        O = [],
        T = (0, u.defineProtoSetting)("textAndImages", "emojiPickerCollapsedSections", function(e) {
            return null != e ? e : O
        }, function(e) {
            return e
        }),
        S = (0, u.defineProtoSetting)("textAndImages", "stickerPickerCollapsedSections", function(e) {
            return null != e ? e : O
        }, function(e) {
            return e
        }),
        v = (0, u.defineProtoSetting)("textAndImages", "soundboardPickerCollapsedSections", function(e) {
            return null != e ? e : O
        }, function(e) {
            return e
        }),
        g = (0, u.defineProtoSetting)("textAndImages", "viewImageDescriptions", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        A = (0, u.defineProtoSetting)("textAndImages", "showCommandSuggestions", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        b = (0, u.defineProtoSetting)("voiceAndVideo", "alwaysPreviewVideo", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        N = (0, u.defineProtoSetting)("notifications", "notifyFriendsOnGoLive", function(e) {
            return null == e ? void 0 : e.value
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        R = "0",
        C = (0, u.defineProtoSetting)("notifications", "notificationCenterAckedBeforeId", function(e) {
            return null != e ? e : R
        }, function(e) {
            return e
        });
    (0, u.defineProtoSetting)("notifications", "enableBurstReactionNotifications", function(e) {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, function(e) {
        return i.BoolValue.create({
            value: e
        })
    });
    var P = (0, u.defineProtoSetting)("gameLibrary", "installShortcutDesktop", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        D = (0, u.defineProtoSetting)("gameLibrary", "installShortcutStartMenu", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        L = (0, u.defineProtoSetting)("privacy", "allowActivityPartyPrivacyFriends", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        M = (0, u.defineProtoSetting)("privacy", "allowActivityPartyPrivacyVoiceChannel", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        U = [],
        w = (0, u.defineProtoSetting)("privacy", "messageRequestRestrictedGuildIds", function(e) {
            return null != e ? e : U
        }, function(e) {
            return e
        }),
        k = (0, u.defineProtoSetting)("privacy", "defaultMessageRequestRestricted", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        G = (0, u.defineProtoSetting)("privacy", "nonSpamRetrainingOptIn", function(e) {
            return null == e ? void 0 : e.value
        }, function(e) {
            return null == e ? void 0 : i.BoolValue.create({
                value: e
            })
        });
    (0, u.defineProtoSetting)("privacy", "contactSyncEnabled", function(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
    }, function(e) {
        return i.BoolValue.create({
            value: e
        })
    });
    var B = (0, u.defineProtoSetting)("privacy", "defaultGuildsRestricted", function(e) {
            return null != e && e
        }, function(e) {
            return e
        }),
        j = (0, u.defineProtoSetting)("privacy", "restrictedGuildIds", function(e) {
            return null != e ? e : []
        }, function(e) {
            return e
        });
    (0, u.defineProtoSetting)("privacy", "friendDiscoveryFlags", function(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0
    }, function(e) {
        return i.UInt32Value.create({
            value: e
        })
    });
    var F = (0, u.defineProtoSetting)("privacy", "friendSourceFlags", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.AllFriendSourceFlags
        }, function(e) {
            return i.UInt32Value.create({
                value: e
            })
        }),
        V = (0, u.defineProtoSetting)("debug", "rtcPanelShowVoiceStates", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        H = (0, u.defineProtoSetting)("textAndImages", "convertEmoticons", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        x = (0, u.defineProtoSetting)("textAndImages", "messageDisplayCompact", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        Y = (0, u.defineProtoSetting)("voiceAndVideo", "soundboardSettings", function(e) {
            return e
        }, function(e) {
            return e
        });
    (0, u.defineProtoSetting)("voiceAndVideo", "streamNotificationsEnabled", function(e) {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, function(e) {
        return i.BoolValue.create({
            value: e
        })
    });
    var W = (0, u.defineProtoSetting)("privacy", "dropsOptedOut", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        K = (0, u.defineProtoSetting)("voiceAndVideo", "nativePhoneIntegrationEnabled", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        z = (0, u.defineProtoSetting)("voiceAndVideo", "afkTimeout", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600
        }, function(e) {
            return i.UInt32Value.create({
                value: e
            })
        }),
        X = (0, u.defineProtoSetting)("textAndImages", "viewNsfwGuilds", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        q = (0, u.defineProtoSetting)("textAndImages", "viewNsfwCommands", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        });
    (0, u.defineProtoSetting)("privacy", "detectPlatformAccounts", function(e) {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
    }, function(e) {
        return i.BoolValue.create({
            value: e
        })
    });
    var Q = (0, u.defineProtoSetting)("gameLibrary", "disableGamesTab", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        J = (0, u.defineProtoSetting)("textAndImages", "enableTtsCommand", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        Z = (0, u.defineProtoSetting)("textAndImages", "explicitContentFilter", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : l.ExplicitContentFilterTypes.NON_FRIENDS
        }, function(e) {
            return i.UInt32Value.create({
                value: e
            })
        });
    (0, u.defineProtoSetting)("textAndImages", "dmSpamFilter", function(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : l.DmSpamFilterTypes.NON_FRIENDS
    }, function(e) {
        return i.UInt32Value.create({
            value: e
        })
    });
    var $ = (0, u.defineProtoSetting)("textAndImages", "dmSpamFilterV2", function(e) {
            return null != e ? e : o.DmSpamFilterV2.DEFAULT_UNSET
        }, function(e) {
            return e
        }),
        ee = (0, u.defineProtoSetting)("status", "showCurrentGame", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        et = (0, u.defineProtoSetting)("privacy", "recentGamesEnabled", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        en = new Set(Object.values(c.StatusTypes)),
        er = (0, u.defineProtoSetting)("status", "status", function(e) {
            return null != e && en.has(e.value) ? e.value : c.StatusTypes.UNKNOWN
        }, function(e) {
            return i.StringValue.create({
                value: e
            })
        }),
        eo = (0, u.defineProtoSetting)("status", "statusExpiresAtMs", function(e) {
            return null != e ? e : "0"
        }, function(e) {
            return e
        }),
        ei = (0, u.defineProtoSetting)("status", "customStatus", function(e) {
            return e
        }, function(e) {
            return e
        }),
        ea = [],
        eu = (0, u.defineProtoSetting)("broadcast", "allowFriends", function(e) {
            return null == e ? void 0 : e.value
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        es = (0, u.defineProtoSetting)("broadcast", "allowedGuildIds", function(e) {
            return null != e ? e : ea
        }, function(e) {
            return e
        }),
        el = (0, u.defineProtoSetting)("broadcast", "allowedUserIds", function(e) {
            return null != e ? e : ea
        }, function(e) {
            return e
        }),
        ec = (0, u.defineProtoSetting)("broadcast", "autoBroadcast", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        ef = (0, u.defineProtoSetting)("clips", "allowVoiceRecording", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        ed = (0, u.wrapSettingWithSelectiveSyncing)((0, u.defineProtoSetting)("textAndImages", "inlineAttachmentMedia", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }), "text", "inlineAttachmentMedia"),
        e_ = (0, u.wrapSettingWithSelectiveSyncing)((0, u.defineProtoSetting)("textAndImages", "inlineEmbedMedia", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }), "text", "inlineEmbedMedia"),
        eE = (0, u.wrapSettingWithSelectiveSyncing)((0, u.defineProtoSetting)("textAndImages", "renderEmbeds", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }), "text", "renderEmbeds"),
        ep = (0, u.wrapSettingWithSelectiveSyncing)((0, u.defineProtoSetting)("textAndImages", "renderReactions", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }), "text", "renderReactions"),
        em = (0, u.defineProtoSetting)("localization", "timezoneOffset", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null
        }, function(e) {
            return i.Int32Value.create({
                value: null != e ? e : 0
            })
        });
    (0, u.defineProtoSetting)("appearance", "mobileRedesignDisabled", function(e) {
        return null != e && e
    }, function(e) {
        return e
    });
    var ey = new Set([a.ChannelListLayoutTypes.COZY, a.ChannelListLayoutTypes.COMPACT]);
    (0, u.defineProtoSetting)("appearance", "channelListLayout", function(e) {
        return null != e && ey.has(e.value) ? e.value : a.ChannelListLayoutTypes.COZY
    }, function(e) {
        return i.StringValue.create({
            value: e
        })
    });
    var eI = new Set([a.MessagePreviewTypes.ALL, a.MessagePreviewTypes.UNREADS, a.MessagePreviewTypes.NONE]);
    (0, u.defineProtoSetting)("appearance", "messagePreviews", function(e) {
        return null != e && eI.has(e.value) ? e.value : a.MessagePreviewTypes.ALL
    }, function(e) {
        return i.StringValue.create({
            value: e
        })
    });
    var eh = (0, u.wrapSettingWithSelectiveSyncing)((0, u.defineProtoSetting)("appearance", "developerMode", function(e) {
            return null != e && e
        }, function(e) {
            return e
        }), "appearance", "developerMode"),
        eO = (0, u.defineProtoSetting)("appearance", "clientThemeSettings", function(e) {
            var t;
            return {
                backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value
            }
        }, function(e) {
            return {
                backgroundGradientPresetId: null != e.backgroundGradientPresetId ? i.UInt32Value.create({
                    value: e.backgroundGradientPresetId
                }) : void 0
            }
        }),
        eT = (0, u.wrapSettingWithOverride)((0, u.wrapSettingWithSelectiveSyncing)((0, u.defineProtoSetting)("textAndImages", "gifAutoPlay", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }), "text", "gifAutoPlay"), "gifAutoPlay", function() {
            var e;
            return null === (e = s.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
        }, function() {
            return (0, r.useStateFromStores)([s.default], function() {
                var e;
                return null === (e = s.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
            })
        }),
        eS = (0, u.wrapSettingWithOverride)((0, u.wrapSettingWithSelectiveSyncing)((0, u.defineProtoSetting)("textAndImages", "animateEmoji", function(e) {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }), "text", "animateEmoji"), "animateEmoji", function() {
            var e;
            return null === (e = s.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
        }, function() {
            return (0, r.useStateFromStores)([s.default], function() {
                var e;
                return null === (e = s.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
            })
        }),
        ev = (0, u.wrapSettingWithOverride)((0, u.wrapSettingWithSelectiveSyncing)((0, u.defineProtoSetting)("textAndImages", "animateStickers", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : f.StickerAnimationSettings.ALWAYS_ANIMATE
        }, function(e) {
            return i.UInt32Value.create({
                value: e
            })
        }), "text", "animateStickers"), "animateStickers", function() {
            var e;
            return null === (e = s.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
        }, function() {
            return (0, r.useStateFromStores)([s.default], function() {
                var e;
                return null === (e = s.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
            })
        }),
        eg = [],
        eA = (0, u.defineProtoSetting)("privacy", "activityRestrictedGuildIds", function(e) {
            return null != e ? e : eg
        }, function(e) {
            return e
        }),
        eb = [],
        eN = (0, u.defineProtoSetting)("privacy", "activityJoiningRestrictedGuildIds", function(e) {
            return null != e ? e : eb
        }, function(e) {
            return e
        }),
        eR = (0, u.defineProtoSetting)("privacy", "defaultGuildsActivityRestricted", function(e) {
            return e === o.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS
        }, function(e) {
            return !0 === e ? o.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS : o.GuildActivityStatusRestrictionDefault.OFF
        }),
        eC = (0, u.defineProtoSetting)("communities", "disableHomeAutoNav", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        eP = (0, u.defineProtoSetting)("privacy", "familyCenterEnabledV2", function(e) {
            return null == e ? void 0 : e.value
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        eD = (0, u.defineProtoSetting)("privacy", "hideLegacyUsername", function(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
        }, function(e) {
            return i.BoolValue.create({
                value: e
            })
        }),
        eL = (0, u.defineProtoSetting)("textAndImages", "explicitContentSettings", function(e) {
            var t = null != e ? e : {},
                n = t.explicitContentGuilds,
                r = t.explicitContentFriendDm,
                i = t.explicitContentNonFriendDm;
            return {
                explicitContentGuilds: null != n ? n : o.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != r ? r : o.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != i ? i : o.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
            }
        }, function(e) {
            var t = e.explicitContentGuilds,
                n = e.explicitContentFriendDm,
                r = e.explicitContentNonFriendDm;
            return {
                explicitContentGuilds: null != t ? t : void 0,
                explicitContentFriendDm: null != n ? n : void 0,
                explicitContentNonFriendDm: null != r ? r : void 0
            }
        });
    (0, u.defineProtoSetting)("appearance", "searchResultExactCountEnabled", function(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
    }, function(e) {
        return i.BoolValue.create({
            value: e
        })
    })
}