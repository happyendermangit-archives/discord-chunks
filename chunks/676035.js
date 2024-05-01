function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getActivityFromCustomStatus: function() {
            return d
        },
        useCustomStatusActivity: function() {
            return _
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("339085"),
        s = n("633302"),
        o = n("695346"),
        l = n("981631");

    function u(e, t) {
        let n = null;
        if (null != t) n = {
            id: t.id,
            name: t.name,
            animated: t.animated
        };
        else if (null != e.emojiName && "" !== e.emojiName) {
            let t = s.default.getByName(s.default.convertSurrogateToName(e.emojiName, !1));
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
        } = e;
        return u(e, null != t && "0" !== t ? a.default.getUsableCustomEmojiById(t) : null)
    }

    function _() {
        let e = o.CustomStatusSetting.useSetting(),
            t = null == e ? void 0 : e.emojiId,
            n = (0, r.useStateFromStores)([a.default], () => null != t && "0" !== t ? a.default.getUsableCustomEmojiById(t) : null, [t]);
        return (0, i.useMemo)(() => null != e ? u(e, n) : null, [e, n])
    }
}