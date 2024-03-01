function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return f
        }
    });
    var s = t("862337"),
        d = t("913144"),
        n = t("583232"),
        c = t("845579"),
        i = t("101125"),
        r = t("49111");
    let o = new s.Timeout,
        l = new s.Timeout;
    var f = {
        init() {
            d.default.subscribe("USER_SETTINGS_PROTO_UPDATE", () => {
                let e = c.CustomStatusSetting.getSetting();
                if (null == e) l.stop();
                else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
                    let a = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    a > 0 ? l.start(a, () => {
                        c.CustomStatusSetting.updateSetting(void 0)
                    }, !0) : (c.CustomStatusSetting.updateSetting(void 0), l.stop())
                } else null != l && l.stop();
                let a = c.StatusExpiresAtSetting.getSetting();
                if (null != a && "0" !== a && i.default.getStatus() !== r.StatusTypes.ONLINE) {
                    let e = new Date(Number(a)).getTime() - new Date().getTime();
                    e > 0 ? o.start(e, () => {
                        (0, n.default)(r.StatusTypes.ONLINE, i.default.getStatus(), {
                            location: {
                                object: r.AnalyticsObjects.CUSTOM_STATUS_MANAGER
                            }
                        }, void 0)
                    }, !0) : ((0, n.default)(r.StatusTypes.ONLINE, i.default.getStatus(), {
                        location: {
                            object: r.AnalyticsObjects.CUSTOM_STATUS_MANAGER
                        }
                    }, void 0), o.stop())
                } else null != o && o.stop()
            })
        }
    }
}