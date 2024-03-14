function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var i, s, r = n("872717"),
        a = n("819855"),
        o = n("913144"),
        l = n("774146"),
        u = n("132774"),
        d = n("258158"),
        c = n("823348"),
        f = n("697218"),
        _ = n("284609"),
        h = n("158998"),
        E = n("404118"),
        g = n("272030"),
        m = n("49111"),
        p = n("782340");

    function S(e) {
        (0, g.closeContextMenu)(), E.default.show(e)
    }

    function v(e, t, n) {
        let {
            status: i,
            body: s
        } = e, r = s && s.code;
        switch (i) {
            case 429:
                0 === t && S({
                    title: p.default.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                    body: p.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                    confirmText: p.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                });
                break;
            case 403:
                if (r === m.AbortCodes.EMAIL_VERIFICATION_REQUIRED) {
                    S({
                        title: p.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                        body: p.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                        confirmText: p.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                        onConfirm: () => {
                            l.openClaimAccountModal()
                        }
                    });
                    break
                }
            default:
                if (r === m.AbortCodes.USER_QUARANTINED)(0, g.closeContextMenu)(), (0, d.default)();
                else if ((0, c.isLimitedAccessErrorCode)(i, r)) break;
                else if (0 === t) {
                    let e = null != n ? (0, _.humanizeAbortCode)(r || 0, n) : p.default.Messages.POMELO_ADD_FRIEND_ERROR;
                    S({
                        title: p.default.Messages.FRIEND_REQUEST_FAILED_HEADER,
                        body: e,
                        confirmText: p.default.Messages.OKAY
                    })
                }
        }
        throw e
    }(s = i || (i = {}))[s.SHOW_ALWAYS = 0] = "SHOW_ALWAYS", s[s.SHOW_ONLY_IF_ACTION_NEEDED = 1] = "SHOW_ONLY_IF_ACTION_NEEDED";
    let T = {
        sendRequest(e) {
            let {
                discordTag: t,
                context: n,
                captchaPayload: i,
                errorUxConfig: s = 0
            } = e, [a, o] = t.split("#");
            return r.default.post({
                url: m.Endpoints.USER_RELATIONSHIPS(),
                body: {
                    username: a,
                    discriminator: parseInt(o),
                    ...i
                },
                context: n,
                oldFormErrors: !0
            }).catch(e => {
                v(e, s, t)
            })
        },
        addRelationship(e, t) {
            let {
                userId: n,
                context: i,
                type: s,
                friendToken: a,
                fromFriendSuggestion: o,
                captchaPayload: l
            } = e, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, d = f.default.getUser(n);
            return r.default.put({
                url: m.Endpoints.USER_RELATIONSHIP(n),
                body: {
                    type: s,
                    friend_token: a,
                    from_friend_suggestion: o,
                    ...l
                },
                context: i,
                oldFormErrors: !0
            }).then(() => {
                null == t || t()
            }).catch(e => {
                v(e, u, h.default.getUserTag(d))
            })
        },
        acceptFriendRequest: e => T.addRelationship(e, function() {
            a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
        }),
        cancelFriendRequest: (e, t) => T.removeRelationship(e, t, function() {
            a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
        }),
        removeFriend(e, t) {
            T.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
            })
        },
        unblockUser(e, t) {
            T.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
            })
        },
        removeRelationship: (e, t, n) => r.default.delete({
            url: m.Endpoints.USER_RELATIONSHIP(e),
            context: t,
            oldFormErrors: !0
        }).then(() => {
            null == n || n()
        }).catch(() => {
            a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
        }),
        updateRelationship: (e, t) => r.default.patch({
            url: m.Endpoints.USER_RELATIONSHIP(e),
            body: {
                nickname: t
            }
        }),
        fetchRelationships() {
            r.default.get({
                url: m.Endpoints.USER_RELATIONSHIPS(),
                oldFormErrors: !0
            }).then(e => o.default.dispatch({
                type: "LOAD_RELATIONSHIPS_SUCCESS",
                relationships: e.body
            }), () => o.default.dispatch({
                type: "LOAD_RELATIONSHIPS_FAILURE"
            }))
        },
        confirmClearPendingRelationships(e) {
            (0, u.default)(e)
        },
        clearPendingRelationships: () => r.default.delete({
            url: m.Endpoints.USER_RELATIONSHIPS(),
            query: {
                relationship_type: m.RelationshipTypes.PENDING_INCOMING
            }
        }).then(() => {
            o.default.dispatch({
                type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
            })
        }).catch(() => {
            a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
        })
    };
    var I = T
}