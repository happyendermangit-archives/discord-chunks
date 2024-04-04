function(e, t, s) {
    "use strict";

    function n(e) {
        let t = "==".slice(0, (4 - e.length % 4) % 4),
            s = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
            n = new ArrayBuffer(s.length),
            a = new Uint8Array(n);
        for (let e = 0; e < s.length; e++) a[e] = s.charCodeAt(e);
        return n
    }

    function a(e) {
        let t = new Uint8Array(e),
            s = "";
        for (let e of t) s += String.fromCharCode(e);
        return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
    }
    s.r(t), s.d(t, {
        create: function() {
            return g
        },
        get: function() {
            return x
        }
    });
    var l = "copy",
        r = "convert";

    function i(e, t, s) {
        if (t === l) return s;
        if (t === r) return e(s);
        if (t instanceof Array) return s.map(s => i(e, t[0], s));
        if (t instanceof Object) {
            let n = {};
            for (let [a, l] of Object.entries(t)) {
                if (l.derive) {
                    let e = l.derive(s);
                    void 0 !== e && (s[a] = e)
                }
                if (!(a in s)) {
                    if (l.required) throw Error(`Missing key: ${a}`);
                    continue
                }
                if (null == s[a]) {
                    n[a] = null;
                    continue
                }
                n[a] = i(e, l.schema, s[a])
            }
            return n
        }
    }

    function o(e, t) {
        return {
            required: !0,
            schema: e,
            derive: t
        }
    }

    function u(e) {
        return {
            required: !0,
            schema: e
        }
    }

    function d(e) {
        return {
            required: !1,
            schema: e
        }
    }
    var c = {
            type: u(l),
            id: u(r),
            transports: d(l)
        },
        f = {
            appid: d(l),
            appidExclude: d(l),
            credProps: d(l)
        },
        h = {
            appid: d(l),
            appidExclude: d(l),
            credProps: d(l)
        },
        _ = {
            publicKey: u({
                rp: u(l),
                user: u({
                    id: u(r),
                    name: u(l),
                    displayName: u(l)
                }),
                challenge: u(r),
                pubKeyCredParams: u(l),
                timeout: d(l),
                excludeCredentials: d([c]),
                authenticatorSelection: d(l),
                attestation: d(l),
                extensions: d(f)
            }),
            signal: d(l)
        },
        m = {
            type: u(l),
            id: u(l),
            rawId: u(r),
            authenticatorAttachment: d(l),
            response: u({
                clientDataJSON: u(r),
                attestationObject: u(r),
                transports: o(l, e => {
                    var t;
                    return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                })
            }),
            clientExtensionResults: o(h, e => e.getClientExtensionResults())
        },
        E = {
            mediation: d(l),
            publicKey: u({
                challenge: u(r),
                timeout: d(l),
                rpId: d(l),
                allowCredentials: d([c]),
                userVerification: d(l),
                extensions: d(f)
            }),
            signal: d(l)
        },
        p = {
            type: u(l),
            id: u(l),
            rawId: u(r),
            authenticatorAttachment: d(l),
            response: u({
                clientDataJSON: u(r),
                authenticatorData: u(r),
                signature: u(r),
                userHandle: u(r)
            }),
            clientExtensionResults: o(h, e => e.getClientExtensionResults())
        };
    async function g(e) {
        let t = await navigator.credentials.create(i(n, _, e));
        return i(a, m, t)
    }
    async function x(e) {
        let t = await navigator.credentials.get(i(n, E, e));
        return i(a, p, t)
    }
}