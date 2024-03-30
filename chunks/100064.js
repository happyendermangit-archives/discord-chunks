function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        saveClientTheme: function() {
            return p
        },
        saveGuildFolders: function() {
            return _
        }
    });
    var r = n("14782"),
        o = n("700449"),
        i = n("751848"),
        a = n("629815"),
        u = n("15949"),
        s = n("92118"),
        l = n("798206"),
        c = n("53867"),
        f = n("968574"),
        d = n("223228");

    function _(e) {
        return f.PreloadedUserSettingsActionCreators.updateAsync("guildFolders", function(t) {
            t.folders = e.map(function(e) {
                var t = r.GuildFolder.create({
                    guildIds: e.guildIds
                });
                return null != e.folderId && (t.id = o.Int64Value.create({
                    value: String(e.folderId)
                })), null != e.folderColor && (t.color = o.UInt64Value.create({
                    value: String(e.folderColor)
                })), null != e.folderName && "" !== e.folderName && (t.name = o.StringValue.create({
                    value: String(e.folderName)
                })), t
            })
        }, f.UserSettingsDelay.SLOW_USER_ACTION)
    }

    function E(e) {
        return (0, i.isThemeLight)(e) ? r.Theme.LIGHT : r.Theme.DARK
    }

    function p(e) {
        var t = e.backgroundGradientPresetId,
            n = e.theme,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.UserSettingsDelay.INFREQUENT_USER_ACTION;
        if (a.default.dispatch({
                type: "UNSYNCED_USER_SETTINGS_UPDATE",
                settings: {
                    useSystemTheme: "system" === n ? d.SystemThemeState.ON : d.SystemThemeState.OFF
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
            }), s.default.shouldSync("appearance")) return f.PreloadedUserSettingsActionCreators.updateAsync("appearance", function(e) {
            var r;
            e.theme = E(n), e.clientThemeSettings = {
                backgroundGradientPresetId: null != (r = {
                    backgroundGradientPresetId: t
                }).backgroundGradientPresetId ? o.UInt32Value.create({
                    value: r.backgroundGradientPresetId
                }) : void 0
            }
        }, r)
    }
    t.default = {
        overrideLocale: function(e) {
            a.default.dispatch({
                type: "USER_SETTINGS_LOCALE_OVERRIDE",
                locale: e
            })
        },
        updatedUnsyncedSettings: function(e) {
            a.default.dispatch({
                type: "UNSYNCED_USER_SETTINGS_UPDATE",
                settings: e
            })
        },
        setShouldSyncTextSettings: function(e) {
            a.default.dispatch({
                type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                changes: {
                    text: {
                        shouldSync: e,
                        settings: e ? {} : {
                            inlineAttachmentMedia: c.InlineAttachmentMedia.getSetting(),
                            inlineEmbedMedia: c.InlineEmbedMedia.getSetting(),
                            renderEmbeds: c.RenderEmbeds.getSetting(),
                            renderReactions: c.RenderReactions.getSetting(),
                            animateEmoji: c.AnimateEmoji.getSetting(),
                            animateStickers: c.AnimateStickers.getSetting(),
                            gifAutoPlay: c.GifAutoPlay.getSetting()
                        }
                    }
                }
            })
        },
        setShouldSyncAppearanceSettings: function(e) {
            var t;
            a.default.dispatch({
                type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                changes: {
                    appearance: {
                        shouldSync: e,
                        settings: e ? {} : {
                            theme: l.default.theme,
                            clientThemeSettings: {
                                backgroundGradientPresetId: null === (t = u.default.gradientPreset) || void 0 === t ? void 0 : t.id
                            },
                            developerMode: c.DeveloperMode.getSetting()
                        }
                    }
                }
            })
        },
        applySettingsOverride: function(e) {
            a.default.dispatch({
                type: "USER_SETTINGS_OVERRIDE_APPLY",
                settings: e
            })
        },
        clearSettingsOverride: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.default.dispatch({
                type: "USER_SETTINGS_OVERRIDE_CLEAR",
                settings: t
            })
        },
        updateLocale: function(e) {
            return f.PreloadedUserSettingsActionCreators.updateAsync("localization", function(t) {
                t.locale = o.StringValue.create({
                    value: e
                })
            }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
        },
        updateTheme: function(e) {
            a.default.dispatch({
                type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                changes: {
                    appearance: {
                        settings: {
                            theme: e
                        }
                    }
                }
            }), s.default.shouldSync("appearance") && f.PreloadedUserSettingsActionCreators.updateAsync("appearance", function(t) {
                t.theme = E(e)
            }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
        }
    }
}