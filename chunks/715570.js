function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        },
        registerFull: function() {
            return g
        }
    });
    var s = n("866227"),
        a = n.n(s),
        r = n("759843"),
        l = n("913144"),
        i = n("599417"),
        o = n("731109"),
        u = n("271938"),
        d = n("599110"),
        c = n("840707"),
        f = n("395724"),
        E = n("49111"),
        h = n("586391");

    function _(e) {
        let {
            invite: t = null,
            giftCodeSKUId: n = null,
            ...s
        } = e;
        return g({
            ...s,
            invite: t,
            giftCodeSKUId: n
        })
    }

    function g(e) {
        let {
            email: t,
            phoneToken: n,
            username: s,
            globalName: _,
            consent: g,
            password: m,
            guildTemplateCode: p,
            birthday: I,
            invite: T = null,
            giftCodeSKUId: N = null,
            multiStep: A = !1,
            promoEmailConsent: S = null,
            usedUsernameSuggestion: R = null
        } = e;
        return l.default.dispatch({
            type: "REGISTER",
            birthday: A ? I : null
        }), null != I && ((0, f.default)(I, E.AnalyticsSections.REGISTER), d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
            source: h.AgeGateSource.REGISTER,
            action: h.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
        }), ! function(e) {
            let t;
            let n = a().diff(e, "years");
            !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(E.AnalyticEvents.USER_AGE_SUBMITTED, {
                age_bucket: t
            }))
        }(I)), c.default.post({
            url: E.Endpoints.REGISTER,
            body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: _,
                password: m,
                invite: T,
                consent: g,
                phone_token: n,
                date_of_birth: null == I ? void 0 : I.format("YYYY-MM-DD"),
                gift_code_sku_id: N,
                guild_template_code: p,
                promotional_email_opt_in: null == S ? void 0 : S.checked
            },
            trackedActionData: {
                event: r.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: T,
                    used_username_suggestion: R,
                    promotional_email_opt_in: null == S ? void 0 : S.checked,
                    promotional_email_pre_checked: null == S ? void 0 : S.preChecked,
                    was_unique_username: !0
                }
            }
        }).then(e => {
            l.default.dispatch({
                type: "REGISTER_SUCCESS",
                token: e.body.token
            }), d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
                source: h.AgeGateSource.REGISTER,
                action: h.AgeGateAnalyticAction.AGE_GATE_SUCCESS
            })
        }, e => {
            let t = new i.default(e);
            throw l.default.dispatch({
                type: "REGISTER_FAILURE",
                error: t
            }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(h.AgeGateSource.REGISTER), d.default.track(E.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
                is_unique_username_registration: !0,
                email_error_reason: t.getFirstFieldErrorMessage("email"),
                phone_error_reason: t.getFirstFieldErrorMessage("phone"),
                password_error_reason: t.getFirstFieldErrorMessage("password"),
                username_error_reason: t.getFirstFieldErrorMessage("username"),
                global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
                date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth")
            }), e
        })
    }
}