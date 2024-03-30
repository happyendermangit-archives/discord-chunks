function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s = n("544891"),
        a = n("780384"),
        o = n("570140"),
        l = n("391650"),
        u = n("877215"),
        d = n("895886"),
        _ = n("397550"),
        c = n("594174"),
        E = n("657682"),
        I = n("51144"),
        T = n("668781"),
        f = n("239091"),
        S = n("981631"),
        h = n("689938");

    function A(e) {
        (0, f.closeContextMenu)(), T.default.show(e)
    }

    function m(e, t, n) {
        let {
            status: i,
            body: r
        } = e, s = r && r.code;
        switch (i) {
            case 429:
                0 === t && A({
                    title: h.default.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                    body: h.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                    confirmText: h.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                });
                break;
            case 403:
                if (s === S.AbortCodes.EMAIL_VERIFICATION_REQUIRED) {
                    A({
                        title: h.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                        body: h.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                        confirmText: h.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                        onConfirm: () => {
                            l.openClaimAccountModal()
                        }
                    });
                    break
                }
            default:
                if (s === S.AbortCodes.USER_QUARANTINED)(0, f.closeContextMenu)(), (0, d.default)();
                else if ((0, _.isLimitedAccessErrorCode)(i, s)) break;
                else if (0 === t) {
                    let e = null != n ? (0, E.humanizeAbortCode)(s || 0, n) : h.default.Messages.POMELO_ADD_FRIEND_ERROR;
                    A({
                        title: h.default.Messages.FRIEND_REQUEST_FAILED_HEADER,
                        body: e,
                        confirmText: h.default.Messages.OKAY
                    })
                }
        }
        throw e
    }(r = i || (i = {}))[r.SHOW_ALWAYS = 0] = "SHOW_ALWAYS", r[r.SHOW_ONLY_IF_ACTION_NEEDED = 1] = "SHOW_ONLY_IF_ACTION_NEEDED";
    let N = {
        sendRequest(e) {
            let {
                discordTag: t,
                context: n,
                captchaPayload: i,
                errorUxConfig: r = 0
            } = e, [a, o] = t.split("#");
            return s.HTTP.post({
                url: S.Endpoints.USER_RELATIONSHIPS(),
                body: {
                    username: a,
                    discriminator: parseInt(o),
                    ...i
                },
                context: n,
                oldFormErrors: !0
            }).catch(e => {
                m(e, r, t)
            })
        },
        addRelationship(e, t) {
            let {
                userId: n,
                context: i,
                type: r,
                friendToken: a,
                fromFriendSuggestion: o,
                captchaPayload: l
            } = e, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, d = c.default.getUser(n);
            return s.HTTP.put({
                url: S.Endpoints.USER_RELATIONSHIP(n),
                body: {
                    type: r,
                    friend_token: a,
                    from_friend_suggestion: o,
                    ...l
                },
                context: i,
                oldFormErrors: !0
            }).then(() => {
                null == t || t()
            }).catch(e => {
                m(e, u, I.default.getUserTag(d))
            })
        },
        acceptFriendRequest: e => N.addRelationship(e, function() {
            a.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
        }),
        cancelFriendRequest: (e, t) => N.removeRelationship(e, t, function() {
            a.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
        }),
        removeFriend(e, t) {
            N.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
            })
        },
        unblockUser(e, t) {
            N.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
            })
        },
        removeRelationship: (e, t, n) => s.HTTP.del({
            url: S.Endpoints.USER_RELATIONSHIP(e),
            context: t,
            oldFormErrors: !0
        }).then(() => {
            null == n || n()
        }).catch(() => {
            a.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
        }),
        updateRelationship: (e, t) => s.HTTP.patch({
            url: S.Endpoints.USER_RELATIONSHIP(e),
            body: {
                nickname: t
            }
        }),
        fetchRelationships() {
            s.HTTP.get({
                url: S.Endpoints.USER_RELATIONSHIPS(),
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
        clearPendingRelationships: () => s.HTTP.del({
            url: S.Endpoints.USER_RELATIONSHIPS(),
            query: {
                relationship_type: S.RelationshipTypes.PENDING_INCOMING
            }
        }).then(() => {
            o.default.dispatch({
                type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
            })
        }).catch(() => {
            a.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
        })
    };
    t.default = N
}