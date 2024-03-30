function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("946188"),
        o = n("299529"),
        i = n("689952"),
        a = n("182425"),
        u = n("126280");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

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
    var c = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);

    function f(e) {
        if (c.has(e)) return "";
        try {
            var t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
            return n("99378")("@discordapp/twemoji/dist/svg/".concat(r.default.convert.toCodePoint(t), ".svg").replace("@discordapp/twemoji/dist/svg/", "./"))
        } catch (t) {
            return console.warn(t, "no emoji for", e), ""
        }
    }

    function d() {
        var e;
        return e = function(e) {
            var t, n, r, u;
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
                        return t = e.id, n = e.name, r = null != t ? o.default.getEmojiURL({
                            id: t,
                            size: 32,
                            animated: !1
                        }) : f(n), [4, (0, a.getPaletteForAvatar)(r)];
                    case 1:
                        return [2, null == (u = l.sent()) ? void 0 : u.map(function(e) {
                            var t, n, r = (n = 3, function(e) {
                                    if (Array.isArray(e)) return e
                                }(t = e) || function(e, t) {
                                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != o) {
                                        var i = [],
                                            a = !0,
                                            u = !1;
                                        try {
                                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                        } catch (e) {
                                            u = !0, r = e
                                        } finally {
                                            try {
                                                !a && null != o.return && o.return()
                                            } finally {
                                                if (u) throw r
                                            }
                                        }
                                        return i
                                    }
                                }(t, n) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return s(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                                    }
                                }(t, n) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                o = r[0],
                                a = r[1],
                                u = r[2];
                            return (0, i.rgbToHex)(o, a, u)
                        })]
                }
            })
        }, (d = function() {
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
    t.default = {
        getURL: u.default.makeMemoizer(f),
        filterUnsupportedEmojis: function(e) {
            return e
        },
        applyPlatformToThemedEmojiColorPalette: function(e) {
            var t = e.palette;
            return e.shouldProcessMobileColors, t
        },
        getEmojiColors: function(e) {
            return d.apply(this, arguments)
        },
        triggerFullscreenAnimation: function(e) {
            e.channelId, e.messageId, e.emoji
        }
    }
}