function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchCurrentQuests: function() {
            return d
        },
        sendHeartbeat: function() {
            return c
        },
        enrollInQuest: function() {
            return f
        },
        claimQuestRewardCode: function() {
            return p
        },
        fetchQuestRewardCode: function() {
            return m
        },
        dismissQuestContent: function() {
            return h
        },
        dismissProgressTrackingFailureNotice: function() {
            return x
        },
        completeQuestPreview: function() {
            return E
        },
        resetQuestPreviewStatus: function() {
            return y
        },
        resetQuestDismissibilityStatus: function() {
            return g
        },
        optimisticallyUpdateQuestProgress: function() {
            return S
        }
    });
    var i = n("872717"),
        l = n("913144"),
        a = n("599417"),
        s = n("815496"),
        r = n("2973"),
        o = n("227231"),
        u = n("49111");
    async function d() {
        if (!r.default.isFetchingCurrentQuests) {
            l.default.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
            });
            try {
                let e = await i.HTTP.get({
                        url: u.Endpoints.QUESTS_CURRENT_QUESTS
                    }),
                    t = e.body.quests.map(e => (0, o.questWithUserStatusFromServer)(e)),
                    n = t.filter(e => {
                        var t;
                        return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || e.config.rewardCodePlatforms.length > 0
                    });
                l.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                    quests: n
                })
            } catch (e) {
                l.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                    error: new a.default(e)
                })
            }
        }
    }
    async function c(e) {
        let {
            questId: t,
            streamKey: n,
            terminal: s = !1
        } = e;
        try {
            let e = await i.HTTP.post({
                url: u.Endpoints.QUESTS_HEARTBEAT(t),
                body: {
                    stream_key: n,
                    terminal: s
                }
            });
            l.default.dispatch({
                type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                userStatus: (0, o.questUserStatusFromServer)(e.body),
                questId: t,
                streamKey: n
            })
        } catch (e) {
            l.default.dispatch({
                type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                error: new a.default(e),
                questId: t,
                streamKey: n
            })
        }
    }
    async function f(e, t) {
        null != t.questContentCTA && (0, s.trackQuestContentClicked)(e, t.questContent, t.questContentCTA);
        let n = r.default.isEnrolling(e);
        if (!n) {
            l.default.dispatch({
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
                l.default.dispatch({
                    type: "QUESTS_ENROLL_SUCCESS",
                    enrolledQuestUserStatus: (0, o.questUserStatusFromServer)(n.body)
                })
            } catch (t) {
                l.default.dispatch({
                    type: "QUESTS_ENROLL_FAILURE",
                    questId: e
                })
            }
        }
    }
    async function p(e, t, n) {
        let s = r.default.isClaimingRewardCode(e);
        if (!s) {
            l.default.dispatch({
                type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
                questId: e
            });
            try {
                let a = await i.HTTP.post({
                    url: u.Endpoints.QUESTS_REWARD_CODE(e),
                    body: {
                        platform: t,
                        location: n
                    }
                });
                l.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
                    questId: e,
                    rewardCode: (0, o.questsRewardCodeFromServer)(a.body)
                })
            } catch (t) {
                throw l.default.dispatch({
                    type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
                    error: new a.default(t),
                    questId: e
                }), t
            }
        }
    }
    async function m(e) {
        let t = r.default.isFetchingRewardCode(e);
        if (!t) {
            l.default.dispatch({
                type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
                questId: e
            });
            try {
                let t = await i.HTTP.get({
                    url: u.Endpoints.QUESTS_REWARD_CODE(e)
                });
                l.default.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                    questId: e,
                    rewardCode: (0, o.questsRewardCodeFromServer)(t.body)
                })
            } catch (t) {
                throw l.default.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                    error: new a.default(t),
                    questId: e
                }), t
            }
        }
    }
    async function h(e, t) {
        let n = r.default.isDismissingContent(e),
            s = (0, o.isDismissible)(t);
        if (!n && s) {
            l.default.dispatch({
                type: "QUESTS_DISMISS_CONTENT_BEGIN",
                questId: e,
                content: t
            });
            try {
                let n = await i.HTTP.post({
                    url: u.Endpoints.QUESTS_DISMISS_CONTENT(e, t),
                    body: {}
                });
                l.default.dispatch({
                    type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                    dismissedQuestUserStatus: (0, o.questUserStatusFromServer)(n.body)
                })
            } catch (t) {
                l.default.dispatch({
                    type: "QUESTS_DISMISS_CONTENT_FAILURE",
                    error: new a.default(t),
                    questId: e
                })
            }
        }
    }

    function x(e) {
        l.default.dispatch({
            type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
            streamKey: e
        })
    }
    async function E(e) {
        try {
            let t = await i.HTTP.post({
                url: u.Endpoints.QUESTS_PREVIEW_COMPLETE(e),
                body: {}
            });
            l.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, o.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            l.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new a.default(t),
                questId: e
            })
        }
    }
    async function y(e) {
        try {
            let t = await i.HTTP.del({
                url: u.Endpoints.QUESTS_PREVIEW_STATUS(e),
                body: {}
            });
            l.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, o.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            l.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new a.default(t),
                questId: e
            })
        }
    }
    async function g(e) {
        try {
            let t = await i.HTTP.del({
                url: u.Endpoints.QUESTS_PREVIEW_DISMISSIBILITY(e),
                body: {}
            });
            l.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                previewQuestUserStatus: (0, o.questUserStatusFromServer)(t.body)
            })
        } catch (t) {
            l.default.dispatch({
                type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                error: new a.default(t),
                questId: e
            })
        }
    }

    function S(e) {
        l.default.dispatch({
            type: "QUESTS_OPTIMISTIC_PROGRESS_UPDATE",
            userStatus: e
        })
    }
}