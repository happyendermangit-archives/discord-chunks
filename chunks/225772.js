function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getActivityFromCustomStatus: function() {
            return d
        },
        useCustomStatusActivity: function() {
            return c
        }
    });
    var i = n("884691"),
        s = n("446674"),
        r = n("385976"),
        a = n("867805"),
        o = n("845579"),
        l = n("49111");

    function u(e, t) {
        let n = null;
        if (null != t) n = {
            id: t.id,
            name: t.name,
            animated: t.animated
        };
        else if (null != e.emojiName && "" !== e.emojiName) {
            let t = a.default.getByName(a.default.convertSurrogateToName(e.emojiName, !1));
            n = null != t ? {
                id: null,
                name: t.surrogates,
                animated: !1
            } : null
        }
        let i = Number(e.expiresAtMs);
        return {
            name: "Custom Status",
            type: l.ActivityTypes.CUSTOM_STATUS,
            state: e.text.length > 0 ? e.text : void 0,
            timestamps: i > 0 ? {
                end: i
            } : void 0,
            emoji: n
        }
    }

    function d(e) {
        let {
            emojiId: t
        } = e, n = null != t && "0" !== t ? r.default.getUsableCustomEmojiById(t) : null;
        return u(e, n)
    }

    function c() {
        let e = o.CustomStatusSetting.useSetting(),
            t = null == e ? void 0 : e.emojiId,
            n = (0, s.useStateFromStores)([r.default], () => null != t && "0" !== t ? r.default.getUsableCustomEmojiById(t) : null, [t]);
        return (0, i.useMemo)(() => null != e ? u(e, n) : null, [e, n])
    }
}