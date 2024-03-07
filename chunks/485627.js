function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return N
        }
    }), E("222007");
    var t = E("95410"),
        o = E("689988"),
        n = E("697218"),
        r = E("553257"),
        a = E("363613"),
        i = E("42060"),
        I = E("275803"),
        T = E("935583");
    let s = "lastSawPomelo";
    class S extends o.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen()
            }, this.onPostConnectionOpen = () => {
                if (function() {
                        let e = r.experiment.getCurrentConfig({
                            location: "b9eb97_1"
                        }, {
                            autoTrackExposure: !1
                        }).enabled;
                        if (!e) return !1;
                        let _ = n.default.getCurrentUser();
                        if (null == _ || _.isPomelo() || !_.hasVerifiedEmailOrPhone()) return !1;
                        let E = (0, i.getForceMigration)(),
                            o = t.default.get(E ? "lastSawPomeloMigration" : s);
                        return !(null != o && Date.now() - o < 6048e5) && !0
                    }()) {
                    let e = I.UUOneClickExperiment.getCurrentConfig({
                            location: "uu_one_click"
                        }, {
                            autoTrackExposure: !1
                        }).enabled,
                        _ = (0, a.openPomeloModal)(T.PomeloEntrypoints.APP_START, e, !1);
                    _ && t.default.set(s, Date.now())
                }
            }
        }
    }
    var N = new S
}