function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchLiveBuild: function() {
            return g
        }
    });
    var i = n("872717"),
        s = n("398183"),
        r = n("862337"),
        a = n("913144"),
        o = n("915639"),
        l = n("686470"),
        u = n("645672"),
        d = n("718517"),
        c = n("49111");
    let _ = 10 * d.default.Millis.MINUTE,
        f = 10 * d.default.Millis.MINUTE,
        E = 1 * d.default.Millis.MINUTE,
        h = {};
    async function g(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = o.default.locale;
        return a.default.dispatch({
            type: "APPLICATION_BUILD_FETCH_START",
            applicationId: e,
            branchId: t,
            locale: d
        }), n && await (0, s.sleep)(Math.random() * E), i.HTTP.get({
            url: c.Endpoints.APPLICATION_LIVE_BUILD(e, t),
            query: {
                platform: (0, u.getBuildPlatform)(),
                locale: d
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
                locale: d,
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
                var s, o;
                s = e, null == h[o = t] && (h[o] = new r.Timeout), h[o].start(_ + Math.random() * f, () => {
                    let e = l.default.getLibraryApplication(s, o);
                    null != e && g(s, o)
                })
            }
        })
    }
}