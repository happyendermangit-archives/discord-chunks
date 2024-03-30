function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        saveClientTheme: function() {
            return T
        },
        saveGuildFolders: function() {
            return E
        }
    });
    var i = n("524437"),
        r = n("381499"),
        s = n("780384"),
        a = n("570140"),
        o = n("514361"),
        l = n("238514"),
        u = n("210887"),
        d = n("695346"),
        _ = n("675478"),
        c = n("874893");

    function E(e) {
        return _.PreloadedUserSettingsActionCreators.updateAsync("guildFolders", t => {
            t.folders = e.map(e => {
                let t = i.GuildFolder.create({
                    guildIds: e.guildIds
                });
                return null != e.folderId && (t.id = r.Int64Value.create({
                    value: String(e.folderId)
                })), null != e.folderColor && (t.color = r.UInt64Value.create({
                    value: String(e.folderColor)
                })), null != e.folderName && "" !== e.folderName && (t.name = r.StringValue.create({
                    value: String(e.folderName)
                })), t
            })
        }, _.UserSettingsDelay.SLOW_USER_ACTION)
    }

    function I(e) {
        return (0, s.isThemeLight)(e) ? i.Theme.LIGHT : i.Theme.DARK
    }

    function T(e) {
        let {
            backgroundGradientPresetId: t,
            theme: n
        } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.UserSettingsDelay.INFREQUENT_USER_ACTION;
        if (a.default.dispatch({
                type: "UNSYNCED_USER_SETTINGS_UPDATE",
                settings: {
                    useSystemTheme: "system" === n ? c.SystemThemeState.ON : c.SystemThemeState.OFF
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
            }), l.default.shouldSync("appearance")) return _.PreloadedUserSettingsActionCreators.updateAsync("appearance", e => {
            var i;
            e.theme = I(n), e.clientThemeSettings = {
                backgroundGradientPresetId: null != (i = {
                    backgroundGradientPresetId: t
                }).backgroundGradientPresetId ? r.UInt32Value.create({
                    value: i.backgroundGradientPresetId
                }) : void 0
            }
        }, i)
    }
    t.default = {
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
        updateLocale: e => _.PreloadedUserSettingsActionCreators.updateAsync("localization", t => {
            t.locale = r.StringValue.create({
                value: e
            })
        }, _.UserSettingsDelay.INFREQUENT_USER_ACTION),
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
            }), l.default.shouldSync("appearance") && _.PreloadedUserSettingsActionCreators.updateAsync("appearance", t => {
                t.theme = I(e)
            }, _.UserSettingsDelay.INFREQUENT_USER_ACTION)
        }
    }
}