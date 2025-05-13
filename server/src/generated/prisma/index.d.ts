
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model ShipmentCheckpoint
 * 
 */
export type ShipmentCheckpoint = $Result.DefaultSelection<Prisma.$ShipmentCheckpointPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  driver: 'driver',
  customer: 'customer'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VehicleStatus: {
  available: 'available',
  in_use: 'in_use',
  maintenance: 'maintenance'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const ShipmentStatus: {
  pending: 'pending',
  processing: 'processing',
  in_transit: 'in_transit',
  delivered: 'delivered',
  cancelled: 'cancelled'
};

export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus]


export const CheckpointStatus: {
  pending: 'pending',
  reached: 'reached'
};

export type CheckpointStatus = (typeof CheckpointStatus)[keyof typeof CheckpointStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type ShipmentStatus = $Enums.ShipmentStatus

export const ShipmentStatus: typeof $Enums.ShipmentStatus

export type CheckpointStatus = $Enums.CheckpointStatus

export const CheckpointStatus: typeof $Enums.CheckpointStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs>;

  /**
   * `prisma.shipmentCheckpoint`: Exposes CRUD operations for the **ShipmentCheckpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentCheckpoints
    * const shipmentCheckpoints = await prisma.shipmentCheckpoint.findMany()
    * ```
    */
  get shipmentCheckpoint(): Prisma.ShipmentCheckpointDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    Shipment: 'Shipment',
    ShipmentCheckpoint: 'ShipmentCheckpoint',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "vehicle" | "shipment" | "shipmentCheckpoint" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      ShipmentCheckpoint: {
        payload: Prisma.$ShipmentCheckpointPayload<ExtArgs>
        fields: Prisma.ShipmentCheckpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentCheckpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentCheckpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload>
          }
          findFirst: {
            args: Prisma.ShipmentCheckpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentCheckpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload>
          }
          findMany: {
            args: Prisma.ShipmentCheckpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload>[]
          }
          create: {
            args: Prisma.ShipmentCheckpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload>
          }
          createMany: {
            args: Prisma.ShipmentCheckpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCheckpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload>[]
          }
          delete: {
            args: Prisma.ShipmentCheckpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload>
          }
          update: {
            args: Prisma.ShipmentCheckpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentCheckpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentCheckpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentCheckpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentCheckpointPayload>
          }
          aggregate: {
            args: Prisma.ShipmentCheckpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentCheckpoint>
          }
          groupBy: {
            args: Prisma.ShipmentCheckpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCheckpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCheckpointCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCheckpointCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    shipments: number
    deliveries: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | UserCountOutputTypeCountShipmentsArgs
    deliveries?: boolean | UserCountOutputTypeCountDeliveriesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    checkpoints: number
    notifications: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkpoints?: boolean | ShipmentCountOutputTypeCountCheckpointsArgs
    notifications?: boolean | ShipmentCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountCheckpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentCheckpointWhereInput
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shipments?: boolean | User$shipmentsArgs<ExtArgs>
    deliveries?: boolean | User$deliveriesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | User$shipmentsArgs<ExtArgs>
    deliveries?: boolean | User$deliveriesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
      deliveries: Prisma.$ShipmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipments<T extends User$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany"> | Null>
    deliveries<T extends User$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, User$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.shipments
   */
  export type User$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.deliveries
   */
  export type User$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    id: number | null
    capacity: Decimal | null
  }

  export type VehicleSumAggregateOutputType = {
    id: number | null
    capacity: Decimal | null
  }

  export type VehicleMinAggregateOutputType = {
    id: number | null
    plateNumber: string | null
    model: string | null
    capacity: Decimal | null
    currentLocation: string | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: number | null
    plateNumber: string | null
    model: string | null
    capacity: Decimal | null
    currentLocation: string | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    plateNumber: number
    model: number
    capacity: number
    currentLocation: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type VehicleSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    plateNumber?: true
    model?: true
    capacity?: true
    currentLocation?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    plateNumber?: true
    model?: true
    capacity?: true
    currentLocation?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    plateNumber?: true
    model?: true
    capacity?: true
    currentLocation?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: number
    plateNumber: string
    model: string | null
    capacity: Decimal | null
    currentLocation: string | null
    status: $Enums.VehicleStatus
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    model?: boolean
    capacity?: boolean
    currentLocation?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    model?: boolean
    capacity?: boolean
    currentLocation?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    plateNumber?: boolean
    model?: boolean
    capacity?: boolean
    currentLocation?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plateNumber: string
      model: string | null
      capacity: Prisma.Decimal | null
      currentLocation: string | null
      status: $Enums.VehicleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'Int'>
    readonly plateNumber: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly capacity: FieldRef<"Vehicle", 'Decimal'>
    readonly currentLocation: FieldRef<"Vehicle", 'String'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    customerId: number | null
    driverId: number | null
  }

  export type ShipmentSumAggregateOutputType = {
    id: number | null
    weight: number | null
    customerId: number | null
    driverId: number | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: number | null
    trackingNumber: string | null
    name: string | null
    weight: number | null
    category: string | null
    status: $Enums.ShipmentStatus | null
    estimatedDeliveryDate: Date | null
    customerId: number | null
    driverId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: number | null
    trackingNumber: string | null
    name: string | null
    weight: number | null
    category: string | null
    status: $Enums.ShipmentStatus | null
    estimatedDeliveryDate: Date | null
    customerId: number | null
    driverId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    trackingNumber: number
    name: number
    weight: number
    category: number
    status: number
    fromLocation: number
    toLocation: number
    estimatedDeliveryDate: number
    customerId: number
    driverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    id?: true
    weight?: true
    customerId?: true
    driverId?: true
  }

  export type ShipmentSumAggregateInputType = {
    id?: true
    weight?: true
    customerId?: true
    driverId?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    trackingNumber?: true
    name?: true
    weight?: true
    category?: true
    status?: true
    estimatedDeliveryDate?: true
    customerId?: true
    driverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    trackingNumber?: true
    name?: true
    weight?: true
    category?: true
    status?: true
    estimatedDeliveryDate?: true
    customerId?: true
    driverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    trackingNumber?: true
    name?: true
    weight?: true
    category?: true
    status?: true
    fromLocation?: true
    toLocation?: true
    estimatedDeliveryDate?: true
    customerId?: true
    driverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status: $Enums.ShipmentStatus
    fromLocation: JsonValue
    toLocation: JsonValue
    estimatedDeliveryDate: Date
    customerId: number
    driverId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    name?: boolean
    weight?: boolean
    category?: boolean
    status?: boolean
    fromLocation?: boolean
    toLocation?: boolean
    estimatedDeliveryDate?: boolean
    customerId?: boolean
    driverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
    checkpoints?: boolean | Shipment$checkpointsArgs<ExtArgs>
    notifications?: boolean | Shipment$notificationsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    name?: boolean
    weight?: boolean
    category?: boolean
    status?: boolean
    fromLocation?: boolean
    toLocation?: boolean
    estimatedDeliveryDate?: boolean
    customerId?: boolean
    driverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    trackingNumber?: boolean
    name?: boolean
    weight?: boolean
    category?: boolean
    status?: boolean
    fromLocation?: boolean
    toLocation?: boolean
    estimatedDeliveryDate?: boolean
    customerId?: boolean
    driverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
    checkpoints?: boolean | Shipment$checkpointsArgs<ExtArgs>
    notifications?: boolean | Shipment$notificationsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      driver: Prisma.$UserPayload<ExtArgs> | null
      checkpoints: Prisma.$ShipmentCheckpointPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trackingNumber: string
      name: string
      weight: number
      category: string
      status: $Enums.ShipmentStatus
      fromLocation: Prisma.JsonValue
      toLocation: Prisma.JsonValue
      estimatedDeliveryDate: Date
      customerId: number
      driverId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    driver<T extends Shipment$driverArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$driverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    checkpoints<T extends Shipment$checkpointsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$checkpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends Shipment$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */ 
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'Int'>
    readonly trackingNumber: FieldRef<"Shipment", 'String'>
    readonly name: FieldRef<"Shipment", 'String'>
    readonly weight: FieldRef<"Shipment", 'Float'>
    readonly category: FieldRef<"Shipment", 'String'>
    readonly status: FieldRef<"Shipment", 'ShipmentStatus'>
    readonly fromLocation: FieldRef<"Shipment", 'Json'>
    readonly toLocation: FieldRef<"Shipment", 'Json'>
    readonly estimatedDeliveryDate: FieldRef<"Shipment", 'DateTime'>
    readonly customerId: FieldRef<"Shipment", 'Int'>
    readonly driverId: FieldRef<"Shipment", 'Int'>
    readonly createdAt: FieldRef<"Shipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Shipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
  }

  /**
   * Shipment.driver
   */
  export type Shipment$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Shipment.checkpoints
   */
  export type Shipment$checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    where?: ShipmentCheckpointWhereInput
    orderBy?: ShipmentCheckpointOrderByWithRelationInput | ShipmentCheckpointOrderByWithRelationInput[]
    cursor?: ShipmentCheckpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentCheckpointScalarFieldEnum | ShipmentCheckpointScalarFieldEnum[]
  }

  /**
   * Shipment.notifications
   */
  export type Shipment$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentCheckpoint
   */

  export type AggregateShipmentCheckpoint = {
    _count: ShipmentCheckpointCountAggregateOutputType | null
    _avg: ShipmentCheckpointAvgAggregateOutputType | null
    _sum: ShipmentCheckpointSumAggregateOutputType | null
    _min: ShipmentCheckpointMinAggregateOutputType | null
    _max: ShipmentCheckpointMaxAggregateOutputType | null
  }

  export type ShipmentCheckpointAvgAggregateOutputType = {
    id: number | null
    shipmentId: number | null
    sequenceNumber: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type ShipmentCheckpointSumAggregateOutputType = {
    id: number | null
    shipmentId: number | null
    sequenceNumber: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type ShipmentCheckpointMinAggregateOutputType = {
    id: number | null
    shipmentId: number | null
    sequenceNumber: number | null
    location: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    status: $Enums.CheckpointStatus | null
    reachedAt: Date | null
  }

  export type ShipmentCheckpointMaxAggregateOutputType = {
    id: number | null
    shipmentId: number | null
    sequenceNumber: number | null
    location: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    status: $Enums.CheckpointStatus | null
    reachedAt: Date | null
  }

  export type ShipmentCheckpointCountAggregateOutputType = {
    id: number
    shipmentId: number
    sequenceNumber: number
    location: number
    latitude: number
    longitude: number
    status: number
    reachedAt: number
    _all: number
  }


  export type ShipmentCheckpointAvgAggregateInputType = {
    id?: true
    shipmentId?: true
    sequenceNumber?: true
    latitude?: true
    longitude?: true
  }

  export type ShipmentCheckpointSumAggregateInputType = {
    id?: true
    shipmentId?: true
    sequenceNumber?: true
    latitude?: true
    longitude?: true
  }

  export type ShipmentCheckpointMinAggregateInputType = {
    id?: true
    shipmentId?: true
    sequenceNumber?: true
    location?: true
    latitude?: true
    longitude?: true
    status?: true
    reachedAt?: true
  }

  export type ShipmentCheckpointMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    sequenceNumber?: true
    location?: true
    latitude?: true
    longitude?: true
    status?: true
    reachedAt?: true
  }

  export type ShipmentCheckpointCountAggregateInputType = {
    id?: true
    shipmentId?: true
    sequenceNumber?: true
    location?: true
    latitude?: true
    longitude?: true
    status?: true
    reachedAt?: true
    _all?: true
  }

  export type ShipmentCheckpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentCheckpoint to aggregate.
     */
    where?: ShipmentCheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentCheckpoints to fetch.
     */
    orderBy?: ShipmentCheckpointOrderByWithRelationInput | ShipmentCheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentCheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentCheckpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentCheckpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentCheckpoints
    **/
    _count?: true | ShipmentCheckpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentCheckpointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentCheckpointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentCheckpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentCheckpointMaxAggregateInputType
  }

  export type GetShipmentCheckpointAggregateType<T extends ShipmentCheckpointAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentCheckpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentCheckpoint[P]>
      : GetScalarType<T[P], AggregateShipmentCheckpoint[P]>
  }




  export type ShipmentCheckpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentCheckpointWhereInput
    orderBy?: ShipmentCheckpointOrderByWithAggregationInput | ShipmentCheckpointOrderByWithAggregationInput[]
    by: ShipmentCheckpointScalarFieldEnum[] | ShipmentCheckpointScalarFieldEnum
    having?: ShipmentCheckpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCheckpointCountAggregateInputType | true
    _avg?: ShipmentCheckpointAvgAggregateInputType
    _sum?: ShipmentCheckpointSumAggregateInputType
    _min?: ShipmentCheckpointMinAggregateInputType
    _max?: ShipmentCheckpointMaxAggregateInputType
  }

  export type ShipmentCheckpointGroupByOutputType = {
    id: number
    shipmentId: number
    sequenceNumber: number
    location: string
    latitude: Decimal | null
    longitude: Decimal | null
    status: $Enums.CheckpointStatus
    reachedAt: Date | null
    _count: ShipmentCheckpointCountAggregateOutputType | null
    _avg: ShipmentCheckpointAvgAggregateOutputType | null
    _sum: ShipmentCheckpointSumAggregateOutputType | null
    _min: ShipmentCheckpointMinAggregateOutputType | null
    _max: ShipmentCheckpointMaxAggregateOutputType | null
  }

  type GetShipmentCheckpointGroupByPayload<T extends ShipmentCheckpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentCheckpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentCheckpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentCheckpointGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentCheckpointGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentCheckpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    sequenceNumber?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    reachedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentCheckpoint"]>

  export type ShipmentCheckpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    sequenceNumber?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    reachedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentCheckpoint"]>

  export type ShipmentCheckpointSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    sequenceNumber?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    reachedAt?: boolean
  }

  export type ShipmentCheckpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type ShipmentCheckpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $ShipmentCheckpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentCheckpoint"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shipmentId: number
      sequenceNumber: number
      location: string
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      status: $Enums.CheckpointStatus
      reachedAt: Date | null
    }, ExtArgs["result"]["shipmentCheckpoint"]>
    composites: {}
  }

  type ShipmentCheckpointGetPayload<S extends boolean | null | undefined | ShipmentCheckpointDefaultArgs> = $Result.GetResult<Prisma.$ShipmentCheckpointPayload, S>

  type ShipmentCheckpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShipmentCheckpointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShipmentCheckpointCountAggregateInputType | true
    }

  export interface ShipmentCheckpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentCheckpoint'], meta: { name: 'ShipmentCheckpoint' } }
    /**
     * Find zero or one ShipmentCheckpoint that matches the filter.
     * @param {ShipmentCheckpointFindUniqueArgs} args - Arguments to find a ShipmentCheckpoint
     * @example
     * // Get one ShipmentCheckpoint
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentCheckpointFindUniqueArgs>(args: SelectSubset<T, ShipmentCheckpointFindUniqueArgs<ExtArgs>>): Prisma__ShipmentCheckpointClient<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShipmentCheckpoint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShipmentCheckpointFindUniqueOrThrowArgs} args - Arguments to find a ShipmentCheckpoint
     * @example
     * // Get one ShipmentCheckpoint
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentCheckpointFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentCheckpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentCheckpointClient<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShipmentCheckpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCheckpointFindFirstArgs} args - Arguments to find a ShipmentCheckpoint
     * @example
     * // Get one ShipmentCheckpoint
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentCheckpointFindFirstArgs>(args?: SelectSubset<T, ShipmentCheckpointFindFirstArgs<ExtArgs>>): Prisma__ShipmentCheckpointClient<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShipmentCheckpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCheckpointFindFirstOrThrowArgs} args - Arguments to find a ShipmentCheckpoint
     * @example
     * // Get one ShipmentCheckpoint
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentCheckpointFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentCheckpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentCheckpointClient<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShipmentCheckpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCheckpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentCheckpoints
     * const shipmentCheckpoints = await prisma.shipmentCheckpoint.findMany()
     * 
     * // Get first 10 ShipmentCheckpoints
     * const shipmentCheckpoints = await prisma.shipmentCheckpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentCheckpointWithIdOnly = await prisma.shipmentCheckpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentCheckpointFindManyArgs>(args?: SelectSubset<T, ShipmentCheckpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShipmentCheckpoint.
     * @param {ShipmentCheckpointCreateArgs} args - Arguments to create a ShipmentCheckpoint.
     * @example
     * // Create one ShipmentCheckpoint
     * const ShipmentCheckpoint = await prisma.shipmentCheckpoint.create({
     *   data: {
     *     // ... data to create a ShipmentCheckpoint
     *   }
     * })
     * 
     */
    create<T extends ShipmentCheckpointCreateArgs>(args: SelectSubset<T, ShipmentCheckpointCreateArgs<ExtArgs>>): Prisma__ShipmentCheckpointClient<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShipmentCheckpoints.
     * @param {ShipmentCheckpointCreateManyArgs} args - Arguments to create many ShipmentCheckpoints.
     * @example
     * // Create many ShipmentCheckpoints
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCheckpointCreateManyArgs>(args?: SelectSubset<T, ShipmentCheckpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentCheckpoints and returns the data saved in the database.
     * @param {ShipmentCheckpointCreateManyAndReturnArgs} args - Arguments to create many ShipmentCheckpoints.
     * @example
     * // Create many ShipmentCheckpoints
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentCheckpoints and only return the `id`
     * const shipmentCheckpointWithIdOnly = await prisma.shipmentCheckpoint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCheckpointCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCheckpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShipmentCheckpoint.
     * @param {ShipmentCheckpointDeleteArgs} args - Arguments to delete one ShipmentCheckpoint.
     * @example
     * // Delete one ShipmentCheckpoint
     * const ShipmentCheckpoint = await prisma.shipmentCheckpoint.delete({
     *   where: {
     *     // ... filter to delete one ShipmentCheckpoint
     *   }
     * })
     * 
     */
    delete<T extends ShipmentCheckpointDeleteArgs>(args: SelectSubset<T, ShipmentCheckpointDeleteArgs<ExtArgs>>): Prisma__ShipmentCheckpointClient<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShipmentCheckpoint.
     * @param {ShipmentCheckpointUpdateArgs} args - Arguments to update one ShipmentCheckpoint.
     * @example
     * // Update one ShipmentCheckpoint
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentCheckpointUpdateArgs>(args: SelectSubset<T, ShipmentCheckpointUpdateArgs<ExtArgs>>): Prisma__ShipmentCheckpointClient<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShipmentCheckpoints.
     * @param {ShipmentCheckpointDeleteManyArgs} args - Arguments to filter ShipmentCheckpoints to delete.
     * @example
     * // Delete a few ShipmentCheckpoints
     * const { count } = await prisma.shipmentCheckpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentCheckpointDeleteManyArgs>(args?: SelectSubset<T, ShipmentCheckpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentCheckpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCheckpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentCheckpoints
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentCheckpointUpdateManyArgs>(args: SelectSubset<T, ShipmentCheckpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShipmentCheckpoint.
     * @param {ShipmentCheckpointUpsertArgs} args - Arguments to update or create a ShipmentCheckpoint.
     * @example
     * // Update or create a ShipmentCheckpoint
     * const shipmentCheckpoint = await prisma.shipmentCheckpoint.upsert({
     *   create: {
     *     // ... data to create a ShipmentCheckpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentCheckpoint we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentCheckpointUpsertArgs>(args: SelectSubset<T, ShipmentCheckpointUpsertArgs<ExtArgs>>): Prisma__ShipmentCheckpointClient<$Result.GetResult<Prisma.$ShipmentCheckpointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShipmentCheckpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCheckpointCountArgs} args - Arguments to filter ShipmentCheckpoints to count.
     * @example
     * // Count the number of ShipmentCheckpoints
     * const count = await prisma.shipmentCheckpoint.count({
     *   where: {
     *     // ... the filter for the ShipmentCheckpoints we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCheckpointCountArgs>(
      args?: Subset<T, ShipmentCheckpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCheckpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentCheckpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCheckpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentCheckpointAggregateArgs>(args: Subset<T, ShipmentCheckpointAggregateArgs>): Prisma.PrismaPromise<GetShipmentCheckpointAggregateType<T>>

    /**
     * Group by ShipmentCheckpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCheckpointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentCheckpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentCheckpointGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentCheckpointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentCheckpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentCheckpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentCheckpoint model
   */
  readonly fields: ShipmentCheckpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentCheckpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentCheckpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentCheckpoint model
   */ 
  interface ShipmentCheckpointFieldRefs {
    readonly id: FieldRef<"ShipmentCheckpoint", 'Int'>
    readonly shipmentId: FieldRef<"ShipmentCheckpoint", 'Int'>
    readonly sequenceNumber: FieldRef<"ShipmentCheckpoint", 'Int'>
    readonly location: FieldRef<"ShipmentCheckpoint", 'String'>
    readonly latitude: FieldRef<"ShipmentCheckpoint", 'Decimal'>
    readonly longitude: FieldRef<"ShipmentCheckpoint", 'Decimal'>
    readonly status: FieldRef<"ShipmentCheckpoint", 'CheckpointStatus'>
    readonly reachedAt: FieldRef<"ShipmentCheckpoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentCheckpoint findUnique
   */
  export type ShipmentCheckpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentCheckpoint to fetch.
     */
    where: ShipmentCheckpointWhereUniqueInput
  }

  /**
   * ShipmentCheckpoint findUniqueOrThrow
   */
  export type ShipmentCheckpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentCheckpoint to fetch.
     */
    where: ShipmentCheckpointWhereUniqueInput
  }

  /**
   * ShipmentCheckpoint findFirst
   */
  export type ShipmentCheckpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentCheckpoint to fetch.
     */
    where?: ShipmentCheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentCheckpoints to fetch.
     */
    orderBy?: ShipmentCheckpointOrderByWithRelationInput | ShipmentCheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentCheckpoints.
     */
    cursor?: ShipmentCheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentCheckpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentCheckpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentCheckpoints.
     */
    distinct?: ShipmentCheckpointScalarFieldEnum | ShipmentCheckpointScalarFieldEnum[]
  }

  /**
   * ShipmentCheckpoint findFirstOrThrow
   */
  export type ShipmentCheckpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentCheckpoint to fetch.
     */
    where?: ShipmentCheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentCheckpoints to fetch.
     */
    orderBy?: ShipmentCheckpointOrderByWithRelationInput | ShipmentCheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentCheckpoints.
     */
    cursor?: ShipmentCheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentCheckpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentCheckpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentCheckpoints.
     */
    distinct?: ShipmentCheckpointScalarFieldEnum | ShipmentCheckpointScalarFieldEnum[]
  }

  /**
   * ShipmentCheckpoint findMany
   */
  export type ShipmentCheckpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentCheckpoints to fetch.
     */
    where?: ShipmentCheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentCheckpoints to fetch.
     */
    orderBy?: ShipmentCheckpointOrderByWithRelationInput | ShipmentCheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentCheckpoints.
     */
    cursor?: ShipmentCheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentCheckpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentCheckpoints.
     */
    skip?: number
    distinct?: ShipmentCheckpointScalarFieldEnum | ShipmentCheckpointScalarFieldEnum[]
  }

  /**
   * ShipmentCheckpoint create
   */
  export type ShipmentCheckpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentCheckpoint.
     */
    data: XOR<ShipmentCheckpointCreateInput, ShipmentCheckpointUncheckedCreateInput>
  }

  /**
   * ShipmentCheckpoint createMany
   */
  export type ShipmentCheckpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentCheckpoints.
     */
    data: ShipmentCheckpointCreateManyInput | ShipmentCheckpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentCheckpoint createManyAndReturn
   */
  export type ShipmentCheckpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShipmentCheckpoints.
     */
    data: ShipmentCheckpointCreateManyInput | ShipmentCheckpointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentCheckpoint update
   */
  export type ShipmentCheckpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentCheckpoint.
     */
    data: XOR<ShipmentCheckpointUpdateInput, ShipmentCheckpointUncheckedUpdateInput>
    /**
     * Choose, which ShipmentCheckpoint to update.
     */
    where: ShipmentCheckpointWhereUniqueInput
  }

  /**
   * ShipmentCheckpoint updateMany
   */
  export type ShipmentCheckpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentCheckpoints.
     */
    data: XOR<ShipmentCheckpointUpdateManyMutationInput, ShipmentCheckpointUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentCheckpoints to update
     */
    where?: ShipmentCheckpointWhereInput
  }

  /**
   * ShipmentCheckpoint upsert
   */
  export type ShipmentCheckpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentCheckpoint to update in case it exists.
     */
    where: ShipmentCheckpointWhereUniqueInput
    /**
     * In case the ShipmentCheckpoint found by the `where` argument doesn't exist, create a new ShipmentCheckpoint with this data.
     */
    create: XOR<ShipmentCheckpointCreateInput, ShipmentCheckpointUncheckedCreateInput>
    /**
     * In case the ShipmentCheckpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentCheckpointUpdateInput, ShipmentCheckpointUncheckedUpdateInput>
  }

  /**
   * ShipmentCheckpoint delete
   */
  export type ShipmentCheckpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
    /**
     * Filter which ShipmentCheckpoint to delete.
     */
    where: ShipmentCheckpointWhereUniqueInput
  }

  /**
   * ShipmentCheckpoint deleteMany
   */
  export type ShipmentCheckpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentCheckpoints to delete
     */
    where?: ShipmentCheckpointWhereInput
  }

  /**
   * ShipmentCheckpoint without action
   */
  export type ShipmentCheckpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCheckpoint
     */
    select?: ShipmentCheckpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentCheckpointInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    shipmentId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    shipmentId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    userId: number | null
    shipmentId: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    userId: number | null
    shipmentId: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    message: number
    isRead: number
    createdAt: number
    userId: number
    shipmentId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    shipmentId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    shipmentId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    message?: true
    isRead?: true
    createdAt?: true
    userId?: true
    shipmentId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    message?: true
    isRead?: true
    createdAt?: true
    userId?: true
    shipmentId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    message?: true
    isRead?: true
    createdAt?: true
    userId?: true
    shipmentId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    message: string
    isRead: boolean
    createdAt: Date
    userId: number
    shipmentId: number | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
    shipmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shipment?: boolean | Notification$shipmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
    shipmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shipment?: boolean | Notification$shipmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
    shipmentId?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shipment?: boolean | Notification$shipmentArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shipment?: boolean | Notification$shipmentArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shipment: Prisma.$ShipmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      isRead: boolean
      createdAt: Date
      userId: number
      shipmentId: number | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    shipment<T extends Notification$shipmentArgs<ExtArgs> = {}>(args?: Subset<T, Notification$shipmentArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly shipmentId: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification.shipment
   */
  export type Notification$shipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    plateNumber: 'plateNumber',
    model: 'model',
    capacity: 'capacity',
    currentLocation: 'currentLocation',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    trackingNumber: 'trackingNumber',
    name: 'name',
    weight: 'weight',
    category: 'category',
    status: 'status',
    fromLocation: 'fromLocation',
    toLocation: 'toLocation',
    estimatedDeliveryDate: 'estimatedDeliveryDate',
    customerId: 'customerId',
    driverId: 'driverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const ShipmentCheckpointScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    sequenceNumber: 'sequenceNumber',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    reachedAt: 'reachedAt'
  };

  export type ShipmentCheckpointScalarFieldEnum = (typeof ShipmentCheckpointScalarFieldEnum)[keyof typeof ShipmentCheckpointScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt',
    userId: 'userId',
    shipmentId: 'shipmentId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'VehicleStatus[]'
   */
  export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ShipmentStatus'
   */
  export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    


  /**
   * Reference to a field of type 'ShipmentStatus[]'
   */
  export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'CheckpointStatus'
   */
  export type EnumCheckpointStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckpointStatus'>
    


  /**
   * Reference to a field of type 'CheckpointStatus[]'
   */
  export type ListEnumCheckpointStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckpointStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    shipments?: ShipmentListRelationFilter
    deliveries?: ShipmentListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shipments?: ShipmentOrderByRelationAggregateInput
    deliveries?: ShipmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    shipments?: ShipmentListRelationFilter
    deliveries?: ShipmentListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    plateNumber?: StringFilter<"Vehicle"> | string
    model?: StringNullableFilter<"Vehicle"> | string | null
    capacity?: DecimalNullableFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    currentLocation?: StringNullableFilter<"Vehicle"> | string | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    model?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    currentLocation?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    plateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    model?: StringNullableFilter<"Vehicle"> | string | null
    capacity?: DecimalNullableFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    currentLocation?: StringNullableFilter<"Vehicle"> | string | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }, "id" | "plateNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    model?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    currentLocation?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicle"> | number
    plateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    capacity?: DecimalNullableWithAggregatesFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    currentLocation?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    status?: EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: IntFilter<"Shipment"> | number
    trackingNumber?: StringFilter<"Shipment"> | string
    name?: StringFilter<"Shipment"> | string
    weight?: FloatFilter<"Shipment"> | number
    category?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    fromLocation?: JsonFilter<"Shipment">
    toLocation?: JsonFilter<"Shipment">
    estimatedDeliveryDate?: DateTimeFilter<"Shipment"> | Date | string
    customerId?: IntFilter<"Shipment"> | number
    driverId?: IntNullableFilter<"Shipment"> | number | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    customer?: XOR<UserRelationFilter, UserWhereInput>
    driver?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    checkpoints?: ShipmentCheckpointListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    fromLocation?: SortOrder
    toLocation?: SortOrder
    estimatedDeliveryDate?: SortOrder
    customerId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: UserOrderByWithRelationInput
    driver?: UserOrderByWithRelationInput
    checkpoints?: ShipmentCheckpointOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trackingNumber?: string
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    name?: StringFilter<"Shipment"> | string
    weight?: FloatFilter<"Shipment"> | number
    category?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    fromLocation?: JsonFilter<"Shipment">
    toLocation?: JsonFilter<"Shipment">
    estimatedDeliveryDate?: DateTimeFilter<"Shipment"> | Date | string
    customerId?: IntFilter<"Shipment"> | number
    driverId?: IntNullableFilter<"Shipment"> | number | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    customer?: XOR<UserRelationFilter, UserWhereInput>
    driver?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    checkpoints?: ShipmentCheckpointListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "trackingNumber">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    fromLocation?: SortOrder
    toLocation?: SortOrder
    estimatedDeliveryDate?: SortOrder
    customerId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shipment"> | number
    trackingNumber?: StringWithAggregatesFilter<"Shipment"> | string
    name?: StringWithAggregatesFilter<"Shipment"> | string
    weight?: FloatWithAggregatesFilter<"Shipment"> | number
    category?: StringWithAggregatesFilter<"Shipment"> | string
    status?: EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
    fromLocation?: JsonWithAggregatesFilter<"Shipment">
    toLocation?: JsonWithAggregatesFilter<"Shipment">
    estimatedDeliveryDate?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    customerId?: IntWithAggregatesFilter<"Shipment"> | number
    driverId?: IntNullableWithAggregatesFilter<"Shipment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
  }

  export type ShipmentCheckpointWhereInput = {
    AND?: ShipmentCheckpointWhereInput | ShipmentCheckpointWhereInput[]
    OR?: ShipmentCheckpointWhereInput[]
    NOT?: ShipmentCheckpointWhereInput | ShipmentCheckpointWhereInput[]
    id?: IntFilter<"ShipmentCheckpoint"> | number
    shipmentId?: IntFilter<"ShipmentCheckpoint"> | number
    sequenceNumber?: IntFilter<"ShipmentCheckpoint"> | number
    location?: StringFilter<"ShipmentCheckpoint"> | string
    latitude?: DecimalNullableFilter<"ShipmentCheckpoint"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ShipmentCheckpoint"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFilter<"ShipmentCheckpoint"> | $Enums.CheckpointStatus
    reachedAt?: DateTimeNullableFilter<"ShipmentCheckpoint"> | Date | string | null
    shipment?: XOR<ShipmentRelationFilter, ShipmentWhereInput>
  }

  export type ShipmentCheckpointOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequenceNumber?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    status?: SortOrder
    reachedAt?: SortOrderInput | SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type ShipmentCheckpointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShipmentCheckpointWhereInput | ShipmentCheckpointWhereInput[]
    OR?: ShipmentCheckpointWhereInput[]
    NOT?: ShipmentCheckpointWhereInput | ShipmentCheckpointWhereInput[]
    shipmentId?: IntFilter<"ShipmentCheckpoint"> | number
    sequenceNumber?: IntFilter<"ShipmentCheckpoint"> | number
    location?: StringFilter<"ShipmentCheckpoint"> | string
    latitude?: DecimalNullableFilter<"ShipmentCheckpoint"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ShipmentCheckpoint"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFilter<"ShipmentCheckpoint"> | $Enums.CheckpointStatus
    reachedAt?: DateTimeNullableFilter<"ShipmentCheckpoint"> | Date | string | null
    shipment?: XOR<ShipmentRelationFilter, ShipmentWhereInput>
  }, "id">

  export type ShipmentCheckpointOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequenceNumber?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    status?: SortOrder
    reachedAt?: SortOrderInput | SortOrder
    _count?: ShipmentCheckpointCountOrderByAggregateInput
    _avg?: ShipmentCheckpointAvgOrderByAggregateInput
    _max?: ShipmentCheckpointMaxOrderByAggregateInput
    _min?: ShipmentCheckpointMinOrderByAggregateInput
    _sum?: ShipmentCheckpointSumOrderByAggregateInput
  }

  export type ShipmentCheckpointScalarWhereWithAggregatesInput = {
    AND?: ShipmentCheckpointScalarWhereWithAggregatesInput | ShipmentCheckpointScalarWhereWithAggregatesInput[]
    OR?: ShipmentCheckpointScalarWhereWithAggregatesInput[]
    NOT?: ShipmentCheckpointScalarWhereWithAggregatesInput | ShipmentCheckpointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShipmentCheckpoint"> | number
    shipmentId?: IntWithAggregatesFilter<"ShipmentCheckpoint"> | number
    sequenceNumber?: IntWithAggregatesFilter<"ShipmentCheckpoint"> | number
    location?: StringWithAggregatesFilter<"ShipmentCheckpoint"> | string
    latitude?: DecimalNullableWithAggregatesFilter<"ShipmentCheckpoint"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"ShipmentCheckpoint"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusWithAggregatesFilter<"ShipmentCheckpoint"> | $Enums.CheckpointStatus
    reachedAt?: DateTimeNullableWithAggregatesFilter<"ShipmentCheckpoint"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
    shipmentId?: IntNullableFilter<"Notification"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    shipment?: XOR<ShipmentNullableRelationFilter, ShipmentWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
    shipmentId?: IntNullableFilter<"Notification"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    shipment?: XOR<ShipmentNullableRelationFilter, ShipmentWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    userId?: IntWithAggregatesFilter<"Notification"> | number
    shipmentId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutCustomerInput
    deliveries?: ShipmentCreateNestedManyWithoutDriverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    deliveries?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutCustomerNestedInput
    deliveries?: ShipmentUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    deliveries?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    plateNumber: string
    model?: string | null
    capacity?: Decimal | DecimalJsLike | number | string | null
    currentLocation?: string | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUncheckedCreateInput = {
    id?: number
    plateNumber: string
    model?: string | null
    capacity?: Decimal | DecimalJsLike | number | string | null
    currentLocation?: string | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateManyInput = {
    id?: number
    plateNumber: string
    model?: string | null
    capacity?: Decimal | DecimalJsLike | number | string | null
    currentLocation?: string | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    plateNumber?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plateNumber?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateInput = {
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutShipmentsInput
    driver?: UserCreateNestedOneWithoutDeliveriesInput
    checkpoints?: ShipmentCheckpointCreateNestedManyWithoutShipmentInput
    notifications?: NotificationCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    customerId: number
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkpoints?: ShipmentCheckpointUncheckedCreateNestedManyWithoutShipmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutShipmentsNestedInput
    driver?: UserUpdateOneWithoutDeliveriesNestedInput
    checkpoints?: ShipmentCheckpointUpdateManyWithoutShipmentNestedInput
    notifications?: NotificationUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoints?: ShipmentCheckpointUncheckedUpdateManyWithoutShipmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    id?: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    customerId: number
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentUpdateManyMutationInput = {
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCheckpointCreateInput = {
    sequenceNumber: number
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CheckpointStatus
    reachedAt?: Date | string | null
    shipment: ShipmentCreateNestedOneWithoutCheckpointsInput
  }

  export type ShipmentCheckpointUncheckedCreateInput = {
    id?: number
    shipmentId: number
    sequenceNumber: number
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CheckpointStatus
    reachedAt?: Date | string | null
  }

  export type ShipmentCheckpointUpdateInput = {
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFieldUpdateOperationsInput | $Enums.CheckpointStatus
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipment?: ShipmentUpdateOneRequiredWithoutCheckpointsNestedInput
  }

  export type ShipmentCheckpointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shipmentId?: IntFieldUpdateOperationsInput | number
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFieldUpdateOperationsInput | $Enums.CheckpointStatus
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentCheckpointCreateManyInput = {
    id?: number
    shipmentId: number
    sequenceNumber: number
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CheckpointStatus
    reachedAt?: Date | string | null
  }

  export type ShipmentCheckpointUpdateManyMutationInput = {
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFieldUpdateOperationsInput | $Enums.CheckpointStatus
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentCheckpointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shipmentId?: IntFieldUpdateOperationsInput | number
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFieldUpdateOperationsInput | $Enums.CheckpointStatus
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    shipment?: ShipmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    message: string
    isRead?: boolean
    createdAt?: Date | string
    userId: number
    shipmentId?: number | null
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    shipment?: ShipmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    shipmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationCreateManyInput = {
    id?: number
    message: string
    isRead?: boolean
    createdAt?: Date | string
    userId: number
    shipmentId?: number | null
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    shipmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    currentLocation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    currentLocation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    currentLocation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShipmentCheckpointListRelationFilter = {
    every?: ShipmentCheckpointWhereInput
    some?: ShipmentCheckpointWhereInput
    none?: ShipmentCheckpointWhereInput
  }

  export type ShipmentCheckpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    fromLocation?: SortOrder
    toLocation?: SortOrder
    estimatedDeliveryDate?: SortOrder
    customerId?: SortOrder
    driverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    customerId?: SortOrder
    driverId?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    estimatedDeliveryDate?: SortOrder
    customerId?: SortOrder
    driverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    category?: SortOrder
    status?: SortOrder
    estimatedDeliveryDate?: SortOrder
    customerId?: SortOrder
    driverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    customerId?: SortOrder
    driverId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCheckpointStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckpointStatus | EnumCheckpointStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckpointStatus[] | ListEnumCheckpointStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckpointStatus[] | ListEnumCheckpointStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckpointStatusFilter<$PrismaModel> | $Enums.CheckpointStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ShipmentRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type ShipmentCheckpointCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequenceNumber?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    reachedAt?: SortOrder
  }

  export type ShipmentCheckpointAvgOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequenceNumber?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ShipmentCheckpointMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequenceNumber?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    reachedAt?: SortOrder
  }

  export type ShipmentCheckpointMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequenceNumber?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    reachedAt?: SortOrder
  }

  export type ShipmentCheckpointSumOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    sequenceNumber?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumCheckpointStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckpointStatus | EnumCheckpointStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckpointStatus[] | ListEnumCheckpointStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckpointStatus[] | ListEnumCheckpointStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckpointStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckpointStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckpointStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckpointStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ShipmentNullableRelationFilter = {
    is?: ShipmentWhereInput | null
    isNot?: ShipmentWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shipmentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ShipmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutDriverInput = {
    create?: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput> | ShipmentCreateWithoutDriverInput[] | ShipmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDriverInput | ShipmentCreateOrConnectWithoutDriverInput[]
    createMany?: ShipmentCreateManyDriverInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput> | ShipmentCreateWithoutDriverInput[] | ShipmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDriverInput | ShipmentCreateOrConnectWithoutDriverInput[]
    createMany?: ShipmentCreateManyDriverInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShipmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCustomerInput | ShipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCustomerInput | ShipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCustomerInput | ShipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutDriverNestedInput = {
    create?: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput> | ShipmentCreateWithoutDriverInput[] | ShipmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDriverInput | ShipmentCreateOrConnectWithoutDriverInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutDriverInput | ShipmentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: ShipmentCreateManyDriverInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutDriverInput | ShipmentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutDriverInput | ShipmentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShipmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCustomerInput | ShipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCustomerInput | ShipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCustomerInput | ShipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput> | ShipmentCreateWithoutDriverInput[] | ShipmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDriverInput | ShipmentCreateOrConnectWithoutDriverInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutDriverInput | ShipmentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: ShipmentCreateManyDriverInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutDriverInput | ShipmentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutDriverInput | ShipmentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type UserCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<UserCreateWithoutShipmentsInput, UserUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<UserCreateWithoutDeliveriesInput, UserUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveriesInput
    connect?: UserWhereUniqueInput
  }

  export type ShipmentCheckpointCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentCheckpointCreateWithoutShipmentInput, ShipmentCheckpointUncheckedCreateWithoutShipmentInput> | ShipmentCheckpointCreateWithoutShipmentInput[] | ShipmentCheckpointUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentCheckpointCreateOrConnectWithoutShipmentInput | ShipmentCheckpointCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentCheckpointCreateManyShipmentInputEnvelope
    connect?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutShipmentInput = {
    create?: XOR<NotificationCreateWithoutShipmentInput, NotificationUncheckedCreateWithoutShipmentInput> | NotificationCreateWithoutShipmentInput[] | NotificationUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutShipmentInput | NotificationCreateOrConnectWithoutShipmentInput[]
    createMany?: NotificationCreateManyShipmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ShipmentCheckpointUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentCheckpointCreateWithoutShipmentInput, ShipmentCheckpointUncheckedCreateWithoutShipmentInput> | ShipmentCheckpointCreateWithoutShipmentInput[] | ShipmentCheckpointUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentCheckpointCreateOrConnectWithoutShipmentInput | ShipmentCheckpointCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentCheckpointCreateManyShipmentInputEnvelope
    connect?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<NotificationCreateWithoutShipmentInput, NotificationUncheckedCreateWithoutShipmentInput> | NotificationCreateWithoutShipmentInput[] | NotificationUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutShipmentInput | NotificationCreateOrConnectWithoutShipmentInput[]
    createMany?: NotificationCreateManyShipmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus
  }

  export type UserUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<UserCreateWithoutShipmentsInput, UserUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsInput
    upsert?: UserUpsertWithoutShipmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShipmentsInput, UserUpdateWithoutShipmentsInput>, UserUncheckedUpdateWithoutShipmentsInput>
  }

  export type UserUpdateOneWithoutDeliveriesNestedInput = {
    create?: XOR<UserCreateWithoutDeliveriesInput, UserUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveriesInput
    upsert?: UserUpsertWithoutDeliveriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeliveriesInput, UserUpdateWithoutDeliveriesInput>, UserUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ShipmentCheckpointUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentCheckpointCreateWithoutShipmentInput, ShipmentCheckpointUncheckedCreateWithoutShipmentInput> | ShipmentCheckpointCreateWithoutShipmentInput[] | ShipmentCheckpointUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentCheckpointCreateOrConnectWithoutShipmentInput | ShipmentCheckpointCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentCheckpointUpsertWithWhereUniqueWithoutShipmentInput | ShipmentCheckpointUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentCheckpointCreateManyShipmentInputEnvelope
    set?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
    disconnect?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
    delete?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
    connect?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
    update?: ShipmentCheckpointUpdateWithWhereUniqueWithoutShipmentInput | ShipmentCheckpointUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentCheckpointUpdateManyWithWhereWithoutShipmentInput | ShipmentCheckpointUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentCheckpointScalarWhereInput | ShipmentCheckpointScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<NotificationCreateWithoutShipmentInput, NotificationUncheckedCreateWithoutShipmentInput> | NotificationCreateWithoutShipmentInput[] | NotificationUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutShipmentInput | NotificationCreateOrConnectWithoutShipmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutShipmentInput | NotificationUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: NotificationCreateManyShipmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutShipmentInput | NotificationUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutShipmentInput | NotificationUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShipmentCheckpointUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentCheckpointCreateWithoutShipmentInput, ShipmentCheckpointUncheckedCreateWithoutShipmentInput> | ShipmentCheckpointCreateWithoutShipmentInput[] | ShipmentCheckpointUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentCheckpointCreateOrConnectWithoutShipmentInput | ShipmentCheckpointCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentCheckpointUpsertWithWhereUniqueWithoutShipmentInput | ShipmentCheckpointUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentCheckpointCreateManyShipmentInputEnvelope
    set?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
    disconnect?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
    delete?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
    connect?: ShipmentCheckpointWhereUniqueInput | ShipmentCheckpointWhereUniqueInput[]
    update?: ShipmentCheckpointUpdateWithWhereUniqueWithoutShipmentInput | ShipmentCheckpointUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentCheckpointUpdateManyWithWhereWithoutShipmentInput | ShipmentCheckpointUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentCheckpointScalarWhereInput | ShipmentCheckpointScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<NotificationCreateWithoutShipmentInput, NotificationUncheckedCreateWithoutShipmentInput> | NotificationCreateWithoutShipmentInput[] | NotificationUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutShipmentInput | NotificationCreateOrConnectWithoutShipmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutShipmentInput | NotificationUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: NotificationCreateManyShipmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutShipmentInput | NotificationUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutShipmentInput | NotificationUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ShipmentCreateNestedOneWithoutCheckpointsInput = {
    create?: XOR<ShipmentCreateWithoutCheckpointsInput, ShipmentUncheckedCreateWithoutCheckpointsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutCheckpointsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type EnumCheckpointStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckpointStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ShipmentUpdateOneRequiredWithoutCheckpointsNestedInput = {
    create?: XOR<ShipmentCreateWithoutCheckpointsInput, ShipmentUncheckedCreateWithoutCheckpointsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutCheckpointsInput
    upsert?: ShipmentUpsertWithoutCheckpointsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutCheckpointsInput, ShipmentUpdateWithoutCheckpointsInput>, ShipmentUncheckedUpdateWithoutCheckpointsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type ShipmentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ShipmentCreateWithoutNotificationsInput, ShipmentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutNotificationsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type ShipmentUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ShipmentCreateWithoutNotificationsInput, ShipmentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutNotificationsInput
    upsert?: ShipmentUpsertWithoutNotificationsInput
    disconnect?: ShipmentWhereInput | boolean
    delete?: ShipmentWhereInput | boolean
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutNotificationsInput, ShipmentUpdateWithoutNotificationsInput>, ShipmentUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCheckpointStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckpointStatus | EnumCheckpointStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckpointStatus[] | ListEnumCheckpointStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckpointStatus[] | ListEnumCheckpointStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckpointStatusFilter<$PrismaModel> | $Enums.CheckpointStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCheckpointStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckpointStatus | EnumCheckpointStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckpointStatus[] | ListEnumCheckpointStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckpointStatus[] | ListEnumCheckpointStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckpointStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckpointStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckpointStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckpointStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ShipmentCreateWithoutCustomerInput = {
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: UserCreateNestedOneWithoutDeliveriesInput
    checkpoints?: ShipmentCheckpointCreateNestedManyWithoutShipmentInput
    notifications?: NotificationCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutCustomerInput = {
    id?: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkpoints?: ShipmentCheckpointUncheckedCreateNestedManyWithoutShipmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput>
  }

  export type ShipmentCreateManyCustomerInputEnvelope = {
    data: ShipmentCreateManyCustomerInput | ShipmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutDriverInput = {
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutShipmentsInput
    checkpoints?: ShipmentCheckpointCreateNestedManyWithoutShipmentInput
    notifications?: NotificationCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutDriverInput = {
    id?: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    checkpoints?: ShipmentCheckpointUncheckedCreateNestedManyWithoutShipmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutDriverInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput>
  }

  export type ShipmentCreateManyDriverInputEnvelope = {
    data: ShipmentCreateManyDriverInput | ShipmentCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    message: string
    isRead?: boolean
    createdAt?: Date | string
    shipment?: ShipmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    isRead?: boolean
    createdAt?: Date | string
    shipmentId?: number | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutCustomerInput, ShipmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutCustomerInput, ShipmentUncheckedUpdateWithoutCustomerInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutCustomerInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: IntFilter<"Shipment"> | number
    trackingNumber?: StringFilter<"Shipment"> | string
    name?: StringFilter<"Shipment"> | string
    weight?: FloatFilter<"Shipment"> | number
    category?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    fromLocation?: JsonFilter<"Shipment">
    toLocation?: JsonFilter<"Shipment">
    estimatedDeliveryDate?: DateTimeFilter<"Shipment"> | Date | string
    customerId?: IntFilter<"Shipment"> | number
    driverId?: IntNullableFilter<"Shipment"> | number | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
  }

  export type ShipmentUpsertWithWhereUniqueWithoutDriverInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutDriverInput, ShipmentUncheckedUpdateWithoutDriverInput>
    create: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutDriverInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutDriverInput, ShipmentUncheckedUpdateWithoutDriverInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutDriverInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutDriverInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
    shipmentId?: IntNullableFilter<"Notification"> | number | null
  }

  export type UserCreateWithoutShipmentsInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: ShipmentCreateNestedManyWithoutDriverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShipmentsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShipmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShipmentsInput, UserUncheckedCreateWithoutShipmentsInput>
  }

  export type UserCreateWithoutDeliveriesInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutCustomerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeliveriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeliveriesInput, UserUncheckedCreateWithoutDeliveriesInput>
  }

  export type ShipmentCheckpointCreateWithoutShipmentInput = {
    sequenceNumber: number
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CheckpointStatus
    reachedAt?: Date | string | null
  }

  export type ShipmentCheckpointUncheckedCreateWithoutShipmentInput = {
    id?: number
    sequenceNumber: number
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CheckpointStatus
    reachedAt?: Date | string | null
  }

  export type ShipmentCheckpointCreateOrConnectWithoutShipmentInput = {
    where: ShipmentCheckpointWhereUniqueInput
    create: XOR<ShipmentCheckpointCreateWithoutShipmentInput, ShipmentCheckpointUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentCheckpointCreateManyShipmentInputEnvelope = {
    data: ShipmentCheckpointCreateManyShipmentInput | ShipmentCheckpointCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutShipmentInput = {
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutShipmentInput = {
    id?: number
    message: string
    isRead?: boolean
    createdAt?: Date | string
    userId: number
  }

  export type NotificationCreateOrConnectWithoutShipmentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutShipmentInput, NotificationUncheckedCreateWithoutShipmentInput>
  }

  export type NotificationCreateManyShipmentInputEnvelope = {
    data: NotificationCreateManyShipmentInput | NotificationCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutShipmentsInput = {
    update: XOR<UserUpdateWithoutShipmentsInput, UserUncheckedUpdateWithoutShipmentsInput>
    create: XOR<UserCreateWithoutShipmentsInput, UserUncheckedCreateWithoutShipmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShipmentsInput, UserUncheckedUpdateWithoutShipmentsInput>
  }

  export type UserUpdateWithoutShipmentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: ShipmentUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutDeliveriesInput = {
    update: XOR<UserUpdateWithoutDeliveriesInput, UserUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<UserCreateWithoutDeliveriesInput, UserUncheckedCreateWithoutDeliveriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeliveriesInput, UserUncheckedUpdateWithoutDeliveriesInput>
  }

  export type UserUpdateWithoutDeliveriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutCustomerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShipmentCheckpointUpsertWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentCheckpointWhereUniqueInput
    update: XOR<ShipmentCheckpointUpdateWithoutShipmentInput, ShipmentCheckpointUncheckedUpdateWithoutShipmentInput>
    create: XOR<ShipmentCheckpointCreateWithoutShipmentInput, ShipmentCheckpointUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentCheckpointUpdateWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentCheckpointWhereUniqueInput
    data: XOR<ShipmentCheckpointUpdateWithoutShipmentInput, ShipmentCheckpointUncheckedUpdateWithoutShipmentInput>
  }

  export type ShipmentCheckpointUpdateManyWithWhereWithoutShipmentInput = {
    where: ShipmentCheckpointScalarWhereInput
    data: XOR<ShipmentCheckpointUpdateManyMutationInput, ShipmentCheckpointUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ShipmentCheckpointScalarWhereInput = {
    AND?: ShipmentCheckpointScalarWhereInput | ShipmentCheckpointScalarWhereInput[]
    OR?: ShipmentCheckpointScalarWhereInput[]
    NOT?: ShipmentCheckpointScalarWhereInput | ShipmentCheckpointScalarWhereInput[]
    id?: IntFilter<"ShipmentCheckpoint"> | number
    shipmentId?: IntFilter<"ShipmentCheckpoint"> | number
    sequenceNumber?: IntFilter<"ShipmentCheckpoint"> | number
    location?: StringFilter<"ShipmentCheckpoint"> | string
    latitude?: DecimalNullableFilter<"ShipmentCheckpoint"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ShipmentCheckpoint"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFilter<"ShipmentCheckpoint"> | $Enums.CheckpointStatus
    reachedAt?: DateTimeNullableFilter<"ShipmentCheckpoint"> | Date | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutShipmentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutShipmentInput, NotificationUncheckedUpdateWithoutShipmentInput>
    create: XOR<NotificationCreateWithoutShipmentInput, NotificationUncheckedCreateWithoutShipmentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutShipmentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutShipmentInput, NotificationUncheckedUpdateWithoutShipmentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutShipmentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ShipmentCreateWithoutCheckpointsInput = {
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutShipmentsInput
    driver?: UserCreateNestedOneWithoutDeliveriesInput
    notifications?: NotificationCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutCheckpointsInput = {
    id?: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    customerId: number
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutCheckpointsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCheckpointsInput, ShipmentUncheckedCreateWithoutCheckpointsInput>
  }

  export type ShipmentUpsertWithoutCheckpointsInput = {
    update: XOR<ShipmentUpdateWithoutCheckpointsInput, ShipmentUncheckedUpdateWithoutCheckpointsInput>
    create: XOR<ShipmentCreateWithoutCheckpointsInput, ShipmentUncheckedCreateWithoutCheckpointsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutCheckpointsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutCheckpointsInput, ShipmentUncheckedUpdateWithoutCheckpointsInput>
  }

  export type ShipmentUpdateWithoutCheckpointsInput = {
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutShipmentsNestedInput
    driver?: UserUpdateOneWithoutDeliveriesNestedInput
    notifications?: NotificationUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutCheckpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutCustomerInput
    deliveries?: ShipmentCreateNestedManyWithoutDriverInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    deliveries?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type ShipmentCreateWithoutNotificationsInput = {
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutShipmentsInput
    driver?: UserCreateNestedOneWithoutDeliveriesInput
    checkpoints?: ShipmentCheckpointCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutNotificationsInput = {
    id?: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    customerId: number
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkpoints?: ShipmentCheckpointUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutNotificationsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutNotificationsInput, ShipmentUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutCustomerNestedInput
    deliveries?: ShipmentUpdateManyWithoutDriverNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    deliveries?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type ShipmentUpsertWithoutNotificationsInput = {
    update: XOR<ShipmentUpdateWithoutNotificationsInput, ShipmentUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ShipmentCreateWithoutNotificationsInput, ShipmentUncheckedCreateWithoutNotificationsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutNotificationsInput, ShipmentUncheckedUpdateWithoutNotificationsInput>
  }

  export type ShipmentUpdateWithoutNotificationsInput = {
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutShipmentsNestedInput
    driver?: UserUpdateOneWithoutDeliveriesNestedInput
    checkpoints?: ShipmentCheckpointUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoints?: ShipmentCheckpointUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyCustomerInput = {
    id?: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateManyDriverInput = {
    id?: number
    trackingNumber: string
    name: string
    weight: number
    category: string
    status?: $Enums.ShipmentStatus
    fromLocation: JsonNullValueInput | InputJsonValue
    toLocation: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate: Date | string
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    message: string
    isRead?: boolean
    createdAt?: Date | string
    shipmentId?: number | null
  }

  export type ShipmentUpdateWithoutCustomerInput = {
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneWithoutDeliveriesNestedInput
    checkpoints?: ShipmentCheckpointUpdateManyWithoutShipmentNestedInput
    notifications?: NotificationUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoints?: ShipmentCheckpointUncheckedUpdateManyWithoutShipmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutDriverInput = {
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutShipmentsNestedInput
    checkpoints?: ShipmentCheckpointUpdateManyWithoutShipmentNestedInput
    notifications?: NotificationUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoints?: ShipmentCheckpointUncheckedUpdateManyWithoutShipmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackingNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    fromLocation?: JsonNullValueInput | InputJsonValue
    toLocation?: JsonNullValueInput | InputJsonValue
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShipmentCheckpointCreateManyShipmentInput = {
    id?: number
    sequenceNumber: number
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CheckpointStatus
    reachedAt?: Date | string | null
  }

  export type NotificationCreateManyShipmentInput = {
    id?: number
    message: string
    isRead?: boolean
    createdAt?: Date | string
    userId: number
  }

  export type ShipmentCheckpointUpdateWithoutShipmentInput = {
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFieldUpdateOperationsInput | $Enums.CheckpointStatus
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentCheckpointUncheckedUpdateWithoutShipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFieldUpdateOperationsInput | $Enums.CheckpointStatus
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentCheckpointUncheckedUpdateManyWithoutShipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCheckpointStatusFieldUpdateOperationsInput | $Enums.CheckpointStatus
    reachedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutShipmentInput = {
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutShipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUncheckedUpdateManyWithoutShipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShipmentCountOutputTypeDefaultArgs instead
     */
    export type ShipmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShipmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleDefaultArgs instead
     */
    export type VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShipmentDefaultArgs instead
     */
    export type ShipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShipmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShipmentCheckpointDefaultArgs instead
     */
    export type ShipmentCheckpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShipmentCheckpointDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}