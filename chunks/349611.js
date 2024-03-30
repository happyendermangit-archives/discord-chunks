function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimationState: function() {
            return a
        },
        sendGiftMessage: function() {
            return p
        }
    });
    var r, o, i, a, u = n("512722"),
        s = n.n(u),
        l = n("651820"),
        c = n("443458"),
        f = n("261535"),
        d = n("935741"),
        _ = n("758989");

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }(r = a || (a = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
    var p = (i = (o = function(e, t) {
        var n, r;
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
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    return [4, l.default.openPrivateChannel(e.id).then(function(e) {
                        var t = d.default.getChannel(e);
                        if (s()(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                        return t
                    })];
                case 1:
                    return n = o.sent(), r = (0, _.getGiftCodeURL)(t), [2, c.default.sendMessage(n.id, f.default.parse(n, r), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })]
            }
        })
    }, function() {
        var e = this,
            t = arguments;
        return new Promise(function(n, r) {
            var i = o.apply(e, t);

            function a(e) {
                E(i, n, r, a, u, "next", e)
            }

            function u(e) {
                E(i, n, r, a, u, "throw", e)
            }
            a(void 0)
        })
    }), function(e, t) {
        return i.apply(this, arguments)
    })
}