function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchLiveBuild: function() {
            return _
        }
    });
    var i = n("872717"),
        r = n("398183"),
        s = n("862337"),
        a = n("913144"),
        o = n("915639"),
        l = n("686470"),
        u = n("645672"),
        c = n("718517"),
        d = n("49111");
    let f = 10 * c.default.Millis.MINUTE,
        E = 10 * c.default.Millis.MINUTE,
        p = 1 * c.default.Millis.MINUTE,
        h = {};
    async function _(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = o.default.locale;
        return a.default.dispatch({
            type: "APPLICATION_BUILD_FETCH_START",
            applicationId: e,
            branchId: t,
            locale: c
        }), n && await (0, r.sleep)(Math.random() * p), i.default.get({
            url: d.Endpoints.APPLICATION_LIVE_BUILD(e, t),
            query: {
                platform: (0, u.getBuildPlatform)(),
                locale: c
            },
            oldFormErrors: !0
        }).then(n => {
            let i = n.body;
            if (0 === i.manifests.length) {
                a.default.dispatch({
                    type: "APPLICATION_BUILD_NOT_FOUND",
                    applicationId: e,
                    branchId: t
                });
                return
            }
            a.default.dispatch({
                type: "APPLICATION_BUILD_FETCH_SUCCESS",
                applicationId: e,
                branchId: t,
                locale: c,
                build: i
            })
        }, n => {
            let {
                status: i
            } = n;
            if (404 === i) a.default.dispatch({
                type: "APPLICATION_BUILD_NOT_FOUND",
                applicationId: e,
                branchId: t
            });
            else {
                var r, o;
                r = e, null == h[o = t] && (h[o] = new s.Timeout), h[o].start(f + Math.random() * E, () => {
                    let e = l.default.getLibraryApplication(r, o);
                    null != e && _(r, o)
                })
            }
        })
    }
}