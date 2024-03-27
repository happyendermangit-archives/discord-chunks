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
        r = n("913144"),
        l = n("437822"),
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
                    id: l
                } = t,
                i = s.getToken(l);
            if (null == i || "" === i) {
                r.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: l
                });
                return
            }
            r.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                userId: l
            });
            try {
                n = await a.HTTP.get({
                    url: d.Endpoints.ME,
                    headers: {
                        authorization: i
                    },
                    retries: 3
                })
            } catch (t) {
                let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                r.default.dispatch({
                    type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                    userId: l
                });
                return
            }
            r.default.dispatch({
                type: e === l ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                user: n.body
            }), r.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: l
            })
        })
    }

    function f(e, t) {
        c.log("Switching account to ".concat(e), {
            switchSynchronously: t
        });
        let n = s.getToken(e);
        return null == n ? (c.log("Switching accounts failed because there was no token"), r.default.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
            userId: e
        }), Promise.resolve()) : l.default.switchAccountToken(n, t)
    }

    function _(e) {
        r.default.dispatch({
            type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
            userId: e
        })
    }
}