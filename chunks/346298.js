function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("967888"),
        a = n("751848"),
        u = n("629815"),
        s = n("770944"),
        l = n("569341"),
        c = n("770755"),
        f = n("127159"),
        d = n("208454"),
        _ = n("62839"),
        E = n("830567"),
        p = n("483587"),
        m = n("549579"),
        y = n("281767"),
        I = n("941504");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function T(e) {
        (0, m.closeContextMenu)(), p.default.show(e)
    }

    function S(e, t, n) {
        var r = e.status,
            o = e.body,
            i = o && o.code;
        switch (r) {
            case 429:
                0 === t && T({
                    title: I.default.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                    body: I.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                    confirmText: I.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                });
                break;
            case 403:
                if (i === y.AbortCodes.EMAIL_VERIFICATION_REQUIRED) {
                    T({
                        title: I.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                        body: I.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                        confirmText: I.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                        onConfirm: function() {
                            s.openClaimAccountModal()
                        }
                    });
                    break
                }
            default:
                if (i === y.AbortCodes.USER_QUARANTINED)(0, m.closeContextMenu)(), (0, c.default)();
                else if ((0, f.isLimitedAccessErrorCode)(r, i)) break;
                else if (0 === t) {
                    var a = null != n ? (0, _.humanizeAbortCode)(i || 0, n) : I.default.Messages.POMELO_ADD_FRIEND_ERROR;
                    T({
                        title: I.default.Messages.FRIEND_REQUEST_FAILED_HEADER,
                        body: a,
                        confirmText: I.default.Messages.OKAY
                    })
                }
        }
        throw e
    }(r = o || (o = {}))[r.SHOW_ALWAYS = 0] = "SHOW_ALWAYS", r[r.SHOW_ONLY_IF_ACTION_NEEDED = 1] = "SHOW_ONLY_IF_ACTION_NEEDED";
    var v = {
        sendRequest: function(e) {
            var t, n, r = e.discordTag,
                o = e.context,
                a = e.captchaPayload,
                u = e.errorUxConfig,
                s = void 0 === u ? 0 : u;
            var l = (t = r.split("#"), n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return h(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                c = l[0],
                f = l[1];
            return i.HTTP.post({
                url: y.Endpoints.USER_RELATIONSHIPS(),
                body: O({
                    username: c,
                    discriminator: parseInt(f)
                }, a),
                context: o,
                oldFormErrors: !0
            }).catch(function(e) {
                S(e, s, r)
            })
        },
        addRelationship: function(e, t) {
            var n = e.userId,
                r = e.context,
                o = e.type,
                a = e.friendToken,
                u = e.fromFriendSuggestion,
                s = e.captchaPayload,
                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                c = d.default.getUser(n);
            return i.HTTP.put({
                url: y.Endpoints.USER_RELATIONSHIP(n),
                body: O({
                    type: o,
                    friend_token: a,
                    from_friend_suggestion: u
                }, s),
                context: r,
                oldFormErrors: !0
            }).then(function() {
                null == t || t()
            }).catch(function(e) {
                S(e, l, E.default.getUserTag(c))
            })
        },
        acceptFriendRequest: function(e) {
            return v.addRelationship(e, function() {
                a.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
            })
        },
        cancelFriendRequest: function(e, t) {
            return v.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
            })
        },
        removeFriend: function(e, t) {
            v.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
            })
        },
        unblockUser: function(e, t) {
            v.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
            })
        },
        removeRelationship: function(e, t, n) {
            return i.HTTP.del({
                url: y.Endpoints.USER_RELATIONSHIP(e),
                context: t,
                oldFormErrors: !0
            }).then(function() {
                null == n || n()
            }).catch(function() {
                a.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
            })
        },
        updateRelationship: function(e, t) {
            return i.HTTP.patch({
                url: y.Endpoints.USER_RELATIONSHIP(e),
                body: {
                    nickname: t
                }
            })
        },
        fetchRelationships: function() {
            i.HTTP.get({
                url: y.Endpoints.USER_RELATIONSHIPS(),
                oldFormErrors: !0
            }).then(function(e) {
                return u.default.dispatch({
                    type: "LOAD_RELATIONSHIPS_SUCCESS",
                    relationships: e.body
                })
            }, function() {
                return u.default.dispatch({
                    type: "LOAD_RELATIONSHIPS_FAILURE"
                })
            })
        },
        confirmClearPendingRelationships: function(e) {
            (0, l.default)(e)
        },
        clearPendingRelationships: function() {
            return i.HTTP.del({
                url: y.Endpoints.USER_RELATIONSHIPS(),
                query: {
                    relationship_type: y.RelationshipTypes.PENDING_INCOMING
                }
            }).then(function() {
                u.default.dispatch({
                    type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
                })
            }).catch(function() {
                a.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
            })
        }
    };
    t.default = v
}