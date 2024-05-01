function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchBranches: function() {
            return _
        },
        fetchBranchesForApplication: function() {
            return c
        }
    }), n("47120");
    var i = n("392711"),
        r = n.n(i),
        a = n("544891"),
        s = n("570140"),
        o = n("503013"),
        l = n("283595"),
        u = n("804739"),
        d = n("981631");
    async function _() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default.entitledBranchIds;
        if (!(0, u.isSupportedPlatform)() || 0 === e.length) return [];
        let t = r().chunk(e, 50);
        try {
            let e = t.map(async e => (await a.HTTP.post({
                    url: d.Endpoints.APPLICATION_BRANCHES,
                    body: {
                        branch_ids: e
                    },
                    oldFormErrors: !0
                })).body.map(o.default.createFromServer)),
                n = await Promise.all(e),
                i = r().flatten(n);
            return s.default.dispatch({
                type: "APPLICATION_BRANCHES_FETCH_SUCCESS",
                branches: i
            }), i
        } catch (t) {
            return s.default.dispatch({
                type: "APPLICATION_BRANCHES_FETCH_FAIL",
                branchIds: e
            }), []
        }
    }
    async function c(e) {
        try {
            let t = await a.HTTP.get({
                    url: d.Endpoints.OWNED_APPLICATION_BRANCHES(e),
                    oldFormErrors: !0
                }),
                n = Array.isArray(t.body) ? t.body.map(o.default.createFromServer) : [];
            return s.default.dispatch({
                type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS",
                applicationId: e,
                branches: n
            }), n
        } catch (t) {
            return s.default.dispatch({
                type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL",
                applicationId: e
            }), []
        }
    }
}