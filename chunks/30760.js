function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("802143"),
        a = n("617518");

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function s() {
        var e = new Date().getMinutes();
        return "x=".concat(Math.floor(e / 5))
    }
    t.default = {
        lockChangeLog: function(e) {
            o.default.dispatch({
                type: "CHANGE_LOG_LOCK",
                key: e
            })
        },
        unlockChangeLog: function(e) {
            o.default.dispatch({
                type: "CHANGE_LOG_UNLOCK",
                key: e
            })
        },
        markChangelogAsSeen: function(e, t) {
            o.default.dispatch({
                type: "CHANGE_LOG_MARK_SEEN",
                changelogId: e,
                changelogDate: t
            })
        },
        setChangelogOverride: function(e) {
            o.default.dispatch({
                type: "CHANGE_LOG_SET_OVERRIDE",
                id: e
            })
        },
        fetchChangelogConfig: function() {
            var e = a.ChangelogPlatforms.DESKTOP;
            return r.HTTP.get({
                url: "https://cdn.discordapp.com/changelogs/config_".concat(e, ".json?").concat(s())
            })
        },
        fetchChangelog: function(e, t) {
            var n;
            return (n = function() {
                var n, u, l;
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
                }(this, function(l) {
                    switch (l.label) {
                        case 0:
                            if (null != i.default.getChangelog(e, t)) return [2, null];
                            n = a.ChangelogPlatforms.DESKTOP, l.label = 1;
                        case 1:
                            return l.trys.push([1, 3, , 7]), [4, r.HTTP.get({
                                url: "https://cdn.discordapp.com/changelogs/".concat(n, "/").concat(e, "/").concat(t, ".json?").concat(s())
                            })];
                        case 2:
                            return u = l.sent(), o.default.dispatch({
                                type: "CHANGE_LOG_FETCH_SUCCESS",
                                id: e,
                                changelog: u.body
                            }), [2, u.body];
                        case 3:
                            if (l.sent(), o.default.dispatch({
                                    type: "CHANGE_LOG_FETCH_FAILED",
                                    id: e,
                                    locale: t
                                }), !("en-US" !== t)) return [3, 5];
                            return [4, this.fetchChangelog(e, "en-US")];
                        case 4:
                            return [2, l.sent()];
                        case 5:
                            return [2, null];
                        case 6:
                            return [3, 7];
                        case 7:
                            return [2]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(r, o) {
                    var i = n.apply(e, t);

                    function a(e) {
                        u(i, r, o, a, s, "next", e)
                    }

                    function s(e) {
                        u(i, r, o, a, s, "throw", e)
                    }
                    a(void 0)
                })
            }).apply(this)
        }
    }
}