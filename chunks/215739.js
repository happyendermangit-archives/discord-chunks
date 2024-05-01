function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("846519"),
        r = n("147913"),
        a = n("246133"),
        s = n("734934"),
        o = n("695346"),
        l = n("885110"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = new i.Timeout,
        c = new i.Timeout,
        E = new i.Timeout;
    class I extends r.default {
        constructor(...e) {
            super(...e), d(this, "actions", {
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
                POST_CONNECTION_OPEN: () => this.handleUpdateProto()
            }), d(this, "handleUpdateProto", () => {
                let e = o.CustomStatusSetting.getSetting();
                if (null == e) E.stop();
                else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
                    let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    t > 0 ? E.start(t, () => {
                        o.CustomStatusSetting.updateSetting(void 0)
                    }, !0) : (o.CustomStatusSetting.updateSetting(void 0), E.stop())
                } else null != E && E.stop();
                let t = o.StatusExpiresAtSetting.getSetting();
                if (null != t && "0" !== t && l.default.getStatus() !== u.StatusTypes.ONLINE) {
                    let e = new Date(Number(t)).getTime() - new Date().getTime();
                    e > 0 ? _.start(e, () => {
                        (0, a.default)(u.StatusTypes.ONLINE, l.default.getStatus(), {
                            location: {
                                object: u.AnalyticsObjects.CUSTOM_STATUS_MANAGER
                            }
                        }, void 0)
                    }, !0) : ((0, a.default)(u.StatusTypes.ONLINE, l.default.getStatus(), {
                        location: {
                            object: u.AnalyticsObjects.CUSTOM_STATUS_MANAGER
                        }
                    }, void 0), _.stop())
                } else null != _ && _.stop();
                let n = o.FocusModeExpiresAtSetting.getSetting();
                if (null != n && "0" !== n) {
                    let e = new Date(Number(n)).getTime() - new Date().getTime();
                    e > 0 ? c.start(e, () => {
                        (0, s.setFocusMode)(!1)
                    }, !0) : ((0, s.setFocusMode)(!1), c.stop())
                } else null != c && c.stop()
            })
        }
    }
    t.default = new I
}