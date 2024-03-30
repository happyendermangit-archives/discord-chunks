function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchBlockedDomainList: function() {
            return _
        }
    });
    var r = n("757167"),
        o = n("967888"),
        i = n("629815"),
        a = n("35523"),
        u = n("27308"),
        s = n("564882");

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
    var c = window.GLOBAL_ENV.WEBAPP_ENDPOINT,
        f = "https:".concat(c, "/bad-hash-delta"),
        d = new a.default("FetchBlockedDomain");

    function _() {
        return r.default.timeAsync("\uD83D\uDCBE", "fetchBlockedDomainList", E)
    }

    function E() {
        return p.apply(this, arguments)
    }

    function p() {
        var e;
        return e = function() {
            var e, t, n, a, l, c, _;
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
            }(this, function(E) {
                switch (E.label) {
                    case 0:
                        d.verbose("Fetching blocked domain list"), E.label = 1;
                    case 1:
                        return E.trys.push([1, 10, , 11]), [4, o.HTTP.get("https://cdn.discordapp.com/bad-domains/current_revision.txt")];
                    case 2:
                        if (e = parseInt.apply(void 0, [E.sent().text]), t = s.default.getCurrentRevision(), d.verbose("Server revision: ".concat(e, ", Client revision: ").concat(t)), !(null === t || t !== e)) return [3, 9];
                        E.label = 3;
                    case 3:
                        if (E.trys.push([3, 6, , 8]), null === t || t > e) throw Error("Client revision number is " + (null === t ? "null" : "greater than server revision number"));
                        if (e - t > 15) throw Error("Client revision number is more than ".concat(15, " behind the server revision number"));
                        return [4, o.HTTP.get({
                            url: f,
                            query: {
                                revision: t
                            }
                        })];
                    case 4:
                        if (0 === (a = E.sent().body).ADDED.length && 0 === a.REMOVED.length) return d.verbose("No changes to blocked domains list."), [2];
                        return d.verbose("Retrieved delta, domains added: ".concat(a.ADDED.length, ", domains removed: ").concat(a.REMOVED.length)), [4, r.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", function() {
                            return s.default.getBlockedDomainList()
                        })];
                    case 5:
                        if (null === (l = E.sent())) throw Error("Blocked domain list is null");
                        return d.verbose("Blocked domains list length: ".concat(l.size, " before update")), a.ADDED.forEach(function(e) {
                            if (l.has(e)) throw Error("Unable to add domain which is already in the blockedDomains set: ".concat(e));
                            l.add(e)
                        }), a.REMOVED.forEach(function(e) {
                            if (!l.has(e)) throw Error("Unable to removed domain which is not in the blockedDomains set: ".concat(e));
                            l.delete(e)
                        }), n = Array.from(l), d.verbose("Delta applied successfully"), [3, 8];
                    case 6:
                        if (c = E.sent(), d.verbose("Unable to process domain list delta: ".concat(c.message)), (0, u.isSlowNetwork)()) return d.verbose("Slow network detected, not downloading full list"), [2];
                        return d.verbose("Downloading the full bad domains file"), [4, o.HTTP.get({
                            url: "https://cdn.discordapp.com/bad-domains/updated_hashes.json"
                        })];
                    case 7:
                        return n = E.sent().body, [3, 8];
                    case 8:
                        d.verbose("Blocked domains list length: ".concat(n.length, " after update")), r.default.time("\uD83D\uDCBE", "Save Blocked Domain List", function() {
                            return i.default.dispatch({
                                type: "BLOCKED_DOMAIN_LIST_FETCHED",
                                list: n,
                                revision: e
                            })
                        }), E.label = 9;
                    case 9:
                        return [3, 11];
                    case 10:
                        return _ = E.sent(), d.error(_), [3, 11];
                    case 11:
                        return [2]
                }
            })
        }, (p = function() {
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
        }).apply(this, arguments)
    }
}