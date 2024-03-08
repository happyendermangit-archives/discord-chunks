function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        },
        registerFull: function() {
            return m
        }
    });
    var s = n("866227"),
        a = n.n(s),
        i = n("759843"),
        r = n("913144"),
        l = n("599417"),
        o = n("731109"),
        u = n("271938"),
        d = n("599110"),
        c = n("840707"),
        f = n("395724"),
        h = n("49111"),
        E = n("586391");

    function g(e) {
        let {
            invite: t = null,
            giftCodeSKUId: n = null,
            ...s
        } = e;
        return m({
            ...s,
            invite: t,
            giftCodeSKUId: n
        })
    }

    function m(e) {
        let {
            email: t,
            phoneToken: n,
            username: s,
            globalName: g,
            consent: m,
            password: _,
            guildTemplateCode: p,
            birthday: R,
            invite: S = null,
            giftCodeSKUId: A = null,
            multiStep: T = !1,
            promoEmailConsent: N = null,
            usedUsernameSuggestion: I = null
        } = e;
        return r.default.dispatch({
            type: "REGISTER",
            birthday: T ? R : null
        }), null != R && ((0, f.default)(R, h.AnalyticsSections.REGISTER), d.default.track(h.AnalyticEvents.AGE_GATE_ACTION, {
            source: E.AgeGateSource.REGISTER,
            action: E.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
        }), ! function(e) {
            let t;
            let n = a().diff(e, "years");
            !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(h.AnalyticEvents.USER_AGE_SUBMITTED, {
                age_bucket: t
            }))
        }(R)), c.default.post({
            url: h.Endpoints.REGISTER,
            body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: g,
                password: _,
                invite: S,
                consent: m,
                phone_token: n,
                date_of_birth: null == R ? void 0 : R.format("YYYY-MM-DD"),
                gift_code_sku_id: A,
                guild_template_code: p,
                promotional_email_opt_in: null == N ? void 0 : N.checked
            },
            trackedActionData: {
                event: i.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: S,
                    used_username_suggestion: I,
                    promotional_email_opt_in: null == N ? void 0 : N.checked,
                    promotional_email_pre_checked: null == N ? void 0 : N.preChecked,
                    was_unique_username: !0
                }
            }
        }).then(e => {
            r.default.dispatch({
                type: "REGISTER_SUCCESS",
                token: e.body.token
            }), d.default.track(h.AnalyticEvents.AGE_GATE_ACTION, {
                source: E.AgeGateSource.REGISTER,
                action: E.AgeGateAnalyticAction.AGE_GATE_SUCCESS
            })
        }, e => {
            let t = new l.default(e);
            throw r.default.dispatch({
                type: "REGISTER_FAILURE",
                error: t
            }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(E.AgeGateSource.REGISTER), d.default.track(h.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
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