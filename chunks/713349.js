function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        GIFType: function() {
            return t
        },
        FrecencyUserSettings: function() {
            return a
        },
        FavoriteGIFs: function() {
            return s
        },
        FavoriteGIF: function() {
            return S
        },
        FavoriteStickers: function() {
            return O
        },
        StickerFrecency: function() {
            return R
        },
        FavoriteEmojis: function() {
            return u
        },
        EmojiFrecency: function() {
            return C
        },
        ApplicationCommandFrecency: function() {
            return c
        },
        FrecencyItem: function() {
            return U
        },
        FavoriteSoundboardSounds: function() {
            return h
        },
        PlayedSoundFrecency: function() {
            return p
        },
        ApplicationFrecency: function() {
            return y
        },
        GuildAndChannelFrecency: function() {
            return f
        }
    }), E("222007"), E("70102"), E("424973");
    var t, o, n = E("849266"),
        r = E("959714");
    (o = t || (t = {}))[o.NONE = 0] = "NONE", o[o.IMAGE = 1] = "IMAGE", o[o.VIDEO = 2] = "VIDEO";
    class i extends n.MessageType {
        create(e) {
            let _ = {};
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                i = e.pos + _;
            for (; e.pos < i;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.versions = r.Versions.internalBinaryRead(e, e.uint32(), E, o.versions);
                        break;
                    case 2:
                        o.favoriteGifs = s.internalBinaryRead(e, e.uint32(), E, o.favoriteGifs);
                        break;
                    case 3:
                        o.favoriteStickers = O.internalBinaryRead(e, e.uint32(), E, o.favoriteStickers);
                        break;
                    case 4:
                        o.stickerFrecency = R.internalBinaryRead(e, e.uint32(), E, o.stickerFrecency);
                        break;
                    case 5:
                        o.favoriteEmojis = u.internalBinaryRead(e, e.uint32(), E, o.favoriteEmojis);
                        break;
                    case 6:
                        o.emojiFrecency = C.internalBinaryRead(e, e.uint32(), E, o.emojiFrecency);
                        break;
                    case 7:
                        o.applicationCommandFrecency = c.internalBinaryRead(e, e.uint32(), E, o.applicationCommandFrecency);
                        break;
                    case 8:
                        o.favoriteSoundboardSounds = h.internalBinaryRead(e, e.uint32(), E, o.favoriteSoundboardSounds);
                        break;
                    case 9:
                        o.applicationFrecency = y.internalBinaryRead(e, e.uint32(), E, o.applicationFrecency);
                        break;
                    case 10:
                        o.heardSoundFrecency = m.internalBinaryRead(e, e.uint32(), E, o.heardSoundFrecency);
                        break;
                    case 11:
                        o.playedSoundFrecency = p.internalBinaryRead(e, e.uint32(), E, o.playedSoundFrecency);
                        break;
                    case 12:
                        o.guildAndChannelFrecency = f.internalBinaryRead(e, e.uint32(), E, o.guildAndChannelFrecency);
                        break;
                    default:
                        let i = E.readUnknownField;
                        if ("throw" === i) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let a = e.skip(t);
                        !1 !== i && (!0 === i ? n.UnknownFieldHandler.onRead : i)(this.typeName, o, _, t, a)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            e.versions && r.Versions.internalBinaryWrite(e.versions, _.tag(1, n.WireType.LengthDelimited).fork(), E).join(), e.favoriteGifs && s.internalBinaryWrite(e.favoriteGifs, _.tag(2, n.WireType.LengthDelimited).fork(), E).join(), e.favoriteStickers && O.internalBinaryWrite(e.favoriteStickers, _.tag(3, n.WireType.LengthDelimited).fork(), E).join(), e.stickerFrecency && R.internalBinaryWrite(e.stickerFrecency, _.tag(4, n.WireType.LengthDelimited).fork(), E).join(), e.favoriteEmojis && u.internalBinaryWrite(e.favoriteEmojis, _.tag(5, n.WireType.LengthDelimited).fork(), E).join(), e.emojiFrecency && C.internalBinaryWrite(e.emojiFrecency, _.tag(6, n.WireType.LengthDelimited).fork(), E).join(), e.applicationCommandFrecency && c.internalBinaryWrite(e.applicationCommandFrecency, _.tag(7, n.WireType.LengthDelimited).fork(), E).join(), e.favoriteSoundboardSounds && h.internalBinaryWrite(e.favoriteSoundboardSounds, _.tag(8, n.WireType.LengthDelimited).fork(), E).join(), e.applicationFrecency && y.internalBinaryWrite(e.applicationFrecency, _.tag(9, n.WireType.LengthDelimited).fork(), E).join(), e.heardSoundFrecency && m.internalBinaryWrite(e.heardSoundFrecency, _.tag(10, n.WireType.LengthDelimited).fork(), E).join(), e.playedSoundFrecency && p.internalBinaryWrite(e.playedSoundFrecency, _.tag(11, n.WireType.LengthDelimited).fork(), E).join(), e.guildAndChannelFrecency && f.internalBinaryWrite(e.guildAndChannelFrecency, _.tag(12, n.WireType.LengthDelimited).fork(), E).join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.FrecencyUserSettings", [{
                no: 1,
                name: "versions",
                kind: "message",
                T: () => r.Versions
            }, {
                no: 2,
                name: "favorite_gifs",
                kind: "message",
                T: () => s
            }, {
                no: 3,
                name: "favorite_stickers",
                kind: "message",
                T: () => O
            }, {
                no: 4,
                name: "sticker_frecency",
                kind: "message",
                T: () => R
            }, {
                no: 5,
                name: "favorite_emojis",
                kind: "message",
                T: () => u
            }, {
                no: 6,
                name: "emoji_frecency",
                kind: "message",
                T: () => C
            }, {
                no: 7,
                name: "application_command_frecency",
                kind: "message",
                T: () => c
            }, {
                no: 8,
                name: "favorite_soundboard_sounds",
                kind: "message",
                T: () => h
            }, {
                no: 9,
                name: "application_frecency",
                kind: "message",
                T: () => y
            }, {
                no: 10,
                name: "heard_sound_frecency",
                kind: "message",
                T: () => m
            }, {
                no: 11,
                name: "played_sound_frecency",
                kind: "message",
                T: () => p
            }, {
                no: 12,
                name: "guild_and_channel_frecency",
                kind: "message",
                T: () => f
            }])
        }
    }
    let a = new i;
    class I extends n.MessageType {
        create(e) {
            let _ = {
                gifs: {},
                hideTooltip: !1
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        this.binaryReadMap1(o.gifs, e, E);
                        break;
                    case 2:
                        o.hideTooltip = e.bool();
                        break;
                    default:
                        let r = E.readUnknownField;
                        if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let i = e.skip(t);
                        !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.string();
                        break;
                    case 2:
                        r = S.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs")
                }
            }
            e[null != n ? n : ""] = null != r ? r : S.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.gifs)) _.tag(1, n.WireType.LengthDelimited).fork().tag(1, n.WireType.LengthDelimited).string(t), _.tag(2, n.WireType.LengthDelimited).fork(), S.internalBinaryWrite(e.gifs[t], _, E), _.join().join();
            !1 !== e.hideTooltip && _.tag(2, n.WireType.Varint).bool(e.hideTooltip);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.FavoriteGIFs", [{
                no: 1,
                name: "gifs",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => S
                }
            }, {
                no: 2,
                name: "hide_tooltip",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let s = new I;
    class T extends n.MessageType {
        create(e) {
            let _ = {
                format: 0,
                src: "",
                width: 0,
                height: 0,
                order: 0
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                switch (_) {
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
                        let r = E.readUnknownField;
                        if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let i = e.skip(t);
                        !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.format && _.tag(1, n.WireType.Varint).int32(e.format), "" !== e.src && _.tag(2, n.WireType.LengthDelimited).string(e.src), 0 !== e.width && _.tag(3, n.WireType.Varint).uint32(e.width), 0 !== e.height && _.tag(4, n.WireType.Varint).uint32(e.height), 0 !== e.order && _.tag(5, n.WireType.Varint).uint32(e.order);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.FavoriteGIF", [{
                no: 1,
                name: "format",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GIFType", t]
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
    let S = new T;
    class N extends n.MessageType {
        create(e) {
            let _ = {
                stickerIds: []
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) {
                    if (t === n.WireType.LengthDelimited)
                        for (let _ = e.int32() + e.pos; e.pos < _;) o.stickerIds.push(e.fixed64().toString());
                    else o.stickerIds.push(e.fixed64().toString())
                } else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            if (e.stickerIds.length) {
                _.tag(1, n.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.stickerIds.length; E++) _.fixed64(e.stickerIds[E]);
                _.join()
            }
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let O = new N;
    class A extends n.MessageType {
        create(e) {
            let _ = {
                stickers: {}
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) this.binaryReadMap1(o.stickers, e, E);
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.fixed64().toString();
                        break;
                    case 2:
                        r = U.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers")
                }
            }
            e[null != n ? n : "0"] = null != r ? r : U.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.stickers)) _.tag(1, n.WireType.LengthDelimited).fork().tag(1, n.WireType.Bit64).fixed64(t), _.tag(2, n.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.stickers[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.StickerFrecency", [{
                no: 1,
                name: "stickers",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => U
                }
            }])
        }
    }
    let R = new A;
    class l extends n.MessageType {
        create(e) {
            let _ = {
                emojis: []
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) o.emojis.push(e.string());
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            for (let E = 0; E < e.emojis.length; E++) _.tag(1, n.WireType.LengthDelimited).string(e.emojis[E]);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let u = new l;
    class L extends n.MessageType {
        create(e) {
            let _ = {
                emojis: {}
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) this.binaryReadMap1(o.emojis, e, E);
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.string();
                        break;
                    case 2:
                        r = U.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis")
                }
            }
            e[null != n ? n : ""] = null != r ? r : U.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.emojis)) _.tag(1, n.WireType.LengthDelimited).fork().tag(1, n.WireType.LengthDelimited).string(t), _.tag(2, n.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.emojis[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.EmojiFrecency", [{
                no: 1,
                name: "emojis",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => U
                }
            }])
        }
    }
    let C = new L;
    class D extends n.MessageType {
        create(e) {
            let _ = {
                applicationCommands: {}
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) this.binaryReadMap1(o.applicationCommands, e, E);
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.string();
                        break;
                    case 2:
                        r = U.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands")
                }
            }
            e[null != n ? n : ""] = null != r ? r : U.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.applicationCommands)) _.tag(1, n.WireType.LengthDelimited).fork().tag(1, n.WireType.LengthDelimited).string(t), _.tag(2, n.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.applicationCommands[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.ApplicationCommandFrecency", [{
                no: 1,
                name: "application_commands",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => U
                }
            }])
        }
    }
    let c = new D;
    class d extends n.MessageType {
        create(e) {
            let _ = {
                totalUses: 0,
                recentUses: [],
                frecency: 0,
                score: 0
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                switch (_) {
                    case 1:
                        o.totalUses = e.uint32();
                        break;
                    case 2:
                        if (t === n.WireType.LengthDelimited)
                            for (let _ = e.int32() + e.pos; e.pos < _;) o.recentUses.push(e.uint64().toString());
                        else o.recentUses.push(e.uint64().toString());
                        break;
                    case 3:
                        o.frecency = e.int32();
                        break;
                    case 4:
                        o.score = e.int32();
                        break;
                    default:
                        let r = E.readUnknownField;
                        if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                        let i = e.skip(t);
                        !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            if (0 !== e.totalUses && _.tag(1, n.WireType.Varint).uint32(e.totalUses), e.recentUses.length) {
                _.tag(2, n.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.recentUses.length; E++) _.uint64(e.recentUses[E]);
                _.join()
            }
            0 !== e.frecency && _.tag(3, n.WireType.Varint).int32(e.frecency), 0 !== e.score && _.tag(4, n.WireType.Varint).int32(e.score);
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let U = new d;
    class M extends n.MessageType {
        create(e) {
            let _ = {
                soundIds: []
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) {
                    if (t === n.WireType.LengthDelimited)
                        for (let _ = e.int32() + e.pos; e.pos < _;) o.soundIds.push(e.fixed64().toString());
                    else o.soundIds.push(e.fixed64().toString())
                } else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        internalBinaryWrite(e, _, E) {
            if (e.soundIds.length) {
                _.tag(1, n.WireType.LengthDelimited).fork();
                for (let E = 0; E < e.soundIds.length; E++) _.fixed64(e.soundIds[E]);
                _.join()
            }
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
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
    let h = new M;
    class P extends n.MessageType {
        create(e) {
            let _ = {
                heardSounds: {}
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) this.binaryReadMap1(o.heardSounds, e, E);
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.string();
                        break;
                    case 2:
                        r = U.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds")
                }
            }
            e[null != n ? n : ""] = null != r ? r : U.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.heardSounds)) _.tag(1, n.WireType.LengthDelimited).fork().tag(1, n.WireType.LengthDelimited).string(t), _.tag(2, n.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.heardSounds[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.HeardSoundFrecency", [{
                no: 1,
                name: "heard_sounds",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => U
                }
            }])
        }
    }
    let m = new P;
    class G extends n.MessageType {
        create(e) {
            let _ = {
                playedSounds: {}
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) this.binaryReadMap1(o.playedSounds, e, E);
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.string();
                        break;
                    case 2:
                        r = U.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds")
                }
            }
            e[null != n ? n : ""] = null != r ? r : U.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.playedSounds)) _.tag(1, n.WireType.LengthDelimited).fork().tag(1, n.WireType.LengthDelimited).string(t), _.tag(2, n.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.playedSounds[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.PlayedSoundFrecency", [{
                no: 1,
                name: "played_sounds",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => U
                }
            }])
        }
    }
    let p = new G;
    class g extends n.MessageType {
        create(e) {
            let _ = {
                applications: {}
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) this.binaryReadMap1(o.applications, e, E);
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.string();
                        break;
                    case 2:
                        r = U.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications")
                }
            }
            e[null != n ? n : ""] = null != r ? r : U.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.applications)) _.tag(1, n.WireType.LengthDelimited).fork().tag(1, n.WireType.LengthDelimited).string(t), _.tag(2, n.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.applications[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.ApplicationFrecency", [{
                no: 1,
                name: "applications",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: () => U
                }
            }])
        }
    }
    let y = new g;
    class B extends n.MessageType {
        create(e) {
            let _ = {
                guildAndChannels: {}
            };
            return globalThis.Object.defineProperty(_, n.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, n.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, t) {
            let o = null != t ? t : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, t] = e.tag();
                if (1 === _) this.binaryReadMap1(o.guildAndChannels, e, E);
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(t, ") for ").concat(this.typeName));
                    let i = e.skip(t);
                    !1 !== r && (!0 === r ? n.UnknownFieldHandler.onRead : r)(this.typeName, o, _, t, i)
                }
            }
            return o
        }
        binaryReadMap1(e, _, E) {
            let t = _.uint32(),
                o = _.pos + t,
                n, r;
            for (; _.pos < o;) {
                let [e, t] = _.tag();
                switch (e) {
                    case 1:
                        n = _.fixed64().toString();
                        break;
                    case 2:
                        r = U.internalBinaryRead(_, _.uint32(), E);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels")
                }
            }
            e[null != n ? n : "0"] = null != r ? r : U.create()
        }
        internalBinaryWrite(e, _, E) {
            for (let t of Object.keys(e.guildAndChannels)) _.tag(1, n.WireType.LengthDelimited).fork().tag(1, n.WireType.Bit64).fixed64(t), _.tag(2, n.WireType.LengthDelimited).fork(), U.internalBinaryWrite(e.guildAndChannels[t], _, E), _.join().join();
            let t = E.writeUnknownFields;
            return !1 !== t && (!0 == t ? n.UnknownFieldHandler.onWrite : t)(this.typeName, e, _), _
        }
        constructor() {
            super("discord_protos.discord_users.v1.GuildAndChannelFrecency", [{
                no: 1,
                name: "guild_and_channels",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => U
                }
            }])
        }
    }
    let f = new B
}