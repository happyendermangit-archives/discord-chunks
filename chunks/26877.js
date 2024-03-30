function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createImageFromImageData: function() {
            return i
        },
        createThumbnailFromVideo: function() {
            return a
        }
    });
    var r = n("945986");

    function o(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function i(e) {
        var t = document.createElement("canvas");
        t.width = e.width, t.height = e.height;
        var n = t.getContext("2d");
        if (null == n) throw Error("Could not create canvas context");
        return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
    }

    function a(e, t) {
        return u.apply(this, arguments)
    }

    function u() {
        var e;
        return e = function(e, t) {
            var n, o, i, a, u, s, l;
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
            }(this, function(c) {
                switch (c.label) {
                    case 0:
                        return (n = document.createElement("video")).muted = !0, n.src = e, n.currentTime = t, [4, n.play()];
                    case 1:
                        if (c.sent(), n.pause(), o = r.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth, i = Math.min(o, r.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight), a = n.videoWidth * i, u = n.videoHeight * i, (s = document.createElement("canvas")).width = a, s.height = u, null == (l = s.getContext("2d"))) throw Error("Could not create canvas context");
                        return l.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, a, u), [2, s.toDataURL("image/jpeg", .9)]
                }
            })
        }, (u = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, i) {
                var a = e.apply(t, n);

                function u(e) {
                    o(a, r, i, u, s, "next", e)
                }

                function s(e) {
                    o(a, r, i, u, s, "throw", e)
                }
                u(void 0)
            })
        }).apply(this, arguments)
    }
}