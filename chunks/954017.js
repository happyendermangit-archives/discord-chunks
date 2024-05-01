function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReactionToActivity: function() {
            return A
        },
        sendReplyToActivity: function() {
            return m
        }
    });
    var i = n("512722"),
        r = n.n(i),
        a = n("493683"),
        s = n("726542"),
        o = n("122810"),
        l = n("503438"),
        u = n("693824"),
        d = n("690725"),
        _ = n("592125"),
        c = n("81063"),
        E = n("176354"),
        I = n("201133"),
        T = n("55000"),
        f = n("314091"),
        S = n("981631"),
        h = n("689938");
    let A = async e => {
        let {
            reaction: t,
            altText: n,
            ...i
        } = e, r = await p(i);
        (0, I.sendReaction)({
            file: r,
            altText: n,
            user: i.user,
            reaction: t
        })
    }, m = async e => {
        let {
            reply: t,
            altText: n,
            ...i
        } = e, s = await p(i), o = await a.default.openPrivateChannel(i.user.id, !1, !1), l = _.default.getChannel(o);
        r()(null != l, "Channel cannot be null"), (0, I.sendReply)({
            file: s,
            altText: n,
            channel: l,
            reply: t
        })
    }, N = e => {
        var t;
        let {
            activity: i,
            application: r,
            user: a
        } = e, {
            theme: s
        } = (0, f.getProfileInfo)(a, "black"), o = "dark" === s, l = (0, f.getActivityPlatform)(i), {
            assets: u,
            application_id: d
        } = i, _ = (0, c.getAssetImage)(d, null == u ? void 0 : u.large_image, 64), I = null == r ? void 0 : r.getIconURL(64), T = null != l ? o ? l.icon.darkPNG : l.icon.lightPNG : i.type === S.ActivityTypes.PLAYING ? o ? n("414575") : n("807612") : null, h = i.type === S.ActivityTypes.HANG_STATUS && (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null ? (0, E.getEmojiUrl)({
            id: i.emoji.id,
            name: i.emoji.name,
            animated: !1
        }) : null;
        return {
            ...null != T && {
                Platform: T
            },
            ...null != _ && {
                AssetImage: _.includes("http") ? _ : require(_)
            },
            ...null != I && {
                ApplicationImage: I
            },
            ...null != h && {
                HangStatus: h
            }
        }
    }, p = async e => {
        let {
            user: t,
            activity: n,
            application: i,
            stream: r
        } = e, _ = await a.default.openPrivateChannel(t.id, !1, !1), c = N({
            activity: n,
            application: i,
            user: t
        });
        return await (0, d.generateImageFromCanvas)({
            assetsToLoad: c,
            drawImage: e => {
                var i;
                e.setFont({
                    truncate: u.TextTruncationMethod.Truncate
                }), null != r ? v(e, n, t) : (0, l.default)(n) ? C(e, n, t) : (0, o.default)(n) && n.name === s.default.get(S.PlatformTypes.LEAGUE_OF_LEGENDS).name ? L(e, n, t) : n.type === S.ActivityTypes.HANG_STATUS ? g(e, n, t) : R(e, n, t), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("Platform")) && e.drawImage("Platform", {
                    x: T.canvasWidth - T.padding - T.platformSize,
                    y: T.padding
                }, {
                    w: T.platformSize,
                    h: T.platformSize
                })
            },
            exportConfigs: {
                format: u.DiscordCanvasExporterOutputFormats.CloudUpload,
                quality: 1,
                fileName: "user-reacting-to-".concat(n.name, ".png").toLowerCase(),
                fileType: "png",
                channelId: _
            }
        })
    }, O = (e, t) => {
        e.setColor("dark" === t ? "white" : "black"), e.drawPath(T.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: T.padding,
            y: T.padding
        }, !0, 2 + 2 / 3)
    }, R = (e, t, n) => {
        var i, r, a;
        e.setSize({
            w: T.canvasWidth,
            h: T.canvasHeight
        });
        let {
            color: s,
            theme: o
        } = (0, f.getProfileInfo)(n, "black");
        e.setColor(s), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
            x: T.padding,
            y: T.padding
        }, {
            w: T.activitySize,
            h: T.activitySize
        }, 8) : (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
            x: T.padding,
            y: T.padding
        }, {
            w: T.activitySize,
            h: T.activitySize
        }, 8) : O(e, o);
        let l = T.activitySize + T.padding + T.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 16,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.name), {
            x: l,
            y: T.fontPadding + 1 * T.lineHeight,
            w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(T.AssetTypes.Platform)) ? T.titleMaxWidthPlatform : T.titleMaxWidthNoPlatform
        }, !0), null != t.timestamps && (e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("for ".concat((0, f.howLong)(t.timestamps)), {
            x: l,
            y: T.fontPadding + 2 * T.lineHeight
        }, !0))
    }, C = (e, t, n) => {
        var i, r;
        e.setSize({
            w: T.canvasWidth,
            h: T.canvasHeight
        });
        let {
            color: a,
            theme: s
        } = (0, f.getProfileInfo)(n, "black");
        e.setColor(a), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), e.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) && e.drawRoundedImage("AssetImage", {
            x: T.padding,
            y: T.padding
        }, {
            w: T.activitySize,
            h: T.activitySize
        }, 8);
        let o = T.activitySize + T.padding + T.imagePadding;
        e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.details), {
            x: o,
            y: T.fontPadding + 1 * T.lineHeight,
            w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(T.AssetTypes.Platform)) ? T.titleMaxWidthPlatform : T.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("by ".concat(t.state), {
            x: o,
            y: T.fontPadding + 2 * T.lineHeight
        }, !0)
    }, g = (e, t, i) => {
        var r, a;
        e.setSize({
            w: T.canvasWidth,
            h: T.canvasHeight
        });
        let {
            color: s,
            theme: o
        } = (0, f.getProfileInfo)(i, "black");
        e.setColor(s), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("HangStatus")) ? e.drawRoundedImage("HangStatus", {
            x: T.padding,
            y: T.padding
        }, {
            w: T.activitySize,
            h: T.activitySize
        }, 8) : O(e, o);
        let l = T.activitySize + T.padding + T.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText(h.default.Messages.STATUS_LEAD_IN_JUST, {
            x: l,
            y: T.fontPadding + 1 * T.lineHeight,
            w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(T.AssetTypes.Platform)) ? T.titleMaxWidthPlatform : T.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        });
        let u = "";
        u = (0, n("833858").getHangStatusText)(t), e.drawText(u, {
            x: l,
            y: T.fontPadding + 2 * T.lineHeight
        }, !0)
    }, L = (e, t, n) => {
        var i;
        e.setSize({
            w: T.canvasWidth,
            h: T.canvasHeight
        });
        let {
            color: r,
            theme: a
        } = (0, f.getProfileInfo)(n, "black");
        e.setColor(r), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), e.setColor("dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), e.setColor("dark" === a ? "white" : "black"), e.drawRoundedImage("AssetImage", {
            x: T.padding,
            y: T.padding
        }, {
            w: T.activitySize,
            h: T.activitySize
        }, 8) === u.DrawResultStatus.Failure && e.drawPath(T.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: T.padding,
            y: T.padding
        }, !0, 2 + 2 / 3);
        let s = T.activitySize + T.padding + T.imagePadding;
        e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.details), {
            x: s,
            y: T.fontPadding + 1 * T.lineHeight,
            w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("Platform")) ? T.titleMaxWidthPlatform : T.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("".concat(t.state), {
            x: s,
            y: T.fontPadding + 2 * T.lineHeight
        }, !0)
    }, v = (e, t, n) => {
        var i, r, a;
        e.setSize({
            w: T.canvasWidth,
            h: T.canvasHeight
        });
        let {
            color: s,
            theme: o
        } = (0, f.getProfileInfo)(n, "black");
        e.setColor(s), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: T.canvasHeight,
            w: T.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
            x: T.padding,
            y: T.padding
        }, {
            w: T.activitySize,
            h: T.activitySize
        }, 8) : (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
            x: T.padding,
            y: T.padding
        }, {
            w: T.activitySize,
            h: T.activitySize
        }, 8) : O(e, o);
        let l = T.activitySize + T.padding + T.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 16,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("Streaming ".concat(t.name), {
            x: l,
            y: T.fontPadding + T.lineHeight * (null != t.timestamps ? 1 : 1.5),
            w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(T.AssetTypes.Platform)) ? T.titleMaxWidthPlatform : T.titleMaxWidthNoPlatform
        }, !0), null != t.timestamps && (e.setFont({
            size: 14,
            weight: 500
        }), e.drawText("for ".concat((0, f.howLong)(t.timestamps)), {
            x: l,
            y: T.fontPadding + 2 * T.lineHeight
        }, !0))
    }
}