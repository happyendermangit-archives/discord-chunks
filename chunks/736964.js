function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007");
    var s, i, r = n("872717"),
        a = n("819855"),
        o = n("913144"),
        d = n("774146"),
        u = n("132774"),
        l = n("258158"),
        f = n("823348"),
        _ = n("697218"),
        c = n("284609"),
        g = n("158998"),
        m = n("404118"),
        h = n("272030"),
        v = n("49111"),
        E = n("782340");

    function p(e) {
        (0, h.closeContextMenu)(), m.default.show(e)
    }

    function y(e, t, n) {
        let {
            status: s,
            body: i
        } = e, r = i && i.code;
        switch (s) {
            case 429:
                0 === t && p({
                    title: E.default.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                    body: E.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                    confirmText: E.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                });
                break;
            case 403:
                if (r === v.AbortCodes.EMAIL_VERIFICATION_REQUIRED) {
                    p({
                        title: E.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                        body: E.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                        confirmText: E.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                        onConfirm: () => {
                            d.openClaimAccountModal()
                        }
                    });
                    break
                }
            default:
                if (r === v.AbortCodes.USER_QUARANTINED)(0, h.closeContextMenu)(), (0, l.default)();
                else if ((0, f.isLimitedAccessErrorCode)(s, r)) break;
                else if (0 === t) {
                    let e = null != n ? (0, c.humanizeAbortCode)(r || 0, n) : E.default.Messages.POMELO_ADD_FRIEND_ERROR;
                    p({
                        title: E.default.Messages.FRIEND_REQUEST_FAILED_HEADER,
                        body: e,
                        confirmText: E.default.Messages.OKAY
                    })
                }
        }
        throw e
    }(i = s || (s = {}))[i.SHOW_ALWAYS = 0] = "SHOW_ALWAYS", i[i.SHOW_ONLY_IF_ACTION_NEEDED = 1] = "SHOW_ONLY_IF_ACTION_NEEDED";
    let T = {
        sendRequest(e) {
            let {
                discordTag: t,
                context: n,
                captchaPayload: s,
                errorUxConfig: i = 0
            } = e, [a, o] = t.split("#");
            return r.default.post({
                url: v.Endpoints.USER_RELATIONSHIPS(),
                body: {
                    username: a,
                    discriminator: parseInt(o),
                    ...s
                },
                context: n,
                oldFormErrors: !0
            }).catch(e => {
                y(e, i, t)
            })
        },
        addRelationship(e, t) {
            let {
                userId: n,
                context: s,
                type: i,
                friendToken: a,
                fromFriendSuggestion: o,
                captchaPayload: d
            } = e, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, l = _.default.getUser(n);
            return r.default.put({
                url: v.Endpoints.USER_RELATIONSHIP(n),
                body: {
                    type: i,
                    friend_token: a,
                    from_friend_suggestion: o,
                    ...d
                },
                context: s,
                oldFormErrors: !0
            }).then(() => {
                null == t || t()
            }).catch(e => {
                y(e, u, g.default.getUserTag(l))
            })
        },
        acceptFriendRequest: e => T.addRelationship(e, function() {
            a.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
        }),
        cancelFriendRequest: (e, t) => T.removeRelationship(e, t, function() {
            a.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
        }),
        removeFriend(e, t) {
            T.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
            })
        },
        unblockUser(e, t) {
            T.removeRelationship(e, t, function() {
                a.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
            })
        },
        removeRelationship: (e, t, n) => r.default.delete({
            url: v.Endpoints.USER_RELATIONSHIP(e),
            context: t,
            oldFormErrors: !0
        }).then(() => {
            null == n || n()
        }).catch(() => {
            a.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
        }),
        updateRelationship: (e, t) => r.default.patch({
            url: v.Endpoints.USER_RELATIONSHIP(e),
            body: {
                nickname: t
            }
        }),
        fetchRelationships() {
            r.default.get({
                url: v.Endpoints.USER_RELATIONSHIPS(),
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
            url: v.Endpoints.USER_RELATIONSHIPS(),
            query: {
                relationship_type: v.RelationshipTypes.PENDING_INCOMING
            }
        }).then(() => {
            o.default.dispatch({
                type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
            })
        }).catch(() => {
            a.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
        })
    };
    var C = T
}