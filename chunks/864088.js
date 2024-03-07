function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return O
        }
    }), E("222007");
    var t = E("862337"),
        o = E("689988"),
        n = E("583232"),
        r = E("726778"),
        a = E("845579"),
        i = E("101125"),
        I = E("49111");
    let s = new t.Timeout,
        T = new t.Timeout,
        S = new t.Timeout;
    class N extends o.default {
        constructor(...e) {
            super(...e), this.actions = {
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
                POST_CONNECTION_OPEN: () => this.handleUpdateProto()
            }, this.handleUpdateProto = () => {
                let e = a.CustomStatusSetting.getSetting();
                if (null == e) S.stop();
                else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
                    let _ = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    _ > 0 ? S.start(_, () => {
                        a.CustomStatusSetting.updateSetting(void 0)
                    }, !0) : (a.CustomStatusSetting.updateSetting(void 0), S.stop())
                } else null != S && S.stop();
                let _ = a.StatusExpiresAtSetting.getSetting();
                if (null != _ && "0" !== _ && i.default.getStatus() !== I.StatusTypes.ONLINE) {
                    let e = new Date(Number(_)).getTime() - new Date().getTime();
                    e > 0 ? s.start(e, () => {
                        (0, n.default)(I.StatusTypes.ONLINE, i.default.getStatus(), {
                            location: {
                                object: I.AnalyticsObjects.CUSTOM_STATUS_MANAGER
                            }
                        }, void 0)
                    }, !0) : ((0, n.default)(I.StatusTypes.ONLINE, i.default.getStatus(), {
                        location: {
                            object: I.AnalyticsObjects.CUSTOM_STATUS_MANAGER
                        }
                    }, void 0), s.stop())
                } else null != s && s.stop();
                let E = a.FocusModeExpiresAtSetting.getSetting();
                if (null != E && "0" !== E) {
                    let e = new Date(Number(E)).getTime() - new Date().getTime();
                    e > 0 ? T.start(e, () => {
                        (0, r.setFocusMode)(!1)
                    }, !0) : ((0, r.setFocusMode)(!1), T.stop())
                } else null != T && T.stop()
            }
        }
    }
    var O = new N
}