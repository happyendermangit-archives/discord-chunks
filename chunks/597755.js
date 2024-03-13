function(e, t, n) {
    e = n.nmd(e), n("781738"), n("424973"), n("843762"), (function() {
        "use strict";
        var r = {
                function: !0,
                object: !0
            },
            i = r[typeof window] && window || this,
            o = r[typeof t] && t,
            s = r[typeof e] && e && !e.nodeType && e,
            a = o && s && "object" == typeof n.g && n.g;
        a && (a.global === a || a.window === a || a.self === a) && (i = a);
        var c = 9007199254740991,
            u = /\bOpera/,
            d = Object.prototype,
            l = d.hasOwnProperty,
            f = d.toString;

        function p(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
        }

        function h(e) {
            return e = y(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : p(e)
        }

        function v(e, t) {
            for (var n in e) l.call(e, n) && t(e[n], n, e)
        }

        function g(e) {
            return null == e ? p(e) : f.call(e).slice(8, -1)
        }

        function b(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?")
        }

        function m(e, t) {
            var n = null;
            return ! function(e, t) {
                var n = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof r && r > -1 && r <= c)
                    for (; ++n < r;) t(e[n], n, e);
                else v(e, t)
            }(e, function(r, i) {
                n = t(n, r, i, e)
            }), n
        }

        function y(e) {
            return String(e).replace(/^ +| +$/g, "")
        }
        var x = function e(t) {
            var n, r, o, s, a, c = i,
                d = t && "object" == typeof t && "String" != g(t);
            d && (c = t, t = null);
            var l = c.navigator || {},
                p = l.userAgent || "";
            t || (t = p);
            var x = d ? !!l.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(f.toString()),
                w = "Object",
                S = d ? w : "ScriptBridgingProxyObject",
                k = d ? w : "Environment",
                E = d && c.java ? "JavaPackage" : g(c.java),
                _ = d ? w : "RuntimeObject",
                M = /\bJava/.test(E) && c.java,
                D = M && g(c.environment) == k,
                C = c.document || {},
                P = c.operamini || c.opera,
                T = u.test(T = d && P ? P["[[Class]]"] : g(P)) ? T : P = null,
                A = t,
                R = [],
                I = null,
                O = t == p,
                j = O && P && "function" == typeof P.version && P.version(),
                L = function(e) {
                    return m(e, function(e, n) {
                        return e || RegExp("\\b" + (n.pattern || b(n)) + "\\b", "i").exec(t) && (n.label || n)
                    })
                }([{
                    label: "EdgeHTML",
                    pattern: "Edge"
                }, "Trident", {
                    label: "WebKit",
                    pattern: "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                N = function(e) {
                    return m(e, function(e, n) {
                        return e || RegExp("\\b" + (n.pattern || b(n)) + "\\b", "i").exec(t) && (n.label || n)
                    })
                }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
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
                F = K([{
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
                B = function(e) {
                    return m(e, function(e, n, r) {
                        return e || (n[F] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] || RegExp("\\b" + b(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
                    })
                }({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1
                    },
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
                    Samsung: {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1
                    },
                    Sony: {
                        PlayStation: 1,
                        "PlayStation Vita": 1
                    }
                }),
                z = function(e) {
                    return m(e, function(e, n) {
                        var r, i, o, s, a = n.pattern || b(n);
                        if (!e && (e = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t))) {
                            ;
                            r = e, i = a, o = n.label || n, s = {
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
                            }, i && o && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (s = s[/[\d.]+$/.exec(r)]) && (r = "Windows " + s), r = String(r), i && o && (r = r.replace(RegExp(i, "i"), o)), e = r = h(r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                        }
                        return e
                    })
                }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

            function K(e) {
                return m(e, function(e, n) {
                    var r = n.pattern || b(n);
                    return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = h(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                })
            }
            if (L && (L = [L]), B && !F && (F = K([B])), (s = /\bGoogle TV\b/.exec(F)) && (F = s[0]), /\bSimulator\b/i.test(t) && (F = (F ? F + " " : "") + "Simulator"), "Opera Mini" == N && /\bOPiOS\b/.test(t) && R.push("running in Turbo/Uncompressed mode"), "IE" == N && /\blike iPhone OS\b/.test(t) ? (B = (s = e(t.replace(/like iPhone OS/, ""))).manufacturer, F = s.product) : /^iP/.test(F) ? (N || (N = "Safari"), z = "iOS" + ((s = / OS ([\d_]+)/i.exec(t)) ? " " + s[1].replace(/_/g, ".") : "")) : "Konqueror" != N || /buntu/i.test(z) ? B && "Google" != B && (/Chrome/.test(N) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(F)) || /\bAndroid\b/.test(z) && /^Chrome/.test(N) && /\bVersion\//i.test(t) ? (N = "Android Browser", z = /\bAndroid\b/.test(z) ? z : "Android") : "Silk" == N ? (!/\bMobi/i.test(t) && (z = "Android", R.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && R.unshift("accelerated")) : "PaleMoon" == N && (s = /\bFirefox\/([\d.]+)\b/.exec(t)) ? R.push("identifying as Firefox " + s[1]) : "Firefox" == N && (s = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (z || (z = "Firefox OS"), F || (F = s[1])) : !N || (s = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(N)) ? (N && !F && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(s + "/") + 8)) && (N = null), (s = F || B || z) && (F || B || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(z)) && (N = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(z) ? z : s) + " Browser")) : "Electron" == N && (s = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && R.push("Chromium " + s) : z = "Kubuntu", !j) j = m(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", b(N), "(?:Firefox|Minefield|NetFront)"], function(e, n) {
                return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
            });
            if ((s = "iCab" == L && parseFloat(j) > 3 && "WebKit" || /\bOpera\b/.test(N) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(L) && "WebKit" || !L && /\bMSIE\b/i.test(t) && ("Mac OS" == z ? "Tasman" : "Trident") || "WebKit" == L && /\bPlayStation\b(?! Vita\b)/i.test(N) && "NetFront") && (L = [s]), "IE" == N && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (N += " Mobile", z = "Windows Phone " + (/\+$/.test(s) ? s : s + ".x"), R.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (N = "IE Mobile", z = "Windows Phone 8.x", R.unshift("desktop mode"), j || (j = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != N && "Trident" == L && (s = /\brv:([\d.]+)/.exec(t)) && (N && R.push("identifying as " + N + (j ? " " + j : "")), N = "IE", j = s[1]), O) {
                ;
                if (r = "global", o = null != (n = c) ? typeof n[r] : "number", /^(?:boolean|number|string|undefined)$/.test(o) || "object" == o && !n[r]) g(s = c.runtime) == S ? (N = "Adobe AIR", z = s.flash.system.Capabilities.os) : g(s = c.phantom) == _ ? (N = "PhantomJS", j = (s = s.version || null) && s.major + "." + s.minor + "." + s.patch) : "number" == typeof C.documentMode && (s = /\bTrident\/(\d+)/i.exec(t)) ? (j = [j, C.documentMode], (s = +s[1] + 4) != j[1] && (R.push("IE " + j[1] + " mode"), L && (L[1] = ""), j[1] = s), j = "IE" == N ? String(j[1].toFixed(1)) : j[0]) : "number" == typeof C.documentMode && /^(?:Chrome|Firefox)\b/.test(N) && (R.push("masking as " + N + " " + j), N = "IE", j = "11.0", L = ["Trident"], z = "Windows");
                else if (M && (A = (s = M.lang.System).getProperty("os.arch"), z = z || s.getProperty("os.name") + " " + s.getProperty("os.version")), D) {
                    try {
                        j = c.require("ringo/engine").version.join("."), N = "RingoJS"
                    } catch (e) {
                        (s = c.system) && s.global.system == c.system && (N = "Narwhal", z || (z = s[0].os || null))
                    }!N && (N = "Rhino")
                } else "object" == typeof c.process && !c.process.browser && (s = c.process) && ("object" == typeof s.versions && ("string" == typeof s.versions.electron ? (R.push("Node " + s.versions.node), N = "Electron", j = s.versions.electron) : "string" == typeof s.versions.nw && (R.push("Chromium " + j, "Node " + s.versions.node), N = "NW.js", j = s.versions.nw)), !N && (N = "Node.js", A = s.arch, z = s.platform, j = (j = /[\d.]+/.exec(s.version)) ? j[0] : null));
                z = z && h(z)
            }
            if (j && (s = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(j) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (O && l.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (I = /b/i.test(s) ? "beta" : "alpha", j = j.replace(RegExp(s + "\\+?$"), "") + ("beta" == I ? M ? "b" : "β" : M ? "a" : "α") + (/\d+\+?/.exec(s) || "")), "Fennec" == N || "Firefox" == N && /\b(?:Android|Firefox OS)\b/.test(z)) N = "Firefox Mobile";
            else if ("Maxthon" == N && j) j = j.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(F)) "Xbox 360" == F && (z = null), "Xbox 360" == F && /\bIEMobile\b/.test(t) && R.unshift("mobile mode");
            else if ((/^(?:Chrome|IE|Opera)$/.test(N) || N && !F && !/Browser|Mobi/.test(N)) && ("Windows CE" == z || /Mobi/i.test(t))) N += " Mobile";
            else if ("IE" == N && O) try {
                null === c.external && R.unshift("platform preview")
            } catch (e) {
                R.unshift("embedded")
            } else(/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(t)) && (s = (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || j) ? (z = ((s = [s, /BB10/.test(t)])[1] ? (F = null, B = "BlackBerry") : "Device Software") + " " + s[0], j = null) : this != v && "Wii" != F && (O && P || /Opera/.test(N) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == N && /\bOS X (?:\d+\.){2,}/.test(z) || "IE" == N && (z && !/^Win/.test(z) && j > 5.5 || /\bWindows XP\b/.test(z) && j > 8 || 8 == j && !/\bTrident\b/.test(t))) && !u.test(s = e.call(v, t.replace(u, "") + ";")) && s.name && (s = "ing as " + s.name + ((s = s.version) ? " " + s : ""), u.test(N) ? (/\bIE\b/.test(s) && "Mac OS" == z && (z = null), s = "identify" + s) : (s = "mask" + s, N = T ? h(T.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(s) && (z = null), !O && (j = null)), L = ["Presto"], R.push(s));
            (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (s = [parseFloat(s.replace(/\.(\d)$/, ".0$1")), s], "Safari" == N && "+" == s[1].slice(-1) ? (N = "WebKit Nightly", I = "alpha", j = s[1].slice(0, -1)) : (j == s[1] || j == (s[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) && (j = null), s[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == s[0] && 537.36 == s[2] && parseFloat(s[1]) >= 28 && "WebKit" == L && (L = ["Blink"]), O && (x || s[1]) ? (L && (L[1] = "like Chrome"), s = s[1] || ((s = s[0]) < 530 ? 1 : s < 532 ? 2 : s < 532.05 ? 3 : s < 533 ? 4 : s < 534.03 ? 5 : s < 534.07 ? 6 : s < 534.1 ? 7 : s < 534.13 ? 8 : s < 534.16 ? 9 : s < 534.24 ? 10 : s < 534.3 ? 11 : s < 535.01 ? 12 : s < 535.02 ? "13+" : s < 535.07 ? 15 : s < 535.11 ? 16 : s < 535.19 ? 17 : s < 536.05 ? 18 : s < 536.1 ? 19 : s < 537.01 ? 20 : s < 537.11 ? "21+" : s < 537.13 ? 23 : s < 537.18 ? 24 : s < 537.24 ? 25 : s < 537.36 ? 26 : "Blink" != L ? "27" : "28")) : (L && (L[1] = "like Safari"), s = (s = s[0]) < 400 ? 1 : s < 500 ? 2 : s < 526 ? 3 : s < 533 ? 4 : s < 534 ? "4+" : s < 535 ? 5 : s < 537 ? 6 : s < 538 ? 7 : s < 601 ? 8 : "8"), L && (L[1] += " " + (s += "number" == typeof s ? ".x" : /[.+]/.test(s) ? "" : "+")), "Safari" == N && (!j || parseInt(j) > 45) && (j = s)), "Opera" == N && (s = /\bzbov|zvav$/.exec(z)) ? (N += " ", R.unshift("desktop mode"), "zvav" == s ? (N += "Mini", j = null) : N += "Mobile", z = z.replace(RegExp(" *" + s + "$"), "")) : "Safari" == N && /\bChrome\b/.exec(L && L[1]) && (R.unshift("desktop mode"), N = "Chrome Mobile", j = null, /\bOS X\b/.test(z) ? (B = "Apple", z = "iOS 4.3+") : z = null), j && 0 == j.indexOf(s = /[\d.]+$/.exec(z)) && t.indexOf("/" + s + "-") > -1 && (z = y(z.replace(s, ""))), L && !/\b(?:Avant|Nook)\b/.test(N) && (/Browser|Lunascape|Maxthon/.test(N) || "Safari" != N && /^iOS/.test(z) && /\bSafari\b/.test(L[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(N) && L[1]) && (s = L[L.length - 1]) && R.push(s), R.length && (R = ["(" + R.join("; ") + ")"]), B && F && 0 > F.indexOf(B) && R.push("on " + B), F && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + F), z && (a = (s = / ([\d.+]+)$/.exec(z)) && "/" == z.charAt(z.length - s[0].length - 1), z = {
                architecture: 32,
                family: s && !a ? z.replace(s[0], "") : z,
                version: s ? s[1] : null,
                toString: function() {
                    var e = this.version;
                    return this.family + (e && !a ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }), (s = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(A)) && !/\bi686\b/i.test(A) ? (z && (z.architecture = 64, z.family = z.family.replace(RegExp(" *" + s), "")), N && (/\bWOW64\b/i.test(t) || O && /\w(?:86|32)$/.test(l.cpuClass || l.platform) && !/\bWin64; x64\b/i.test(t)) && R.unshift("32-bit")) : z && /^OS X/.test(z.family) && "Chrome" == N && parseFloat(j) >= 39 && (z.architecture = 64), t || (t = null);
            var V = {};
            return V.description = t, V.layout = L && L[0], V.manufacturer = B, V.name = N, V.prerelease = I, V.product = F, V.ua = t, V.version = N && j, V.os = z || {
                architecture: null,
                family: null,
                version: null,
                toString: function() {
                    return "null"
                }
            }, V.parse = e, V.toString = function() {
                return this.description || ""
            }, V.version && R.unshift(j), V.name && R.unshift(N), z && N && !(z == String(z).split(" ")[0] && (z == N.split(" ")[0] || F)) && R.push(F ? "(" + z + ")" : "on " + z), R.length && (V.description = R.join(" ")), V
        }();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (i.platform = x, define(function() {
            return x
        })) : o && s ? v(x, function(e, t) {
            o[t] = e
        }) : i.platform = x
    }).call(this)
}