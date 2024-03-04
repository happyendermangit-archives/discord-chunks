function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updatePoggermodeSettings: function() {
            return l
        },
        updateCombo: function() {
            return u
        },
        clearMessageCombo: function() {
            return d
        },
        updateComboOnMessageSend: function() {
            return c
        }
    });
    var i = n("913144"),
        s = n("271938"),
        r = n("880731"),
        a = n("943551"),
        o = n("767189");

    function l(e) {
        i.default.dispatch({
            type: "POGGERMODE_SETTINGS_UPDATE",
            settings: e
        });
        let t = {
            ...r.default.getState(),
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

    function c(e, t) {
        var n;
        let r = s.default.getId(),
            o = a.default.getUserCombo(r, e);
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
            userId: r,
            multiplier: l,
            value: 0
        })
    }
}