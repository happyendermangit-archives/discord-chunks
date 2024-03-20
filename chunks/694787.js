function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        validateMultiAccountTokens: function() {
            return E
        },
        switchAccount: function() {
            return f
        },
        removeAccount: function() {
            return _
        }
    });
    var s = n("171718"),
        a = n("872717"),
        l = n("913144"),
        r = n("437822"),
        i = n("605250"),
        o = n("271938"),
        u = n("770032"),
        d = n("49111");
    let c = new i.default("MultiAccountActionCreators");

    function E() {
        let e = o.default.getId(),
            t = u.default.getUsers();
        t.forEach(async t => {
            let n, {
                    id: r
                } = t,
                i = s.default.getToken(r);
            if (null == i || "" === i) {
                l.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: r
                });
                return
            }
            l.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                userId: r
            });
            try {
                n = await a.default.get({
                    url: d.Endpoints.ME,
                    headers: {
                        authorization: i
                    },
                    retries: 3
                })
            } catch (t) {
                let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                l.default.dispatch({
                    type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                    userId: r
                });
                return
            }
            l.default.dispatch({
                type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                user: n.body
            }), l.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: r
            })
        })
    }

    function f(e, t) {
        c.log("Switching account to ".concat(e), {
            switchSynchronously: t
        });
        let n = s.default.getToken(e);
        return null == n ? (c.log("Switching accounts failed because there was no token"), l.default.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
            userId: e
        }), Promise.resolve()) : r.default.switchAccountToken(n, t)
    }

    function _(e) {
        l.default.dispatch({
            type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
            userId: e
        })
    }
}