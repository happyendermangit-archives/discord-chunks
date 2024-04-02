function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReactionToActivity: function() {
            return T
        },
        sendReplyToActivity: function() {
            return f
        }
    });
    var i = n("726542"),
        r = n("122810"),
        s = n("503438"),
        a = n("693824"),
        o = n("690725"),
        l = n("81063"),
        u = n("176354"),
        d = n("201133"),
        _ = n("55000"),
        c = n("314091"),
        E = n("981631"),
        I = n("689938");
    let T = async e => {
        let {
            reaction: t,
            altText: n,
            ...i
        } = e, r = await h(i);
        (0, d.sendReaction)({
            file: r,
            altText: n,
            user: i.user,
            reaction: t
        })
    }, f = async e => {
        let {
            reply: t,
            altText: n,
            ...i
        } = e, r = await h(i);
        (0, d.sendReply)({
            file: r,
            altText: n,
            user: i.user,
            reply: t
        })
    }, S = e => {
        var t;
        let {
            activity: i,
            application: r,
            user: s
        } = e, {
            theme: a
        } = (0, c.getProfileInfo)(s, "black"), o = "dark" === a, d = (0, c.getActivityPlatform)(i), {
            assets: _,
            application_id: I
        } = i, T = (0, l.getAssetImage)(I, null == _ ? void 0 : _.large_image, 64), f = null == r ? void 0 : r.getIconURL(64), S = null != d ? o ? d.icon.darkPNG : d.icon.lightPNG : i.type === E.ActivityTypes.PLAYING ? o ? n("414575") : n("807612") : null, h = i.type === E.ActivityTypes.HANG_STATUS && (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null ? (0, u.getEmojiUrl)({
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
            ...null != h && {
                HangStatus: h
            }
        }
    }, h = async e => {
        let {
            user: t,
            activity: n,
            application: l,
            stream: u
        } = e, d = S({
            activity: n,
            application: l,
            user: t
        });
        return await (0, o.generateImageFromCanvas)({
            assetsToLoad: d,
            drawImage: e => {
                var o;
                e.setFont({
                    truncate: a.TextTruncationMethod.Truncate
                }), null != u ? R(e, n, t) : (0, s.default)(n) ? N(e, n, t) : (0, r.default)(n) && n.name === i.default.get(E.PlatformTypes.LEAGUE_OF_LEGENDS).name ? p(e, n, t) : n.type === E.ActivityTypes.HANG_STATUS ? O(e, n, t) : m(e, n, t), (null === (o = e.assetMap) || void 0 === o ? void 0 : o.has("Platform")) && e.drawImage("Platform", {
                    x: _.canvasWidth - _.padding - _.platformSize,
                    y: _.padding
                }, {
                    w: _.platformSize,
                    h: _.platformSize
                })
            },
            exportConfigs: {
                format: a.DiscordCanvasExporterOutputFormats.File,
                quality: 1,
                fileName: "user-reacting-to-".concat(n.name, ".png").toLowerCase(),
                fileType: "png"
            }
        })
    }, A = (e, t) => {
        e.setColor("dark" === t ? "white" : "black"), e.drawPath(_.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: _.padding,
            y: _.padding
        }, !0, 2 + 2 / 3)
    }, m = (e, t, n) => {
        var i, r, s;
        e.setSize({
            w: _.canvasWidth,
            h: _.canvasHeight
        });
        let {
            color: a,
            theme: o
        } = (0, c.getProfileInfo)(n, "black");
        e.setColor(a), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
            x: _.padding,
            y: _.padding
        }, {
            w: _.activitySize,
            h: _.activitySize
        }, 8) : (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
            x: _.padding,
            y: _.padding
        }, {
            w: _.activitySize,
            h: _.activitySize
        }, 8) : A(e, o);
        let l = _.activitySize + _.padding + _.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 16,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.name), {
            x: l,
            y: _.fontPadding + 1 * _.lineHeight,
            w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(_.AssetTypes.Platform)) ? _.titleMaxWidthPlatform : _.titleMaxWidthNoPlatform
        }, !0), null != t.timestamps && (e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("for ".concat((0, c.howLong)(t.timestamps)), {
            x: l,
            y: _.fontPadding + 2 * _.lineHeight
        }, !0))
    }, N = (e, t, n) => {
        var i, r;
        e.setSize({
            w: _.canvasWidth,
            h: _.canvasHeight
        });
        let {
            color: s,
            theme: a
        } = (0, c.getProfileInfo)(n, "black");
        e.setColor(s), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), e.setColor("dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) && e.drawRoundedImage("AssetImage", {
            x: _.padding,
            y: _.padding
        }, {
            w: _.activitySize,
            h: _.activitySize
        }, 8);
        let o = _.activitySize + _.padding + _.imagePadding;
        e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.details), {
            x: o,
            y: _.fontPadding + 1 * _.lineHeight,
            w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(_.AssetTypes.Platform)) ? _.titleMaxWidthPlatform : _.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("by ".concat(t.state), {
            x: o,
            y: _.fontPadding + 2 * _.lineHeight
        }, !0)
    }, O = (e, t, i) => {
        var r, s;
        e.setSize({
            w: _.canvasWidth,
            h: _.canvasHeight
        });
        let {
            color: a,
            theme: o
        } = (0, c.getProfileInfo)(i, "black");
        e.setColor(a), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("HangStatus")) ? e.drawRoundedImage("HangStatus", {
            x: _.padding,
            y: _.padding
        }, {
            w: _.activitySize,
            h: _.activitySize
        }, 8) : A(e, o);
        let l = _.activitySize + _.padding + _.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText(I.default.Messages.STATUS_LEAD_IN_JUST, {
            x: l,
            y: _.fontPadding + 1 * _.lineHeight,
            w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(_.AssetTypes.Platform)) ? _.titleMaxWidthPlatform : _.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        });
        let u = "";
        u = (0, n("833858").getHangStatusText)(t), e.drawText(u, {
            x: l,
            y: _.fontPadding + 2 * _.lineHeight
        }, !0)
    }, p = (e, t, n) => {
        var i;
        e.setSize({
            w: _.canvasWidth,
            h: _.canvasHeight
        });
        let {
            color: r,
            theme: s
        } = (0, c.getProfileInfo)(n, "black");
        e.setColor(r), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), e.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), e.setColor("dark" === s ? "white" : "black"), e.drawRoundedImage("AssetImage", {
            x: _.padding,
            y: _.padding
        }, {
            w: _.activitySize,
            h: _.activitySize
        }, 8) === a.DrawResultStatus.Failure && e.drawPath(_.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: _.padding,
            y: _.padding
        }, !0, 2 + 2 / 3);
        let o = _.activitySize + _.padding + _.imagePadding;
        e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("".concat(t.details), {
            x: o,
            y: _.fontPadding + 1 * _.lineHeight,
            w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("Platform")) ? _.titleMaxWidthPlatform : _.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("".concat(t.state), {
            x: o,
            y: _.fontPadding + 2 * _.lineHeight
        }, !0)
    }, R = (e, t, n) => {
        var i, r, s;
        e.setSize({
            w: _.canvasWidth,
            h: _.canvasHeight
        });
        let {
            color: a,
            theme: o
        } = (0, c.getProfileInfo)(n, "black");
        e.setColor(a), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), e.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: _.canvasHeight,
            w: _.canvasWidth
        }, 8, !0), (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("AssetImage")) ? e.drawRoundedImage("AssetImage", {
            x: _.padding,
            y: _.padding
        }, {
            w: _.activitySize,
            h: _.activitySize
        }, 8) : (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
            x: _.padding,
            y: _.padding
        }, {
            w: _.activitySize,
            h: _.activitySize
        }, 8) : A(e, o);
        let l = _.activitySize + _.padding + _.imagePadding;
        e.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 16,
            family: ["gg sans", "sans-serif"],
            weight: 700
        }), e.drawText("Streaming ".concat(t.name), {
            x: l,
            y: _.fontPadding + _.lineHeight * (null != t.timestamps ? 1 : 1.5),
            w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(_.AssetTypes.Platform)) ? _.titleMaxWidthPlatform : _.titleMaxWidthNoPlatform
        }, !0), null != t.timestamps && (e.setFont({
            size: 14,
            weight: 500
        }), e.drawText("for ".concat((0, c.howLong)(t.timestamps)), {
            x: l,
            y: _.fontPadding + 2 * _.lineHeight
        }, !0))
    }
}