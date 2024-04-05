function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("377108"),
        a = n("433517"),
        o = n("147913"),
        l = n("654455"),
        u = n("822245"),
        d = n("339085"),
        _ = n("178106"),
        c = n("822179"),
        E = n("580005"),
        I = n("70956"),
        T = n("675478"),
        f = n("581883"),
        S = n("48481"),
        A = n("526761");
    let h = "lastFrecencySavedTime",
        m = 5 * I.default.Millis.MINUTE * Math.random(),
        N = 1 * I.default.Millis.DAY + Math.floor(1 * I.default.Millis.HOUR * Math.random()),
        O = null,
        p = Date.now();
    class R extends o.default {
        _initialize() {
            T.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => !1,
                processProto: () => {
                    D(!0)
                }
            }), T.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => c.default.hasPendingUsage() && f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!c.default.hasPendingUsage()) f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = s.StickerFrecency.create(), e.stickerFrecency.stickers = (0, S.serializeUsageHistory)(c.default.stickerFrecencyWithoutFetchingLatest.usageHistory, 100))
                }
            }), T.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => d.default.hasPendingUsage() && f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!d.default.hasPendingUsage()) f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = s.EmojiFrecency.create(), e.emojiFrecency.emojis = (0, S.serializeUsageHistory)(d.default.emojiFrecencyWithoutFetchingLatest.usageHistory, 100))
                }
            }), T.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => _.default.hasPendingUsage() && f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!_.default.hasPendingUsage()) f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && !r().isEmpty(_.default.playedSoundHistory) && (e.playedSoundFrecency = s.PlayedSoundFrecency.create(), e.playedSoundFrecency.playedSounds = (0, S.serializeUsageHistory)(_.default.playedSoundHistory, 100))
                }
            }), T.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => l.default.hasPendingUsage() && f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!l.default.hasPendingUsage()) f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = s.ApplicationCommandFrecency.create(), e.applicationCommandFrecency.applicationCommands = (0, S.serializeUsageHistory)(l.default.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500))
                }
            }), T.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => u.default.hasPendingUsage() && f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!u.default.hasPendingUsage()) f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = s.ApplicationFrecency.create(), e.applicationFrecency.applications = (0, S.serializeUsageHistory)(u.default.getApplicationFrecencyWithoutLoadingLatest().usageHistory, u.FREQUENCY_ITEM_LIMIT))
                }
            }), T.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => E.default.hasPendingUsage() && f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!E.default.hasPendingUsage()) f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = s.GuildAndChannelFrecency.create(), e.guildAndChannelFrecency.guildAndChannels = (0, S.serializeUsageHistory)(E.default.frecencyWithoutFetchingLatest.usageHistory, E.MAX_NUM_SELECTED_ITEMS))
                }
            })
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: C,
                CONNECTION_RESUMED: C,
                CONNECTION_CLOSED: g
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }

    function C() {
        var e;
        p = null !== (e = a.Storage.get(h)) && void 0 !== e ? e : Date.now(), D(!1)
    }

    function g() {
        clearTimeout(O), O = null
    }
    async function L() {
        p = Date.now(), D(!0), !f.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (c.default.hasPendingUsage() || d.default.hasPendingUsage() || l.default.hasPendingUsage() || u.default.hasPendingUsage() || E.default.hasPendingUsage()) && await T.FrecencyUserSettingsActionCreators.loadIfNecessary(), r().forEach(T.UserSettingsActionCreatorsByType, e => {
            e.markDirtyIfHasPendingChange()
        })
    }

    function D(e) {
        e && (p = Date.now(), a.Storage.set(h, p)), null != O && clearTimeout(O);
        let t = Date.now() - p;
        O = setTimeout(L, Math.max(m, N - t))
    }
    t.default = new R
}