function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        decodeEncodedUserRecord: function() {
            return g
        },
        decryptEncodedCiphertext: function() {
            return h
        },
        decryptNonce: function() {
            return E
        },
        generateRsaKeyPair: function() {
            return r
        },
        publicKeyFingerprint: function() {
            return o
        },
        serializePublicKey: function() {
            return l
        }
    }), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("642549"), n("47120"), n("757143"), n("863942"), n("411104");
    var s = n("512722"),
        a = n.n(s),
        i = n("598077");

    function r() {
        return window.crypto.subtle.generateKey({
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256"
        }, !0, ["decrypt"])
    }
    async function l(e) {
        a()(null != e.publicKey, "public key cannot be null");
        let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
        return btoa(String.fromCharCode(...new Uint8Array(t)))
    }
    async function o(e) {
        return a()(null != e.publicKey, "public key cannot be null"), c(await window.crypto.subtle.exportKey("spki", e.publicKey))
    }

    function u(e) {
        return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "")
    }

    function d(e) {
        return Uint8Array.from(atob(e), e => e.charCodeAt(0))
    }
    async function c(e) {
        return u(await window.crypto.subtle.digest({
            name: "SHA-256"
        }, e))
    }

    function f(e, t) {
        return a()(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
            name: "RSA-OAEP",
            hash: "SHA-256"
        }, e.privateKey, t)
    }
    async function h(e, t) {
        let n = new TextDecoder,
            s = await f(e, d(t));
        return n.decode(s)
    }
    async function E(e, t) {
        return u(await f(e, d(t)))
    }
    async function g(e, t) {
        t = await h(e, t);
        let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
        if (null == n) throw Error("Invalid encoded user record.");
        let [, s, a, r, l] = n;
        return new i.default({
            id: s,
            discriminator: a,
            avatar: "0" === r ? null : r,
            username: l
        })
    }
}