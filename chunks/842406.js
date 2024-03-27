function(e, t, n) {
    "use strict";
    var r = n("607974"),
        i = n("350434"),
        a = n("91826"),
        o = n("400194");

    function s(e) {
        return e.call.bind(e)
    }
    var u = "undefined" != typeof BigInt,
        c = "undefined" != typeof Symbol,
        l = s(Object.prototype.toString),
        d = s(Number.prototype.valueOf),
        f = s(String.prototype.valueOf),
        p = s(Boolean.prototype.valueOf);
    if (u) var h = s(BigInt.prototype.valueOf);
    if (c) var m = s(Symbol.prototype.valueOf);

    function g(e, t) {
        if ("object" != typeof e) return !1;
        try {
            return t(e), !0
        } catch (e) {
            return !1
        }
    }
    t.isArgumentsObject = r, t.isGeneratorFunction = i, t.isTypedArray = o;
    t.isPromise = function(e) {
        return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
    };
    t.isArrayBufferView = function(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : o(e) || w(e)
    };
    t.isUint8Array = function(e) {
        return "Uint8Array" === a(e)
    };
    t.isUint8ClampedArray = function(e) {
        return "Uint8ClampedArray" === a(e)
    };
    t.isUint16Array = function(e) {
        return "Uint16Array" === a(e)
    };
    t.isUint32Array = function(e) {
        return "Uint32Array" === a(e)
    };
    t.isInt8Array = function(e) {
        return "Int8Array" === a(e)
    };
    t.isInt16Array = function(e) {
        return "Int16Array" === a(e)
    };
    t.isInt32Array = function(e) {
        return "Int32Array" === a(e)
    };
    t.isFloat32Array = function(e) {
        return "Float32Array" === a(e)
    };
    t.isFloat64Array = function(e) {
        return "Float64Array" === a(e)
    };
    t.isBigInt64Array = function(e) {
        return "BigInt64Array" === a(e)
    };

    function _(e) {
        return "[object Map]" === l(e)
    }
    t.isBigUint64Array = function(e) {
        return "BigUint64Array" === a(e)
    }, _.working = "undefined" != typeof Map && _(new Map);

    function b(e) {
        return "[object Set]" === l(e)
    }
    t.isMap = function(e) {
        return "undefined" != typeof Map && (_.working ? _(e) : e instanceof Map)
    }, b.working = "undefined" != typeof Set && b(new Set);

    function v(e) {
        return "[object WeakMap]" === l(e)
    }
    t.isSet = function(e) {
        return "undefined" != typeof Set && (b.working ? b(e) : e instanceof Set)
    }, v.working = "undefined" != typeof WeakMap && v(new WeakMap);

    function y(e) {
        return "[object WeakSet]" === l(e)
    }
    t.isWeakMap = function(e) {
        return "undefined" != typeof WeakMap && (v.working ? v(e) : e instanceof WeakMap)
    }, y.working = "undefined" != typeof WeakSet && y(new WeakSet);

    function E(e) {
        return "[object ArrayBuffer]" === l(e)
    }

    function S(e) {
        return "undefined" != typeof ArrayBuffer && (E.working ? E(e) : e instanceof ArrayBuffer)
    }

    function x(e) {
        return "[object DataView]" === l(e)
    }

    function w(e) {
        return "undefined" != typeof DataView && (x.working ? x(e) : e instanceof DataView)
    }
    t.isWeakSet = function(e) {
        return y(e)
    }, E.working = "undefined" != typeof ArrayBuffer && E(new ArrayBuffer), t.isArrayBuffer = S, x.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && x(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = w;
    var T = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

    function C(e) {
        return "[object SharedArrayBuffer]" === l(e)
    }

    function D(e) {
        return void 0 !== T && (void 0 === C.working && (C.working = C(new T)), C.working ? C(e) : e instanceof T)
    }
    t.isSharedArrayBuffer = D;
    t.isAsyncFunction = function(e) {
        return "[object AsyncFunction]" === l(e)
    };
    t.isMapIterator = function(e) {
        return "[object Map Iterator]" === l(e)
    };
    t.isSetIterator = function(e) {
        return "[object Set Iterator]" === l(e)
    };
    t.isGeneratorObject = function(e) {
        return "[object Generator]" === l(e)
    };

    function O(e) {
        return g(e, d)
    }

    function M(e) {
        return g(e, f)
    }

    function A(e) {
        return g(e, p)
    }

    function k(e) {
        return u && g(e, h)
    }

    function R(e) {
        return c && g(e, m)
    }
    t.isWebAssemblyCompiledModule = function(e) {
        return "[object WebAssembly.Module]" === l(e)
    }, t.isNumberObject = O, t.isStringObject = M, t.isBooleanObject = A, t.isBigIntObject = k, t.isSymbolObject = R;
    t.isBoxedPrimitive = function(e) {
        return O(e) || M(e) || A(e) || k(e) || R(e)
    };
    t.isAnyArrayBuffer = function(e) {
        return "undefined" != typeof Uint8Array && (S(e) || D(e))
    }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function() {
                throw Error(e + " is not supported in userland")
            }
        })
    })
}