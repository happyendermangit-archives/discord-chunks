function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007"), n("781738");
    var i = n("895547"),
        s = n("315102"),
        r = n("284679"),
        a = n("103603"),
        o = n("261742");
    let l = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);

    function u(e) {
        if (l.has(e)) return "";
        try {
            let t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
            return n("331246")("@discordapp/twemoji/dist/svg/".concat(i.default.convert.toCodePoint(t), ".svg").replace("@discordapp/twemoji/dist/svg/", "./"))
        } catch (t) {
            return console.warn(t, "no emoji for", e), ""
        }
    }
    async function d(e) {
        let t;
        let {
            id: n,
            name: i
        } = e;
        t = null != n ? s.default.getEmojiURL({
            id: n,
            size: 32,
            animated: !1
        }) : u(i);
        let o = await (0, a.getPaletteForAvatar)(t);
        return null == o ? void 0 : o.map(e => {
            let [t, n, i] = e;
            return (0, r.rgbToHex)(t, n, i)
        })
    }
    var c = {
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
        getEmojiColors: d,
        triggerFullscreenAnimation: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: i
            } = e
        }
    }
}