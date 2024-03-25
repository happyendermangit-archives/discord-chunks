function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        fetchUserProfileEffects: function() {
            return a
        }
    });
    var l = i("872717"),
        r = i("913144"),
        n = i("448993"),
        u = i("845962"),
        o = i("49111");
    let s = e => {
            let {
                sku_id: t,
                ...i
            } = e;
            return {
                id: i.id,
                skuId: t,
                config: {
                    ...i,
                    skuId: t
                }
            }
        },
        a = async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = u.default.isFetching,
                i = u.default.profileEffects,
                a = 0 === i.length;
            if (!t && (e || a)) {
                r.default.dispatch({
                    type: "USER_PROFILE_EFFECTS_FETCH"
                });
                try {
                    let {
                        body: e
                    } = await l.HTTP.get(o.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, i = t.map(s);
                    r.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
                        profileEffects: i
                    })
                } catch (e) {
                    throw r.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                        error: e
                    }), new n.APIError(e)
                }
            }
        }
}