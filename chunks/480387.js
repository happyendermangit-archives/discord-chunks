function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        removeAccount: function() {
            return E
        },
        switchAccount: function() {
            return h
        },
        validateMultiAccountTokens: function() {
            return f
        }
    });
    var s = n("213919"),
        a = n("544891"),
        i = n("570140"),
        r = n("893776"),
        l = n("710845"),
        o = n("314897"),
        u = n("726745"),
        d = n("981631");
    let c = new l.default("MultiAccountActionCreators");

    function f() {
        let e = o.default.getId();
        u.default.getUsers().forEach(async t => {
            let n, {
                    id: r
                } = t,
                l = s.getToken(r);
            if (null == l || "" === l) {
                i.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: r
                });
                return
            }
            i.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                userId: r
            });
            try {
                n = await a.HTTP.get({
                    url: d.Endpoints.ME,
                    headers: {
                        authorization: l
                    },
                    retries: 3
                })
            } catch (t) {
                let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                i.default.dispatch({
                    type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                    userId: r
                });
                return
            }
            i.default.dispatch({
                type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                user: n.body
            }), i.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: r
            })
        })
    }

    function h(e, t) {
        c.log("Switching account to ".concat(e), {
            switchSynchronously: t
        });
        let n = s.getToken(e);
        return null == n ? (c.log("Switching accounts failed because there was no token"), i.default.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
            userId: e
        }), Promise.resolve()) : r.default.switchAccountToken(n, t)
    }

    function E(e) {
        i.default.dispatch({
            type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
            userId: e
        })
    }
}