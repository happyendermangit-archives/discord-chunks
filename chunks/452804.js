function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        saveGuildFolders: function() {
            return f
        },
        saveClientTheme: function() {
            return h
        },
        default: function() {
            return g
        }
    });
    var i = n("151426"),
        s = n("750028"),
        r = n("819855"),
        a = n("913144"),
        o = n("714657"),
        l = n("737292"),
        u = n("161778"),
        d = n("845579"),
        c = n("872173"),
        _ = n("116319");

    function f(e) {
        return c.PreloadedUserSettingsActionCreators.updateAsync("guildFolders", t => {
            t.folders = e.map(e => {
                let t = i.GuildFolder.create({
                    guildIds: e.guildIds
                });
                return null != e.folderId && (t.id = s.Int64Value.create({
                    value: String(e.folderId)
                })), null != e.folderColor && (t.color = s.UInt64Value.create({
                    value: String(e.folderColor)
                })), null != e.folderName && "" !== e.folderName && (t.name = s.StringValue.create({
                    value: String(e.folderName)
                })), t
            })
        }, c.UserSettingsDelay.SLOW_USER_ACTION)
    }

    function E(e) {
        return (0, r.isThemeLight)(e) ? i.Theme.LIGHT : i.Theme.DARK
    }

    function h(e) {
        let {
            backgroundGradientPresetId: t,
            theme: n
        } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.UserSettingsDelay.INFREQUENT_USER_ACTION;
        if (a.default.dispatch({
                type: "UNSYNCED_USER_SETTINGS_UPDATE",
                settings: {
                    useSystemTheme: "system" === n ? _.SystemThemeState.ON : _.SystemThemeState.OFF
                }
            }), a.default.dispatch({
                type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                changes: {
                    appearance: {
                        settings: {
                            clientThemeSettings: {
                                backgroundGradientPresetId: t
                            },
                            theme: "system" === n ? void 0 : n
                        }
                    }
                }
            }), l.default.shouldSync("appearance")) return c.PreloadedUserSettingsActionCreators.updateAsync("appearance", e => {
            var i;
            e.theme = E(n), e.clientThemeSettings = {
                backgroundGradientPresetId: null != (i = {
                    backgroundGradientPresetId: t
                }).backgroundGradientPresetId ? s.UInt32Value.create({
                    value: i.backgroundGradientPresetId
                }) : void 0
            }
        }, i)
    }
    var g = {
        overrideLocale(e) {
            a.default.dispatch({
                type: "USER_SETTINGS_LOCALE_OVERRIDE",
                locale: e
            })
        },
        updatedUnsyncedSettings(e) {
            a.default.dispatch({
                type: "UNSYNCED_USER_SETTINGS_UPDATE",
                settings: e
            })
        },
        setShouldSyncTextSettings(e) {
            a.default.dispatch({
                type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                changes: {
                    text: {
                        shouldSync: e,
                        settings: e ? {} : {
                            inlineAttachmentMedia: d.InlineAttachmentMedia.getSetting(),
                            inlineEmbedMedia: d.InlineEmbedMedia.getSetting(),
                            renderEmbeds: d.RenderEmbeds.getSetting(),
                            renderReactions: d.RenderReactions.getSetting(),
                            animateEmoji: d.AnimateEmoji.getSetting(),
                            animateStickers: d.AnimateStickers.getSetting(),
                            gifAutoPlay: d.GifAutoPlay.getSetting()
                        }
                    }
                }
            })
        },
        setShouldSyncAppearanceSettings(e) {
            var t;
            a.default.dispatch({
                type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                changes: {
                    appearance: {
                        shouldSync: e,
                        settings: e ? {} : {
                            theme: u.default.theme,
                            clientThemeSettings: {
                                backgroundGradientPresetId: null === (t = o.default.gradientPreset) || void 0 === t ? void 0 : t.id
                            },
                            developerMode: d.DeveloperMode.getSetting()
                        }
                    }
                }
            })
        },
        applySettingsOverride(e) {
            a.default.dispatch({
                type: "USER_SETTINGS_OVERRIDE_APPLY",
                settings: e
            })
        },
        clearSettingsOverride() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.default.dispatch({
                type: "USER_SETTINGS_OVERRIDE_CLEAR",
                settings: t
            })
        },
        updateLocale: e => c.PreloadedUserSettingsActionCreators.updateAsync("localization", t => {
            t.locale = s.StringValue.create({
                value: e
            })
        }, c.UserSettingsDelay.INFREQUENT_USER_ACTION),
        updateTheme(e) {
            a.default.dispatch({
                type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                changes: {
                    appearance: {
                        settings: {
                            theme: e
                        }
                    }
                }
            }), l.default.shouldSync("appearance") && c.PreloadedUserSettingsActionCreators.updateAsync("appearance", t => {
                t.theme = E(e)
            }, c.UserSettingsDelay.INFREQUENT_USER_ACTION)
        }
    }
}