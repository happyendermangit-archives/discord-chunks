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
        s = E("935583");
    let T = "lastSawPomelo";
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
                            o = t.Storage.get(E ? "lastSawPomeloMigration" : T);
                        return !(null != o && Date.now() - o < 6048e5) && !0
                    }()) {
                    let e = I.UUOneClickExperiment.getCurrentConfig({
                            location: "uu_one_click"
                        }, {
                            autoTrackExposure: !1
                        }).enabled,
                        _ = (0, a.openPomeloModal)(s.PomeloEntrypoints.APP_START, e, !1);
                    _ && t.Storage.set(T, Date.now())
                }
            }
        }
    }
    var N = new S
}