function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useExplicitContentSettingOrDefault: function() {
            return r
        }
    });
    var l = n("65597"),
        i = n("151426"),
        a = n("374363"),
        s = n("447435");
    let r = () => {
        let e = (0, l.useStateFromStoresObject)([a.default], () => {
            var e, t;
            return null !== (t = null === (e = a.default.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, s.getExplicitContentSettingOrDefault)()
        });
        return {
            explicitContentGuilds: (null == e ? void 0 : e.explicitContentGuilds) === void 0 || (null == e ? void 0 : e.explicitContentGuilds) === i.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, s.resolveDefaultSetting)() : e.explicitContentGuilds,
            explicitContentNonFriendDm: (null == e ? void 0 : e.explicitContentNonFriendDm) === void 0 || (null == e ? void 0 : e.explicitContentNonFriendDm) === i.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, s.resolveDefaultSetting)(!0) : e.explicitContentNonFriendDm,
            explicitContentFriendDm: (null == e ? void 0 : e.explicitContentFriendDm) === void 0 || (null == e ? void 0 : e.explicitContentFriendDm) === i.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, s.resolveDefaultSetting)(!0, !0) : e.explicitContentFriendDm
        }
    }
}