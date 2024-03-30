function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("182425"),
        o = n("121669");

    function i(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var u = function() {
        var e, t, n;

        function u() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u)
        }
        return e = u, t = [{
            key: "toDataUrl",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return e.toDataURL(t, n)
            }
        }, {
            key: "exportCanvas",
            value: function(e, t) {
                var n, a = t.format,
                    u = t.fileType,
                    s = void 0 === u ? "png" : u,
                    l = t.quality,
                    c = void 0 === l ? 1 : l,
                    f = t.fileName,
                    d = this;
                return (n = function() {
                    var t, n;
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
                                if (a === o.DiscordCanvasExporterOutputFormats.Base64) return [2, d.toDataUrl(e, s, c)];
                                if (a === o.DiscordCanvasExporterOutputFormats.Blob) return t = d.toDataUrl(e, s, c), [2, (0, r.dataUrlToBlob)(t)];
                                if (a !== o.DiscordCanvasExporterOutputFormats.File) return [3, 2];
                                return n = d.toDataUrl(e, s, c), [4, (0, r.dataUrlToFile)(n, f, "image/png")];
                            case 1:
                                return [2, i.sent()];
                            case 2:
                                throw Error("DiscordCanvas: ".concat(a, " is not a valid export format."))
                        }
                    })
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, o) {
                        var a = n.apply(e, t);

                        function u(e) {
                            i(a, r, o, u, s, "next", e)
                        }

                        function s(e) {
                            i(a, r, o, u, s, "throw", e)
                        }
                        u(void 0)
                    })
                })()
            }
        }], a(e.prototype, t), n && a(e, n), u
    }();
    t.default = u
}