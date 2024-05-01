function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationCommandFrecency: function() {
            return p
        },
        ApplicationFrecency: function() {
            return P
        },
        EmojiFrecency: function() {
            return m
        },
        FavoriteEmojis: function() {
            return h
        },
        FavoriteGIF: function() {
            return c
        },
        FavoriteGIFs: function() {
            return d
        },
        FavoriteSoundboardSounds: function() {
            return g
        },
        FavoriteStickers: function() {
            return I
        },
        FrecencyItem: function() {
            return R
        },
        FrecencyUserSettings: function() {
            return l
        },
        GIFType: function() {
            return i
        },
        GuildAndChannelFrecency: function() {
            return b
        },
        PlayedSoundFrecency: function() {
            return M
        },
        StickerFrecency: function() {
            return f
        }
    }), n("47120"), n("411104"), n("653041");
    var i, r, a = n("578012"),
        s = n("397696");
    (r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.IMAGE = 1] = "IMAGE", r[r.VIDEO = 2] = "VIDEO";
    class o extends a.MessageType {
        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                o = e.pos + t;
            for (; e.pos < o;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.versions = s.Versions.internalBinaryRead(e, e.uint32(), n, r.versions);
                        break;
                    case 2:
                        r.favoriteGifs = d.internalBinaryRead(e, e.uint32(), n, r.favoriteGifs);
                        break;
                    case 3:
                        r.favoriteStickers = I.internalBinaryRead(e, e.uint32(), n, r.favoriteStickers);
                        break;
                    case 4:
                        r.stickerFrecency = f.internalBinaryRead(e, e.uint32(), n, r.stickerFrecency);
                        break;
                    case 5:
                        r.favoriteEmojis = h.internalBinaryRead(e, e.uint32(), n, r.favoriteEmojis);
                        break;
                    case 6:
                        r.emojiFrecency = m.internalBinaryRead(e, e.uint32(), n, r.emojiFrecency);
                        break;
                    case 7:
                        r.applicationCommandFrecency = p.internalBinaryRead(e, e.uint32(), n, r.applicationCommandFrecency);
                        break;
                    case 8:
                        r.favoriteSoundboardSounds = g.internalBinaryRead(e, e.uint32(), n, r.favoriteSoundboardSounds);
                        break;
                    case 9:
                        r.applicationFrecency = P.internalBinaryRead(e, e.uint32(), n, r.applicationFrecency);
                        break;
                    case 10:
                        r.heardSoundFrecency = v.internalBinaryRead(e, e.uint32(), n, r.heardSoundFrecency);
                        break;
                    case 11:
                        r.playedSoundFrecency = M.internalBinaryRead(e, e.uint32(), n, r.playedSoundFrecency);
                        break;
                    case 12:
                        r.guildAndChannelFrecency = b.internalBinaryRead(e, e.uint32(), n, r.guildAndChannelFrecency);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let l = e.skip(i);
                        !1 !== o && (!0 === o ? a.UnknownFieldHandler.onRead : o)(this.typeName, r, t, i, l)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            e.versions && s.Versions.internalBinaryWrite(e.versions, t.tag(1, a.WireType.LengthDelimited).fork(), n).join(), e.favoriteGifs && d.internalBinaryWrite(e.favoriteGifs, t.tag(2, a.WireType.LengthDelimited).fork(), n).join(), e.favoriteStickers && I.internalBinaryWrite(e.favoriteStickers, t.tag(3, a.WireType.LengthDelimited).fork(), n).join(), e.stickerFrecency && f.internalBinaryWrite(e.stickerFrecency, t.tag(4, a.WireType.LengthDelimited).fork(), n).join(), e.favoriteEmojis && h.internalBinaryWrite(e.favoriteEmojis, t.tag(5, a.WireType.LengthDelimited).fork(), n).join(), e.emojiFrecency && m.internalBinaryWrite(e.emojiFrecency, t.tag(6, a.WireType.LengthDelimited).fork(), n).join(), e.applicationCommandFrecency && p.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, a.WireType.LengthDelimited).fork(), n).join(), e.favoriteSoundboardSounds && g.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, a.WireType.LengthDelimited).fork(), n).join(), e.applicationFrecency && P.internalBinaryWrite(e.applicationFrecency, t.tag(9, a.WireType.LengthDelimited).fork(), n).join(), e.heardSoundFrecency && v.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, a.WireType.LengthDelimited).fork(), n).join(), e.playedSoundFrecency && M.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, a.WireType.LengthDelimited).fork(), n).join(), e.guildAndChannelFrecency && b.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, a.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.FrecencyUserSettings", [{
                no: 1,
                name: "versions",
                kind: "message",
                T: () => s.Versions
            }, {
                no: 2,
                name: "favorite_gifs",
                kind: "message",
                T: () => d
            }, {
                no: 3,
                name: "favorite_stickers",
                kind: "message",
                T: () => I
            }, {
                no: 4,
                name: "sticker_frecency",
                kind: "message",
                T: () => f
            }, {
                no: 5,
                name: "favorite_emojis",
                kind: "message",
                T: () => h
            }, {
                no: 6,
                name: "emoji_frecency",
                kind: "message",
                T: () => m
            }, {
                no: 7,
                name: "application_command_frecency",
                kind: "message",
                T: () => p
            }, {
                no: 8,
                name: "favorite_soundboard_sounds",
                kind: "message",
                T: () => g
            }, {
                no: 9,
                name: "application_frecency",
                kind: "message",
                T: () => P
            }, {
                no: 10,
                name: "heard_sound_frecency",
                kind: "message",
                T: () => v
            }, {
                no: 11,
                name: "played_sound_frecency",
                kind: "message",
                T: () => M
            }, {
                no: 12,
                name: "guild_and_channel_frecency",
                kind: "message",
                T: () => b
            }])
        }
    }
    let l = new o;
    class u extends a.MessageType {
        create(e) {
            let t = {
                gifs: {},
                hideTooltip: !1
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        this.binaryReadMap1(r.gifs, e, n);
                        break;
                    case 2:
                        r.hideTooltip = e.bool();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let o = e.skip(i);
                        !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                a, s;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        a = t.string();
                        break;
                    case 2:
                        s = c.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs")
                }
            }
            e[null != a ? a : ""] = null != s ? s : c.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.gifs)) t.tag(1, a.WireType.LengthDelimited).fork().tag(1, a.WireType.LengthDelimited).string(i), t.tag(2, a.WireType.LengthDelimited).fork(), c.internalBinaryWrite(e.gifs[i], t, n), t.join().join();
            !1 !== e.hideTooltip && t.tag(2, a.WireType.Varint).bool(e.hideTooltip);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.FavoriteGIFs", [{
                no: 1,
                name: "gifs",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => c
                }
            }, {
                no: 2,
                name: "hide_tooltip",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let d = new u;
    class _ extends a.MessageType {
        create(e) {
            let t = {
                format: 0,
                src: "",
                width: 0,
                height: 0,
                order: 0
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.format = e.int32();
                        break;
                    case 2:
                        r.src = e.string();
                        break;
                    case 3:
                        r.width = e.uint32();
                        break;
                    case 4:
                        r.height = e.uint32();
                        break;
                    case 5:
                        r.order = e.uint32();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let o = e.skip(i);
                        !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.format && t.tag(1, a.WireType.Varint).int32(e.format), "" !== e.src && t.tag(2, a.WireType.LengthDelimited).string(e.src), 0 !== e.width && t.tag(3, a.WireType.Varint).uint32(e.width), 0 !== e.height && t.tag(4, a.WireType.Varint).uint32(e.height), 0 !== e.order && t.tag(5, a.WireType.Varint).uint32(e.order);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.FavoriteGIF", [{
                no: 1,
                name: "format",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GIFType", i]
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
    }
    let c = new _;
    class E extends a.MessageType {
        create(e) {
            let t = {
                stickerIds: []
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) {
                    if (i === a.WireType.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.stickerIds.push(e.fixed64().toString());
                    else r.stickerIds.push(e.fixed64().toString())
                } else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            if (e.stickerIds.length) {
                t.tag(1, a.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.stickerIds.length; n++) t.fixed64(e.stickerIds[n]);
                t.join()
            }
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.FavoriteStickers", [{
                no: 1,
                name: "sticker_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }])
        }
    }
    let I = new E;
    class T extends a.MessageType {
        create(e) {
            let t = {
                stickers: {}
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) this.binaryReadMap1(r.stickers, e, n);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                a, s;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        a = t.fixed64().toString();
                        break;
                    case 2:
                        s = R.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers")
                }
            }
            e[null != a ? a : "0"] = null != s ? s : R.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.stickers)) t.tag(1, a.WireType.LengthDelimited).fork().tag(1, a.WireType.Bit64).fixed64(i), t.tag(2, a.WireType.LengthDelimited).fork(), R.internalBinaryWrite(e.stickers[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.StickerFrecency", [{
                no: 1,
                name: "stickers",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => R
                }
            }])
        }
    }
    let f = new T;
    class S extends a.MessageType {
        create(e) {
            let t = {
                emojis: []
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) r.emojis.push(e.string());
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            for (let n = 0; n < e.emojis.length; n++) t.tag(1, a.WireType.LengthDelimited).string(e.emojis[n]);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.FavoriteEmojis", [{
                no: 1,
                name: "emojis",
                kind: "scalar",
                repeat: 2,
                T: 9
            }])
        }
    }
    let h = new S;
    class A extends a.MessageType {
        create(e) {
            let t = {
                emojis: {}
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) this.binaryReadMap1(r.emojis, e, n);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                a, s;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        a = t.string();
                        break;
                    case 2:
                        s = R.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis")
                }
            }
            e[null != a ? a : ""] = null != s ? s : R.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.emojis)) t.tag(1, a.WireType.LengthDelimited).fork().tag(1, a.WireType.LengthDelimited).string(i), t.tag(2, a.WireType.LengthDelimited).fork(), R.internalBinaryWrite(e.emojis[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.EmojiFrecency", [{
                no: 1,
                name: "emojis",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => R
                }
            }])
        }
    }
    let m = new A;
    class N extends a.MessageType {
        create(e) {
            let t = {
                applicationCommands: {}
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) this.binaryReadMap1(r.applicationCommands, e, n);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                a, s;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        a = t.string();
                        break;
                    case 2:
                        s = R.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands")
                }
            }
            e[null != a ? a : ""] = null != s ? s : R.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.applicationCommands)) t.tag(1, a.WireType.LengthDelimited).fork().tag(1, a.WireType.LengthDelimited).string(i), t.tag(2, a.WireType.LengthDelimited).fork(), R.internalBinaryWrite(e.applicationCommands[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.ApplicationCommandFrecency", [{
                no: 1,
                name: "application_commands",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => R
                }
            }])
        }
    }
    let p = new N;
    class O extends a.MessageType {
        create(e) {
            let t = {
                totalUses: 0,
                recentUses: [],
                frecency: 0,
                score: 0
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.totalUses = e.uint32();
                        break;
                    case 2:
                        if (i === a.WireType.LengthDelimited)
                            for (let t = e.int32() + e.pos; e.pos < t;) r.recentUses.push(e.uint64().toString());
                        else r.recentUses.push(e.uint64().toString());
                        break;
                    case 3:
                        r.frecency = e.int32();
                        break;
                    case 4:
                        r.score = e.int32();
                        break;
                    default:
                        let s = n.readUnknownField;
                        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let o = e.skip(i);
                        !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            if (0 !== e.totalUses && t.tag(1, a.WireType.Varint).uint32(e.totalUses), e.recentUses.length) {
                t.tag(2, a.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.recentUses.length; n++) t.uint64(e.recentUses[n]);
                t.join()
            }
            0 !== e.frecency && t.tag(3, a.WireType.Varint).int32(e.frecency), 0 !== e.score && t.tag(4, a.WireType.Varint).int32(e.score);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.FrecencyItem", [{
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
    }
    let R = new O;
    class C extends a.MessageType {
        create(e) {
            let t = {
                soundIds: []
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) {
                    if (i === a.WireType.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.soundIds.push(e.fixed64().toString());
                    else r.soundIds.push(e.fixed64().toString())
                } else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            if (e.soundIds.length) {
                t.tag(1, a.WireType.LengthDelimited).fork();
                for (let n = 0; n < e.soundIds.length; n++) t.fixed64(e.soundIds[n]);
                t.join()
            }
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.FavoriteSoundboardSounds", [{
                no: 1,
                name: "sound_ids",
                kind: "scalar",
                repeat: 1,
                T: 6
            }])
        }
    }
    let g = new C;
    class L extends a.MessageType {
        create(e) {
            let t = {
                heardSounds: {}
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) this.binaryReadMap1(r.heardSounds, e, n);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                a, s;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        a = t.string();
                        break;
                    case 2:
                        s = R.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds")
                }
            }
            e[null != a ? a : ""] = null != s ? s : R.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.heardSounds)) t.tag(1, a.WireType.LengthDelimited).fork().tag(1, a.WireType.LengthDelimited).string(i), t.tag(2, a.WireType.LengthDelimited).fork(), R.internalBinaryWrite(e.heardSounds[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.HeardSoundFrecency", [{
                no: 1,
                name: "heard_sounds",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => R
                }
            }])
        }
    }
    let v = new L;
    class D extends a.MessageType {
        create(e) {
            let t = {
                playedSounds: {}
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) this.binaryReadMap1(r.playedSounds, e, n);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                a, s;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        a = t.string();
                        break;
                    case 2:
                        s = R.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds")
                }
            }
            e[null != a ? a : ""] = null != s ? s : R.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.playedSounds)) t.tag(1, a.WireType.LengthDelimited).fork().tag(1, a.WireType.LengthDelimited).string(i), t.tag(2, a.WireType.LengthDelimited).fork(), R.internalBinaryWrite(e.playedSounds[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.PlayedSoundFrecency", [{
                no: 1,
                name: "played_sounds",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => R
                }
            }])
        }
    }
    let M = new D;
    class y extends a.MessageType {
        create(e) {
            let t = {
                applications: {}
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) this.binaryReadMap1(r.applications, e, n);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                a, s;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        a = t.string();
                        break;
                    case 2:
                        s = R.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications")
                }
            }
            e[null != a ? a : ""] = null != s ? s : R.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.applications)) t.tag(1, a.WireType.LengthDelimited).fork().tag(1, a.WireType.LengthDelimited).string(i), t.tag(2, a.WireType.LengthDelimited).fork(), R.internalBinaryWrite(e.applications[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.ApplicationFrecency", [{
                no: 1,
                name: "applications",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => R
                }
            }])
        }
    }
    let P = new y;
    class U extends a.MessageType {
        create(e) {
            let t = {
                guildAndChannels: {}
            };
            return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                s = e.pos + t;
            for (; e.pos < s;) {
                let [t, i] = e.tag();
                if (1 === t) this.binaryReadMap1(r.guildAndChannels, e, n);
                else {
                    let s = n.readUnknownField;
                    if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? a.UnknownFieldHandler.onRead : s)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                a, s;
            for (; t.pos < r;) {
                let [e, i] = t.tag();
                switch (e) {
                    case 1:
                        a = t.fixed64().toString();
                        break;
                    case 2:
                        s = R.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels")
                }
            }
            e[null != a ? a : "0"] = null != s ? s : R.create()
        }
        internalBinaryWrite(e, t, n) {
            for (let i of Object.keys(e.guildAndChannels)) t.tag(1, a.WireType.LengthDelimited).fork().tag(1, a.WireType.Bit64).fixed64(i), t.tag(2, a.WireType.LengthDelimited).fork(), R.internalBinaryWrite(e.guildAndChannels[i], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? a.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.GuildAndChannelFrecency", [{
                no: 1,
                name: "guild_and_channels",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => R
                }
            }])
        }
    }
    let b = new U
}