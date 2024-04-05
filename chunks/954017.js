function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReactionToActivity: function() {
            return f
        },
        sendReplyToActivity: function() {
            return S
        }
    });
    var i = n("493683"),
        r = n("726542"),
        s = n("122810"),
        a = n("503438"),
        o = n("693824"),
        l = n("690725"),
        u = n("81063"),
        d = n("176354"),
        _ = n("201133"),
        c = n("55000"),
        E = n("314091"),
        I = n("981631"),
        T = n("689938");
    let f = async e => {
        let {
            reaction: t,
            altText: n,
            ...i
        } = e, r = await h(i);
        (0, _.sendReaction)({
            file: r,
            altText: n,
            user: i.user,
            reaction: t
        })
    }, S = async e => {
        let {
            reply: t,
            altText: n,
            ...i
        } = e, r = await h(i);
        (0, _.sendReply)({
            file: r,
            altText: n,
            user: i.user,
            reply: t
        })
    }, A = e => {
        var t;
        let {
            activity: i,
            application: r,
            user: s
        } = e, {
            theme: a
        } = (0, E.getProfileInfo)(s, "black"), o = "dark" === a, l = (0, E.getActivityPlatform)(i), {
            assets: _,
            application_id: c
        } = i, T = (0, u.getAssetImage)(c, null == _ ? void 0 : _.large_image, 64), f = null == r ? void 0 : r.getIconURL(64), S = null != l ? o ? l.icon.darkPNG : l.icon.lightPNG : i.type === I.ActivityTypes.PLAYING ? o ? n("414575") : n("807612") : null, A = i.type === I.ActivityTypes.HANG_STATUS && (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null ? (0, d.getEmojiUrl)({
            id: i.emoji.id,
            name: i.emoji.name,
            animated: !1
        }) : null;
        return {
            ...null != S && {
                Platform: S
            },
            ...null != T && {
                AssetImage: T.includes("http") ? T : require(T)
            },
            ...null != f && {
                ApplicationImage: f
            },
            ...null != A && {
                HangStatus: A
            }
        }
    }, h = async e => {
        let {
            user: t,
            activity: n,
            application: u,
            stream: d
        } = e, _ = await i.default.openPrivateChannel(t.id, !1, !1), E = A({
            activity: n,
            application: u,
            user: t
        });
        return await (0, l.generateImageFromCanvas)({
            assetsToLoad: E,
            drawImage: e => {
                var i;
                e.setFont({
                    truncate: o.TextTruncationMethod.Truncate
                }), null != d ? C(e, n, t) : (0, a.default)(n) ? O(e, n, t) : (0, s.default)(n) && n.name === r.default.get(I.PlatformTypes.LEAGUE_OF_LEGENDS).name ? R(e, n, t) : n.type === I.ActivityTypes.HANG_STATUS ? p(e, n, t) : N(e, n, t), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("Platform")) && e.drawImage("Platform", {
                    x: c.canvasWidth - c.padding - c.platformSize,
                    y: c.padding
                }, {
                    w: c.platformSize,
                    h: c.platformSize
                })
            },
            exportConfigs: {
                format: o.DiscordCanvasExporterOutputFormats.CloudUpload,
                quality: 1,
                fileName: "user-reacting-to-".concat(n.name, ".png").toLowerCase(),
                fileType: "png",
                channelId: _
            }
        })
    }, m = (e, t) => {
        e.setColor("dark" === t ? "white" : "black"), e.drawPath(c.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: c.padding,
            y: c.padding
        }, !0, 2 + 2 / 3)
    }, N = (e, t, n) => {
        var i, r, s;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: a,
            theme: o
        } = (0, E.getProfileInfo)(n, "black");
        e.setColor(a), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) : (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) : m(e, o);
        let l = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 16,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.name), {
            x: l,
            y: c.fontPadding + 1 * c.lineHeight,
            w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(c.AssetTypes.Platform)) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), null != t.timestamps && (e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("for ".concat((0, E.howLong)(t.timestamps)), {
            x: l,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0))
    }, O = (e, t, n) => {
        var i, r;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: s,
            theme: a
        } = (0, E.getProfileInfo)(n, "black");
        e.setColor(s), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) && e.drawRoundedImage("AssetImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8);
        let o = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.details), {
            x: o,
            y: c.fontPadding + 1 * c.lineHeight,
            w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(c.AssetTypes.Platform)) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("by ".concat(t.state), {
            x: o,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0)
    }, p = (e, t, i) => {
        var r, s;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: a,
            theme: o
        } = (0, E.getProfileInfo)(i, "black");
        e.setColor(a), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("HangStatus")) ? e.drawRoundedImage("HangStatus", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) : m(e, o);
        let l = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText(T.default.Messages.STATUS_LEAD_IN_JUST, {
            x: l,
            y: c.fontPadding + 1 * c.lineHeight,
            w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(c.AssetTypes.Platform)) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        });
        let u = "";
        u = (0, n("833858").getHangStatusText)(t), e.drawText(u, {
            x: l,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0)
    }, R = (e, t, n) => {
        var i;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: r,
            theme: s
        } = (0, E.getProfileInfo)(n, "black");
        e.setColor(r), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === s ? "white" : "black"), e.drawRoundedImage("AssetImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) === o.DrawResultStatus.Failure && e.drawPath(c.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: c.padding,
            y: c.padding
        }, !0, 2 + 2 / 3);
        let a = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.details), {
            x: a,
            y: c.fontPadding + 1 * c.lineHeight,
            w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("Platform")) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("".concat(t.state), {
            x: a,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0)
    }, C = (e, t, n) => {
        var i, r, s;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: a,
            theme: o
        } = (0, E.getProfileInfo)(n, "black");
        e.setColor(a), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) : (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) : m(e, o);
        let l = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 16,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("Streaming ".concat(t.name), {
            x: l,
            y: c.fontPadding + c.lineHeight * (null != t.timestamps ? 1 : 1.5),
            w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(c.AssetTypes.Platform)) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), null != t.timestamps && (e.setFont({
            size: 14,
            weight: 500
        }), e.drawText("for ".concat((0, E.howLong)(t.timestamps)), {
            x: l,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0))
    }
}