function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        },
        registerFull: function() {
            return _
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
        E = n("723359");

    function g(e) {
        let {
            invite: t = null,
            giftCodeSKUId: n = null,
            ...s
        } = e;
        return _({
            ...s,
            invite: t,
            giftCodeSKUId: n
        })
    }

    function _(e) {
        let {
            email: t,
            phoneToken: n,
            username: s,
            globalName: g,
            consent: _,
            password: m,
            guildTemplateCode: p,
            birthday: T,
            invite: A = null,
            giftCodeSKUId: I = null,
            multiStep: S = !1,
            promoEmailConsent: N = null,
            usedUsernameSuggestion: R = null
        } = e;
        return r.default.dispatch({
            type: "REGISTER",
            birthday: S ? T : null
        }), null != T && ((0, f.default)(T, h.AnalyticsSections.REGISTER), d.default.track(h.AnalyticEvents.AGE_GATE_ACTION, {
            source: E.AgeGateSource.REGISTER,
            action: E.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
        }), ! function(e) {
            let t;
            let n = a()().diff(e, "years");
            !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(h.AnalyticEvents.USER_AGE_SUBMITTED, {
                age_bucket: t
            }))
        }(T)), c.default.post({
            url: h.Endpoints.REGISTER,
            body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: g,
                password: m,
                invite: A,
                consent: _,
                phone_token: n,
                date_of_birth: null == T ? void 0 : T.format("YYYY-MM-DD"),
                gift_code_sku_id: I,
                guild_template_code: p,
                promotional_email_opt_in: null == N ? void 0 : N.checked
            },
            trackedActionData: {
                event: i.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: A,
                    used_username_suggestion: R,
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