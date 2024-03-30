function(e, t, n) {
    "use strict";

    function r(e) {
        let t = "==".slice(0, (4 - e.length % 4) % 4),
            n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
            r = new ArrayBuffer(n.length),
            a = new Uint8Array(r);
        for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
        return r
    }

    function a(e) {
        let t = new Uint8Array(e),
            n = "";
        for (let e of t) n += String.fromCharCode(e);
        return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
    }
    n.r(t), n.d(t, {
        create: function() {
            return b
        },
        get: function() {
            return v
        }
    });
    var l = "copy",
        o = "convert";

    function i(e, t, n) {
        if (t === l) return n;
        if (t === o) return e(n);
        if (t instanceof Array) return n.map(n => i(e, t[0], n));
        if (t instanceof Object) {
            let r = {};
            for (let [a, l] of Object.entries(t)) {
                if (l.derive) {
                    let e = l.derive(n);
                    void 0 !== e && (n[a] = e)
                }
                if (!(a in n)) {
                    if (l.required) throw Error(`Missing key: ${a}`);
                    continue
                }
                if (null == n[a]) {
                    r[a] = null;
                    continue
                }
                r[a] = i(e, l.schema, n[a])
            }
            return r
        }
    }

    function u(e, t) {
        return {
            required: !0,
            schema: e,
            derive: t
        }
    }

    function s(e) {
        return {
            required: !0,
            schema: e
        }
    }

    function c(e) {
        return {
            required: !1,
            schema: e
        }
    }
    var f = {
            type: s(l),
            id: s(o),
            transports: c(l)
        },
        d = {
            appid: c(l),
            appidExclude: c(l),
            credProps: c(l)
        },
        m = {
            appid: c(l),
            appidExclude: c(l),
            credProps: c(l)
        },
        p = {
            publicKey: s({
                rp: s(l),
                user: s({
                    id: s(o),
                    name: s(l),
                    displayName: s(l)
                }),
                challenge: s(o),
                pubKeyCredParams: s(l),
                timeout: c(l),
                excludeCredentials: c([f]),
                authenticatorSelection: c(l),
                attestation: c(l),
                extensions: c(d)
            }),
            signal: c(l)
        },
        E = {
            type: s(l),
            id: s(l),
            rawId: s(o),
            authenticatorAttachment: c(l),
            response: s({
                clientDataJSON: s(o),
                attestationObject: s(o),
                transports: u(l, e => {
                    var t;
                    return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                })
            }),
            clientExtensionResults: u(m, e => e.getClientExtensionResults())
        },
        h = {
            mediation: c(l),
            publicKey: s({
                challenge: s(o),
                timeout: c(l),
                rpId: c(l),
                allowCredentials: c([f]),
                userVerification: c(l),
                extensions: c(d)
            }),
            signal: c(l)
        },
        y = {
            type: s(l),
            id: s(l),
            rawId: s(o),
            authenticatorAttachment: c(l),
            response: s({
                clientDataJSON: s(o),
                authenticatorData: s(o),
                signature: s(o),
                userHandle: s(o)
            }),
            clientExtensionResults: u(m, e => e.getClientExtensionResults())
        };
    async function b(e) {
        let t = await navigator.credentials.create(i(r, p, e));
        return i(a, E, t)
    }
    async function v(e) {
        let t = await navigator.credentials.get(i(r, h, e));
        return i(a, y, t)
    }
}