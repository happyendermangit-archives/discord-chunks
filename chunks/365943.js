function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchUserProfileEffects: function() {
            return u
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("881052"),
        a = n("25251"),
        o = n("981631");
    let l = e => {
            let {
                sku_id: t,
                ...n
            } = e;
            return {
                id: n.id,
                skuId: t,
                config: {
                    ...n,
                    skuId: t
                }
            }
        },
        u = async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = a.default.isFetching,
                n = 0 === a.default.profileEffects.length;
            if (!t && (e || n)) {
                r.default.dispatch({
                    type: "USER_PROFILE_EFFECTS_FETCH"
                });
                try {
                    let {
                        body: e
                    } = await i.HTTP.get(o.Endpoints.USER_PROFILE_EFFECTS), t = (null == e ? void 0 : e.profile_effect_configs).map(l);
                    r.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
                        profileEffects: t
                    })
                } catch (e) {
                    throw r.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                        error: e
                    }), new s.APIError(e)
                }
            }
        }
}