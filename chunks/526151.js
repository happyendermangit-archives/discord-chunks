function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("483587"),
        a = n("741471"),
        u = n("242364"),
        s = n("499525"),
        l = n("231172"),
        c = n("719378"),
        f = n("281767"),
        d = n("941504");

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    _(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    _(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function p(e, t) {
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
    }

    function m(e, t, n) {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = E(function(e, t, n) {
            var r;
            return p(this, function(o) {
                switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, , 3]), [4, e()];
                    case 1:
                        return [2, o.sent()];
                    case 2:
                        return (null === (r = o.sent().body) || void 0 === r ? void 0 : r.code) === f.AbortCodes.NON_MODERATED_TAG_REQUIRED && i.default.show({
                            title: t,
                            body: n
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    t.default = {
        resort: function(e) {
            o.default.dispatch({
                type: "RESORT_THREADS",
                channelId: e
            })
        },
        createForumTag: function(e, t) {
            return r.HTTP.post({
                url: f.Endpoints.FORUM_TAGS(t),
                body: {
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                    moderated: e.moderated
                }
            })
        },
        updateForumTag: function(e, t) {
            var n = r.HTTP.put({
                url: f.Endpoints.FORUM_TAG(t, e.id),
                body: {
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: null == e.emojiId ? e.emojiName : void 0,
                    moderated: e.moderated
                }
            });
            m(function() {
                return n
            }, d.default.Messages.FORUM_TAG_EDIT_ERROR, d.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
        },
        deleteForumTag: function(e, t) {
            var n = r.HTTP.del({
                url: f.Endpoints.FORUM_TAG(e, t)
            });
            m(function() {
                return n
            }, d.default.Messages.FORUM_TAG_REMOVE_ERROR, d.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
        },
        updateForumPostTags: function(e, t) {
            return E(function() {
                return p(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, a.default.unarchiveThreadIfNecessary(e)];
                        case 1:
                            return n.sent(), [2, r.HTTP.patch({
                                url: f.Endpoints.CHANNEL(e),
                                body: {
                                    applied_tags: t
                                }
                            })]
                    }
                })
            })()
        },
        hideAdminOnboarding: function(e, t) {
            o.default.dispatch({
                type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                channelId: e,
                hide: t
            })
        },
        markPostAsSeen: function(e, t, n) {
            (0, u.markAnalyticsFeedItemSeen)((0, l.getForumPostSeenManagerId)(e), t, n)
        },
        markPostAsUnseen: function(e, t, n) {
            (0, u.markAnalyticsFeedItemUnseen)((0, l.getForumPostSeenManagerId)(e), t, n)
        },
        flushSeenItems: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
            (0, u.flushAnalyticsFeedItems)((0, l.getForumPostSeenManagerId)(e), t)
        },
        searchForumPosts: function(e, t, n, r) {
            return E(function() {
                var i, u;
                return p(this, function(u) {
                    switch (u.label) {
                        case 0:
                            o.default.dispatch({
                                type: "FORUM_SEARCH_START",
                                channelId: t
                            }), u.label = 1;
                        case 1:
                            return u.trys.push([1, 3, , 4]), [4, a.default.searchThreads(e, t, n, r)];
                        case 2:
                            return i = u.sent(), (0, c.trackForumSearched)({
                                guildId: e,
                                channelId: t,
                                numSearchResults: i.length
                            }), o.default.dispatch({
                                type: "FORUM_SEARCH_SUCCESS",
                                channelId: t,
                                threadIds: i
                            }), [3, 4];
                        case 3:
                            return u.sent(), o.default.dispatch({
                                type: "FORUM_SEARCH_FAILURE",
                                channelId: t
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        updateForumSearchQuery: function(e, t) {
            o.default.dispatch({
                type: "FORUM_SEARCH_QUERY_UPDATED",
                channelId: e,
                query: t
            })
        },
        clearForumSearch: function(e) {
            o.default.dispatch({
                type: "FORUM_SEARCH_CLEAR",
                channelId: e
            })
        }
    }
}