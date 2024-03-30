function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("383959"),
        i = n("967888"),
        o = n("629815"),
        u = n("146591"),
        a = n("870331"),
        s = n("463156"),
        l = n("365825"),
        c = n("993054"),
        f = n("398149"),
        d = n("281767"),
        g = n("941504");

    function m(e, t, n, r, i, o, u) {
        try {
            var a = e[o](u),
                s = a.value
        } catch (e) {
            n(e);
            return
        }
        a.done ? t(s) : Promise.resolve(s).then(r, i)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, i) {
                var o = e.apply(t, n);

                function u(e) {
                    m(o, r, i, u, a, "next", e)
                }

                function a(e) {
                    m(o, r, i, u, a, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function p(e, t) {
        var n, r, i, o, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return u.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < i[1]) {
                                    u.label = i[1], i = o;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(o);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        o = t.call(e, u)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    }
    n("104782");
    t.default = {
        resetSuggestions: function() {
            return o.default.dispatch({
                type: "POMELO_SUGGESTIONS_RESET"
            })
        },
        fetchSuggestionsRegistration: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
            return E(function() {
                var n, r, u;
                return p(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (!(0, f.hasRegistrationUsernameSuggestions)()) return [2];
                            o.default.dispatch({
                                type: "POMELO_SUGGESTIONS_RESET"
                            }), u.label = 1;
                        case 1:
                            return u.trys.push([1, 3, , 4]), [4, i.HTTP.get({
                                url: d.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
                                query: null == e ? void 0 : {
                                    global_name: e
                                },
                                timeout: t
                            })];
                        case 2:
                            if ((r = u.sent()).ok && (null === (n = r.body) || void 0 === n ? void 0 : n.username) != null) return [2, o.default.dispatch({
                                type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                                suggestion: r.body,
                                source: e
                            })];
                            return [3, 4];
                        case 3:
                            return u.sent(), [2];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        fetchSuggestions: function(e) {
            return E(function() {
                var t, n, r;
                return p(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (!(0, c.isInPomeloSuggestionsExperiment)()) return [2];
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), o.default.dispatch({
                                type: "POMELO_SUGGESTIONS_FETCH",
                                usernameSuggestionLoading: !0
                            }), [4, i.HTTP.get({
                                url: d.Endpoints.POMELO_SUGGESTIONS,
                                timeout: e
                            })];
                        case 2:
                            if ((n = r.sent()).ok && (null === (t = n.body) || void 0 === t ? void 0 : t.username) != null) return [2, o.default.dispatch({
                                type: "POMELO_SUGGESTIONS_SUCCESS",
                                suggestion: n.body
                            })];
                            return [3, 4];
                        case 3:
                            return r.sent(), [2];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        attemptPomelo: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return E(function() {
                var c, f, m, E, v, _;
                return p(this, function(p) {
                    switch (p.label) {
                        case 0:
                            var S;
                            if (S = e, null != (c = !1 === /^[A-Za-z0-9_.]*$/.test(S) ? g.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : S.includes("..") ? g.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : S.length < 2 || S.length > 32 ? g.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                                    maxNum: 32,
                                    minNum: 2
                                }) : void 0)) return a.default.track(d.AnalyticEvents.POMELO_ERRORS, {
                                reason: c,
                                username_error: !0,
                                location: t,
                                one_click_flow: i
                            }), [2, o.default.dispatch({
                                type: "POMELO_ATTEMPT_FAILURE",
                                username: e,
                                error: c
                            })];
                            if (!(0, l.getPomeloAttempt)()) return [2];
                            p.label = 1;
                        case 1:
                            return p.trys.push([1, 3, , 4]), [4, s.default.post({
                                url: n ? d.Endpoints.POMELO_ATTEMPT_UNAUTHED : d.Endpoints.POMELO_ATTEMPT,
                                body: {
                                    username: e
                                },
                                trackedActionData: {
                                    event: r.NetworkActionNames.POMELO_ATTEMPT,
                                    properties: {
                                        requested_username: e
                                    }
                                }
                            })];
                        case 2:
                            return (f = p.sent()).body.taken && a.default.track(d.AnalyticEvents.POMELO_ERRORS, {
                                reason: "already_taken",
                                username_error: !0,
                                location: t,
                                one_click_flow: i
                            }), o.default.dispatch({
                                type: "POMELO_ATTEMPT_SUCCESS",
                                username: e,
                                taken: f.body.taken
                            }), [3, 4];
                        case 3:
                            return m = p.sent(), _ = null !== (v = (E = new u.APIError(m)).getAnyErrorMessage()) && void 0 !== v ? v : void 0, a.default.track(d.AnalyticEvents.POMELO_ERRORS, {
                                reason: _,
                                username_error: !0,
                                location: t,
                                one_click_flow: i
                            }), o.default.dispatch({
                                username: e,
                                type: "POMELO_ATTEMPT_FAILURE",
                                error: null != E.status && E.status < 500 && 401 !== E.status ? _ : void 0,
                                statusCode: E.status,
                                retryAfter: E.retryAfter
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        createPomelo: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return E(function() {
                var n;
                return p(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, s.default.post({
                                body: e,
                                url: d.Endpoints.POMELO_CREATE,
                                trackedActionData: {
                                    event: r.NetworkActionNames.POMELO_CREATE,
                                    properties: {
                                        one_click_flow: t
                                    }
                                }
                            })];
                        case 1:
                            return n = i.sent(), o.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: n.body
                            }), [2, n.body]
                    }
                })
            })()
        }
    }
}