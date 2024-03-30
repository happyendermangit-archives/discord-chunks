function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useExplicitContentSettingOrDefault: function() {
            return a
        }
    });
    var r = n("37295"),
        o = n("851285"),
        i = n("411372"),
        a = function() {
            var e = (0, r.useStateFromStoresObject)([o.default], function() {
                var e, t;
                return null !== (t = null === (e = o.default.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, i.getExplicitContentSettingOrDefault)()
            });
            return {
                explicitContentGuilds: (0, i.resolveSettingWithDefaults)({
                    setting: null == e ? void 0 : e.explicitContentGuilds
                }),
                explicitContentNonFriendDm: (0, i.resolveSettingWithDefaults)({
                    setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                    isDm: !0
                }),
                explicitContentFriendDm: (0, i.resolveSettingWithDefaults)({
                    setting: null == e ? void 0 : e.explicitContentFriendDm,
                    isDm: !0,
                    isFriend: !0
                })
            }
        }
}