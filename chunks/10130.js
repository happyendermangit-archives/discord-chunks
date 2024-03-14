function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useExplicitContentSettingOrDefault: function() {
            return s
        }
    });
    var i = n("65597"),
        l = n("374363"),
        a = n("447435");
    let s = () => {
        let e = (0, i.useStateFromStoresObject)([l.default], () => {
            var e, t;
            return null !== (t = null === (e = l.default.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, a.getExplicitContentSettingOrDefault)()
        });
        return {
            explicitContentGuilds: (0, a.resolveSettingWithDefaults)({
                setting: null == e ? void 0 : e.explicitContentGuilds
            }),
            explicitContentNonFriendDm: (0, a.resolveSettingWithDefaults)({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: (0, a.resolveSettingWithDefaults)({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        }
    }
}