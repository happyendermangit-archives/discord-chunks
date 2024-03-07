function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return G
        }
    }), E("424973"), E("222007");
    var t = E("917351"),
        o = E.n(t),
        n = E("713349"),
        r = E("95410"),
        a = E("689988"),
        i = E("342564"),
        I = E("605393"),
        s = E("385976"),
        T = E("469607"),
        S = E("865372"),
        N = E("319781"),
        O = E("718517"),
        A = E("872173"),
        R = E("374363"),
        l = E("116949"),
        u = E("397336");
    let L = "lastFrecencySavedTime",
        C = Math.random() * (5 * O.default.Millis.MINUTE),
        D = 1 * O.default.Millis.DAY + Math.floor(Math.random() * (1 * O.default.Millis.HOUR)),
        c = null,
        d = Date.now();
    class U extends a.default {
        _initialize() {
            A.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => !1,
                processProto: () => {
                    m(!0)
                }
            }), A.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => S.default.hasPendingUsage() && R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!S.default.hasPendingUsage()) R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = n.StickerFrecency.create(), e.stickerFrecency.stickers = (0, l.serializeUsageHistory)(S.default.stickerFrecencyWithoutFetchingLatest.usageHistory, 100))
                }
            }), A.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => s.default.hasPendingUsage() && R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!s.default.hasPendingUsage()) R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = n.EmojiFrecency.create(), e.emojiFrecency.emojis = (0, l.serializeUsageHistory)(s.default.emojiFrecencyWithoutFetchingLatest.usageHistory, 100))
                }
            }), A.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => T.default.hasPendingUsage() && R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!T.default.hasPendingUsage()) R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && !o.isEmpty(T.default.playedSoundHistory) && (e.playedSoundFrecency = n.PlayedSoundFrecency.create(), e.playedSoundFrecency.playedSounds = (0, l.serializeUsageHistory)(T.default.playedSoundHistory, 100))
                }
            }), A.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => i.default.hasPendingUsage() && R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!i.default.hasPendingUsage()) R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = n.ApplicationCommandFrecency.create(), e.applicationCommandFrecency.applicationCommands = (0, l.serializeUsageHistory)(i.default.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500))
                }
            }), A.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => I.default.hasPendingUsage() && R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!I.default.hasPendingUsage()) R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = n.ApplicationFrecency.create(), e.applicationFrecency.applications = (0, l.serializeUsageHistory)(I.default.getApplicationFrecencyWithoutLoadingLatest().usageHistory, I.FREQUENCY_ITEM_LIMIT))
                }
            }), A.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                hasChanges: () => N.default.hasPendingUsage() && R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: e => {
                    if (!!N.default.hasPendingUsage()) R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = n.GuildAndChannelFrecency.create(), e.guildAndChannelFrecency.guildAndChannels = (0, l.serializeUsageHistory)(N.default.frecencyWithoutFetchingLatest.usageHistory, N.MAX_NUM_SELECTED_ITEMS))
                }
            })
        }
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: M,
                CONNECTION_RESUMED: M,
                CONNECTION_CLOSED: h
            }
        }
    }

    function M() {
        var e;
        d = null !== (e = r.default.get(L)) && void 0 !== e ? e : Date.now(), m(!1)
    }

    function h() {
        clearTimeout(c), c = null
    }
    async function P() {
        d = Date.now(), m(!0), !R.default.hasLoaded(u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (S.default.hasPendingUsage() || s.default.hasPendingUsage() || i.default.hasPendingUsage() || I.default.hasPendingUsage() || N.default.hasPendingUsage()) && await A.FrecencyUserSettingsActionCreators.loadIfNecessary(), o.forEach(A.UserSettingsActionCreatorsByType, e => {
            e.markDirtyIfHasPendingChange()
        })
    }

    function m(e) {
        e && (d = Date.now(), r.default.set(L, d)), null != c && clearTimeout(c);
        let _ = Date.now() - d;
        c = setTimeout(P, Math.max(C, D - _))
    }
    var G = new U
}