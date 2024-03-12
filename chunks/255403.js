function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var s = n("759843"),
        a = n("872717"),
        i = n("913144"),
        r = n("448993"),
        l = n("599110"),
        o = n("840707"),
        u = n("210898"),
        d = n("856368"),
        c = n("697543"),
        f = n("49111"),
        h = n("782340");
    n("2581");
    var E = {
        resetSuggestions: () => i.default.dispatch({
            type: "POMELO_SUGGESTIONS_RESET"
        }),
        async fetchSuggestionsRegistration(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
            if ((0, c.hasRegistrationUsernameSuggestions)()) {
                i.default.dispatch({
                    type: "POMELO_SUGGESTIONS_RESET"
                });
                try {
                    var n;
                    let s = await a.default.get({
                        url: f.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
                        query: null == e ? void 0 : {
                            global_name: e
                        },
                        timeout: t
                    });
                    if (s.ok && (null === (n = s.body) || void 0 === n ? void 0 : n.username) != null) return i.default.dispatch({
                        type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                        suggestion: s.body,
                        source: e
                    })
                } catch (e) {
                    return
                }
            }
        },
        async fetchSuggestions(e) {
            if ((0, d.isInPomeloSuggestionsExperiment)()) try {
                var t;
                i.default.dispatch({
                    type: "POMELO_SUGGESTIONS_FETCH",
                    usernameSuggestionLoading: !0
                });
                let n = await a.default.get({
                    url: f.Endpoints.POMELO_SUGGESTIONS,
                    timeout: e
                });
                if (n.ok && (null === (t = n.body) || void 0 === t ? void 0 : t.username) != null) return i.default.dispatch({
                    type: "POMELO_SUGGESTIONS_SUCCESS",
                    suggestion: n.body
                })
            } catch (e) {
                return
            }
        },
        async attemptPomelo(e) {
            var t, n;
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            let E = (t = e, !1 === /^[A-Za-z0-9_.]*$/.test(t) ? h.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : t.includes("..") ? h.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : t.length < 2 || t.length > 32 ? h.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                maxNum: 32,
                minNum: 2
            }) : void 0);
            if (null != E) return l.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                reason: E,
                username_error: !0,
                location: a,
                one_click_flow: c
            }), i.default.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: E
            });
            if ((0, u.getPomeloAttempt)()) try {
                let t = await o.default.post({
                    url: d ? f.Endpoints.POMELO_ATTEMPT_UNAUTHED : f.Endpoints.POMELO_ATTEMPT,
                    body: {
                        username: e
                    },
                    trackedActionData: {
                        event: s.NetworkActionNames.POMELO_ATTEMPT,
                        properties: {
                            requested_username: e
                        }
                    }
                });
                t.body.taken && l.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                    reason: "already_taken",
                    username_error: !0,
                    location: a,
                    one_click_flow: c
                }), i.default.dispatch({
                    type: "POMELO_ATTEMPT_SUCCESS",
                    username: e,
                    taken: t.body.taken
                })
            } catch (o) {
                ;
                let t = new r.APIError(o),
                    s = null !== (n = t.getAnyErrorMessage()) && void 0 !== n ? n : void 0;
                l.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                    reason: s,
                    username_error: !0,
                    location: a,
                    one_click_flow: c
                }), i.default.dispatch({
                    username: e,
                    type: "POMELO_ATTEMPT_FAILURE",
                    error: null != t.status && t.status < 500 && 401 !== t.status ? s : void 0,
                    statusCode: t.status,
                    retryAfter: t.retryAfter
                })
            }
        },
        async createPomelo(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = await o.default.post({
                    body: e,
                    url: f.Endpoints.POMELO_CREATE,
                    trackedActionData: {
                        event: s.NetworkActionNames.POMELO_CREATE,
                        properties: {
                            one_click_flow: t
                        }
                    }
                });
            return i.default.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: n.body
            }), n.body
        }
    }
}