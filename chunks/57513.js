function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchLiveBuild: function() {
            return f
        }
    });
    var i = n("544891"),
        r = n("379649"),
        a = n("846519"),
        s = n("570140"),
        o = n("706454"),
        l = n("283595"),
        u = n("129542"),
        d = n("70956"),
        _ = n("981631");
    let c = 10 * d.default.Millis.MINUTE,
        E = 10 * d.default.Millis.MINUTE,
        I = 1 * d.default.Millis.MINUTE,
        T = {};
    async function f(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = o.default.locale;
        return s.default.dispatch({
            type: "APPLICATION_BUILD_FETCH_START",
            applicationId: e,
            branchId: t,
            locale: d
        }), n && await (0, r.sleep)(Math.random() * I), i.HTTP.get({
            url: _.Endpoints.APPLICATION_LIVE_BUILD(e, t),
            query: {
                platform: (0, u.getBuildPlatform)(),
                locale: d
            },
            oldFormErrors: !0
        }).then(n => {
            let i = n.body;
            if (0 === i.manifests.length) {
                s.default.dispatch({
                    type: "APPLICATION_BUILD_NOT_FOUND",
                    applicationId: e,
                    branchId: t
                });
                return
            }
            s.default.dispatch({
                type: "APPLICATION_BUILD_FETCH_SUCCESS",
                applicationId: e,
                branchId: t,
                locale: d,
                build: i
            })
        }, n => {
            let {
                status: i
            } = n;
            if (404 === i) s.default.dispatch({
                type: "APPLICATION_BUILD_NOT_FOUND",
                applicationId: e,
                branchId: t
            });
            else {
                var r, o;
                r = e, null == T[o = t] && (T[o] = new a.Timeout), T[o].start(c + Math.random() * E, () => {
                    null != l.default.getLibraryApplication(r, o) && f(r, o)
                })
            }
        })
    }
}