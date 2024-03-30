function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        cleanExecutablePath: function() {
            return E
        },
        default: function() {
            return p
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("517727"),
        u = n("35523"),
        s = n("374550"),
        l = n("131900");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var f = [];

    function d(e) {
        return e = e.toLowerCase(), (0, s.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e
    }

    function _(e) {
        null != e && "" !== e && (!(e = d(e)).endsWith("/") && (e += "/"), f.push(e))
    }

    function E(e) {
        e = d(e);
        var t = !1;
        return (f.forEach(function(n) {
            !t && e.startsWith(n) && (e = e.substr(n.length), t = !0)
        }), t) ? e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/") : null
    }

    function p() {
        return m.apply(this, arguments)
    }

    function m() {
        var e;
        return e = function() {
            var e, t, n;
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
            }(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (null != r) return [2, r];
                        o.label = 1;
                    case 1:
                        return o.trys.push([1, 4, , 5]), [4, l.default.ensureModule("discord_game_utils")];
                    case 2:
                        return o.sent(), [4, l.default.requireModule("discord_game_utils")];
                    case 3:
                        return r = o.sent(), [3, 5];
                    case 4:
                        return e = o.sent(), new u.default("GamesActionCreators").error("could not load discord_game_utils", e), [3, 5];
                    case 5:
                        return (0, s.isWindows)() && (_((t = a.default.process.env).LOCALAPPDATA), _(t["PROGRAMFILES(X86)"]), _(t.PROGRAMFILES), _(t.PROGRAMW6432), _(t.PROGRAMDATA), _("/games/"), _("/steamlibrary/steamapps/common/")), [4, (n = a.default.remoteApp.getPath)("home")];
                    case 6:
                        return _.apply(void 0, [o.sent()]), [4, n("appData")];
                    case 7:
                        return _.apply(void 0, [o.sent()]), [4, n("desktop")];
                    case 8:
                        return _.apply(void 0, [o.sent()]), [4, n("documents")];
                    case 9:
                        return _.apply(void 0, [o.sent()]), [4, n("downloads")];
                    case 10:
                        return _.apply(void 0, [o.sent()]), (f = i().uniq(f)).sort(function(e, t) {
                            return t.length - e.length
                        }), [2, r]
                }
            })
        }, (m = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    c(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    c(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}