"use strict";
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors =
  Object.getOwnPropertyDescriptors ||
  (() => {
    var ownKeysFun;
    if (typeof Reflect !== "undefined" && Reflect.ownKeys) {
      ownKeysFun = Reflect.ownKeys;
    } else {
      var getOwnPropertySymbols = Object.getOwnPropertySymbols || ((o) => []);
      ownKeysFun = (o) =>
        Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o));
    }
    return (o) => {
      var ownKeys = ownKeysFun(o);
      var descriptors = {};
      var len = ownKeys.length | 0;
      var i = 0;
      while (i !== len) {
        var key = ownKeys[i];
        Object.defineProperty(descriptors, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: Object.getOwnPropertyDescriptor(o, key),
        });
        i = (i + 1) | 0;
      }
      return descriptors;
    };
  })();
var $L0;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = function () {
  return String.fromCharCode(this.c);
};
function $noIsInstance(arg0) {
  throw new TypeError(
    "Cannot call isInstance() on a Class representing a JS trait/object",
  );
}
function $objectClone(arg0) {
  return Object.create(
    Object.getPrototypeOf(arg0),
    $getOwnPropertyDescriptors(arg0),
  );
}
function $objectOrArrayClone(arg0) {
  return arg0.$classData.Z ? arg0.u() : $objectClone(arg0);
}
function $objectClassName(arg0) {
  switch (typeof arg0) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((arg0 << 24) >> 24 === arg0) {
          return "java.lang.Byte";
        } else if ((arg0 << 16) >> 16 === arg0) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if (arg0 instanceof $c_RTLong) {
        return "java.lang.Long";
      } else if (arg0 instanceof $Char) {
        return "java.lang.Character";
      } else if (!!(arg0 && arg0.$classData)) {
        return arg0.$classData.N;
      } else {
        return null.bf();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch (typeof instance) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (!!(instance && instance.$classData) || instance === null) {
        return instance.i(x0);
      } else if (instance instanceof $c_RTLong) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if (instance instanceof $Char) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.i.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch (typeof instance) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (!!(instance && instance.$classData) || instance === null) {
        return instance.r();
      } else if (instance instanceof $c_RTLong) {
        return $f_jl_Long__hashCode__I(instance);
      } else if (instance instanceof $Char) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.r.call(instance);
      }
    }
  }
}
function $dp_toString__T(instance) {
  return instance === void 0 ? "undefined" : instance.toString();
}
function $checkIntDivisor(arg0) {
  if (arg0 === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return arg0 > 2147483647
    ? 2147483647
    : arg0 < -2147483648
      ? -2147483648
      : arg0 | 0;
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__RTLong(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__RTLong__O__D(arg0, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while (superProto !== null) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if (desc !== void 0) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if (desc !== void 0) {
    var getter = desc.get;
    return getter !== void 0 ? getter.call(arg1) : getter.value;
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if (desc !== void 0) {
    var setter = desc.set;
    if (setter !== void 0) {
      setter.call(arg1, arg3);
      return void 0;
    }
  }
  throw new TypeError("super has no setter '" + arg2 + "'.");
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (arg0 !== arg2 || arg3 < arg1 || ((arg1 + arg4) | 0) < arg3) {
    for (var i = 0; i < arg4; i = (i + 1) | 0) {
      arg2[(arg3 + i) | 0] = arg0[(arg1 + i) | 0];
    }
  } else {
    for (var i = (arg4 - 1) | 0; i >= 0; i = (i - 1) | 0) {
      arg2[(arg3 + i) | 0] = arg0[(arg1 + i) | 0];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch (typeof obj) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if (obj < BigInt(0)) {
        obj = ~obj;
      }
      while (obj !== BigInt(0)) {
        biHash = biHash ^ Number(BigInt.asIntN(32, obj));
        obj = obj >> BigInt(32);
      }
      return biHash;
    }
    case "boolean": {
      return obj ? 1231 : 1237;
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return description === void 0 ? 0 : $f_T__hashCode__I(description);
    }
    default: {
      if (obj === null) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if (hash === void 0) {
          hash = ($lastIDHash + 1) | 0;
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return (
    typeof arg0 === "number" &&
    (arg0 << 24) >> 24 === arg0 &&
    1 / arg0 !== 1 / -0
  );
}
function $isShort(arg0) {
  return (
    typeof arg0 === "number" &&
    (arg0 << 16) >> 16 === arg0 &&
    1 / arg0 !== 1 / -0
  );
}
function $isInt(arg0) {
  return typeof arg0 === "number" && (arg0 | 0) === arg0 && 1 / arg0 !== 1 / -0;
}
function $isFloat(arg0) {
  return (
    typeof arg0 === "number" && (arg0 !== arg0 || Math.fround(arg0) === arg0)
  );
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uC(arg0) {
  return arg0 === null ? 0 : arg0.c;
}
function $uJ(arg0) {
  return arg0 === null ? $L0 : arg0;
}
/** @constructor */
function $c_O() {}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {}
$h_O.prototype = $p;
$p.r = function () {
  return $systemIdentityHashCode(this);
};
$p.i = function (that) {
  return this === that;
};
$p.j = function () {
  var i = this.r();
  return $objectClassName(this) + "@" + (i >>> 0.0).toString(16);
};
$p.toString = function () {
  return this.j();
};
function $ac_O(arg) {
  if (typeof arg === "number") {
    this.e = new Array(arg);
    for (var i = 0; i < arg; i++) {
      this.e[i] = null;
    }
  } else {
    this.e = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.C = function (srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.e, srcPos, dest.e, destPos, length);
};
$p.u = function () {
  return new $ac_O(this.e.slice());
};
function $ah_O() {}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (typeof arg === "number") {
    this.e = new Array(arg);
    for (var i = 0; i < arg; i++) {
      this.e[i] = false;
    }
  } else {
    this.e = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.C = function (srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.e, srcPos, dest.e, destPos, length);
};
$p.u = function () {
  return new $ac_Z(this.e.slice());
};
function $ac_C(arg) {
  if (typeof arg === "number") {
    this.e = new Uint16Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.C = function (srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.u = function () {
  return new $ac_C(this.e.slice());
};
function $ac_B(arg) {
  if (typeof arg === "number") {
    this.e = new Int8Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.C = function (srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.u = function () {
  return new $ac_B(this.e.slice());
};
function $ac_S(arg) {
  if (typeof arg === "number") {
    this.e = new Int16Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.C = function (srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.u = function () {
  return new $ac_S(this.e.slice());
};
function $ac_I(arg) {
  if (typeof arg === "number") {
    this.e = new Int32Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.C = function (srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.u = function () {
  return new $ac_I(this.e.slice());
};
function $ac_J(arg) {
  if (typeof arg === "number") {
    this.e = new Array(arg);
    for (var i = 0; i < arg; i++) {
      this.e[i] = $L0;
    }
  } else {
    this.e = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.C = function (srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.e, srcPos, dest.e, destPos, length);
};
$p.u = function () {
  return new $ac_J(this.e.slice());
};
function $ac_F(arg) {
  if (typeof arg === "number") {
    this.e = new Float32Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.C = function (srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.u = function () {
  return new $ac_F(this.e.slice());
};
function $ac_D(arg) {
  if (typeof arg === "number") {
    this.e = new Float64Array(arg);
  } else {
    this.e = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.C = function (srcPos, dest, destPos, length) {
  dest.e.set(this.e.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.u = function () {
  return new $ac_D(this.e.slice());
};
function $TypeData() {
  this.C = void 0;
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = void 0;
  this.A = void 0;
  this.F = void 0;
  this.w = void 0;
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = void 0;
}
$p = $TypeData.prototype;
$p.p = function (
  zero,
  arrayEncodedName,
  displayName,
  arrayClass,
  typedArrayClass,
) {
  this.n = {};
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = (that) => that === self;
  this.N = displayName;
  this.X = true;
  this.I = (obj) => false;
  if (arrayClass !== void 0) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass);
  }
  return this;
};
$p.i = function (kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = "L" + fullName + ";";
  this.F = (that) => !!that.n[internalName];
  this.J = kindOrCtor === 2;
  this.N = fullName;
  this.Y = kindOrCtor === 1;
  this.I =
    isInstance ||
    ((obj) => !!(obj && obj.$classData && obj.$classData.n[internalName]));
  if (typeof kindOrCtor !== "number") {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
};
$p.y = function (
  componentData,
  arrayClass,
  typedArrayClass,
  isAssignableFromFun,
) {
  arrayClass.prototype.$classData = this;
  var name = "[" + componentData.E;
  this.C = arrayClass;
  this.n = {
    t: 1,
    a: 1,
  };
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = isAssignableFromFun || ((that) => self === that);
  this.w = typedArrayClass
    ? (array) => new arrayClass(new typedArrayClass(array))
    : (array) => new arrayClass(array);
  this.I = (obj) => obj instanceof arrayClass;
  return this;
};
$p.a = function (componentData) {
  function ArrayClass(arg) {
    if (typeof arg === "number") {
      this.e = new Array(arg);
      for (var i = 0; i < arg; i++) {
        this.e[i] = null;
      }
    } else {
      this.e = arg;
    }
  }
  var $p = (ArrayClass.prototype = new $ah_O());
  $p.constructor = ArrayClass;
  $p.C = function (srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.e, srcPos, dest.e, destPos, length);
  };
  $p.u = function () {
    return new ArrayClass(this.e.slice());
  };
  $p.$classData = this;
  var arrayBase = componentData.B || componentData;
  var arrayDepth = componentData.D + 1;
  var name = "[" + componentData.E;
  this.C = ArrayClass;
  this.n = {
    t: 1,
    a: 1,
  };
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = (that) => {
    var thatDepth = that.D;
    return thatDepth === arrayDepth
      ? arrayBase.F(that.B)
      : thatDepth > arrayDepth && arrayBase === $d_O;
  };
  this.F = isAssignableFromFun;
  this.w = (array) => new ArrayClass(array);
  var self = this;
  this.I = (obj) => {
    var data = obj && obj.$classData;
    return !!data && (data === self || isAssignableFromFun(data));
  };
  return this;
};
$p.r = function () {
  if (!this.A) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
};
function $isArrayOf_O(obj, depth) {
  var data = obj && obj.$classData;
  if (!data) {
    return false;
  } else {
    var arrayDepth = data.D;
    return arrayDepth === depth ? !data.B.X : arrayDepth > depth;
  }
}
function $isArrayOf_Z(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B === $d_Z
  );
}
function $isArrayOf_C(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B === $d_C
  );
}
function $isArrayOf_B(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B === $d_B
  );
}
function $isArrayOf_S(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B === $d_S
  );
}
function $isArrayOf_I(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B === $d_I
  );
}
function $isArrayOf_J(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B === $d_J
  );
}
function $isArrayOf_F(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B === $d_F
  );
}
function $isArrayOf_D(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B === $d_D
  );
}
var $d_O = new $TypeData();
$d_O.n = {};
$d_O.E = "Ljava.lang.Object;";
$d_O.F = (that) => !that.X;
$d_O.N = "java.lang.Object";
$d_O.I = (obj) => obj !== null;
$d_O.A = new $TypeData().y($d_O, $ac_O, void 0, (that) => {
  var thatDepth = that.D;
  return thatDepth === 1 ? !that.B.X : thatDepth > 1;
});
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p(void 0, "V", "void", void 0, void 0);
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, void 0);
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p(null, "J", "long", $ac_J, void 0);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_Lbufferdata_ZeroCostValidation$() {}
$p = $c_Lbufferdata_ZeroCostValidation$.prototype = new $h_O();
$p.constructor = $c_Lbufferdata_ZeroCostValidation$;
/** @constructor */
function $h_Lbufferdata_ZeroCostValidation$() {}
$h_Lbufferdata_ZeroCostValidation$.prototype = $p;
$p.am = function () {
  var buffer = new ArrayBuffer(20);
  var view = new DataView(buffer);
  var i = 0;
  while (i < 4) {
    var baseOffset = Math.imul(5, i);
    view.setFloat32(baseOffset, Math.fround(2.0 * Math.fround(i)), true);
    view.setUint8((4 + baseOffset) | 0, (Math.imul(10, i) << 16) >> 16);
    i = (1 + i) | 0;
  }
  var value = Math.fround(view.getFloat32(0, true));
  var value$1 = view.getUint8(4) | 0;
  var first = {
    f32: value,
    u8: value$1,
  };
  var value$2 = Math.fround(view.getFloat32(15, true));
  var value$3 = view.getUint8(19) | 0;
  var last = {
    f32: value$2,
    u8: value$3,
  };
  return {
    first: first,
    last: last,
  };
};
$p.aw = function () {
  var buffer = new ArrayBuffer(20);
  var view = new DataView(buffer);
  var i = 0;
  while (i < 4) {
    var baseOffset = Math.imul(5, i);
    var offset$proxy2 = (4 + baseOffset) | 0;
    var value$proxy1 = Math.fround(2.0 * Math.fround(i));
    view.setFloat32(baseOffset, value$proxy1, true);
    var value$proxy2 = (Math.imul(10, i) << 16) >> 16;
    view.setUint8(offset$proxy2, value$proxy2);
    i = (1 + i) | 0;
  }
  var value = Math.fround(view.getFloat32(0, true));
  var value$1 = view.getUint8(4) | 0;
  var _2 = {
    f32: value,
    u8: value$1,
  };
  var value$2 = Math.fround(view.getFloat32(15, true));
  var value$3 = view.getUint8(19) | 0;
  var _2$1 = {
    f32: value$2,
    u8: value$3,
  };
  return {
    first: _2,
    last: _2$1,
  };
};
$p.aA = function () {
  var buffer = new ArrayBuffer(20);
  var _1 = new DataView(buffer);
  var i = 0;
  while (i < 4) {
    var index$proxy1 = i;
    var _2 = Math.imul(5, index$proxy1);
    var value$proxy3 = Math.fround(2.0 * Math.fround(i));
    _1.setFloat32(_2, value$proxy3, true);
    var index$proxy2 = i;
    var _2$1 = Math.imul(5, index$proxy2);
    var offset$proxy6 = (4 + _2$1) | 0;
    var value$proxy4 = (Math.imul(10, i) << 16) >> 16;
    _1.setUint8(offset$proxy6, value$proxy4);
    i = (1 + i) | 0;
  }
  var value = Math.fround(_1.getFloat32(0, true));
  var value$1 = _1.getUint8(4) | 0;
  var _2$2 = {
    f32: value,
    u8: value$1,
  };
  var value$2 = Math.fround(_1.getFloat32(15, true));
  var value$3 = _1.getUint8(19) | 0;
  var _2$3 = {
    f32: value$2,
    u8: value$3,
  };
  return {
    first: _2$2,
    last: _2$3,
  };
};
$p.ar = function () {
  var buffer = new ArrayBuffer(36);
  var _1 = new DataView(buffer);
  var i = 0;
  while (i < 4) {
    var index$proxy3 = i;
    var _2 = Math.imul(9, index$proxy3);
    var value$proxy5 = Math.fround(10.0 * Math.fround(i));
    _1.setFloat32(_2, value$proxy5, true);
    var index$proxy4 = i;
    var _2$1 = Math.imul(9, index$proxy4);
    var offset$proxy14 = (4 + _2$1) | 0;
    var value$proxy6 = Math.fround(20.0 * Math.fround(i));
    _1.setFloat32(offset$proxy14, value$proxy6, true);
    var index$proxy5 = i;
    var _2$2 = Math.imul(9, index$proxy5);
    var offset$proxy15 = (8 + _2$2) | 0;
    var value$proxy7 = (Math.imul(25, i) << 16) >> 16;
    _1.setUint8(offset$proxy15, value$proxy7);
    i = (1 + i) | 0;
  }
  var value = Math.fround(_1.getFloat32(0, true));
  var value$1 = Math.fround(_1.getFloat32(4, true));
  var value$2 = _1.getUint8(8) | 0;
  var _2$3 = {
    x: value,
    y: value$1,
    life: value$2,
  };
  var value$3 = Math.fround(_1.getFloat32(27, true));
  var value$4 = Math.fround(_1.getFloat32(31, true));
  var value$5 = _1.getUint8(35) | 0;
  var _2$4 = {
    x: value$3,
    y: value$4,
    life: value$5,
  };
  return {
    first: _2$3,
    last: _2$4,
  };
};
$p.as = function () {
  var buffer = new ArrayBuffer(36);
  var _1 = new DataView(buffer);
  var i = 0;
  while (i < 4) {
    var index$proxy6 = i;
    var _2 = Math.imul(9, index$proxy6);
    var _1$1 = Math.fround(10.0 * Math.fround(i));
    var _2$1 = Math.fround(20.0 * Math.fround(i));
    var _2$2 = (Math.imul(25, i) << 16) >> 16;
    var nestedValues___1;
    var nestedValues___2;
    var nestedValues___1 = _1$1;
    var nestedValues___2 = _2$1;
    var value;
    var value = nestedValues___1;
    _1.setFloat32(_2, Math.fround(value), true);
    var tailOffset = (4 + _2) | 0;
    var value$2;
    var value$2 = nestedValues___2;
    _1.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$3 = (8 + _2) | 0;
    var value$3;
    var value$3 = _2$2;
    _1.setUint8(tailOffset$3, value$3);
    i = (1 + i) | 0;
  }
  var value$1 = Math.fround(_1.getFloat32(0, true));
  var value$4 = Math.fround(_1.getFloat32(4, true));
  var value$5 = _1.getUint8(8) | 0;
  var _2$3 = {
    x: value$1,
    y: value$4,
    life: value$5,
  };
  var value$6 = Math.fround(_1.getFloat32(27, true));
  var value$7 = Math.fround(_1.getFloat32(31, true));
  var value$8 = _1.getUint8(35) | 0;
  var _2$4 = {
    x: value$6,
    y: value$7,
    life: value$8,
  };
  return {
    first: _2$3,
    last: _2$4,
  };
};
$p.an = function () {
  var buffer = new ArrayBuffer(36);
  var view = new DataView(buffer);
  var i = 0;
  while (i < 4) {
    var baseOffset = Math.imul(9, i);
    view.setFloat32(baseOffset, Math.fround(10.0 * Math.fround(i)), true);
    view.setFloat32(
      (4 + baseOffset) | 0,
      Math.fround(20.0 * Math.fround(i)),
      true,
    );
    view.setUint8((8 + baseOffset) | 0, (Math.imul(25, i) << 16) >> 16);
    i = (1 + i) | 0;
  }
  var value = Math.fround(view.getFloat32(0, true));
  var value$1 = Math.fround(view.getFloat32(4, true));
  var value$2 = view.getUint8(8) | 0;
  var _2 = {
    x: value,
    y: value$1,
    life: value$2,
  };
  var value$3 = Math.fround(view.getFloat32(27, true));
  var value$4 = Math.fround(view.getFloat32(31, true));
  var value$5 = view.getUint8(35) | 0;
  var _2$1 = {
    x: value$3,
    y: value$4,
    life: value$5,
  };
  return {
    first: _2,
    last: _2$1,
  };
};
$p.b8 = function () {
  var direct = this.am();
  var primitive = this.aw();
  var struct = this.aA();
  var directNested = this.an();
  var namedNested = this.ar();
  var tupleSetNested = this.as();
  var value =
    $m_sr_BoxesRunTime$().g(direct.first.f32, primitive.first.f32) &&
    $m_sr_BoxesRunTime$().g(direct.first.u8, primitive.first.u8) &&
    $m_sr_BoxesRunTime$().g(direct.last.f32, primitive.last.f32) &&
    $m_sr_BoxesRunTime$().g(direct.last.u8, primitive.last.u8) &&
    $m_sr_BoxesRunTime$().g(primitive.first.f32, struct.first.f32) &&
    $m_sr_BoxesRunTime$().g(primitive.first.u8, struct.first.u8) &&
    $m_sr_BoxesRunTime$().g(primitive.last.f32, struct.last.f32) &&
    $m_sr_BoxesRunTime$().g(primitive.last.u8, struct.last.u8);
  var value$1 =
    $m_sr_BoxesRunTime$().g(directNested.first.x, namedNested.first.x) &&
    $m_sr_BoxesRunTime$().g(directNested.first.y, namedNested.first.y) &&
    $m_sr_BoxesRunTime$().g(directNested.first.life, namedNested.first.life) &&
    $m_sr_BoxesRunTime$().g(directNested.last.x, namedNested.last.x) &&
    $m_sr_BoxesRunTime$().g(directNested.last.y, namedNested.last.y) &&
    $m_sr_BoxesRunTime$().g(directNested.last.life, namedNested.last.life);
  var value$2 =
    $m_sr_BoxesRunTime$().g(directNested.first.x, tupleSetNested.first.x) &&
    $m_sr_BoxesRunTime$().g(directNested.first.y, tupleSetNested.first.y) &&
    $m_sr_BoxesRunTime$().g(
      directNested.first.life,
      tupleSetNested.first.life,
    ) &&
    $m_sr_BoxesRunTime$().g(directNested.last.x, tupleSetNested.last.x) &&
    $m_sr_BoxesRunTime$().g(directNested.last.y, tupleSetNested.last.y) &&
    $m_sr_BoxesRunTime$().g(directNested.last.life, tupleSetNested.last.life);
  return {
    direct: direct,
    primitive: primitive,
    struct: struct,
    directNested: directNested,
    namedNested: namedNested,
    tupleSetNested: tupleSetNested,
    primitiveEqual: value,
    nestedEqual: value$1,
    tupleSetEqual: value$2,
  };
};
var $d_Lbufferdata_ZeroCostValidation$ = new $TypeData().i(
  $c_Lbufferdata_ZeroCostValidation$,
  "bufferdata.ZeroCostValidation$",
  {
    W: 1,
  },
);
var $n_Lbufferdata_ZeroCostValidation$;
function $m_Lbufferdata_ZeroCostValidation$() {
  if (!$n_Lbufferdata_ZeroCostValidation$) {
    $n_Lbufferdata_ZeroCostValidation$ =
      new $c_Lbufferdata_ZeroCostValidation$();
  }
  return $n_Lbufferdata_ZeroCostValidation$;
}
/** @constructor */
function $c_Lexample_BufferDataDemo$() {}
$p = $c_Lexample_BufferDataDemo$.prototype = new $h_O();
$p.constructor = $c_Lexample_BufferDataDemo$;
/** @constructor */
function $h_Lexample_BufferDataDemo$() {}
$h_Lexample_BufferDataDemo$.prototype = $p;
$p.b3 = function () {
  $m_s_Console$().o().n("Creating array of 10 structs (F32, U8)\n");
  var buffer = new ArrayBuffer(50);
  var _1 = new DataView(buffer);
  $m_s_Console$().o().n("Array length: 10\n");
  $m_s_Console$().o().n("Struct size: 5 bytes\n");
  var i = 0;
  while (true) {
    var x0 = i;
    var _2 = Math.imul(5, x0);
    var value$proxy1 = Math.fround(1.5 * Math.fround(x0));
    _1.setFloat32(_2, value$proxy1, true);
    var _2$1 = Math.imul(5, x0);
    var offset$proxy2 = (4 + _2$1) | 0;
    var value$proxy2 = (Math.imul(10, x0) << 16) >> 16;
    _1.setUint8(offset$proxy2, value$proxy2);
    if (i === 9) {
      break;
    }
    i = (1 + i) | 0;
  }
  $m_s_Console$().o().n("\nReading back values:\n");
  var i$1 = 0;
  while (true) {
    var x0$1 = i$1;
    var _2$2 = Math.imul(5, x0$1);
    var f32Val = Math.fround(_1.getFloat32(_2$2, true));
    var _2$3 = Math.imul(5, x0$1);
    var offset$proxy4 = (4 + _2$3) | 0;
    var u8Val = _1.getUint8(offset$proxy4) | 0;
    var x = "  particles(" + x0$1 + "): F32=" + f32Val + ", U8=" + u8Val;
    $m_s_Console$()
      .o()
      .n(x + "\n");
    if (i$1 === 9) {
      break;
    }
    i$1 = (1 + i$1) | 0;
  }
};
$p.al = function (count) {
  var buffer = new ArrayBuffer(Math.imul(5, count));
  var _1 = new DataView(buffer);
  var isEmpty = count <= 0;
  var scala$collection$immutable$Range$$lastElement = (-1 + count) | 0;
  if (!isEmpty) {
    var i = 0;
    while (true) {
      var x0 = i;
      var _2 = Math.imul(5, x0);
      var value$proxy3 = Math.fround(x0);
      _1.setFloat32(_2, value$proxy3, true);
      var _2$1 = Math.imul(5, x0);
      var offset$proxy6 = (4 + _2$1) | 0;
      var value$proxy4 = ((x0 % 256 | 0) << 16) >> 16;
      _1.setUint8(offset$proxy6, value$proxy4);
      if (i === scala$collection$immutable$Range$$lastElement) {
        break;
      }
      i = (1 + i) | 0;
    }
  }
  var value = Math.imul(5, count);
  var value$1 = Math.fround(_1.getFloat32(0, true));
  var value$2 = _1.getUint8(4) | 0;
  var _2$2 = {
    f32: value$1,
    u8: value$2,
  };
  var index$proxy1 = (-1 + count) | 0;
  var _2$3 = Math.imul(5, index$proxy1);
  var value$3 = Math.fround(_1.getFloat32(_2$3, true));
  var index$proxy2 = (-1 + count) | 0;
  var _2$4 = Math.imul(5, index$proxy2);
  var offset$proxy10 = (4 + _2$4) | 0;
  var value$4 = _1.getUint8(offset$proxy10) | 0;
  var _2$5 = {
    f32: value$3,
    u8: value$4,
  };
  return {
    count: count,
    structSize: 5,
    totalBytes: value,
    firstElement: _2$2,
    lastElement: _2$5,
  };
};
var $d_Lexample_BufferDataDemo$ = new $TypeData().i(
  $c_Lexample_BufferDataDemo$,
  "example.BufferDataDemo$",
  {
    Z: 1,
  },
);
var $n_Lexample_BufferDataDemo$;
function $m_Lexample_BufferDataDemo$() {
  if (!$n_Lexample_BufferDataDemo$) {
    $n_Lexample_BufferDataDemo$ = new $c_Lexample_BufferDataDemo$();
  }
  return $n_Lexample_BufferDataDemo$;
}
/** @constructor */
function $c_Lexample_Main$package$() {}
$p = $c_Lexample_Main$package$.prototype = new $h_O();
$p.constructor = $c_Lexample_Main$package$;
/** @constructor */
function $h_Lexample_Main$package$() {}
$h_Lexample_Main$package$.prototype = $p;
$p.aC = function () {
  $m_s_Console$().o().n("Hello from Scala.js!\n");
  $m_s_Console$().o().n("Running on: Scala.js on Node.js\n");
  var x = "" + $m_Lexample_Utils$().aR("Developer");
  $m_s_Console$()
    .o()
    .n(x + "\n");
  var x$1 = "Current timestamp: " + $m_Lexample_Utils$().b6();
  $m_s_Console$()
    .o()
    .n(x$1 + "\n");
  $m_s_Console$().o().n("\n--- BufferData Demo ---\n");
  $m_Lexample_BufferDataDemo$().b3();
  $m_s_Console$().o().n("\n--- BufferData createParticles ---\n");
  var jsData = $m_Lexample_BufferDataDemo$().al(5);
  $m_s_Console$().o().n("Created particle buffer:\n");
  var x$2 = JSON.stringify(jsData, void 0, 2);
  $m_s_Console$()
    .o()
    .n(x$2 + "\n");
};
$p.b2 = function (width, height) {
  var scene = $m_Lraytracer_scene_scene$package$().aI();
  var pixels = $m_Lraytracer_render_render$package$().b1(
    scene.M,
    scene.L,
    width,
    height,
    100,
    20,
    new $c_Lraytracer_hittable_hittable$package$given＿Hittable＿StructArray(
      $m_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$(),
    ),
  );
  return pixels.a.buffer;
};
var $d_Lexample_Main$package$ = new $TypeData().i(
  $c_Lexample_Main$package$,
  "example.Main$package$",
  {
    a0: 1,
  },
);
var $n_Lexample_Main$package$;
function $m_Lexample_Main$package$() {
  if (!$n_Lexample_Main$package$) {
    $n_Lexample_Main$package$ = new $c_Lexample_Main$package$();
  }
  return $n_Lexample_Main$package$;
}
/** @constructor */
function $c_Lexample_Utils$() {}
$p = $c_Lexample_Utils$.prototype = new $h_O();
$p.constructor = $c_Lexample_Utils$;
/** @constructor */
function $h_Lexample_Utils$() {}
$h_Lexample_Utils$.prototype = $p;
$p.aR = function (name) {
  return "Hello, " + name + "!";
};
$p.b6 = function () {
  return +Date.now();
};
var $d_Lexample_Utils$ = new $TypeData().i(
  $c_Lexample_Utils$,
  "example.Utils$",
  {
    a1: 1,
  },
);
var $n_Lexample_Utils$;
function $m_Lexample_Utils$() {
  if (!$n_Lexample_Utils$) {
    $n_Lexample_Utils$ = new $c_Lexample_Utils$();
  }
  return $n_Lexample_Utils$;
}
function $s_Lexample_app__main__AT__V(args) {
  try {
    $m_Lexample_Main$package$().aC();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().b5(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.a9 = null;
  this.aB = null;
  $n_jl_System$Streams$ = this;
  this.a9 = new $c_jl_JSConsoleBasedPrintStream(false);
  this.aB = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i(
  $c_jl_System$Streams$,
  "java.lang.System$Streams$",
  {
    ah: 1,
  },
);
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if (!$n_jl_System$Streams$) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return $thiz === that;
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(
  0,
  "java.lang.Void",
  {
    aj: 1,
  },
  (x) => x === void 0,
);
function $s_RTLong__remainderUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.b0(a.c, a.d, b.c, b.d), this$1.f);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.aZ(a.c, a.d, b.c, b.d), this$1.f);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.aK(a.c, a.d, b.c, b.d), this$1.f);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.aJ(a.c, a.d, b.c, b.d), this$1.f);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong(
    fpBitsDataView.getInt32(0, true) | 0,
    fpBitsDataView.getInt32(4, true) | 0,
  );
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.au(value), this$1.f);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, value >> 31);
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = a.d;
  return hi !== 0 ? Math.clz32(hi) : (32 + Math.clz32(a.c)) | 0;
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = a.c;
  var hi = a.d;
  return Math.fround(
    4.294967296e9 * hi +
      (((-2097152 & (hi ^ (hi >> 10))) === 0 || (65535 & lo) === 0
        ? lo
        : 32768 | (-32768 & lo)) >>>
        0.0),
  );
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = a.c;
  return 4.294967296e9 * a.d + (lo >>> 0.0);
}
function $s_RTLong__toInt__RTLong__I(a) {
  return a.c;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, a.c, true);
  fpBitsDataView.setInt32(4, a.d, true);
  return +fpBitsDataView.getFloat64(0, true);
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = a.c;
  var blo = b.c;
  var a0 = 65535 & alo;
  var a1 = (alo >>> 16) | 0;
  var b0 = 65535 & blo;
  var b1 = (blo >>> 16) | 0;
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = (a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0;
  var c1part = (((a0b0 >>> 16) | 0) + a0b1) | 0;
  return new $c_RTLong(
    lo,
    (((((((Math.imul(alo, b.d) + Math.imul(a.d, blo)) | 0) +
      Math.imul(a1, b1)) |
      0) +
      ((c1part >>> 16) | 0)) |
      0) +
      (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) |
      0,
  );
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = a.c;
  var blo = b.c;
  var lo = (alo - blo) | 0;
  return new $c_RTLong(
    lo,
    (((a.d - b.d) | 0) + (((~alo & blo) | (~(alo ^ blo) & lo)) >> 31)) | 0,
  );
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = a.c;
  var blo = b.c;
  var lo = (alo + blo) | 0;
  return new $c_RTLong(
    lo,
    (((a.d + b.d) | 0) + ((((alo & blo) | ((alo | blo) & ~lo)) >>> 31) | 0)) |
      0,
  );
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = a.d;
  return new $c_RTLong(
    (32 & n) === 0 ? (a.c >>> n) | 0 | ((hi << 1) << ((31 - n) | 0)) : hi >> n,
    (32 & n) === 0 ? hi >> n : hi >> 31,
  );
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = a.d;
  return new $c_RTLong(
    (32 & n) === 0
      ? (a.c >>> n) | 0 | ((hi << 1) << ((31 - n) | 0))
      : (hi >>> n) | 0,
    (32 & n) === 0 ? (hi >>> n) | 0 : 0,
  );
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = a.c;
  return new $c_RTLong(
    (32 & n) === 0 ? lo << n : 0,
    (32 & n) === 0
      ? (((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0 | (a.d << n)
      : lo << n,
  );
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(a.c ^ b.c, a.d ^ b.d);
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(a.c & b.c, a.d & b.d);
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(a.c | b.c, a.d | b.d);
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = a.d;
  var bhi = b.d;
  return ahi === bhi ? a.c >>> 0 >= b.c >>> 0 : ahi >>> 0 >= bhi >>> 0;
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = a.d;
  var bhi = b.d;
  return ahi === bhi ? a.c >>> 0 > b.c >>> 0 : ahi >>> 0 > bhi >>> 0;
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = a.d;
  var bhi = b.d;
  return ahi === bhi ? a.c >>> 0 <= b.c >>> 0 : ahi >>> 0 <= bhi >>> 0;
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = a.d;
  var bhi = b.d;
  return ahi === bhi ? a.c >>> 0 < b.c >>> 0 : ahi >>> 0 < bhi >>> 0;
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = a.d;
  var bhi = b.d;
  return ahi === bhi ? a.c >>> 0 >= b.c >>> 0 : ahi > bhi;
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = a.d;
  var bhi = b.d;
  return ahi === bhi ? a.c >>> 0 > b.c >>> 0 : ahi > bhi;
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = a.d;
  var bhi = b.d;
  return ahi === bhi ? a.c >>> 0 <= b.c >>> 0 : ahi < bhi;
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = a.d;
  var bhi = b.d;
  return ahi === bhi ? a.c >>> 0 < b.c >>> 0 : ahi < bhi;
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return !(a.c === b.c && a.d === b.d);
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return a.c === b.c && a.d === b.d;
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.c = 0;
  this.d = 0;
  this.c = lo;
  this.d = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {}
$h_RTLong.prototype = $p;
$p.i = function (that) {
  return that instanceof $c_RTLong && this.c === that.c && this.d === that.d;
};
$p.r = function () {
  return this.c ^ this.d;
};
$p.j = function () {
  return $m_RTLong$().av(this.c, this.d);
};
$p.ba = function () {
  return (this.c << 24) >> 24;
};
$p.bj = function () {
  return (this.c << 16) >> 16;
};
$p.bg = function () {
  return this.c;
};
$p.bh = function () {
  return this;
};
$p.be = function () {
  var lo = this.c;
  var hi = this.d;
  return Math.fround(
    4.294967296e9 * hi +
      (((-2097152 & (hi ^ (hi >> 10))) === 0 || (65535 & lo) === 0
        ? lo
        : 32768 | (-32768 & lo)) >>>
        0.0),
  );
};
$p.bd = function () {
  var lo = this.c;
  return 4.294967296e9 * this.d + (lo >>> 0.0);
};
$p.bc = function (that) {
  return $m_RTLong$().at(this.c, this.d, that.c, that.d);
};
$p.bb = function (that) {
  return $m_RTLong$().at(this.c, this.d, that.c, that.d);
};
function $isArrayOf_RTLong(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.I
  );
}
var $d_RTLong = new $TypeData().i(
  $c_RTLong,
  "org.scalajs.linker.runtime.RuntimeLong",
  {
    I: 1,
  },
);
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((-2097152 & ahi) === 0) {
    if ((-2097152 & bhi) === 0) {
      var aDouble = 4.294967296e9 * ahi + (alo >>> 0.0);
      var bDouble = 4.294967296e9 * bhi + (blo >>> 0.0);
      var rDouble = aDouble / bDouble;
      $thiz.f = (rDouble / 4.294967296e9) | 0.0;
      return rDouble | 0.0;
    } else {
      $thiz.f = 0;
      return 0;
    }
  } else if (bhi === 0 && (blo & ((-1 + blo) | 0)) === 0) {
    var pow = (31 - Math.clz32(blo)) | 0;
    $thiz.f = (ahi >>> pow) | 0;
    return (alo >>> pow) | 0 | ((ahi << 1) << ((31 - pow) | 0));
  } else if (blo === 0 && (bhi & ((-1 + bhi) | 0)) === 0) {
    var pow$2 = (31 - Math.clz32(bhi)) | 0;
    $thiz.f = 0;
    return (ahi >>> pow$2) | 0;
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I(
      $thiz,
      alo,
      ahi,
      blo,
      bhi,
      true,
    );
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I(
  $thiz,
  alo,
  ahi,
  blo,
  bhi,
) {
  if ((-2097152 & ahi) === 0) {
    if ((-2097152 & bhi) === 0) {
      var aDouble = 4.294967296e9 * ahi + (alo >>> 0.0);
      var bDouble = 4.294967296e9 * bhi + (blo >>> 0.0);
      var rDouble = aDouble % bDouble;
      $thiz.f = (rDouble / 4.294967296e9) | 0.0;
      return rDouble | 0.0;
    } else {
      $thiz.f = ahi;
      return alo;
    }
  } else if (bhi === 0 && (blo & ((-1 + blo) | 0)) === 0) {
    $thiz.f = 0;
    return alo & ((-1 + blo) | 0);
  } else if (blo === 0 && (bhi & ((-1 + bhi) | 0)) === 0) {
    $thiz.f = ahi & ((-1 + bhi) | 0);
    return alo;
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I(
      $thiz,
      alo,
      ahi,
      blo,
      bhi,
      false,
    );
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I(
  $thiz,
  alo,
  ahi,
  blo,
  bhi,
  askQuotient,
) {
  var shift =
    ((bhi !== 0 ? Math.clz32(bhi) : (32 + Math.clz32(blo)) | 0) -
      (ahi !== 0 ? Math.clz32(ahi) : (32 + Math.clz32(alo)) | 0)) |
    0;
  var b = shift;
  var lo = (32 & b) === 0 ? blo << b : 0;
  var hi =
    (32 & b) === 0
      ? (((blo >>> 1) | 0) >>> ((31 - b) | 0)) | 0 | (bhi << b)
      : blo << b;
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (shift >= 0 && (-2097152 & remHi) !== 0) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (
      ahi$1 === bhi$1 ? alo$1 >>> 0 >= blo$1 >>> 0 : ahi$1 >>> 0 >= bhi$1 >>> 0
    ) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = (lo$1 - lo$2) | 0;
      var hi$3 =
        (((hi$1 - hi$2) | 0) +
          (((~lo$1 & lo$2) | (~(lo$1 ^ lo$2) & lo$3)) >> 31)) |
        0;
      remLo = lo$3;
      remHi = hi$3;
      if (shift < 32) {
        quotLo = quotLo | (1 << shift);
      } else {
        quotHi = quotHi | (1 << shift);
      }
    }
    shift = (-1 + shift) | 0;
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (lo$4 >>> 1) | 0 | (hi$4 << 31);
    var hi$5 = (hi$4 >>> 1) | 0;
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (ahi$2 === bhi ? alo$2 >>> 0 >= blo >>> 0 : ahi$2 >>> 0 >= bhi >>> 0) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = 4.294967296e9 * hi$6 + (lo$6 >>> 0.0);
    var bDouble = 4.294967296e9 * bhi + (blo >>> 0.0);
    if (askQuotient) {
      var x = remDouble / bDouble;
      var lo$7 = x | 0.0;
      var hi$7 = (x / 4.294967296e9) | 0.0;
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = (lo$8 + lo$7) | 0;
      var hi$9 =
        (((hi$8 + hi$7) | 0) +
          ((((lo$8 & lo$7) | ((lo$8 | lo$7) & ~lo$9)) >>> 31) | 0)) |
        0;
      $thiz.f = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = remDouble % bDouble;
      $thiz.f = (rem_mod_bDouble / 4.294967296e9) | 0.0;
      return rem_mod_bDouble | 0.0;
    }
  } else if (askQuotient) {
    $thiz.f = quotHi;
    return quotLo;
  } else {
    $thiz.f = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.f = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {}
$h_RTLong$.prototype = $p;
$p.av = function (lo, hi) {
  if (hi === lo >> 31) {
    return "" + lo;
  } else if ((-2097152 & (hi ^ (hi >> 10))) === 0) {
    return "" + (4.294967296e9 * hi + (lo >>> 0.0));
  } else {
    var sign = hi >> 31;
    var xlo = lo ^ sign;
    var rlo = (xlo - sign) | 0;
    var rhi = ((hi ^ sign) + (((xlo & ~rlo) >>> 31) | 0)) | 0;
    var approxNum = 4.294967296e9 * (rhi >>> 0.0) + (rlo >>> 0.0);
    var approxQuot = +Math.floor(1.0e-9 * approxNum);
    var approxRem = (rlo - Math.imul(1000000000, approxQuot | 0.0)) | 0;
    if (approxRem < 0) {
      approxQuot = approxQuot - 1.0;
      approxRem = (1000000000 + approxRem) | 0;
    } else if (approxRem >= 1000000000) {
      approxQuot = approxQuot + 1.0;
      approxRem = (-1000000000 + approxRem) | 0;
    }
    var this$4 = approxRem;
    var remStr = "" + this$4;
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = "" + $x_1 + "000000000".substring(start) + remStr;
    return hi < 0 ? "-" + s : s;
  }
};
$p.au = function (value) {
  if (value < -9.223372036854776e18) {
    this.f = -2147483648;
    return 0;
  } else if (value >= 9.223372036854776e18) {
    this.f = 2147483647;
    return -1;
  } else {
    var rawLo = value | 0.0;
    var rawHi = (value / 4.294967296e9) | 0.0;
    this.f = value < 0.0 && rawLo !== 0 ? (-1 + rawHi) | 0 : rawHi;
    return rawLo;
  }
};
$p.at = function (alo, ahi, blo, bhi) {
  return ahi === bhi
    ? alo === blo
      ? 0
      : alo >>> 0 < blo >>> 0
        ? -1
        : 1
    : ahi < bhi
      ? -1
      : 1;
};
$p.aJ = function (alo, ahi, blo, bhi) {
  if ((blo | bhi) === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if (ahi === alo >> 31) {
    if (bhi === blo >> 31) {
      if (alo === -2147483648 && blo === -1) {
        this.f = 0;
        return -2147483648;
      } else {
        var lo = (alo / $checkIntDivisor(blo)) | 0;
        this.f = lo >> 31;
        return lo;
      }
    } else if (alo === -2147483648 && blo === -2147483648 && bhi === 0) {
      this.f = -1;
      return -1;
    } else {
      this.f = 0;
      return 0;
    }
  } else {
    var sign = ahi >> 31;
    var xlo = alo ^ sign;
    var rlo = (xlo - sign) | 0;
    var rhi = ((ahi ^ sign) + (((xlo & ~rlo) >>> 31) | 0)) | 0;
    var sign$1 = bhi >> 31;
    var xlo$1 = blo ^ sign$1;
    var rlo$1 = (xlo$1 - sign$1) | 0;
    var rhi$1 = ((bhi ^ sign$1) + (((xlo$1 & ~rlo$1) >>> 31) | 0)) | 0;
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(
      this,
      rlo,
      rhi,
      rlo$1,
      rhi$1,
    );
    if ((ahi ^ bhi) >= 0) {
      return absRLo;
    } else {
      var hi = this.f;
      var lo$1 = -absRLo | 0;
      var hi$1 = ((-hi | 0) + ((absRLo | lo$1) >> 31)) | 0;
      this.f = hi$1;
      return lo$1;
    }
  }
};
$p.aK = function (alo, ahi, blo, bhi) {
  if ((blo | bhi) === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if (ahi === 0) {
    if (bhi === 0) {
      this.f = 0;
      return ((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0;
    } else {
      this.f = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
};
$p.aZ = function (alo, ahi, blo, bhi) {
  if ((blo | bhi) === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if (ahi === alo >> 31) {
    if (bhi === blo >> 31) {
      var lo = alo % $checkIntDivisor(blo) | 0;
      this.f = lo >> 31;
      return lo;
    } else if (alo === -2147483648 && blo === -2147483648 && bhi === 0) {
      this.f = 0;
      return 0;
    } else {
      this.f = ahi;
      return alo;
    }
  } else {
    var sign = ahi >> 31;
    var xlo = alo ^ sign;
    var rlo = (xlo - sign) | 0;
    var rhi = ((ahi ^ sign) + (((xlo & ~rlo) >>> 31) | 0)) | 0;
    var sign$1 = bhi >> 31;
    var xlo$1 = blo ^ sign$1;
    var rlo$1 = (xlo$1 - sign$1) | 0;
    var rhi$1 = ((bhi ^ sign$1) + (((xlo$1 & ~rlo$1) >>> 31) | 0)) | 0;
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(
      this,
      rlo,
      rhi,
      rlo$1,
      rhi$1,
    );
    if (ahi < 0) {
      var hi = this.f;
      var lo$1 = -absRLo | 0;
      var hi$1 = ((-hi | 0) + ((absRLo | lo$1) >> 31)) | 0;
      this.f = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
};
$p.b0 = function (alo, ahi, blo, bhi) {
  if ((blo | bhi) === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if (ahi === 0) {
    if (bhi === 0) {
      this.f = 0;
      return (alo >>> 0) % ($checkIntDivisor(blo) >>> 0) | 0;
    } else {
      this.f = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(
      this,
      alo,
      ahi,
      blo,
      bhi,
    );
  }
};
var $d_RTLong$ = new $TypeData().i(
  $c_RTLong$,
  "org.scalajs.linker.runtime.RuntimeLong$",
  {
    al: 1,
  },
);
var $n_RTLong$;
function $m_RTLong$() {
  if (!$n_RTLong$) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_Lraytracer_hit_hit$package$() {}
$p = $c_Lraytracer_hit_hit$package$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_hit_hit$package$;
/** @constructor */
function $h_Lraytracer_hit_hit$package$() {}
$h_Lraytracer_hit_hit$package$.prototype = $p;
$p.aG = function (h, other) {
  var offset$proxy1 = h.b | 0;
  var _1 = h.a;
  var offset$proxy2 = other.b | 0;
  var _1$1 = other.a;
  var value$proxy1 = +_1$1.getFloat64(offset$proxy2, true);
  _1.setFloat64(offset$proxy1, value$proxy1, true);
  var offset$proxy3 = (8 + (other.b | 0)) | 0;
  var _1$2 = other.a;
  var offset$proxy4 = (8 + (h.b | 0)) | 0;
  var _1$3 = h.a;
  var value$proxy2 = +_1$2.getFloat64(offset$proxy3, true);
  _1$3.setFloat64(offset$proxy4, value$proxy2, true);
  var offset$proxy7 = (8 + offset$proxy4) | 0;
  var offset$proxy8 = (8 + offset$proxy3) | 0;
  var value$proxy3 = +_1$2.getFloat64(offset$proxy8, true);
  _1$3.setFloat64(offset$proxy7, value$proxy3, true);
  var offset$proxy9 = (16 + offset$proxy4) | 0;
  var offset$proxy10 = (16 + offset$proxy3) | 0;
  var value$proxy4 = +_1$2.getFloat64(offset$proxy10, true);
  _1$3.setFloat64(offset$proxy9, value$proxy4, true);
  var offset$proxy11 = (32 + (other.b | 0)) | 0;
  var _1$4 = other.a;
  var offset$proxy12 = (32 + (h.b | 0)) | 0;
  var _1$5 = h.a;
  var value$proxy5 = +_1$4.getFloat64(offset$proxy11, true);
  _1$5.setFloat64(offset$proxy12, value$proxy5, true);
  var offset$proxy15 = (8 + offset$proxy12) | 0;
  var offset$proxy16 = (8 + offset$proxy11) | 0;
  var value$proxy6 = +_1$4.getFloat64(offset$proxy16, true);
  _1$5.setFloat64(offset$proxy15, value$proxy6, true);
  var offset$proxy17 = (16 + offset$proxy12) | 0;
  var offset$proxy18 = (16 + offset$proxy11) | 0;
  var value$proxy7 = +_1$4.getFloat64(offset$proxy18, true);
  _1$5.setFloat64(offset$proxy17, value$proxy7, true);
  var offset$proxy19 = (56 + (h.b | 0)) | 0;
  var _1$6 = h.a;
  var offset$proxy20 = (56 + (other.b | 0)) | 0;
  var _1$7 = other.a;
  var value$proxy8 = _1$7.getUint8(offset$proxy20) | 0;
  _1$6.setUint8(offset$proxy19, value$proxy8);
  var offset$proxy21 = (57 + (other.b | 0)) | 0;
  var _1$8 = other.a;
  var offset$proxy22 = (57 + (h.b | 0)) | 0;
  var _1$9 = h.a;
  var value$proxy9 = _1$8.getUint8(offset$proxy21) | 0;
  _1$9.setUint8(offset$proxy22, value$proxy9);
  var offset$proxy25 = (1 + offset$proxy21) | 0;
  var offset$proxy26 = (1 + offset$proxy22) | 0;
  var value$proxy10 = +_1$8.getFloat64(offset$proxy25, true);
  _1$9.setFloat64(offset$proxy26, value$proxy10, true);
  var offset$proxy29 = (8 + offset$proxy26) | 0;
  var offset$proxy30 = (8 + offset$proxy25) | 0;
  var value$proxy11 = +_1$8.getFloat64(offset$proxy30, true);
  _1$9.setFloat64(offset$proxy29, value$proxy11, true);
  var offset$proxy31 = (16 + offset$proxy26) | 0;
  var offset$proxy32 = (16 + offset$proxy25) | 0;
  var value$proxy12 = +_1$8.getFloat64(offset$proxy32, true);
  _1$9.setFloat64(offset$proxy31, value$proxy12, true);
  var offset$proxy33 = (25 + offset$proxy22) | 0;
  var offset$proxy34 = (25 + offset$proxy21) | 0;
  var value$proxy13 = +_1$8.getFloat64(offset$proxy34, true);
  _1$9.setFloat64(offset$proxy33, value$proxy13, true);
};
var $d_Lraytracer_hit_hit$package$ = new $TypeData().i(
  $c_Lraytracer_hit_hit$package$,
  "raytracer.hit.hit$package$",
  {
    am: 1,
  },
);
var $n_Lraytracer_hit_hit$package$;
function $m_Lraytracer_hit_hit$package$() {
  if (!$n_Lraytracer_hit_hit$package$) {
    $n_Lraytracer_hit_hit$package$ = new $c_Lraytracer_hit_hit$package$();
  }
  return $n_Lraytracer_hit_hit$package$;
}
/** @constructor */
function $c_Lraytracer_render_render$package$() {}
$p = $c_Lraytracer_render_render$package$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_render_render$package$;
/** @constructor */
function $h_Lraytracer_render_render$package$() {}
$h_Lraytracer_render_render$package$.prototype = $p;
$p.aH = function (origin, focalLength, aspectRatio) {
  var viewportWidth = 2.0 * aspectRatio;
  var buffer = new ArrayBuffer(24);
  var v = new $c_T2(new DataView(buffer), 0);
  var offset$proxy211 = v.b | 0;
  var _1$1 = v.a;
  _1$1.setFloat64(offset$proxy211, viewportWidth, true);
  var offset$proxy212 = (8 + (v.b | 0)) | 0;
  var _1$2 = v.a;
  _1$2.setFloat64(offset$proxy212, 0.0, true);
  var offset$proxy213 = (16 + (v.b | 0)) | 0;
  var _1$3 = v.a;
  _1$3.setFloat64(offset$proxy213, 0.0, true);
  var buffer$2 = new ArrayBuffer(24);
  var v$2 = new $c_T2(new DataView(buffer$2), 0);
  var offset$proxy214 = v$2.b | 0;
  var _1$5 = v$2.a;
  _1$5.setFloat64(offset$proxy214, 0.0, true);
  var offset$proxy215 = (8 + (v$2.b | 0)) | 0;
  var _1$6 = v$2.a;
  _1$6.setFloat64(offset$proxy215, 2.0, true);
  var offset$proxy216 = (16 + (v$2.b | 0)) | 0;
  var _1$7 = v$2.a;
  _1$7.setFloat64(offset$proxy216, 0.0, true);
  var buffer$3 = new ArrayBuffer(24);
  var _1$8 = new DataView(buffer$3);
  var offset$proxy218 = v.b | 0;
  var _1$9 = v.a;
  var value$proxy58 = 0.5 * +_1$9.getFloat64(offset$proxy218, true);
  _1$8.setFloat64(0, value$proxy58, true);
  var offset$proxy220 = (8 + (v.b | 0)) | 0;
  var _1$10 = v.a;
  var value$proxy59 = 0.5 * +_1$10.getFloat64(offset$proxy220, true);
  _1$8.setFloat64(8, value$proxy59, true);
  var offset$proxy222 = (16 + (v.b | 0)) | 0;
  var _1$11 = v.a;
  var value$proxy60 = 0.5 * +_1$11.getFloat64(offset$proxy222, true);
  _1$8.setFloat64(16, value$proxy60, true);
  var buffer$4 = new ArrayBuffer(24);
  var _1$12 = new DataView(buffer$4);
  var offset$proxy224 = origin.b | 0;
  var _1$13 = origin.a;
  var value$proxy61 =
    +_1$13.getFloat64(offset$proxy224, true) - +_1$8.getFloat64(0, true);
  _1$12.setFloat64(0, value$proxy61, true);
  var offset$proxy227 = (8 + (origin.b | 0)) | 0;
  var _1$14 = origin.a;
  var value$proxy62 =
    +_1$14.getFloat64(offset$proxy227, true) - +_1$8.getFloat64(8, true);
  _1$12.setFloat64(8, value$proxy62, true);
  var offset$proxy230 = (16 + (origin.b | 0)) | 0;
  var _1$15 = origin.a;
  var value$proxy63 =
    +_1$15.getFloat64(offset$proxy230, true) - +_1$8.getFloat64(16, true);
  _1$12.setFloat64(16, value$proxy63, true);
  var buffer$5 = new ArrayBuffer(24);
  var _1$16 = new DataView(buffer$5);
  var offset$proxy233 = v$2.b | 0;
  var _1$17 = v$2.a;
  var value$proxy64 = 0.5 * +_1$17.getFloat64(offset$proxy233, true);
  _1$16.setFloat64(0, value$proxy64, true);
  var offset$proxy235 = (8 + (v$2.b | 0)) | 0;
  var _1$18 = v$2.a;
  var value$proxy65 = 0.5 * +_1$18.getFloat64(offset$proxy235, true);
  _1$16.setFloat64(8, value$proxy65, true);
  var offset$proxy237 = (16 + (v$2.b | 0)) | 0;
  var _1$19 = v$2.a;
  var value$proxy66 = 0.5 * +_1$19.getFloat64(offset$proxy237, true);
  _1$16.setFloat64(16, value$proxy66, true);
  var buffer$6 = new ArrayBuffer(24);
  var _1$20 = new DataView(buffer$6);
  var value$proxy67 = +_1$12.getFloat64(0, true) - +_1$16.getFloat64(0, true);
  _1$20.setFloat64(0, value$proxy67, true);
  var value$proxy68 = +_1$12.getFloat64(8, true) - +_1$16.getFloat64(8, true);
  _1$20.setFloat64(8, value$proxy68, true);
  var value$proxy69 = +_1$12.getFloat64(16, true) - +_1$16.getFloat64(16, true);
  _1$20.setFloat64(16, value$proxy69, true);
  var buffer$7 = new ArrayBuffer(24);
  var _1$21 = new DataView(buffer$7);
  _1$21.setFloat64(0, 0.0, true);
  _1$21.setFloat64(8, 0.0, true);
  _1$21.setFloat64(16, focalLength, true);
  var buffer$8 = new ArrayBuffer(24);
  var res$5 = new $c_T2(new DataView(buffer$8), 0);
  var offset$proxy250 = res$5.b | 0;
  var _1$23 = res$5.a;
  var value$proxy70 = +_1$20.getFloat64(0, true) - +_1$21.getFloat64(0, true);
  _1$23.setFloat64(offset$proxy250, value$proxy70, true);
  var offset$proxy253 = (8 + (res$5.b | 0)) | 0;
  var _1$24 = res$5.a;
  var value$proxy71 = +_1$20.getFloat64(8, true) - +_1$21.getFloat64(8, true);
  _1$24.setFloat64(offset$proxy253, value$proxy71, true);
  var offset$proxy256 = (16 + (res$5.b | 0)) | 0;
  var _1$25 = res$5.a;
  var value$proxy72 = +_1$20.getFloat64(16, true) - +_1$21.getFloat64(16, true);
  _1$25.setFloat64(offset$proxy256, value$proxy72, true);
  return new $c_Lraytracer_render_Camera(origin, res$5, v, v$2);
};
$p.b1 = function (
  world,
  camera,
  width,
  height,
  samplesPerPixel,
  maxDepth,
  evidence$1,
) {
  var count$proxy1 = Math.imul(width, height);
  var buffer = new ArrayBuffer(count$proxy1 << 2);
  var pixels = new $c_T2(new DataView(buffer), count$proxy1);
  var buffer$2 = new ArrayBuffer(48);
  var _1$1 = new DataView(buffer$2);
  var buffer$3 = new ArrayBuffer(24);
  var _1$2 = new DataView(buffer$3);
  var y = 0;
  while (y < height) {
    console.log("Rendering image row " + ((1 + y) | 0));
    var x = 0;
    while (x < width) {
      _1$2.setFloat64(0, 0.0, true);
      _1$2.setFloat64(8, 0.0, true);
      _1$2.setFloat64(16, 0.0, true);
      var s$1 = 0;
      while (s$1 < samplesPerPixel) {
        var u = (x + +Math.random()) / width;
        var v = (((-1 + ((height - y) | 0)) | 0) + +Math.random()) / height;
        var s$proxy264 = camera.t;
        var offset$proxy264 = s$proxy264.b | 0;
        var _1$3 = s$proxy264.a;
        var value$proxy73 = +_1$3.getFloat64(offset$proxy264, true);
        _1$1.setFloat64(0, value$proxy73, true);
        var s$proxy266 = camera.t;
        var offset$proxy266 = (8 + (s$proxy266.b | 0)) | 0;
        var _1$4 = s$proxy266.a;
        var value$proxy74 = +_1$4.getFloat64(offset$proxy266, true);
        _1$1.setFloat64(8, value$proxy74, true);
        var s$proxy268 = camera.t;
        var offset$proxy268 = (16 + (s$proxy268.b | 0)) | 0;
        var _1$5 = s$proxy268.a;
        var value$proxy75 = +_1$5.getFloat64(offset$proxy268, true);
        _1$1.setFloat64(16, value$proxy75, true);
        var buffer$4 = new ArrayBuffer(24);
        var _1$6 = new DataView(buffer$4);
        var s$proxy270 = camera.F;
        var offset$proxy270 = s$proxy270.b | 0;
        var _1$7 = s$proxy270.a;
        var value$proxy76 = +_1$7.getFloat64(offset$proxy270, true) * u;
        _1$6.setFloat64(0, value$proxy76, true);
        var s$proxy272 = camera.F;
        var offset$proxy272 = (8 + (s$proxy272.b | 0)) | 0;
        var _1$8 = s$proxy272.a;
        var value$proxy77 = +_1$8.getFloat64(offset$proxy272, true) * u;
        _1$6.setFloat64(8, value$proxy77, true);
        var s$proxy274 = camera.F;
        var offset$proxy274 = (16 + (s$proxy274.b | 0)) | 0;
        var _1$9 = s$proxy274.a;
        var value$proxy78 = +_1$9.getFloat64(offset$proxy274, true) * u;
        _1$6.setFloat64(16, value$proxy78, true);
        var buffer$5 = new ArrayBuffer(24);
        var _1$10 = new DataView(buffer$5);
        var s$proxy276 = camera.G;
        var offset$proxy276 = s$proxy276.b | 0;
        var _1$11 = s$proxy276.a;
        var value$proxy79 =
          +_1$11.getFloat64(offset$proxy276, true) + +_1$6.getFloat64(0, true);
        _1$10.setFloat64(0, value$proxy79, true);
        var s$proxy279 = camera.G;
        var offset$proxy279 = (8 + (s$proxy279.b | 0)) | 0;
        var _1$12 = s$proxy279.a;
        var value$proxy80 =
          +_1$12.getFloat64(offset$proxy279, true) + +_1$6.getFloat64(8, true);
        _1$10.setFloat64(8, value$proxy80, true);
        var s$proxy282 = camera.G;
        var offset$proxy282 = (16 + (s$proxy282.b | 0)) | 0;
        var _1$13 = s$proxy282.a;
        var value$proxy81 =
          +_1$13.getFloat64(offset$proxy282, true) + +_1$6.getFloat64(16, true);
        _1$10.setFloat64(16, value$proxy81, true);
        var buffer$6 = new ArrayBuffer(24);
        var _1$14 = new DataView(buffer$6);
        var s$proxy285 = camera.H;
        var offset$proxy285 = s$proxy285.b | 0;
        var _1$15 = s$proxy285.a;
        var value$proxy82 = +_1$15.getFloat64(offset$proxy285, true) * v;
        _1$14.setFloat64(0, value$proxy82, true);
        var s$proxy287 = camera.H;
        var offset$proxy287 = (8 + (s$proxy287.b | 0)) | 0;
        var _1$16 = s$proxy287.a;
        var value$proxy83 = +_1$16.getFloat64(offset$proxy287, true) * v;
        _1$14.setFloat64(8, value$proxy83, true);
        var s$proxy289 = camera.H;
        var offset$proxy289 = (16 + (s$proxy289.b | 0)) | 0;
        var _1$17 = s$proxy289.a;
        var value$proxy84 = +_1$17.getFloat64(offset$proxy289, true) * v;
        _1$14.setFloat64(16, value$proxy84, true);
        var buffer$7 = new ArrayBuffer(24);
        var _1$18 = new DataView(buffer$7);
        var value$proxy85 =
          +_1$10.getFloat64(0, true) + +_1$14.getFloat64(0, true);
        _1$18.setFloat64(0, value$proxy85, true);
        var value$proxy86 =
          +_1$10.getFloat64(8, true) + +_1$14.getFloat64(8, true);
        _1$18.setFloat64(8, value$proxy86, true);
        var value$proxy87 =
          +_1$10.getFloat64(16, true) + +_1$14.getFloat64(16, true);
        _1$18.setFloat64(16, value$proxy87, true);
        var buffer$8 = new ArrayBuffer(24);
        var _1$19 = new DataView(buffer$8);
        var $x_1 = _1$18.getFloat64(0, true);
        var s$proxy301 = camera.t;
        var offset$proxy301 = s$proxy301.b | 0;
        var _1$20 = s$proxy301.a;
        var value$proxy88 = +$x_1 - +_1$20.getFloat64(offset$proxy301, true);
        _1$19.setFloat64(0, value$proxy88, true);
        var $x_2 = _1$18.getFloat64(8, true);
        var s$proxy304 = camera.t;
        var offset$proxy304 = (8 + (s$proxy304.b | 0)) | 0;
        var _1$21 = s$proxy304.a;
        var value$proxy89 = +$x_2 - +_1$21.getFloat64(offset$proxy304, true);
        _1$19.setFloat64(8, value$proxy89, true);
        var $x_3 = _1$18.getFloat64(16, true);
        var s$proxy307 = camera.t;
        var offset$proxy307 = (16 + (s$proxy307.b | 0)) | 0;
        var _1$22 = s$proxy307.a;
        var value$proxy90 = +$x_3 - +_1$22.getFloat64(offset$proxy307, true);
        _1$19.setFloat64(16, value$proxy90, true);
        var value$proxy91 = +_1$19.getFloat64(0, true);
        _1$1.setFloat64(24, value$proxy91, true);
        var value$proxy92 = +_1$19.getFloat64(8, true);
        _1$1.setFloat64(32, value$proxy92, true);
        var value$proxy93 = +_1$19.getFloat64(16, true);
        _1$1.setFloat64(40, value$proxy93, true);
        _return: {
          var buffer$1 = new ArrayBuffer(90);
          var hitBuffer = new $c_T2(new DataView(buffer$1), 0);
          var buffer$2$1 = new ArrayBuffer(48);
          var currentRay = new $c_T2(new DataView(buffer$2$1), 0);
          var buffer$3$1 = new ArrayBuffer(48);
          var _1$25 = new DataView(buffer$3$1);
          var buffer$4$1 = new ArrayBuffer(24);
          var _1$26 = new DataView(buffer$4$1);
          var offset$proxy2 = currentRay.b | 0;
          var _1$27 = currentRay.a;
          var value$proxy1 = +_1$1.getFloat64(0, true);
          _1$27.setFloat64(offset$proxy2, value$proxy1, true);
          var offset$proxy5 = (8 + offset$proxy2) | 0;
          var value$proxy2 = +_1$1.getFloat64(8, true);
          _1$27.setFloat64(offset$proxy5, value$proxy2, true);
          var offset$proxy7 = (16 + offset$proxy2) | 0;
          var value$proxy3 = +_1$1.getFloat64(16, true);
          _1$27.setFloat64(offset$proxy7, value$proxy3, true);
          var offset$proxy10 = (24 + (currentRay.b | 0)) | 0;
          var _1$28 = currentRay.a;
          var value$proxy4 = +_1$1.getFloat64(24, true);
          _1$28.setFloat64(offset$proxy10, value$proxy4, true);
          var offset$proxy13 = (8 + offset$proxy10) | 0;
          var value$proxy5 = +_1$1.getFloat64(32, true);
          _1$28.setFloat64(offset$proxy13, value$proxy5, true);
          var offset$proxy15 = (16 + offset$proxy10) | 0;
          var value$proxy6 = +_1$1.getFloat64(40, true);
          _1$28.setFloat64(offset$proxy15, value$proxy6, true);
          var buffer$5$1 = new ArrayBuffer(24);
          var _1$29 = new DataView(buffer$5$1);
          _1$29.setFloat64(0, 1.0, true);
          _1$29.setFloat64(8, 1.0, true);
          _1$29.setFloat64(16, 1.0, true);
          var depth = 0;
          while (depth < maxDepth) {
            if (evidence$1.V(world, currentRay, 0.001, 100000.0, hitBuffer)) {
              var offset$proxy20 = (57 + (hitBuffer.b | 0)) | 0;
              var _1$30 = hitBuffer.a;
              var code$proxy1 = _1$30.getUint8(offset$proxy20) | 0;
              matchResult4: {
                var matType;
                if (code$proxy1 === 0) {
                  var matType =
                    $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType();
                  break matchResult4;
                }
                if (code$proxy1 === 1) {
                  var matType =
                    $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType();
                  break matchResult4;
                }
                throw new $c_jl_IllegalArgumentException(
                  "Unknown MaterialType code: " + code$proxy1,
                );
              }
              var x$2 =
                $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType();
              if (matType === x$2) {
                var l = 2.0;
                while (l >= 1.0) {
                  var d$proxy1 = +Math.random();
                  var x$proxy1 = 2.0 * d$proxy1 - 1.0;
                  var d$proxy2 = +Math.random();
                  var y$proxy1 = 2.0 * d$proxy2 - 1.0;
                  var d$proxy3 = +Math.random();
                  var z$proxy1 = 2.0 * d$proxy3 - 1.0;
                  _1$26.setFloat64(0, x$proxy1, true);
                  _1$26.setFloat64(8, y$proxy1, true);
                  _1$26.setFloat64(16, z$proxy1, true);
                  l =
                    +_1$26.getFloat64(0, true) * +_1$26.getFloat64(0, true) +
                    +_1$26.getFloat64(8, true) * +_1$26.getFloat64(8, true) +
                    +_1$26.getFloat64(16, true) * +_1$26.getFloat64(16, true);
                }
                var a =
                  +_1$26.getFloat64(0, true) * +_1$26.getFloat64(0, true) +
                  +_1$26.getFloat64(8, true) * +_1$26.getFloat64(8, true) +
                  +_1$26.getFloat64(16, true) * +_1$26.getFloat64(16, true);
                var scalar$proxy1 = +Math.sqrt(a);
                var scalar$proxy2 = 1.0 / scalar$proxy1;
                var value$proxy1$1 = +_1$26.getFloat64(0, true) * scalar$proxy2;
                _1$26.setFloat64(0, value$proxy1$1, true);
                var value$proxy2$1 = +_1$26.getFloat64(8, true) * scalar$proxy2;
                _1$26.setFloat64(8, value$proxy2$1, true);
                var value$proxy3$1 =
                  +_1$26.getFloat64(16, true) * scalar$proxy2;
                _1$26.setFloat64(16, value$proxy3$1, true);
                if (
                  +_1$26.getFloat64(0, true) * +_1$26.getFloat64(0, true) +
                    +_1$26.getFloat64(8, true) * +_1$26.getFloat64(8, true) +
                    +_1$26.getFloat64(16, true) * +_1$26.getFloat64(16, true) <
                  1.0e-6
                ) {
                  var offset$proxy28 = (32 + (hitBuffer.b | 0)) | 0;
                  var _1$31 = hitBuffer.a;
                  var value$proxy7 = +_1$31.getFloat64(offset$proxy28, true);
                  _1$26.setFloat64(0, value$proxy7, true);
                  var offset$proxy32 = (8 + offset$proxy28) | 0;
                  var value$proxy8 = +_1$31.getFloat64(offset$proxy32, true);
                  _1$26.setFloat64(8, value$proxy8, true);
                  var offset$proxy34 = (16 + offset$proxy28) | 0;
                  var value$proxy9 = +_1$31.getFloat64(offset$proxy34, true);
                  _1$26.setFloat64(16, value$proxy9, true);
                }
                var offset$proxy35 = (8 + (hitBuffer.b | 0)) | 0;
                var _1$32 = hitBuffer.a;
                var value$proxy10 = +_1$32.getFloat64(offset$proxy35, true);
                _1$25.setFloat64(0, value$proxy10, true);
                var offset$proxy40 = (8 + offset$proxy35) | 0;
                var value$proxy11 = +_1$32.getFloat64(offset$proxy40, true);
                _1$25.setFloat64(8, value$proxy11, true);
                var offset$proxy42 = (16 + offset$proxy35) | 0;
                var value$proxy12 = +_1$32.getFloat64(offset$proxy42, true);
                _1$25.setFloat64(16, value$proxy12, true);
                var offset$proxy43 = (32 + (hitBuffer.b | 0)) | 0;
                var _1$33 = hitBuffer.a;
                var buffer$6$1 = new ArrayBuffer(24);
                var _1$34 = new DataView(buffer$6$1);
                var value$proxy13 =
                  +_1$33.getFloat64(offset$proxy43, true) +
                  +_1$26.getFloat64(0, true);
                _1$34.setFloat64(0, value$proxy13, true);
                var offset$proxy48 = (8 + offset$proxy43) | 0;
                var value$proxy14 =
                  +_1$33.getFloat64(offset$proxy48, true) +
                  +_1$26.getFloat64(8, true);
                _1$34.setFloat64(8, value$proxy14, true);
                var offset$proxy51 = (16 + offset$proxy43) | 0;
                var value$proxy15 =
                  +_1$33.getFloat64(offset$proxy51, true) +
                  +_1$26.getFloat64(16, true);
                _1$34.setFloat64(16, value$proxy15, true);
                var value$proxy16 = +_1$34.getFloat64(0, true);
                _1$25.setFloat64(24, value$proxy16, true);
                var value$proxy17 = +_1$34.getFloat64(8, true);
                _1$25.setFloat64(32, value$proxy17, true);
                var value$proxy18 = +_1$34.getFloat64(16, true);
                _1$25.setFloat64(40, value$proxy18, true);
                var $x_4 = true;
              } else {
                var x$4 =
                  $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType();
                if (matType === x$4) {
                  var offset$proxy60 = (24 + (currentRay.b | 0)) | 0;
                  var _1$35 = currentRay.a;
                  var $x_9 = _1$35.getFloat64(offset$proxy60, true);
                  var $x_8 = _1$35.getFloat64(offset$proxy60, true);
                  var offset$proxy63 = (8 + offset$proxy60) | 0;
                  var $x_7 = _1$35.getFloat64(offset$proxy63, true);
                  var offset$proxy64 = (8 + offset$proxy60) | 0;
                  var $x_6 = _1$35.getFloat64(offset$proxy64, true);
                  var offset$proxy65 = (16 + offset$proxy60) | 0;
                  var $x_5 = _1$35.getFloat64(offset$proxy65, true);
                  var offset$proxy66 = (16 + offset$proxy60) | 0;
                  var a$1 =
                    +$x_9 * +$x_8 +
                    +$x_7 * +$x_6 +
                    +$x_5 * +_1$35.getFloat64(offset$proxy66, true);
                  var scalar$proxy1$1 = +Math.sqrt(a$1);
                  var scalar$proxy2$1 = 1.0 / scalar$proxy1$1;
                  var value$proxy19 =
                    +_1$35.getFloat64(offset$proxy60, true) * scalar$proxy2$1;
                  _1$26.setFloat64(0, value$proxy19, true);
                  var offset$proxy70 = (8 + offset$proxy60) | 0;
                  var value$proxy20 =
                    +_1$35.getFloat64(offset$proxy70, true) * scalar$proxy2$1;
                  _1$26.setFloat64(8, value$proxy20, true);
                  var offset$proxy72 = (16 + offset$proxy60) | 0;
                  var value$proxy21 =
                    +_1$35.getFloat64(offset$proxy72, true) * scalar$proxy2$1;
                  _1$26.setFloat64(16, value$proxy21, true);
                  var offset$proxy73 = (32 + (hitBuffer.b | 0)) | 0;
                  var _1$36 = hitBuffer.a;
                  var $x_14 = _1$26.getFloat64(0, true);
                  var $x_13 = _1$36.getFloat64(offset$proxy73, true);
                  var $x_12 = _1$26.getFloat64(8, true);
                  var offset$proxy78 = (8 + offset$proxy73) | 0;
                  var $x_11 = _1$36.getFloat64(offset$proxy78, true);
                  var $x_10 = _1$26.getFloat64(16, true);
                  var offset$proxy80 = (16 + offset$proxy73) | 0;
                  var d =
                    2.0 *
                    (+$x_14 * +$x_13 +
                      +$x_12 * +$x_11 +
                      +$x_10 * +_1$36.getFloat64(offset$proxy80, true));
                  var value$proxy22 =
                    +_1$36.getFloat64(offset$proxy73, true) * d;
                  _1$25.setFloat64(24, value$proxy22, true);
                  var offset$proxy84 = (8 + offset$proxy73) | 0;
                  var value$proxy23 =
                    +_1$36.getFloat64(offset$proxy84, true) * d;
                  _1$25.setFloat64(32, value$proxy23, true);
                  var offset$proxy86 = (16 + offset$proxy73) | 0;
                  var value$proxy24 =
                    +_1$36.getFloat64(offset$proxy86, true) * d;
                  _1$25.setFloat64(40, value$proxy24, true);
                  var value$proxy25 =
                    +_1$26.getFloat64(0, true) - +_1$25.getFloat64(24, true);
                  _1$25.setFloat64(24, value$proxy25, true);
                  var value$proxy26 =
                    +_1$26.getFloat64(8, true) - +_1$25.getFloat64(32, true);
                  _1$25.setFloat64(32, value$proxy26, true);
                  var value$proxy27 =
                    +_1$26.getFloat64(16, true) - +_1$25.getFloat64(40, true);
                  _1$25.setFloat64(40, value$proxy27, true);
                  var offset$proxy96 = (57 + (hitBuffer.b | 0)) | 0;
                  var _1$37 = hitBuffer.a;
                  var offset$proxy97 = (25 + offset$proxy96) | 0;
                  if (+_1$37.getFloat64(offset$proxy97, true) > 0.0) {
                    var buffer$7$1 = new ArrayBuffer(24);
                    var _1$38 = new DataView(buffer$7$1);
                    var l$1 = 2.0;
                    while (l$1 >= 1.0) {
                      var d$proxy1$1 = +Math.random();
                      var x$proxy1$1 = 2.0 * d$proxy1$1 - 1.0;
                      var d$proxy2$1 = +Math.random();
                      var y$proxy1$1 = 2.0 * d$proxy2$1 - 1.0;
                      var d$proxy3$1 = +Math.random();
                      var z$proxy1$1 = 2.0 * d$proxy3$1 - 1.0;
                      _1$38.setFloat64(0, x$proxy1$1, true);
                      _1$38.setFloat64(8, y$proxy1$1, true);
                      _1$38.setFloat64(16, z$proxy1$1, true);
                      l$1 =
                        +_1$38.getFloat64(0, true) *
                          +_1$38.getFloat64(0, true) +
                        +_1$38.getFloat64(8, true) *
                          +_1$38.getFloat64(8, true) +
                        +_1$38.getFloat64(16, true) *
                          +_1$38.getFloat64(16, true);
                    }
                    var offset$proxy99 = (57 + (hitBuffer.b | 0)) | 0;
                    var _1$39 = hitBuffer.a;
                    var offset$proxy100 = (25 + offset$proxy99) | 0;
                    var scalar$proxy3 = +_1$39.getFloat64(
                      offset$proxy100,
                      true,
                    );
                    var buffer$8$1 = new ArrayBuffer(24);
                    var _1$40 = new DataView(buffer$8$1);
                    var value$proxy28 =
                      +_1$38.getFloat64(0, true) * scalar$proxy3;
                    _1$40.setFloat64(0, value$proxy28, true);
                    var value$proxy29 =
                      +_1$38.getFloat64(8, true) * scalar$proxy3;
                    _1$40.setFloat64(8, value$proxy29, true);
                    var value$proxy30 =
                      +_1$38.getFloat64(16, true) * scalar$proxy3;
                    _1$40.setFloat64(16, value$proxy30, true);
                    var value$proxy31 =
                      +_1$25.getFloat64(24, true) + +_1$40.getFloat64(0, true);
                    _1$25.setFloat64(24, value$proxy31, true);
                    var value$proxy32 =
                      +_1$25.getFloat64(32, true) + +_1$40.getFloat64(8, true);
                    _1$25.setFloat64(32, value$proxy32, true);
                    var value$proxy33 =
                      +_1$25.getFloat64(40, true) + +_1$40.getFloat64(16, true);
                    _1$25.setFloat64(40, value$proxy33, true);
                  }
                  var offset$proxy116 = (8 + (hitBuffer.b | 0)) | 0;
                  var _1$41 = hitBuffer.a;
                  var value$proxy34 = +_1$41.getFloat64(offset$proxy116, true);
                  _1$25.setFloat64(0, value$proxy34, true);
                  var offset$proxy121 = (8 + offset$proxy116) | 0;
                  var value$proxy35 = +_1$41.getFloat64(offset$proxy121, true);
                  _1$25.setFloat64(8, value$proxy35, true);
                  var offset$proxy123 = (16 + offset$proxy116) | 0;
                  var value$proxy36 = +_1$41.getFloat64(offset$proxy123, true);
                  _1$25.setFloat64(16, value$proxy36, true);
                  var offset$proxy125 = (32 + (hitBuffer.b | 0)) | 0;
                  var _1$42 = hitBuffer.a;
                  var $x_19 = _1$25.getFloat64(24, true);
                  var $x_18 = _1$42.getFloat64(offset$proxy125, true);
                  var $x_17 = _1$25.getFloat64(32, true);
                  var offset$proxy129 = (8 + offset$proxy125) | 0;
                  var $x_16 = _1$42.getFloat64(offset$proxy129, true);
                  var $x_15 = _1$25.getFloat64(40, true);
                  var offset$proxy131 = (16 + offset$proxy125) | 0;
                  var $x_4 =
                    +$x_19 * +$x_18 +
                      +$x_17 * +$x_16 +
                      +$x_15 * +_1$42.getFloat64(offset$proxy131, true) >
                    0.0;
                } else {
                  var $x_4 = false;
                }
              }
              if ($x_4) {
                var offset$proxy132 = (57 + (hitBuffer.b | 0)) | 0;
                var _1$43 = hitBuffer.a;
                var offset$proxy133 = (1 + offset$proxy132) | 0;
                var value$proxy37 =
                  +_1$29.getFloat64(0, true) *
                  +_1$43.getFloat64(offset$proxy133, true);
                _1$29.setFloat64(0, value$proxy37, true);
                var $x_20 = _1$29.getFloat64(8, true);
                var offset$proxy139 = (8 + offset$proxy133) | 0;
                var value$proxy38 =
                  +$x_20 * +_1$43.getFloat64(offset$proxy139, true);
                _1$29.setFloat64(8, value$proxy38, true);
                var $x_21 = _1$29.getFloat64(16, true);
                var offset$proxy142 = (16 + offset$proxy133) | 0;
                var value$proxy39 =
                  +$x_21 * +_1$43.getFloat64(offset$proxy142, true);
                _1$29.setFloat64(16, value$proxy39, true);
                var offset$proxy144 = currentRay.b | 0;
                var _1$44 = currentRay.a;
                var value$proxy40 = +_1$25.getFloat64(0, true);
                _1$44.setFloat64(offset$proxy144, value$proxy40, true);
                var offset$proxy147 = (8 + offset$proxy144) | 0;
                var value$proxy41 = +_1$25.getFloat64(8, true);
                _1$44.setFloat64(offset$proxy147, value$proxy41, true);
                var offset$proxy149 = (16 + offset$proxy144) | 0;
                var value$proxy42 = +_1$25.getFloat64(16, true);
                _1$44.setFloat64(offset$proxy149, value$proxy42, true);
                var offset$proxy152 = (24 + (currentRay.b | 0)) | 0;
                var _1$45 = currentRay.a;
                var value$proxy43 = +_1$25.getFloat64(24, true);
                _1$45.setFloat64(offset$proxy152, value$proxy43, true);
                var offset$proxy155 = (8 + offset$proxy152) | 0;
                var value$proxy44 = +_1$25.getFloat64(32, true);
                _1$45.setFloat64(offset$proxy155, value$proxy44, true);
                var offset$proxy157 = (16 + offset$proxy152) | 0;
                var value$proxy45 = +_1$25.getFloat64(40, true);
                _1$45.setFloat64(offset$proxy157, value$proxy45, true);
              } else {
                var offset$proxy159 = (57 + (hitBuffer.b | 0)) | 0;
                var _1$46 = hitBuffer.a;
                var offset$proxy160 = (1 + offset$proxy159) | 0;
                var buffer$9 = new ArrayBuffer(24);
                var _1$47 = new DataView(buffer$9);
                var value$proxy46 =
                  +_1$29.getFloat64(0, true) *
                  +_1$46.getFloat64(offset$proxy160, true);
                _1$47.setFloat64(0, value$proxy46, true);
                var $x_22 = _1$29.getFloat64(8, true);
                var offset$proxy166 = (8 + offset$proxy160) | 0;
                var value$proxy47 =
                  +$x_22 * +_1$46.getFloat64(offset$proxy166, true);
                _1$47.setFloat64(8, value$proxy47, true);
                var $x_23 = _1$29.getFloat64(16, true);
                var offset$proxy169 = (16 + offset$proxy160) | 0;
                var value$proxy48 =
                  +$x_23 * +_1$46.getFloat64(offset$proxy169, true);
                _1$47.setFloat64(16, value$proxy48, true);
                var other$proxy10___1 = _1$47;
                var other$proxy10___2 = 0;
                break _return;
              }
            } else {
              var offset$proxy170 = (24 + (currentRay.b | 0)) | 0;
              var _1$48 = currentRay.a;
              var buffer$10 = new ArrayBuffer(24);
              var _1$49 = new DataView(buffer$10);
              var $x_28 = _1$48.getFloat64(offset$proxy170, true);
              var $x_27 = _1$48.getFloat64(offset$proxy170, true);
              var offset$proxy173 = (8 + offset$proxy170) | 0;
              var $x_26 = _1$48.getFloat64(offset$proxy173, true);
              var offset$proxy174 = (8 + offset$proxy170) | 0;
              var $x_25 = _1$48.getFloat64(offset$proxy174, true);
              var offset$proxy175 = (16 + offset$proxy170) | 0;
              var $x_24 = _1$48.getFloat64(offset$proxy175, true);
              var offset$proxy176 = (16 + offset$proxy170) | 0;
              var a$2 =
                +$x_28 * +$x_27 +
                +$x_26 * +$x_25 +
                +$x_24 * +_1$48.getFloat64(offset$proxy176, true);
              var scalar$proxy4 = +Math.sqrt(a$2);
              var scalar$proxy5 = 1.0 / scalar$proxy4;
              var value$proxy49 =
                +_1$48.getFloat64(offset$proxy170, true) * scalar$proxy5;
              _1$49.setFloat64(0, value$proxy49, true);
              var offset$proxy180 = (8 + offset$proxy170) | 0;
              var value$proxy50 =
                +_1$48.getFloat64(offset$proxy180, true) * scalar$proxy5;
              _1$49.setFloat64(8, value$proxy50, true);
              var offset$proxy182 = (16 + offset$proxy170) | 0;
              var value$proxy51 =
                +_1$48.getFloat64(offset$proxy182, true) * scalar$proxy5;
              _1$49.setFloat64(16, value$proxy51, true);
              var t = 0.5 * (+_1$49.getFloat64(8, true) + 1.0);
              var buffer$11 = new ArrayBuffer(24);
              var _1$50 = new DataView(buffer$11);
              _1$50.setFloat64(0, 1.0, true);
              _1$50.setFloat64(8, 1.0, true);
              _1$50.setFloat64(16, 1.0, true);
              var buffer$12 = new ArrayBuffer(24);
              var _1$51 = new DataView(buffer$12);
              _1$51.setFloat64(0, 0.5, true);
              _1$51.setFloat64(8, 0.7, true);
              _1$51.setFloat64(16, 1.0, true);
              var buffer$13 = new ArrayBuffer(24);
              var _1$52 = new DataView(buffer$13);
              var oneMinusT = 1.0 - t;
              var value$proxy52 =
                +_1$50.getFloat64(0, true) * oneMinusT +
                +_1$51.getFloat64(0, true) * t;
              _1$52.setFloat64(0, value$proxy52, true);
              var value$proxy53 =
                +_1$50.getFloat64(8, true) * oneMinusT +
                +_1$51.getFloat64(8, true) * t;
              _1$52.setFloat64(8, value$proxy53, true);
              var value$proxy54 =
                +_1$50.getFloat64(16, true) * oneMinusT +
                +_1$51.getFloat64(16, true) * t;
              _1$52.setFloat64(16, value$proxy54, true);
              var buffer$14 = new ArrayBuffer(24);
              var _1$53 = new DataView(buffer$14);
              var value$proxy55 =
                +_1$52.getFloat64(0, true) * +_1$29.getFloat64(0, true);
              _1$53.setFloat64(0, value$proxy55, true);
              var value$proxy56 =
                +_1$52.getFloat64(8, true) * +_1$29.getFloat64(8, true);
              _1$53.setFloat64(8, value$proxy56, true);
              var value$proxy57 =
                +_1$52.getFloat64(16, true) * +_1$29.getFloat64(16, true);
              _1$53.setFloat64(16, value$proxy57, true);
              var other$proxy10___1 = _1$53;
              var other$proxy10___2 = 0;
              break _return;
            }
            depth = (1 + depth) | 0;
          }
          var buffer$15 = new ArrayBuffer(24);
          var _1$54 = new DataView(buffer$15);
          _1$54.setFloat64(0, 0.0, true);
          _1$54.setFloat64(8, 0.0, true);
          _1$54.setFloat64(16, 0.0, true);
          var other$proxy10___1 = _1$54;
          var other$proxy10___2 = 0;
        }
        var $x_29 = _1$2.getFloat64(0, true);
        var offset$proxy317 = other$proxy10___2 | 0;
        var _1$55 = other$proxy10___1;
        var value$proxy94 = +$x_29 + +_1$55.getFloat64(offset$proxy317, true);
        _1$2.setFloat64(0, value$proxy94, true);
        var $x_30 = _1$2.getFloat64(8, true);
        var offset$proxy320 = (8 + (other$proxy10___2 | 0)) | 0;
        var _1$56 = other$proxy10___1;
        var value$proxy95 = +$x_30 + +_1$56.getFloat64(offset$proxy320, true);
        _1$2.setFloat64(8, value$proxy95, true);
        var $x_31 = _1$2.getFloat64(16, true);
        var offset$proxy323 = (16 + (other$proxy10___2 | 0)) | 0;
        var _1$57 = other$proxy10___1;
        var value$proxy96 = +$x_31 + +_1$57.getFloat64(offset$proxy323, true);
        _1$2.setFloat64(16, value$proxy96, true);
        s$1 = (1 + s$1) | 0;
      }
      var scalar$proxy6 = samplesPerPixel;
      var scalar$proxy7 = 1.0 / scalar$proxy6;
      var value$proxy97 = +_1$2.getFloat64(0, true) * scalar$proxy7;
      _1$2.setFloat64(0, value$proxy97, true);
      var value$proxy98 = +_1$2.getFloat64(8, true) * scalar$proxy7;
      _1$2.setFloat64(8, value$proxy98, true);
      var value$proxy99 = +_1$2.getFloat64(16, true) * scalar$proxy7;
      _1$2.setFloat64(16, value$proxy99, true);
      var a$3 = +_1$2.getFloat64(0, true);
      var value$proxy100 = +Math.pow(a$3, 0.7);
      _1$2.setFloat64(0, value$proxy100, true);
      var a$4 = +_1$2.getFloat64(8, true);
      var value$proxy101 = +Math.pow(a$4, 0.7);
      _1$2.setFloat64(8, value$proxy101, true);
      var a$5 = +_1$2.getFloat64(16, true);
      var value$proxy102 = +Math.pow(a$5, 0.7);
      _1$2.setFloat64(16, value$proxy102, true);
      var index$proxy1 = (Math.imul(y, width) + x) | 0;
      var _1$58 = pixels.a;
      var _2 = index$proxy1 << 2;
      var d$proxy1$2 = +_1$2.getFloat64(0, true);
      var rF =
        ($doubleToInt(
          256.0 *
            (d$proxy1$2 < 0.0 ? 0.0 : d$proxy1$2 > 0.999 ? 0.999 : d$proxy1$2),
        ) <<
          16) >>
        16;
      var d$proxy2$2 = +_1$2.getFloat64(8, true);
      var gF =
        ($doubleToInt(
          256.0 *
            (d$proxy2$2 < 0.0 ? 0.0 : d$proxy2$2 > 0.999 ? 0.999 : d$proxy2$2),
        ) <<
          16) >>
        16;
      var d$proxy3$2 = +_1$2.getFloat64(16, true);
      var bF =
        ($doubleToInt(
          256.0 *
            (d$proxy3$2 < 0.0 ? 0.0 : d$proxy3$2 > 0.999 ? 0.999 : d$proxy3$2),
        ) <<
          16) >>
        16;
      _1$58.setUint8(_2, rF);
      var offset$proxy340 = (1 + _2) | 0;
      _1$58.setUint8(offset$proxy340, gF);
      var offset$proxy341 = (2 + _2) | 0;
      _1$58.setUint8(offset$proxy341, bF);
      var offset$proxy342 = (3 + _2) | 0;
      _1$58.setUint8(offset$proxy342, 255);
      x = (1 + x) | 0;
    }
    y = (1 + y) | 0;
  }
  return pixels;
};
var $d_Lraytracer_render_render$package$ = new $TypeData().i(
  $c_Lraytracer_render_render$package$,
  "raytracer.render.render$package$",
  {
    at: 1,
  },
);
var $n_Lraytracer_render_render$package$;
function $m_Lraytracer_render_render$package$() {
  if (!$n_Lraytracer_render_render$package$) {
    $n_Lraytracer_render_render$package$ =
      new $c_Lraytracer_render_render$package$();
  }
  return $n_Lraytracer_render_render$package$;
}
/** @constructor */
function $c_Lraytracer_scene_scene$package$() {}
$p = $c_Lraytracer_scene_scene$package$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_scene_scene$package$;
/** @constructor */
function $h_Lraytracer_scene_scene$package$() {}
$h_Lraytracer_scene_scene$package$.prototype = $p;
$p.aI = function () {
  var buffer = new ArrayBuffer(260);
  var spheres = new $c_T2(new DataView(buffer), 4);
  var _1$1 = spheres.a;
  _1$1.setFloat64(0, 0.0, true);
  _1$1.setFloat64(8, 0.0, true);
  _1$1.setFloat64(16, -1.0, true);
  var _1$2 = spheres.a;
  _1$2.setFloat64(24, 0.5, true);
  var _1$3 = spheres.a;
  var value$proxy1 =
    $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType()
      .E;
  _1$3.setUint8(32, value$proxy1);
  var _1$4 = spheres.a;
  _1$4.setFloat64(33, 0.8, true);
  _1$4.setFloat64(41, 0.2, true);
  _1$4.setFloat64(49, 0.2, true);
  var _1$5 = spheres.a;
  _1$5.setFloat64(57, 0.0, true);
  var _1$6 = spheres.a;
  _1$6.setFloat64(65, -1.0, true);
  _1$6.setFloat64(73, 0.0, true);
  _1$6.setFloat64(81, -1.0, true);
  var _1$7 = spheres.a;
  _1$7.setFloat64(89, 0.5, true);
  var _1$8 = spheres.a;
  var value$proxy2 =
    $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType()
      .E;
  _1$8.setUint8(97, value$proxy2);
  var _1$9 = spheres.a;
  _1$9.setFloat64(98, 0.6, true);
  _1$9.setFloat64(106, 0.8, true);
  _1$9.setFloat64(114, 0.2, true);
  var _1$10 = spheres.a;
  _1$10.setFloat64(122, 0.0, true);
  var _1$11 = spheres.a;
  _1$11.setFloat64(130, 1.0, true);
  _1$11.setFloat64(138, 0.0, true);
  _1$11.setFloat64(146, -1.0, true);
  var _1$12 = spheres.a;
  _1$12.setFloat64(154, 0.5, true);
  var _1$13 = spheres.a;
  var value$proxy3 =
    $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType()
      .E;
  _1$13.setUint8(162, value$proxy3);
  var _1$14 = spheres.a;
  _1$14.setFloat64(163, 0.2, true);
  _1$14.setFloat64(171, 0.5, true);
  _1$14.setFloat64(179, 0.8, true);
  var _1$15 = spheres.a;
  _1$15.setFloat64(187, 0.3, true);
  var _1$16 = spheres.a;
  _1$16.setFloat64(195, 0.0, true);
  _1$16.setFloat64(203, -100.5, true);
  _1$16.setFloat64(211, -1.0, true);
  var _1$17 = spheres.a;
  _1$17.setFloat64(219, 100.0, true);
  var _1$18 = spheres.a;
  var value$proxy4 =
    $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType()
      .E;
  _1$18.setUint8(227, value$proxy4);
  var _1$19 = spheres.a;
  _1$19.setFloat64(228, 0.5, true);
  _1$19.setFloat64(236, 0.5, true);
  _1$19.setFloat64(244, 0.5, true);
  var _1$20 = spheres.a;
  _1$20.setFloat64(252, 0.0, true);
  var $x_1 = $m_Lraytracer_render_render$package$();
  var buffer$2 = new ArrayBuffer(24);
  var v = new $c_T2(new DataView(buffer$2), 0);
  var offset$proxy57 = v.b | 0;
  var _1$22 = v.a;
  _1$22.setFloat64(offset$proxy57, 0.0, true);
  var offset$proxy58 = (8 + (v.b | 0)) | 0;
  var _1$23 = v.a;
  _1$23.setFloat64(offset$proxy58, 0.0, true);
  var offset$proxy59 = (16 + (v.b | 0)) | 0;
  var _1$24 = v.a;
  _1$24.setFloat64(offset$proxy59, 1.0, true);
  return new $c_Lraytracer_scene_Scene(
    spheres,
    $x_1.aH(v, 1.9, 1.3333333333333333),
  );
};
var $d_Lraytracer_scene_scene$package$ = new $TypeData().i(
  $c_Lraytracer_scene_scene$package$,
  "raytracer.scene.scene$package$",
  {
    au: 1,
  },
);
var $n_Lraytracer_scene_scene$package$;
function $m_Lraytracer_scene_scene$package$() {
  if (!$n_Lraytracer_scene_scene$package$) {
    $n_Lraytracer_scene_scene$package$ =
      new $c_Lraytracer_scene_scene$package$();
  }
  return $n_Lraytracer_scene_scene$package$;
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return $thiz.w() === 0
    ? "" + start + end
    : $thiz.U(
        $ct_scm_StringBuilder__(new $c_scm_StringBuilder()),
        start,
        sep,
        end,
      ).D.k;
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(
  $thiz,
  b,
  start,
  sep,
  end,
) {
  var jsb = b.D;
  if (start.length !== 0) {
    jsb.k = "" + jsb.k + start;
  }
  var it = $thiz.s();
  if (it.l()) {
    var obj = it.m();
    jsb.k = "" + jsb.k + obj;
    while (it.l()) {
      if (sep.length !== 0) {
        jsb.k = "" + jsb.k + sep;
      }
      var obj$1 = it.m();
      jsb.k = "" + jsb.k + obj$1;
    }
  }
  if (end.length !== 0) {
    jsb.k = "" + jsb.k + end;
  }
  return b;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {}
$h_sr_BoxesRunTime$.prototype = $p;
$p.g = function (x, y) {
  return (
    x === y ||
    ($is_jl_Number(x)
      ? this.aP(x, y)
      : x instanceof $Char
        ? this.aN(x, y)
        : x === null
          ? y === null
          : $dp_equals__O__Z(x, y))
  );
};
$p.aP = function (xn, y) {
  if ($is_jl_Number(y)) {
    return this.aO(xn, y);
  } else if (y instanceof $Char) {
    if (typeof xn === "number") {
      return +xn === y.c;
    } else if (xn instanceof $c_RTLong) {
      var t = $uJ(xn);
      var lo = t.c;
      var hi = t.d;
      var value = y.c;
      var hi$1 = value >> 31;
      return lo === value && hi === hi$1;
    } else {
      return xn === null ? y === null : $dp_equals__O__Z(xn, y);
    }
  } else {
    return xn === null ? y === null : $dp_equals__O__Z(xn, y);
  }
};
$p.aO = function (xn, yn) {
  if (typeof xn === "number") {
    var x2 = +xn;
    if (typeof yn === "number") {
      return x2 === +yn;
    } else if (yn instanceof $c_RTLong) {
      var t = $uJ(yn);
      var lo = t.c;
      return x2 === 4.294967296e9 * t.d + (lo >>> 0.0);
    } else {
      return false && yn.i(x2);
    }
  } else if (xn instanceof $c_RTLong) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.c;
    var hi$1 = t$1.d;
    if (yn instanceof $c_RTLong) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.c;
      var hi$2 = t$2.d;
      return lo$1 === lo$2 && hi$1 === hi$2;
    } else if (typeof yn === "number") {
      var x3$3 = +yn;
      return 4.294967296e9 * hi$1 + (lo$1 >>> 0.0) === x3$3;
    } else {
      return false && yn.i(new $c_RTLong(lo$1, hi$1));
    }
  } else {
    return xn === null ? yn === null : $dp_equals__O__Z(xn, yn);
  }
};
$p.aN = function (xc, y) {
  if (y instanceof $Char) {
    return xc.c === y.c;
  } else if ($is_jl_Number(y)) {
    if (typeof y === "number") {
      return +y === xc.c;
    } else if (y instanceof $c_RTLong) {
      var t = $uJ(y);
      var lo = t.c;
      var hi = t.d;
      var value = xc.c;
      var hi$1 = value >> 31;
      return lo === value && hi === hi$1;
    } else {
      return y === null ? xc === null : $dp_equals__O__Z(y, xc);
    }
  } else {
    return xc === null && y === null;
  }
};
var $d_sr_BoxesRunTime$ = new $TypeData().i(
  $c_sr_BoxesRunTime$,
  "scala.runtime.BoxesRunTime$",
  {
    bb: 1,
  },
);
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if (!$n_sr_BoxesRunTime$) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {}
$h_sr_ScalaRunTime$.prototype = $p;
$p.ak = function (x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(
    x.Q(),
    x.B() + "(",
    ",",
    ")",
  );
};
var $d_sr_ScalaRunTime$ = new $TypeData().i(
  $c_sr_ScalaRunTime$,
  "scala.runtime.ScalaRunTime$",
  {
    bc: 1,
  },
);
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if (!$n_sr_ScalaRunTime$) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {}
$h_sr_Statics$.prototype = $p;
$p.aU = function (lv) {
  var lo = lv.c;
  var hi = lv.d;
  return hi === lo >> 31 ? lo : lo ^ hi;
};
$p.aL = function (dv) {
  var iv = $doubleToInt(dv);
  if (iv === dv) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.au(dv);
    var hi = this$1.f;
    if (4.294967296e9 * hi + (lo >>> 0.0) === dv) {
      return lo ^ hi;
    } else {
      var valueInt = dv | 0;
      if (valueInt === dv && 1.0 / dv !== -Infinity) {
        return valueInt;
      } else if (dv !== dv) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return (
          (fpBitsDataView.getInt32(0, true) | 0) ^
          (fpBitsDataView.getInt32(4, true) | 0)
        );
      }
    }
  }
};
$p.p = function (x) {
  if (x === null) {
    return 0;
  } else if (typeof x === "number") {
    return this.aL(+x);
  } else if (x instanceof $c_RTLong) {
    var t = $uJ(x);
    return this.aU(new $c_RTLong(t.c, t.d));
  } else {
    return $dp_hashCode__I(x);
  }
};
var $d_sr_Statics$ = new $TypeData().i(
  $c_sr_Statics$,
  "scala.runtime.Statics$",
  {
    be: 1,
  },
);
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if (!$n_sr_Statics$) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {}
$h_s_util_CommandLineParser$.prototype = $p;
$p.b5 = function (err) {
  var where =
    err.ap() === 0
      ? ""
      : err.ap() === 1
        ? " after first argument"
        : " after " + err.ap() + " arguments";
  var x = "Illegal command line" + where + ": " + err.bi();
  $m_s_Console$()
    .o()
    .n(x + "\n");
};
var $d_s_util_CommandLineParser$ = new $TypeData().i(
  $c_s_util_CommandLineParser$,
  "scala.util.CommandLineParser$",
  {
    bg: 1,
  },
);
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if (!$n_s_util_CommandLineParser$) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.Z = null;
  this.Z = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {}
$h_s_util_DynamicVariable.prototype = $p;
$p.j = function () {
  return "DynamicVariable(" + this.Z + ")";
};
var $d_s_util_DynamicVariable = new $TypeData().i(
  $c_s_util_DynamicVariable,
  "scala.util.DynamicVariable",
  {
    bi: 1,
  },
);
function $p_s_util_hashing_MurmurHash3__avalanche__I__I($thiz, hash) {
  var h = hash;
  h = h ^ ((h >>> 16) | 0);
  h = Math.imul(-2048144789, h);
  h = h ^ ((h >>> 13) | 0);
  h = Math.imul(-1028477387, h);
  h = h ^ ((h >>> 16) | 0);
  return h;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.h = function (hash, data) {
  var h = this.aq(hash, data);
  var i = h;
  h = (i << 13) | ((i >>> 19) | 0);
  return (-430675100 + Math.imul(5, h)) | 0;
};
$p.aq = function (hash, data) {
  var k = data;
  k = Math.imul(-862048943, k);
  var i = k;
  k = (i << 15) | ((i >>> 17) | 0);
  k = Math.imul(461845907, k);
  return hash ^ k;
};
$p.v = function (hash, length) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, hash ^ length);
};
$p.ax = function (x, seed, ignorePrefix) {
  var arr = x.z();
  if (arr === 0) {
    return !ignorePrefix ? $f_T__hashCode__I(x.B()) : seed;
  } else {
    var h = seed;
    if (!ignorePrefix) {
      h = this.h(h, $f_T__hashCode__I(x.B()));
    }
    var i = 0;
    while (i < arr) {
      h = this.h(h, $m_sr_Statics$().p(x.A(i)));
      i = (1 + i) | 0;
    }
    return this.v(h, arr);
  }
};
$p.aE = function (x, seed, caseClassName) {
  var arr = x.z();
  var aye = $f_T__hashCode__I(caseClassName !== null ? caseClassName : x.B());
  if (arr === 0) {
    return aye;
  } else {
    var h = seed;
    h = this.h(h, aye);
    var i = 0;
    while (i < arr) {
      h = this.h(h, $m_sr_Statics$().p(x.A(i)));
      i = (1 + i) | 0;
    }
    return this.v(h, arr);
  }
};
$p.b7 = function (xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.s();
  while (iterator.l()) {
    var x = iterator.m();
    var h = $m_sr_Statics$().p(x);
    a = (a + h) | 0;
    b = b ^ h;
    c = Math.imul(c, 1 | h);
    n = (1 + n) | 0;
  }
  var h$2 = seed;
  h$2 = this.h(h$2, a);
  h$2 = this.h(h$2, b);
  h$2 = this.aq(h$2, c);
  return this.v(h$2, n);
};
$p.aX = function (xs, seed) {
  var it = xs.s();
  var h = seed;
  if (!it.l()) {
    return this.v(h, 0);
  }
  var x0 = it.m();
  if (!it.l()) {
    return this.v(this.h(h, $m_sr_Statics$().p(x0)), 1);
  }
  var x1 = it.m();
  var initial = $m_sr_Statics$().p(x0);
  h = this.h(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().p(x1);
  var rangeDiff = (prev - initial) | 0;
  var i = 2;
  while (it.l()) {
    h = this.h(h, prev);
    var hash = $m_sr_Statics$().p(it.m());
    if (rangeDiff !== ((hash - prev) | 0) || rangeDiff === 0) {
      h = this.h(h, hash);
      i = (1 + i) | 0;
      while (it.l()) {
        h = this.h(h, $m_sr_Statics$().p(it.m()));
        i = (1 + i) | 0;
      }
      return this.v(h, i);
    }
    prev = hash;
    i = (1 + i) | 0;
  }
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(
    this,
    this.h(this.h(h0, rangeDiff), prev),
  );
};
$p.aY = function (start, step, last, seed) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(
    this,
    this.h(this.h(this.h(seed, start), step), last),
  );
};
$p.aS = function (a, seed) {
  var h = seed;
  var l = a.x();
  if (l === 0) {
    return this.v(h, 0);
  } else if (l === 1) {
    return this.v(this.h(h, $m_sr_Statics$().p(a.y(0))), 1);
  } else {
    var initial = $m_sr_Statics$().p(a.y(0));
    h = this.h(h, initial);
    var h0 = h;
    var prev = $m_sr_Statics$().p(a.y(1));
    var rangeDiff = (prev - initial) | 0;
    var i = 2;
    while (i < l) {
      h = this.h(h, prev);
      var hash = $m_sr_Statics$().p(a.y(i));
      if (rangeDiff !== ((hash - prev) | 0) || rangeDiff === 0) {
        h = this.h(h, hash);
        i = (1 + i) | 0;
        while (i < l) {
          h = this.h(h, $m_sr_Statics$().p(a.y(i)));
          i = (1 + i) | 0;
        }
        return this.v(h, l);
      }
      prev = hash;
      i = (1 + i) | 0;
    }
    return $p_s_util_hashing_MurmurHash3__avalanche__I__I(
      this,
      this.h(this.h(h0, rangeDiff), prev),
    );
  }
};
$p.aT = function (xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while (!elems.q()) {
    elems.a1();
  }
  return rangeState === 2
    ? this.aY(initial, rangeDiff, prev, seed)
    : this.v(h, n);
};
/** @constructor */
function $c_jl_Number() {}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (
    obj instanceof $c_jl_Number ||
    typeof obj === "number" ||
    obj instanceof $c_RTLong
  );
}
function $isArrayOf_jl_Number(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.f
  );
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__(
  $thiz,
  s,
  e,
  enableSuppression,
  writableStackTrace,
) {
  $thiz.aa = s;
  if (writableStackTrace) {
    $thiz.aQ();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.aa = null;
  }
  ao() {
    return this.aa;
  }
  aQ() {
    var reference = false ? this.b9 : this;
    if (Object.prototype.toString.call(reference) !== "[object Error]") {
      if (Error.captureStackTrace === void 0 || !!Object.isSealed(this)) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  j() {
    var className = $objectClassName(this);
    var message = this.ao();
    return message === null ? className : className + ": " + message;
  }
  r() {
    return $c_O.prototype.r.call(this);
  }
  i(that) {
    return $c_O.prototype.i.call(this, that);
  }
  get message() {
    var m = this.ao();
    return m === null ? "" : m;
  }
  get name() {
    return $objectClassName(this);
  }
  toString() {
    return this.j();
  }
}
/** @constructor */
function $c_Lraytracer_hittable_hittable$package$given＿Hittable＿IterableOnce(
  evidence$1,
) {
  this.ab = null;
  this.ab = evidence$1;
}
$p =
  $c_Lraytracer_hittable_hittable$package$given＿Hittable＿IterableOnce.prototype =
    new $h_O();
$p.constructor =
  $c_Lraytracer_hittable_hittable$package$given＿Hittable＿IterableOnce;
/** @constructor */
function $h_Lraytracer_hittable_hittable$package$given＿Hittable＿IterableOnce() {}
$h_Lraytracer_hittable_hittable$package$given＿Hittable＿IterableOnce.prototype =
  $p;
$p.ay = function (objects, ray, minT, maxT, hit) {
  var buffer = new ArrayBuffer(90);
  var tempHit = new $c_T2(new DataView(buffer), 0);
  var elem = false;
  elem = false;
  var elem$1 = 0.0;
  elem$1 = maxT;
  var this$5 = objects.s();
  while (this$5.l()) {
    var x0 = this$5.m();
    if (this.ab.V(x0, ray, minT, elem$1, tempHit)) {
      elem = true;
      var offset$proxy113 = tempHit.b | 0;
      var _1$1 = tempHit.a;
      elem$1 = +_1$1.getFloat64(offset$proxy113, true);
      $m_Lraytracer_hit_hit$package$().aG(hit, tempHit);
    }
  }
  return elem;
};
$p.V = function (obj, ray, minT, maxT, hitBuffer) {
  return this.ay(obj, ray, minT, maxT, hitBuffer);
};
var $d_Lraytracer_hittable_hittable$package$given＿Hittable＿IterableOnce =
  new $TypeData().i(
    $c_Lraytracer_hittable_hittable$package$given＿Hittable＿IterableOnce,
    "raytracer.hittable.hittable$package$given_Hittable_IterableOnce",
    {
      an: 1,
      u: 1,
    },
  );
/** @constructor */
function $c_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$() {}
$p =
  $c_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$.prototype =
    new $h_O();
$p.constructor =
  $c_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$;
/** @constructor */
function $h_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$() {}
$h_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$.prototype = $p;
$p.a3 = function (sphere, ray, minT, maxT, hit) {
  var offset$proxy1 = ray.b | 0;
  var _1 = ray.a;
  var offset$proxy2 = sphere.b | 0;
  var _1$1 = sphere.a;
  var buffer = new ArrayBuffer(24);
  var _1$2 = new DataView(buffer);
  var value$proxy1 =
    +_1.getFloat64(offset$proxy1, true) - +_1$1.getFloat64(offset$proxy2, true);
  _1$2.setFloat64(0, value$proxy1, true);
  var offset$proxy7 = (8 + offset$proxy1) | 0;
  var $x_1 = _1.getFloat64(offset$proxy7, true);
  var offset$proxy8 = (8 + offset$proxy2) | 0;
  var value$proxy2 = +$x_1 - +_1$1.getFloat64(offset$proxy8, true);
  _1$2.setFloat64(8, value$proxy2, true);
  var offset$proxy10 = (16 + offset$proxy1) | 0;
  var $x_2 = _1.getFloat64(offset$proxy10, true);
  var offset$proxy11 = (16 + offset$proxy2) | 0;
  var value$proxy3 = +$x_2 - +_1$1.getFloat64(offset$proxy11, true);
  _1$2.setFloat64(16, value$proxy3, true);
  var offset$proxy12 = (24 + (ray.b | 0)) | 0;
  var _1$3 = ray.a;
  var $x_7 = _1$3.getFloat64(offset$proxy12, true);
  var $x_6 = _1$3.getFloat64(offset$proxy12, true);
  var offset$proxy15 = (8 + offset$proxy12) | 0;
  var $x_5 = _1$3.getFloat64(offset$proxy15, true);
  var offset$proxy16 = (8 + offset$proxy12) | 0;
  var $x_4 = _1$3.getFloat64(offset$proxy16, true);
  var offset$proxy17 = (16 + offset$proxy12) | 0;
  var $x_3 = _1$3.getFloat64(offset$proxy17, true);
  var offset$proxy18 = (16 + offset$proxy12) | 0;
  var a =
    +$x_7 * +$x_6 +
    +$x_5 * +$x_4 +
    +$x_3 * +_1$3.getFloat64(offset$proxy18, true);
  var offset$proxy19 = (24 + (ray.b | 0)) | 0;
  var _1$4 = ray.a;
  var $x_12 = _1$2.getFloat64(0, true);
  var $x_11 = _1$4.getFloat64(offset$proxy19, true);
  var $x_10 = _1$2.getFloat64(8, true);
  var offset$proxy23 = (8 + offset$proxy19) | 0;
  var $x_9 = _1$4.getFloat64(offset$proxy23, true);
  var $x_8 = _1$2.getFloat64(16, true);
  var offset$proxy25 = (16 + offset$proxy19) | 0;
  var halfB =
    +$x_12 * +$x_11 +
    +$x_10 * +$x_9 +
    +$x_8 * +_1$4.getFloat64(offset$proxy25, true);
  var $x_19 = _1$2.getFloat64(0, true);
  var $x_18 = _1$2.getFloat64(0, true);
  var $x_17 = _1$2.getFloat64(8, true);
  var $x_16 = _1$2.getFloat64(8, true);
  var $x_15 = _1$2.getFloat64(16, true);
  var $x_14 = _1$2.getFloat64(16, true);
  var offset$proxy32 = (24 + (sphere.b | 0)) | 0;
  var _1$5 = sphere.a;
  var $x_13 = _1$5.getFloat64(offset$proxy32, true);
  var offset$proxy33 = (24 + (sphere.b | 0)) | 0;
  var _1$6 = sphere.a;
  var c =
    +$x_19 * +$x_18 +
    +$x_17 * +$x_16 +
    +$x_15 * +$x_14 -
    +$x_13 * +_1$6.getFloat64(offset$proxy33, true);
  var discriminant = halfB * halfB - a * c;
  if (discriminant < 0.0) {
    return false;
  }
  var sqrtD = +Math.sqrt(discriminant);
  var root = (-halfB - sqrtD) / a;
  if (root < minT || root > maxT) {
    root = (-halfB + sqrtD) / a;
    if (root < minT || root > maxT) {
      return false;
    }
  }
  var offset$proxy34 = hit.b | 0;
  var _1$7 = hit.a;
  var value$proxy4 = root;
  _1$7.setFloat64(offset$proxy34, value$proxy4, true);
  var t$proxy1 = root;
  var offset$proxy35 = (8 + (hit.b | 0)) | 0;
  var _1$8 = hit.a;
  var offset$proxy36 = (24 + (ray.b | 0)) | 0;
  var _1$9 = ray.a;
  var value$proxy5 = +_1$9.getFloat64(offset$proxy36, true) * t$proxy1;
  _1$8.setFloat64(offset$proxy35, value$proxy5, true);
  var offset$proxy39 = (8 + offset$proxy35) | 0;
  var offset$proxy40 = (8 + offset$proxy36) | 0;
  var value$proxy6 = +_1$9.getFloat64(offset$proxy40, true) * t$proxy1;
  _1$8.setFloat64(offset$proxy39, value$proxy6, true);
  var offset$proxy41 = (16 + offset$proxy35) | 0;
  var offset$proxy42 = (16 + offset$proxy36) | 0;
  var value$proxy7 = +_1$9.getFloat64(offset$proxy42, true) * t$proxy1;
  _1$8.setFloat64(offset$proxy41, value$proxy7, true);
  var offset$proxy43 = ray.b | 0;
  var _1$10 = ray.a;
  var value$proxy8 =
    +_1$8.getFloat64(offset$proxy35, true) +
    +_1$10.getFloat64(offset$proxy43, true);
  _1$8.setFloat64(offset$proxy35, value$proxy8, true);
  var offset$proxy47 = (8 + offset$proxy35) | 0;
  var offset$proxy48 = (8 + offset$proxy35) | 0;
  var $x_20 = _1$8.getFloat64(offset$proxy48, true);
  var offset$proxy49 = (8 + offset$proxy43) | 0;
  var value$proxy9 = +$x_20 + +_1$10.getFloat64(offset$proxy49, true);
  _1$8.setFloat64(offset$proxy47, value$proxy9, true);
  var offset$proxy50 = (16 + offset$proxy35) | 0;
  var offset$proxy51 = (16 + offset$proxy35) | 0;
  var $x_21 = _1$8.getFloat64(offset$proxy51, true);
  var offset$proxy52 = (16 + offset$proxy43) | 0;
  var value$proxy10 = +$x_21 + +_1$10.getFloat64(offset$proxy52, true);
  _1$8.setFloat64(offset$proxy50, value$proxy10, true);
  var offset$proxy53 = (8 + (hit.b | 0)) | 0;
  var _1$11 = hit.a;
  var offset$proxy54 = sphere.b | 0;
  var _1$12 = sphere.a;
  var buffer$2 = new ArrayBuffer(24);
  var _1$13 = new DataView(buffer$2);
  var value$proxy11 =
    +_1$11.getFloat64(offset$proxy53, true) -
    +_1$12.getFloat64(offset$proxy54, true);
  _1$13.setFloat64(0, value$proxy11, true);
  var offset$proxy59 = (8 + offset$proxy53) | 0;
  var $x_22 = _1$11.getFloat64(offset$proxy59, true);
  var offset$proxy60 = (8 + offset$proxy54) | 0;
  var value$proxy12 = +$x_22 - +_1$12.getFloat64(offset$proxy60, true);
  _1$13.setFloat64(8, value$proxy12, true);
  var offset$proxy62 = (16 + offset$proxy53) | 0;
  var $x_23 = _1$11.getFloat64(offset$proxy62, true);
  var offset$proxy63 = (16 + offset$proxy54) | 0;
  var value$proxy13 = +$x_23 - +_1$12.getFloat64(offset$proxy63, true);
  _1$13.setFloat64(16, value$proxy13, true);
  var offset$proxy64 = (24 + (sphere.b | 0)) | 0;
  var _1$14 = sphere.a;
  var scalar$proxy1 = +_1$14.getFloat64(offset$proxy64, true);
  var buffer$3 = new ArrayBuffer(24);
  var _1$15 = new DataView(buffer$3);
  var scalar$proxy2 = 1.0 / scalar$proxy1;
  var value$proxy14 = +_1$13.getFloat64(0, true) * scalar$proxy2;
  _1$15.setFloat64(0, value$proxy14, true);
  var value$proxy15 = +_1$13.getFloat64(8, true) * scalar$proxy2;
  _1$15.setFloat64(8, value$proxy15, true);
  var value$proxy16 = +_1$13.getFloat64(16, true) * scalar$proxy2;
  _1$15.setFloat64(16, value$proxy16, true);
  var offset$proxy71 = (24 + (ray.b | 0)) | 0;
  var _1$16 = ray.a;
  var $x_27 = _1$16.getFloat64(offset$proxy71, true);
  var $x_26 = _1$15.getFloat64(0, true);
  var offset$proxy74 = (8 + offset$proxy71) | 0;
  var $x_25 = _1$16.getFloat64(offset$proxy74, true);
  var $x_24 = _1$15.getFloat64(8, true);
  var offset$proxy76 = (16 + offset$proxy71) | 0;
  var frontFace =
    +$x_27 * +$x_26 +
      +$x_25 * +$x_24 +
      +_1$16.getFloat64(offset$proxy76, true) * +_1$15.getFloat64(16, true) <
    0.0;
  var offset$proxy78 = (56 + (hit.b | 0)) | 0;
  var _1$17 = hit.a;
  var value$proxy17 = ((frontFace ? 1 : 0) << 16) >> 16;
  _1$17.setUint8(offset$proxy78, value$proxy17);
  if (frontFace) {
    var offset$proxy79 = (32 + (hit.b | 0)) | 0;
    var _1$18 = hit.a;
    var value$proxy18 = +_1$15.getFloat64(0, true);
    _1$18.setFloat64(offset$proxy79, value$proxy18, true);
    var offset$proxy82 = (8 + offset$proxy79) | 0;
    var value$proxy19 = +_1$15.getFloat64(8, true);
    _1$18.setFloat64(offset$proxy82, value$proxy19, true);
    var offset$proxy84 = (16 + offset$proxy79) | 0;
    var value$proxy20 = +_1$15.getFloat64(16, true);
    _1$18.setFloat64(offset$proxy84, value$proxy20, true);
  } else {
    var buffer$4 = new ArrayBuffer(24);
    var _1$19 = new DataView(buffer$4);
    var value$proxy21 = -+_1$15.getFloat64(0, true);
    _1$19.setFloat64(0, value$proxy21, true);
    var value$proxy22 = -+_1$15.getFloat64(8, true);
    _1$19.setFloat64(8, value$proxy22, true);
    var value$proxy23 = -+_1$15.getFloat64(16, true);
    _1$19.setFloat64(16, value$proxy23, true);
    var offset$proxy92 = (32 + (hit.b | 0)) | 0;
    var _1$20 = hit.a;
    var value$proxy24 = +_1$19.getFloat64(0, true);
    _1$20.setFloat64(offset$proxy92, value$proxy24, true);
    var offset$proxy95 = (8 + offset$proxy92) | 0;
    var value$proxy25 = +_1$19.getFloat64(8, true);
    _1$20.setFloat64(offset$proxy95, value$proxy25, true);
    var offset$proxy97 = (16 + offset$proxy92) | 0;
    var value$proxy26 = +_1$19.getFloat64(16, true);
    _1$20.setFloat64(offset$proxy97, value$proxy26, true);
  }
  var offset$proxy99 = (32 + (sphere.b | 0)) | 0;
  var _1$21 = sphere.a;
  var offset$proxy100 = (57 + (hit.b | 0)) | 0;
  var _1$22 = hit.a;
  var value$proxy27 = _1$21.getUint8(offset$proxy99) | 0;
  _1$22.setUint8(offset$proxy100, value$proxy27);
  var offset$proxy103 = (1 + offset$proxy99) | 0;
  var offset$proxy104 = (1 + offset$proxy100) | 0;
  var value$proxy28 = +_1$21.getFloat64(offset$proxy103, true);
  _1$22.setFloat64(offset$proxy104, value$proxy28, true);
  var offset$proxy107 = (8 + offset$proxy104) | 0;
  var offset$proxy108 = (8 + offset$proxy103) | 0;
  var value$proxy29 = +_1$21.getFloat64(offset$proxy108, true);
  _1$22.setFloat64(offset$proxy107, value$proxy29, true);
  var offset$proxy109 = (16 + offset$proxy104) | 0;
  var offset$proxy110 = (16 + offset$proxy103) | 0;
  var value$proxy30 = +_1$21.getFloat64(offset$proxy110, true);
  _1$22.setFloat64(offset$proxy109, value$proxy30, true);
  var offset$proxy111 = (25 + offset$proxy100) | 0;
  var offset$proxy112 = (25 + offset$proxy99) | 0;
  var value$proxy31 = +_1$21.getFloat64(offset$proxy112, true);
  _1$22.setFloat64(offset$proxy111, value$proxy31, true);
  return true;
};
$p.V = function (obj, ray, minT, maxT, hitBuffer) {
  return this.a3(obj, ray, minT, maxT, hitBuffer);
};
var $d_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$ =
  new $TypeData().i(
    $c_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$,
    "raytracer.hittable.hittable$package$given_Hittable_Sphere$",
    {
      ao: 1,
      u: 1,
    },
  );
var $n_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$;
function $m_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$() {
  if (!$n_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$) {
    $n_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$ =
      new $c_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$();
  }
  return $n_Lraytracer_hittable_hittable$package$given＿Hittable＿Sphere$;
}
/** @constructor */
function $c_Lraytracer_hittable_hittable$package$given＿Hittable＿StructArray(
  x$1,
) {
  this.ac = null;
  this.ac = x$1;
}
$p =
  $c_Lraytracer_hittable_hittable$package$given＿Hittable＿StructArray.prototype =
    new $h_O();
$p.constructor =
  $c_Lraytracer_hittable_hittable$package$given＿Hittable＿StructArray;
/** @constructor */
function $h_Lraytracer_hittable_hittable$package$given＿Hittable＿StructArray() {}
$h_Lraytracer_hittable_hittable$package$given＿Hittable＿StructArray.prototype =
  $p;
$p.a3 = function (arr, ray, minT, maxT, hit) {
  return new $c_Lraytracer_hittable_hittable$package$given＿Hittable＿IterableOnce(
    this.ac,
  ).ay(
    new $c_Lbufferdata_package$package$StructArray$given＿Conversion＿StructArray＿Iterable$$anon$9(
      arr,
    ).s(),
    ray,
    minT,
    maxT,
    hit,
  );
};
$p.V = function (obj, ray, minT, maxT, hitBuffer) {
  return this.a3(obj, ray, minT, maxT, hitBuffer);
};
var $d_Lraytracer_hittable_hittable$package$given＿Hittable＿StructArray =
  new $TypeData().i(
    $c_Lraytracer_hittable_hittable$package$given＿Hittable＿StructArray,
    "raytracer.hittable.hittable$package$given_Hittable_StructArray",
    {
      ap: 1,
      u: 1,
    },
  );
/** @constructor */
function $c_s_Console$() {
  this.ad = null;
  $n_s_Console$ = this;
  this.ad = new $c_s_util_DynamicVariable($m_jl_System$Streams$().a9);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {}
$h_s_Console$.prototype = $p;
$p.o = function () {
  return this.ad.Z;
};
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", {
  av: 1,
  b9: 1,
});
var $n_s_Console$;
function $m_s_Console$() {
  if (!$n_s_Console$) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.T = 0;
  this.aj = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.T = $f_T__hashCode__I("Seq");
  this.aj = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.b7($m_sci_Nil$(), this.aj);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype =
  new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.b4 = function (xs) {
  return $is_sc_IndexedSeq(xs)
    ? this.aS(xs, this.T)
    : xs instanceof $c_sci_List
      ? this.aT(xs, this.T)
      : this.aX(xs, this.T);
};
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i(
  $c_s_util_hashing_MurmurHash3$,
  "scala.util.hashing.MurmurHash3$",
  {
    bk: 1,
    bj: 1,
  },
);
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if (!$n_s_util_hashing_MurmurHash3$) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
class $c_jl_Exception extends $c_jl_Throwable {}
function $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType() {
  $m_Lraytracer_material_MaterialType$();
  return $t_Lraytracer_material_MaterialType$__Lambertian;
}
function $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType() {
  $m_Lraytracer_material_MaterialType$();
  return $t_Lraytracer_material_MaterialType$__Metal;
}
/** @constructor */
function $c_Lraytracer_material_MaterialType$() {
  $n_Lraytracer_material_MaterialType$ = this;
  $t_Lraytracer_material_MaterialType$__Lambertian =
    new $c_Lraytracer_material_MaterialType$$anon$1();
  $t_Lraytracer_material_MaterialType$__Metal =
    new $c_Lraytracer_material_MaterialType$$anon$2();
  $s_Lraytracer_material_MaterialType$__Lambertian__Lraytracer_material_MaterialType();
  $s_Lraytracer_material_MaterialType$__Metal__Lraytracer_material_MaterialType();
}
$p = $c_Lraytracer_material_MaterialType$.prototype = new $h_O();
$p.constructor = $c_Lraytracer_material_MaterialType$;
/** @constructor */
function $h_Lraytracer_material_MaterialType$() {}
$h_Lraytracer_material_MaterialType$.prototype = $p;
var $d_Lraytracer_material_MaterialType$ = new $TypeData().i(
  $c_Lraytracer_material_MaterialType$,
  "raytracer.material.MaterialType$",
  {
    aq: 1,
    z: 1,
    b8: 1,
  },
);
var $n_Lraytracer_material_MaterialType$;
function $m_Lraytracer_material_MaterialType$() {
  if (!$n_Lraytracer_material_MaterialType$) {
    $n_Lraytracer_material_MaterialType$ =
      new $c_Lraytracer_material_MaterialType$();
  }
  return $n_Lraytracer_material_MaterialType$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  if (n === 0) {
    return $thiz.a;
  }
  if (n === 1) {
    return $thiz.b;
  }
  throw new $c_jl_IndexOutOfBoundsException(
    n + " is out of bounds (min 0, max 1)",
  );
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.s();
  while ($thiz.l()) {
    if (!those.l()) {
      return false;
    }
    if (!$m_sr_BoxesRunTime$().g($thiz.m(), those.m())) {
      return false;
    }
  }
  return !those.l();
}
/** @constructor */
function $c_sc_Iterator$() {
  this.Y = null;
  $n_sc_Iterator$ = this;
  this.Y = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i(
  $c_sc_Iterator$,
  "scala.collection.Iterator$",
  {
    aE: 1,
    a: 1,
    aD: 1,
  },
);
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if (!$n_sc_Iterator$) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.ba
  );
}
/** @constructor */
function $c_Lbufferdata_package$package$StructArray$StructArrayIterator(
  arr,
  stride,
) {
  this.J = 0;
  this.R = 0;
  this.X = null;
  this.a6 = 0;
  this.J = 0;
  this.R = arr.b | 0;
  this.X = arr.a;
  this.a6 =
    stride >= 0
      ? stride
      : this.R === 0
        ? 0
        : ((this.X.buffer.byteLength | 0) / $checkIntDivisor(this.R)) | 0;
}
$p = $c_Lbufferdata_package$package$StructArray$StructArrayIterator.prototype =
  new $h_O();
$p.constructor = $c_Lbufferdata_package$package$StructArray$StructArrayIterator;
/** @constructor */
function $h_Lbufferdata_package$package$StructArray$StructArrayIterator() {}
$h_Lbufferdata_package$package$StructArray$StructArrayIterator.prototype = $p;
$p.w = function () {
  return -1;
};
$p.U = function (b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(
    this,
    b,
    start,
    sep,
    end,
  );
};
$p.s = function () {
  return this;
};
$p.j = function () {
  return "<iterator>";
};
$p.l = function () {
  return this.J < this.R;
};
$p.aW = function () {
  var current = this.J;
  this.J = (1 + this.J) | 0;
  return new $c_T2(this.X, Math.imul(current, this.a6));
};
$p.m = function () {
  return this.aW();
};
var $d_Lbufferdata_package$package$StructArray$StructArrayIterator =
  new $TypeData().i(
    $c_Lbufferdata_package$package$StructArray$StructArrayIterator,
    "bufferdata.package$package$StructArray$StructArrayIterator",
    {
      X: 1,
      d: 1,
      e: 1,
      m: 1,
    },
  );
/** @constructor */
function $c_Ljava_io_OutputStream() {}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {}
$h_Ljava_io_OutputStream.prototype = $p;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return $thiz === that;
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return $thiz ? 1231 : 1237;
}
function $f_jl_Boolean__toString__T($thiz) {
  return "" + $thiz;
}
var $d_jl_Boolean = new $TypeData().i(
  0,
  "java.lang.Boolean",
  {
    a5: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  (x) => typeof x === "boolean",
);
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return that instanceof $Char && $thiz === that.c;
}
function $f_jl_Character__toString__T($thiz) {
  return "" + $cToS($thiz);
}
function $isArrayOf_jl_Character(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.F
  );
}
var $d_jl_Character = new $TypeData().i(
  0,
  "java.lang.Character",
  {
    F: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  (x) => x instanceof $Char,
);
class $c_jl_RuntimeException extends $c_jl_Exception {}
/** @constructor */
function $c_jl_StringBuilder() {
  this.k = null;
  this.k = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {}
$h_jl_StringBuilder.prototype = $p;
$p.j = function () {
  return this.k;
};
$p.x = function () {
  return this.k.length;
};
$p.aF = function (index) {
  return this.k.charCodeAt(index);
};
var $d_jl_StringBuilder = new $TypeData().i(
  $c_jl_StringBuilder,
  "java.lang.StringBuilder",
  {
    ag: 1,
    s: 1,
    D: 1,
    a: 1,
  },
);
/** @constructor */
function $c_Lraytracer_render_Camera(origin, lowerLeft, horizontal, vertical) {
  this.t = null;
  this.G = null;
  this.F = null;
  this.H = null;
  this.t = origin;
  this.G = lowerLeft;
  this.F = horizontal;
  this.H = vertical;
}
$p = $c_Lraytracer_render_Camera.prototype = new $h_O();
$p.constructor = $c_Lraytracer_render_Camera;
/** @constructor */
function $h_Lraytracer_render_Camera() {}
$h_Lraytracer_render_Camera.prototype = $p;
$p.Q = function () {
  return new $c_s_Product$$anon$1(this);
};
$p.r = function () {
  return $m_s_util_hashing_MurmurHash3$().ax(this, -1779528318, true);
};
$p.i = function (x$0) {
  if (this === x$0) {
    return true;
  } else if (x$0 instanceof $c_Lraytracer_render_Camera) {
    var x = this.t;
    var x$2 = x$0.t;
    if (x === null ? x$2 === null : x.i(x$2)) {
      var x$3 = this.G;
      var x$4 = x$0.G;
      var $x_2 = x$3 === null ? x$4 === null : x$3.i(x$4);
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.F;
      var x$6 = x$0.F;
      var $x_1 = x$5 === null ? x$6 === null : x$5.i(x$6);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$7 = this.H;
      var x$8 = x$0.H;
      return x$7 === null ? x$8 === null : x$7.i(x$8);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
$p.j = function () {
  return $m_sr_ScalaRunTime$().ak(this);
};
$p.z = function () {
  return 4;
};
$p.B = function () {
  return "Camera";
};
$p.A = function (n) {
  switch (n) {
    case 0: {
      return this.t;
      break;
    }
    case 1: {
      return this.G;
      break;
    }
    case 2: {
      return this.F;
      break;
    }
    case 3: {
      return this.H;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException("" + n);
    }
  }
};
function $isArrayOf_Lraytracer_render_Camera(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.K
  );
}
var $d_Lraytracer_render_Camera = new $TypeData().i(
  $c_Lraytracer_render_Camera,
  "raytracer.render.Camera",
  {
    K: 1,
    g: 1,
    k: 1,
    a: 1,
  },
);
/** @constructor */
function $c_Lraytracer_scene_Scene(world, camera) {
  this.M = null;
  this.L = null;
  this.M = world;
  this.L = camera;
}
$p = $c_Lraytracer_scene_Scene.prototype = new $h_O();
$p.constructor = $c_Lraytracer_scene_Scene;
/** @constructor */
function $h_Lraytracer_scene_Scene() {}
$h_Lraytracer_scene_Scene.prototype = $p;
$p.Q = function () {
  return new $c_s_Product$$anon$1(this);
};
$p.r = function () {
  return $m_s_util_hashing_MurmurHash3$().ax(this, 178380211, true);
};
$p.i = function (x$0) {
  if (this === x$0) {
    return true;
  } else if (x$0 instanceof $c_Lraytracer_scene_Scene) {
    var x = this.M;
    var x$2 = x$0.M;
    if (x === null ? x$2 === null : x.i(x$2)) {
      var x$3 = this.L;
      var x$4 = x$0.L;
      return x$3 === null ? x$4 === null : x$3.i(x$4);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
$p.j = function () {
  return $m_sr_ScalaRunTime$().ak(this);
};
$p.z = function () {
  return 2;
};
$p.B = function () {
  return "Scene";
};
$p.A = function (n) {
  if (n === 0) {
    return this.M;
  }
  if (n === 1) {
    return this.L;
  }
  throw new $c_jl_IndexOutOfBoundsException("" + n);
};
function $isArrayOf_Lraytracer_scene_Scene(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.L
  );
}
var $d_Lraytracer_scene_Scene = new $TypeData().i(
  $c_Lraytracer_scene_Scene,
  "raytracer.scene.Scene",
  {
    L: 1,
    g: 1,
    k: 1,
    a: 1,
  },
);
/** @constructor */
function $c_sc_AbstractIterator() {}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {}
$h_sc_AbstractIterator.prototype = $p;
$p.w = function () {
  return -1;
};
$p.U = function (b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(
    this,
    b,
    start,
    sep,
    end,
  );
};
$p.s = function () {
  return this;
};
$p.j = function () {
  return "<iterator>";
};
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.w();
  if (thisKnownSize !== -1) {
    var thatKnownSize = that.w();
    if (thatKnownSize !== -1) {
      if (thisKnownSize !== thatKnownSize) {
        return false;
      }
      if (thisKnownSize === 0) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.s(), that);
}
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw new $c_jl_IndexOutOfBoundsException("" + n);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.bh
  );
}
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i(
  $c_jl_ArithmeticException,
  "java.lang.ArithmeticException",
  {
    a4: 1,
    i: 1,
    h: 1,
    j: 1,
    a: 1,
  },
);
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return "" + $thiz;
}
var $d_jl_Byte = new $TypeData().i(
  0,
  "java.lang.Byte",
  {
    a6: 1,
    f: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  (x) => $isByte(x),
);
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalArgumentException = new $TypeData().i(
  $c_jl_IllegalArgumentException,
  "java.lang.IllegalArgumentException",
  {
    a8: 1,
    i: 1,
    h: 1,
    j: 1,
    a: 1,
  },
);
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i(
  $c_jl_IndexOutOfBoundsException,
  "java.lang.IndexOutOfBoundsException",
  {
    a9: 1,
    i: 1,
    h: 1,
    j: 1,
    a: 1,
  },
);
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype =
  new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i(
  $c_jl_JSConsoleBasedPrintStream$DummyOutputStream,
  "java.lang.JSConsoleBasedPrintStream$DummyOutputStream",
  {
    ac: 1,
    C: 1,
    A: 1,
    E: 1,
    B: 1,
  },
);
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i(
  $c_jl_NullPointerException,
  "java.lang.NullPointerException",
  {
    ad: 1,
    i: 1,
    h: 1,
    j: 1,
    a: 1,
  },
);
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return "" + $thiz;
}
var $d_jl_Short = new $TypeData().i(
  0,
  "java.lang.Short",
  {
    ae: 1,
    f: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  (x) => $isShort(x),
);
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i(
  $c_jl_UnsupportedOperationException,
  "java.lang.UnsupportedOperationException",
  {
    ai: 1,
    i: 1,
    h: 1,
    j: 1,
    a: 1,
  },
);
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i(
  $c_ju_NoSuchElementException,
  "java.util.NoSuchElementException",
  {
    ak: 1,
    i: 1,
    h: 1,
    j: 1,
    a: 1,
  },
);
function $ct_Lraytracer_material_MaterialType__S__($thiz, code) {
  $thiz.E = code;
  return $thiz;
}
/** @constructor */
function $c_Lraytracer_material_MaterialType() {
  this.E = 0;
}
$p = $c_Lraytracer_material_MaterialType.prototype = new $h_O();
$p.constructor = $c_Lraytracer_material_MaterialType;
/** @constructor */
function $h_Lraytracer_material_MaterialType() {}
$h_Lraytracer_material_MaterialType.prototype = $p;
$p.Q = function () {
  return new $c_s_Product$$anon$1(this);
};
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.N = 0;
  this.af = 0;
  this.ae = null;
  if (outer === null) {
    throw new $c_jl_NullPointerException();
  }
  this.ae = outer;
  this.N = 0;
  this.af = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {}
$h_s_Product$$anon$1.prototype = $p;
$p.l = function () {
  return this.N < this.af;
};
$p.m = function () {
  var result = this.ae.A(this.N);
  this.N = (1 + this.N) | 0;
  return result;
};
var $d_s_Product$$anon$1 = new $TypeData().i(
  $c_s_Product$$anon$1,
  "scala.Product$$anon$1",
  {
    aw: 1,
    n: 1,
    d: 1,
    e: 1,
    m: 1,
  },
);
/** @constructor */
function $c_T2(_1, _2) {
  this.a = null;
  this.b = null;
  this.a = _1;
  this.b = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {}
$h_T2.prototype = $p;
$p.z = function () {
  return 2;
};
$p.A = function (n) {
  return $f_s_Product2__productElement__I__O(this, n);
};
$p.j = function () {
  return "(" + this.a + "," + this.b + ")";
};
$p.B = function () {
  return "Tuple2";
};
$p.Q = function () {
  return new $c_sr_ScalaRunTime$$anon$1(this);
};
$p.r = function () {
  return $m_s_util_hashing_MurmurHash3$().aE(this, -889275714, null);
};
$p.i = function (x$1) {
  return (
    this === x$1 ||
    (x$1 instanceof $c_T2 &&
      $m_sr_BoxesRunTime$().g(this.a, x$1.a) &&
      $m_sr_BoxesRunTime$().g(this.b, x$1.b))
  );
};
function $isArrayOf_T2(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.O
  );
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", {
  O: 1,
  ax: 1,
  g: 1,
  k: 1,
  a: 1,
});
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(
    $thiz,
    $thiz.a0() + "(",
    ", ",
    ")",
  );
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.l = function () {
  return false;
};
$p.aV = function () {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
};
$p.w = function () {
  return 0;
};
$p.m = function () {
  this.aV();
};
var $d_sc_Iterator$$anon$19 = new $TypeData().i(
  $c_sc_Iterator$$anon$19,
  "scala.collection.Iterator$$anon$19",
  {
    aF: 1,
    n: 1,
    d: 1,
    e: 1,
    m: 1,
  },
);
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if (n < 0) {
    throw new $c_jl_IndexOutOfBoundsException("" + n);
  }
  var skipped = $thiz.aM(n);
  if (skipped.q()) {
    throw new $c_jl_IndexOutOfBoundsException("" + n);
  }
  return skipped.a2();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return $is_sc_LinearSeq(that)
    ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z(
        $thiz,
        $thiz,
        that,
      )
    : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z(
  $thiz,
  a,
  b,
) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if (a$tailLocal1 === b$tailLocal1) {
      return true;
    } else if (
      !a$tailLocal1.q() &&
      !b$tailLocal1.q() &&
      $m_sr_BoxesRunTime$().g(a$tailLocal1.a2(), b$tailLocal1.a2())
    ) {
      var a$tailLocal1$tmp1 = a$tailLocal1.a5();
      var b$tailLocal1$tmp1 = b$tailLocal1.a5();
      a$tailLocal1 = a$tailLocal1$tmp1;
      b$tailLocal1 = b$tailLocal1$tmp1;
    } else {
      return a$tailLocal1.q() && b$tailLocal1.q();
    }
  }
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.ai = null;
  this.P = 0;
  this.ah = 0;
  this.ai = x$1;
  this.P = 0;
  this.ah = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.l = function () {
  return this.P < this.ah;
};
$p.m = function () {
  var result = this.ai.A(this.P);
  this.P = (1 + this.P) | 0;
  return result;
};
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i(
  $c_sr_ScalaRunTime$$anon$1,
  "scala.runtime.ScalaRunTime$$anon$1",
  {
    bd: 1,
    n: 1,
    d: 1,
    e: 1,
    m: 1,
  },
);
/** @constructor */
function $c_Lbufferdata_package$package$StructArray$given＿Conversion＿StructArray＿Iterable$$anon$9(
  arr$2,
) {
  this.a7 = null;
  this.a7 = arr$2;
}
$p =
  $c_Lbufferdata_package$package$StructArray$given＿Conversion＿StructArray＿Iterable$$anon$9.prototype =
    new $h_O();
$p.constructor =
  $c_Lbufferdata_package$package$StructArray$given＿Conversion＿StructArray＿Iterable$$anon$9;
/** @constructor */
function $h_Lbufferdata_package$package$StructArray$given＿Conversion＿StructArray＿Iterable$$anon$9() {}
$h_Lbufferdata_package$package$StructArray$given＿Conversion＿StructArray＿Iterable$$anon$9.prototype =
  $p;
$p.w = function () {
  return -1;
};
$p.U = function (b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(
    this,
    b,
    start,
    sep,
    end,
  );
};
$p.a0 = function () {
  return "Iterable";
};
$p.j = function () {
  return $f_sc_Iterable__toString__T(this);
};
$p.s = function () {
  return new $c_Lbufferdata_package$package$StructArray$StructArrayIterator(
    this.a7,
    -1,
  );
};
var $d_Lbufferdata_package$package$StructArray$given＿Conversion＿StructArray＿Iterable$$anon$9 =
  new $TypeData().i(
    $c_Lbufferdata_package$package$StructArray$given＿Conversion＿StructArray＿Iterable$$anon$9,
    "bufferdata.package$package$StructArray$given_Conversion_StructArray_Iterable$$anon$9",
    {
      Y: 1,
      d: 1,
      e: 1,
      q: 1,
      p: 1,
      o: 1,
    },
  );
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = $thiz | 0;
  if (valueInt === $thiz && 1.0 / $thiz !== -Infinity) {
    return valueInt;
  } else if ($thiz !== $thiz) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return (
      (fpBitsDataView.getInt32(0, true) | 0) ^
      (fpBitsDataView.getInt32(4, true) | 0)
    );
  }
}
function $f_jl_Double__toString__T($thiz) {
  return "" + $thiz;
}
function $isArrayOf_jl_Double(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.G
  );
}
var $d_jl_Double = new $TypeData().i(
  0,
  "java.lang.Double",
  {
    G: 1,
    f: 1,
    a: 1,
    b: 1,
    c: 1,
    l: 1,
  },
  (x) => typeof x === "number",
);
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = value | 0;
  if (valueInt === value && 1.0 / value !== -Infinity) {
    return valueInt;
  } else if (value !== value) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return (
      (fpBitsDataView.getInt32(0, true) | 0) ^
      (fpBitsDataView.getInt32(4, true) | 0)
    );
  }
}
function $f_jl_Float__toString__T($thiz) {
  return "" + $thiz;
}
var $d_jl_Float = new $TypeData().i(
  0,
  "java.lang.Float",
  {
    a7: 1,
    f: 1,
    a: 1,
    b: 1,
    c: 1,
    l: 1,
  },
  (x) => $isFloat(x),
);
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return "" + $thiz;
}
var $d_jl_Integer = new $TypeData().i(
  0,
  "java.lang.Integer",
  {
    aa: 1,
    f: 1,
    a: 1,
    b: 1,
    c: 1,
    l: 1,
  },
  (x) => $isInt(x),
);
function $f_jl_Long__equals__O__Z($thiz, that) {
  return that instanceof $c_RTLong && $thiz.c === that.c && $thiz.d === that.d;
}
function $f_jl_Long__hashCode__I($thiz) {
  return $thiz.c ^ $thiz.d;
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().av($thiz.c, $thiz.d);
}
function $isArrayOf_jl_Long(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.H
  );
}
var $d_jl_Long = new $TypeData().i(
  0,
  "java.lang.Long",
  {
    H: 1,
    f: 1,
    a: 1,
    b: 1,
    c: 1,
    l: 1,
  },
  (x) => x instanceof $c_RTLong,
);
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while (i !== n) {
    h = ((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0;
    i = (1 + i) | 0;
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return $thiz === that;
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(
  0,
  "java.lang.String",
  {
    af: 1,
    a: 1,
    b: 1,
    s: 1,
    c: 1,
    l: 1,
  },
  (x) => typeof x === "string",
);
/** @constructor */
function $c_sc_AbstractIterable() {}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {}
$h_sc_AbstractIterable.prototype = $p;
$p.U = function (b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(
    this,
    b,
    start,
    sep,
    end,
  );
};
$p.a0 = function () {
  return this.W();
};
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.ag = null;
  this.S = 0;
  this.I = 0;
  this.ag = self;
  this.S = 0;
  this.I = self.x();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype =
  new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.w = function () {
  return this.I;
};
$p.l = function () {
  return this.I > 0;
};
$p.m = function () {
  if (this.I > 0) {
    var r = this.ag.y(this.S);
    this.S = (1 + this.S) | 0;
    this.I = (-1 + this.I) | 0;
    return r;
  } else {
    return $m_sc_Iterator$().Y.m();
  }
};
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i(
  $c_sc_IndexedSeqView$IndexedSeqViewIterator,
  "scala.collection.IndexedSeqView$IndexedSeqViewIterator",
  {
    aC: 1,
    n: 1,
    d: 1,
    e: 1,
    m: 1,
    a: 1,
  },
);
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(
  $thiz,
  _out,
  autoFlush,
  charset,
) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {}
$h_Ljava_io_PrintStream.prototype = $p;
function $f_sc_View__toString__T($thiz) {
  return $thiz.W() + "(<not computed>)";
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.bf
  );
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (typeof console !== "undefined") {
    if ($thiz.a8 && !!!!console.error) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.a8 = false;
  this.K = null;
  this.a8 = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(
    this,
    new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(),
    false,
    null,
  );
  this.K = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.n = function (s) {
  var rest = s;
  while (rest !== "") {
    var this$1 = rest;
    var nlPos = this$1.indexOf("\n") | 0;
    if (nlPos < 0) {
      this.K = "" + this.K + rest;
      rest = "";
    } else {
      var $x_1 = this.K;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(
        this,
        "" + $x_1 + this$2.substring(0, nlPos),
      );
      this.K = "";
      var this$3 = rest;
      var beginIndex = (1 + nlPos) | 0;
      rest = this$3.substring(beginIndex);
    }
  }
};
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i(
  $c_jl_JSConsoleBasedPrintStream,
  "java.lang.JSConsoleBasedPrintStream",
  {
    ab: 1,
    a3: 1,
    a2: 1,
    C: 1,
    A: 1,
    E: 1,
    B: 1,
    D: 1,
  },
);
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(
  $thiz,
  n,
  s,
) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (n$tailLocal1 <= 0 || s$tailLocal1.q()) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = (-1 + n$tailLocal1) | 0;
      var s$tailLocal1$tmp1 = s$tailLocal1.a5();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_sc_AbstractView() {}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {}
$h_sc_AbstractView.prototype = $p;
$p.j = function () {
  return $f_sc_View__toString__T(this);
};
/** @constructor */
function $c_Lraytracer_material_MaterialType$$anon$1() {
  this.E = 0;
  $ct_Lraytracer_material_MaterialType__S__(this, 0);
}
$p = $c_Lraytracer_material_MaterialType$$anon$1.prototype =
  new $h_Lraytracer_material_MaterialType();
$p.constructor = $c_Lraytracer_material_MaterialType$$anon$1;
/** @constructor */
function $h_Lraytracer_material_MaterialType$$anon$1() {}
$h_Lraytracer_material_MaterialType$$anon$1.prototype = $p;
$p.z = function () {
  return 0;
};
$p.A = function (n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
};
$p.B = function () {
  return "Lambertian";
};
$p.j = function () {
  return "Lambertian";
};
$p.r = function () {
  return $f_T__hashCode__I("Lambertian");
};
var $d_Lraytracer_material_MaterialType$$anon$1 = new $TypeData().i(
  $c_Lraytracer_material_MaterialType$$anon$1,
  "raytracer.material.MaterialType$$anon$1",
  {
    ar: 1,
    J: 1,
    g: 1,
    k: 1,
    a: 1,
    U: 1,
    V: 1,
    z: 1,
    S: 1,
    T: 1,
  },
);
/** @constructor */
function $c_Lraytracer_material_MaterialType$$anon$2() {
  this.E = 0;
  $ct_Lraytracer_material_MaterialType__S__(this, 1);
}
$p = $c_Lraytracer_material_MaterialType$$anon$2.prototype =
  new $h_Lraytracer_material_MaterialType();
$p.constructor = $c_Lraytracer_material_MaterialType$$anon$2;
/** @constructor */
function $h_Lraytracer_material_MaterialType$$anon$2() {}
$h_Lraytracer_material_MaterialType$$anon$2.prototype = $p;
$p.z = function () {
  return 0;
};
$p.A = function (n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
};
$p.B = function () {
  return "Metal";
};
$p.j = function () {
  return "Metal";
};
$p.r = function () {
  return $f_T__hashCode__I("Metal");
};
var $d_Lraytracer_material_MaterialType$$anon$2 = new $TypeData().i(
  $c_Lraytracer_material_MaterialType$$anon$2,
  "raytracer.material.MaterialType$$anon$2",
  {
    as: 1,
    J: 1,
    g: 1,
    k: 1,
    a: 1,
    U: 1,
    V: 1,
    z: 1,
    S: 1,
    T: 1,
  },
);
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if ($thiz === o) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.aD($thiz)) {
        return $thiz.az(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return !!(obj && obj.$classData && obj.$classData.n.r);
}
function $isArrayOf_sc_Seq(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.r
  );
}
/** @constructor */
function $c_sc_AbstractSeq() {}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {}
$h_sc_AbstractSeq.prototype = $p;
$p.az = function (that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
};
$p.aD = function (that) {
  return true;
};
$p.i = function (o) {
  return $f_sc_Seq__equals__O__Z(this, o);
};
$p.r = function () {
  return $m_s_util_hashing_MurmurHash3$().b4(this);
};
$p.j = function () {
  return $f_sc_Iterable__toString__T(this);
};
/** @constructor */
function $c_sc_AbstractSeqView() {}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return !!(obj && obj.$classData && obj.$classData.n.w);
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.w
  );
}
function $is_sc_LinearSeq(obj) {
  return !!(obj && obj.$classData && obj.$classData.n.x);
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.x
  );
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.O = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.O = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {}
$h_sc_SeqView$Id.prototype = $p;
$p.y = function (idx) {
  return this.O.y(idx);
};
$p.x = function () {
  return this.O.x();
};
$p.q = function () {
  return this.O.q();
};
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.O = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.w = function () {
  return this.x();
};
$p.s = function () {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
};
$p.W = function () {
  return "IndexedSeqView";
};
var $d_sc_IndexedSeqView$Id = new $TypeData().i(
  $c_sc_IndexedSeqView$Id,
  "scala.collection.IndexedSeqView$Id",
  {
    aB: 1,
    aI: 1,
    ay: 1,
    az: 1,
    v: 1,
    d: 1,
    e: 1,
    q: 1,
    p: 1,
    o: 1,
    a: 1,
    aM: 1,
    y: 1,
    aH: 1,
    Q: 1,
    aA: 1,
  },
);
/** @constructor */
function $c_sci_AbstractSeq() {}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_AbstractSeq() {}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {}
$h_scm_AbstractSeq.prototype = $p;
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if (a$tailLocal1 === b$tailLocal1) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.q();
      var bEmpty = b$tailLocal1.q();
      return !(aEmpty || bEmpty) && a$tailLocal1.a1()
        ? a$tailLocal1.a4()
        : aEmpty && bEmpty;
    }
  }
}
/** @constructor */
function $c_sci_List() {}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {}
$h_sci_List.prototype = $p;
$p.y = function (n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
};
$p.az = function (that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
};
$p.W = function () {
  return "LinearSeq";
};
$p.q = function () {
  return this === $m_sci_Nil$();
};
$p.x = function () {
  var these = this;
  var len = 0;
  while (!these.q()) {
    len = (1 + len) | 0;
    these.a4();
  }
  return len;
};
$p.a0 = function () {
  return "List";
};
$p.i = function (o) {
  return o instanceof $c_sci_List
    ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o)
    : $f_sc_Seq__equals__O__Z(this, o);
};
$p.aM = function (n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(
    this,
    n,
    this,
  );
};
function $isArrayOf_sci_List(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.R
  );
}
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {}
$h_sci_Nil$.prototype = $p;
$p.Q = function () {
  return new $c_s_Product$$anon$1(this);
};
$p.z = function () {
  return 0;
};
$p.B = function () {
  return "Nil";
};
$p.A = function (n) {
  throw new $c_jl_IndexOutOfBoundsException("" + n);
};
$p.a1 = function () {
  throw new $c_ju_NoSuchElementException("head of empty list");
};
$p.a4 = function () {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
};
$p.w = function () {
  return 0;
};
$p.s = function () {
  return $m_sc_Iterator$().Y;
};
$p.a2 = function () {
  this.a1();
};
$p.a5 = function () {
  this.a4();
};
var $d_sci_Nil$ = new $TypeData().i(
  $c_sci_Nil$,
  "scala.collection.immutable.Nil$",
  {
    aS: 1,
    R: 1,
    aO: 1,
    P: 1,
    v: 1,
    d: 1,
    e: 1,
    q: 1,
    p: 1,
    o: 1,
    M: 1,
    N: 1,
    y: 1,
    g: 1,
    r: 1,
    aP: 1,
    aU: 1,
    aT: 1,
    aG: 1,
    x: 1,
    aR: 1,
    aQ: 1,
    aJ: 1,
    aL: 1,
    aK: 1,
    aV: 1,
    a: 1,
    aN: 1,
    k: 1,
  },
);
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if (!$n_sci_Nil$) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.D = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.D = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {}
$h_scm_StringBuilder.prototype = $p;
$p.s = function () {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(
    new $c_sc_IndexedSeqView$Id(this),
  );
};
$p.W = function () {
  return "IndexedSeq";
};
$p.x = function () {
  return this.D.x();
};
$p.w = function () {
  return this.D.x();
};
$p.j = function () {
  return this.D.k;
};
$p.q = function () {
  return this.D.x() === 0;
};
$p.y = function (i) {
  return $bC(this.D.aF(i));
};
var $d_scm_StringBuilder = new $TypeData().i(
  $c_scm_StringBuilder,
  "scala.collection.mutable.StringBuilder",
  {
    b7: 1,
    aW: 1,
    P: 1,
    v: 1,
    d: 1,
    e: 1,
    q: 1,
    p: 1,
    o: 1,
    M: 1,
    N: 1,
    y: 1,
    g: 1,
    r: 1,
    b3: 1,
    t: 1,
    aZ: 1,
    b6: 1,
    b5: 1,
    aY: 1,
    b0: 1,
    aX: 1,
    b4: 1,
    Q: 1,
    w: 1,
    b2: 1,
    b1: 1,
    s: 1,
    a: 1,
  },
);
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
var $t_Lraytracer_material_MaterialType$__Lambertian = null;
var $t_Lraytracer_material_MaterialType$__Metal = null;
let $e_zeroCostStructViews = function () {
  return $m_Lbufferdata_ZeroCostValidation$().aA();
};
export { $e_zeroCostStructViews as zeroCostStructViews };
let $e_zeroCostDirectNested = function () {
  return $m_Lbufferdata_ZeroCostValidation$().an();
};
export { $e_zeroCostDirectNested as zeroCostDirectNested };
let $e_zeroCostNamedTupleSet = function () {
  return $m_Lbufferdata_ZeroCostValidation$().as();
};
export { $e_zeroCostNamedTupleSet as zeroCostNamedTupleSet };
let $e_validateZeroCost = function () {
  return $m_Lbufferdata_ZeroCostValidation$().b8();
};
export { $e_validateZeroCost as validateZeroCost };
let $e_zeroCostPrimitiveViews = function () {
  return $m_Lbufferdata_ZeroCostValidation$().aw();
};
export { $e_zeroCostPrimitiveViews as zeroCostPrimitiveViews };
let $e_zeroCostDirect = function () {
  return $m_Lbufferdata_ZeroCostValidation$().am();
};
export { $e_zeroCostDirect as zeroCostDirect };
let $e_zeroCostNamedNested = function () {
  return $m_Lbufferdata_ZeroCostValidation$().ar();
};
export { $e_zeroCostNamedNested as zeroCostNamedNested };
let $e_createParticleBuffer = function (arg) {
  return $m_Lexample_BufferDataDemo$().al(arg | 0);
};
export { $e_createParticleBuffer as createParticleBuffer };
let $e_renderRaytracer = function (arg, arg$2) {
  return $m_Lexample_Main$package$().b2(arg | 0, arg$2 | 0);
};
export { $e_renderRaytracer as renderRaytracer };
$s_Lexample_app__main__AT__V(new ($d_T.r().C)([]));
