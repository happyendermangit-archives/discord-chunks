function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReaction: function() {
            return S
        },
        sendReply: function() {
            return v
        }
    });
    var r, o, i = n("629815"),
        a = n("651820"),
        u = n("183645"),
        s = n("481921"),
        l = n("319654"),
        c = n("261535"),
        f = n("573574"),
        d = n("83710"),
        _ = n("217014"),
        E = n("935741"),
        p = n("309944"),
        m = n("294437");

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function I(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    y(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    y(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function h(e, t) {
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
    var O = function(e) {
            var t = m.default.getFiles(e)[0];
            return null == m.default.getMessageForFile(t.id) ? Promise.reject() : new Promise(function(e, n) {
                var r = function(o) {
                    o.file.id === t.id && (i.default.unsubscribe("UPLOAD_COMPLETE", r), i.default.unsubscribe("UPLOAD_FAIL", r), "UPLOAD_COMPLETE" === o.type ? e(o.messageRecord) : n(Error("Upload failed")))
                };
                i.default.subscribe("UPLOAD_COMPLETE", r), i.default.subscribe("UPLOAD_FAIL", r)
            })
        },
        T = function(e, t) {
            var r, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 ? arguments[4] : void 0,
                f = E.default.getChannel(t);
            r = _.default.getToken(), c.default.parse(f, "");
            var d = l.UploadPlatform.WEB;
            if (o) u.default.addFile({
                file: {
                    platform: d,
                    file: e,
                    uri: "",
                    originalUri: ""
                },
                channelId: t,
                draftType: p.DraftType.ChannelMessage
            });
            else {
                if (null == E.default.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
                var m = n("564898").default,
                    y = new s.CloudUpload({
                        file: e,
                        platform: l.UploadPlatform.WEB,
                        isThumbnail: !1
                    }, t);
                y.description = i, m.uploadFiles({
                    channelId: t,
                    uploads: [y],
                    draftType: p.DraftType.ChannelMessage,
                    parsedMessage: a
                })
            }
        };
    var S = (r = I(function(e) {
        var t, n, r, o, i, u, s, l, c;
        return h(this, function(_) {
            switch (_.label) {
                case 0:
                    return t = e.file, n = e.reaction, r = e.user, o = e.altText, u = void 0 !== (i = e.requireConfirmation) && i, [4, a.default.openPrivateChannel(r.id, !1, !1)];
                case 1:
                    return s = _.sent(), T(t, s, u, o), [4, O(s)];
                case 2:
                    if (!(null != (l = _.sent()))) return [3, 4];
                    return c = (0, d.toReactionEmoji)(n), [4, (0, f.addReaction)(s, l.id, c)];
                case 3:
                    _.sent(), _.label = 4;
                case 4:
                    return [2]
            }
        })
    }), function(e) {
        return r.apply(this, arguments)
    });
    var v = (o = I(function(e) {
        var t, n, r, o, i, u, s, l, f;
        return h(this, function(d) {
            switch (d.label) {
                case 0:
                    return t = e.file, n = e.reply, r = e.user, o = e.altText, u = void 0 !== (i = e.requireConfirmation) && i, [4, a.default.openPrivateChannel(r.id, !1, !1)];
                case 1:
                    return s = d.sent(), l = E.default.getChannel(s), f = c.default.parse(l, n), T(t, s, u, o, f), [2]
            }
        })
    }), function(e) {
        return o.apply(this, arguments)
    })
}