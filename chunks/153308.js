function(e, t, n) {
    "use strict";
    n("424973"), n("843762"), n("781738"), n("70102");
    var r = n("10614"),
        a = n("6028"),
        o, Intl = {},
        i = function() {
            var e = {};
            try {
                return Object.defineProperty(e, "a", {}), "a" in e
            } catch (e) {
                return !1
            }
        }(),
        s = !i && !Object.prototype.__defineGetter__,
        u = Object.prototype.hasOwnProperty,
        l = i ? Object.defineProperty : function(e, t, n) {
            "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!u.call(e, t) || "value" in n) && (e[t] = n.value)
        },
        c = Array.prototype.indexOf || function(e) {
            if (!this.length) return -1;
            for (var t = arguments[1] || 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        d = Object.create || function(e, t) {
            var n;

            function r() {}
            for (var a in r.prototype = e, n = new r, t) u.call(t, a) && l(n, a, t[a]);
            return n
        },
        f = Array.prototype.slice,
        p = Array.prototype.concat,
        m = Array.prototype.push,
        h = Array.prototype.join,
        y = Array.prototype.shift,
        _ = (Array.prototype.unshift, Function.prototype.bind || function(e) {
            var t = this,
                n = f.call(arguments, 1);
            return 1 === t.length ? function(r) {
                return t.apply(e, p.call(n, f.call(arguments)))
            } : function() {
                return t.apply(e, p.call(n, f.call(arguments)))
            }
        }),
        g = d(null),
        v = Math.random(),
        b = d(null, {
            narrow: {},
            short: {},
            long: {}
        }),
        M = !1,
        w = !1,
        k = /^[A-Z]{3}$/,
        L = /-u(?:-[0-9a-z]{2,8})+/gi,
        D = {
            tags: {
                "art-lojban": "jbo",
                "i-ami": "ami",
                "i-bnn": "bnn",
                "i-hak": "hak",
                "i-klingon": "tlh",
                "i-lux": "lb",
                "i-navajo": "nv",
                "i-pwn": "pwn",
                "i-tao": "tao",
                "i-tay": "tay",
                "i-tsu": "tsu",
                "no-bok": "nb",
                "no-nyn": "nn",
                "sgn-BE-FR": "sfb",
                "sgn-BE-NL": "vgt",
                "sgn-CH-DE": "sgg",
                "zh-guoyu": "cmn",
                "zh-hakka": "hak",
                "zh-min-nan": "nan",
                "zh-xiang": "hsn",
                "sgn-BR": "bzs",
                "sgn-CO": "csn",
                "sgn-DE": "gsg",
                "sgn-DK": "dsl",
                "sgn-ES": "ssp",
                "sgn-FR": "fsl",
                "sgn-GB": "bfi",
                "sgn-GR": "gss",
                "sgn-IE": "isg",
                "sgn-IT": "ise",
                "sgn-JP": "jsl",
                "sgn-MX": "mfs",
                "sgn-NI": "ncs",
                "sgn-NL": "dse",
                "sgn-NO": "nsl",
                "sgn-PT": "psr",
                "sgn-SE": "swl",
                "sgn-US": "ase",
                "sgn-ZA": "sfs",
                "zh-cmn": "cmn",
                "zh-cmn-Hans": "cmn-Hans",
                "zh-cmn-Hant": "cmn-Hant",
                "zh-gan": "gan",
                "zh-wuu": "wuu",
                "zh-yue": "yue"
            },
            subtags: {
                BU: "MM",
                DD: "DE",
                FX: "FR",
                TP: "TL",
                YD: "YE",
                ZR: "CD",
                heploc: "alalc97",
                in: "id",
                iw: "he",
                ji: "yi",
                jw: "jv",
                mo: "ro",
                ayx: "nun",
                bjd: "drl",
                ccq: "rki",
                cjr: "mom",
                cka: "cmr",
                cmk: "xch",
                drh: "khk",
                drw: "prs",
                gav: "dev",
                hrr: "jal",
                ibi: "opa",
                kgh: "kml",
                lcq: "ppr",
                mst: "mry",
                myt: "mry",
                sca: "hle",
                tie: "ras",
                tkk: "twm",
                tlw: "weo",
                tnf: "prs",
                ybd: "rki",
                yma: "lrr"
            },
            extLang: {
                aao: ["aao", "ar"],
                abh: ["abh", "ar"],
                abv: ["abv", "ar"],
                acm: ["acm", "ar"],
                acq: ["acq", "ar"],
                acw: ["acw", "ar"],
                acx: ["acx", "ar"],
                acy: ["acy", "ar"],
                adf: ["adf", "ar"],
                ads: ["ads", "sgn"],
                aeb: ["aeb", "ar"],
                aec: ["aec", "ar"],
                aed: ["aed", "sgn"],
                aen: ["aen", "sgn"],
                afb: ["afb", "ar"],
                afg: ["afg", "sgn"],
                ajp: ["ajp", "ar"],
                apc: ["apc", "ar"],
                apd: ["apd", "ar"],
                arb: ["arb", "ar"],
                arq: ["arq", "ar"],
                ars: ["ars", "ar"],
                ary: ["ary", "ar"],
                arz: ["arz", "ar"],
                ase: ["ase", "sgn"],
                asf: ["asf", "sgn"],
                asp: ["asp", "sgn"],
                asq: ["asq", "sgn"],
                asw: ["asw", "sgn"],
                auz: ["auz", "ar"],
                avl: ["avl", "ar"],
                ayh: ["ayh", "ar"],
                ayl: ["ayl", "ar"],
                ayn: ["ayn", "ar"],
                ayp: ["ayp", "ar"],
                bbz: ["bbz", "ar"],
                bfi: ["bfi", "sgn"],
                bfk: ["bfk", "sgn"],
                bjn: ["bjn", "ms"],
                bog: ["bog", "sgn"],
                bqn: ["bqn", "sgn"],
                bqy: ["bqy", "sgn"],
                btj: ["btj", "ms"],
                bve: ["bve", "ms"],
                bvl: ["bvl", "sgn"],
                bvu: ["bvu", "ms"],
                bzs: ["bzs", "sgn"],
                cdo: ["cdo", "zh"],
                cds: ["cds", "sgn"],
                cjy: ["cjy", "zh"],
                cmn: ["cmn", "zh"],
                coa: ["coa", "ms"],
                cpx: ["cpx", "zh"],
                csc: ["csc", "sgn"],
                csd: ["csd", "sgn"],
                cse: ["cse", "sgn"],
                csf: ["csf", "sgn"],
                csg: ["csg", "sgn"],
                csl: ["csl", "sgn"],
                csn: ["csn", "sgn"],
                csq: ["csq", "sgn"],
                csr: ["csr", "sgn"],
                czh: ["czh", "zh"],
                czo: ["czo", "zh"],
                doq: ["doq", "sgn"],
                dse: ["dse", "sgn"],
                dsl: ["dsl", "sgn"],
                dup: ["dup", "ms"],
                ecs: ["ecs", "sgn"],
                esl: ["esl", "sgn"],
                esn: ["esn", "sgn"],
                eso: ["eso", "sgn"],
                eth: ["eth", "sgn"],
                fcs: ["fcs", "sgn"],
                fse: ["fse", "sgn"],
                fsl: ["fsl", "sgn"],
                fss: ["fss", "sgn"],
                gan: ["gan", "zh"],
                gds: ["gds", "sgn"],
                gom: ["gom", "kok"],
                gse: ["gse", "sgn"],
                gsg: ["gsg", "sgn"],
                gsm: ["gsm", "sgn"],
                gss: ["gss", "sgn"],
                gus: ["gus", "sgn"],
                hab: ["hab", "sgn"],
                haf: ["haf", "sgn"],
                hak: ["hak", "zh"],
                hds: ["hds", "sgn"],
                hji: ["hji", "ms"],
                hks: ["hks", "sgn"],
                hos: ["hos", "sgn"],
                hps: ["hps", "sgn"],
                hsh: ["hsh", "sgn"],
                hsl: ["hsl", "sgn"],
                hsn: ["hsn", "zh"],
                icl: ["icl", "sgn"],
                ils: ["ils", "sgn"],
                inl: ["inl", "sgn"],
                ins: ["ins", "sgn"],
                ise: ["ise", "sgn"],
                isg: ["isg", "sgn"],
                isr: ["isr", "sgn"],
                jak: ["jak", "ms"],
                jax: ["jax", "ms"],
                jcs: ["jcs", "sgn"],
                jhs: ["jhs", "sgn"],
                jls: ["jls", "sgn"],
                jos: ["jos", "sgn"],
                jsl: ["jsl", "sgn"],
                jus: ["jus", "sgn"],
                kgi: ["kgi", "sgn"],
                knn: ["knn", "kok"],
                kvb: ["kvb", "ms"],
                kvk: ["kvk", "sgn"],
                kvr: ["kvr", "ms"],
                kxd: ["kxd", "ms"],
                lbs: ["lbs", "sgn"],
                lce: ["lce", "ms"],
                lcf: ["lcf", "ms"],
                liw: ["liw", "ms"],
                lls: ["lls", "sgn"],
                lsg: ["lsg", "sgn"],
                lsl: ["lsl", "sgn"],
                lso: ["lso", "sgn"],
                lsp: ["lsp", "sgn"],
                lst: ["lst", "sgn"],
                lsy: ["lsy", "sgn"],
                ltg: ["ltg", "lv"],
                lvs: ["lvs", "lv"],
                lzh: ["lzh", "zh"],
                max: ["max", "ms"],
                mdl: ["mdl", "sgn"],
                meo: ["meo", "ms"],
                mfa: ["mfa", "ms"],
                mfb: ["mfb", "ms"],
                mfs: ["mfs", "sgn"],
                min: ["min", "ms"],
                mnp: ["mnp", "zh"],
                mqg: ["mqg", "ms"],
                mre: ["mre", "sgn"],
                msd: ["msd", "sgn"],
                msi: ["msi", "ms"],
                msr: ["msr", "sgn"],
                mui: ["mui", "ms"],
                mzc: ["mzc", "sgn"],
                mzg: ["mzg", "sgn"],
                mzy: ["mzy", "sgn"],
                nan: ["nan", "zh"],
                nbs: ["nbs", "sgn"],
                ncs: ["ncs", "sgn"],
                nsi: ["nsi", "sgn"],
                nsl: ["nsl", "sgn"],
                nsp: ["nsp", "sgn"],
                nsr: ["nsr", "sgn"],
                nzs: ["nzs", "sgn"],
                okl: ["okl", "sgn"],
                orn: ["orn", "ms"],
                ors: ["ors", "ms"],
                pel: ["pel", "ms"],
                pga: ["pga", "ar"],
                pks: ["pks", "sgn"],
                prl: ["prl", "sgn"],
                prz: ["prz", "sgn"],
                psc: ["psc", "sgn"],
                psd: ["psd", "sgn"],
                pse: ["pse", "ms"],
                psg: ["psg", "sgn"],
                psl: ["psl", "sgn"],
                pso: ["pso", "sgn"],
                psp: ["psp", "sgn"],
                psr: ["psr", "sgn"],
                pys: ["pys", "sgn"],
                rms: ["rms", "sgn"],
                rsi: ["rsi", "sgn"],
                rsl: ["rsl", "sgn"],
                sdl: ["sdl", "sgn"],
                sfb: ["sfb", "sgn"],
                sfs: ["sfs", "sgn"],
                sgg: ["sgg", "sgn"],
                sgx: ["sgx", "sgn"],
                shu: ["shu", "ar"],
                slf: ["slf", "sgn"],
                sls: ["sls", "sgn"],
                sqk: ["sqk", "sgn"],
                sqs: ["sqs", "sgn"],
                ssh: ["ssh", "ar"],
                ssp: ["ssp", "sgn"],
                ssr: ["ssr", "sgn"],
                svk: ["svk", "sgn"],
                swc: ["swc", "sw"],
                swh: ["swh", "sw"],
                swl: ["swl", "sgn"],
                syy: ["syy", "sgn"],
                tmw: ["tmw", "ms"],
                tse: ["tse", "sgn"],
                tsm: ["tsm", "sgn"],
                tsq: ["tsq", "sgn"],
                tss: ["tss", "sgn"],
                tsy: ["tsy", "sgn"],
                tza: ["tza", "sgn"],
                ugn: ["ugn", "sgn"],
                ugy: ["ugy", "sgn"],
                ukl: ["ukl", "sgn"],
                uks: ["uks", "sgn"],
                urk: ["urk", "ms"],
                uzn: ["uzn", "uz"],
                uzs: ["uzs", "uz"],
                vgt: ["vgt", "sgn"],
                vkk: ["vkk", "ms"],
                vkt: ["vkt", "ms"],
                vsi: ["vsi", "sgn"],
                vsl: ["vsl", "sgn"],
                vsv: ["vsv", "sgn"],
                wuu: ["wuu", "zh"],
                xki: ["xki", "sgn"],
                xml: ["xml", "sgn"],
                xmm: ["xmm", "ms"],
                xms: ["xms", "sgn"],
                yds: ["yds", "sgn"],
                ysl: ["ysl", "sgn"],
                yue: ["yue", "zh"],
                zib: ["zib", "sgn"],
                zlm: ["zlm", "ms"],
                zmi: ["zmi", "ms"],
                zsl: ["zsl", "sgn"],
                zsm: ["zsm", "ms"]
            }
        },
        T = {
            BHD: 3,
            BYR: 0,
            XOF: 0,
            BIF: 0,
            XAF: 0,
            CLF: 4,
            CLP: 0,
            KMF: 0,
            DJF: 0,
            XPF: 0,
            GNF: 0,
            ISK: 0,
            IQD: 3,
            JPY: 0,
            JOD: 3,
            KRW: 0,
            KWD: 3,
            LYD: 3,
            OMR: 3,
            PYG: 0,
            RWF: 0,
            TND: 3,
            UGX: 0,
            UYI: 0,
            VUV: 0,
            VND: 0
        };

    function S(e) {
        return !(!r.expBCP47Syntax.test(e) || r.expVariantDupes.test(e) || r.expSingletonDupes.test(e)) && !0
    }

    function Y(e) {
        if (void 0 === e) return new Q;
        for (var t = new Q, e = "string" == typeof e ? [e] : e, n = ee(e), a = n.length, o = 0; o < a;) {
            var i = String(o);
            if (i in n) {
                var s = n[i];
                if (null == s || "string" != typeof s && "object" != typeof s) throw TypeError("String or Object type expected");
                var l = String(s);
                if (!S(l)) throw RangeError("'" + l + "' is not a structurally valid language tag");
                l = function(e) {
                    var t, n;
                    n = (e = e.toLowerCase()).split("-");
                    for (var a = 1, o = n.length; a < o; a++)
                        if (2 === n[a].length) n[a] = n[a].toUpperCase();
                        else if (4 === n[a].length) n[a] = n[a].charAt(0).toUpperCase() + n[a].slice(1);
                    else if (1 === n[a].length && "x" !== n[a]) break;
                    (t = (e = h.call(n, "-")).match(r.expExtSequences)) && t.length > 1 && (t.sort(), e = e.replace(RegExp("(?:" + r.expExtSequences.source + ")+", "i"), h.call(t, ""))), u.call(D.tags, e) && (e = D.tags[e]), n = e.split("-");
                    for (var a = 1, o = n.length; a < o; a++) u.call(D.subtags, n[a]) ? n[a] = D.subtags[n[a]] : u.call(D.extLang, n[a]) && (n[a] = D.extLang[n[a]][0], 1 === a && D.extLang[n[1]][1] === n[0] && (n = f.call(n, a++), o -= 1));
                    return h.call(n, "-")
                }(l), -1 === c.call(t, l) && m.call(t, l)
            }
            o++
        }
        return t
    }

    function O(e, t) {
        for (var n = t;;) {
            if (c.call(e, n) > -1) return n;
            var r = n.lastIndexOf("-");
            if (r < 0) return;
            r >= 2 && "-" === n.charAt(r - 2) && (r -= 2), n = n.substring(0, r)
        }
    }

    function x(e, t) {
        for (var n, r = 0, a = t.length; r < a && !n;) {
            var i = t[r],
                s = String(i).replace(L, ""),
                n = O(e, s);
            r++
        }
        var u = new $;
        if (void 0 !== n) {
            if (u["[[locale]]"] = n, String(i) !== String(s)) {
                var l = i.match(L)[0],
                    c = i.indexOf("-u-");
                u["[[extension]]"] = l, u["[[extensionIndex]]"] = c
            }
        } else u["[[locale]]"] = o;
        return u
    }

    function E(e, t, n, r, a) {
        if (0 === e.length) throw ReferenceError("No locale data has been provided for this object yet.");
        if ("lookup" === n["[[localeMatcher]]"]) var o = x(e, t);
        else var o = x(e, t);
        var i = o["[[locale]]"];
        if (u.call(o, "[[extension]]")) var s = o["[[extension]]"],
            l = o["[[extensionIndex]]"],
            d = String.prototype.split,
            f = d.call(s, "-"),
            p = f.length;
        var m = new $;
        m["[[dataLocale]]"] = i;
        for (var h = "-u", y = 0, _ = r.length; y < _;) {
            var g = r[y],
                v = a[i][g],
                b = v["0"],
                M = "";
            if (void 0 !== f) {
                var w = c.call(f, g);
                if (-1 !== w) {
                    if (w + 1 < p && f[w + 1].length > 2) {
                        var k = f[w + 1],
                            L = c.call(v, k);
                        if (-1 !== L) var b = k,
                            M = "-" + g + "-" + b
                    } else {
                        var L = c(v, "true");
                        if (-1 !== L) var b = "true"
                    }
                }
            }
            if (u.call(n, "[[" + g + "]]")) {
                var D = n["[[" + g + "]]"]; - 1 !== c.call(v, D) && D !== b && (b = D, M = "")
            }
            m["[[" + g + "]]"] = b, h += M, y++
        }
        if (h.length > 2) var T = i.substring(0, l),
            S = i.substring(l),
            i = T + h + S;
        return m["[[locale]]"] = i, m
    }

    function P(e, t) {
        for (var n = t.length, r = new Q, a = 0; a < n;) {
            var o = t[a];
            void 0 !== O(e, String(o).replace(L, "")) && m.call(r, o), a++
        }
        return f.call(r)
    }

    function j(e, t, n, r, a) {
        var o = e[t];
        if (void 0 !== o) {
            if (o = "boolean" === n ? !!o : "string" === n ? String(o) : o, void 0 !== r && -1 === c.call(r, o)) throw RangeError("'" + o + "' is not an allowed value for `" + t + "`");
            return o
        }
        return a
    }

    function C(e, t, n, r, a) {
        var o = e[t];
        if (void 0 !== o) {
            if (isNaN(o = Number(o)) || o < n || o > r) throw RangeError("Value is not a number or outside accepted range");
            return Math.floor(o)
        }
        return a
    }

    function H() {
        var e = arguments[0],
            t = arguments[1];
        return this && this !== Intl ? F(ee(this), e, t) : new Intl.NumberFormat(e, t)
    }

    function F(e, t, n) {
        var r, a = et(e),
            o = X();
        if (!0 === a["[[initializedIntlObject]]"]) throw TypeError("`this` object has already been initialized as an Intl object");
        l(e, "__getInternalProperties", {
            value: function() {
                if (arguments[0] === v) return a
            }
        }), a["[[initializedIntlObject]]"] = !0;
        var i = Y(t);
        n = void 0 === n ? {} : ee(n);
        var u = new $,
            c = j(n, "localeMatcher", "string", new Q("lookup", "best fit"), "best fit");
        u["[[localeMatcher]]"] = c;
        var d = g.NumberFormat["[[localeData]]"],
            f = E(g.NumberFormat["[[availableLocales]]"], i, u, g.NumberFormat["[[relevantExtensionKeys]]"], d);
        a["[[locale]]"] = f["[[locale]]"], a["[[numberingSystem]]"] = f["[[nu]]"], a["[[dataLocale]]"] = f["[[dataLocale]]"];
        var p = f["[[dataLocale]]"],
            m = j(n, "style", "string", new Q("decimal", "percent", "currency"), "decimal");
        a["[[style]]"] = m;
        var h = j(n, "currency", "string");
        if (void 0 !== h && (r = Z(String(h)), !1 === k.test(r))) throw RangeError("'" + h + "' is not a valid currency code");
        if ("currency" === m && void 0 === h) throw TypeError("Currency code is required when style is currency");
        if ("currency" === m) {
            h = h.toUpperCase(), a["[[currency]]"] = h;
            var y = function(e) {
                return void 0 !== T[e] ? T[e] : 2
            }(h)
        }
        var _ = j(n, "currencyDisplay", "string", new Q("code", "symbol", "name"), "symbol");
        "currency" === m && (a["[[currencyDisplay]]"] = _);
        var b = C(n, "minimumIntegerDigits", 1, 21, 1);
        a["[[minimumIntegerDigits]]"] = b;
        var M = C(n, "minimumFractionDigits", 0, 20, "currency" === m ? y : 0);
        a["[[minimumFractionDigits]]"] = M;
        var w = "currency" === m ? Math.max(M, y) : "percent" === m ? Math.max(M, 0) : Math.max(M, 3),
            L = C(n, "maximumFractionDigits", M, 20, w);
        a["[[maximumFractionDigits]]"] = L;
        var D = n.minimumSignificantDigits,
            S = n.maximumSignificantDigits;
        (void 0 !== D || void 0 !== S) && (D = C(n, "minimumSignificantDigits", 1, 21, 1), S = C(n, "maximumSignificantDigits", D, 21, 21), a["[[minimumSignificantDigits]]"] = D, a["[[maximumSignificantDigits]]"] = S);
        var O = j(n, "useGrouping", "boolean", void 0, !0);
        a["[[useGrouping]]"] = O;
        var x = d[p].patterns[m];
        return a["[[positivePattern]]"] = x.positivePattern, a["[[negativePattern]]"] = x.negativePattern, a["[[boundFormat]]"] = void 0, a["[[initializedNumberFormat]]"] = !0, s && (e.format = A.call(e)), o.exp.test(o.input), e
    }
    l(Intl, "NumberFormat", {
        configurable: !0,
        writable: !0,
        value: H
    }), l(Intl.NumberFormat, "prototype", {
        writable: !1
    });

    function A() {
        var e = this != null && "object" == typeof this && et(this);
        if (!e || !e["[[initializedNumberFormat]]"]) throw TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var t = _.call(function(e) {
                return I(this, Number(e))
            }, this);
            e["[[boundFormat]]"] = t
        }
        return e["[[boundFormat]]"]
    }

    function I(e, t) {
        var n, r = X(),
            a = et(e),
            o = a["[[dataLocale]]"],
            i = a["[[numberingSystem]]"],
            s = g.NumberFormat["[[localeData]]"][o],
            l = s.symbols[i] || s.symbols.latn,
            c = !1;
        if (!1 === isFinite(t)) isNaN(t) ? n = l.nan : (n = l.infinity, t < 0 && (c = !0));
        else {
            if (t < 0 && (c = !0, t = -t), "percent" === a["[[style]]"] && (t *= 100), n = u.call(a, "[[minimumSignificantDigits]]") && u.call(a, "[[maximumSignificantDigits]]") ? function(e, t, n) {
                    if (0 === e) var r = h.call(Array(n + 1), "0"),
                        a = 0;
                    else var a = function(e) {
                            if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
                            var t = Math.round(Math.log(e) * Math.LOG10E);
                            return t - (Number("1e" + t) > e)
                        }(Math.abs(e)),
                        o = Math.round(Math.exp(Math.abs(a - n + 1) * Math.LN10)),
                        r = String(Math.round(a - n + 1 < 0 ? e * o : e / o));
                    if (a >= n) return r + h.call(Array(a - n + 1 + 1), "0");
                    if (a === n - 1) return r;
                    a >= 0 ? r = r.slice(0, a + 1) + "." + r.slice(a + 1) : a < 0 && (r = "0." + h.call(Array(-(a + 1) + 1), "0") + r);
                    if (r.indexOf(".") >= 0 && n > t) {
                        for (var i = n - t; i > 0 && "0" === r.charAt(r.length - 1);) r = r.slice(0, -1), i--;
                        "." === r.charAt(r.length - 1) && (r = r.slice(0, -1))
                    }
                    return r
                }(t, a["[[minimumSignificantDigits]]"], a["[[maximumSignificantDigits]]"]) : function(e, t, n, r) {
                    var a, o = Number.prototype.toFixed.call(e, r),
                        i = o.split(".")[0].length,
                        s = r - n,
                        u = (a = o.indexOf("e")) > -1 ? o.slice(a + 1) : 0;
                    for (u && (o = o.slice(0, a).replace(".", ""), o += h.call(Array(u - (o.length - 1) + 1), "0") + "." + h.call(Array(r + 1), "0"), i = o.length); s > 0 && "0" === o.slice(-1);) o = o.slice(0, -1), s--;
                    if ("." === o.slice(-1) && (o = o.slice(0, -1)), i < t) var l = h.call(Array(t - i + 1), "0");
                    return (l || "") + o
                }(t, a["[[minimumIntegerDigits]]"], a["[[minimumFractionDigits]]"], a["[[maximumFractionDigits]]"]), N[i]) {
                var d = N[a["[[numberingSystem]]"]];
                n = String(n).replace(/\d/g, function(e) {
                    return d[e]
                })
            } else n = String(n);
            if (n = n.replace(/\./g, l.decimal), !0 === a["[[useGrouping]]"]) {
                var f = n.split(l.decimal),
                    p = f[0],
                    y = s.patterns.primaryGroupSize || 3,
                    _ = s.patterns.secondaryGroupSize || y;
                if (p.length > y) {
                    var v = new Q,
                        b = p.length - y,
                        M = b % _,
                        w = p.slice(0, M);
                    for (w.length && m.call(v, w); M < b;) m.call(v, p.slice(M, M + _)), M += _;
                    m.call(v, p.slice(b)), f[0] = h.call(v, l.group)
                }
                n = h.call(f, l.decimal)
            }
        }
        var k = a[!0 === c ? "[[negativePattern]]" : "[[positivePattern]]"];
        if (k = k.replace("{number}", n), "currency" === a["[[style]]"]) {
            var L, D = a["[[currency]]"],
                T = s.currencies[D];
            if ("symbol" === a["[[currencyDisplay]]"]) L = T || D;
            else L = D;
            k = k.replace("{currency}", L)
        }
        return r.exp.test(r.input), k
    }
    g.NumberFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["nu"],
        "[[localeData]]": {}
    }, l(Intl.NumberFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: _.call(q, g.NumberFormat)
    }), l(Intl.NumberFormat.prototype, "format", {
        configurable: !0,
        get: A
    });
    var N = {
        arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
        beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
        deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
        fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
        gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
        guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
        hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
        khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
        knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
        laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
        latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
        mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
        mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
        mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
        orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
        tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
        telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
        thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
        tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
    };

    function R() {
        var e = arguments[0],
            t = arguments[1];
        return this && this !== Intl ? z(ee(this), e, t) : new Intl.DateTimeFormat(e, t)
    }

    function z(e, t, n) {
        var r = et(e),
            o = X();
        if (!0 === r["[[initializedIntlObject]]"]) throw TypeError("`this` object has already been initialized as an Intl object");
        l(e, "__getInternalProperties", {
            value: function() {
                if (arguments[0] === v) return r
            }
        }), r["[[initializedIntlObject]]"] = !0;
        var i = Y(t),
            n = B(n, "any", "date"),
            c = new $;
        k = j(n, "localeMatcher", "string", new Q("lookup", "best fit"), "best fit"), c["[[localeMatcher]]"] = k;
        var d = g.DateTimeFormat,
            f = d["[[localeData]]"],
            p = E(d["[[availableLocales]]"], i, c, d["[[relevantExtensionKeys]]"], f);
        r["[[locale]]"] = p["[[locale]]"], r["[[calendar]]"] = p["[[ca]]"], r["[[numberingSystem]]"] = p["[[nu]]"], r["[[dataLocale]]"] = p["[[dataLocale]]"];
        var m = p["[[dataLocale]]"],
            h = n.timeZone;
        if (void 0 !== h && "UTC" !== (h = Z(h))) throw RangeError("timeZone is not supported.");
        for (var y in r["[[timeZone]]"] = h, c = new $, W)
            if (u.call(W, y)) {
                var _ = j(n, y, "string", W[y]);
                c["[[" + y + "]]"] = _
            } var b, M = f[m],
            w = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e) ? e : a.createDateTimeFormats(e)
            }(M.formats),
            k = j(n, "formatMatcher", "string", new Q("basic", "best fit"), "best fit");
        for (var y in M.formats = w, b = "basic" === k ? function(e, t) {
                return U(e, t)
            }(c, w) : function(e, t) {
                return U(e, t, !0)
            }(c, w), W)
            if (u.call(W, y) && u.call(b, y)) {
                var L = b[y];
                r["[[" + y + "]]"] = L
            } var D, T = j(n, "hour12", "boolean");
        if (r["[[hour]]"]) {
            if (T = void 0 === T ? M.hour12 : T, r["[[hour12]]"] = T, !0 === T) {
                var S = M.hourNo0;
                r["[[hourNo0]]"] = S, D = b.pattern12
            } else D = b.pattern
        } else D = b.pattern;
        return r["[[pattern]]"] = D, r["[[boundFormat]]"] = void 0, r["[[initializedDateTimeFormat]]"] = !0, s && (e.format = K.call(e)), o.exp.test(o.input), e
    }
    l(Intl.NumberFormat.prototype, "resolvedOptions", {
        configurable: !0,
        writable: !0,
        value: function() {
            var e, t = new $,
                n = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"],
                r = this != null && "object" == typeof this && et(this);
            if (!r || !r["[[initializedNumberFormat]]"]) throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
            for (var a = 0, o = n.length; a < o; a++) u.call(r, e = "[[" + n[a] + "]]") && (t[n[a]] = {
                value: r[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return d({}, t)
        }
    }), l(Intl, "DateTimeFormat", {
        configurable: !0,
        writable: !0,
        value: R
    }), l(R, "prototype", {
        writable: !1
    });
    var W = {
        weekday: ["narrow", "short", "long"],
        era: ["narrow", "short", "long"],
        year: ["2-digit", "numeric"],
        month: ["2-digit", "numeric", "narrow", "short", "long"],
        day: ["2-digit", "numeric"],
        hour: ["2-digit", "numeric"],
        minute: ["2-digit", "numeric"],
        second: ["2-digit", "numeric"],
        timeZoneName: ["short", "long"]
    };

    function B(e, t, n) {
        if (void 0 === e) e = null;
        else {
            var r = ee(e);
            for (var a in e = new $, r) e[a] = r[a]
        }
        var e = d(e),
            o = !0;
        return ("date" === t || "any" === t) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (o = !1), ("time" === t || "any" === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (o = !1), o && ("date" === n || "all" === n) && (e.year = e.month = e.day = "numeric"), o && ("time" === n || "all" === n) && (e.hour = e.minute = e.second = "numeric"), e
    }

    function U(e, t, n) {
        for (var r, a = -1 / 0, o = 0, i = t.length; o < i;) {
            var s = t[o],
                l = 0;
            for (var d in W)
                if (u.call(W, d)) {
                    var f = e["[[" + d + "]]"],
                        p = u.call(s, d) ? s[d] : void 0;
                    if (void 0 === f && void 0 !== p) l -= 20;
                    else if (void 0 !== f && void 0 === p) l -= 120;
                    else {
                        var m = ["2-digit", "numeric", "narrow", "short", "long"],
                            h = c.call(m, f),
                            y = Math.max(Math.min(c.call(m, p) - h, 2), -2);
                        n && (("numeric" === f || "2-digit" === f) && "numeric" !== p && "2-digit" !== p || "numeric" !== f && "2-digit" !== f && ("2-digit" === p || "numeric" === p)) && (l -= 8), 2 === y ? l -= 6 : 1 === y ? l -= 3 : -1 === y ? l -= 6 : -2 === y && (l -= 8)
                    }
                } l > a && (a = l, r = s), o++
        }
        return r
    }

    function K() {
        var e = this != null && "object" == typeof this && et(this);
        if (!e || !e["[[initializedDateTimeFormat]]"]) throw TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var t = _.call(function() {
                var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
                return V(this, e)
            }, this);
            e["[[boundFormat]]"] = t
        }
        return e["[[boundFormat]]"]
    }

    function V(e, t) {
        if (!isFinite(t)) throw RangeError("Invalid valid date passed to format");
        var n = e.__getInternalProperties(v),
            r = X(),
            a = n["[[locale]]"],
            o = new Intl.NumberFormat([a], {
                useGrouping: !1
            }),
            i = new Intl.NumberFormat([a], {
                minimumIntegerDigits: 2,
                useGrouping: !1
            }),
            s = function(e, t, n) {
                var r = new Date(e),
                    a = "get" + (n || "");
                return new $({
                    "[[weekday]]": r[a + "Day"](),
                    "[[era]]": +(r[a + "FullYear"]() >= 0),
                    "[[year]]": r[a + "FullYear"](),
                    "[[month]]": r[a + "Month"](),
                    "[[day]]": r[a + "Date"](),
                    "[[hour]]": r[a + "Hours"](),
                    "[[minute]]": r[a + "Minutes"](),
                    "[[second]]": r[a + "Seconds"](),
                    "[[inDST]]": !1
                })
            }(t, n["[[calendar]]"], n["[[timeZone]]"]),
            l = n["[[pattern]]"],
            c = n["[[dataLocale]]"],
            d = g.DateTimeFormat["[[localeData]]"][c].calendars,
            f = n["[[calendar]]"];
        for (var p in W)
            if (u.call(n, "[[" + p + "]]")) {
                var m, h, y = n["[[" + p + "]]"],
                    _ = s["[[" + p + "]]"];
                if ("year" === p && _ <= 0 ? _ = 1 - _ : "month" === p ? _++ : "hour" === p && !0 === n["[[hour12]]"] && (_ %= 12, m = _ !== s["[[" + p + "]]"], 0 === _ && !0 === n["[[hourNo0]]"] && (_ = 12)), "numeric" === y) h = I(o, _);
                else if ("2-digit" === y)(h = I(i, _)).length > 2 && (h = h.slice(-2));
                else if (y in b) switch (p) {
                    case "month":
                        h = G(d, f, "months", y, s["[[" + p + "]]"]);
                        break;
                    case "weekday":
                        try {
                            h = G(d, f, "days", y, s["[[" + p + "]]"])
                        } catch (e) {
                            throw Error("Could not find weekday data for locale " + a)
                        }
                        break;
                    case "timeZoneName":
                        h = "";
                        break;
                    default:
                        h = s["[[" + p + "]]"]
                }
                l = l.replace("{" + p + "}", h)
            } return !0 === n["[[hour12]]"] && (h = G(d, f, "dayPeriods", m ? "pm" : "am"), l = l.replace("{ampm}", h)), r.exp.test(r.input), l
    }
    g.DateTimeFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["ca", "nu"],
        "[[localeData]]": {}
    }, l(Intl.DateTimeFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: _.call(q, g.DateTimeFormat)
    }), l(Intl.DateTimeFormat.prototype, "format", {
        configurable: !0,
        get: K
    });
    l(Intl.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0,
        configurable: !0,
        value: function() {
            var e, t = new $,
                n = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
                r = this != null && "object" == typeof this && et(this);
            if (!r || !r["[[initializedDateTimeFormat]]"]) throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var a = 0, o = n.length; a < o; a++) u.call(r, e = "[[" + n[a] + "]]") && (t[n[a]] = {
                value: r[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return d({}, t)
        }
    });
    var J = Intl.__localeSensitiveProtos = {
        Number: {},
        Date: {}
    };
    J.Number.toLocaleString = function() {
        if ("[object Number]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
        return I(new H(arguments[0], arguments[1]), this)
    }, J.Date.toLocaleString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = B(n, "any", "all");
        return V(new R(t, n), e)
    }, J.Date.toLocaleDateString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = B(n, "date", "date");
        return V(new R(t, n), e)
    }, J.Date.toLocaleTimeString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = B(n, "time", "time");
        return V(new R(t, n), e)
    }, l(Intl, "__applyLocaleSensitivePrototypes", {
        writable: !0,
        configurable: !0,
        value: function() {
            for (var e in l(Number.prototype, "toLocaleString", {
                    writable: !0,
                    configurable: !0,
                    value: J.Number.toLocaleString
                }), l(Date.prototype, "toLocaleString", {
                    writable: !0,
                    configurable: !0,
                    value: J.Date.toLocaleString
                }), J.Date) u.call(J.Date, e) && l(Date.prototype, e, {
                writable: !0,
                configurable: !0,
                value: J.Date[e]
            })
        }
    }), l(Intl, "__addLocaleData", {
        value: function(e) {
            if (!S(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            (function(e, t) {
                if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
                var n, r = [t],
                    a = t.split("-");
                for (a.length > 2 && 4 === a[1].length && m.call(r, a[0] + "-" + a[2]); n = y.call(r);) m.call(g.NumberFormat["[[availableLocales]]"], n), g.NumberFormat["[[localeData]]"][n] = e.number, e.date && (e.date.nu = e.number.nu, m.call(g.DateTimeFormat["[[availableLocales]]"], n), g.DateTimeFormat["[[localeData]]"][n] = e.date);
                void 0 === o && (o = t), !M && (F(Intl.NumberFormat.prototype), M = !0), e.date && !w && (z(Intl.DateTimeFormat.prototype), w = !0)
            })(e, e.locale)
        }
    });

    function q(e) {
        if (!u.call(this, "[[availableLocales]]")) throw TypeError("supportedLocalesOf() is not a constructor");
        var t = X(),
            n = arguments[1],
            r = this["[[availableLocales]]"],
            a = Y(e);
        return t.exp.test(t.input),
            function(e, t, n) {
                if (void 0 !== n) {
                    var n = new $(ee(n)),
                        r = n.localeMatcher;
                    if (void 0 !== r && "lookup" !== (r = String(r)) && "best fit" !== r) throw RangeError('matcher should be "lookup" or "best fit"')
                }
                if (void 0 === r || "best fit" === r) var a = P(e, t);
                else var a = P(e, t);
                for (var o in a) u.call(a, o) && l(a, o, {
                    writable: !1,
                    configurable: !1,
                    value: a[o]
                });
                return l(a, "length", {
                    writable: !1
                }), a
            }(r, a, n)
    }

    function G(e, t, n, r, a) {
        var o = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
            i = {
                narrow: ["short", "long"],
                short: ["long", "narrow"],
                long: ["short", "narrow"]
            },
            s = u.call(o, r) ? o[r] : u.call(o, i[r][0]) ? o[i[r][0]] : o[i[r][1]];
        return null != a ? s[a] : s
    }

    function $(e) {
        for (var t in e)(e instanceof $ || u.call(e, t)) && l(this, t, {
            value: e[t],
            enumerable: !0,
            writable: !0,
            configurable: !0
        })
    }

    function Q() {
        l(this, "length", {
            writable: !0,
            value: 0
        }), arguments.length && m.apply(this, f.call(arguments))
    }

    function X() {
        for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || "", n = RegExp.multiline ? "m" : "", r = {
                input: RegExp.input
            }, a = new Q, o = !1, i = {}, s = 1; s <= 9; s++) o = (i["$" + s] = RegExp["$" + s]) || o;
        if (t = t.replace(e, "\\$&"), o)
            for (var s = 1; s <= 9; s++) {
                var u = i["$" + s];
                u ? (u = u.replace(e, "\\$&"), t = t.replace(u, "(" + u + ")")) : t = "()" + t, m.call(a, t.slice(0, t.indexOf("(") + 1)), t = t.slice(t.indexOf("(") + 1)
            }
        return r.exp = new RegExp(h.call(a, "") + t, n), r
    }

    function Z(e) {
        for (var t = e.length; t--;) {
            var n = e.charAt(t);
            n >= "a" && n <= "z" && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1))
        }
        return e
    }

    function ee(e) {
        if (null == e) throw TypeError("Cannot convert null or undefined to object");
        return Object(e)
    }

    function et(e) {
        return u.call(e, "__getInternalProperties") ? e.__getInternalProperties(v) : d(null)
    }
    $.prototype = d(null), Q.prototype = d(null), t.default = Intl
}