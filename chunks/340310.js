function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationCommandFrecency: function() {
            return v
        },
        ApplicationFrecency: function() {
            return R
        },
        EmojiFrecency: function() {
            return S
        },
        FavoriteEmojis: function() {
            return T
        },
        FavoriteGIF: function() {
            return I
        },
        FavoriteGIFs: function() {
            return y
        },
        FavoriteSoundboardSounds: function() {
            return A
        },
        FavoriteStickers: function() {
            return h
        },
        FrecencyItem: function() {
            return g
        },
        FrecencyUserSettings: function() {
            return m
        },
        GIFType: function() {
            return o
        },
        GuildAndChannelFrecency: function() {
            return C
        },
        PlayedSoundFrecency: function() {
            return N
        },
        StickerFrecency: function() {
            return O
        }
    });
    var r, o, i = n("578012"),
        a = n("28178");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && _(e, t)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function E(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = f(e);
            if (t) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n)
        }
    }(r = o || (o = {}))[r.NONE = 0] = "NONE", r[r.IMAGE = 1] = "IMAGE", r[r.VIDEO = 2] = "VIDEO";
    var m = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.FrecencyUserSettings", [{
                    no: 1,
                    name: "versions",
                    kind: "message",
                    T: function() {
                        return a.Versions
                    }
                }, {
                    no: 2,
                    name: "favorite_gifs",
                    kind: "message",
                    T: function() {
                        return y
                    }
                }, {
                    no: 3,
                    name: "favorite_stickers",
                    kind: "message",
                    T: function() {
                        return h
                    }
                }, {
                    no: 4,
                    name: "sticker_frecency",
                    kind: "message",
                    T: function() {
                        return O
                    }
                }, {
                    no: 5,
                    name: "favorite_emojis",
                    kind: "message",
                    T: function() {
                        return T
                    }
                }, {
                    no: 6,
                    name: "emoji_frecency",
                    kind: "message",
                    T: function() {
                        return S
                    }
                }, {
                    no: 7,
                    name: "application_command_frecency",
                    kind: "message",
                    T: function() {
                        return v
                    }
                }, {
                    no: 8,
                    name: "favorite_soundboard_sounds",
                    kind: "message",
                    T: function() {
                        return A
                    }
                }, {
                    no: 9,
                    name: "application_frecency",
                    kind: "message",
                    T: function() {
                        return R
                    }
                }, {
                    no: 10,
                    name: "heard_sound_frecency",
                    kind: "message",
                    T: function() {
                        return b
                    }
                }, {
                    no: 11,
                    name: "played_sound_frecency",
                    kind: "message",
                    T: function() {
                        return N
                    }
                }, {
                    no: 12,
                    name: "guild_and_channel_frecency",
                    kind: "message",
                    T: function() {
                        return C
                    }
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {};
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), u = e.pos + t; e.pos < u;) {
                        var s = E(e.tag(), 2),
                            l = s[0],
                            c = s[1];
                        switch (l) {
                            case 1:
                                o.versions = a.Versions.internalBinaryRead(e, e.uint32(), n, o.versions);
                                break;
                            case 2:
                                o.favoriteGifs = y.internalBinaryRead(e, e.uint32(), n, o.favoriteGifs);
                                break;
                            case 3:
                                o.favoriteStickers = h.internalBinaryRead(e, e.uint32(), n, o.favoriteStickers);
                                break;
                            case 4:
                                o.stickerFrecency = O.internalBinaryRead(e, e.uint32(), n, o.stickerFrecency);
                                break;
                            case 5:
                                o.favoriteEmojis = T.internalBinaryRead(e, e.uint32(), n, o.favoriteEmojis);
                                break;
                            case 6:
                                o.emojiFrecency = S.internalBinaryRead(e, e.uint32(), n, o.emojiFrecency);
                                break;
                            case 7:
                                o.applicationCommandFrecency = v.internalBinaryRead(e, e.uint32(), n, o.applicationCommandFrecency);
                                break;
                            case 8:
                                o.favoriteSoundboardSounds = A.internalBinaryRead(e, e.uint32(), n, o.favoriteSoundboardSounds);
                                break;
                            case 9:
                                o.applicationFrecency = R.internalBinaryRead(e, e.uint32(), n, o.applicationFrecency);
                                break;
                            case 10:
                                o.heardSoundFrecency = b.internalBinaryRead(e, e.uint32(), n, o.heardSoundFrecency);
                                break;
                            case 11:
                                o.playedSoundFrecency = N.internalBinaryRead(e, e.uint32(), n, o.playedSoundFrecency);
                                break;
                            case 12:
                                o.guildAndChannelFrecency = C.internalBinaryRead(e, e.uint32(), n, o.guildAndChannelFrecency);
                                break;
                            default:
                                var f = n.readUnknownField;
                                if ("throw" === f) throw new globalThis.Error("Unknown field ".concat(l, " (wire type ").concat(c, ") for ").concat(this.typeName));
                                var d = e.skip(c);
                                !1 !== f && (!0 === f ? i.UnknownFieldHandler.onRead : f)(this.typeName, o, l, c, d)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    e.versions && a.Versions.internalBinaryWrite(e.versions, t.tag(1, i.WireType.LengthDelimited).fork(), n).join(), e.favoriteGifs && y.internalBinaryWrite(e.favoriteGifs, t.tag(2, i.WireType.LengthDelimited).fork(), n).join(), e.favoriteStickers && h.internalBinaryWrite(e.favoriteStickers, t.tag(3, i.WireType.LengthDelimited).fork(), n).join(), e.stickerFrecency && O.internalBinaryWrite(e.stickerFrecency, t.tag(4, i.WireType.LengthDelimited).fork(), n).join(), e.favoriteEmojis && T.internalBinaryWrite(e.favoriteEmojis, t.tag(5, i.WireType.LengthDelimited).fork(), n).join(), e.emojiFrecency && S.internalBinaryWrite(e.emojiFrecency, t.tag(6, i.WireType.LengthDelimited).fork(), n).join(), e.applicationCommandFrecency && v.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, i.WireType.LengthDelimited).fork(), n).join(), e.favoriteSoundboardSounds && A.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, i.WireType.LengthDelimited).fork(), n).join(), e.applicationFrecency && R.internalBinaryWrite(e.applicationFrecency, t.tag(9, i.WireType.LengthDelimited).fork(), n).join(), e.heardSoundFrecency && b.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, i.WireType.LengthDelimited).fork(), n).join(), e.playedSoundFrecency && N.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, i.WireType.LengthDelimited).fork(), n).join(), e.guildAndChannelFrecency && C.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, i.WireType.LengthDelimited).fork(), n).join();
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        y = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.FavoriteGIFs", [{
                    no: 1,
                    name: "gifs",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "message",
                        T: function() {
                            return I
                        }
                    }
                }, {
                    no: 2,
                    name: "hide_tooltip",
                    kind: "scalar",
                    T: 8
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        gifs: {},
                        hideTooltip: !1
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        switch (s) {
                            case 1:
                                this.binaryReadMap1(o.gifs, e, n);
                                break;
                            case 2:
                                o.hideTooltip = e.bool();
                                break;
                            default:
                                var c = n.readUnknownField;
                                if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                                var f = e.skip(l);
                                !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = E(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.string();
                                break;
                            case 2:
                                o = I.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs")
                        }
                    }
                    e[null != r ? r : ""] = null != o ? o : I.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.keys(e.gifs)[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            t.tag(1, i.WireType.LengthDelimited).fork().tag(1, i.WireType.LengthDelimited).string(l), t.tag(2, i.WireType.LengthDelimited).fork(), I.internalBinaryWrite(e.gifs[l], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }!1 !== e.hideTooltip && t.tag(2, i.WireType.Varint).bool(e.hideTooltip);
                    var c = n.writeUnknownFields;
                    return !1 !== c && (!0 == c ? i.UnknownFieldHandler.onWrite : c)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        I = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.FavoriteGIF", [{
                    no: 1,
                    name: "format",
                    kind: "enum",
                    T: function() {
                        return ["discord_protos.discord_users.v1.GIFType", o]
                    }
                }, {
                    no: 2,
                    name: "src",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "width",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 4,
                    name: "height",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 5,
                    name: "order",
                    kind: "scalar",
                    T: 13
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        format: 0,
                        src: "",
                        width: 0,
                        height: 0,
                        order: 0
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        switch (s) {
                            case 1:
                                o.format = e.int32();
                                break;
                            case 2:
                                o.src = e.string();
                                break;
                            case 3:
                                o.width = e.uint32();
                                break;
                            case 4:
                                o.height = e.uint32();
                                break;
                            case 5:
                                o.order = e.uint32();
                                break;
                            default:
                                var c = n.readUnknownField;
                                if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                                var f = e.skip(l);
                                !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    0 !== e.format && t.tag(1, i.WireType.Varint).int32(e.format), "" !== e.src && t.tag(2, i.WireType.LengthDelimited).string(e.src), 0 !== e.width && t.tag(3, i.WireType.Varint).uint32(e.width), 0 !== e.height && t.tag(4, i.WireType.Varint).uint32(e.height), 0 !== e.order && t.tag(5, i.WireType.Varint).uint32(e.order);
                    var r = n.writeUnknownFields;
                    return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        h = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.FavoriteStickers", [{
                    no: 1,
                    name: "sticker_ids",
                    kind: "scalar",
                    repeat: 1,
                    T: 6
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        stickerIds: []
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) {
                            if (l === i.WireType.LengthDelimited)
                                for (var c = e.int32() + e.pos; e.pos < c;) o.stickerIds.push(e.fixed64().toString());
                            else o.stickerIds.push(e.fixed64().toString())
                        } else {
                            var f = n.readUnknownField;
                            if ("throw" === f) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var d = e.skip(l);
                            !1 !== f && (!0 === f ? i.UnknownFieldHandler.onRead : f)(this.typeName, o, s, l, d)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    if (e.stickerIds.length) {
                        t.tag(1, i.WireType.LengthDelimited).fork();
                        for (var r = 0; r < e.stickerIds.length; r++) t.fixed64(e.stickerIds[r]);
                        t.join()
                    }
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? i.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        O = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.StickerFrecency", [{
                    no: 1,
                    name: "stickers",
                    kind: "map",
                    K: 6,
                    V: {
                        kind: "message",
                        T: function() {
                            return g
                        }
                    }
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        stickers: {}
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) this.binaryReadMap1(o.stickers, e, n);
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var f = e.skip(l);
                            !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = E(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.fixed64().toString();
                                break;
                            case 2:
                                o = g.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers")
                        }
                    }
                    e[null != r ? r : "0"] = null != o ? o : g.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.keys(e.stickers)[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            t.tag(1, i.WireType.LengthDelimited).fork().tag(1, i.WireType.Bit64).fixed64(l), t.tag(2, i.WireType.LengthDelimited).fork(), g.internalBinaryWrite(e.stickers[l], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    var c = n.writeUnknownFields;
                    return !1 !== c && (!0 == c ? i.UnknownFieldHandler.onWrite : c)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        T = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.FavoriteEmojis", [{
                    no: 1,
                    name: "emojis",
                    kind: "scalar",
                    repeat: 2,
                    T: 9
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        emojis: []
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) o.emojis.push(e.string());
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var f = e.skip(l);
                            !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    for (var r = 0; r < e.emojis.length; r++) t.tag(1, i.WireType.LengthDelimited).string(e.emojis[r]);
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? i.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        S = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.EmojiFrecency", [{
                    no: 1,
                    name: "emojis",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "message",
                        T: function() {
                            return g
                        }
                    }
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        emojis: {}
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) this.binaryReadMap1(o.emojis, e, n);
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var f = e.skip(l);
                            !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = E(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.string();
                                break;
                            case 2:
                                o = g.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis")
                        }
                    }
                    e[null != r ? r : ""] = null != o ? o : g.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.keys(e.emojis)[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            t.tag(1, i.WireType.LengthDelimited).fork().tag(1, i.WireType.LengthDelimited).string(l), t.tag(2, i.WireType.LengthDelimited).fork(), g.internalBinaryWrite(e.emojis[l], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    var c = n.writeUnknownFields;
                    return !1 !== c && (!0 == c ? i.UnknownFieldHandler.onWrite : c)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        v = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.ApplicationCommandFrecency", [{
                    no: 1,
                    name: "application_commands",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "message",
                        T: function() {
                            return g
                        }
                    }
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        applicationCommands: {}
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) this.binaryReadMap1(o.applicationCommands, e, n);
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var f = e.skip(l);
                            !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = E(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.string();
                                break;
                            case 2:
                                o = g.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands")
                        }
                    }
                    e[null != r ? r : ""] = null != o ? o : g.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.keys(e.applicationCommands)[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            t.tag(1, i.WireType.LengthDelimited).fork().tag(1, i.WireType.LengthDelimited).string(l), t.tag(2, i.WireType.LengthDelimited).fork(), g.internalBinaryWrite(e.applicationCommands[l], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    var c = n.writeUnknownFields;
                    return !1 !== c && (!0 == c ? i.UnknownFieldHandler.onWrite : c)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        g = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.FrecencyItem", [{
                    no: 1,
                    name: "total_uses",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 2,
                    name: "recent_uses",
                    kind: "scalar",
                    repeat: 1,
                    T: 4
                }, {
                    no: 3,
                    name: "frecency",
                    kind: "scalar",
                    T: 5
                }, {
                    no: 4,
                    name: "score",
                    kind: "scalar",
                    T: 5
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        totalUses: 0,
                        recentUses: [],
                        frecency: 0,
                        score: 0
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        switch (s) {
                            case 1:
                                o.totalUses = e.uint32();
                                break;
                            case 2:
                                if (l === i.WireType.LengthDelimited)
                                    for (var c = e.int32() + e.pos; e.pos < c;) o.recentUses.push(e.uint64().toString());
                                else o.recentUses.push(e.uint64().toString());
                                break;
                            case 3:
                                o.frecency = e.int32();
                                break;
                            case 4:
                                o.score = e.int32();
                                break;
                            default:
                                var f = n.readUnknownField;
                                if ("throw" === f) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                                var d = e.skip(l);
                                !1 !== f && (!0 === f ? i.UnknownFieldHandler.onRead : f)(this.typeName, o, s, l, d)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    if (0 !== e.totalUses && t.tag(1, i.WireType.Varint).uint32(e.totalUses), e.recentUses.length) {
                        t.tag(2, i.WireType.LengthDelimited).fork();
                        for (var r = 0; r < e.recentUses.length; r++) t.uint64(e.recentUses[r]);
                        t.join()
                    }
                    0 !== e.frecency && t.tag(3, i.WireType.Varint).int32(e.frecency), 0 !== e.score && t.tag(4, i.WireType.Varint).int32(e.score);
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? i.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        A = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.FavoriteSoundboardSounds", [{
                    no: 1,
                    name: "sound_ids",
                    kind: "scalar",
                    repeat: 1,
                    T: 6
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        soundIds: []
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) {
                            if (l === i.WireType.LengthDelimited)
                                for (var c = e.int32() + e.pos; e.pos < c;) o.soundIds.push(e.fixed64().toString());
                            else o.soundIds.push(e.fixed64().toString())
                        } else {
                            var f = n.readUnknownField;
                            if ("throw" === f) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var d = e.skip(l);
                            !1 !== f && (!0 === f ? i.UnknownFieldHandler.onRead : f)(this.typeName, o, s, l, d)
                        }
                    }
                    return o
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    if (e.soundIds.length) {
                        t.tag(1, i.WireType.LengthDelimited).fork();
                        for (var r = 0; r < e.soundIds.length; r++) t.fixed64(e.soundIds[r]);
                        t.join()
                    }
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? i.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        b = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.HeardSoundFrecency", [{
                    no: 1,
                    name: "heard_sounds",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "message",
                        T: function() {
                            return g
                        }
                    }
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        heardSounds: {}
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) this.binaryReadMap1(o.heardSounds, e, n);
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var f = e.skip(l);
                            !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = E(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.string();
                                break;
                            case 2:
                                o = g.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds")
                        }
                    }
                    e[null != r ? r : ""] = null != o ? o : g.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.keys(e.heardSounds)[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            t.tag(1, i.WireType.LengthDelimited).fork().tag(1, i.WireType.LengthDelimited).string(l), t.tag(2, i.WireType.LengthDelimited).fork(), g.internalBinaryWrite(e.heardSounds[l], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    var c = n.writeUnknownFields;
                    return !1 !== c && (!0 == c ? i.UnknownFieldHandler.onWrite : c)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        N = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.PlayedSoundFrecency", [{
                    no: 1,
                    name: "played_sounds",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "message",
                        T: function() {
                            return g
                        }
                    }
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        playedSounds: {}
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) this.binaryReadMap1(o.playedSounds, e, n);
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var f = e.skip(l);
                            !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = E(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.string();
                                break;
                            case 2:
                                o = g.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds")
                        }
                    }
                    e[null != r ? r : ""] = null != o ? o : g.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.keys(e.playedSounds)[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            t.tag(1, i.WireType.LengthDelimited).fork().tag(1, i.WireType.LengthDelimited).string(l), t.tag(2, i.WireType.LengthDelimited).fork(), g.internalBinaryWrite(e.playedSounds[l], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    var c = n.writeUnknownFields;
                    return !1 !== c && (!0 == c ? i.UnknownFieldHandler.onWrite : c)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        R = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.ApplicationFrecency", [{
                    no: 1,
                    name: "applications",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "message",
                        T: function() {
                            return g
                        }
                    }
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        applications: {}
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) this.binaryReadMap1(o.applications, e, n);
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var f = e.skip(l);
                            !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = E(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.string();
                                break;
                            case 2:
                                o = g.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications")
                        }
                    }
                    e[null != r ? r : ""] = null != o ? o : g.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.keys(e.applications)[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            t.tag(1, i.WireType.LengthDelimited).fork().tag(1, i.WireType.LengthDelimited).string(l), t.tag(2, i.WireType.LengthDelimited).fork(), g.internalBinaryWrite(e.applications[l], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    var c = n.writeUnknownFields;
                    return !1 !== c && (!0 == c ? i.UnknownFieldHandler.onWrite : c)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType)),
        C = new(function(e) {
            d(n, e);
            var t = p(n);

            function n() {
                return s(this, n), t.call(this, "discord_protos.discord_users.v1.GuildAndChannelFrecency", [{
                    no: 1,
                    name: "guild_and_channels",
                    kind: "map",
                    K: 6,
                    V: {
                        kind: "message",
                        T: function() {
                            return g
                        }
                    }
                }])
            }
            return c(n, [{
                key: "create",
                value: function(e) {
                    var t = {
                        guildAndChannels: {}
                    };
                    return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, r) {
                    for (var o = null != r ? r : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = E(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) this.binaryReadMap1(o.guildAndChannels, e, n);
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var f = e.skip(l);
                            !1 !== c && (!0 === c ? i.UnknownFieldHandler.onRead : c)(this.typeName, o, s, l, f)
                        }
                    }
                    return o
                }
            }, {
                key: "binaryReadMap1",
                value: function(e, t, n) {
                    for (var r, o, i = t.uint32(), a = t.pos + i; t.pos < a;) {
                        var u = E(t.tag(), 2),
                            s = u[0];
                        switch (u[1], s) {
                            case 1:
                                r = t.fixed64().toString();
                                break;
                            case 2:
                                o = g.internalBinaryRead(t, t.uint32(), n);
                                break;
                            default:
                                throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels")
                        }
                    }
                    e[null != r ? r : "0"] = null != o ? o : g.create()
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.keys(e.guildAndChannels)[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            t.tag(1, i.WireType.LengthDelimited).fork().tag(1, i.WireType.Bit64).fixed64(l), t.tag(2, i.WireType.LengthDelimited).fork(), g.internalBinaryWrite(e.guildAndChannels[l], t, n), t.join().join()
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    var c = n.writeUnknownFields;
                    return !1 !== c && (!0 == c ? i.UnknownFieldHandler.onWrite : c)(this.typeName, e, t), t
                }
            }]), n
        }(i.MessageType))
}