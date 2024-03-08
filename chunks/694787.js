function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        validateMultiAccountTokens: function() {
            return d
        },
        switchAccount: function() {
            return I
        },
        removeAccount: function() {
            return c
        }
    });
    var l = n("171718"),
        a = n("872717"),
        u = n("913144"),
        r = n("437822"),
        s = n("605250"),
        i = n("271938"),
        o = n("770032"),
        _ = n("49111");
    let E = new s.default("MultiAccountActionCreators");

    function d() {
        let e = i.default.getId(),
            t = o.default.getUsers();
        t.forEach(async t => {
            let n, {
                    id: r
                } = t,
                s = l.default.getToken(r);
            if (null == s || "" === s) {
                u.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: r
                });
                return
            }
            u.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                userId: r
            });
            try {
                n = await a.default.get({
                    url: _.Endpoints.ME,
                    headers: {
                        authorization: s
                    },
                    retries: 3
                })
            } catch (t) {
                let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                u.default.dispatch({
                    type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                    userId: r
                });
                return
            }
            u.default.dispatch({
                type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                user: n.body
            }), u.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: r
            })
        })
    }

    function I(e, t) {
        E.log("Switching account to ".concat(e), {
            switchSynchronously: t
        });
        let n = l.default.getToken(e);
        return null == n ? (E.log("Switching accounts failed because there was no token"), u.default.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
            userId: e
        }), Promise.resolve()) : r.default.switchAccountToken(n, t)
    }

    function c(e) {
        u.default.dispatch({
            type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
            userId: e
        })
    }
}