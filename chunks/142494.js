function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        FormattedMessage: function() {
            return c
        },
        getMessage: function() {
            return I
        },
        setUpdateRules: function() {
            return E
        }
    }), n("47120"), n("757143");
    var s = n("400053"),
        a = n.n(s),
        o = n("302454"),
        l = n.n(o),
        u = n("20970"),
        d = n("959525");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class c {
        format(e) {
            if (!this.hasMarkdown) return this.intlMessage.format(e);
            let [t, n] = this.getContext(e);
            return i(this.intlMessage.format(t), t, n)
        }
        astFormat(e) {
            let [t, n] = this.getContext(e);
            return r(this.intlMessage.format(t), t, n)
        }
        plainFormat(e) {
            return this.intlMessage.format(e)
        }
        getContext(e) {
            let t = d.UNSAFE_RE.test(this.message),
                n = {};
            if (t) {
                let t = 0;
                for (let [i, r] of Object.entries(e)) this.message.includes("!!{".concat(i, "}!!")) && (n[++t] = r, e[i] = t)
            }
            return [e, n]
        }
        constructor(e, t, n) {
            _(this, "message", void 0), _(this, "hasMarkdown", void 0), _(this, "intlMessage", void 0), this.message = n ? e : e.replace(d.UNSAFE_RE_ALL, ""), this.hasMarkdown = n, this.intlMessage = new(a())(this.message, t)
        }
    }

    function E(e) {
        i = function(e, t) {
            let n = l().parserFor(t(e)),
                i = l().reactFor(l().ruleOutput(e, "react"));
            return (e, t, r) => {
                let s = !e.includes("\n\n");
                return !s && (e += "\n\n"), i(n(e, {
                    inline: s,
                    context: t,
                    unsafeContext: r
                }))
            }
        }(u.rules, e), r = function(e) {
            let t = l().parserFor(e);
            return (e, n, i) => t(e + "\n\n", {
                inline: !1,
                context: n,
                unsafeContext: i
            })
        }(u.rules)
    }

    function I(e, t) {
        if (null == e) return "";
        null == i && E(n("281071").default), e = e.replace(/^\n+|\n+$/g, "");
        let r = d.FORMAT_RE.test(e),
            s = d.MARKDOWN_RE.test(e);
        return r || s ? new c(e, t, s) : e
    }
}