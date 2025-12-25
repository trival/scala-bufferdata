'use strict';
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c);
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)));
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1);
  }
  $throwClassCastException(arg0, arg1);
}
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))));
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException());
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException();
  }
  return arg0;
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf();
        } else {
          return $d_jl_Integer.getClassOf();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf();
      } else {
        return $d_jl_Double.getClassOf();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf();
    }
    case "undefined": {
      return $d_jl_Void.getClassOf();
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
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
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name;
      } else {
        return $throwNullPointerException();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
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
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
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
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.hashCode__I.call(instance);
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_StringIndexOutOfBoundsException(arg1));
  } else {
    return r;
  }
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
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null);
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4);
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4);
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)]);
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4);
    } else {
      $throwArrayStoreException(null);
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4);
  } else {
    $throwArrayStoreException(null);
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"));
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"));
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"));
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"));
}
/** @constructor */
function $c_O() {
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T((i >>> 0.0).toString(16)));
});
$c_O.prototype.toString = (function() {
  return this.toString__T();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null;
    }
  } else {
    this.u = arg;
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice());
});
function $ah_O() {
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false;
    }
  } else {
    this.u = arg;
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Uint16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int8Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0;
    }
  } else {
    this.u = arg;
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float64Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice());
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0);
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = ({});
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
  }
  return this;
});
$TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (kindOrCtor === 2);
  this.name = fullName;
  this.isInterface = (kindOrCtor === 1);
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this;
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException();
      }
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null;
      }
    } else {
      this.u = arg;
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i);
    }
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v);
    }
    this.u[i] = v;
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice());
  });
  ArrayClass.prototype.$classData = this;
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this);
  }
  return this._arrayOf;
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this);
  }
  return this._classOf;
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that));
});
$TypeData.prototype.cast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name);
  }
  return obj;
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null);
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null);
});
$TypeData.prototype.newArray = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.getArrayOf().constr)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Z", depth);
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "C", depth);
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "B", depth);
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "S", depth);
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "I", depth);
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "J", depth);
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "F", depth);
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "D", depth);
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = ({});
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_Lbufferdatav1_ZeroCostValidation$() {
}
$c_Lbufferdatav1_ZeroCostValidation$.prototype = new $h_O();
$c_Lbufferdatav1_ZeroCostValidation$.prototype.constructor = $c_Lbufferdatav1_ZeroCostValidation$;
/** @constructor */
function $h_Lbufferdatav1_ZeroCostValidation$() {
}
$h_Lbufferdatav1_ZeroCostValidation$.prototype = $c_Lbufferdatav1_ZeroCostValidation$.prototype;
$c_Lbufferdatav1_ZeroCostValidation$.prototype.directDataViewUsage__sjs_js_Object = (function() {
  var buffer = new ArrayBuffer(20);
  var view = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var baseOffset = Math.imul(5, i);
    view.setFloat32(baseOffset, Math.fround((2.0 * Math.fround(i))), true);
    view.setUint8(((4 + baseOffset) | 0), ((Math.imul(10, i) << 16) >> 16));
    i = ((1 + i) | 0);
  }
  var value = $uF(view.getFloat32(0, true));
  var value$1 = $uS(view.getUint8(4));
  var first = ({
    "f32": value,
    "u8": value$1
  });
  var value$2 = $uF(view.getFloat32(15, true));
  var value$3 = $uS(view.getUint8(19));
  var last = ({
    "f32": value$2,
    "u8": value$3
  });
  return ({
    "first": first,
    "last": last
  });
});
$c_Lbufferdatav1_ZeroCostValidation$.prototype.primitiveViewsUsage__sjs_js_Object = (function() {
  var buffer = new ArrayBuffer(20);
  var view = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var baseOffset = Math.imul(5, i);
    var offset$proxy2 = ((4 + baseOffset) | 0);
    var value$proxy1 = Math.fround((2.0 * Math.fround(i)));
    view.setFloat32(baseOffset, value$proxy1, true);
    var value$proxy2 = ((Math.imul(10, i) << 16) >> 16);
    view.setUint8(offset$proxy2, value$proxy2);
    i = ((1 + i) | 0);
  }
  var value = $uF(view.getFloat32(0, true));
  var value$1 = $uS(view.getUint8(4));
  var _2 = ({
    "f32": value,
    "u8": value$1
  });
  var value$2 = $uF(view.getFloat32(15, true));
  var value$3 = $uS(view.getUint8(19));
  var _2$1 = ({
    "f32": value$2,
    "u8": value$3
  });
  return ({
    "first": _2,
    "last": _2$1
  });
});
$c_Lbufferdatav1_ZeroCostValidation$.prototype.structViewsUsage__sjs_js_Object = (function() {
  var buffer = new ArrayBuffer(20);
  var _1 = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var index$proxy1 = i;
    var _2 = Math.imul(5, index$proxy1);
    var value$proxy3 = Math.fround((2.0 * Math.fround(i)));
    _1.setFloat32(_2, value$proxy3, true);
    var index$proxy2 = i;
    var _2$1 = Math.imul(5, index$proxy2);
    var offset$proxy6 = ((4 + _2$1) | 0);
    var value$proxy4 = ((Math.imul(10, i) << 16) >> 16);
    _1.setUint8(offset$proxy6, value$proxy4);
    i = ((1 + i) | 0);
  }
  var value = $uF(_1.getFloat32(0, true));
  var value$1 = $uS(_1.getUint8(4));
  var _2$2 = ({
    "f32": value,
    "u8": value$1
  });
  var value$2 = $uF(_1.getFloat32(15, true));
  var value$3 = $uS(_1.getUint8(19));
  var _2$3 = ({
    "f32": value$2,
    "u8": value$3
  });
  return ({
    "first": _2$2,
    "last": _2$3
  });
});
$c_Lbufferdatav1_ZeroCostValidation$.prototype.namedNestedUsage__sjs_js_Object = (function() {
  var buffer = new ArrayBuffer(36);
  var _1 = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var index$proxy3 = i;
    var _2 = Math.imul(9, index$proxy3);
    var value$proxy5 = Math.fround((10.0 * Math.fround(i)));
    _1.setFloat32(_2, value$proxy5, true);
    var index$proxy4 = i;
    var _2$1 = Math.imul(9, index$proxy4);
    var offset$proxy14 = ((4 + _2$1) | 0);
    var value$proxy6 = Math.fround((20.0 * Math.fround(i)));
    _1.setFloat32(offset$proxy14, value$proxy6, true);
    var index$proxy5 = i;
    var _2$2 = Math.imul(9, index$proxy5);
    var offset$proxy15 = ((8 + _2$2) | 0);
    var value$proxy7 = ((Math.imul(25, i) << 16) >> 16);
    _1.setUint8(offset$proxy15, value$proxy7);
    i = ((1 + i) | 0);
  }
  var value = $uF(_1.getFloat32(0, true));
  var value$1 = $uF(_1.getFloat32(4, true));
  var value$2 = $uS(_1.getUint8(8));
  var _2$3 = ({
    "x": value,
    "y": value$1,
    "life": value$2
  });
  var value$3 = $uF(_1.getFloat32(27, true));
  var value$4 = $uF(_1.getFloat32(31, true));
  var value$5 = $uS(_1.getUint8(35));
  var _2$4 = ({
    "x": value$3,
    "y": value$4,
    "life": value$5
  });
  return ({
    "first": _2$3,
    "last": _2$4
  });
});
$c_Lbufferdatav1_ZeroCostValidation$.prototype.directNestedUsage__sjs_js_Object = (function() {
  var buffer = new ArrayBuffer(36);
  var view = new DataView(buffer);
  var i = 0;
  while ((i < 4)) {
    var baseOffset = Math.imul(9, i);
    view.setFloat32(baseOffset, Math.fround((10.0 * Math.fround(i))), true);
    view.setFloat32(((4 + baseOffset) | 0), Math.fround((20.0 * Math.fround(i))), true);
    view.setUint8(((8 + baseOffset) | 0), ((Math.imul(25, i) << 16) >> 16));
    i = ((1 + i) | 0);
  }
  var value = $uF(view.getFloat32(0, true));
  var value$1 = $uF(view.getFloat32(4, true));
  var value$2 = $uS(view.getUint8(8));
  var _2 = ({
    "x": value,
    "y": value$1,
    "life": value$2
  });
  var value$3 = $uF(view.getFloat32(27, true));
  var value$4 = $uF(view.getFloat32(31, true));
  var value$5 = $uS(view.getUint8(35));
  var _2$1 = ({
    "x": value$3,
    "y": value$4,
    "life": value$5
  });
  return ({
    "first": _2,
    "last": _2$1
  });
});
$c_Lbufferdatav1_ZeroCostValidation$.prototype.validate__sjs_js_Object = (function() {
  var direct = this.directDataViewUsage__sjs_js_Object();
  var primitive = this.primitiveViewsUsage__sjs_js_Object();
  var struct = this.structViewsUsage__sjs_js_Object();
  var directNested = this.directNestedUsage__sjs_js_Object();
  var namedNested = this.namedNestedUsage__sjs_js_Object();
  var x = direct.first.f32;
  var y = primitive.first.f32;
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(x, y)) {
    var x$1 = direct.first.u8;
    var y$1 = primitive.first.u8;
    var $x_6 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y$1);
  } else {
    var $x_6 = false;
  }
  if ($x_6) {
    var x$2 = direct.last.f32;
    var y$2 = primitive.last.f32;
    var $x_5 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$2, y$2);
  } else {
    var $x_5 = false;
  }
  if ($x_5) {
    var x$3 = direct.last.u8;
    var y$3 = primitive.last.u8;
    var $x_4 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$3, y$3);
  } else {
    var $x_4 = false;
  }
  if ($x_4) {
    var x$4 = primitive.first.f32;
    var y$4 = struct.first.f32;
    var $x_3 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$4, y$4);
  } else {
    var $x_3 = false;
  }
  if ($x_3) {
    var x$5 = primitive.first.u8;
    var y$5 = struct.first.u8;
    var $x_2 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$5, y$5);
  } else {
    var $x_2 = false;
  }
  if ($x_2) {
    var x$6 = primitive.last.f32;
    var y$6 = struct.last.f32;
    var $x_1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$6, y$6);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var x$7 = primitive.last.u8;
    var y$7 = struct.last.u8;
    var value = $m_sr_BoxesRunTime$().equals__O__O__Z(x$7, y$7);
  } else {
    var value = false;
  }
  var x$8 = directNested.first.x;
  var y$8 = namedNested.first.x;
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(x$8, y$8)) {
    var x$9 = directNested.first.y;
    var y$9 = namedNested.first.y;
    var $x_10 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$9, y$9);
  } else {
    var $x_10 = false;
  }
  if ($x_10) {
    var x$10 = directNested.first.life;
    var y$10 = namedNested.first.life;
    var $x_9 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$10, y$10);
  } else {
    var $x_9 = false;
  }
  if ($x_9) {
    var x$11 = directNested.last.x;
    var y$11 = namedNested.last.x;
    var $x_8 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$11, y$11);
  } else {
    var $x_8 = false;
  }
  if ($x_8) {
    var x$12 = directNested.last.y;
    var y$12 = namedNested.last.y;
    var $x_7 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$12, y$12);
  } else {
    var $x_7 = false;
  }
  if ($x_7) {
    var x$13 = directNested.last.life;
    var y$13 = namedNested.last.life;
    var value$1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$13, y$13);
  } else {
    var value$1 = false;
  }
  return ({
    "direct": direct,
    "primitive": primitive,
    "struct": struct,
    "directNested": directNested,
    "namedNested": namedNested,
    "allEqual": value,
    "nestedEqual": value$1
  });
});
var $d_Lbufferdatav1_ZeroCostValidation$ = new $TypeData().initClass($c_Lbufferdatav1_ZeroCostValidation$, "bufferdatav1.ZeroCostValidation$", ({
  Lbufferdatav1_ZeroCostValidation$: 1
}));
var $n_Lbufferdatav1_ZeroCostValidation$;
function $m_Lbufferdatav1_ZeroCostValidation$() {
  if ((!$n_Lbufferdatav1_ZeroCostValidation$)) {
    $n_Lbufferdatav1_ZeroCostValidation$ = new $c_Lbufferdatav1_ZeroCostValidation$();
  }
  return $n_Lbufferdatav1_ZeroCostValidation$;
}
function $is_Lbufferdatav2_FieldDescriptor(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lbufferdatav2_FieldDescriptor)));
}
function $as_Lbufferdatav2_FieldDescriptor(obj) {
  return (($is_Lbufferdatav2_FieldDescriptor(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "bufferdatav2.FieldDescriptor"));
}
function $isArrayOf_Lbufferdatav2_FieldDescriptor(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbufferdatav2_FieldDescriptor)));
}
function $asArrayOf_Lbufferdatav2_FieldDescriptor(obj, depth) {
  return (($isArrayOf_Lbufferdatav2_FieldDescriptor(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbufferdatav2.FieldDescriptor;", depth));
}
var $d_Lbufferdatav2_FieldDescriptor = new $TypeData().initClass(1, "bufferdatav2.FieldDescriptor", ({
  Lbufferdatav2_FieldDescriptor: 1
}));
/** @constructor */
function $c_Lbufferdatav2_LayoutMetadata(stride, fields) {
  this.Lbufferdatav2_LayoutMetadata__f_stride = 0;
  this.Lbufferdatav2_LayoutMetadata__f_fields = null;
  this.Lbufferdatav2_LayoutMetadata__f_stride = stride;
  this.Lbufferdatav2_LayoutMetadata__f_fields = fields;
}
$c_Lbufferdatav2_LayoutMetadata.prototype = new $h_O();
$c_Lbufferdatav2_LayoutMetadata.prototype.constructor = $c_Lbufferdatav2_LayoutMetadata;
/** @constructor */
function $h_Lbufferdatav2_LayoutMetadata() {
}
$h_Lbufferdatav2_LayoutMetadata.prototype = $c_Lbufferdatav2_LayoutMetadata.prototype;
function $as_Lbufferdatav2_LayoutMetadata(obj) {
  return (((obj instanceof $c_Lbufferdatav2_LayoutMetadata) || (obj === null)) ? obj : $throwClassCastException(obj, "bufferdatav2.LayoutMetadata"));
}
function $isArrayOf_Lbufferdatav2_LayoutMetadata(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbufferdatav2_LayoutMetadata)));
}
function $asArrayOf_Lbufferdatav2_LayoutMetadata(obj, depth) {
  return (($isArrayOf_Lbufferdatav2_LayoutMetadata(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbufferdatav2.LayoutMetadata;", depth));
}
var $d_Lbufferdatav2_LayoutMetadata = new $TypeData().initClass($c_Lbufferdatav2_LayoutMetadata, "bufferdatav2.LayoutMetadata", ({
  Lbufferdatav2_LayoutMetadata: 1
}));
/** @constructor */
function $c_Lbufferdatav2_Schema(metadata) {
  this.Lbufferdatav2_Schema__f_metadata = null;
  this.Lbufferdatav2_Schema__f_metadata = metadata;
}
$c_Lbufferdatav2_Schema.prototype = new $h_O();
$c_Lbufferdatav2_Schema.prototype.constructor = $c_Lbufferdatav2_Schema;
/** @constructor */
function $h_Lbufferdatav2_Schema() {
}
$h_Lbufferdatav2_Schema.prototype = $c_Lbufferdatav2_Schema.prototype;
var $d_Lbufferdatav2_Schema = new $TypeData().initClass($c_Lbufferdatav2_Schema, "bufferdatav2.Schema", ({
  Lbufferdatav2_Schema: 1
}));
/** @constructor */
function $c_Lbufferdatav2_StructArray(metadata, buffer, view) {
  this.Lbufferdatav2_StructArray__f_metadata = null;
  this.Lbufferdatav2_StructArray__f_buffer = null;
  this.Lbufferdatav2_StructArray__f_view = null;
  this.Lbufferdatav2_StructArray__f_metadata = metadata;
  this.Lbufferdatav2_StructArray__f_buffer = buffer;
  this.Lbufferdatav2_StructArray__f_view = view;
}
$c_Lbufferdatav2_StructArray.prototype = new $h_O();
$c_Lbufferdatav2_StructArray.prototype.constructor = $c_Lbufferdatav2_StructArray;
/** @constructor */
function $h_Lbufferdatav2_StructArray() {
}
$h_Lbufferdatav2_StructArray.prototype = $c_Lbufferdatav2_StructArray.prototype;
$c_Lbufferdatav2_StructArray.prototype.length__I = (function() {
  return (($n(this.Lbufferdatav2_StructArray__f_metadata).Lbufferdatav2_LayoutMetadata__f_stride === 0) ? 0 : (($uI(this.Lbufferdatav2_StructArray__f_buffer.byteLength) / $checkIntDivisor($n(this.Lbufferdatav2_StructArray__f_metadata).Lbufferdatav2_LayoutMetadata__f_stride)) | 0));
});
$c_Lbufferdatav2_StructArray.prototype.apply__I__T3 = (function(index) {
  if (((index < 0) || (index >= this.length__I()))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ((("Struct index " + index) + " outside 0 until ") + this.length__I()));
  }
  var offset$proxy1 = Math.imul(index, $n(this.Lbufferdatav2_StructArray__f_metadata).Lbufferdatav2_LayoutMetadata__f_stride);
  var _1 = this.Lbufferdatav2_StructArray__f_metadata;
  var _2 = this.Lbufferdatav2_StructArray__f_view;
  return new $c_T3(_1, _2, offset$proxy1);
});
var $d_Lbufferdatav2_StructArray = new $TypeData().initClass($c_Lbufferdatav2_StructArray, "bufferdatav2.StructArray", ({
  Lbufferdatav2_StructArray: 1
}));
/** @constructor */
function $c_Lbufferdatav2_StructArray$() {
}
$c_Lbufferdatav2_StructArray$.prototype = new $h_O();
$c_Lbufferdatav2_StructArray$.prototype.constructor = $c_Lbufferdatav2_StructArray$;
/** @constructor */
function $h_Lbufferdatav2_StructArray$() {
}
$h_Lbufferdatav2_StructArray$.prototype = $c_Lbufferdatav2_StructArray$.prototype;
$c_Lbufferdatav2_StructArray$.prototype.apply__Lbufferdatav2_LayoutMetadata__I__Lbufferdatav2_StructArray = (function(metadata, count) {
  var requirement = (count >= 0);
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: count must be non-negative");
  }
  var totalBytes = Math.imul($n(metadata).Lbufferdatav2_LayoutMetadata__f_stride, count);
  var buffer = new ArrayBuffer(totalBytes);
  var view = new DataView(buffer);
  return new $c_Lbufferdatav2_StructArray(metadata, buffer, view);
});
var $d_Lbufferdatav2_StructArray$ = new $TypeData().initClass($c_Lbufferdatav2_StructArray$, "bufferdatav2.StructArray$", ({
  Lbufferdatav2_StructArray$: 1
}));
var $n_Lbufferdatav2_StructArray$;
function $m_Lbufferdatav2_StructArray$() {
  if ((!$n_Lbufferdatav2_StructArray$)) {
    $n_Lbufferdatav2_StructArray$ = new $c_Lbufferdatav2_StructArray$();
  }
  return $n_Lbufferdatav2_StructArray$;
}
/** @constructor */
function $c_Lexample_BufferDataDemo$() {
}
$c_Lexample_BufferDataDemo$.prototype = new $h_O();
$c_Lexample_BufferDataDemo$.prototype.constructor = $c_Lexample_BufferDataDemo$;
/** @constructor */
function $h_Lexample_BufferDataDemo$() {
}
$h_Lexample_BufferDataDemo$.prototype = $c_Lexample_BufferDataDemo$.prototype;
$c_Lexample_BufferDataDemo$.prototype.runDemo__V = (function() {
  var this$2 = $m_s_Console$();
  var this$3 = $n(this$2.out__Ljava_io_PrintStream());
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Creating array of 10 structs (F32, U8)\n");
  var buffer = new ArrayBuffer(50);
  var _1 = new DataView(buffer);
  var this$6 = $m_s_Console$();
  var this$7 = $n(this$6.out__Ljava_io_PrintStream());
  this$7.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Array length: 10\n");
  var this$9 = $m_s_Console$();
  var this$10 = $n(this$9.out__Ljava_io_PrintStream());
  this$10.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Struct size: 5 bytes\n");
  var i = 0;
  while (true) {
    var x0 = i;
    var _2 = Math.imul(5, x0);
    var value$proxy1 = Math.fround((1.5 * Math.fround(x0)));
    _1.setFloat32(_2, value$proxy1, true);
    var _2$1 = Math.imul(5, x0);
    var offset$proxy2 = ((4 + _2$1) | 0);
    var value$proxy2 = ((Math.imul(10, x0) << 16) >> 16);
    _1.setUint8(offset$proxy2, value$proxy2);
    if ((i === 9)) {
      break;
    }
    i = ((1 + i) | 0);
  }
  var this$20 = $m_s_Console$();
  var this$21 = $n(this$20.out__Ljava_io_PrintStream());
  this$21.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\nReading back values:\n");
  var i$1 = 0;
  while (true) {
    var x0$1 = i$1;
    var _2$2 = Math.imul(5, x0$1);
    var f32Val = $uF(_1.getFloat32(_2$2, true));
    var _2$3 = Math.imul(5, x0$1);
    var offset$proxy4 = ((4 + _2$3) | 0);
    var u8Val = $uS(_1.getUint8(offset$proxy4));
    var x = ((((("  particles(" + x0$1) + "): F32=") + f32Val) + ", U8=") + u8Val);
    var this$31 = $m_s_Console$();
    var this$32 = $n(this$31.out__Ljava_io_PrintStream());
    this$32.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
    if ((i$1 === 9)) {
      break;
    }
    i$1 = ((1 + i$1) | 0);
  }
});
$c_Lexample_BufferDataDemo$.prototype.createParticleBuffer__I__sjs_js_Object = (function(count) {
  var buffer = new ArrayBuffer(Math.imul(5, count));
  var _1 = new DataView(buffer);
  var isEmpty = (count <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + count) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var _2 = Math.imul(5, x0);
      var value$proxy3 = Math.fround(x0);
      _1.setFloat32(_2, value$proxy3, true);
      var _2$1 = Math.imul(5, x0);
      var offset$proxy6 = ((4 + _2$1) | 0);
      var value$proxy4 = ((((x0 % 256) | 0) << 16) >> 16);
      _1.setUint8(offset$proxy6, value$proxy4);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var value = Math.imul(5, count);
  var value$1 = $uF(_1.getFloat32(0, true));
  var value$2 = $uS(_1.getUint8(4));
  var _2$2 = ({
    "f32": value$1,
    "u8": value$2
  });
  var index$proxy1 = (((-1) + count) | 0);
  var _2$3 = Math.imul(5, index$proxy1);
  var value$3 = $uF(_1.getFloat32(_2$3, true));
  var index$proxy2 = (((-1) + count) | 0);
  var _2$4 = Math.imul(5, index$proxy2);
  var offset$proxy10 = ((4 + _2$4) | 0);
  var value$4 = $uS(_1.getUint8(offset$proxy10));
  var _2$5 = ({
    "f32": value$3,
    "u8": value$4
  });
  return ({
    "count": count,
    "structSize": 5,
    "totalBytes": value,
    "firstElement": _2$2,
    "lastElement": _2$5
  });
});
var $d_Lexample_BufferDataDemo$ = new $TypeData().initClass($c_Lexample_BufferDataDemo$, "example.BufferDataDemo$", ({
  Lexample_BufferDataDemo$: 1
}));
var $n_Lexample_BufferDataDemo$;
function $m_Lexample_BufferDataDemo$() {
  if ((!$n_Lexample_BufferDataDemo$)) {
    $n_Lexample_BufferDataDemo$ = new $c_Lexample_BufferDataDemo$();
  }
  return $n_Lexample_BufferDataDemo$;
}
/** @constructor */
function $c_Lexample_BufferDataV2Demo$() {
  this.Lexample_BufferDataV2Demo$__f_schema = null;
  $n_Lexample_BufferDataV2Demo$ = this;
  this.Lexample_BufferDataV2Demo$__f_schema = $m_Lexample_bufferdatav2_BufferDataV2$().Lexample_bufferdatav2_BufferDataV2$__f_particleStruct;
}
$c_Lexample_BufferDataV2Demo$.prototype = new $h_O();
$c_Lexample_BufferDataV2Demo$.prototype.constructor = $c_Lexample_BufferDataV2Demo$;
/** @constructor */
function $h_Lexample_BufferDataV2Demo$() {
}
$h_Lexample_BufferDataV2Demo$.prototype = $c_Lexample_BufferDataV2Demo$.prototype;
$c_Lexample_BufferDataV2Demo$.prototype.runDemo__V = (function() {
  var array = $m_Lexample_bufferdatav2_BufferDataV2$().allocateParticles__I__Lbufferdatav2_StructArray(10);
  $m_Lexample_bufferdatav2_BufferDataV2$().populateParticles__Lbufferdatav2_StructArray__V(array);
  var this$1 = $n(this.Lexample_BufferDataV2Demo$__f_schema);
  var x = (("V2 schema stride: " + $n(this$1.Lbufferdatav2_Schema__f_metadata).Lbufferdatav2_LayoutMetadata__f_stride) + " bytes");
  var this$3 = $m_s_Console$();
  var this$4 = $n(this$3.out__Ljava_io_PrintStream());
  this$4.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
  var this$6 = $m_s_Console$();
  var this$7 = $n(this$6.out__Ljava_io_PrintStream());
  this$7.java$lang$JSConsoleBasedPrintStream$$printString__T__V("First three elements:\n");
  var y = $n(array).length__I();
  var end = ((y > 3) ? 3 : y);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var element = $n(array).apply__I__T3(x0);
      var meta = $as_Lbufferdatav2_LayoutMetadata($n(element).T3__f__1);
      var descriptor$proxy1 = $n($n(meta).Lbufferdatav2_LayoutMetadata__f_fields).get(0);
      var view$proxy1 = $n(element).T3__f__2;
      var baseOffset$proxy1 = $uI($n(element).T3__f__3);
      matchResult1$1: {
        var $x_1;
        if ((descriptor$proxy1 instanceof $c_Lbufferdatav2_PrimitiveField)) {
          var x6 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy1);
          var this$17 = $n(x6);
          var x8 = this$17.Lbufferdatav2_PrimitiveField__f_kind;
          var this$18 = $n(x6);
          var x9 = this$18.Lbufferdatav2_PrimitiveField__f_offset;
          var $x_1 = $n(x8).read__sjs_js_typedarray_DataView__I__O(view$proxy1, ((baseOffset$proxy1 + x9) | 0));
          break matchResult1$1;
        }
        if (false) {
          var x2 = $as_Lbufferdatav2_NestedField(descriptor$proxy1);
          var x4 = $n(x2)._1__Lbufferdatav2_LayoutMetadata();
          var x5 = $n(x2)._2__I();
          var offset$proxy11 = ((baseOffset$proxy1 + x5) | 0);
          var $x_1 = new $c_T3(x4, view$proxy1, offset$proxy11);
          break matchResult1$1;
        }
        throw new $c_s_MatchError(descriptor$proxy1);
      }
      var f32Value = $uF($x_1);
      var meta$2 = $as_Lbufferdatav2_LayoutMetadata($n(element).T3__f__1);
      var descriptor$proxy2 = $n($n(meta$2).Lbufferdatav2_LayoutMetadata__f_fields).get(1);
      var view$proxy3 = $n(element).T3__f__2;
      var baseOffset$proxy2 = $uI($n(element).T3__f__3);
      matchResult2$1: {
        var $x_2;
        if ((descriptor$proxy2 instanceof $c_Lbufferdatav2_PrimitiveField)) {
          var x15 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy2);
          var this$25 = $n(x15);
          var x17 = this$25.Lbufferdatav2_PrimitiveField__f_kind;
          var this$26 = $n(x15);
          var x18 = this$26.Lbufferdatav2_PrimitiveField__f_offset;
          var $x_2 = $n(x17).read__sjs_js_typedarray_DataView__I__O(view$proxy3, ((baseOffset$proxy2 + x18) | 0));
          break matchResult2$1;
        }
        if (false) {
          var x11 = $as_Lbufferdatav2_NestedField(descriptor$proxy2);
          var x13 = $n(x11)._1__Lbufferdatav2_LayoutMetadata();
          var x14 = $n(x11)._2__I();
          var offset$proxy12 = ((baseOffset$proxy2 + x14) | 0);
          var $x_2 = new $c_T3(x13, view$proxy3, offset$proxy12);
          break matchResult2$1;
        }
        throw new $c_s_MatchError(descriptor$proxy2);
      }
      var u8Value = $uI($x_2);
      var x$1 = ((((("  [" + x0) + "] f32=") + f32Value) + " u8=") + u8Value);
      var this$31 = $m_s_Console$();
      var this$32 = $n(this$31.out__Ljava_io_PrintStream());
      this$32.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x$1 + "\n"));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
});
$c_Lexample_BufferDataV2Demo$.prototype.createBufferDataV2Particles__I__sjs_js_Object = (function(count) {
  var array = $m_Lexample_bufferdatav2_BufferDataV2$().allocateParticles__I__Lbufferdatav2_StructArray(count);
  $m_Lexample_bufferdatav2_BufferDataV2$().populateParticles__Lbufferdatav2_StructArray__V(array);
  if (($n(array).length__I() === 0)) {
    var this$3 = $n(this.Lexample_BufferDataV2Demo$__f_schema);
    var value = $n(this$3.Lbufferdatav2_Schema__f_metadata).Lbufferdatav2_LayoutMetadata__f_stride;
    return ({
      "count": 0,
      "stride": value
    });
  } else {
    var value$1 = $n(array).length__I();
    var this$12 = $n(this.Lexample_BufferDataV2Demo$__f_schema);
    var value$2 = $n(this$12.Lbufferdatav2_Schema__f_metadata).Lbufferdatav2_LayoutMetadata__f_stride;
    var ref$proxy25 = $n(array).apply__I__T3(0);
    var meta = $as_Lbufferdatav2_LayoutMetadata($n(ref$proxy25).T3__f__1);
    var descriptor$proxy3 = $n($n(meta).Lbufferdatav2_LayoutMetadata__f_fields).get(0);
    var view$proxy5 = $n(ref$proxy25).T3__f__2;
    var baseOffset$proxy3 = $uI($n(ref$proxy25).T3__f__3);
    matchResult3$1: {
      var $x_1;
      if ((descriptor$proxy3 instanceof $c_Lbufferdatav2_PrimitiveField)) {
        var x24 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy3);
        var this$18 = $n(x24);
        var x26 = this$18.Lbufferdatav2_PrimitiveField__f_kind;
        var this$19 = $n(x24);
        var x27 = this$19.Lbufferdatav2_PrimitiveField__f_offset;
        var $x_1 = $n(x26).read__sjs_js_typedarray_DataView__I__O(view$proxy5, ((baseOffset$proxy3 + x27) | 0));
        break matchResult3$1;
      }
      if (false) {
        var x20 = $as_Lbufferdatav2_NestedField(descriptor$proxy3);
        var x22 = $n(x20)._1__Lbufferdatav2_LayoutMetadata();
        var x23 = $n(x20)._2__I();
        var offset$proxy13 = ((baseOffset$proxy3 + x23) | 0);
        var $x_1 = new $c_T3(x22, view$proxy5, offset$proxy13);
        break matchResult3$1;
      }
      throw new $c_s_MatchError(descriptor$proxy3);
    }
    var value$3 = $uF($x_1);
    var ref$proxy37 = $n(array).apply__I__T3(0);
    var meta$2 = $as_Lbufferdatav2_LayoutMetadata($n(ref$proxy37).T3__f__1);
    var descriptor$proxy4 = $n($n(meta$2).Lbufferdatav2_LayoutMetadata__f_fields).get(1);
    var view$proxy7 = $n(ref$proxy37).T3__f__2;
    var baseOffset$proxy4 = $uI($n(ref$proxy37).T3__f__3);
    matchResult4$1: {
      var $x_2;
      if ((descriptor$proxy4 instanceof $c_Lbufferdatav2_PrimitiveField)) {
        var x33 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy4);
        var this$28 = $n(x33);
        var x35 = this$28.Lbufferdatav2_PrimitiveField__f_kind;
        var this$29 = $n(x33);
        var x36 = this$29.Lbufferdatav2_PrimitiveField__f_offset;
        var $x_2 = $n(x35).read__sjs_js_typedarray_DataView__I__O(view$proxy7, ((baseOffset$proxy4 + x36) | 0));
        break matchResult4$1;
      }
      if (false) {
        var x29 = $as_Lbufferdatav2_NestedField(descriptor$proxy4);
        var x31 = $n(x29)._1__Lbufferdatav2_LayoutMetadata();
        var x32 = $n(x29)._2__I();
        var offset$proxy14 = ((baseOffset$proxy4 + x32) | 0);
        var $x_2 = new $c_T3(x31, view$proxy7, offset$proxy14);
        break matchResult4$1;
      }
      throw new $c_s_MatchError(descriptor$proxy4);
    }
    var value$4 = $uI($x_2);
    var _2 = ({
      "f32": value$3,
      "u8": value$4
    });
    var ref$proxy49 = $n(array).apply__I__T3((((-1) + $n(array).length__I()) | 0));
    var meta$3 = $as_Lbufferdatav2_LayoutMetadata($n(ref$proxy49).T3__f__1);
    var descriptor$proxy5 = $n($n(meta$3).Lbufferdatav2_LayoutMetadata__f_fields).get(0);
    var view$proxy9 = $n(ref$proxy49).T3__f__2;
    var baseOffset$proxy5 = $uI($n(ref$proxy49).T3__f__3);
    matchResult5$1: {
      var $x_3;
      if ((descriptor$proxy5 instanceof $c_Lbufferdatav2_PrimitiveField)) {
        var x42 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy5);
        var this$43 = $n(x42);
        var x44 = this$43.Lbufferdatav2_PrimitiveField__f_kind;
        var this$44 = $n(x42);
        var x45 = this$44.Lbufferdatav2_PrimitiveField__f_offset;
        var $x_3 = $n(x44).read__sjs_js_typedarray_DataView__I__O(view$proxy9, ((baseOffset$proxy5 + x45) | 0));
        break matchResult5$1;
      }
      if (false) {
        var x38 = $as_Lbufferdatav2_NestedField(descriptor$proxy5);
        var x40 = $n(x38)._1__Lbufferdatav2_LayoutMetadata();
        var x41 = $n(x38)._2__I();
        var offset$proxy15 = ((baseOffset$proxy5 + x41) | 0);
        var $x_3 = new $c_T3(x40, view$proxy9, offset$proxy15);
        break matchResult5$1;
      }
      throw new $c_s_MatchError(descriptor$proxy5);
    }
    var value$5 = $uF($x_3);
    var ref$proxy61 = $n(array).apply__I__T3((((-1) + $n(array).length__I()) | 0));
    var meta$4 = $as_Lbufferdatav2_LayoutMetadata($n(ref$proxy61).T3__f__1);
    var descriptor$proxy6 = $n($n(meta$4).Lbufferdatav2_LayoutMetadata__f_fields).get(1);
    var view$proxy11 = $n(ref$proxy61).T3__f__2;
    var baseOffset$proxy6 = $uI($n(ref$proxy61).T3__f__3);
    matchResult6$1: {
      var $x_4;
      if ((descriptor$proxy6 instanceof $c_Lbufferdatav2_PrimitiveField)) {
        var x51 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy6);
        var this$53 = $n(x51);
        var x53 = this$53.Lbufferdatav2_PrimitiveField__f_kind;
        var this$54 = $n(x51);
        var x54 = this$54.Lbufferdatav2_PrimitiveField__f_offset;
        var $x_4 = $n(x53).read__sjs_js_typedarray_DataView__I__O(view$proxy11, ((baseOffset$proxy6 + x54) | 0));
        break matchResult6$1;
      }
      if (false) {
        var x47 = $as_Lbufferdatav2_NestedField(descriptor$proxy6);
        var x49 = $n(x47)._1__Lbufferdatav2_LayoutMetadata();
        var x50 = $n(x47)._2__I();
        var offset$proxy16 = ((baseOffset$proxy6 + x50) | 0);
        var $x_4 = new $c_T3(x49, view$proxy11, offset$proxy16);
        break matchResult6$1;
      }
      throw new $c_s_MatchError(descriptor$proxy6);
    }
    var value$6 = $uI($x_4);
    var _2$1 = ({
      "f32": value$5,
      "u8": value$6
    });
    return ({
      "count": value$1,
      "stride": value$2,
      "first": _2,
      "last": _2$1
    });
  }
});
var $d_Lexample_BufferDataV2Demo$ = new $TypeData().initClass($c_Lexample_BufferDataV2Demo$, "example.BufferDataV2Demo$", ({
  Lexample_BufferDataV2Demo$: 1
}));
var $n_Lexample_BufferDataV2Demo$;
function $m_Lexample_BufferDataV2Demo$() {
  if ((!$n_Lexample_BufferDataV2Demo$)) {
    $n_Lexample_BufferDataV2Demo$ = new $c_Lexample_BufferDataV2Demo$();
  }
  return $n_Lexample_BufferDataV2Demo$;
}
/** @constructor */
function $c_Lexample_Main$package$() {
}
$c_Lexample_Main$package$.prototype = new $h_O();
$c_Lexample_Main$package$.prototype.constructor = $c_Lexample_Main$package$;
/** @constructor */
function $h_Lexample_Main$package$() {
}
$h_Lexample_Main$package$.prototype = $c_Lexample_Main$package$.prototype;
$c_Lexample_Main$package$.prototype.app__V = (function() {
  var this$2 = $m_s_Console$();
  var this$3 = $n(this$2.out__Ljava_io_PrintStream());
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Hello from Scala.js!\n");
  var this$5 = $m_s_Console$();
  var this$6 = $n(this$5.out__Ljava_io_PrintStream());
  this$6.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Running on: Scala.js on Node.js\n");
  var x = ("" + $m_Lexample_Utils$().greet__T__T("Developer"));
  var this$8 = $m_s_Console$();
  var this$9 = $n(this$8.out__Ljava_io_PrintStream());
  this$9.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
  var x$1 = ("Current timestamp: " + $m_Lexample_Utils$().timestamp__D());
  var this$11 = $m_s_Console$();
  var this$12 = $n(this$11.out__Ljava_io_PrintStream());
  this$12.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x$1 + "\n"));
  var this$14 = $m_s_Console$();
  var this$15 = $n(this$14.out__Ljava_io_PrintStream());
  this$15.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\n--- BufferData v1 Demo ---\n");
  $m_Lexample_BufferDataDemo$().runDemo__V();
  var this$17 = $m_s_Console$();
  var this$18 = $n(this$17.out__Ljava_io_PrintStream());
  this$18.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\n--- BufferData v1 createParticles ---\n");
  var jsData = $m_Lexample_BufferDataDemo$().createParticleBuffer__I__sjs_js_Object(5);
  var this$20 = $m_s_Console$();
  var this$21 = $n(this$20.out__Ljava_io_PrintStream());
  this$21.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Created particle buffer (v1):\n");
  var x$2 = $as_T(JSON.stringify(jsData, (void 0), 2));
  var this$23 = $m_s_Console$();
  var this$24 = $n(this$23.out__Ljava_io_PrintStream());
  this$24.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x$2 + "\n"));
  var this$26 = $m_s_Console$();
  var this$27 = $n(this$26.out__Ljava_io_PrintStream());
  this$27.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\n--- BufferData v2 Demo ---\n");
  $m_Lexample_BufferDataV2Demo$().runDemo__V();
});
var $d_Lexample_Main$package$ = new $TypeData().initClass($c_Lexample_Main$package$, "example.Main$package$", ({
  Lexample_Main$package$: 1
}));
var $n_Lexample_Main$package$;
function $m_Lexample_Main$package$() {
  if ((!$n_Lexample_Main$package$)) {
    $n_Lexample_Main$package$ = new $c_Lexample_Main$package$();
  }
  return $n_Lexample_Main$package$;
}
/** @constructor */
function $c_Lexample_Utils$() {
}
$c_Lexample_Utils$.prototype = new $h_O();
$c_Lexample_Utils$.prototype.constructor = $c_Lexample_Utils$;
/** @constructor */
function $h_Lexample_Utils$() {
}
$h_Lexample_Utils$.prototype = $c_Lexample_Utils$.prototype;
$c_Lexample_Utils$.prototype.greet__T__T = (function(name) {
  return (("Hello, " + name) + "!");
});
$c_Lexample_Utils$.prototype.timestamp__D = (function() {
  return $uD(Date.now());
});
var $d_Lexample_Utils$ = new $TypeData().initClass($c_Lexample_Utils$, "example.Utils$", ({
  Lexample_Utils$: 1
}));
var $n_Lexample_Utils$;
function $m_Lexample_Utils$() {
  if ((!$n_Lexample_Utils$)) {
    $n_Lexample_Utils$ = new $c_Lexample_Utils$();
  }
  return $n_Lexample_Utils$;
}
function $s_Lexample_app__main__AT__V(args) {
  try {
    $m_Lexample_Main$package$().app__V();
  } catch (e) {
    if (false) {
      var error = $as_s_util_CommandLineParser$ParseError(e);
      $m_s_util_CommandLineParser$().showError__s_util_CommandLineParser$ParseError__V(error);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_Lexample_bufferdatav2_BufferDataV2$() {
  this.Lexample_bufferdatav2_BufferDataV2$__f_particleStruct = null;
  $n_Lexample_bufferdatav2_BufferDataV2$ = this;
  $m_scm_ArrayBuffer$();
  var acc = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
  var prim = $m_Lbufferdatav2_BufferPrimitive$F32$();
  var elem = new $c_Lbufferdatav2_PrimitiveField(prim, 0);
  acc.addOne__O__scm_ArrayBuffer(elem);
  var next = 4;
  var prim$2 = $m_Lbufferdatav2_BufferPrimitive$U8$();
  var elem$1 = new $c_Lbufferdatav2_PrimitiveField(prim$2, next);
  acc.addOne__O__scm_ArrayBuffer(elem$1);
  var next$2 = ((1 + next) | 0);
  var evidence$1__runtimeClass;
  var evidence$1__runtimeClass = $d_Lbufferdatav2_FieldDescriptor.getClassOf();
  if ((acc.scm_ArrayBuffer__f_size0 >= 0)) {
    var length = acc.scm_ArrayBuffer__f_size0;
    var componentType = evidence$1__runtimeClass;
    var destination = $n(componentType).data.newArray(length);
    acc.copyToArray__O__I__I__I(destination, 0, 2147483647);
    var $x_1 = destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1__runtimeClass;
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    var it = $n(acc.view__scm_ArrayBufferView()).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      var elem$2 = $n(it).next__O();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem$2) : ((elem$2 === null) ? $m_scm_ArrayBuilder$().scala$collection$mutable$ArrayBuilder$$$zeroOf__jl_Class__O(elementClass) : elem$2));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    var $x_1 = $m_scm_ArrayBuilder$().scala$collection$mutable$ArrayBuilder$$$genericArrayBuilderResult__jl_Class__sjs_js_Array__O(elemRuntimeClass, jsElems);
  }
  var metadata = new $c_Lbufferdatav2_LayoutMetadata(next$2, $asArrayOf_Lbufferdatav2_FieldDescriptor($x_1, 1));
  this.Lexample_bufferdatav2_BufferDataV2$__f_particleStruct = new $c_Lbufferdatav2_Schema(metadata);
}
$c_Lexample_bufferdatav2_BufferDataV2$.prototype = new $h_O();
$c_Lexample_bufferdatav2_BufferDataV2$.prototype.constructor = $c_Lexample_bufferdatav2_BufferDataV2$;
/** @constructor */
function $h_Lexample_bufferdatav2_BufferDataV2$() {
}
$h_Lexample_bufferdatav2_BufferDataV2$.prototype = $c_Lexample_bufferdatav2_BufferDataV2$.prototype;
$c_Lexample_bufferdatav2_BufferDataV2$.prototype.allocateParticles__I__Lbufferdatav2_StructArray = (function(count) {
  var this$1 = $n(this.Lexample_bufferdatav2_BufferDataV2$__f_particleStruct);
  return $m_Lbufferdatav2_StructArray$().apply__Lbufferdatav2_LayoutMetadata__I__Lbufferdatav2_StructArray(this$1.Lbufferdatav2_Schema__f_metadata, count);
});
$c_Lexample_bufferdatav2_BufferDataV2$.prototype.populateParticles__Lbufferdatav2_StructArray__V = (function(array) {
  var end = $n(array).length__I();
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var view = $n(array).apply__I__T3(x0);
      var meta = $as_Lbufferdatav2_LayoutMetadata($n(view).T3__f__1);
      var descriptor$proxy1 = $n($n(meta).Lbufferdatav2_LayoutMetadata__f_fields).get(0);
      var view$proxy1 = $n(view).T3__f__2;
      var baseOffset$proxy1 = $uI($n(view).T3__f__3);
      var value$proxy1 = Math.fround((2.0 * Math.fround(x0)));
      matchResult3: {
        if ((descriptor$proxy1 instanceof $c_Lbufferdatav2_PrimitiveField)) {
          var x17 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy1);
          var this$8 = $n(x17);
          var x19 = this$8.Lbufferdatav2_PrimitiveField__f_kind;
          var this$9 = $n(x17);
          var x20 = this$9.Lbufferdatav2_PrimitiveField__f_offset;
          $n(x19).write__sjs_js_typedarray_DataView__I__O__V(view$proxy1, ((baseOffset$proxy1 + x20) | 0), value$proxy1);
          break matchResult3;
        }
        if (false) {
          var x13 = $as_Lbufferdatav2_NestedField(descriptor$proxy1);
          $n(x13)._1__Lbufferdatav2_LayoutMetadata();
          $n(x13)._2__I();
          if ((value$proxy1 instanceof $c_T3)) {
            var x11 = $as_T3(value$proxy1);
            matchResult1: {
              var ref$proxy15___1;
              var ref$proxy15___2;
              var ref$proxy15___3;
              if (false) {
                var x6 = $as_Lbufferdatav2_NestedField(descriptor$proxy1);
                var x8 = $n(x6)._1__Lbufferdatav2_LayoutMetadata();
                var x9 = $n(x6)._2__I();
                var offset$proxy1 = ((baseOffset$proxy1 + x9) | 0);
                var ref$proxy15___1 = x8;
                var ref$proxy15___2 = view$proxy1;
                var ref$proxy15___3 = offset$proxy1;
                break matchResult1;
              }
              if ((descriptor$proxy1 instanceof $c_Lbufferdatav2_PrimitiveField)) {
                var x2 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy1);
                $n(x2);
                $n(x2);
                throw new $c_jl_IllegalStateException("Primitive fields do not expose nested struct access");
              }
              throw new $c_s_MatchError(descriptor$proxy1);
            }
            var requirement = ($as_Lbufferdatav2_LayoutMetadata(ref$proxy15___1) === $as_Lbufferdatav2_LayoutMetadata($n(x11).T3__f__1));
            if ((!requirement)) {
              throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Schema mismatch in copyFrom");
            }
            var targetView = ref$proxy15___2;
            var sourceView = $n(x11).T3__f__2;
            var stride = $n($as_Lbufferdatav2_LayoutMetadata(ref$proxy15___1)).Lbufferdatav2_LayoutMetadata__f_stride;
            var i$2 = 0;
            while ((i$2 < stride)) {
              var byte = $uS(sourceView.getUint8((($uI($n(x11).T3__f__3) + i$2) | 0)));
              targetView.setUint8((($uI(ref$proxy15___3) + i$2) | 0), byte);
              i$2 = ((1 + i$2) | 0);
            }
            break matchResult3;
          }
          throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "Expected StructRef for nested field assignment");
        }
        throw new $c_s_MatchError(descriptor$proxy1);
      }
      var meta$2 = $as_Lbufferdatav2_LayoutMetadata($n(view).T3__f__1);
      var descriptor$proxy2 = $n($n(meta$2).Lbufferdatav2_LayoutMetadata__f_fields).get(1);
      var view$proxy3 = $n(view).T3__f__2;
      var baseOffset$proxy2 = $uI($n(view).T3__f__3);
      var value$proxy2 = ((Math.imul(7, x0) % 256) | 0);
      matchResult6: {
        if ((descriptor$proxy2 instanceof $c_Lbufferdatav2_PrimitiveField)) {
          var x37 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy2);
          var this$23 = $n(x37);
          var x39 = this$23.Lbufferdatav2_PrimitiveField__f_kind;
          var this$24 = $n(x37);
          var x40 = this$24.Lbufferdatav2_PrimitiveField__f_offset;
          $n(x39).write__sjs_js_typedarray_DataView__I__O__V(view$proxy3, ((baseOffset$proxy2 + x40) | 0), value$proxy2);
          break matchResult6;
        }
        if (false) {
          var x33 = $as_Lbufferdatav2_NestedField(descriptor$proxy2);
          $n(x33)._1__Lbufferdatav2_LayoutMetadata();
          $n(x33)._2__I();
          if ((value$proxy2 instanceof $c_T3)) {
            var x31 = $as_T3(value$proxy2);
            matchResult4: {
              var ref$proxy38___1;
              var ref$proxy38___2;
              var ref$proxy38___3;
              if (false) {
                var x26 = $as_Lbufferdatav2_NestedField(descriptor$proxy2);
                var x28 = $n(x26)._1__Lbufferdatav2_LayoutMetadata();
                var x29 = $n(x26)._2__I();
                var offset$proxy2 = ((baseOffset$proxy2 + x29) | 0);
                var ref$proxy38___1 = x28;
                var ref$proxy38___2 = view$proxy3;
                var ref$proxy38___3 = offset$proxy2;
                break matchResult4;
              }
              if ((descriptor$proxy2 instanceof $c_Lbufferdatav2_PrimitiveField)) {
                var x22 = $as_Lbufferdatav2_PrimitiveField(descriptor$proxy2);
                $n(x22);
                $n(x22);
                throw new $c_jl_IllegalStateException("Primitive fields do not expose nested struct access");
              }
              throw new $c_s_MatchError(descriptor$proxy2);
            }
            var requirement$1 = ($as_Lbufferdatav2_LayoutMetadata(ref$proxy38___1) === $as_Lbufferdatav2_LayoutMetadata($n(x31).T3__f__1));
            if ((!requirement$1)) {
              throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Schema mismatch in copyFrom");
            }
            var targetView$2 = ref$proxy38___2;
            var sourceView$2 = $n(x31).T3__f__2;
            var stride$2 = $n($as_Lbufferdatav2_LayoutMetadata(ref$proxy38___1)).Lbufferdatav2_LayoutMetadata__f_stride;
            var i$3 = 0;
            while ((i$3 < stride$2)) {
              var byte$2 = $uS(sourceView$2.getUint8((($uI($n(x31).T3__f__3) + i$3) | 0)));
              targetView$2.setUint8((($uI(ref$proxy38___3) + i$3) | 0), byte$2);
              i$3 = ((1 + i$3) | 0);
            }
            break matchResult6;
          }
          throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "Expected StructRef for nested field assignment");
        }
        throw new $c_s_MatchError(descriptor$proxy2);
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
});
var $d_Lexample_bufferdatav2_BufferDataV2$ = new $TypeData().initClass($c_Lexample_bufferdatav2_BufferDataV2$, "example.bufferdatav2.BufferDataV2$", ({
  Lexample_bufferdatav2_BufferDataV2$: 1
}));
var $n_Lexample_bufferdatav2_BufferDataV2$;
function $m_Lexample_bufferdatav2_BufferDataV2$() {
  if ((!$n_Lexample_bufferdatav2_BufferDataV2$)) {
    $n_Lexample_bufferdatav2_BufferDataV2$ = new $c_Lexample_bufferdatav2_BufferDataV2$();
  }
  return $n_Lexample_bufferdatav2_BufferDataV2$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
}
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  jl_System$Streams$: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().initClass(0, "java.lang.Void", ({
  jl_Void: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length;
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length;
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length;
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length;
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length;
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length;
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length;
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length;
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length;
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array);
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  jl_reflect_Array$: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
function $s_RTLong__remainderUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderUnsignedImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideUnsignedImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong($uI(fpBitsDataView.getInt32(0, true)), $uI(fpBitsDataView.getInt32(4, true)));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, (value >> 31));
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = $n(a).RTLong__f_hi;
  if ((hi !== 0)) {
    return Math.clz32(hi);
  } else {
    var i = $n(a).RTLong__f_lo;
    return ((32 + Math.clz32(i)) | 0);
  }
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = $n(a).RTLong__f_lo;
  var hi = $n(a).RTLong__f_hi;
  var compressedLo = (((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo)));
  return Math.fround(((4.294967296E9 * hi) + (compressedLo >>> 0.0)));
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = $n(a).RTLong__f_lo;
  var hi = $n(a).RTLong__f_hi;
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__RTLong__I(a) {
  return $n(a).RTLong__f_lo;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, $n(a).RTLong__f_lo, true);
  fpBitsDataView.setInt32(4, $n(a).RTLong__f_hi, true);
  return $uD(fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul($n(a).RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi);
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var lo = ((alo - blo) | 0);
  return new $c_RTLong(lo, (((($n(a).RTLong__f_hi - $n(b).RTLong__f_hi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0));
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var lo = ((alo + blo) | 0);
  return new $c_RTLong(lo, (((($n(a).RTLong__f_hi + $n(b).RTLong__f_hi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0));
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = $n(a).RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? ((($n(a).RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = $n(a).RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? ((($n(a).RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = $n(a).RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | ($n(a).RTLong__f_hi << n)) : (lo << n)));
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo ^ $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi ^ $n(b).RTLong__f_hi));
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo & $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi & $n(b).RTLong__f_hi));
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo | $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi | $n(b).RTLong__f_hi));
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) >= ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) >= (bhi >>> 0)));
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) > ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) <= ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) <= (bhi >>> 0)));
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) < ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) >= ($n(b).RTLong__f_lo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) > ($n(b).RTLong__f_lo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) <= ($n(b).RTLong__f_lo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) < ($n(b).RTLong__f_lo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return (!(($n(a).RTLong__f_lo === $n(b).RTLong__f_lo) && ($n(a).RTLong__f_hi === $n(b).RTLong__f_hi)));
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return (($n(a).RTLong__f_lo === $n(b).RTLong__f_lo) && ($n(a).RTLong__f_hi === $n(b).RTLong__f_hi));
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
  } else {
    return false;
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi);
});
$c_RTLong.prototype.toString__T = (function() {
  var this$1 = $m_RTLong$();
  return this$1.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24);
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16);
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.longValue__J = (function() {
  return this;
});
$c_RTLong.prototype.floatValue__F = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  var compressedLo = (((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo)));
  return Math.fround(((4.294967296E9 * hi) + (compressedLo >>> 0.0)));
});
$c_RTLong.prototype.doubleValue__D = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)));
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth));
}
var $d_RTLong = new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  RTLong: 1
}));
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, true);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, false);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, askQuotient) {
  var shift = ((((bhi !== 0) ? Math.clz32(bhi) : ((32 + Math.clz32(blo)) | 0)) - ((ahi !== 0) ? Math.clz32(ahi) : ((32 + Math.clz32(alo)) | 0))) | 0);
  var b = shift;
  var lo = (((32 & b) === 0) ? (blo << b) : 0);
  var hi = (((32 & b) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - b) | 0)) | 0) | (bhi << b)) : (blo << b));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? ((alo$1 >>> 0) >= (blo$1 >>> 0)) : ((ahi$1 >>> 0) >= (bhi$1 >>> 0)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((hi$1 - hi$2) | 0) + ((((~lo$1) & lo$2) | ((~(lo$1 ^ lo$2)) & lo$3)) >> 31)) | 0);
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? ((alo$2 >>> 0) >= (blo >>> 0)) : ((ahi$2 >>> 0) >= (bhi >>> 0)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (lo$6 >>> 0.0));
    var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
    if (askQuotient) {
      var x = (remDouble / bDouble);
      var lo$7 = (x | 0.0);
      var x$1 = (x / 4.294967296E9);
      var hi$7 = (x$1 | 0.0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((hi$8 + hi$7) | 0) + ((((lo$8 & lo$7) | ((lo$8 | lo$7) & (~lo$9))) >>> 31) | 0)) | 0);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x$2 | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo;
  } else {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    var this$2 = ((4.294967296E9 * hi) + (lo >>> 0.0));
    return ("" + this$2);
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = $uD(Math.floor((1.0E-9 * approxNum)));
    var x = approxQuot;
    var approxRem = ((rlo - Math.imul(1000000000, (x | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = (((-1000000000) + approxRem) | 0);
    }
    var this$4 = approxRem;
    var remStr = ("" + this$4);
    var this$6 = approxQuot;
    var start = remStr.length;
    var s = ((("" + this$6) + $as_T("000000000".substring(start))) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var x = (value / 4.294967296E9);
    var rawHi = (x | 0.0);
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$1;
      return lo$1;
    }
  }
});
$c_RTLong$.prototype.divideUnsignedImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if ((ahi < 0)) {
      var hi = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$c_RTLong$.prototype.remainderUnsignedImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  RTLong$: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
/** @constructor */
function $c_s_Array$() {
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var this$1 = $n(src);
  var srcClass = $objectGetClass(this$1);
  var this$2 = $n(srcClass);
  if (this$2.data.isArrayClass) {
    var this$3 = $n(dest);
    var this$4 = $n($objectGetClass(this$3));
    var $x_1 = this$4.data.isAssignableFrom($n(srcClass).data);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
var $d_s_Array$ = new $TypeData().initClass($c_s_Array$, "scala.Array$", ({
  s_Array$: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)));
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth));
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end);
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(sep);
      if ((this$4.length !== 0)) {
        var this$5 = $n(jsb);
        this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      }
      var this$6 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
    }
  }
  var this$7 = $n(end);
  if ((this$7.length !== 0)) {
    var this$8 = $n(jsb);
    this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return b;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$c_scg_CommonErrors$.prototype = new $h_O();
$c_scg_CommonErrors$.prototype.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $c_scg_CommonErrors$.prototype;
$c_scg_CommonErrors$.prototype.indexOutOfBounds__I__I__jl_IndexOutOfBoundsException = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().initClass($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  scg_CommonErrors$: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_scm_ArrayBuilder$() {
}
$c_scm_ArrayBuilder$.prototype = new $h_O();
$c_scm_ArrayBuilder$.prototype.constructor = $c_scm_ArrayBuilder$;
/** @constructor */
function $h_scm_ArrayBuilder$() {
}
$h_scm_ArrayBuilder$.prototype = $c_scm_ArrayBuilder$.prototype;
$c_scm_ArrayBuilder$.prototype.scala$collection$mutable$ArrayBuilder$$$zeroOf__jl_Class__O = (function(runtimeClass) {
  return ((runtimeClass === $d_B.getClassOf()) ? 0 : ((runtimeClass === $d_S.getClassOf()) ? 0 : ((runtimeClass === $d_C.getClassOf()) ? 0 : ((runtimeClass === $d_I.getClassOf()) ? 0 : ((runtimeClass === $d_J.getClassOf()) ? $L0 : ((runtimeClass === $d_F.getClassOf()) ? 0.0 : ((runtimeClass === $d_D.getClassOf()) ? 0.0 : ((runtimeClass === $d_Z.getClassOf()) ? false : ((runtimeClass === $d_V.getClassOf()) ? (void 0) : null)))))))));
});
$c_scm_ArrayBuilder$.prototype.scala$collection$mutable$ArrayBuilder$$$genericArrayBuilderResult__jl_Class__sjs_js_Array__O = (function(runtimeClass, a) {
  var len = $uI(a.length);
  if ((runtimeClass === $d_C.getClassOf())) {
    var result = new $ac_C(len);
    var i = 0;
    while ((i !== len)) {
      result.set(i, (65535 & $uI(a[i])));
      i = ((1 + i) | 0);
    }
    return result;
  } else {
    var result$2 = $n(runtimeClass).data.newArray(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().array_update__O__I__O__V(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().initClass($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  scm_ArrayBuilder$: 1
}));
var $n_scm_ArrayBuilder$;
function $m_scm_ArrayBuilder$() {
  if ((!$n_scm_ArrayBuilder$)) {
    $n_scm_ArrayBuilder$ = new $c_scm_ArrayBuilder$();
  }
  return $n_scm_ArrayBuilder$;
}
/** @constructor */
function $c_scm_MutationTracker$() {
}
$c_scm_MutationTracker$.prototype = new $h_O();
$c_scm_MutationTracker$.prototype.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $c_scm_MutationTracker$.prototype;
$c_scm_MutationTracker$.prototype.checkMutations__I__I__T__V = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().initClass($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  scm_MutationTracker$: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true;
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y);
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y);
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2);
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $n(x3).c;
      return (x2$1 === this$1);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $n(x3).c;
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2);
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === ((4.294967296E9 * hi) + (lo >>> 0.0)));
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2);
    } else {
      return false;
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) === x3$3);
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1));
    } else {
      return false;
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $n(xc).c;
    var this$2 = $n(x2).c;
    return (this$1 === this$2);
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $n(xc).c;
      return (x2$1 === this$3);
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $n(xc).c;
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  sr_BoxesRunTime$: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().initClass(0, "scala.runtime.Null$", ({
  sr_Null$: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x10 = $asArrayOf_O(xs, 1);
    return $n(x10).get(idx);
  }
  if ((xs instanceof $ac_I)) {
    var x9 = $asArrayOf_I(xs, 1);
    return $n(x9).get(idx);
  }
  if ((xs instanceof $ac_D)) {
    var x8 = $asArrayOf_D(xs, 1);
    return $n(x8).get(idx);
  }
  if ((xs instanceof $ac_J)) {
    var x7 = $asArrayOf_J(xs, 1);
    return $n(x7).get(idx);
  }
  if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx);
  }
  if ((xs instanceof $ac_C)) {
    var x5 = $asArrayOf_C(xs, 1);
    return $bC($n(x5).get(idx));
  }
  if ((xs instanceof $ac_B)) {
    var x4 = $asArrayOf_B(xs, 1);
    return $n(x4).get(idx);
  }
  if ((xs instanceof $ac_S)) {
    var x3 = $asArrayOf_S(xs, 1);
    return $n(x3).get(idx);
  }
  if ((xs instanceof $ac_Z)) {
    var x2 = $asArrayOf_Z(xs, 1);
    return $n(x2).get(idx);
  }
  if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  }
  throw new $c_s_MatchError(xs);
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x20 = $asArrayOf_O(xs, 1);
    $n(x20).set(idx, value);
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    var x19 = $asArrayOf_I(xs, 1);
    $n(x19).set(idx, $uI(value));
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    var x18 = $asArrayOf_D(xs, 1);
    $n(x18).set(idx, $uD(value));
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var x17 = $asArrayOf_J(xs, 1);
    $n(x17).set(idx, $uJ(value));
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    var x16 = $asArrayOf_F(xs, 1);
    $n(x16).set(idx, $uF(value));
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    var x15 = $asArrayOf_C(xs, 1);
    $n(x15).set(idx, $uC(value));
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    var x14 = $asArrayOf_B(xs, 1);
    $n(x14).set(idx, $uB(value));
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    var x13 = $asArrayOf_S(xs, 1);
    $n(x13).set(idx, $uS(value));
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    var x12 = $asArrayOf_Z(xs, 1);
    $n(x12).set(idx, $uZ(value));
    return (void 0);
  }
  if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  }
  throw new $c_s_MatchError(xs);
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  sr_ScalaRunTime$: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length));
});
$c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    if ((((4.294967296E9 * hi) + (lo >>> 0.0)) === dv)) {
      return (lo ^ hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        var lo$1 = $uI(fpBitsDataView.getInt32(0, true));
        var hi$1 = $uI(fpBitsDataView.getInt32(4, true));
        return (lo$1 ^ hi$1);
      }
    }
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3);
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi));
  } else {
    return $dp_hashCode__I($n(x));
  }
});
var $d_sr_Statics$ = new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
  sr_Statics$: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$c_s_util_CommandLineParser$.prototype = new $h_O();
