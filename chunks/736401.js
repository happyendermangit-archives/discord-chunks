function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("433517"),
        r = n("147913"),
        s = n("594174"),
        a = n("918505"),
        o = n("548161"),
        l = n("347649"),
        u = n("776319"),
        d = n("801461");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = "lastSawPomelo";
    class E extends r.default {
        constructor(...e) {
            super(...e), _(this, "actions", {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen()
            }), _(this, "onPostConnectionOpen", () => {
                if (function() {
                        if (!a.experiment.getCurrentConfig({
                                location: "b9eb97_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled) return !1;
                        let e = s.default.getCurrentUser();
                        if (null == e || e.isPomelo() || !e.hasVerifiedEmailOrPhone()) return !1;
                        let t = (0, l.getForceMigration)(),
                            n = i.Storage.get(t ? "lastSawPomeloMigration" : c);
                        return !(null != n && Date.now() - n < 6048e5) && !0
                    }()) {
                    let e = u.UUOneClickExperiment.getCurrentConfig({
                        location: "uu_one_click"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                    (0, o.openPomeloModal)(d.PomeloEntrypoints.APP_START, e, !1) && i.Storage.set(c, Date.now())
                }
            })
        }
    }
    t.default = new E
}