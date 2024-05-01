function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        applyPublicBuildOverride: function() {
            return d
        },
        applyStaffBuildOverride: function() {
            return u
        },
        clearBuildOverride: function() {
            return _
        },
        getPublicBuildOverrideLink: function() {
            return c
        }
    });
    var r = n("544891"),
        a = n("314897"),
        s = n("12647"),
        o = n("865427");
    let l = "/__development/build_overrides";
    async function u(e) {
        try {
            var t;
            let n = await r.HTTP.put({
                url: (0, o.getAPIEndpoint)(l),
                body: {
                    overrides: e,
                    version: o.APP_VERSION
                },
                headers: {
                    Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : ""
                },
                oldFormErrors: !0
            });
            return await i(n), n
        } catch (e) {
            return e
        }
    }
    async function d(e) {
        try {
            let t = await r.HTTP.put({
                url: (0, o.getAPIEndpoint)("/__development/link"),
                body: {
                    payload: e,
                    token: a.default.getToken(),
                    version: o.APP_VERSION
                },
                oldFormErrors: !0
            });
            return await i(t), t
        } catch (e) {
            return e
        }
    }
    async function _() {
        let e = await r.HTTP.del({
            url: (0, o.getAPIEndpoint)(l),
            oldFormErrors: !0
        });
        return await i(e), e
    }

    function c(e) {
        var t;
        return r.HTTP.post({
            url: (0, o.getAPIEndpoint)("/__development/create_build_override_link"),
            body: e,
            headers: {
                Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : ""
            },
            oldFormErrors: !0
        }).then(e => ({
            url: e.body.url,
            error: !1
        }), e => 400 === e.status ? {
            url: !1,
            error: e.body
        } : {
            url: !1,
            error: "Error making API request (".concat(e.status, ")")
        })
    }
    i = async e => {
        try {
            await s.default.flushCookies()
        } catch (e) {}
    }
}