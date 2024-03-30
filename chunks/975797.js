function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getActivityFromCustomStatus: function() {
            return c
        },
        useCustomStatusActivity: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("300983"),
        a = n("27375"),
        u = n("53867"),
        s = n("281767");

    function l(e, t) {
        var n = null;
        if (null != t) n = {
            id: t.id,
            name: t.name,
            animated: t.animated
        };
        else if (null != e.emojiName && "" !== e.emojiName) {
            var r = a.default.getByName(a.default.convertSurrogateToName(e.emojiName, !1));
            n = null != r ? {
                id: null,
                name: r.surrogates,
                animated: !1
            } : null
        }
        var o = Number(e.expiresAtMs);
        return {
            name: "Custom Status",
            type: s.ActivityTypes.CUSTOM_STATUS,
            state: e.text.length > 0 ? e.text : void 0,
            timestamps: o > 0 ? {
                end: o
            } : void 0,
            emoji: n
        }
    }

    function c(e) {
        var t = e.emojiId;
        return l(e, null != t && "0" !== t ? i.default.getUsableCustomEmojiById(t) : null)
    }

    function f() {
        var e = u.CustomStatusSetting.useSetting(),
            t = null == e ? void 0 : e.emojiId,
            n = (0, o.useStateFromStores)([i.default], function() {
                return null != t && "0" !== t ? i.default.getUsableCustomEmojiById(t) : null
            }, [t]);
        return (0, r.useMemo)(function() {
            return null != e ? l(e, n) : null
        }, [e, n])
    }
}