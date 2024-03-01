function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007"), n("781738");
    var s = n("895547"),
        i = n("315102"),
        r = n("284679"),
        a = n("103603"),
        o = n("261742");
    let d = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);

    function u(e) {
        if (d.has(e)) return "";
        try {
            let t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
            return n("331246")("@discordapp/twemoji/dist/svg/".concat(s.default.convert.toCodePoint(t), ".svg").replace("@discordapp/twemoji/dist/svg/", "./"))
        } catch (t) {
            return console.warn(t, "no emoji for", e), ""
        }
    }
    async function l(e) {
        let t;
        let {
            id: n,
            name: s
        } = e;
        t = null != n ? i.default.getEmojiURL({
            id: n,
            size: 32,
            animated: !1
        }) : u(s);
        let o = await (0, a.getPaletteForAvatar)(t);
        return null == o ? void 0 : o.map(e => {
            let [t, n, s] = e;
            return (0, r.rgbToHex)(t, n, s)
        })
    }
    var f = {
        getURL: o.default.makeMemoizer(u),
        filterUnsupportedEmojis: function(e) {
            return e
        },
        applyPlatformToThemedEmojiColorPalette: function(e) {
            let {
                palette: t,
                shouldProcessMobileColors: n = !1
            } = e;
            return t
        },
        getEmojiColors: l,
        triggerFullscreenAnimation: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: s
            } = e
        }
    }
}