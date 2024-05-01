function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useExplicitContentSettingOrDefault: function() {
            return a
        }
    });
    var i = n("399606"),
        r = n("581883"),
        s = n("163268");
    let a = () => {
        let e = (0, i.useStateFromStoresObject)([r.default], () => {
            var e, t;
            return null !== (t = null === (e = r.default.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, s.getExplicitContentSettingOrDefault)()
        });
        return {
            explicitContentGuilds: (0, s.resolveSettingWithDefaults)({
                setting: null == e ? void 0 : e.explicitContentGuilds
            }),
            explicitContentNonFriendDm: (0, s.resolveSettingWithDefaults)({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: (0, s.resolveSettingWithDefaults)({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        }
    }
}