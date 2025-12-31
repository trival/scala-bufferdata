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
  return arg0.$classData.Z ? arg0.h() : $objectClone(arg0);
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
        return null.Z();
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
        return instance.j(x0);
      } else if (instance instanceof $c_RTLong) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if (instance instanceof $Char) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.j.call(instance, x0);
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
        return instance.k();
      } else if (instance instanceof $c_RTLong) {
        return $f_jl_Long__hashCode__I(instance);
      } else if (instance instanceof $Char) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.k.call(instance);
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
$p.k = function () {
  return $systemIdentityHashCode(this);
};
$p.j = function (that) {
  return this === that;
};
$p.m = function () {
  var i = this.k();
  return $objectClassName(this) + "@" + (i >>> 0.0).toString(16);
};
$p.toString = function () {
  return this.m();
};
function $ac_O(arg) {
  if (typeof arg === "number") {
    this.c = new Array(arg);
    for (var i = 0; i < arg; i++) {
      this.c[i] = null;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.i = function (srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
};
$p.h = function () {
  return new $ac_O(this.c.slice());
};
function $ah_O() {}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (typeof arg === "number") {
    this.c = new Array(arg);
    for (var i = 0; i < arg; i++) {
      this.c[i] = false;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.i = function (srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
};
$p.h = function () {
  return new $ac_Z(this.c.slice());
};
function $ac_C(arg) {
  if (typeof arg === "number") {
    this.c = new Uint16Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.i = function (srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.h = function () {
  return new $ac_C(this.c.slice());
};
function $ac_B(arg) {
  if (typeof arg === "number") {
    this.c = new Int8Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.i = function (srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.h = function () {
  return new $ac_B(this.c.slice());
};
function $ac_S(arg) {
  if (typeof arg === "number") {
    this.c = new Int16Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.i = function (srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.h = function () {
  return new $ac_S(this.c.slice());
};
function $ac_I(arg) {
  if (typeof arg === "number") {
    this.c = new Int32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.i = function (srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.h = function () {
  return new $ac_I(this.c.slice());
};
function $ac_J(arg) {
  if (typeof arg === "number") {
    this.c = new Array(arg);
    for (var i = 0; i < arg; i++) {
      this.c[i] = $L0;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.i = function (srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
};
$p.h = function () {
  return new $ac_J(this.c.slice());
};
function $ac_F(arg) {
  if (typeof arg === "number") {
    this.c = new Float32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.i = function (srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.h = function () {
  return new $ac_F(this.c.slice());
};
function $ac_D(arg) {
  if (typeof arg === "number") {
    this.c = new Float64Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.i = function (srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, (srcPos + length) | 0), destPos);
};
$p.h = function () {
  return new $ac_D(this.c.slice());
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
    k: 1,
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
      this.c = new Array(arg);
      for (var i = 0; i < arg; i++) {
        this.c[i] = null;
      }
    } else {
      this.c = arg;
    }
  }
  var $p = (ArrayClass.prototype = new $ah_O());
  $p.constructor = ArrayClass;
  $p.i = function (srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
  };
  $p.h = function () {
    return new ArrayClass(this.c.slice());
  };
  $p.$classData = this;
  var arrayBase = componentData.B || componentData;
  var arrayDepth = componentData.D + 1;
  var name = "[" + componentData.E;
  this.C = ArrayClass;
  this.n = {
    k: 1,
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
$p.t = function () {
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
$p.B = function () {
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
$p.C = function () {
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
$p.x = function () {
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
$p.y = function () {
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
$p.u = function () {
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
$p.S = function () {
  var direct = this.t();
  var primitive = this.B();
  var struct = this.C();
  var directNested = this.u();
  var namedNested = this.x();
  var tupleSetNested = this.y();
  var value =
    $m_sr_BoxesRunTime$().e(direct.first.f32, primitive.first.f32) &&
    $m_sr_BoxesRunTime$().e(direct.first.u8, primitive.first.u8) &&
    $m_sr_BoxesRunTime$().e(direct.last.f32, primitive.last.f32) &&
    $m_sr_BoxesRunTime$().e(direct.last.u8, primitive.last.u8) &&
    $m_sr_BoxesRunTime$().e(primitive.first.f32, struct.first.f32) &&
    $m_sr_BoxesRunTime$().e(primitive.first.u8, struct.first.u8) &&
    $m_sr_BoxesRunTime$().e(primitive.last.f32, struct.last.f32) &&
    $m_sr_BoxesRunTime$().e(primitive.last.u8, struct.last.u8);
  var value$1 =
    $m_sr_BoxesRunTime$().e(directNested.first.x, namedNested.first.x) &&
    $m_sr_BoxesRunTime$().e(directNested.first.y, namedNested.first.y) &&
    $m_sr_BoxesRunTime$().e(directNested.first.life, namedNested.first.life) &&
    $m_sr_BoxesRunTime$().e(directNested.last.x, namedNested.last.x) &&
    $m_sr_BoxesRunTime$().e(directNested.last.y, namedNested.last.y) &&
    $m_sr_BoxesRunTime$().e(directNested.last.life, namedNested.last.life);
  var value$2 =
    $m_sr_BoxesRunTime$().e(directNested.first.x, tupleSetNested.first.x) &&
    $m_sr_BoxesRunTime$().e(directNested.first.y, tupleSetNested.first.y) &&
    $m_sr_BoxesRunTime$().e(
      directNested.first.life,
      tupleSetNested.first.life,
    ) &&
    $m_sr_BoxesRunTime$().e(directNested.last.x, tupleSetNested.last.x) &&
    $m_sr_BoxesRunTime$().e(directNested.last.y, tupleSetNested.last.y) &&
    $m_sr_BoxesRunTime$().e(directNested.last.life, tupleSetNested.last.life);
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
    o: 1,
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
$p.P = function () {
  $m_s_Console$().g().f("Creating array of 10 structs (F32, U8)\n");
  var buffer = new ArrayBuffer(50);
  var _1 = new DataView(buffer);
  $m_s_Console$().g().f("Array length: 10\n");
  $m_s_Console$().g().f("Struct size: 5 bytes\n");
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
  $m_s_Console$().g().f("\nReading back values:\n");
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
      .g()
      .f(x + "\n");
    if (i$1 === 9) {
      break;
    }
    i$1 = (1 + i$1) | 0;
  }
};
$p.s = function (count) {
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
    p: 1,
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
$p.E = function () {
  $m_s_Console$().g().f("Hello from Scala.js!\n");
  $m_s_Console$().g().f("Running on: Scala.js on Node.js\n");
  var x = "" + $m_Lexample_Utils$().L("Developer");
  $m_s_Console$()
    .g()
    .f(x + "\n");
  var x$1 = "Current timestamp: " + $m_Lexample_Utils$().R();
  $m_s_Console$()
    .g()
    .f(x$1 + "\n");
  $m_s_Console$().g().f("\n--- BufferData Demo ---\n");
  $m_Lexample_BufferDataDemo$().P();
  $m_s_Console$().g().f("\n--- BufferData createParticles ---\n");
  var jsData = $m_Lexample_BufferDataDemo$().s(5);
  $m_s_Console$().g().f("Created particle buffer:\n");
  var x$2 = JSON.stringify(jsData, void 0, 2);
  $m_s_Console$()
    .g()
    .f(x$2 + "\n");
};
var $d_Lexample_Main$package$ = new $TypeData().i(
  $c_Lexample_Main$package$,
  "example.Main$package$",
  {
    q: 1,
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
$p.L = function (name) {
  return "Hello, " + name + "!";
};
$p.R = function () {
  return +Date.now();
};
var $d_Lexample_Utils$ = new $TypeData().i(
  $c_Lexample_Utils$,
  "example.Utils$",
  {
    r: 1,
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
    $m_Lexample_Main$package$().E();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().Q(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.p = null;
  this.D = null;
  $n_jl_System$Streams$ = this;
  this.p = new $c_jl_JSConsoleBasedPrintStream(false);
  this.D = new $c_jl_JSConsoleBasedPrintStream(true);
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
    H: 1,
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
    J: 1,
  },
  (x) => x === void 0,
);
function $s_RTLong__remainderUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.O(a.a, a.b, b.a, b.b), this$1.d);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.N(a.a, a.b, b.a, b.b), this$1.d);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.G(a.a, a.b, b.a, b.b), this$1.d);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.F(a.a, a.b, b.a, b.b), this$1.d);
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
  return new $c_RTLong(this$1.M(value), this$1.d);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, value >> 31);
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = a.b;
  return hi !== 0 ? Math.clz32(hi) : (32 + Math.clz32(a.a)) | 0;
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = a.a;
  var hi = a.b;
  return Math.fround(
    4.294967296e9 * hi +
      (((-2097152 & (hi ^ (hi >> 10))) === 0 || (65535 & lo) === 0
        ? lo
        : 32768 | (-32768 & lo)) >>>
        0.0),
  );
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = a.a;
  return 4.294967296e9 * a.b + (lo >>> 0.0);
}
function $s_RTLong__toInt__RTLong__I(a) {
  return a.a;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, a.a, true);
  fpBitsDataView.setInt32(4, a.b, true);
  return +fpBitsDataView.getFloat64(0, true);
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = a.a;
  var blo = b.a;
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
    (((((((Math.imul(alo, b.b) + Math.imul(a.b, blo)) | 0) +
      Math.imul(a1, b1)) |
      0) +
      ((c1part >>> 16) | 0)) |
      0) +
      (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) |
      0,
  );
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = a.a;
  var blo = b.a;
  var lo = (alo - blo) | 0;
  return new $c_RTLong(
    lo,
    (((a.b - b.b) | 0) + (((~alo & blo) | (~(alo ^ blo) & lo)) >> 31)) | 0,
  );
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = a.a;
  var blo = b.a;
  var lo = (alo + blo) | 0;
  return new $c_RTLong(
    lo,
    (((a.b + b.b) | 0) + ((((alo & blo) | ((alo | blo) & ~lo)) >>> 31) | 0)) |
      0,
  );
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = a.b;
  return new $c_RTLong(
    (32 & n) === 0 ? (a.a >>> n) | 0 | ((hi << 1) << ((31 - n) | 0)) : hi >> n,
    (32 & n) === 0 ? hi >> n : hi >> 31,
  );
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = a.b;
  return new $c_RTLong(
    (32 & n) === 0
      ? (a.a >>> n) | 0 | ((hi << 1) << ((31 - n) | 0))
      : (hi >>> n) | 0,
    (32 & n) === 0 ? (hi >>> n) | 0 : 0,
  );
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = a.a;
  return new $c_RTLong(
    (32 & n) === 0 ? lo << n : 0,
    (32 & n) === 0
      ? (((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0 | (a.b << n)
      : lo << n,
  );
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(a.a ^ b.a, a.b ^ b.b);
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(a.a & b.a, a.b & b.b);
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(a.a | b.a, a.b | b.b);
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = a.b;
  var bhi = b.b;
  return ahi === bhi ? a.a >>> 0 >= b.a >>> 0 : ahi >>> 0 >= bhi >>> 0;
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = a.b;
  var bhi = b.b;
  return ahi === bhi ? a.a >>> 0 > b.a >>> 0 : ahi >>> 0 > bhi >>> 0;
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = a.b;
  var bhi = b.b;
  return ahi === bhi ? a.a >>> 0 <= b.a >>> 0 : ahi >>> 0 <= bhi >>> 0;
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = a.b;
  var bhi = b.b;
  return ahi === bhi ? a.a >>> 0 < b.a >>> 0 : ahi >>> 0 < bhi >>> 0;
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = a.b;
  var bhi = b.b;
  return ahi === bhi ? a.a >>> 0 >= b.a >>> 0 : ahi > bhi;
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = a.b;
  var bhi = b.b;
  return ahi === bhi ? a.a >>> 0 > b.a >>> 0 : ahi > bhi;
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = a.b;
  var bhi = b.b;
  return ahi === bhi ? a.a >>> 0 <= b.a >>> 0 : ahi < bhi;
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = a.b;
  var bhi = b.b;
  return ahi === bhi ? a.a >>> 0 < b.a >>> 0 : ahi < bhi;
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return !(a.a === b.a && a.b === b.b);
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return a.a === b.a && a.b === b.b;
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.a = 0;
  this.b = 0;
  this.a = lo;
  this.b = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {}
$h_RTLong.prototype = $p;
$p.j = function (that) {
  return that instanceof $c_RTLong && this.a === that.a && this.b === that.b;
};
$p.k = function () {
  return this.a ^ this.b;
};
$p.m = function () {
  return $m_RTLong$().A(this.a, this.b);
};
$p.U = function () {
  return (this.a << 24) >> 24;
};
$p.a3 = function () {
  return (this.a << 16) >> 16;
};
$p.a0 = function () {
  return this.a;
};
$p.a1 = function () {
  return this;
};
$p.Y = function () {
  var lo = this.a;
  var hi = this.b;
  return Math.fround(
    4.294967296e9 * hi +
      (((-2097152 & (hi ^ (hi >> 10))) === 0 || (65535 & lo) === 0
        ? lo
        : 32768 | (-32768 & lo)) >>>
        0.0),
  );
};
$p.X = function () {
  var lo = this.a;
  return 4.294967296e9 * this.b + (lo >>> 0.0);
};
$p.W = function (that) {
  return $m_RTLong$().z(this.a, this.b, that.a, that.b);
};
$p.V = function (that) {
  return $m_RTLong$().z(this.a, this.b, that.a, that.b);
};
function $isArrayOf_RTLong(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.n
  );
}
var $d_RTLong = new $TypeData().i(
  $c_RTLong,
  "org.scalajs.linker.runtime.RuntimeLong",
  {
    n: 1,
  },
);
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((-2097152 & ahi) === 0) {
    if ((-2097152 & bhi) === 0) {
      var aDouble = 4.294967296e9 * ahi + (alo >>> 0.0);
      var bDouble = 4.294967296e9 * bhi + (blo >>> 0.0);
      var rDouble = aDouble / bDouble;
      $thiz.d = (rDouble / 4.294967296e9) | 0.0;
      return rDouble | 0.0;
    } else {
      $thiz.d = 0;
      return 0;
    }
  } else if (bhi === 0 && (blo & ((-1 + blo) | 0)) === 0) {
    var pow = (31 - Math.clz32(blo)) | 0;
    $thiz.d = (ahi >>> pow) | 0;
    return (alo >>> pow) | 0 | ((ahi << 1) << ((31 - pow) | 0));
  } else if (blo === 0 && (bhi & ((-1 + bhi) | 0)) === 0) {
    var pow$2 = (31 - Math.clz32(bhi)) | 0;
    $thiz.d = 0;
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
      $thiz.d = (rDouble / 4.294967296e9) | 0.0;
      return rDouble | 0.0;
    } else {
      $thiz.d = ahi;
      return alo;
    }
  } else if (bhi === 0 && (blo & ((-1 + blo) | 0)) === 0) {
    $thiz.d = 0;
    return alo & ((-1 + blo) | 0);
  } else if (blo === 0 && (bhi & ((-1 + bhi) | 0)) === 0) {
    $thiz.d = ahi & ((-1 + bhi) | 0);
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
      $thiz.d = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = remDouble % bDouble;
      $thiz.d = (rem_mod_bDouble / 4.294967296e9) | 0.0;
      return rem_mod_bDouble | 0.0;
    }
  } else if (askQuotient) {
    $thiz.d = quotHi;
    return quotLo;
  } else {
    $thiz.d = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.d = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {}
$h_RTLong$.prototype = $p;
$p.A = function (lo, hi) {
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
$p.M = function (value) {
  if (value < -9.223372036854776e18) {
    this.d = -2147483648;
    return 0;
  } else if (value >= 9.223372036854776e18) {
    this.d = 2147483647;
    return -1;
  } else {
    var rawLo = value | 0.0;
    var rawHi = (value / 4.294967296e9) | 0.0;
    this.d = value < 0.0 && rawLo !== 0 ? (-1 + rawHi) | 0 : rawHi;
    return rawLo;
  }
};
$p.z = function (alo, ahi, blo, bhi) {
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
$p.F = function (alo, ahi, blo, bhi) {
  if ((blo | bhi) === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if (ahi === alo >> 31) {
    if (bhi === blo >> 31) {
      if (alo === -2147483648 && blo === -1) {
        this.d = 0;
        return -2147483648;
      } else {
        var lo = (alo / $checkIntDivisor(blo)) | 0;
        this.d = lo >> 31;
        return lo;
      }
    } else if (alo === -2147483648 && blo === -2147483648 && bhi === 0) {
      this.d = -1;
      return -1;
    } else {
      this.d = 0;
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
      var hi = this.d;
      var lo$1 = -absRLo | 0;
      var hi$1 = ((-hi | 0) + ((absRLo | lo$1) >> 31)) | 0;
      this.d = hi$1;
      return lo$1;
    }
  }
};
$p.G = function (alo, ahi, blo, bhi) {
  if ((blo | bhi) === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if (ahi === 0) {
    if (bhi === 0) {
      this.d = 0;
      return ((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0;
    } else {
      this.d = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
};
$p.N = function (alo, ahi, blo, bhi) {
  if ((blo | bhi) === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if (ahi === alo >> 31) {
    if (bhi === blo >> 31) {
      var lo = alo % $checkIntDivisor(blo) | 0;
      this.d = lo >> 31;
      return lo;
    } else if (alo === -2147483648 && blo === -2147483648 && bhi === 0) {
      this.d = 0;
      return 0;
    } else {
      this.d = ahi;
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
      var hi = this.d;
      var lo$1 = -absRLo | 0;
      var hi$1 = ((-hi | 0) + ((absRLo | lo$1) >> 31)) | 0;
      this.d = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
};
$p.O = function (alo, ahi, blo, bhi) {
  if ((blo | bhi) === 0) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if (ahi === 0) {
    if (bhi === 0) {
      this.d = 0;
      return (alo >>> 0) % ($checkIntDivisor(blo) >>> 0) | 0;
    } else {
      this.d = ahi;
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
    K: 1,
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
function $c_sr_BoxesRunTime$() {}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {}
$h_sr_BoxesRunTime$.prototype = $p;
$p.e = function (x, y) {
  return (
    x === y ||
    ($is_jl_Number(x)
      ? this.J(x, y)
      : x instanceof $Char
        ? this.H(x, y)
        : x === null
          ? y === null
          : $dp_equals__O__Z(x, y))
  );
};
$p.J = function (xn, y) {
  if ($is_jl_Number(y)) {
    return this.I(xn, y);
  } else if (y instanceof $Char) {
    if (typeof xn === "number") {
      return +xn === y.c;
    } else if (xn instanceof $c_RTLong) {
      var t = $uJ(xn);
      var lo = t.a;
      var hi = t.b;
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
$p.I = function (xn, yn) {
  if (typeof xn === "number") {
    var x2 = +xn;
    if (typeof yn === "number") {
      return x2 === +yn;
    } else if (yn instanceof $c_RTLong) {
      var t = $uJ(yn);
      var lo = t.a;
      return x2 === 4.294967296e9 * t.b + (lo >>> 0.0);
    } else {
      return false && yn.j(x2);
    }
  } else if (xn instanceof $c_RTLong) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.a;
    var hi$1 = t$1.b;
    if (yn instanceof $c_RTLong) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.a;
      var hi$2 = t$2.b;
      return lo$1 === lo$2 && hi$1 === hi$2;
    } else if (typeof yn === "number") {
      var x3$3 = +yn;
      return 4.294967296e9 * hi$1 + (lo$1 >>> 0.0) === x3$3;
    } else {
      return false && yn.j(new $c_RTLong(lo$1, hi$1));
    }
  } else {
    return xn === null ? yn === null : $dp_equals__O__Z(xn, yn);
  }
};
$p.H = function (xc, y) {
  if (y instanceof $Char) {
    return xc.c === y.c;
  } else if ($is_jl_Number(y)) {
    if (typeof y === "number") {
      return +y === xc.c;
    } else if (y instanceof $c_RTLong) {
      var t = $uJ(y);
      var lo = t.a;
      var hi = t.b;
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
    O: 1,
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
function $c_s_util_CommandLineParser$() {}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {}
$h_s_util_CommandLineParser$.prototype = $p;
$p.Q = function (err) {
  var where =
    err.w() === 0
      ? ""
      : err.w() === 1
        ? " after first argument"
        : " after " + err.w() + " arguments";
  var x = "Illegal command line" + where + ": " + err.a2();
  $m_s_Console$()
    .g()
    .f(x + "\n");
};
var $d_s_util_CommandLineParser$ = new $TypeData().i(
  $c_s_util_CommandLineParser$,
  "scala.util.CommandLineParser$",
  {
    Q: 1,
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
  this.n = null;
  this.n = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {}
$h_s_util_DynamicVariable.prototype = $p;
$p.m = function () {
  return "DynamicVariable(" + this.n + ")";
};
var $d_s_util_DynamicVariable = new $TypeData().i(
  $c_s_util_DynamicVariable,
  "scala.util.DynamicVariable",
  {
    S: 1,
  },
);
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
    obj.$classData.B.n.d
  );
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__(
  $thiz,
  s,
  e,
  enableSuppression,
  writableStackTrace,
) {
  $thiz.q = s;
  if (writableStackTrace) {
    $thiz.K();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.q = null;
  }
  v() {
    return this.q;
  }
  K() {
    var reference = false ? this.T : this;
    if (Object.prototype.toString.call(reference) !== "[object Error]") {
      if (Error.captureStackTrace === void 0 || !!Object.isSealed(this)) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  m() {
    var className = $objectClassName(this);
    var message = this.v();
    return message === null ? className : className + ": " + message;
  }
  k() {
    return $c_O.prototype.k.call(this);
  }
  j(that) {
    return $c_O.prototype.j.call(this, that);
  }
  get message() {
    var m = this.v();
    return m === null ? "" : m;
  }
  get name() {
    return $objectClassName(this);
  }
  toString() {
    return this.m();
  }
}
/** @constructor */
function $c_s_Console$() {
  this.r = null;
  $n_s_Console$ = this;
  this.r = new $c_s_util_DynamicVariable($m_jl_System$Streams$().p);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {}
$h_s_Console$.prototype = $p;
$p.g = function () {
  return this.r.n;
};
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", {
  L: 1,
  M: 1,
});
var $n_s_Console$;
function $m_s_Console$() {
  if (!$n_s_Console$) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
class $c_jl_Exception extends $c_jl_Throwable {}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.N
  );
}
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
    w: 1,
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
    obj.$classData.B.n.j
  );
}
var $d_jl_Character = new $TypeData().i(
  0,
  "java.lang.Character",
  {
    j: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  (x) => x instanceof $Char,
);
class $c_jl_RuntimeException extends $c_jl_Exception {}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.R
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
    v: 1,
    E: 1,
    z: 1,
    I: 1,
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
    x: 1,
    d: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  (x) => $isByte(x),
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
    D: 1,
    h: 1,
    f: 1,
    i: 1,
    g: 1,
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
    F: 1,
    d: 1,
    a: 1,
    b: 1,
    c: 1,
  },
  (x) => $isShort(x),
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
    obj.$classData.B.n.l
  );
}
var $d_jl_Double = new $TypeData().i(
  0,
  "java.lang.Double",
  {
    l: 1,
    d: 1,
    a: 1,
    b: 1,
    c: 1,
    e: 1,
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
    A: 1,
    d: 1,
    a: 1,
    b: 1,
    c: 1,
    e: 1,
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
    B: 1,
    d: 1,
    a: 1,
    b: 1,
    c: 1,
    e: 1,
  },
  (x) => $isInt(x),
);
function $f_jl_Long__equals__O__Z($thiz, that) {
  return that instanceof $c_RTLong && $thiz.a === that.a && $thiz.b === that.b;
}
function $f_jl_Long__hashCode__I($thiz) {
  return $thiz.a ^ $thiz.b;
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().A($thiz.a, $thiz.b);
}
function $isArrayOf_jl_Long(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.m
  );
}
var $d_jl_Long = new $TypeData().i(
  0,
  "java.lang.Long",
  {
    m: 1,
    d: 1,
    a: 1,
    b: 1,
    c: 1,
    e: 1,
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
    G: 1,
    a: 1,
    b: 1,
    y: 1,
    c: 1,
    e: 1,
  },
  (x) => typeof x === "string",
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
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return !!(
    obj &&
    obj.$classData &&
    obj.$classData.D === depth &&
    obj.$classData.B.n.P
  );
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (typeof console !== "undefined") {
    if ($thiz.o && !!!!console.error) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.o = false;
  this.l = null;
  this.o = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(
    this,
    new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(),
    false,
    null,
  );
  this.l = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.f = function (s) {
  var rest = s;
  while (rest !== "") {
    var this$1 = rest;
    var nlPos = this$1.indexOf("\n") | 0;
    if (nlPos < 0) {
      this.l = "" + this.l + rest;
      rest = "";
    } else {
      var $x_1 = this.l;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(
        this,
        "" + $x_1 + this$2.substring(0, nlPos),
      );
      this.l = "";
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
    C: 1,
    t: 1,
    s: 1,
    h: 1,
    f: 1,
    i: 1,
    g: 1,
    u: 1,
  },
);
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
let $e_zeroCostStructViews = function () {
  return $m_Lbufferdata_ZeroCostValidation$().C();
};
export { $e_zeroCostStructViews as zeroCostStructViews };
let $e_zeroCostDirectNested = function () {
  return $m_Lbufferdata_ZeroCostValidation$().u();
};
export { $e_zeroCostDirectNested as zeroCostDirectNested };
let $e_zeroCostNamedTupleSet = function () {
  return $m_Lbufferdata_ZeroCostValidation$().y();
};
export { $e_zeroCostNamedTupleSet as zeroCostNamedTupleSet };
let $e_validateZeroCost = function () {
  return $m_Lbufferdata_ZeroCostValidation$().S();
};
export { $e_validateZeroCost as validateZeroCost };
let $e_zeroCostPrimitiveViews = function () {
  return $m_Lbufferdata_ZeroCostValidation$().B();
};
export { $e_zeroCostPrimitiveViews as zeroCostPrimitiveViews };
let $e_zeroCostDirect = function () {
  return $m_Lbufferdata_ZeroCostValidation$().t();
};
export { $e_zeroCostDirect as zeroCostDirect };
let $e_zeroCostNamedNested = function () {
  return $m_Lbufferdata_ZeroCostValidation$().x();
};
export { $e_zeroCostNamedNested as zeroCostNamedNested };
let $e_createParticleBuffer = function (arg) {
  return $m_Lexample_BufferDataDemo$().s(arg | 0);
};
export { $e_createParticleBuffer as createParticleBuffer };
$s_Lexample_app__main__AT__V(new ($d_T.r().C)([]));
