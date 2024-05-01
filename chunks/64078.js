function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearMessageCombo: function() {
            return d
        },
        updateCombo: function() {
            return u
        },
        updateComboOnMessageSend: function() {
            return _
        },
        updatePoggermodeSettings: function() {
            return l
        }
    });
    var i = n("570140"),
        r = n("314897"),
        a = n("351780"),
        s = n("843693"),
        o = n("112606");

    function l(e) {
        i.default.dispatch({
            type: "POGGERMODE_SETTINGS_UPDATE",
            settings: e
        });
        let t = {
            ...a.default.getState(),
            ...e
        };
        (0, o.default)(t)
    }

    function u(e) {
        i.default.dispatch({
            type: "POGGERMODE_UPDATE_COMBO",
            ...e
        })
    }

    function d(e) {
        i.default.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: {
                ...e,
                displayed: !0
            }
        })
    }

    function _(e, t) {
        var n;
        let a = r.default.getId(),
            o = s.default.getUserCombo(a, e);
        null != o && i.default.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: {
                combo: o,
                channelId: e,
                messageId: t,
                displayed: !1
            }
        });
        let l = null != o && (null == o ? void 0 : o.value) > 0 ? (null !== (n = null == o ? void 0 : o.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
        i.default.dispatch({
            type: "POGGERMODE_UPDATE_COMBO",
            channelId: e,
            userId: a,
            multiplier: l,
            value: 0
        })
    }
}