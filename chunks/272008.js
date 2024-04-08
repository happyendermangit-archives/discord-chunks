function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        claimQuestReward: function() {
            return I
        },
        claimQuestRewardCode: function() {
            return E
        },
        completeQuestPreview: function() {
            return A
        },
        dismissProgressTrackingFailureNotice: function() {
            return S
        },
        dismissQuestContent: function() {
            return f
        },
        enrollInQuest: function() {
            return c
        },
        fetchCurrentQuests: function() {
            return d
        },
        fetchQuestRewardCode: function() {
            return T
        },
        optimisticallyUpdateQuestProgress: function() {
            return N
        },
        resetQuestDismissibilityStatus: function() {
            return m
        },
        resetQuestPreviewStatus: function() {
            return h
        },
        sendHeartbeat: function() {
            return _
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("479531"),
        a = n("617136"),
        o = n("569984"),
        l = n("918701"),
        u = n("981631");
    async function d() {
        if (!o.default.isFetchingCurrentQuests) {
            r.default.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
            });
            try {
                let e = (await i.HTTP.get({
                    url: u.Endpoints.QUESTS_CURRENT_QUESTS
                })).body.quests.map(e => (0, l.questWithUserStatusFromServer)(e)).filter(e => {
                    var t;
                    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || e.config.rewardCodePlatforms.length > 0
                });
                r.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                    quests: e
                })
            } catch (e) {
                r.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                    error: new s.default(e)
                })
            }
        }
    }
    async function _(e) {
        let {
            questId: t,
            streamKey: n,
            terminal: a = !1
        } = e;
        try {
            let e = await i.HTTP.post({
                url: u.Endpoints.QUESTS_HEARTBEAT(t),
                body: {
                    stream_key: n,
                    terminal: a
                }
            });
            r.default.dispatch({
                type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                userStatus: (0, l.questUserStatusFromServer)(e.body),
                questId: t,
                streamKey: n
            })
        } catch (e) {
            r.default.dispatch({
                type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                error: new s.default(e),
                questId: t,
                streamKey: n
            })
        }
    }
    async function c(e, t) {
        if (null != t.questContentCTA && (0, a.trackQuestContentClicked)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA
            }), !o.default.isEnrolling(e)) {
            r.default.dispatch({
                type: "QUESTS_ENROLL_BEGIN",
                questId: e
            });
            try {
                let n = await i.HTTP.post({
                    url: u.Endpoints.QUESTS_ENROLL(e),
                    body: {
                        location: t.questContent
                    }
                });
                r.default.dispatch({
                    type: "QUESTS_ENROLL_SUCCESS",
                    enrolledQuestUserStatus: (0, l.questUserStatusFromServer)(n.body)
                })
            } catch (t) {
                r.default.dispatch({
                    type: "QUESTS_ENROLL_FAILURE",
                    questId: e
                })
            }
        }
    }
    async function E(e, t, n) {
        if (!o.default.isClaimingRewardCode(e)) {
            r.default.dispatch({
                type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
                questId: e
            });
            try {
                let s = await i.HTTP.post({
                    url: u.Endpoints.QUESTS_REWARD_CODE(e),
                    body: {
                        platform: t,
                        location: n
                    }
                });
                r.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
                    questId: e,
                    rewardCode: (0, l.questsRewardCodeFromServer)(s.body)
                })
            } catch (t) {
                throw r.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
                    error: new s.default(t),
                    questId: e
                }), t
            }
        }
    }
    async function I(e, t, n) {
        if (!o.default.isClaimingReward(e)) {
            r.default.dispatch({
                type: "QUESTS_CLAIM_REWARD_BEGIN",
                questId: e
            });
            try {
                let s = await i.HTTP.post({
                        url: u.Endpoints.QUESTS_CLAIM_REWARD(e),
                        body: {
                            platform: t,
                            location: n
                        }
                    }),
                    a = (0, l.questsEntitlementsFromServer)(s.body);
                0 === a.errors.length ? r.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_SUCCESS",
                    questId: e,
                    entitlements: a
                }) : r.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_FAILURE",
                    error: a.errors,
                    questId: e
                })
            } catch (t) {
                throw r.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_FAILURE",
                    error: new s.default(t),
                    questId: e
                }), t
            }
        }
    }
    async function T(e) {
        if (!o.default.isFetchingRewardCode(e)) {
            r.default.dispatch({
                type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
                questId: e
            });
            try {
                let t = await i.HTTP.get({
                    url: u.Endpoints.QUESTS_REWARD_CODE(e)
                });
                r.default.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                    questId: e,
                    rewardCode: (0, l.questsRewardCodeFromServer)(t.body)
                })
            } catch (t) {
                throw r.default.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                    error: new s.default(t),
                    questId: e
                }), t
            }
        }
    }
    async function f(e, t) {
        let n = o.default.isDismissingContent(e),
            a = (0, l.isDismissible)(t);
        if (!n && a) {
            r.default.dispatch({
                type: "QUESTS_DISMISS_CONTENT_BEGIN",
                questId: e,
                content: t
            });
            try {
                let n = await i.HTTP.post({
                    url: u.Endpoints.QUESTS_DISMISS_CONTENT(e, t),
                    body: {}
                });
                r.default.dispatch({
                    type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                    dismissedQuestUserStatus: (0, l.questUserStatusFromServer)(n.body)
                })
            } catch (t) {
                r.default.dispatch({
                    type: "QUESTS_DISMISS_CONTENT_FAILURE",
                    error: new s.default(t),
                    questId: e
                })
            }
        }
    }

    function S(e) {
        r.default.dispatch({
            type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
            streamKey: e
        })
    }
    async function A(e) {
        try {
            let t = await i.HTTP.post({
                url: u.Endpoints.QUESTS_PREVIEW_COMPLETE(e),
                body: {}
            });
            r.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            r.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new s.default(t),
                questId: e
            })
        }
    }
    async function h(e) {
        try {
            let t = await i.HTTP.del({
                url: u.Endpoints.QUESTS_PREVIEW_STATUS(e),
                body: {}
            });
            r.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            r.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new s.default(t),
                questId: e
            })
        }
    }
    async function m(e) {
        try {
            let t = await i.HTTP.del({
                url: u.Endpoints.QUESTS_PREVIEW_DISMISSIBILITY(e),
                body: {}
            });
            r.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            r.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new s.default(t),
                questId: e
            })
        }
    }

    function N(e) {
        r.default.dispatch({
            type: "QUESTS_OPTIMISTIC_PROGRESS_UPDATE",
            userStatus: e
        })
    }
}