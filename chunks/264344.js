function(e, t, n) {
    e = n.nmd(e), (function() {
        "use strict";
        var r = {
                function: !0,
                object: !0
            },
            i = r[typeof window] && window || this,
            a = r[typeof t] && t,
            o = r.object && e && !e.nodeType && e,
            s = a && o && "object" == typeof n.g && n.g;
        s && (s.global === s || s.window === s || s.self === s) && (i = s);
        var u = 9007199254740991,
            c = /\bOpera/,
            l = Object.prototype,
            d = l.hasOwnProperty,
            f = l.toString;

        function p(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
        }

        function h(e) {
            return e = v(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : p(e)
        }

        function m(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e)
        }

        function g(e) {
            return null == e ? p(e) : f.call(e).slice(8, -1)
        }

        function _(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?")
        }

        function b(e, t) {
            var n = null;
            return ! function(e, t) {
                var n = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof r && r > -1 && r <= u)
                    for (; ++n < r;) t(e[n], n, e);
                else m(e, t)
            }(e, function(r, i) {
                n = t(n, r, i, e)
            }), n
        }

        function v(e) {
            return String(e).replace(/^ +| +$/g, "")
        }
        var y = function e(t) {
            var n, r, a, o, s, u = i,
                l = t && "object" == typeof t && "String" != g(t);
            l && (u = t, t = null);
            var d = u.navigator || {},
                p = d.userAgent || "";
            t || (t = p);
            var y = l ? !!d.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(f.toString()),
                E = "Object",
                S = l ? E : "ScriptBridgingProxyObject",
                x = l ? E : "Environment",
                w = l && u.java ? "JavaPackage" : g(u.java),
                T = l ? E : "RuntimeObject",
                C = /\bJava/.test(w) && u.java,
                D = C && g(u.environment) == x,
                O = u.document || {},
                M = u.operamini || u.opera,
                A = c.test(A = l && M ? M["[[Class]]"] : g(M)) ? A : M = null,
                k = t,
                R = [],
                N = null,
                I = t == p,
                L = I && M && "function" == typeof M.version && M.version(),
                P = function(e) {
                    return b(e, function(e, n) {
                        return e || RegExp("\\b" + (n.pattern || _(n)) + "\\b", "i").exec(t) && (n.label || n)
                    })
                }([{
                    label: "EdgeHTML",
                    pattern: "Edge"
                }, "Trident", {
                    label: "WebKit",
                    pattern: "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                F = function(e) {
                    return b(e, function(e, n) {
                        return e || RegExp("\\b" + (n.pattern || _(n)) + "\\b", "i").exec(t) && (n.label || n)
                    })
                }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                    label: "Yandex Browser",
                    pattern: "YaBrowser"
                }, {
                    label: "UC Browser",
                    pattern: "UCBrowser"
                }, "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chromium", "Chrome", {
                    label: "Chrome",
                    pattern: "(?:HeadlessChrome)"
                }, {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                }, {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"]),
                B = j([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"]),
                U = function(e) {
                    return b(e, function(e, n, r) {
                        return e || (n[B] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] || RegExp("\\b" + _(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
                    })
                }({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1
                    },
                    Alcatel: {},
                    Archos: {},
                    Amazon: {
                        Kindle: 1,
                        "Kindle Fire": 1
                    },
                    Asus: {
                        Transformer: 1
                    },
                    "Barnes & Noble": {
                        Nook: 1
                    },
                    BlackBerry: {
                        PlayBook: 1
                    },
                    Google: {
                        "Google TV": 1,
                        Nexus: 1
                    },
                    HP: {
                        TouchPad: 1
                    },
                    HTC: {},
                    Huawei: {},
                    Lenovo: {},
                    LG: {},
                    Microsoft: {
                        Xbox: 1,
                        "Xbox One": 1
                    },
                    Motorola: {
                        Xoom: 1
                    },
                    Nintendo: {
                        "Wii U": 1,
                        Wii: 1
                    },
                    Nokia: {
                        Lumia: 1
                    },
                    Oppo: {},
                    Samsung: {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1
                    },
                    Sony: {
                        PlayStation: 1,
                        "PlayStation Vita": 1
                    },
                    Xiaomi: {
                        Mi: 1,
                        Redmi: 1
                    }
                }),
                Y = function(e) {
                    return b(e, function(e, n) {
                        var r, i, a, o, s = n.pattern || _(n);
                        if (!e && (e = RegExp("\\b" + s + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t))) {
                            ;
                            r = e, i = s, a = n.label || n, o = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            }, i && a && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (o = o[/[\d.]+$/.exec(r)]) && (r = "Windows " + o), r = String(r), i && a && (r = r.replace(RegExp(i, "i"), a)), e = r = h(r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                        }
                        return e
                    })
                }(["Windows Phone", "KaiOS", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", {
                    label: "DragonFly BSD",
                    pattern: "DragonFly"
                }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

            function j(e) {
                return b(e, function(e, n) {
                    var r = n.pattern || _(n);
                    return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = h(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                })
            }

            function z(e) {
                return b(e, function(e, n) {
                    return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
                })
            }
            if (P && (P = [P]), /\bAndroid\b/.test(Y) && !B && (o = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t)) && (B = v(o[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), U && !B ? B = j([U]) : U && B && (B = B.replace(RegExp("^(" + _(U) + ")[-_.\\s]", "i"), U + " ").replace(RegExp("^(" + _(U) + ")[-_.]?(\\w)", "i"), U + " $2")), (o = /\bGoogle TV\b/.exec(B)) && (B = o[0]), /\bSimulator\b/i.test(t) && (B = (B ? B + " " : "") + "Simulator"), "Opera Mini" == F && /\bOPiOS\b/.test(t) && R.push("running in Turbo/Uncompressed mode"), "IE" == F && /\blike iPhone OS\b/.test(t) ? (U = (o = e(t.replace(/like iPhone OS/, ""))).manufacturer, B = o.product) : /^iP/.test(B) ? (F || (F = "Safari"), Y = "iOS" + ((o = / OS ([\d_]+)/i.exec(t)) ? " " + o[1].replace(/_/g, ".") : "")) : "Konqueror" == F && /^Linux\b/i.test(Y) ? Y = "Kubuntu" : U && "Google" != U && (/Chrome/.test(F) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(B)) || /\bAndroid\b/.test(Y) && /^Chrome/.test(F) && /\bVersion\//i.test(t) ? (F = "Android Browser", Y = /\bAndroid\b/.test(Y) ? Y : "Android") : "Silk" == F ? (!/\bMobi/i.test(t) && (Y = "Android", R.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && R.unshift("accelerated")) : "UC Browser" == F && /\bUCWEB\b/.test(t) ? R.push("speed mode") : "PaleMoon" == F && (o = /\bFirefox\/([\d.]+)\b/.exec(t)) ? R.push("identifying as Firefox " + o[1]) : "Firefox" == F && (o = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (Y || (Y = "Firefox OS"), B || (B = o[1])) : !F || (o = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(F)) ? (F && !B && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(o + "/") + 8)) && (F = null), (o = B || U || Y) && (B || U || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Y)) && (F = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Y) ? Y : o) + " Browser")) : "Electron" == F && (o = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && R.push("Chromium " + o), !L && (L = z(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", _(F), "(?:Firefox|Minefield|NetFront)"])), (o = "iCab" == P && parseFloat(L) > 3 && "WebKit" || /\bOpera\b/.test(F) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(P) && "WebKit" || !P && /\bMSIE\b/i.test(t) && ("Mac OS" == Y ? "Tasman" : "Trident") || "WebKit" == P && /\bPlayStation\b(?! Vita\b)/i.test(F) && "NetFront") && (P = [o]), "IE" == F && (o = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (F += " Mobile", Y = "Windows Phone " + (/\+$/.test(o) ? o : o + ".x"), R.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (F = "IE Mobile", Y = "Windows Phone 8.x", R.unshift("desktop mode"), L || (L = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != F && "Trident" == P && (o = /\brv:([\d.]+)/.exec(t)) && (F && R.push("identifying as " + F + (L ? " " + L : "")), F = "IE", L = o[1]), I) {
                ;
                if (r = "global", a = null != (n = u) ? typeof n[r] : "number", /^(?:boolean|number|string|undefined)$/.test(a) || "object" == a && !n[r]) g(o = u.runtime) == S ? (F = "Adobe AIR", Y = o.flash.system.Capabilities.os) : g(o = u.phantom) == T ? (F = "PhantomJS", L = (o = o.version || null) && o.major + "." + o.minor + "." + o.patch) : "number" == typeof O.documentMode && (o = /\bTrident\/(\d+)/i.exec(t)) ? (L = [L, O.documentMode], (o = +o[1] + 4) != L[1] && (R.push("IE " + L[1] + " mode"), P && (P[1] = ""), L[1] = o), L = "IE" == F ? String(L[1].toFixed(1)) : L[0]) : "number" == typeof O.documentMode && /^(?:Chrome|Firefox)\b/.test(F) && (R.push("masking as " + F + " " + L), F = "IE", L = "11.0", P = ["Trident"], Y = "Windows");
                else if (C && (k = (o = C.lang.System).getProperty("os.arch"), Y = Y || o.getProperty("os.name") + " " + o.getProperty("os.version")), D) {
                    try {
                        L = u.require("ringo/engine").version.join("."), F = "RingoJS"
                    } catch (e) {
                        (o = u.system) && o.global.system == u.system && (F = "Narwhal", Y || (Y = o[0].os || null))
                    }!F && (F = "Rhino")
                } else "object" == typeof u.process && !u.process.browser && (o = u.process) && ("object" == typeof o.versions && ("string" == typeof o.versions.electron ? (R.push("Node " + o.versions.node), F = "Electron", L = o.versions.electron) : "string" == typeof o.versions.nw && (R.push("Chromium " + L, "Node " + o.versions.node), F = "NW.js", L = o.versions.nw)), !F && (F = "Node.js", k = o.arch, Y = o.platform, L = (L = /[\d.]+/.exec(o.version)) ? L[0] : null));
                Y = Y && h(Y)
            }
            if (L && (o = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(L) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (I && d.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (N = /b/i.test(o) ? "beta" : "alpha", L = L.replace(RegExp(o + "\\+?$"), "") + ("beta" == N ? C ? "b" : "β" : C ? "a" : "α") + (/\d+\+?/.exec(o) || "")), "Fennec" == F || "Firefox" == F && /\b(?:Android|Firefox OS|KaiOS)\b/.test(Y)) F = "Firefox Mobile";
            else if ("Maxthon" == F && L) L = L.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(B)) "Xbox 360" == B && (Y = null), "Xbox 360" == B && /\bIEMobile\b/.test(t) && R.unshift("mobile mode");
            else if ((/^(?:Chrome|IE|Opera)$/.test(F) || F && !B && !/Browser|Mobi/.test(F)) && ("Windows CE" == Y || /Mobi/i.test(t))) F += " Mobile";
            else if ("IE" == F && I) try {
                null === u.external && R.unshift("platform preview")
            } catch (e) {
                R.unshift("embedded")
            } else(/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(t)) && (o = (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || L) ? (Y = ((o = [o, /BB10/.test(t)])[1] ? (B = null, U = "BlackBerry") : "Device Software") + " " + o[0], L = null) : this != m && "Wii" != B && (I && M || /Opera/.test(F) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == F && /\bOS X (?:\d+\.){2,}/.test(Y) || "IE" == F && (Y && !/^Win/.test(Y) && L > 5.5 || /\bWindows XP\b/.test(Y) && L > 8 || 8 == L && !/\bTrident\b/.test(t))) && !c.test(o = e.call(m, t.replace(c, "") + ";")) && o.name && (o = "ing as " + o.name + ((o = o.version) ? " " + o : ""), c.test(F) ? (/\bIE\b/.test(o) && "Mac OS" == Y && (Y = null), o = "identify" + o) : (o = "mask" + o, F = A ? h(A.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(o) && (Y = null), !I && (L = null)), P = ["Presto"], R.push(o));
            (o = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (o = [parseFloat(o.replace(/\.(\d)$/, ".0$1")), o], "Safari" == F && "+" == o[1].slice(-1) ? (F = "WebKit Nightly", N = "alpha", L = o[1].slice(0, -1)) : (L == o[1] || L == (o[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) && (L = null), o[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == o[0] && 537.36 == o[2] && parseFloat(o[1]) >= 28 && "WebKit" == P && (P = ["Blink"]), I && (y || o[1]) ? (P && (P[1] = "like Chrome"), o = o[1] || ((o = o[0]) < 530 ? 1 : o < 532 ? 2 : o < 532.05 ? 3 : o < 533 ? 4 : o < 534.03 ? 5 : o < 534.07 ? 6 : o < 534.1 ? 7 : o < 534.13 ? 8 : o < 534.16 ? 9 : o < 534.24 ? 10 : o < 534.3 ? 11 : o < 535.01 ? 12 : o < 535.02 ? "13+" : o < 535.07 ? 15 : o < 535.11 ? 16 : o < 535.19 ? 17 : o < 536.05 ? 18 : o < 536.1 ? 19 : o < 537.01 ? 20 : o < 537.11 ? "21+" : o < 537.13 ? 23 : o < 537.18 ? 24 : o < 537.24 ? 25 : o < 537.36 ? 26 : "Blink" != P ? "27" : "28")) : (P && (P[1] = "like Safari"), o = (o = o[0]) < 400 ? 1 : o < 500 ? 2 : o < 526 ? 3 : o < 533 ? 4 : o < 534 ? "4+" : o < 535 ? 5 : o < 537 ? 6 : o < 538 ? 7 : o < 601 ? 8 : o < 602 ? 9 : o < 604 ? 10 : o < 606 ? 11 : o < 608 ? 12 : "12"), P && (P[1] += " " + (o += "number" == typeof o ? ".x" : /[.+]/.test(o) ? "" : "+")), "Safari" == F && (!L || parseInt(L) > 45) ? L = o : "Chrome" == F && /\bHeadlessChrome/i.test(t) && R.unshift("headless")), "Opera" == F && (o = /\bzbov|zvav$/.exec(Y)) ? (F += " ", R.unshift("desktop mode"), "zvav" == o ? (F += "Mini", L = null) : F += "Mobile", Y = Y.replace(RegExp(" *" + o + "$"), "")) : "Safari" == F && /\bChrome\b/.exec(P && P[1]) ? (R.unshift("desktop mode"), F = "Chrome Mobile", L = null, /\bOS X\b/.test(Y) ? (U = "Apple", Y = "iOS 4.3+") : Y = null) : /\bSRWare Iron\b/.test(F) && !L && (L = z("Chrome")), L && 0 == L.indexOf(o = /[\d.]+$/.exec(Y)) && t.indexOf("/" + o + "-") > -1 && (Y = v(Y.replace(o, ""))), Y && -1 != Y.indexOf(F) && !RegExp(F + " OS").test(Y) && (Y = Y.replace(RegExp(" *" + _(F) + " *"), "")), P && !/\b(?:Avant|Nook)\b/.test(F) && (/Browser|Lunascape|Maxthon/.test(F) || "Safari" != F && /^iOS/.test(Y) && /\bSafari\b/.test(P[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(F) && P[1]) && (o = P[P.length - 1]) && R.push(o), R.length && (R = ["(" + R.join("; ") + ")"]), U && B && 0 > B.indexOf(U) && R.push("on " + U), B && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + B), Y && (s = (o = / ([\d.+]+)$/.exec(Y)) && "/" == Y.charAt(Y.length - o[0].length - 1), Y = {
                architecture: 32,
                family: o && !s ? Y.replace(o[0], "") : Y,
                version: o ? o[1] : null,
                toString: function() {
                    var e = this.version;
                    return this.family + (e && !s ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }), (o = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(k)) && !/\bi686\b/i.test(k) ? (Y && (Y.architecture = 64, Y.family = Y.family.replace(RegExp(" *" + o), "")), F && (/\bWOW64\b/i.test(t) || I && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(t)) && R.unshift("32-bit")) : Y && /^OS X/.test(Y.family) && "Chrome" == F && parseFloat(L) >= 39 && (Y.architecture = 64), t || (t = null);
            var H = {};
            return H.description = t, H.layout = P && P[0], H.manufacturer = U, H.name = F, H.prerelease = N, H.product = B, H.ua = t, H.version = F && L, H.os = Y || {
                architecture: null,
                family: null,
                version: null,
                toString: function() {
                    return "null"
                }
            }, H.parse = e, H.toString = function() {
                return this.description || ""
            }, H.version && R.unshift(L), H.name && R.unshift(F), Y && F && !(Y == String(Y).split(" ")[0] && (Y == F.split(" ")[0] || B)) && R.push(B ? "(" + Y + ")" : "on " + Y), R.length && (H.description = R.join(" ")), H
        }();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (i.platform = y, define(function() {
            return y
        })) : a && o ? m(y, function(e, t) {
            a[t] = e
        }) : i.platform = y
    }).call(this)
}