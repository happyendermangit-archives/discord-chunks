function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        safelyMakeUrlHumanReadable: function() {
            return u
        },
        sanitizeUnicodeConfusables: function() {
            return o
        },
        sanitizeWhitespace: function() {
            return r
        }
    }), n("757143");
    let i = RegExp("".concat(/\p{Cf}|\p{Zl}|\p{Zp}|[^\P{Cc}\n]|[^\P{Zs} ]/gu.source, "|").concat("͏|឴|឵|ᅠ|ㅤ|ﾠ"), "gu");

    function r(e) {
        return e.replace(i, "")
    }
    let s = [{
        character: "h",
        matcher: a(["H", "һ", "հ", "Ꮒ", "ℎ", "\uD835\uDC21", "\uD835\uDC89", "\uD835\uDCBD", "\uD835\uDCF1", "\uD835\uDD25", "\uD835\uDD59", "\uD835\uDD8D", "\uD835\uDDC1", "\uD835\uDDF5", "\uD835\uDE29", "\uD835\uDE5D", "\uD835\uDE91", "ｈ"])
    }, {
        character: "t",
        matcher: a(["T", "\uD835\uDC2D", "\uD835\uDC61", "\uD835\uDC95", "\uD835\uDCC9", "\uD835\uDCFD", "\uD835\uDD31", "\uD835\uDD65", "\uD835\uDD99", "\uD835\uDDCD", "\uD835\uDE01", "\uD835\uDE35", "\uD835\uDE69", "\uD835\uDE9D"])
    }, {
        character: "p",
        matcher: a(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "\uD835\uDC29", "\uD835\uDC5D", "\uD835\uDC91", "\uD835\uDCC5", "\uD835\uDCF9", "\uD835\uDD2D", "\uD835\uDD61", "\uD835\uDD95", "\uD835\uDDC9", "\uD835\uDDFD", "\uD835\uDE31", "\uD835\uDE65", "\uD835\uDE99", "\uD835\uDED2", "\uD835\uDEE0", "\uD835\uDF0C", "\uD835\uDF1A", "\uD835\uDF46", "\uD835\uDF54", "\uD835\uDF80", "\uD835\uDF8E", "\uD835\uDFBA", "\uD835\uDFC8", "ｐ", "ҏ"])
    }, {
        character: "s",
        matcher: a(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "\uD801\uDC48", "\uD806\uDCC1", "\uD835\uDC2C", "\uD835\uDC60", "\uD835\uDC94", "\uD835\uDCC8", "\uD835\uDCFC", "\uD835\uDD30", "\uD835\uDD64", "\uD835\uDD98", "\uD835\uDDCC", "\uD835\uDE00", "\uD835\uDE34", "\uD835\uDE68", "\uD835\uDE9C", "ｓ"])
    }, {
        character: ":",
        matcher: a(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
    }, {
        character: "/",
        matcher: a(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "\uD834\uDE3A"])
    }];

    function a(e) {
        return RegExp(e.join("|"), "gu")
    }

    function o(e) {
        let t = e;
        return s.forEach(e => {
            t = t.replace(e.matcher, e.character)
        }), t
    }
    let l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

    function u(e) {
        let t = function(e) {
            if ("null" === e.origin && e.pathname.startsWith("//")) return e.protocol;
            let t = "";
            return "" !== e.username && (t += e.username), "" !== e.password && (t += ":" + e.password), "" !== t && (t += "@"), "".concat(e.protocol, "//").concat(t).concat(e.host)
        }(e);
        return t += d(e.pathname) + d(e.search) + d(e.hash)
    }

    function d(e) {
        let t;
        try {
            t = decodeURIComponent(e)
        } catch {
            return e
        }
        let n = "",
            i = e,
            r = t;
        for (; i.length > 0;) {
            var s;
            let e = i.codePointAt(0),
                t = r.codePointAt(0);
            if (e === t) {
                let t = String.fromCodePoint(e);
                n += t, i = i.substring(t.length), r = r.substring(t.length);
                continue
            }
            let a = String.fromCodePoint(t),
                o = encodeURIComponent(a),
                u = o === a ? 3 : o.length;
            n += ((s = t) >= 0 && s < 128 ? 1 !== l[s] : 8206 === s || 8207 === s || 8234 === s || 8235 === s || 8236 === s || 8237 === s || 8238 === s || 1564 === s || 8294 === s || 8295 === s || 8296 === s || 8297 === s || 128271 === s || 128272 === s || 128274 === s || 128275 === s || 133 === s || 160 === s || 5760 === s || 8192 === s || 8193 === s || 8194 === s || 8195 === s || 8196 === s || 8197 === s || 8198 === s || 8199 === s || 8200 === s || 8201 === s || 8202 === s || 8232 === s || 8233 === s || 8239 === s || 8287 === s || 12288 === s || 10240 === s || 173 === s || 847 === s || s >= 1536 && s <= 1541 || 1757 === s || 1807 === s || 2274 === s || 4447 === s || 4448 === s || 6068 === s || 6069 === s || 6155 === s || 6156 === s || 6157 === s || 6158 === s || 8203 === s || 8204 === s || 8205 === s || 8288 === s || 8289 === s || 8290 === s || 8291 === s || 8292 === s || 8293 === s || s >= 8298 && s <= 8303 || 12644 === s || s >= 65520 && s <= 65528 || s >= 65024 && s <= 65039 || 65279 === s || 65440 === s || 65529 === s || 65530 === s || 65531 === s || 69821 === s || 69837 === s || s >= 78896 && s <= 78904 || s >= 113824 && s <= 113827 || s >= 119155 && s <= 119162 || s >= 917504 && s <= 921599) ? o : a, i = i.substring(u), r = r.substring(a.length)
        }
        return n
    }
}