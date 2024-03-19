function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReactionToActivity: function() {
            return h
        },
        sendReplyToActivity: function() {
            return x
        }
    });
    var i = n("376556"),
        l = n("309570"),
        a = n("429928"),
        s = n("695412"),
        r = n("999317"),
        o = n("550368"),
        u = n("402671"),
        d = n("526409"),
        c = n("407462"),
        f = n("78512"),
        p = n("49111"),
        m = n("782340");
    let h = async e => {
        let {
            reaction: t,
            altText: n,
            ...i
        } = e, l = await y(i);
        (0, d.sendReaction)({
            file: l,
            altText: n,
            user: i.user,
            reaction: t
        })
    }, x = async e => {
        let {
            reply: t,
            altText: n,
            ...i
        } = e, l = await y(i);
        (0, d.sendReply)({
            file: l,
            altText: n,
            user: i.user,
            reply: t
        })
    }, E = e => {
        var t;
        let {
            activity: i,
            application: l,
            user: a
        } = e, {
            theme: s
        } = (0, f.getProfileInfo)(a, "black"), r = "dark" === s, d = (0, f.getActivityPlatform)(i), {
            assets: c,
            application_id: m
        } = i, h = (0, o.getAssetImage)(m, null == c ? void 0 : c.large_image, 64), x = null == l ? void 0 : l.getIconURL(64), E = null != d ? r ? d.icon.darkPNG : d.icon.lightPNG : i.type === p.ActivityTypes.PLAYING ? r ? n("944857") : n("248073") : null, y = i.type === p.ActivityTypes.HANG_STATUS && (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null ? (0, u.getEmojiUrl)({
            id: i.emoji.id,
            name: i.emoji.name,
            animated: !1
        }) : null;
        return {
            ...null != E && {
                Platform: E
            },
            ...null != h && {
                AssetImage: h.includes("http") ? h : n(h)
            },
            ...null != x && {
                ApplicationImage: x
            },
            ...null != y && {
                HangStatus: y
            }
        }
    }, y = async e => {
        let {
            user: t,
            activity: n,
            application: o,
            stream: u
        } = e, d = E({
            activity: n,
            application: o,
            user: t
        });
        return await (0, r.generateImageFromCanvas)({
            assetsToLoad: d,
            drawImage: e => {
                var r;
                e.setFont({
                    truncate: s.TextTruncationMethod.Truncate
                }), null != u ? T(e, n, t) : (0, a.default)(n) ? C(e, n, t) : (0, l.default)(n) && n.name === i.default.get(p.PlatformTypes.LEAGUE_OF_LEGENDS).name ? _(e, n, t) : n.type === p.ActivityTypes.HANG_STATUS ? I(e, n, t) : S(e, n, t), (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has("Platform")) && e.drawImage("Platform", {
                    x: c.canvasWidth - c.padding - c.platformSize,
                    y: c.padding
                }, {
                    w: c.platformSize,
                    h: c.platformSize
                })
            },
            exportConfigs: {
                format: s.DiscordCanvasExporterOutputFormats.File,
                quality: 1,
                fileName: "user-reacting-to-".concat(n.name, ".png").toLowerCase(),
                fileType: "png"
            }
        })
    }, g = (e, t) => {
        e.setColor("dark" === t ? "white" : "black"), e.drawPath(c.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: c.padding,
            y: c.padding
        }, !0, 2 + 2 / 3)
    }, S = (e, t, n) => {
        var i, l, a;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: s,
            theme: r
        } = (0, f.getProfileInfo)(n, "black");
        e.setColor(s), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === r ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
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
        }, 8) : (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) : g(e, r);
        let o = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === r ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 16,
            family: '"gg sans", sans-serif',
            weight: 700
        }), e.drawText("".concat(t.name), {
            x: o,
            y: c.fontPadding + 1 * c.lineHeight,
            w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(c.AssetTypes.Platform)) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), null != t.timestamps && (e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("for ".concat((0, f.howLong)(t.timestamps)), {
            x: o,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0))
    }, C = (e, t, n) => {
        var i, l;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: a,
            theme: s
        } = (0, f.getProfileInfo)(n, "black");
        e.setColor(a), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
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
        let r = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: '"gg sans", sans-serif',
            weight: 700
        }), e.drawText("".concat(t.details), {
            x: r,
            y: c.fontPadding + 1 * c.lineHeight,
            w: (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has(c.AssetTypes.Platform)) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("by ".concat(t.state), {
            x: r,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0)
    }, I = (e, t, i) => {
        var l, a;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: s,
            theme: r
        } = (0, f.getProfileInfo)(i, "black");
        e.setColor(s), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === r ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has("HangStatus")) ? e.drawRoundedImage("HangStatus", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) : g(e, r);
        let o = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === r ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: '"gg sans", sans-serif',
            weight: 700
        }), e.drawText(m.default.Messages.STATUS_LEAD_IN_JUST, {
            x: o,
            y: c.fontPadding + 1 * c.lineHeight,
            w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(c.AssetTypes.Platform)) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        });
        let u = "";
        {
            let e = n("808742").getHangStatusText;
            u = e(t)
        }
        e.drawText(u, {
            x: o,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0)
    }, _ = (e, t, n) => {
        var i;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: l,
            theme: a
        } = (0, f.getProfileInfo)(n, "black");
        e.setColor(l), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === a ? "white" : "black");
        let r = e.drawRoundedImage("AssetImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8);
        r === s.DrawResultStatus.Failure && e.drawPath(c.ACTIVITY_IMAGE_FALLBACK_PATH, {
            x: c.padding,
            y: c.padding
        }, !0, 2 + 2 / 3);
        let o = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 14,
            family: '"gg sans", sans-serif',
            weight: 700
        }), e.drawText("".concat(t.details), {
            x: o,
            y: c.fontPadding + 1 * c.lineHeight,
            w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has("Platform")) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), e.setFont({
            size: 14,
            weight: 400
        }), e.drawText("".concat(t.state), {
            x: o,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0)
    }, T = (e, t, n) => {
        var i, l, a;
        e.setSize({
            w: c.canvasWidth,
            h: c.canvasHeight
        });
        let {
            color: s,
            theme: r
        } = (0, f.getProfileInfo)(n, "black");
        e.setColor(s), e.drawRoundedRect({
            x: 0,
            y: 0,
            h: c.canvasHeight,
            w: c.canvasWidth
        }, 8, !0), e.setColor("dark" === r ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), e.drawRoundedRect({
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
        }, 8) : (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has("ApplicationImage")) ? e.drawRoundedImage("ApplicationImage", {
            x: c.padding,
            y: c.padding
        }, {
            w: c.activitySize,
            h: c.activitySize
        }, 8) : g(e, r);
        let o = c.activitySize + c.padding + c.imagePadding;
        e.setColor("dark" === r ? "white" : "rgb(6, 6, 7)"), e.setFont({
            size: 16,
            family: '"gg sans", sans-serif',
            weight: 700
        }), e.drawText("Streaming ".concat(t.name), {
            x: o,
            y: c.fontPadding + c.lineHeight * (null != t.timestamps ? 1 : 1.5),
            w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(c.AssetTypes.Platform)) ? c.titleMaxWidthPlatform : c.titleMaxWidthNoPlatform
        }, !0), null != t.timestamps && (e.setFont({
            size: 14,
            weight: 500
        }), e.drawText("for ".concat((0, f.howLong)(t.timestamps)), {
            x: o,
            y: c.fontPadding + 2 * c.lineHeight
        }, !0))
    }
}