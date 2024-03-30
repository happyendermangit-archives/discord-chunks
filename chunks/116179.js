function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("84791"),
        i = n("21938"),
        a = n("784184"),
        u = n("585949"),
        s = n("224359"),
        l = n("482644"),
        c = n("254061"),
        f = n("603473"),
        d = n("935741"),
        _ = n("306912"),
        E = n("29884"),
        p = n("665863"),
        m = n("867339"),
        y = n("858207"),
        I = n("118"),
        h = n("710765"),
        O = n("277381"),
        T = n("115803"),
        S = n("83206"),
        v = n("281767"),
        g = n("941504"),
        A = n("258758");

    function b(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var N = "16px",
        R = "12px",
        C = "11px";

    function P(e) {
        return null != e
    }
    t.default = function(e) {
        var t, P, D, L = e.quest,
            M = e.applicationStream,
            U = e.onMouseEnter,
            w = e.onMouseLeave,
            k = e.position,
            G = (0, T.useHandleClaimQuestsReward)({
                quest: L,
                location: I.QuestContent.MEMBERS_LIST
            }),
            B = (0, y.useIsQuestExpired)(L),
            j = (null == L ? void 0 : null === (t = L.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
            F = (null == L ? void 0 : null === (P = L.userStatus) || void 0 === P ? void 0 : P.enrolledAt) != null,
            V = (null == L ? void 0 : null === (D = L.userStatus) || void 0 === D ? void 0 : D.completedAt) != null;
        if (null == L || B || j && !(null != M)) return null;
        var H = function() {
                var e;
                (0, m.trackQuestContentClicked)({
                    questId: L.id,
                    questContent: I.QuestContent.MEMBERS_LIST,
                    questContentCTA: m.QuestContentCTA.OPEN_DISCLOSURE,
                    trackGuildAndChannelMetadata: !0
                }), (0, a.openModalLazy)((e = function() {
                    var e;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all([n.e("99387"), n.e("70684")]).then(n.bind(n, "38319"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    var n, o;
                                    return r.createElement(e, (n = function(e) {
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
                                    }({}, t), o = (o = {
                                        questContent: I.QuestContent.MEMBERS_LIST,
                                        questConfig: L.config
                                    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    })(Object(o)).forEach(function(e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                                    }), n))
                                }]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            b(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            b(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }))
            },
            x = function() {
                (0, m.trackQuestContentClicked)({
                    questId: L.id,
                    questContent: I.QuestContent.MEMBERS_LIST,
                    questContentCTA: m.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), l.default.open(v.UserSettingsSections.INVENTORY)
            },
            Y = function(e) {
                e.stopPropagation(), H()
            },
            W = function() {
                if (null != M) {
                    var e = d.default.getChannel(M.channelId);
                    if (null != e && (0, f.canWatchStream)(e, p.default, _.default, E.default, c.default)[0]) return (0, m.trackQuestContentClicked)({
                        questId: L.id,
                        questContent: I.QuestContent.MEMBERS_LIST,
                        questContentCTA: m.QuestContentCTA.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }), u.default.selectVoiceChannel(e.id), (0, s.watchStreamAndTransitionToStream)(M)
                }
                x()
            },
            K = function() {
                return null != M ? {
                    headerText: g.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                    ctaText: g.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                    tileAssetUrl: (0, h.getGameTileAssetUrl)(L),
                    handleClickCta: W
                } : V && !j ? {
                    headerText: g.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                    ctaText: g.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                    tileAssetUrl: (0, h.getRewardAssetUrl)(L),
                    handleClickCta: G
                } : F ? {
                    headerText: g.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                    ctaText: g.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                    tileAssetUrl: (0, h.getRewardAssetUrl)(L),
                    handleClickCta: x
                } : {
                    headerText: g.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                    ctaText: g.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                    tileAssetUrl: (0, h.getGameTileAssetUrl)(L),
                    handleClickCta: x
                }
            }();
        return r.createElement(O.QuestContentImpressionTracker, {
            questId: L.id,
            questContent: I.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0
        }, function(e) {
            return r.createElement("div", {
                ref: function(t) {
                    e.current = t
                },
                style: "bottom" === k ? {
                    paddingTop: "8px"
                } : {
                    paddingBottom: "8px"
                },
                onMouseEnter: U,
                onMouseLeave: w
            }, r.createElement(a.Clickable, {
                className: A.container,
                onClick: function() {
                    w(), K.handleClickCta()
                }
            }, r.createElement("div", {
                className: A.left
            }, r.createElement("div", {
                className: A.top
            }, r.createElement(S.QuestsIconWithGradient, {
                height: N,
                width: N
            }), r.createElement(a.Heading, {
                variant: "heading-md/semibold"
            }, K.headerText)), r.createElement("div", {
                className: A.middle
            }, r.createElement(a.Text, {
                variant: "text-sm/normal"
            }, K.ctaText), r.createElement(o.ArrowLargeRightIcon, {
                width: R,
                height: R
            })), r.createElement(a.Clickable, {
                className: A.bottom,
                onClick: function(e) {
                    w(), Y(e)
                }
            }, r.createElement(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted"
            }, g.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                gamePublisher: L.config.messages.gamePublisher
            })), r.createElement(i.CircleQuestionIcon, {
                width: C,
                height: C,
                color: a.tokens.colors.INTERACTIVE_MUTED
            }))), r.createElement("div", {
                className: A.right
            }, r.createElement("div", {
                className: A.imgWrapper
            }, r.createElement("div", {
                className: A.imgUnderlay
            }), r.createElement("img", {
                alt: g.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                    gameTitle: L.config.messages.gameTitle,
                    gamePublisher: L.config.messages.gamePublisher
                }),
                src: K.tileAssetUrl
            })))))
        })
    }
}