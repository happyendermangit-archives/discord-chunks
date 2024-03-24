function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
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
        E = n("395724"),
        f = n("49111"),
        _ = n("586391");

    function h(e) {
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
            globalName: h,
            consent: g,
            password: m,
            guildTemplateCode: T,
            birthday: p,
            invite: I = null,
            giftCodeSKUId: A = null,
            multiStep: S = !1,
            promoEmailConsent: R = null,
            usedUsernameSuggestion: N = null
        } = e;
        return l.default.dispatch({
            type: "REGISTER",
            birthday: S ? p : null
        }), null != p && ((0, E.default)(p, f.AnalyticsSections.REGISTER), d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
            source: _.AgeGateSource.REGISTER,
            action: _.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
        }), ! function(e) {
            let t;
            let n = a().diff(e, "years");
            !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(f.AnalyticEvents.USER_AGE_SUBMITTED, {
                age_bucket: t
            }))
        }(p)), c.default.post({
            url: f.Endpoints.REGISTER,
            body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: h,
                password: m,
                invite: I,
                consent: g,
                phone_token: n,
                date_of_birth: null == p ? void 0 : p.format("YYYY-MM-DD"),
                gift_code_sku_id: A,
                guild_template_code: T,
                promotional_email_opt_in: null == R ? void 0 : R.checked
            },
            trackedActionData: {
                event: r.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: I,
                    used_username_suggestion: N,
                    promotional_email_opt_in: null == R ? void 0 : R.checked,
                    promotional_email_pre_checked: null == R ? void 0 : R.preChecked,
                    was_unique_username: !0
                }
            }
        }).then(e => {
            l.default.dispatch({
                type: "REGISTER_SUCCESS",
                token: e.body.token
            }), d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
                source: _.AgeGateSource.REGISTER,
                action: _.AgeGateAnalyticAction.AGE_GATE_SUCCESS
            })
        }, e => {
            let t = new i.default(e);
            throw l.default.dispatch({
                type: "REGISTER_FAILURE",
                error: t
            }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(_.AgeGateSource.REGISTER), d.default.track(f.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
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