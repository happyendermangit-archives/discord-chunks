function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEmojiCaptionsForUser: function() {
            return u
        },
        initiateEmojiInteraction: function() {
            return l
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("281767");

    function a(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function u() {
        return s.apply(this, arguments)
    }

    function s() {
        var e;
        return e = function() {
            var e, t, n, a, u, s, l, c, f;
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
            }(this, function(d) {
                switch (d.label) {
                    case 0:
                        o.default.dispatch({
                            type: "EMOJI_CAPTIONS_FETCH"
                        }), d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                            url: i.Endpoints.EMOJI_CAPTIONS_GET
                        })];
                    case 2:
                        e = d.sent().body, t = {}, n = !0, a = !1, u = void 0;
                        try {
                            for (s = e.items[Symbol.iterator](); !(n = (l = s.next()).done); n = !0) t[(c = l.value).emoji_id] = c.emoji_captions
                        } catch (e) {
                            a = !0, u = e
                        } finally {
                            try {
                                !n && null != s.return && s.return()
                            } finally {
                                if (a) throw u
                            }
                        }
                        return o.default.dispatch({
                            type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
                            emojiCaptions: t
                        }), [3, 4];
                    case 3:
                        var _;
                        return f = d.sent(), o.default.dispatch({
                            type: "EMOJI_CAPTIONS_FETCH_ERROR",
                            is4XXError: (null == (_ = f.body) ? void 0 : _.status) >= 400 && (null == _ ? void 0 : _.status) <= 499
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        }, (s = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function u(e) {
                    a(i, r, o, u, s, "next", e)
                }

                function s(e) {
                    a(i, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }).apply(this, arguments)
    }

    function l(e) {
        o.default.dispatch({
            type: "EMOJI_INTERACTION_INITIATED",
            interaction: e
        })
    }
}