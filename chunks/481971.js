function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUPPORT_LOCATION: function() {
            return c
        }
    });
    var r = n("967888"),
        o = n("98454"),
        i = n("225098"),
        a = n("217014"),
        u = n("374550"),
        s = n("281767");

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var c = "https://".concat(s.SUPPORT_DOMAIN),
        f = "https://".concat(s.SUPPORT_DEV_DOMAIN);

    function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
        return t + e
    }

    function _() {
        return i.default.locale.toLowerCase()
    }
    t.default = {
        getArticleURL: function(e) {
            return d("/hc/".concat(_(), "/articles/").concat(e))
        },
        getDevArticleURL: function(e) {
            return d("/hc/".concat(_(), "/articles/").concat(e), f)
        },
        getCreatorSupportArticleURL: function(e) {
            return d("/hc/".concat(_(), "/articles/").concat(e), "https://creator-support.discord.com")
        },
        getTwitterURL: function() {
            return (0, o.default)(s.LocalizedLinks.TWITTER)
        },
        getCommunityURL: function() {
            return d("/hc/".concat(_()))
        },
        getSubmitRequestURL: function(e) {
            var t = d("/hc/".concat(_(), "/requests/new?platform=").concat(encodeURIComponent((0, u.getPlatformName)())));
            return null != e && (t += "&device_info=".concat(encodeURIComponent(e))), t
        },
        getSubmitRequestURLAuthenticated: function(e) {
            var t;
            return (t = function() {
                var t, n, o;
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
                }(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (null == (t = a.default.getToken())) return [2, this.getSubmitRequestURL(e)];
                            return [4, r.HTTP.get({
                                url: s.Endpoints.SSO_TOKEN,
                                headers: {
                                    authorization: t
                                }
                            })];
                        case 1:
                            return n = i.sent(), o = this.getSubmitRequestURL(e), [2, "".concat((0, r.getAPIBaseURL)()).concat(s.Endpoints.SSO, "?service=zendesk&return_to=").concat(o, "&token=").concat(n.body.token)]
                    }
                })
            }, function() {
                var e = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var i = t.apply(e, n);

                    function a(e) {
                        l(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        l(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            }).apply(this)
        },
        getSearchURL: function(e) {
            var t = encodeURIComponent(e);
            return d("/hc/".concat(_(), "/search?utf8=%E2%9C%93&query=").concat(t, "&commit=Search"))
        },
        getFeaturedArticlesJsonURL: function() {
            return d("/api/v2/help_center/en-us/articles.json?label_names=featured")
        }
    }
}