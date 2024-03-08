function(e, t, s) {
    "use strict";

    function n(e) {
        let t = "==".slice(0, (4 - e.length % 4) % 4),
            s = e.replace(/-/g, "+").replace(/_/g, "/") + t,
            n = atob(s),
            l = new ArrayBuffer(n.length),
            a = new Uint8Array(l);
        for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
        return l
    }

    function l(e) {
        let t = new Uint8Array(e),
            s = "";
        for (let e of t) s += String.fromCharCode(e);
        let n = btoa(s),
            l = n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        return l
    }
    s.r(t), s.d(t, {
        create: function() {
            return g
        },
        get: function() {
            return x
        }
    }), s("781738"), s("101997"), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("222007"), s("70102");
    var a = "copy",
        r = "convert";

    function i(e, t, s) {
        if (t === a) return s;
        if (t === r) return e(s);
        if (t instanceof Array) return s.map(s => i(e, t[0], s));
        if (t instanceof Object) {
            let n = {};
            for (let [l, a] of Object.entries(t)) {
                if (a.derive) {
                    let e = a.derive(s);
                    void 0 !== e && (s[l] = e)
                }
                if (!(l in s)) {
                    if (a.required) throw Error("Missing key: ".concat(l));
                    continue
                }
                if (null == s[l]) {
                    n[l] = null;
                    continue
                }
                n[l] = i(e, a.schema, s[l])
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
            type: u(a),
            id: u(r),
            transports: d(a)
        },
        f = {
            appid: d(a),
            appidExclude: d(a),
            credProps: d(a)
        },
        h = {
            appid: d(a),
            appidExclude: d(a),
            credProps: d(a)
        },
        _ = {
            publicKey: u({
                rp: u(a),
                user: u({
                    id: u(r),
                    name: u(a),
                    displayName: u(a)
                }),
                challenge: u(r),
                pubKeyCredParams: u(a),
                timeout: d(a),
                excludeCredentials: d([c]),
                authenticatorSelection: d(a),
                attestation: d(a),
                extensions: d(f)
            }),
            signal: d(a)
        },
        m = {
            type: u(a),
            id: u(a),
            rawId: u(r),
            authenticatorAttachment: d(a),
            response: u({
                clientDataJSON: u(r),
                attestationObject: u(r),
                transports: o(a, e => {
                    var t;
                    return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                })
            }),
            clientExtensionResults: o(h, e => e.getClientExtensionResults())
        },
        E = {
            mediation: d(a),
            publicKey: u({
                challenge: u(r),
                timeout: d(a),
                rpId: d(a),
                allowCredentials: d([c]),
                userVerification: d(a),
                extensions: d(f)
            }),
            signal: d(a)
        },
        p = {
            type: u(a),
            id: u(a),
            rawId: u(r),
            authenticatorAttachment: d(a),
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
        return i(l, m, t)
    }
    async function x(e) {
        let t = await navigator.credentials.get(i(n, E, e));
        return i(l, p, t)
    }
}