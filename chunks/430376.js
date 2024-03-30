function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReactionToActivity: function() {
            return v
        },
        sendReplyToActivity: function() {
            return g
        }
    });
    var r, o, i, a = n("386823"),
        u = n("889083"),
        s = n("157941"),
        l = n("121669"),
        c = n("406785"),
        f = n("23088"),
        d = n("739226"),
        _ = n("911193"),
        E = n("619584"),
        p = n("752879"),
        m = n("281767"),
        y = n("941504");

    function I(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function h(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    I(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    I(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function S(e, t) {
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
    var v = (r = h(function(e) {
        var t, n, r, o;
        return S(this, function(i) {
            switch (i.label) {
                case 0:
                    return t = e.reaction, n = e.altText, [4, b(r = T(e, ["reaction", "altText"]))];
                case 1:
                    return o = i.sent(), (0, _.sendReaction)({
                        file: o,
                        altText: n,
                        user: r.user,
                        reaction: t
                    }), [2]
            }
        })
    }), function(e) {
        return r.apply(this, arguments)
    });
    var g = (o = h(function(e) {
            var t, n, r, o;
            return S(this, function(i) {
                switch (i.label) {
                    case 0:
                        return t = e.reply, n = e.altText, [4, b(r = T(e, ["reply", "altText"]))];
                    case 1:
                        return o = i.sent(), (0, _.sendReply)({
                            file: o,
                            altText: n,
                            user: r.user,
                            reply: t
                        }), [2]
                }
            })
        }), function(e) {
            return o.apply(this, arguments)
        }),
        A = function(e) {
            var t, r = e.activity,
                o = e.application,
                i = e.user,
                a = "dark" === (0, p.getProfileInfo)(i, "black").theme,
                u = (0, p.getActivityPlatform)(r),
                s = r.assets,
                l = r.application_id,
                c = (0, f.getAssetImage)(l, null == s ? void 0 : s.large_image, 64),
                _ = null == o ? void 0 : o.getIconURL(64),
                E = null != u ? a ? u.icon.darkPNG : u.icon.lightPNG : r.type === m.ActivityTypes.PLAYING ? a ? n("414575") : n("807612") : null,
                y = r.type === m.ActivityTypes.HANG_STATUS && (null === (t = r.emoji) || void 0 === t ? void 0 : t.id) != null ? (0, d.getEmojiUrl)({
                    id: r.emoji.id,
                    name: r.emoji.name,
                    animated: !1
                }) : null;
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        O(e, t, n[t])
                    })
                }
                return e
            }({}, null != E && O({}, "Platform", E), null != c && O({}, "AssetImage", c.includes("http") ? c : require(c)), null != _ && O({}, "ApplicationImage", _), null != y && O({}, "HangStatus", y))
        };
    var b = (i = h(function(e) {
            var t, n, r, o, i, f;
            return S(this, function(d) {
                switch (d.label) {
                    case 0:
                        return t = e.user, n = e.activity, r = e.application, o = e.stream, i = A({
                            activity: n,
                            application: r,
                            user: t
                        }), f = function(e) {
                            var r;
                            e.setFont({
                                truncate: l.TextTruncationMethod.Truncate
                            }), null != o ? L(e, n, t) : (0, s.default)(n) ? C(e, n, t) : (0, u.default)(n) && n.name === a.default.get(m.PlatformTypes.LEAGUE_OF_LEGENDS).name ? D(e, n, t) : n.type === m.ActivityTypes.HANG_STATUS ? P(e, n, t) : R(e, n, t), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("Platform")) && e.drawImage("Platform", {
                                x: E.canvasWidth - E.padding - E.platformSize,
                                y: E.padding
                            }, {
                                w: E.platformSize,
                                h: E.platformSize
                            })
                        }, [4, (0, c.generateImageFromCanvas)({
                            assetsToLoad: i,
                            drawImage: f,
                            exportConfigs: {
                                format: l.DiscordCanvasExporterOutputFormats.File,
                                quality: 1,
                                fileName: "user-reacting-to-".concat(n.name, ".png").toLowerCase(),
                                fileType: "png"
                            }
                        })];
                    case 1:
                        return [2, d.sent()]
                }
            })
        }), function(e) {
            return i.apply(this, arguments)
        }),
        N = function(e, t) {
            e.setColor("dark" === t ? "white" : "black"), e.drawPath(E.ACTIVITY_IMAGE_FALLBACK_PATH, {
                x: E.padding,
                y: E.padding
            }, !0, 2 + 2 / 3)
        },
        R = function(e, t, n) {
            e.setSize({
                w: E.canvasWidth,
                h: E.canvasHeight
            });
            var r, o, i, a = (0, p.getProfileInfo)(n, "black"),
                u = a.color,
                s = a.theme;
            e.setColor(u), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), e.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
                x: E.padding,
                y: E.padding
            }, {
                w: E.activitySize,
                h: E.activitySize
            }, 8) : (null === (o = e.assetMap) || void 0 === o ? void 0 : o.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
                x: E.padding,
                y: E.padding
            }, {
                w: E.activitySize,
                h: E.activitySize
            }, 8) : N(e, s);
            var l = E.activitySize + E.padding + E.imagePadding;
            e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), e.setFont({
                size: 16,
                family: '"gg sans", sans-serif',
                weight: 700
            }), e.drawText("".concat(t.name), {
                x: l,
                y: E.fontPadding + 1 * E.lineHeight,
                w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has(E.AssetTypes.Platform)) ? E.titleMaxWidthPlatform : E.titleMaxWidthNoPlatform
            }, !0), null != t.timestamps && (e.setFont({
                size: 14,
                weight: 400
            }), e.drawText("for ".concat((0, p.howLong)(t.timestamps)), {
                x: l,
                y: E.fontPadding + 2 * E.lineHeight
            }, !0))
        },
        C = function(e, t, n) {
            e.setSize({
                w: E.canvasWidth,
                h: E.canvasHeight
            });
            var r, o, i = (0, p.getProfileInfo)(n, "black"),
                a = i.color,
                u = i.theme;
            e.setColor(a), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), e.setColor("dark" === u ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("AssetImage")) && e.drawRoundedImage("AssetImage", {
                x: E.padding,
                y: E.padding
            }, {
                w: E.activitySize,
                h: E.activitySize
            }, 8);
            var s = E.activitySize + E.padding + E.imagePadding;
            e.setColor("dark" === u ? "white" : "rgb(6, 6, 7)"), e.setFont({
                size: 14,
                family: '"gg sans", sans-serif',
                weight: 700
            }), e.drawText("".concat(t.details), {
                x: s,
                y: E.fontPadding + 1 * E.lineHeight,
                w: (null === (o = e.assetMap) || void 0 === o ? void 0 : o.has(E.AssetTypes.Platform)) ? E.titleMaxWidthPlatform : E.titleMaxWidthNoPlatform
            }, !0), e.setFont({
                size: 14,
                weight: 400
            }), e.drawText("by ".concat(t.state), {
                x: s,
                y: E.fontPadding + 2 * E.lineHeight
            }, !0)
        },
        P = function(e, t, r) {
            e.setSize({
                w: E.canvasWidth,
                h: E.canvasHeight
            });
            var o, i, a = (0, p.getProfileInfo)(r, "black"),
                u = a.color,
                s = a.theme;
            e.setColor(u), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), e.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), (null === (o = e.assetMap) || void 0 === o ? void 0 : o.has("HangStatus")) ? e.drawRoundedImage("HangStatus", {
                x: E.padding,
                y: E.padding
            }, {
                w: E.activitySize,
                h: E.activitySize
            }, 8) : N(e, s);
            var l = E.activitySize + E.padding + E.imagePadding;
            e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), e.setFont({
                size: 14,
                family: '"gg sans", sans-serif',
                weight: 700
            }), e.drawText(y.default.Messages.STATUS_LEAD_IN_JUST, {
                x: l,
                y: E.fontPadding + 1 * E.lineHeight,
                w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has(E.AssetTypes.Platform)) ? E.titleMaxWidthPlatform : E.titleMaxWidthNoPlatform
            }, !0), e.setFont({
                size: 14,
                weight: 400
            });
            var c = "";
            c = (0, n("663882").getHangStatusText)(t), e.drawText(c, {
                x: l,
                y: E.fontPadding + 2 * E.lineHeight
            }, !0)
        },
        D = function(e, t, n) {
            e.setSize({
                w: E.canvasWidth,
                h: E.canvasHeight
            });
            var r, o = (0, p.getProfileInfo)(n, "black"),
                i = o.color,
                a = o.theme;
            e.setColor(i), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), e.setColor("dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), e.setColor("dark" === a ? "white" : "black"), e.drawRoundedImage("AssetImage", {
                x: E.padding,
                y: E.padding
            }, {
                w: E.activitySize,
                h: E.activitySize
            }, 8) === l.DrawResultStatus.Failure && e.drawPath(E.ACTIVITY_IMAGE_FALLBACK_PATH, {
                x: E.padding,
                y: E.padding
            }, !0, 2 + 2 / 3);
            var u = E.activitySize + E.padding + E.imagePadding;
            e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"), e.setFont({
                size: 14,
                family: '"gg sans", sans-serif',
                weight: 700
            }), e.drawText("".concat(t.details), {
                x: u,
                y: E.fontPadding + 1 * E.lineHeight,
                w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("Platform")) ? E.titleMaxWidthPlatform : E.titleMaxWidthNoPlatform
            }, !0), e.setFont({
                size: 14,
                weight: 400
            }), e.drawText("".concat(t.state), {
                x: u,
                y: E.fontPadding + 2 * E.lineHeight
            }, !0)
        },
        L = function(e, t, n) {
            e.setSize({
                w: E.canvasWidth,
                h: E.canvasHeight
            });
            var r, o, i, a = (0, p.getProfileInfo)(n, "black"),
                u = a.color,
                s = a.theme;
            e.setColor(u), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), e.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
                x: 0,
                y: 0,
                h: E.canvasHeight,
                w: E.canvasWidth
            }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
                x: E.padding,
                y: E.padding
            }, {
                w: E.activitySize,
                h: E.activitySize
            }, 8) : (null === (o = e.assetMap) || void 0 === o ? void 0 : o.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
                x: E.padding,
                y: E.padding
            }, {
                w: E.activitySize,
                h: E.activitySize
            }, 8) : N(e, s);
            var l = E.activitySize + E.padding + E.imagePadding;
            e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), e.setFont({
                size: 16,
                family: '"gg sans", sans-serif',
                weight: 700
            }), e.drawText("Streaming ".concat(t.name), {
                x: l,
                y: E.fontPadding + E.lineHeight * (null != t.timestamps ? 1 : 1.5),
                w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has(E.AssetTypes.Platform)) ? E.titleMaxWidthPlatform : E.titleMaxWidthNoPlatform
            }, !0), null != t.timestamps && (e.setFont({
                size: 14,
                weight: 500
            }), e.drawText("for ".concat((0, p.howLong)(t.timestamps)), {
                x: l,
                y: E.fontPadding + 2 * E.lineHeight
            }, !0))
        }
}