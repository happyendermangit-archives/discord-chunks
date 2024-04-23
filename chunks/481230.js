function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        },
        registerFull: function() {
            return m
        }
    });
    var s = n("913527"),
        a = n.n(s),
        i = n("990547"),
        r = n("570140"),
        l = n("479531"),
        o = n("771308"),
        u = n("314897"),
        d = n("626135"),
        c = n("573261"),
        f = n("959776"),
        h = n("981631"),
        g = n("723359");

    function E(e) {
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
            globalName: E,
            consent: m,
            password: p,
            guildTemplateCode: _,
            birthday: S,
            invite: R = null,
            giftCodeSKUId: A = null,
            multiStep: N = !1,
            promoEmailConsent: T = null,
            usedUsernameSuggestion: I = null
        } = e;
        return r.default.dispatch({
            type: "REGISTER",
            birthday: N ? S : null
        }), null != S && ((0, f.default)(S, h.AnalyticsSections.REGISTER), d.default.track(h.AnalyticEvents.AGE_GATE_ACTION, {
            source: g.AgeGateSource.REGISTER,
            action: g.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
        }), ! function(e) {
            let t;
            let n = a()().diff(e, "years");
            !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(h.AnalyticEvents.USER_AGE_SUBMITTED, {
                age_bucket: t
            }))
        }(S)), c.default.post({
            url: h.Endpoints.REGISTER,
            body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: E,
                password: p,
                invite: R,
                consent: m,
                phone_token: n,
                date_of_birth: null == S ? void 0 : S.format("YYYY-MM-DD"),
                gift_code_sku_id: A,
                guild_template_code: _,
                promotional_email_opt_in: null == T ? void 0 : T.checked
            },
            trackedActionData: {
                event: i.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: R,
                    used_username_suggestion: I,
                    promotional_email_opt_in: null == T ? void 0 : T.checked,
                    promotional_email_pre_checked: null == T ? void 0 : T.preChecked,
                    was_unique_username: !0
                }
            }
        }).then(e => {
            r.default.dispatch({
                type: "REGISTER_SUCCESS",
                token: e.body.token
            }), d.default.track(h.AnalyticEvents.AGE_GATE_ACTION, {
                source: g.AgeGateSource.REGISTER,
                action: g.AgeGateAnalyticAction.AGE_GATE_SUCCESS
            })
        }, e => {
            let t = new l.default(e);
            throw r.default.dispatch({
                type: "REGISTER_FAILURE",
                error: t
            }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(g.AgeGateSource.REGISTER), d.default.track(h.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
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