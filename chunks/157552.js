function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchBranches: function() {
            return c
        },
        fetchBranchesForApplication: function() {
            return _
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("872717"),
        a = n("913144"),
        o = n("807085"),
        l = n("686470"),
        u = n("602043"),
        d = n("49111");
    async function c() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default.entitledBranchIds;
        if (!(0, u.isSupportedPlatform)() || 0 === e.length) return [];
        let t = s.chunk(e, 50);
        try {
            let e = t.map(async e => {
                    let t = await r.HTTP.post({
                        url: d.Endpoints.APPLICATION_BRANCHES,
                        body: {
                            branch_ids: e
                        },
                        oldFormErrors: !0
                    });
                    return t.body.map(o.default.createFromServer)
                }),
                n = await Promise.all(e),
                i = s.flatten(n);
            return a.default.dispatch({
                type: "APPLICATION_BRANCHES_FETCH_SUCCESS",
                branches: i
            }), i
        } catch (t) {
            return a.default.dispatch({
                type: "APPLICATION_BRANCHES_FETCH_FAIL",
                branchIds: e
            }), []
        }
    }
    async function _(e) {
        try {
            let t = await r.HTTP.get({
                    url: d.Endpoints.OWNED_APPLICATION_BRANCHES(e),
                    oldFormErrors: !0
                }),
                n = Array.isArray(t.body) ? t.body.map(o.default.createFromServer) : [];
            return a.default.dispatch({
                type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS",
                applicationId: e,
                branches: n
            }), n
        } catch (t) {
            return a.default.dispatch({
                type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL",
                applicationId: e
            }), []
        }
    }
}