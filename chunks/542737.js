function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        initRenderingContextWebGL: function() {
            return s
        }
    });
    var r = n("188129");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = new r.Logger("RenderingContextWebGL"),
        u = function() {
            var e, t, n;

            function r(e) {
                var t = e.gl,
                    n = e.program,
                    o = e.positionLoc,
                    a = e.texcoordLoc,
                    u = e.transformLoc,
                    s = e.textureLoc,
                    l = e.vertexBuffer,
                    c = e.texture;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), i(this, "transform", new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1])), i(this, "gl", void 0), i(this, "program", void 0), i(this, "positionLoc", void 0), i(this, "texcoordLoc", void 0), i(this, "transformLoc", void 0), i(this, "textureLoc", void 0), i(this, "vertexBuffer", void 0), i(this, "texture", void 0), this.gl = t, this.program = n, this.positionLoc = o, this.texcoordLoc = a, this.transformLoc = u, this.textureLoc = s, this.vertexBuffer = l, this.texture = c
            }
            return e = r, t = [{
                key: "render",
                value: function(e) {
                    if (null != e) {
                        var t = e.width,
                            n = e.height,
                            r = this.gl;
                        r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t, n, 0, r.RGBA, r.UNSIGNED_BYTE, e.data), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.viewport(0, 0, t, n), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT), r.useProgram(this.program), r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer), r.enableVertexAttribArray(this.positionLoc), r.vertexAttribPointer(this.positionLoc, 2, r.FLOAT, !1, 0, 0), r.enableVertexAttribArray(this.texcoordLoc), r.vertexAttribPointer(this.texcoordLoc, 2, r.FLOAT, !1, 0, 0), r.uniformMatrix4fv(this.transformLoc, !1, this.transform), r.uniform1i(this.textureLoc, 0), r.drawArrays(r.TRIANGLES, 0, 6)
                    }
                }
            }], n = [{
                key: "create",
                value: function(e) {
                    if (null == e) return null;
                    var t = this.createShader(e, e.VERTEX_SHADER, "\nattribute vec4 position;\nattribute vec2 texcoord;\nuniform mat4 transform;\nvarying vec2 out_texcoord;\n\nvoid main() {\n   gl_Position = transform * position;\n   out_texcoord = texcoord;\n}\n"),
                        n = this.createShader(e, e.FRAGMENT_SHADER, "\nprecision mediump float;\n\nvarying vec2 out_texcoord;\nuniform sampler2D texture;\n\nvoid main() {\n   gl_FragColor = texture2D(texture, out_texcoord);\n}\n");
                    if (null == t || null == n) return null;
                    var o = this.createProgram(e, t, n);
                    if (null == o) return null;
                    var i = e.getAttribLocation(o, "position"),
                        a = e.getAttribLocation(o, "texcoord");
                    if (-1 === i || -1 === a) return null;
                    var u = e.getUniformLocation(o, "transform"),
                        s = e.getUniformLocation(o, "texture");
                    if (null == u || null == s) return null;
                    var l = e.createBuffer();
                    if (null == l) return null;
                    e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), e.STATIC_DRAW);
                    var c = e.createTexture();
                    return null == c ? null : new r({
                        gl: e,
                        program: o,
                        positionLoc: i,
                        texcoordLoc: a,
                        transformLoc: u,
                        textureLoc: s,
                        vertexBuffer: l,
                        texture: c
                    })
                }
            }, {
                key: "createShader",
                value: function(e, t, n) {
                    var r = e.createShader(t);
                    if (null == r) return null;
                    if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
                        a.warn("Failed to compile shader!");
                        var o = e.getShaderInfoLog(r);
                        return null != o && a.log(o), e.deleteShader(r), null
                    }
                    return r
                }
            }, {
                key: "createProgram",
                value: function(e, t, n) {
                    if (null == t || null == n) return null;
                    var r = e.createProgram();
                    if (null == r) return null;
                    if (e.attachShader(r, t), e.attachShader(r, n), e.linkProgram(r), !e.getProgramParameter(r, e.LINK_STATUS)) {
                        a.warn("Failed to link program!");
                        var o = e.getProgramInfoLog(r);
                        return null != o && a.log(o), e.deleteProgram(r), null
                    }
                    return r
                }
            }], t && o(e.prototype, t), n && o(e, n), r
        }();

    function s(e) {
        var t = e.getContext("webgl2");
        return null == t ? null : u.create(t)
    }
}