$c_s_util_CommandLineParser$.prototype.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $c_s_util_CommandLineParser$.prototype;
$c_s_util_CommandLineParser$.prototype.showError__s_util_CommandLineParser$ParseError__V = (function(err) {
  var where = (($n(err).idx__I() === 0) ? "" : (($n(err).idx__I() === 1) ? " after first argument" : ((" after " + $n(err).idx__I()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + $n(err).msg__T());
  var this$2 = $m_s_Console$();
  var this$3 = $n(this$2.out__Ljava_io_PrintStream());
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().initClass($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  s_util_CommandLineParser$: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init;
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  s_util_DynamicVariable: 1
}));
function $p_s_util_hashing_MurmurHash3__avalanche__I__I($thiz, hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length));
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I($n($n(x).productPrefix__T())) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
    }
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0);
    }
    return this.finalizeHash__I__I__I(h, arr);
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n);
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0);
  }
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
  }
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0);
      }
      return this.finalizeHash__I__I__I(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  if ((l === 0)) {
    return this.finalizeHash__I__I__I(h, 0);
  } else if ((l === 1)) {
    var $x_1 = h;
    var x = $n(a).apply__I__O(0);
    return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
  } else {
    var x$1 = $n(a).apply__I__O(0);
    var initial = $m_sr_Statics$().anyHash__O__I(x$1);
    h = this.mix__I__I__I(h, initial);
    var h0 = h;
    var x$2 = $n(a).apply__I__O(1);
    var prev = $m_sr_Statics$().anyHash__O__I(x$2);
    var rangeDiff = ((prev - initial) | 0);
    var i = 2;
    while ((i < l)) {
      h = this.mix__I__I__I(h, prev);
      var x$3 = $n(a).apply__I__O(i);
      var hash = $m_sr_Statics$().anyHash__O__I(x$3);
      if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
        h = this.mix__I__I__I(h, hash);
        i = ((1 + i) | 0);
        while ((i < l)) {
          var $x_2 = h;
          var x$4 = $n(a).apply__I__O(i);
          h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
          i = ((1 + i) | 0);
        }
        return this.finalizeHash__I__I__I(h, l);
      }
      prev = hash;
      i = ((1 + i) | 0);
    }
    return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x3 = rangeState;
    switch (x3) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
});
/** @constructor */
function $c_Lbufferdatav2_BufferPrimitive$F32$() {
  this.Lbufferdatav2_BufferPrimitive$F32$__f_byteSize = 0;
  this.Lbufferdatav2_BufferPrimitive$F32$__f_byteSize = 4;
}
$c_Lbufferdatav2_BufferPrimitive$F32$.prototype = new $h_O();
$c_Lbufferdatav2_BufferPrimitive$F32$.prototype.constructor = $c_Lbufferdatav2_BufferPrimitive$F32$;
/** @constructor */
function $h_Lbufferdatav2_BufferPrimitive$F32$() {
}
$h_Lbufferdatav2_BufferPrimitive$F32$.prototype = $c_Lbufferdatav2_BufferPrimitive$F32$.prototype;
$c_Lbufferdatav2_BufferPrimitive$F32$.prototype.byteSize__I = (function() {
  return 4;
});
$c_Lbufferdatav2_BufferPrimitive$F32$.prototype.read__sjs_js_typedarray_DataView__I__O = (function(view, offset) {
  return $uF(view.getFloat32(offset, true));
});
$c_Lbufferdatav2_BufferPrimitive$F32$.prototype.write__sjs_js_typedarray_DataView__I__O__V = (function(view, offset, value) {
  if ($isFloat(value)) {
    var x38 = $uF(value);
    var v = x38;
  } else if (((typeof value) === "number")) {
    var x37 = $uD(value);
    var v = Math.fround(x37);
  } else if ($isInt(value)) {
    var x36 = $uI(value);
    var v = Math.fround(x36);
  } else {
    var v = $uF(value);
  }
  view.setFloat32(offset, v, true);
});
var $d_Lbufferdatav2_BufferPrimitive$F32$ = new $TypeData().initClass($c_Lbufferdatav2_BufferPrimitive$F32$, "bufferdatav2.BufferPrimitive$F32$", ({
  Lbufferdatav2_BufferPrimitive$F32$: 1,
  Lbufferdatav2_BufferPrimitive: 1
}));
var $n_Lbufferdatav2_BufferPrimitive$F32$;
function $m_Lbufferdatav2_BufferPrimitive$F32$() {
  if ((!$n_Lbufferdatav2_BufferPrimitive$F32$)) {
    $n_Lbufferdatav2_BufferPrimitive$F32$ = new $c_Lbufferdatav2_BufferPrimitive$F32$();
  }
  return $n_Lbufferdatav2_BufferPrimitive$F32$;
}
/** @constructor */
function $c_Lbufferdatav2_BufferPrimitive$U8$() {
  this.Lbufferdatav2_BufferPrimitive$U8$__f_byteSize = 0;
  this.Lbufferdatav2_BufferPrimitive$U8$__f_byteSize = 1;
}
$c_Lbufferdatav2_BufferPrimitive$U8$.prototype = new $h_O();
$c_Lbufferdatav2_BufferPrimitive$U8$.prototype.constructor = $c_Lbufferdatav2_BufferPrimitive$U8$;
/** @constructor */
function $h_Lbufferdatav2_BufferPrimitive$U8$() {
}
$h_Lbufferdatav2_BufferPrimitive$U8$.prototype = $c_Lbufferdatav2_BufferPrimitive$U8$.prototype;
$c_Lbufferdatav2_BufferPrimitive$U8$.prototype.byteSize__I = (function() {
  return 1;
});
$c_Lbufferdatav2_BufferPrimitive$U8$.prototype.read__sjs_js_typedarray_DataView__I__O = (function(view, offset) {
  return $uS(view.getUint8(offset));
});
$c_Lbufferdatav2_BufferPrimitive$U8$.prototype.write__sjs_js_typedarray_DataView__I__O__V = (function(view, offset, value) {
  if ($isInt(value)) {
    var x8 = $uI(value);
    var v = x8;
  } else if ($isShort(value)) {
    var x7 = $uS(value);
    var v = x7;
  } else if ($isByte(value)) {
    var x6 = $uB(value);
    var v = x6;
  } else {
    var v = $uI(value);
  }
  view.setUint8(offset, ((v << 16) >> 16));
});
var $d_Lbufferdatav2_BufferPrimitive$U8$ = new $TypeData().initClass($c_Lbufferdatav2_BufferPrimitive$U8$, "bufferdatav2.BufferPrimitive$U8$", ({
  Lbufferdatav2_BufferPrimitive$U8$: 1,
  Lbufferdatav2_BufferPrimitive: 1
}));
var $n_Lbufferdatav2_BufferPrimitive$U8$;
function $m_Lbufferdatav2_BufferPrimitive$U8$() {
  if ((!$n_Lbufferdatav2_BufferPrimitive$U8$)) {
    $n_Lbufferdatav2_BufferPrimitive$U8$ = new $c_Lbufferdatav2_BufferPrimitive$U8$();
  }
  return $n_Lbufferdatav2_BufferPrimitive$U8$;
}
/** @constructor */
function $c_jl_Number() {
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)));
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
  }
  getMessage__T() {
    return this.jl_Throwable__f_s;
  }
  fillInStackTrace__jl_Throwable() {
    var reference = (false ? this.sjs_js_JavaScriptException__f_exception : this);
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || $uZ(Object.isSealed(this)))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this);
  }
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that);
  }
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.toString__T();
  }
}
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
}
$c_s_Console$.prototype = new $h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
});
var $d_s_Console$ = new $TypeData().initClass($c_s_Console$, "scala.Console$", ({
  s_Console$: 1,
  s_io_AnsiColor: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x6 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x6, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else if ((xs instanceof $c_sci_List)) {
    var x5 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x5, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.data = $data;
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.data.isInterface ? "interface " : (this.data.isPrimitive ? "" : "class ")) + this.data.name);
});
var $d_jl_Class = new $TypeData().initClass($c_jl_Class, "java.lang.Class", ({
  jl_Class: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T3__f__1;
      break;
    }
    case 1: {
      return $thiz.T3__f__2;
      break;
    }
    case 2: {
      return $thiz.T3__f__3;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while ($thiz.hasNext__Z()) {
    if ((!$n(those).hasNext__Z())) {
      return false;
    }
    var x = $thiz.next__O();
    var y = $n(those).next__O();
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
      return false;
    }
  }
  return (!$n(those).hasNext__Z());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f__empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f__empty = new $c_sc_Iterator$$anon$19();
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
  sc_Iterator$: 1,
  Ljava_io_Serializable: 1,
  sc_IterableFactory: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"));
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)));
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = null;
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = f;
}
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype;
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.apply__O = (function() {
  return $n(this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().initClass($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855: 1,
  sr_AbstractFunction0: 1,
  F0: 1
}));
var $d_sr_Nothing$ = new $TypeData().initClass(0, "scala.runtime.Nothing$", ({
  sr_Nothing$: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().initClass(0, "java.lang.Boolean", ({
  jl_Boolean: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $n($as_jl_Character(that)).c;
    return ($thiz === this$1);
  } else {
    return false;
  }
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)));
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth));
}
var $d_jl_Character = new $TypeData().initClass(0, "java.lang.Character", ({
  jl_Character: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length;
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index);
});
var $d_jl_StringBuilder = new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  jl_StringBuilder: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
/** @constructor */
function $c_sc_AbstractIterator() {
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1);
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this;
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  var this$1 = $n($thiz.iterator__sc_Iterator());
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that);
}
function $as_s_util_CommandLineParser$ParseError(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.CommandLineParser$ParseError"));
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_CommandLineParser$ParseError)));
}
function $asArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (($isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.CommandLineParser$ParseError;", depth));
}
function $as_Lbufferdatav2_NestedField(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "bufferdatav2.NestedField"));
}
function $isArrayOf_Lbufferdatav2_NestedField(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbufferdatav2_NestedField)));
}
function $asArrayOf_Lbufferdatav2_NestedField(obj, depth) {
  return (($isArrayOf_Lbufferdatav2_NestedField(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbufferdatav2.NestedField;", depth));
}
/** @constructor */
function $c_Lbufferdatav2_PrimitiveField(kind, offset) {
  this.Lbufferdatav2_PrimitiveField__f_kind = null;
  this.Lbufferdatav2_PrimitiveField__f_offset = 0;
  this.Lbufferdatav2_PrimitiveField__f_kind = kind;
  this.Lbufferdatav2_PrimitiveField__f_offset = offset;
  $n(kind).byteSize__I();
}
$c_Lbufferdatav2_PrimitiveField.prototype = new $h_O();
$c_Lbufferdatav2_PrimitiveField.prototype.constructor = $c_Lbufferdatav2_PrimitiveField;
/** @constructor */
function $h_Lbufferdatav2_PrimitiveField() {
}
$h_Lbufferdatav2_PrimitiveField.prototype = $c_Lbufferdatav2_PrimitiveField.prototype;
$c_Lbufferdatav2_PrimitiveField.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lbufferdatav2_PrimitiveField.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  acc = $m_sr_Statics$().mix__I__I__I(hash, 1743153267);
  var hash$1 = acc;
  var x = this.Lbufferdatav2_PrimitiveField__f_kind;
  var data = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data);
  var hash$2 = acc;
  var data$1 = this.Lbufferdatav2_PrimitiveField__f_offset;
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$1);
  var hash$3 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2);
});
$c_Lbufferdatav2_PrimitiveField.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lbufferdatav2_PrimitiveField)) {
    var x55 = $as_Lbufferdatav2_PrimitiveField(x$0);
    if ((this.Lbufferdatav2_PrimitiveField__f_offset === $n(x55).Lbufferdatav2_PrimitiveField__f_offset)) {
      var x = this.Lbufferdatav2_PrimitiveField__f_kind;
      var x$2 = $n(x55).Lbufferdatav2_PrimitiveField__f_kind;
      if ((x === null)) {
        return (x$2 === null);
      } else {
        var this$1 = $n(x);
        return (this$1 === x$2);
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lbufferdatav2_PrimitiveField.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lbufferdatav2_PrimitiveField.prototype.productArity__I = (function() {
  return 2;
});
$c_Lbufferdatav2_PrimitiveField.prototype.productPrefix__T = (function() {
  return "PrimitiveField";
});
$c_Lbufferdatav2_PrimitiveField.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lbufferdatav2_PrimitiveField__f_kind;
  }
  if ((n === 1)) {
    return this.Lbufferdatav2_PrimitiveField__f_offset;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lbufferdatav2_PrimitiveField(obj) {
  return (((obj instanceof $c_Lbufferdatav2_PrimitiveField) || (obj === null)) ? obj : $throwClassCastException(obj, "bufferdatav2.PrimitiveField"));
}
function $isArrayOf_Lbufferdatav2_PrimitiveField(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lbufferdatav2_PrimitiveField)));
}
function $asArrayOf_Lbufferdatav2_PrimitiveField(obj, depth) {
  return (($isArrayOf_Lbufferdatav2_PrimitiveField(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lbufferdatav2.PrimitiveField;", depth));
}
var $d_Lbufferdatav2_PrimitiveField = new $TypeData().initClass($c_Lbufferdatav2_PrimitiveField, "bufferdatav2.PrimitiveField", ({
  Lbufferdatav2_PrimitiveField: 1,
  Lbufferdatav2_FieldDescriptor: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayStoreException = new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Byte(obj) {
  return (($isByte(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Byte"));
}
function $isArrayOf_jl_Byte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Byte)));
}
function $asArrayOf_jl_Byte(obj, depth) {
  return (($isArrayOf_jl_Byte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Byte;", depth));
}
var $d_jl_Byte = new $TypeData().initClass(0, "java.lang.Byte", ({
  jl_Byte: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ClassCastException = new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().initClass($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Short(obj) {
  return (($isShort(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Short"));
}
function $isArrayOf_jl_Short(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Short)));
}
function $asArrayOf_jl_Short(obj, depth) {
  return (($isArrayOf_jl_Short(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Short;", depth));
}
var $d_jl_Short = new $TypeData().initClass(0, "java.lang.Short", ({
  jl_Short: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().initClass($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  ju_ConcurrentModificationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.s_MatchError__f_objStringbitmap$1)) {
    if (($thiz.s_MatchError__f_obj === null)) {
      var $x_1 = "null";
    } else {
      try {
        var $x_1 = ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
      }
    }
    $thiz.s_MatchError__f_objString$lzy1 = $x_1;
    $thiz.s_MatchError__f_objStringbitmap$1 = true;
  }
  return $thiz.s_MatchError__f_objString$lzy1;
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $objectClassName(this$1));
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_objString$lzy1 = null;
    this.s_MatchError__f_objStringbitmap$1 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.s_Product$$anon$1__f_$outer = outer;
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = $n(outer).productArity__I();
}
$c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax);
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = $n(this.s_Product$$anon$1__f_$outer).productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().initClass($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_Iterator: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.T3__f__1 = null;
  this.T3__f__2 = null;
  this.T3__f__3 = null;
  this.T3__f__1 = _1;
  this.T3__f__2 = _2;
  this.T3__f__3 = _3;
}
$c_T3.prototype = new $h_O();
$c_T3.prototype.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $c_T3.prototype;
$c_T3.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_T3.prototype.productArity__I = (function() {
  return 3;
});
$c_T3.prototype.productElement__I__O = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$c_T3.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().productHash__s_Product__I__Z__I(this, (-192629203), true);
});
$c_T3.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_T3)) {
    var x2 = $as_T3(x$0);
    var x = this.T3__f__1;
    var y = $n(x2).T3__f__1;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x, y)) {
      var x$1 = this.T3__f__2;
      var y$1 = $n(x2).T3__f__2;
      var $x_1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y$1);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$2 = this.T3__f__3;
      var y$2 = $n(x2).T3__f__3;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x$2, y$2);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_T3.prototype.productPrefix__T = (function() {
  return "Tuple3";
});
$c_T3.prototype.toString__T = (function() {
  return (((((("(" + this.T3__f__1) + ",") + this.T3__f__2) + ",") + this.T3__f__3) + ")");
});
function $as_T3(obj) {
  return (((obj instanceof $c_T3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple3"));
}
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T3)));
}
function $asArrayOf_T3(obj, depth) {
  return (($isArrayOf_T3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple3;", depth));
}
var $d_T3 = new $TypeData().initClass($c_T3, "scala.Tuple3", ({
  T3: 1,
  s_Equals: 1,
  s_Product: 1,
  s_Product3: 1,
  Ljava_io_Serializable: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.className__T() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false;
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0;
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_Iterator: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return $n(skipped).head__O();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x4 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x4);
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var this$1 = $n(a$tailLocal1);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b$tailLocal1);
        var $x_2 = (!this$2.isEmpty__Z());
      } else {
        var $x_2 = false;
      }
      if ($x_2) {
        var x = $n(a$tailLocal1).head__O();
        var y = $n(b$tailLocal1).head__O();
        var $x_1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x, y);
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var a$tailLocal1$tmp1 = $as_sc_LinearSeq($n(a$tailLocal1).tail__O());
        var b$tailLocal1$tmp1 = $as_sc_LinearSeq($n(b$tailLocal1).tail__O());
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
      } else {
        return ($n(a$tailLocal1).isEmpty__Z() && $n(b$tailLocal1).isEmpty__Z());
      }
    }
  }
}
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.scm_ArrayBuffer$__f_emptyArray = null;
  $n_scm_ArrayBuffer$ = this;
  this.scm_ArrayBuffer$__f_emptyArray = new $ac_O(0);
}
$c_scm_ArrayBuffer$.prototype = new $h_O();
$c_scm_ArrayBuffer$.prototype.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $c_scm_ArrayBuffer$.prototype;
$c_scm_ArrayBuffer$.prototype.resizeUp__I__I__I = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else if ((targetLen > 2147483639)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
  } else if ((arrayLen > 1073741819)) {
    return 2147483639;
  } else {
    var x = (arrayLen << 1);
    var y = ((x > 16) ? x : 16);
    return ((targetLen > y) ? targetLen : y);
  }
});
$c_scm_ArrayBuffer$.prototype.scala$collection$mutable$ArrayBuffer$$$ensureSize__AO__I__I__AO = (function(array, curSize, targetSize) {
  var newLen = this.resizeUp__I__I__I($n(array).u.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    $systemArraycopyRefs($n(array), 0, res, 0, curSize);
    return res;
  }
});
var $d_scm_ArrayBuffer$ = new $TypeData().initClass($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  scm_ArrayBuffer$: 1,
  Ljava_io_Serializable: 1,
  sc_IterableFactory: 1,
  sc_SeqFactory: 1,
  sc_StrictOptimizedSeqFactory: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    var lo = $uI(fpBitsDataView.getInt32(0, true));
    var hi = $uI(fpBitsDataView.getInt32(4, true));
    return (lo ^ hi);
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"));
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)));
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth));
}
var $d_jl_Double = new $TypeData().initClass(0, "java.lang.Double", ({
  jl_Double: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    var lo = $uI(fpBitsDataView.getInt32(0, true));
    var hi = $uI(fpBitsDataView.getInt32(4, true));
    return (lo ^ hi);
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Float(obj) {
  return (($isFloat(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Float"));
}
function $isArrayOf_jl_Float(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Float)));
}
function $asArrayOf_jl_Float(obj, depth) {
  return (($isArrayOf_jl_Float(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Float;", depth));
}
var $d_jl_Float = new $TypeData().initClass(0, "java.lang.Float", ({
  jl_Float: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Integer(obj) {
  return (($isInt(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Integer"));
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Integer)));
}
function $asArrayOf_jl_Integer(obj, depth) {
  return (($isArrayOf_jl_Integer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Integer;", depth));
}
var $d_jl_Integer = new $TypeData().initClass(0, "java.lang.Integer", ({
  jl_Integer: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi));
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi);
}
function $f_jl_Long__toString__T($thiz) {
  var this$1 = $m_RTLong$();
  return this$1.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi);
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)));
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth));
}
var $d_jl_Long = new $TypeData().initClass(0, "java.lang.Long", ({
  jl_Long: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => (x instanceof $c_RTLong)));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    var $x_2 = h;
    var $x_1 = h;
    var index = i;
    h = ((((($x_2 << 5) - $x_1) | 0) + $charAt($thiz, index)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)));
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth));
}
var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
  T: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(index) {
    super();
    var s = ("String index out of range: " + index);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T();
});
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = $n(self).length__I();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0);
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) | 0);
    return r;
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f__empty).next__O();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_Iterator: 1,
  Ljava_io_Serializable: 1
}));
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"));
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)));
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth));
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)");
}
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount = null;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount = 0;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount = $uI($n(mutationCount).apply__O());
}
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype;
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$1 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount;
  var actualCount = $uI($n(this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount).apply__O());
  this$1.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().initClass($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  scm_CheckedIndexedSeqView$CheckedIterator: 1,
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_Iterator: 1,
  Ljava_io_Serializable: 1
}));
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"));
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)));
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth));
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_buffer = "";
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = $n(rest);
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      rest = "";
    } else {
      var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$2 = $n(rest);
      if ((nlPos > this$2.length)) {
        $charAt(this$2, nlPos);
      }
      if ((nlPos < 0)) {
        $charAt(this$2, (-1));
      }
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      var this$3 = $n(rest);
      var beginIndex = ((1 + nlPos) | 0);
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex);
      }
      rest = $as_T(this$3.substring(beginIndex));
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || $n(s$tailLocal1).isEmpty__Z())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = (((-1) + n$tailLocal1) | 0);
      var s$tailLocal1$tmp1 = $as_sc_LinearSeq($n(s$tailLocal1).tail__O());
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_sc_AbstractView() {
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this);
});
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)));
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)));
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true;
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
$c_sc_AbstractSeqView.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)));
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)));
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null;
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I();
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z();
});
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$c_sc_AbstractIndexedSeqView.prototype.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $c_sc_AbstractIndexedSeqView.prototype;
$c_sc_AbstractIndexedSeqView.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_AbstractIndexedSeqView.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sc_AbstractIndexedSeqView.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_IterableOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Iterable: 1,
  Ljava_io_Serializable: 1,
  sc_View: 1,
  sc_SeqOps: 1,
  sc_SeqView: 1,
  sc_IndexedSeqOps: 1,
  sc_IndexedSeqView: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.scm_ArrayBufferView__f_underlying = null;
  this.scm_ArrayBufferView__f_mutationCount = null;
  this.scm_ArrayBufferView__f_underlying = underlying;
  this.scm_ArrayBufferView__f_mutationCount = mutationCount;
}
$c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$c_scm_ArrayBufferView.prototype.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $c_scm_ArrayBufferView.prototype;
$c_scm_ArrayBufferView.prototype.apply__I__O = (function(n) {
  return $n(this.scm_ArrayBufferView__f_underlying).apply__I__O(n);
});
$c_scm_ArrayBufferView.prototype.length__I = (function() {
  var this$1 = $n(this.scm_ArrayBufferView__f_underlying);
  return this$1.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBufferView.prototype.className__T = (function() {
  return "ArrayBufferView";
});
$c_scm_ArrayBufferView.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.scm_ArrayBufferView__f_mutationCount);
});
var $d_scm_ArrayBufferView = new $TypeData().initClass($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_IterableOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Iterable: 1,
  Ljava_io_Serializable: 1,
  sc_View: 1,
  sc_SeqOps: 1,
  sc_SeqView: 1,
  sc_IndexedSeqOps: 1,
  sc_IndexedSeqView: 1
}));
/** @constructor */
function $c_scm_AbstractSeq() {
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ($n(xs$tailLocal1).isEmpty__Z() ? 0 : 1);
    } else if ($n(xs$tailLocal1).isEmpty__Z()) {
      return (-1);
    } else {
      var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
      var xs$tailLocal1$tmp1 = $as_sci_List($n(xs$tailLocal1).tail__O());
      i$tailLocal1 = i$tailLocal1$tmp1;
      xs$tailLocal1 = xs$tailLocal1$tmp1;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = $n(a$tailLocal1).isEmpty__Z();
      var bEmpty = $n(b$tailLocal1).isEmpty__Z();
      if ((!(aEmpty || bEmpty))) {
        var x = $n(a$tailLocal1).head__O();
        var y = $n(b$tailLocal1).head__O();
        var $x_1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x, y);
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var a$tailLocal1$tmp1 = $as_sci_List($n(a$tailLocal1).tail__O());
        var b$tailLocal1$tmp1 = $as_sci_List($n(b$tailLocal1).tail__O());
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq";
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$());
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O());
  }
  return len;
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$c_sci_List.prototype.className__T = (function() {
  return "List";
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x18 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x18);
  } else {
    return $f_sc_Seq__equals__O__Z(this, o);
  }
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)));
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth));
}
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil";
});
$c_sci_Nil$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f__empty;
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E();
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E();
});
var $d_sci_Nil$ = new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_IterableOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Iterable: 1,
  F1: 1,
  s_PartialFunction: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sc_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_Seq: 1,
  sc_LinearSeqOps: 1,
  sc_LinearSeq: 1,
  sci_LinearSeqOps: 1,
  sci_LinearSeq: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  Ljava_io_Serializable: 1,
  scg_DefaultSerializable: 1,
  s_Product: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null;
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1);
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0);
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
var $d_scm_StringBuilder = new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_IterableOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Iterable: 1,
  F1: 1,
  s_PartialFunction: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sc_Seq: 1,
  scm_Iterable: 1,
  jl_Cloneable: 1,
  scm_Cloneable: 1,
  scm_SeqOps: 1,
  scm_Seq: 1,
  scm_Clearable: 1,
  scm_Growable: 1,
  scm_Builder: 1,
  scm_ReusableBuilder: 1,
  sc_IndexedSeqOps: 1,
  sc_IndexedSeq: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedSeq: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_mutationCount = 0;
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.scm_ArrayBuffer__f_mutationCount = 0;
  this.scm_ArrayBuffer__f_array = null;
  this.scm_ArrayBuffer__f_size0 = 0;
}
$c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ArrayBuffer.prototype.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $c_scm_ArrayBuffer.prototype;
$c_scm_ArrayBuffer.prototype.iterator__sc_Iterator = (function() {
  return $n(this.view__scm_ArrayBufferView()).iterator__sc_Iterator();
});
$c_scm_ArrayBuffer.prototype.lengthCompare__I__I = (function(len) {
  var x = this.scm_ArrayBuffer__f_size0;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_ArrayBuffer.prototype.knownSize__I = (function() {
  return this.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBuffer.prototype.ensureSize__I__V = (function(n) {
  this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n);
});
$c_scm_ArrayBuffer.prototype.apply__I__O = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(n, (((-1) + this.scm_ArrayBuffer__f_size0) | 0)));
  }
  if ((hi > this.scm_ArrayBuffer__f_size0)) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException((((-1) + hi) | 0), (((-1) + this.scm_ArrayBuffer__f_size0) | 0)));
  }
  return $n(this.scm_ArrayBuffer__f_array).get(n);
});
$c_scm_ArrayBuffer.prototype.length__I = (function() {
  return this.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBuffer.prototype.view__scm_ArrayBufferView = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.scm_ArrayBuffer__f_mutationCount)));
});
$c_scm_ArrayBuffer.prototype.addOne__O__scm_ArrayBuffer = (function(elem) {
  this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
  var newSize = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  if (($n(this.scm_ArrayBuffer__f_array).u.length <= (((-1) + newSize) | 0))) {
    this.ensureSize__I__V(newSize);
  }
  this.scm_ArrayBuffer__f_size0 = newSize;
  $n(this.scm_ArrayBuffer__f_array).set((((-1) + newSize) | 0), elem);
  return this;
});
$c_scm_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer";
});
$c_scm_ArrayBuffer.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var srcLen = this.scm_ArrayBuffer__f_size0;
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this.scm_ArrayBuffer__f_array, 0, xs, start, copied);
  }
  return copied;
});
var $d_scm_ArrayBuffer = new $TypeData().initClass($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sc_IterableOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Iterable: 1,
  F1: 1,
  s_PartialFunction: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sc_Seq: 1,
  scm_Iterable: 1,
  jl_Cloneable: 1,
  scm_Cloneable: 1,
  scm_SeqOps: 1,
  scm_Seq: 1,
  scm_Clearable: 1,
  scm_Growable: 1,
  scm_Shrinkable: 1,
  scm_Buffer: 1,
  sc_IndexedSeqOps: 1,
  sc_IndexedSeq: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedSeq: 1,
  scm_IndexedBuffer: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  Ljava_io_Serializable: 1,
  scg_DefaultSerializable: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
let $e_zeroCostStructViews = (function() {
  return $m_Lbufferdatav1_ZeroCostValidation$().structViewsUsage__sjs_js_Object();
});
export { $e_zeroCostStructViews as zeroCostStructViews };
let $e_zeroCostDirectNested = (function() {
  return $m_Lbufferdatav1_ZeroCostValidation$().directNestedUsage__sjs_js_Object();
});
export { $e_zeroCostDirectNested as zeroCostDirectNested };
let $e_validateZeroCost = (function() {
  return $m_Lbufferdatav1_ZeroCostValidation$().validate__sjs_js_Object();
});
export { $e_validateZeroCost as validateZeroCost };
let $e_zeroCostPrimitiveViews = (function() {
  return $m_Lbufferdatav1_ZeroCostValidation$().primitiveViewsUsage__sjs_js_Object();
});
export { $e_zeroCostPrimitiveViews as zeroCostPrimitiveViews };
let $e_zeroCostDirect = (function() {
  return $m_Lbufferdatav1_ZeroCostValidation$().directDataViewUsage__sjs_js_Object();
});
export { $e_zeroCostDirect as zeroCostDirect };
let $e_zeroCostNamedNested = (function() {
  return $m_Lbufferdatav1_ZeroCostValidation$().namedNestedUsage__sjs_js_Object();
});
export { $e_zeroCostNamedNested as zeroCostNamedNested };
let $e_createParticleBufferV2 = (function(...rest) {
  var prep0 = ((rest[0] === (void 0)) ? ($m_Lexample_BufferDataV2Demo$(), 10) : $uI(rest[0]));
  return $m_Lexample_BufferDataV2Demo$().createBufferDataV2Particles__I__sjs_js_Object(prep0);
});
export { $e_createParticleBufferV2 as createParticleBufferV2 };
let $e_createParticleBufferV1 = (function(arg) {
  var prep0 = $uI(arg);
  return $m_Lexample_BufferDataDemo$().createParticleBuffer__I__sjs_js_Object(prep0);
});
export { $e_createParticleBufferV1 as createParticleBufferV1 };
$s_Lexample_app__main__AT__V(new ($d_T.getArrayOf().constr)([]));
