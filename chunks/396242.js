function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAttachmentUrl: function() {
            return p
        },
        maybeRefreshAttachmentUrl: function() {
            return v
        },
        messageHasExpiredAttachmentUrl: function() {
            return T
        },
        removeSignedUrlParameters: function() {
            return m
        }
    });
    var r, o = n("967888"),
        i = n("388990"),
        a = n("822853"),
        u = n("704213"),
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

    function c(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    l(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    l(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function f(e, t) {
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
    var d = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
        _ = new Set(["/attachments/", "/ephemeral-attachments/"]),
        E = 1 * i.default.Millis.HOUR;

    function p(e) {
        return d.has(e.hostname) && Array.from(_).some(function(t) {
            return e.pathname.startsWith(t)
        })
    }

    function m(e) {
        var t = a.default.toURLSafe(e);
        if (null == t) return e;
        for (var n = 0, r = ["ex", "is", "hm"]; n < r.length; n++) {
            var o = r[n];
            t.searchParams.delete(o)
        }
        return t
    }

    function y(e) {
        var t, n, r = isNaN(n = parseInt(null != (t = e.searchParams.get("ex")) ? t : "", 16)) ? void 0 : n * i.default.Millis.SECOND;
        return null == r || r <= Date.now() + E
    }

    function I(e) {
        var t = a.default.toURLSafe(e.url);
        return null != t && y(t)
    }

    function h(e) {
        if (null == e) return !1;
        var t = a.default.toURLSafe(e.url);
        return !!(null != t && p(t)) && y(t)
    }

    function O(e) {
        var t;
        return h(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(h)) || h(e.video)
    }

    function T(e) {
        return e.attachments.some(I) || e.embeds.some(O)
    }

    function S() {
        return (S = c(function(e) {
            var t;
            return f(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, o.HTTP.post({
                            url: s.Endpoints.ATTACHMENTS_REFRESH_URLS,
                            body: {
                                attachment_urls: [e]
                            }
                        })];
                    case 1:
                        return [2, (t = n.sent()).ok ? t.body.refreshed_urls[0].refreshed : void 0]
                }
            })
        })).apply(this, arguments)
    }

    function v(e) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = c(function(e) {
            var t, n;
            return f(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (!u.AttachmentLinkRefreshExperiment.getCurrentConfig({
                                location: "link_clicked"
                            }).enabled || null == (t = a.default.toURLSafe(e)) || !y(t)) return [2, e];
                        return [4, function(e) {
                            return S.apply(this, arguments)
                        }(e)];
                    case 1:
                        return [2, null != (n = r.sent()) ? n : e]
                }
            })
        })).apply(this, arguments)
    }
}