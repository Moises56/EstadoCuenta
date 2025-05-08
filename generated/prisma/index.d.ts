
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
 * Model ClavesRutas
 * 
 */
export type ClavesRutas = $Result.DefaultSelection<Prisma.$ClavesRutasPayload>
/**
 * Model Mora
 * 
 */
export type Mora = $Result.DefaultSelection<Prisma.$MoraPayload>
/**
 * Model RutasColonia
 * 
 */
export type RutasColonia = $Result.DefaultSelection<Prisma.$RutasColoniaPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ClavesRutas
 * const clavesRutas = await prisma.clavesRutas.findMany()
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
   * // Fetch zero or more ClavesRutas
   * const clavesRutas = await prisma.clavesRutas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clavesRutas`: Exposes CRUD operations for the **ClavesRutas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClavesRutas
    * const clavesRutas = await prisma.clavesRutas.findMany()
    * ```
    */
  get clavesRutas(): Prisma.ClavesRutasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mora`: Exposes CRUD operations for the **Mora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moras
    * const moras = await prisma.mora.findMany()
    * ```
    */
  get mora(): Prisma.MoraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutasColonia`: Exposes CRUD operations for the **RutasColonia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RutasColonias
    * const rutasColonias = await prisma.rutasColonia.findMany()
    * ```
    */
  get rutasColonia(): Prisma.RutasColoniaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    ClavesRutas: 'ClavesRutas',
    Mora: 'Mora',
    RutasColonia: 'RutasColonia',
    User: 'User',
    Log: 'Log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clavesRutas" | "mora" | "rutasColonia" | "user" | "log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ClavesRutas: {
        payload: Prisma.$ClavesRutasPayload<ExtArgs>
        fields: Prisma.ClavesRutasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClavesRutasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClavesRutasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload>
          }
          findFirst: {
            args: Prisma.ClavesRutasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClavesRutasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload>
          }
          findMany: {
            args: Prisma.ClavesRutasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload>[]
          }
          create: {
            args: Prisma.ClavesRutasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload>
          }
          createMany: {
            args: Prisma.ClavesRutasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClavesRutasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload>
          }
          update: {
            args: Prisma.ClavesRutasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload>
          }
          deleteMany: {
            args: Prisma.ClavesRutasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClavesRutasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClavesRutasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClavesRutasPayload>
          }
          aggregate: {
            args: Prisma.ClavesRutasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClavesRutas>
          }
          groupBy: {
            args: Prisma.ClavesRutasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClavesRutasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClavesRutasCountArgs<ExtArgs>
            result: $Utils.Optional<ClavesRutasCountAggregateOutputType> | number
          }
        }
      }
      Mora: {
        payload: Prisma.$MoraPayload<ExtArgs>
        fields: Prisma.MoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload>
          }
          findFirst: {
            args: Prisma.MoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload>
          }
          findMany: {
            args: Prisma.MoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload>[]
          }
          create: {
            args: Prisma.MoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload>
          }
          createMany: {
            args: Prisma.MoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload>
          }
          update: {
            args: Prisma.MoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload>
          }
          deleteMany: {
            args: Prisma.MoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoraPayload>
          }
          aggregate: {
            args: Prisma.MoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMora>
          }
          groupBy: {
            args: Prisma.MoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoraCountArgs<ExtArgs>
            result: $Utils.Optional<MoraCountAggregateOutputType> | number
          }
        }
      }
      RutasColonia: {
        payload: Prisma.$RutasColoniaPayload<ExtArgs>
        fields: Prisma.RutasColoniaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutasColoniaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutasColoniaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload>
          }
          findFirst: {
            args: Prisma.RutasColoniaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutasColoniaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload>
          }
          findMany: {
            args: Prisma.RutasColoniaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload>[]
          }
          create: {
            args: Prisma.RutasColoniaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload>
          }
          createMany: {
            args: Prisma.RutasColoniaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RutasColoniaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload>
          }
          update: {
            args: Prisma.RutasColoniaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload>
          }
          deleteMany: {
            args: Prisma.RutasColoniaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutasColoniaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RutasColoniaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutasColoniaPayload>
          }
          aggregate: {
            args: Prisma.RutasColoniaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutasColonia>
          }
          groupBy: {
            args: Prisma.RutasColoniaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutasColoniaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutasColoniaCountArgs<ExtArgs>
            result: $Utils.Optional<RutasColoniaCountAggregateOutputType> | number
          }
        }
      }
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
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    clavesRutas?: ClavesRutasOmit
    mora?: MoraOmit
    rutasColonia?: RutasColoniaOmit
    user?: UserOmit
    log?: LogOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ClavesRutasCountOutputType
   */

  export type ClavesRutasCountOutputType = {
    mora: number
  }

  export type ClavesRutasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mora?: boolean | ClavesRutasCountOutputTypeCountMoraArgs
  }

  // Custom InputTypes
  /**
   * ClavesRutasCountOutputType without action
   */
  export type ClavesRutasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutasCountOutputType
     */
    select?: ClavesRutasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClavesRutasCountOutputType without action
   */
  export type ClavesRutasCountOutputTypeCountMoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoraWhereInput
  }


  /**
   * Count Type RutasColoniaCountOutputType
   */

  export type RutasColoniaCountOutputType = {
    clavesRutas: number
  }

  export type RutasColoniaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clavesRutas?: boolean | RutasColoniaCountOutputTypeCountClavesRutasArgs
  }

  // Custom InputTypes
  /**
   * RutasColoniaCountOutputType without action
   */
  export type RutasColoniaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColoniaCountOutputType
     */
    select?: RutasColoniaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutasColoniaCountOutputType without action
   */
  export type RutasColoniaCountOutputTypeCountClavesRutasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClavesRutasWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UserCountOutputTypeCountLogsArgs
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
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ClavesRutas
   */

  export type AggregateClavesRutas = {
    _count: ClavesRutasCountAggregateOutputType | null
    _avg: ClavesRutasAvgAggregateOutputType | null
    _sum: ClavesRutasSumAggregateOutputType | null
    _min: ClavesRutasMinAggregateOutputType | null
    _max: ClavesRutasMaxAggregateOutputType | null
  }

  export type ClavesRutasAvgAggregateOutputType = {
    umaps: number | null
  }

  export type ClavesRutasSumAggregateOutputType = {
    umaps: number | null
  }

  export type ClavesRutasMinAggregateOutputType = {
    id: string | null
    claveCatastral: string | null
    ruta: string | null
    umaps: number | null
  }

  export type ClavesRutasMaxAggregateOutputType = {
    id: string | null
    claveCatastral: string | null
    ruta: string | null
    umaps: number | null
  }

  export type ClavesRutasCountAggregateOutputType = {
    id: number
    claveCatastral: number
    ruta: number
    umaps: number
    _all: number
  }


  export type ClavesRutasAvgAggregateInputType = {
    umaps?: true
  }

  export type ClavesRutasSumAggregateInputType = {
    umaps?: true
  }

  export type ClavesRutasMinAggregateInputType = {
    id?: true
    claveCatastral?: true
    ruta?: true
    umaps?: true
  }

  export type ClavesRutasMaxAggregateInputType = {
    id?: true
    claveCatastral?: true
    ruta?: true
    umaps?: true
  }

  export type ClavesRutasCountAggregateInputType = {
    id?: true
    claveCatastral?: true
    ruta?: true
    umaps?: true
    _all?: true
  }

  export type ClavesRutasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClavesRutas to aggregate.
     */
    where?: ClavesRutasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClavesRutas to fetch.
     */
    orderBy?: ClavesRutasOrderByWithRelationInput | ClavesRutasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClavesRutasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClavesRutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClavesRutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClavesRutas
    **/
    _count?: true | ClavesRutasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClavesRutasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClavesRutasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClavesRutasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClavesRutasMaxAggregateInputType
  }

  export type GetClavesRutasAggregateType<T extends ClavesRutasAggregateArgs> = {
        [P in keyof T & keyof AggregateClavesRutas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClavesRutas[P]>
      : GetScalarType<T[P], AggregateClavesRutas[P]>
  }




  export type ClavesRutasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClavesRutasWhereInput
    orderBy?: ClavesRutasOrderByWithAggregationInput | ClavesRutasOrderByWithAggregationInput[]
    by: ClavesRutasScalarFieldEnum[] | ClavesRutasScalarFieldEnum
    having?: ClavesRutasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClavesRutasCountAggregateInputType | true
    _avg?: ClavesRutasAvgAggregateInputType
    _sum?: ClavesRutasSumAggregateInputType
    _min?: ClavesRutasMinAggregateInputType
    _max?: ClavesRutasMaxAggregateInputType
  }

  export type ClavesRutasGroupByOutputType = {
    id: string
    claveCatastral: string
    ruta: string
    umaps: number
    _count: ClavesRutasCountAggregateOutputType | null
    _avg: ClavesRutasAvgAggregateOutputType | null
    _sum: ClavesRutasSumAggregateOutputType | null
    _min: ClavesRutasMinAggregateOutputType | null
    _max: ClavesRutasMaxAggregateOutputType | null
  }

  type GetClavesRutasGroupByPayload<T extends ClavesRutasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClavesRutasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClavesRutasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClavesRutasGroupByOutputType[P]>
            : GetScalarType<T[P], ClavesRutasGroupByOutputType[P]>
        }
      >
    >


  export type ClavesRutasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claveCatastral?: boolean
    ruta?: boolean
    umaps?: boolean
    mora?: boolean | ClavesRutas$moraArgs<ExtArgs>
    rutaColonia?: boolean | ClavesRutas$rutaColoniaArgs<ExtArgs>
    _count?: boolean | ClavesRutasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clavesRutas"]>



  export type ClavesRutasSelectScalar = {
    id?: boolean
    claveCatastral?: boolean
    ruta?: boolean
    umaps?: boolean
  }

  export type ClavesRutasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "claveCatastral" | "ruta" | "umaps", ExtArgs["result"]["clavesRutas"]>
  export type ClavesRutasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mora?: boolean | ClavesRutas$moraArgs<ExtArgs>
    rutaColonia?: boolean | ClavesRutas$rutaColoniaArgs<ExtArgs>
    _count?: boolean | ClavesRutasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClavesRutasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClavesRutas"
    objects: {
      mora: Prisma.$MoraPayload<ExtArgs>[]
      rutaColonia: Prisma.$RutasColoniaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      claveCatastral: string
      ruta: string
      umaps: number
    }, ExtArgs["result"]["clavesRutas"]>
    composites: {}
  }

  type ClavesRutasGetPayload<S extends boolean | null | undefined | ClavesRutasDefaultArgs> = $Result.GetResult<Prisma.$ClavesRutasPayload, S>

  type ClavesRutasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClavesRutasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClavesRutasCountAggregateInputType | true
    }

  export interface ClavesRutasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClavesRutas'], meta: { name: 'ClavesRutas' } }
    /**
     * Find zero or one ClavesRutas that matches the filter.
     * @param {ClavesRutasFindUniqueArgs} args - Arguments to find a ClavesRutas
     * @example
     * // Get one ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClavesRutasFindUniqueArgs>(args: SelectSubset<T, ClavesRutasFindUniqueArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClavesRutas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClavesRutasFindUniqueOrThrowArgs} args - Arguments to find a ClavesRutas
     * @example
     * // Get one ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClavesRutasFindUniqueOrThrowArgs>(args: SelectSubset<T, ClavesRutasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClavesRutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClavesRutasFindFirstArgs} args - Arguments to find a ClavesRutas
     * @example
     * // Get one ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClavesRutasFindFirstArgs>(args?: SelectSubset<T, ClavesRutasFindFirstArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClavesRutas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClavesRutasFindFirstOrThrowArgs} args - Arguments to find a ClavesRutas
     * @example
     * // Get one ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClavesRutasFindFirstOrThrowArgs>(args?: SelectSubset<T, ClavesRutasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClavesRutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClavesRutasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.findMany()
     * 
     * // Get first 10 ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clavesRutasWithIdOnly = await prisma.clavesRutas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClavesRutasFindManyArgs>(args?: SelectSubset<T, ClavesRutasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClavesRutas.
     * @param {ClavesRutasCreateArgs} args - Arguments to create a ClavesRutas.
     * @example
     * // Create one ClavesRutas
     * const ClavesRutas = await prisma.clavesRutas.create({
     *   data: {
     *     // ... data to create a ClavesRutas
     *   }
     * })
     * 
     */
    create<T extends ClavesRutasCreateArgs>(args: SelectSubset<T, ClavesRutasCreateArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClavesRutas.
     * @param {ClavesRutasCreateManyArgs} args - Arguments to create many ClavesRutas.
     * @example
     * // Create many ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClavesRutasCreateManyArgs>(args?: SelectSubset<T, ClavesRutasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClavesRutas.
     * @param {ClavesRutasDeleteArgs} args - Arguments to delete one ClavesRutas.
     * @example
     * // Delete one ClavesRutas
     * const ClavesRutas = await prisma.clavesRutas.delete({
     *   where: {
     *     // ... filter to delete one ClavesRutas
     *   }
     * })
     * 
     */
    delete<T extends ClavesRutasDeleteArgs>(args: SelectSubset<T, ClavesRutasDeleteArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClavesRutas.
     * @param {ClavesRutasUpdateArgs} args - Arguments to update one ClavesRutas.
     * @example
     * // Update one ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClavesRutasUpdateArgs>(args: SelectSubset<T, ClavesRutasUpdateArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClavesRutas.
     * @param {ClavesRutasDeleteManyArgs} args - Arguments to filter ClavesRutas to delete.
     * @example
     * // Delete a few ClavesRutas
     * const { count } = await prisma.clavesRutas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClavesRutasDeleteManyArgs>(args?: SelectSubset<T, ClavesRutasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClavesRutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClavesRutasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClavesRutasUpdateManyArgs>(args: SelectSubset<T, ClavesRutasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClavesRutas.
     * @param {ClavesRutasUpsertArgs} args - Arguments to update or create a ClavesRutas.
     * @example
     * // Update or create a ClavesRutas
     * const clavesRutas = await prisma.clavesRutas.upsert({
     *   create: {
     *     // ... data to create a ClavesRutas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClavesRutas we want to update
     *   }
     * })
     */
    upsert<T extends ClavesRutasUpsertArgs>(args: SelectSubset<T, ClavesRutasUpsertArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClavesRutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClavesRutasCountArgs} args - Arguments to filter ClavesRutas to count.
     * @example
     * // Count the number of ClavesRutas
     * const count = await prisma.clavesRutas.count({
     *   where: {
     *     // ... the filter for the ClavesRutas we want to count
     *   }
     * })
    **/
    count<T extends ClavesRutasCountArgs>(
      args?: Subset<T, ClavesRutasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClavesRutasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClavesRutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClavesRutasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClavesRutasAggregateArgs>(args: Subset<T, ClavesRutasAggregateArgs>): Prisma.PrismaPromise<GetClavesRutasAggregateType<T>>

    /**
     * Group by ClavesRutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClavesRutasGroupByArgs} args - Group by arguments.
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
      T extends ClavesRutasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClavesRutasGroupByArgs['orderBy'] }
        : { orderBy?: ClavesRutasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClavesRutasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClavesRutasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClavesRutas model
   */
  readonly fields: ClavesRutasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClavesRutas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClavesRutasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mora<T extends ClavesRutas$moraArgs<ExtArgs> = {}>(args?: Subset<T, ClavesRutas$moraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rutaColonia<T extends ClavesRutas$rutaColoniaArgs<ExtArgs> = {}>(args?: Subset<T, ClavesRutas$rutaColoniaArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClavesRutas model
   */
  interface ClavesRutasFieldRefs {
    readonly id: FieldRef<"ClavesRutas", 'String'>
    readonly claveCatastral: FieldRef<"ClavesRutas", 'String'>
    readonly ruta: FieldRef<"ClavesRutas", 'String'>
    readonly umaps: FieldRef<"ClavesRutas", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ClavesRutas findUnique
   */
  export type ClavesRutasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * Filter, which ClavesRutas to fetch.
     */
    where: ClavesRutasWhereUniqueInput
  }

  /**
   * ClavesRutas findUniqueOrThrow
   */
  export type ClavesRutasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * Filter, which ClavesRutas to fetch.
     */
    where: ClavesRutasWhereUniqueInput
  }

  /**
   * ClavesRutas findFirst
   */
  export type ClavesRutasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * Filter, which ClavesRutas to fetch.
     */
    where?: ClavesRutasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClavesRutas to fetch.
     */
    orderBy?: ClavesRutasOrderByWithRelationInput | ClavesRutasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClavesRutas.
     */
    cursor?: ClavesRutasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClavesRutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClavesRutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClavesRutas.
     */
    distinct?: ClavesRutasScalarFieldEnum | ClavesRutasScalarFieldEnum[]
  }

  /**
   * ClavesRutas findFirstOrThrow
   */
  export type ClavesRutasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * Filter, which ClavesRutas to fetch.
     */
    where?: ClavesRutasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClavesRutas to fetch.
     */
    orderBy?: ClavesRutasOrderByWithRelationInput | ClavesRutasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClavesRutas.
     */
    cursor?: ClavesRutasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClavesRutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClavesRutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClavesRutas.
     */
    distinct?: ClavesRutasScalarFieldEnum | ClavesRutasScalarFieldEnum[]
  }

  /**
   * ClavesRutas findMany
   */
  export type ClavesRutasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * Filter, which ClavesRutas to fetch.
     */
    where?: ClavesRutasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClavesRutas to fetch.
     */
    orderBy?: ClavesRutasOrderByWithRelationInput | ClavesRutasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClavesRutas.
     */
    cursor?: ClavesRutasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClavesRutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClavesRutas.
     */
    skip?: number
    distinct?: ClavesRutasScalarFieldEnum | ClavesRutasScalarFieldEnum[]
  }

  /**
   * ClavesRutas create
   */
  export type ClavesRutasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * The data needed to create a ClavesRutas.
     */
    data: XOR<ClavesRutasCreateInput, ClavesRutasUncheckedCreateInput>
  }

  /**
   * ClavesRutas createMany
   */
  export type ClavesRutasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClavesRutas.
     */
    data: ClavesRutasCreateManyInput | ClavesRutasCreateManyInput[]
  }

  /**
   * ClavesRutas update
   */
  export type ClavesRutasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * The data needed to update a ClavesRutas.
     */
    data: XOR<ClavesRutasUpdateInput, ClavesRutasUncheckedUpdateInput>
    /**
     * Choose, which ClavesRutas to update.
     */
    where: ClavesRutasWhereUniqueInput
  }

  /**
   * ClavesRutas updateMany
   */
  export type ClavesRutasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClavesRutas.
     */
    data: XOR<ClavesRutasUpdateManyMutationInput, ClavesRutasUncheckedUpdateManyInput>
    /**
     * Filter which ClavesRutas to update
     */
    where?: ClavesRutasWhereInput
    /**
     * Limit how many ClavesRutas to update.
     */
    limit?: number
  }

  /**
   * ClavesRutas upsert
   */
  export type ClavesRutasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * The filter to search for the ClavesRutas to update in case it exists.
     */
    where: ClavesRutasWhereUniqueInput
    /**
     * In case the ClavesRutas found by the `where` argument doesn't exist, create a new ClavesRutas with this data.
     */
    create: XOR<ClavesRutasCreateInput, ClavesRutasUncheckedCreateInput>
    /**
     * In case the ClavesRutas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClavesRutasUpdateInput, ClavesRutasUncheckedUpdateInput>
  }

  /**
   * ClavesRutas delete
   */
  export type ClavesRutasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    /**
     * Filter which ClavesRutas to delete.
     */
    where: ClavesRutasWhereUniqueInput
  }

  /**
   * ClavesRutas deleteMany
   */
  export type ClavesRutasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClavesRutas to delete
     */
    where?: ClavesRutasWhereInput
    /**
     * Limit how many ClavesRutas to delete.
     */
    limit?: number
  }

  /**
   * ClavesRutas.mora
   */
  export type ClavesRutas$moraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    where?: MoraWhereInput
    orderBy?: MoraOrderByWithRelationInput | MoraOrderByWithRelationInput[]
    cursor?: MoraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoraScalarFieldEnum | MoraScalarFieldEnum[]
  }

  /**
   * ClavesRutas.rutaColonia
   */
  export type ClavesRutas$rutaColoniaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    where?: RutasColoniaWhereInput
  }

  /**
   * ClavesRutas without action
   */
  export type ClavesRutasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
  }


  /**
   * Model Mora
   */

  export type AggregateMora = {
    _count: MoraCountAggregateOutputType | null
    _avg: MoraAvgAggregateOutputType | null
    _sum: MoraSumAggregateOutputType | null
    _min: MoraMinAggregateOutputType | null
    _max: MoraMaxAggregateOutputType | null
  }

  export type MoraAvgAggregateOutputType = {
    dias: number | null
    impuesto: Decimal | null
    trenDeAseo: Decimal | null
    tasaBomberos: Decimal | null
  }

  export type MoraSumAggregateOutputType = {
    dias: number | null
    impuesto: Decimal | null
    trenDeAseo: Decimal | null
    tasaBomberos: Decimal | null
  }

  export type MoraMinAggregateOutputType = {
    id: string | null
    artIdDoc: string | null
    actIdCard: string | null
    nombre: string | null
    sectorColonia: string | null
    nombreColonia: string | null
    oblYear: string | null
    dias: number | null
    impuesto: Decimal | null
    trenDeAseo: Decimal | null
    tasaBomberos: Decimal | null
  }

  export type MoraMaxAggregateOutputType = {
    id: string | null
    artIdDoc: string | null
    actIdCard: string | null
    nombre: string | null
    sectorColonia: string | null
    nombreColonia: string | null
    oblYear: string | null
    dias: number | null
    impuesto: Decimal | null
    trenDeAseo: Decimal | null
    tasaBomberos: Decimal | null
  }

  export type MoraCountAggregateOutputType = {
    id: number
    artIdDoc: number
    actIdCard: number
    nombre: number
    sectorColonia: number
    nombreColonia: number
    oblYear: number
    dias: number
    impuesto: number
    trenDeAseo: number
    tasaBomberos: number
    _all: number
  }


  export type MoraAvgAggregateInputType = {
    dias?: true
    impuesto?: true
    trenDeAseo?: true
    tasaBomberos?: true
  }

  export type MoraSumAggregateInputType = {
    dias?: true
    impuesto?: true
    trenDeAseo?: true
    tasaBomberos?: true
  }

  export type MoraMinAggregateInputType = {
    id?: true
    artIdDoc?: true
    actIdCard?: true
    nombre?: true
    sectorColonia?: true
    nombreColonia?: true
    oblYear?: true
    dias?: true
    impuesto?: true
    trenDeAseo?: true
    tasaBomberos?: true
  }

  export type MoraMaxAggregateInputType = {
    id?: true
    artIdDoc?: true
    actIdCard?: true
    nombre?: true
    sectorColonia?: true
    nombreColonia?: true
    oblYear?: true
    dias?: true
    impuesto?: true
    trenDeAseo?: true
    tasaBomberos?: true
  }

  export type MoraCountAggregateInputType = {
    id?: true
    artIdDoc?: true
    actIdCard?: true
    nombre?: true
    sectorColonia?: true
    nombreColonia?: true
    oblYear?: true
    dias?: true
    impuesto?: true
    trenDeAseo?: true
    tasaBomberos?: true
    _all?: true
  }

  export type MoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mora to aggregate.
     */
    where?: MoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moras to fetch.
     */
    orderBy?: MoraOrderByWithRelationInput | MoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moras
    **/
    _count?: true | MoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoraMaxAggregateInputType
  }

  export type GetMoraAggregateType<T extends MoraAggregateArgs> = {
        [P in keyof T & keyof AggregateMora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMora[P]>
      : GetScalarType<T[P], AggregateMora[P]>
  }




  export type MoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoraWhereInput
    orderBy?: MoraOrderByWithAggregationInput | MoraOrderByWithAggregationInput[]
    by: MoraScalarFieldEnum[] | MoraScalarFieldEnum
    having?: MoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoraCountAggregateInputType | true
    _avg?: MoraAvgAggregateInputType
    _sum?: MoraSumAggregateInputType
    _min?: MoraMinAggregateInputType
    _max?: MoraMaxAggregateInputType
  }

  export type MoraGroupByOutputType = {
    id: string
    artIdDoc: string
    actIdCard: string
    nombre: string
    sectorColonia: string | null
    nombreColonia: string
    oblYear: string
    dias: number
    impuesto: Decimal | null
    trenDeAseo: Decimal | null
    tasaBomberos: Decimal | null
    _count: MoraCountAggregateOutputType | null
    _avg: MoraAvgAggregateOutputType | null
    _sum: MoraSumAggregateOutputType | null
    _min: MoraMinAggregateOutputType | null
    _max: MoraMaxAggregateOutputType | null
  }

  type GetMoraGroupByPayload<T extends MoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoraGroupByOutputType[P]>
            : GetScalarType<T[P], MoraGroupByOutputType[P]>
        }
      >
    >


  export type MoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artIdDoc?: boolean
    actIdCard?: boolean
    nombre?: boolean
    sectorColonia?: boolean
    nombreColonia?: boolean
    oblYear?: boolean
    dias?: boolean
    impuesto?: boolean
    trenDeAseo?: boolean
    tasaBomberos?: boolean
    clavesRutas?: boolean | Mora$clavesRutasArgs<ExtArgs>
  }, ExtArgs["result"]["mora"]>



  export type MoraSelectScalar = {
    id?: boolean
    artIdDoc?: boolean
    actIdCard?: boolean
    nombre?: boolean
    sectorColonia?: boolean
    nombreColonia?: boolean
    oblYear?: boolean
    dias?: boolean
    impuesto?: boolean
    trenDeAseo?: boolean
    tasaBomberos?: boolean
  }

  export type MoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artIdDoc" | "actIdCard" | "nombre" | "sectorColonia" | "nombreColonia" | "oblYear" | "dias" | "impuesto" | "trenDeAseo" | "tasaBomberos", ExtArgs["result"]["mora"]>
  export type MoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clavesRutas?: boolean | Mora$clavesRutasArgs<ExtArgs>
  }

  export type $MoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mora"
    objects: {
      clavesRutas: Prisma.$ClavesRutasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      artIdDoc: string
      actIdCard: string
      nombre: string
      sectorColonia: string | null
      nombreColonia: string
      oblYear: string
      dias: number
      impuesto: Prisma.Decimal | null
      trenDeAseo: Prisma.Decimal | null
      tasaBomberos: Prisma.Decimal | null
    }, ExtArgs["result"]["mora"]>
    composites: {}
  }

  type MoraGetPayload<S extends boolean | null | undefined | MoraDefaultArgs> = $Result.GetResult<Prisma.$MoraPayload, S>

  type MoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoraCountAggregateInputType | true
    }

  export interface MoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mora'], meta: { name: 'Mora' } }
    /**
     * Find zero or one Mora that matches the filter.
     * @param {MoraFindUniqueArgs} args - Arguments to find a Mora
     * @example
     * // Get one Mora
     * const mora = await prisma.mora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoraFindUniqueArgs>(args: SelectSubset<T, MoraFindUniqueArgs<ExtArgs>>): Prisma__MoraClient<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoraFindUniqueOrThrowArgs} args - Arguments to find a Mora
     * @example
     * // Get one Mora
     * const mora = await prisma.mora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoraFindUniqueOrThrowArgs>(args: SelectSubset<T, MoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoraClient<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoraFindFirstArgs} args - Arguments to find a Mora
     * @example
     * // Get one Mora
     * const mora = await prisma.mora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoraFindFirstArgs>(args?: SelectSubset<T, MoraFindFirstArgs<ExtArgs>>): Prisma__MoraClient<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoraFindFirstOrThrowArgs} args - Arguments to find a Mora
     * @example
     * // Get one Mora
     * const mora = await prisma.mora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoraFindFirstOrThrowArgs>(args?: SelectSubset<T, MoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoraClient<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moras
     * const moras = await prisma.mora.findMany()
     * 
     * // Get first 10 Moras
     * const moras = await prisma.mora.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moraWithIdOnly = await prisma.mora.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoraFindManyArgs>(args?: SelectSubset<T, MoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mora.
     * @param {MoraCreateArgs} args - Arguments to create a Mora.
     * @example
     * // Create one Mora
     * const Mora = await prisma.mora.create({
     *   data: {
     *     // ... data to create a Mora
     *   }
     * })
     * 
     */
    create<T extends MoraCreateArgs>(args: SelectSubset<T, MoraCreateArgs<ExtArgs>>): Prisma__MoraClient<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moras.
     * @param {MoraCreateManyArgs} args - Arguments to create many Moras.
     * @example
     * // Create many Moras
     * const mora = await prisma.mora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoraCreateManyArgs>(args?: SelectSubset<T, MoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mora.
     * @param {MoraDeleteArgs} args - Arguments to delete one Mora.
     * @example
     * // Delete one Mora
     * const Mora = await prisma.mora.delete({
     *   where: {
     *     // ... filter to delete one Mora
     *   }
     * })
     * 
     */
    delete<T extends MoraDeleteArgs>(args: SelectSubset<T, MoraDeleteArgs<ExtArgs>>): Prisma__MoraClient<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mora.
     * @param {MoraUpdateArgs} args - Arguments to update one Mora.
     * @example
     * // Update one Mora
     * const mora = await prisma.mora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoraUpdateArgs>(args: SelectSubset<T, MoraUpdateArgs<ExtArgs>>): Prisma__MoraClient<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moras.
     * @param {MoraDeleteManyArgs} args - Arguments to filter Moras to delete.
     * @example
     * // Delete a few Moras
     * const { count } = await prisma.mora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoraDeleteManyArgs>(args?: SelectSubset<T, MoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moras
     * const mora = await prisma.mora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoraUpdateManyArgs>(args: SelectSubset<T, MoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mora.
     * @param {MoraUpsertArgs} args - Arguments to update or create a Mora.
     * @example
     * // Update or create a Mora
     * const mora = await prisma.mora.upsert({
     *   create: {
     *     // ... data to create a Mora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mora we want to update
     *   }
     * })
     */
    upsert<T extends MoraUpsertArgs>(args: SelectSubset<T, MoraUpsertArgs<ExtArgs>>): Prisma__MoraClient<$Result.GetResult<Prisma.$MoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoraCountArgs} args - Arguments to filter Moras to count.
     * @example
     * // Count the number of Moras
     * const count = await prisma.mora.count({
     *   where: {
     *     // ... the filter for the Moras we want to count
     *   }
     * })
    **/
    count<T extends MoraCountArgs>(
      args?: Subset<T, MoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoraAggregateArgs>(args: Subset<T, MoraAggregateArgs>): Prisma.PrismaPromise<GetMoraAggregateType<T>>

    /**
     * Group by Mora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoraGroupByArgs} args - Group by arguments.
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
      T extends MoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoraGroupByArgs['orderBy'] }
        : { orderBy?: MoraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mora model
   */
  readonly fields: MoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clavesRutas<T extends Mora$clavesRutasArgs<ExtArgs> = {}>(args?: Subset<T, Mora$clavesRutasArgs<ExtArgs>>): Prisma__ClavesRutasClient<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mora model
   */
  interface MoraFieldRefs {
    readonly id: FieldRef<"Mora", 'String'>
    readonly artIdDoc: FieldRef<"Mora", 'String'>
    readonly actIdCard: FieldRef<"Mora", 'String'>
    readonly nombre: FieldRef<"Mora", 'String'>
    readonly sectorColonia: FieldRef<"Mora", 'String'>
    readonly nombreColonia: FieldRef<"Mora", 'String'>
    readonly oblYear: FieldRef<"Mora", 'String'>
    readonly dias: FieldRef<"Mora", 'Int'>
    readonly impuesto: FieldRef<"Mora", 'Decimal'>
    readonly trenDeAseo: FieldRef<"Mora", 'Decimal'>
    readonly tasaBomberos: FieldRef<"Mora", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Mora findUnique
   */
  export type MoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * Filter, which Mora to fetch.
     */
    where: MoraWhereUniqueInput
  }

  /**
   * Mora findUniqueOrThrow
   */
  export type MoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * Filter, which Mora to fetch.
     */
    where: MoraWhereUniqueInput
  }

  /**
   * Mora findFirst
   */
  export type MoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * Filter, which Mora to fetch.
     */
    where?: MoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moras to fetch.
     */
    orderBy?: MoraOrderByWithRelationInput | MoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moras.
     */
    cursor?: MoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moras.
     */
    distinct?: MoraScalarFieldEnum | MoraScalarFieldEnum[]
  }

  /**
   * Mora findFirstOrThrow
   */
  export type MoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * Filter, which Mora to fetch.
     */
    where?: MoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moras to fetch.
     */
    orderBy?: MoraOrderByWithRelationInput | MoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moras.
     */
    cursor?: MoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moras.
     */
    distinct?: MoraScalarFieldEnum | MoraScalarFieldEnum[]
  }

  /**
   * Mora findMany
   */
  export type MoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * Filter, which Moras to fetch.
     */
    where?: MoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moras to fetch.
     */
    orderBy?: MoraOrderByWithRelationInput | MoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moras.
     */
    cursor?: MoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moras.
     */
    skip?: number
    distinct?: MoraScalarFieldEnum | MoraScalarFieldEnum[]
  }

  /**
   * Mora create
   */
  export type MoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * The data needed to create a Mora.
     */
    data: XOR<MoraCreateInput, MoraUncheckedCreateInput>
  }

  /**
   * Mora createMany
   */
  export type MoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moras.
     */
    data: MoraCreateManyInput | MoraCreateManyInput[]
  }

  /**
   * Mora update
   */
  export type MoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * The data needed to update a Mora.
     */
    data: XOR<MoraUpdateInput, MoraUncheckedUpdateInput>
    /**
     * Choose, which Mora to update.
     */
    where: MoraWhereUniqueInput
  }

  /**
   * Mora updateMany
   */
  export type MoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moras.
     */
    data: XOR<MoraUpdateManyMutationInput, MoraUncheckedUpdateManyInput>
    /**
     * Filter which Moras to update
     */
    where?: MoraWhereInput
    /**
     * Limit how many Moras to update.
     */
    limit?: number
  }

  /**
   * Mora upsert
   */
  export type MoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * The filter to search for the Mora to update in case it exists.
     */
    where: MoraWhereUniqueInput
    /**
     * In case the Mora found by the `where` argument doesn't exist, create a new Mora with this data.
     */
    create: XOR<MoraCreateInput, MoraUncheckedCreateInput>
    /**
     * In case the Mora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoraUpdateInput, MoraUncheckedUpdateInput>
  }

  /**
   * Mora delete
   */
  export type MoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
    /**
     * Filter which Mora to delete.
     */
    where: MoraWhereUniqueInput
  }

  /**
   * Mora deleteMany
   */
  export type MoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moras to delete
     */
    where?: MoraWhereInput
    /**
     * Limit how many Moras to delete.
     */
    limit?: number
  }

  /**
   * Mora.clavesRutas
   */
  export type Mora$clavesRutasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    where?: ClavesRutasWhereInput
  }

  /**
   * Mora without action
   */
  export type MoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mora
     */
    select?: MoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mora
     */
    omit?: MoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoraInclude<ExtArgs> | null
  }


  /**
   * Model RutasColonia
   */

  export type AggregateRutasColonia = {
    _count: RutasColoniaCountAggregateOutputType | null
    _min: RutasColoniaMinAggregateOutputType | null
    _max: RutasColoniaMaxAggregateOutputType | null
  }

  export type RutasColoniaMinAggregateOutputType = {
    id: string | null
    ruta: string | null
    colonia: string | null
  }

  export type RutasColoniaMaxAggregateOutputType = {
    id: string | null
    ruta: string | null
    colonia: string | null
  }

  export type RutasColoniaCountAggregateOutputType = {
    id: number
    ruta: number
    colonia: number
    _all: number
  }


  export type RutasColoniaMinAggregateInputType = {
    id?: true
    ruta?: true
    colonia?: true
  }

  export type RutasColoniaMaxAggregateInputType = {
    id?: true
    ruta?: true
    colonia?: true
  }

  export type RutasColoniaCountAggregateInputType = {
    id?: true
    ruta?: true
    colonia?: true
    _all?: true
  }

  export type RutasColoniaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutasColonia to aggregate.
     */
    where?: RutasColoniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutasColonias to fetch.
     */
    orderBy?: RutasColoniaOrderByWithRelationInput | RutasColoniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutasColoniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutasColonias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutasColonias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RutasColonias
    **/
    _count?: true | RutasColoniaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutasColoniaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutasColoniaMaxAggregateInputType
  }

  export type GetRutasColoniaAggregateType<T extends RutasColoniaAggregateArgs> = {
        [P in keyof T & keyof AggregateRutasColonia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutasColonia[P]>
      : GetScalarType<T[P], AggregateRutasColonia[P]>
  }




  export type RutasColoniaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutasColoniaWhereInput
    orderBy?: RutasColoniaOrderByWithAggregationInput | RutasColoniaOrderByWithAggregationInput[]
    by: RutasColoniaScalarFieldEnum[] | RutasColoniaScalarFieldEnum
    having?: RutasColoniaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutasColoniaCountAggregateInputType | true
    _min?: RutasColoniaMinAggregateInputType
    _max?: RutasColoniaMaxAggregateInputType
  }

  export type RutasColoniaGroupByOutputType = {
    id: string
    ruta: string
    colonia: string
    _count: RutasColoniaCountAggregateOutputType | null
    _min: RutasColoniaMinAggregateOutputType | null
    _max: RutasColoniaMaxAggregateOutputType | null
  }

  type GetRutasColoniaGroupByPayload<T extends RutasColoniaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutasColoniaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutasColoniaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutasColoniaGroupByOutputType[P]>
            : GetScalarType<T[P], RutasColoniaGroupByOutputType[P]>
        }
      >
    >


  export type RutasColoniaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruta?: boolean
    colonia?: boolean
    clavesRutas?: boolean | RutasColonia$clavesRutasArgs<ExtArgs>
    _count?: boolean | RutasColoniaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutasColonia"]>



  export type RutasColoniaSelectScalar = {
    id?: boolean
    ruta?: boolean
    colonia?: boolean
  }

  export type RutasColoniaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ruta" | "colonia", ExtArgs["result"]["rutasColonia"]>
  export type RutasColoniaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clavesRutas?: boolean | RutasColonia$clavesRutasArgs<ExtArgs>
    _count?: boolean | RutasColoniaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RutasColoniaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RutasColonia"
    objects: {
      clavesRutas: Prisma.$ClavesRutasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ruta: string
      colonia: string
    }, ExtArgs["result"]["rutasColonia"]>
    composites: {}
  }

  type RutasColoniaGetPayload<S extends boolean | null | undefined | RutasColoniaDefaultArgs> = $Result.GetResult<Prisma.$RutasColoniaPayload, S>

  type RutasColoniaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutasColoniaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutasColoniaCountAggregateInputType | true
    }

  export interface RutasColoniaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RutasColonia'], meta: { name: 'RutasColonia' } }
    /**
     * Find zero or one RutasColonia that matches the filter.
     * @param {RutasColoniaFindUniqueArgs} args - Arguments to find a RutasColonia
     * @example
     * // Get one RutasColonia
     * const rutasColonia = await prisma.rutasColonia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutasColoniaFindUniqueArgs>(args: SelectSubset<T, RutasColoniaFindUniqueArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RutasColonia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutasColoniaFindUniqueOrThrowArgs} args - Arguments to find a RutasColonia
     * @example
     * // Get one RutasColonia
     * const rutasColonia = await prisma.rutasColonia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutasColoniaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutasColoniaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutasColonia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutasColoniaFindFirstArgs} args - Arguments to find a RutasColonia
     * @example
     * // Get one RutasColonia
     * const rutasColonia = await prisma.rutasColonia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutasColoniaFindFirstArgs>(args?: SelectSubset<T, RutasColoniaFindFirstArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutasColonia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutasColoniaFindFirstOrThrowArgs} args - Arguments to find a RutasColonia
     * @example
     * // Get one RutasColonia
     * const rutasColonia = await prisma.rutasColonia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutasColoniaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutasColoniaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RutasColonias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutasColoniaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RutasColonias
     * const rutasColonias = await prisma.rutasColonia.findMany()
     * 
     * // Get first 10 RutasColonias
     * const rutasColonias = await prisma.rutasColonia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutasColoniaWithIdOnly = await prisma.rutasColonia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutasColoniaFindManyArgs>(args?: SelectSubset<T, RutasColoniaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RutasColonia.
     * @param {RutasColoniaCreateArgs} args - Arguments to create a RutasColonia.
     * @example
     * // Create one RutasColonia
     * const RutasColonia = await prisma.rutasColonia.create({
     *   data: {
     *     // ... data to create a RutasColonia
     *   }
     * })
     * 
     */
    create<T extends RutasColoniaCreateArgs>(args: SelectSubset<T, RutasColoniaCreateArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RutasColonias.
     * @param {RutasColoniaCreateManyArgs} args - Arguments to create many RutasColonias.
     * @example
     * // Create many RutasColonias
     * const rutasColonia = await prisma.rutasColonia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutasColoniaCreateManyArgs>(args?: SelectSubset<T, RutasColoniaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RutasColonia.
     * @param {RutasColoniaDeleteArgs} args - Arguments to delete one RutasColonia.
     * @example
     * // Delete one RutasColonia
     * const RutasColonia = await prisma.rutasColonia.delete({
     *   where: {
     *     // ... filter to delete one RutasColonia
     *   }
     * })
     * 
     */
    delete<T extends RutasColoniaDeleteArgs>(args: SelectSubset<T, RutasColoniaDeleteArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RutasColonia.
     * @param {RutasColoniaUpdateArgs} args - Arguments to update one RutasColonia.
     * @example
     * // Update one RutasColonia
     * const rutasColonia = await prisma.rutasColonia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutasColoniaUpdateArgs>(args: SelectSubset<T, RutasColoniaUpdateArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RutasColonias.
     * @param {RutasColoniaDeleteManyArgs} args - Arguments to filter RutasColonias to delete.
     * @example
     * // Delete a few RutasColonias
     * const { count } = await prisma.rutasColonia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutasColoniaDeleteManyArgs>(args?: SelectSubset<T, RutasColoniaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutasColonias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutasColoniaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RutasColonias
     * const rutasColonia = await prisma.rutasColonia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutasColoniaUpdateManyArgs>(args: SelectSubset<T, RutasColoniaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RutasColonia.
     * @param {RutasColoniaUpsertArgs} args - Arguments to update or create a RutasColonia.
     * @example
     * // Update or create a RutasColonia
     * const rutasColonia = await prisma.rutasColonia.upsert({
     *   create: {
     *     // ... data to create a RutasColonia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RutasColonia we want to update
     *   }
     * })
     */
    upsert<T extends RutasColoniaUpsertArgs>(args: SelectSubset<T, RutasColoniaUpsertArgs<ExtArgs>>): Prisma__RutasColoniaClient<$Result.GetResult<Prisma.$RutasColoniaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RutasColonias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutasColoniaCountArgs} args - Arguments to filter RutasColonias to count.
     * @example
     * // Count the number of RutasColonias
     * const count = await prisma.rutasColonia.count({
     *   where: {
     *     // ... the filter for the RutasColonias we want to count
     *   }
     * })
    **/
    count<T extends RutasColoniaCountArgs>(
      args?: Subset<T, RutasColoniaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutasColoniaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RutasColonia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutasColoniaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutasColoniaAggregateArgs>(args: Subset<T, RutasColoniaAggregateArgs>): Prisma.PrismaPromise<GetRutasColoniaAggregateType<T>>

    /**
     * Group by RutasColonia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutasColoniaGroupByArgs} args - Group by arguments.
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
      T extends RutasColoniaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutasColoniaGroupByArgs['orderBy'] }
        : { orderBy?: RutasColoniaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutasColoniaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutasColoniaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RutasColonia model
   */
  readonly fields: RutasColoniaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RutasColonia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutasColoniaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clavesRutas<T extends RutasColonia$clavesRutasArgs<ExtArgs> = {}>(args?: Subset<T, RutasColonia$clavesRutasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClavesRutasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RutasColonia model
   */
  interface RutasColoniaFieldRefs {
    readonly id: FieldRef<"RutasColonia", 'String'>
    readonly ruta: FieldRef<"RutasColonia", 'String'>
    readonly colonia: FieldRef<"RutasColonia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RutasColonia findUnique
   */
  export type RutasColoniaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * Filter, which RutasColonia to fetch.
     */
    where: RutasColoniaWhereUniqueInput
  }

  /**
   * RutasColonia findUniqueOrThrow
   */
  export type RutasColoniaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * Filter, which RutasColonia to fetch.
     */
    where: RutasColoniaWhereUniqueInput
  }

  /**
   * RutasColonia findFirst
   */
  export type RutasColoniaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * Filter, which RutasColonia to fetch.
     */
    where?: RutasColoniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutasColonias to fetch.
     */
    orderBy?: RutasColoniaOrderByWithRelationInput | RutasColoniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutasColonias.
     */
    cursor?: RutasColoniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutasColonias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutasColonias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutasColonias.
     */
    distinct?: RutasColoniaScalarFieldEnum | RutasColoniaScalarFieldEnum[]
  }

  /**
   * RutasColonia findFirstOrThrow
   */
  export type RutasColoniaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * Filter, which RutasColonia to fetch.
     */
    where?: RutasColoniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutasColonias to fetch.
     */
    orderBy?: RutasColoniaOrderByWithRelationInput | RutasColoniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutasColonias.
     */
    cursor?: RutasColoniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutasColonias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutasColonias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutasColonias.
     */
    distinct?: RutasColoniaScalarFieldEnum | RutasColoniaScalarFieldEnum[]
  }

  /**
   * RutasColonia findMany
   */
  export type RutasColoniaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * Filter, which RutasColonias to fetch.
     */
    where?: RutasColoniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutasColonias to fetch.
     */
    orderBy?: RutasColoniaOrderByWithRelationInput | RutasColoniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RutasColonias.
     */
    cursor?: RutasColoniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutasColonias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutasColonias.
     */
    skip?: number
    distinct?: RutasColoniaScalarFieldEnum | RutasColoniaScalarFieldEnum[]
  }

  /**
   * RutasColonia create
   */
  export type RutasColoniaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * The data needed to create a RutasColonia.
     */
    data: XOR<RutasColoniaCreateInput, RutasColoniaUncheckedCreateInput>
  }

  /**
   * RutasColonia createMany
   */
  export type RutasColoniaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RutasColonias.
     */
    data: RutasColoniaCreateManyInput | RutasColoniaCreateManyInput[]
  }

  /**
   * RutasColonia update
   */
  export type RutasColoniaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * The data needed to update a RutasColonia.
     */
    data: XOR<RutasColoniaUpdateInput, RutasColoniaUncheckedUpdateInput>
    /**
     * Choose, which RutasColonia to update.
     */
    where: RutasColoniaWhereUniqueInput
  }

  /**
   * RutasColonia updateMany
   */
  export type RutasColoniaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RutasColonias.
     */
    data: XOR<RutasColoniaUpdateManyMutationInput, RutasColoniaUncheckedUpdateManyInput>
    /**
     * Filter which RutasColonias to update
     */
    where?: RutasColoniaWhereInput
    /**
     * Limit how many RutasColonias to update.
     */
    limit?: number
  }

  /**
   * RutasColonia upsert
   */
  export type RutasColoniaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * The filter to search for the RutasColonia to update in case it exists.
     */
    where: RutasColoniaWhereUniqueInput
    /**
     * In case the RutasColonia found by the `where` argument doesn't exist, create a new RutasColonia with this data.
     */
    create: XOR<RutasColoniaCreateInput, RutasColoniaUncheckedCreateInput>
    /**
     * In case the RutasColonia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutasColoniaUpdateInput, RutasColoniaUncheckedUpdateInput>
  }

  /**
   * RutasColonia delete
   */
  export type RutasColoniaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
    /**
     * Filter which RutasColonia to delete.
     */
    where: RutasColoniaWhereUniqueInput
  }

  /**
   * RutasColonia deleteMany
   */
  export type RutasColoniaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutasColonias to delete
     */
    where?: RutasColoniaWhereInput
    /**
     * Limit how many RutasColonias to delete.
     */
    limit?: number
  }

  /**
   * RutasColonia.clavesRutas
   */
  export type RutasColonia$clavesRutasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClavesRutas
     */
    select?: ClavesRutasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClavesRutas
     */
    omit?: ClavesRutasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClavesRutasInclude<ExtArgs> | null
    where?: ClavesRutasWhereInput
    orderBy?: ClavesRutasOrderByWithRelationInput | ClavesRutasOrderByWithRelationInput[]
    cursor?: ClavesRutasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClavesRutasScalarFieldEnum | ClavesRutasScalarFieldEnum[]
  }

  /**
   * RutasColonia without action
   */
  export type RutasColoniaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutasColonia
     */
    select?: RutasColoniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutasColonia
     */
    omit?: RutasColoniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutasColoniaInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    fullName: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    fullName: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    fullName: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullName?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullName?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullName?: true
    role?: true
    isActive?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    fullName: string
    role: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    password?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "fullName" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
      fullName: string
      role: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    action: string | null
    detail: string | null
    ipAddress: string | null
    timestamp: Date | null
    userId: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    detail: string | null
    ipAddress: string | null
    timestamp: Date | null
    userId: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    action: number
    detail: number
    ipAddress: number
    timestamp: number
    userId: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    ipAddress?: true
    timestamp?: true
    userId?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    ipAddress?: true
    timestamp?: true
    userId?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    action?: true
    detail?: true
    ipAddress?: true
    timestamp?: true
    userId?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    action: string
    detail: string | null
    ipAddress: string | null
    timestamp: Date
    userId: string
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    detail?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>



  export type LogSelectScalar = {
    id?: boolean
    action?: boolean
    detail?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    userId?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "detail" | "ipAddress" | "timestamp" | "userId", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      detail: string | null
      ipAddress: string | null
      timestamp: Date
      userId: string
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly action: FieldRef<"Log", 'String'>
    readonly detail: FieldRef<"Log", 'String'>
    readonly ipAddress: FieldRef<"Log", 'String'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
    readonly userId: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClavesRutasScalarFieldEnum: {
    id: 'id',
    claveCatastral: 'claveCatastral',
    ruta: 'ruta',
    umaps: 'umaps'
  };

  export type ClavesRutasScalarFieldEnum = (typeof ClavesRutasScalarFieldEnum)[keyof typeof ClavesRutasScalarFieldEnum]


  export const MoraScalarFieldEnum: {
    id: 'id',
    artIdDoc: 'artIdDoc',
    actIdCard: 'actIdCard',
    nombre: 'nombre',
    sectorColonia: 'sectorColonia',
    nombreColonia: 'nombreColonia',
    oblYear: 'oblYear',
    dias: 'dias',
    impuesto: 'impuesto',
    trenDeAseo: 'trenDeAseo',
    tasaBomberos: 'tasaBomberos'
  };

  export type MoraScalarFieldEnum = (typeof MoraScalarFieldEnum)[keyof typeof MoraScalarFieldEnum]


  export const RutasColoniaScalarFieldEnum: {
    id: 'id',
    ruta: 'ruta',
    colonia: 'colonia'
  };

  export type RutasColoniaScalarFieldEnum = (typeof RutasColoniaScalarFieldEnum)[keyof typeof RutasColoniaScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    fullName: 'fullName',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    detail: 'detail',
    ipAddress: 'ipAddress',
    timestamp: 'timestamp',
    userId: 'userId'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type ClavesRutasWhereInput = {
    AND?: ClavesRutasWhereInput | ClavesRutasWhereInput[]
    OR?: ClavesRutasWhereInput[]
    NOT?: ClavesRutasWhereInput | ClavesRutasWhereInput[]
    id?: StringFilter<"ClavesRutas"> | string
    claveCatastral?: StringFilter<"ClavesRutas"> | string
    ruta?: StringFilter<"ClavesRutas"> | string
    umaps?: FloatFilter<"ClavesRutas"> | number
    mora?: MoraListRelationFilter
    rutaColonia?: XOR<RutasColoniaNullableScalarRelationFilter, RutasColoniaWhereInput> | null
  }

  export type ClavesRutasOrderByWithRelationInput = {
    id?: SortOrder
    claveCatastral?: SortOrder
    ruta?: SortOrder
    umaps?: SortOrder
    mora?: MoraOrderByRelationAggregateInput
    rutaColonia?: RutasColoniaOrderByWithRelationInput
  }

  export type ClavesRutasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    claveCatastral?: string
    AND?: ClavesRutasWhereInput | ClavesRutasWhereInput[]
    OR?: ClavesRutasWhereInput[]
    NOT?: ClavesRutasWhereInput | ClavesRutasWhereInput[]
    ruta?: StringFilter<"ClavesRutas"> | string
    umaps?: FloatFilter<"ClavesRutas"> | number
    mora?: MoraListRelationFilter
    rutaColonia?: XOR<RutasColoniaNullableScalarRelationFilter, RutasColoniaWhereInput> | null
  }, "id" | "claveCatastral">

  export type ClavesRutasOrderByWithAggregationInput = {
    id?: SortOrder
    claveCatastral?: SortOrder
    ruta?: SortOrder
    umaps?: SortOrder
    _count?: ClavesRutasCountOrderByAggregateInput
    _avg?: ClavesRutasAvgOrderByAggregateInput
    _max?: ClavesRutasMaxOrderByAggregateInput
    _min?: ClavesRutasMinOrderByAggregateInput
    _sum?: ClavesRutasSumOrderByAggregateInput
  }

  export type ClavesRutasScalarWhereWithAggregatesInput = {
    AND?: ClavesRutasScalarWhereWithAggregatesInput | ClavesRutasScalarWhereWithAggregatesInput[]
    OR?: ClavesRutasScalarWhereWithAggregatesInput[]
    NOT?: ClavesRutasScalarWhereWithAggregatesInput | ClavesRutasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClavesRutas"> | string
    claveCatastral?: StringWithAggregatesFilter<"ClavesRutas"> | string
    ruta?: StringWithAggregatesFilter<"ClavesRutas"> | string
    umaps?: FloatWithAggregatesFilter<"ClavesRutas"> | number
  }

  export type MoraWhereInput = {
    AND?: MoraWhereInput | MoraWhereInput[]
    OR?: MoraWhereInput[]
    NOT?: MoraWhereInput | MoraWhereInput[]
    id?: StringFilter<"Mora"> | string
    artIdDoc?: StringFilter<"Mora"> | string
    actIdCard?: StringFilter<"Mora"> | string
    nombre?: StringFilter<"Mora"> | string
    sectorColonia?: StringNullableFilter<"Mora"> | string | null
    nombreColonia?: StringFilter<"Mora"> | string
    oblYear?: StringFilter<"Mora"> | string
    dias?: IntFilter<"Mora"> | number
    impuesto?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    clavesRutas?: XOR<ClavesRutasNullableScalarRelationFilter, ClavesRutasWhereInput> | null
  }

  export type MoraOrderByWithRelationInput = {
    id?: SortOrder
    artIdDoc?: SortOrder
    actIdCard?: SortOrder
    nombre?: SortOrder
    sectorColonia?: SortOrderInput | SortOrder
    nombreColonia?: SortOrder
    oblYear?: SortOrder
    dias?: SortOrder
    impuesto?: SortOrderInput | SortOrder
    trenDeAseo?: SortOrderInput | SortOrder
    tasaBomberos?: SortOrderInput | SortOrder
    clavesRutas?: ClavesRutasOrderByWithRelationInput
  }

  export type MoraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoraWhereInput | MoraWhereInput[]
    OR?: MoraWhereInput[]
    NOT?: MoraWhereInput | MoraWhereInput[]
    artIdDoc?: StringFilter<"Mora"> | string
    actIdCard?: StringFilter<"Mora"> | string
    nombre?: StringFilter<"Mora"> | string
    sectorColonia?: StringNullableFilter<"Mora"> | string | null
    nombreColonia?: StringFilter<"Mora"> | string
    oblYear?: StringFilter<"Mora"> | string
    dias?: IntFilter<"Mora"> | number
    impuesto?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    clavesRutas?: XOR<ClavesRutasNullableScalarRelationFilter, ClavesRutasWhereInput> | null
  }, "id">

  export type MoraOrderByWithAggregationInput = {
    id?: SortOrder
    artIdDoc?: SortOrder
    actIdCard?: SortOrder
    nombre?: SortOrder
    sectorColonia?: SortOrderInput | SortOrder
    nombreColonia?: SortOrder
    oblYear?: SortOrder
    dias?: SortOrder
    impuesto?: SortOrderInput | SortOrder
    trenDeAseo?: SortOrderInput | SortOrder
    tasaBomberos?: SortOrderInput | SortOrder
    _count?: MoraCountOrderByAggregateInput
    _avg?: MoraAvgOrderByAggregateInput
    _max?: MoraMaxOrderByAggregateInput
    _min?: MoraMinOrderByAggregateInput
    _sum?: MoraSumOrderByAggregateInput
  }

  export type MoraScalarWhereWithAggregatesInput = {
    AND?: MoraScalarWhereWithAggregatesInput | MoraScalarWhereWithAggregatesInput[]
    OR?: MoraScalarWhereWithAggregatesInput[]
    NOT?: MoraScalarWhereWithAggregatesInput | MoraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mora"> | string
    artIdDoc?: StringWithAggregatesFilter<"Mora"> | string
    actIdCard?: StringWithAggregatesFilter<"Mora"> | string
    nombre?: StringWithAggregatesFilter<"Mora"> | string
    sectorColonia?: StringNullableWithAggregatesFilter<"Mora"> | string | null
    nombreColonia?: StringWithAggregatesFilter<"Mora"> | string
    oblYear?: StringWithAggregatesFilter<"Mora"> | string
    dias?: IntWithAggregatesFilter<"Mora"> | number
    impuesto?: DecimalNullableWithAggregatesFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: DecimalNullableWithAggregatesFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: DecimalNullableWithAggregatesFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
  }

  export type RutasColoniaWhereInput = {
    AND?: RutasColoniaWhereInput | RutasColoniaWhereInput[]
    OR?: RutasColoniaWhereInput[]
    NOT?: RutasColoniaWhereInput | RutasColoniaWhereInput[]
    id?: StringFilter<"RutasColonia"> | string
    ruta?: StringFilter<"RutasColonia"> | string
    colonia?: StringFilter<"RutasColonia"> | string
    clavesRutas?: ClavesRutasListRelationFilter
  }

  export type RutasColoniaOrderByWithRelationInput = {
    id?: SortOrder
    ruta?: SortOrder
    colonia?: SortOrder
    clavesRutas?: ClavesRutasOrderByRelationAggregateInput
  }

  export type RutasColoniaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ruta?: string
    AND?: RutasColoniaWhereInput | RutasColoniaWhereInput[]
    OR?: RutasColoniaWhereInput[]
    NOT?: RutasColoniaWhereInput | RutasColoniaWhereInput[]
    colonia?: StringFilter<"RutasColonia"> | string
    clavesRutas?: ClavesRutasListRelationFilter
  }, "id" | "ruta">

  export type RutasColoniaOrderByWithAggregationInput = {
    id?: SortOrder
    ruta?: SortOrder
    colonia?: SortOrder
    _count?: RutasColoniaCountOrderByAggregateInput
    _max?: RutasColoniaMaxOrderByAggregateInput
    _min?: RutasColoniaMinOrderByAggregateInput
  }

  export type RutasColoniaScalarWhereWithAggregatesInput = {
    AND?: RutasColoniaScalarWhereWithAggregatesInput | RutasColoniaScalarWhereWithAggregatesInput[]
    OR?: RutasColoniaScalarWhereWithAggregatesInput[]
    NOT?: RutasColoniaScalarWhereWithAggregatesInput | RutasColoniaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RutasColonia"> | string
    ruta?: StringWithAggregatesFilter<"RutasColonia"> | string
    colonia?: StringWithAggregatesFilter<"RutasColonia"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    logs?: LogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logs?: LogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    logs?: LogListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    detail?: StringNullableFilter<"Log"> | string | null
    ipAddress?: StringNullableFilter<"Log"> | string | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
    userId?: StringFilter<"Log"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    action?: StringFilter<"Log"> | string
    detail?: StringNullableFilter<"Log"> | string | null
    ipAddress?: StringNullableFilter<"Log"> | string | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
    userId?: StringFilter<"Log"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    action?: StringWithAggregatesFilter<"Log"> | string
    detail?: StringNullableWithAggregatesFilter<"Log"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Log"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    userId?: StringWithAggregatesFilter<"Log"> | string
  }

  export type ClavesRutasCreateInput = {
    id?: string
    claveCatastral: string
    umaps: number
    mora?: MoraCreateNestedManyWithoutClavesRutasInput
    rutaColonia?: RutasColoniaCreateNestedOneWithoutClavesRutasInput
  }

  export type ClavesRutasUncheckedCreateInput = {
    id?: string
    claveCatastral: string
    ruta: string
    umaps: number
    mora?: MoraUncheckedCreateNestedManyWithoutClavesRutasInput
  }

  export type ClavesRutasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
    mora?: MoraUpdateManyWithoutClavesRutasNestedInput
    rutaColonia?: RutasColoniaUpdateOneWithoutClavesRutasNestedInput
  }

  export type ClavesRutasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
    mora?: MoraUncheckedUpdateManyWithoutClavesRutasNestedInput
  }

  export type ClavesRutasCreateManyInput = {
    id?: string
    claveCatastral: string
    ruta: string
    umaps: number
  }

  export type ClavesRutasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
  }

  export type ClavesRutasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
  }

  export type MoraCreateInput = {
    id?: string
    actIdCard: string
    nombre: string
    sectorColonia?: string | null
    nombreColonia: string
    oblYear: string
    dias: number
    impuesto?: Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: Decimal | DecimalJsLike | number | string | null
    clavesRutas?: ClavesRutasCreateNestedOneWithoutMoraInput
  }

  export type MoraUncheckedCreateInput = {
    id?: string
    artIdDoc: string
    actIdCard: string
    nombre: string
    sectorColonia?: string | null
    nombreColonia: string
    oblYear: string
    dias: number
    impuesto?: Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: Decimal | DecimalJsLike | number | string | null
  }

  export type MoraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actIdCard?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    sectorColonia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreColonia?: StringFieldUpdateOperationsInput | string
    oblYear?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    impuesto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clavesRutas?: ClavesRutasUpdateOneWithoutMoraNestedInput
  }

  export type MoraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    artIdDoc?: StringFieldUpdateOperationsInput | string
    actIdCard?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    sectorColonia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreColonia?: StringFieldUpdateOperationsInput | string
    oblYear?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    impuesto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MoraCreateManyInput = {
    id?: string
    artIdDoc: string
    actIdCard: string
    nombre: string
    sectorColonia?: string | null
    nombreColonia: string
    oblYear: string
    dias: number
    impuesto?: Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: Decimal | DecimalJsLike | number | string | null
  }

  export type MoraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actIdCard?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    sectorColonia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreColonia?: StringFieldUpdateOperationsInput | string
    oblYear?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    impuesto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MoraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    artIdDoc?: StringFieldUpdateOperationsInput | string
    actIdCard?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    sectorColonia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreColonia?: StringFieldUpdateOperationsInput | string
    oblYear?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    impuesto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RutasColoniaCreateInput = {
    id?: string
    ruta: string
    colonia: string
    clavesRutas?: ClavesRutasCreateNestedManyWithoutRutaColoniaInput
  }

  export type RutasColoniaUncheckedCreateInput = {
    id?: string
    ruta: string
    colonia: string
    clavesRutas?: ClavesRutasUncheckedCreateNestedManyWithoutRutaColoniaInput
  }

  export type RutasColoniaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
    clavesRutas?: ClavesRutasUpdateManyWithoutRutaColoniaNestedInput
  }

  export type RutasColoniaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
    clavesRutas?: ClavesRutasUncheckedUpdateManyWithoutRutaColoniaNestedInput
  }

  export type RutasColoniaCreateManyInput = {
    id?: string
    ruta: string
    colonia: string
  }

  export type RutasColoniaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
  }

  export type RutasColoniaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    fullName: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    fullName: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    fullName: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    id?: string
    action: string
    detail?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    action: string
    detail?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
    userId: string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateManyInput = {
    id?: string
    action: string
    detail?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
    userId: string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MoraListRelationFilter = {
    every?: MoraWhereInput
    some?: MoraWhereInput
    none?: MoraWhereInput
  }

  export type RutasColoniaNullableScalarRelationFilter = {
    is?: RutasColoniaWhereInput | null
    isNot?: RutasColoniaWhereInput | null
  }

  export type MoraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClavesRutasCountOrderByAggregateInput = {
    id?: SortOrder
    claveCatastral?: SortOrder
    ruta?: SortOrder
    umaps?: SortOrder
  }

  export type ClavesRutasAvgOrderByAggregateInput = {
    umaps?: SortOrder
  }

  export type ClavesRutasMaxOrderByAggregateInput = {
    id?: SortOrder
    claveCatastral?: SortOrder
    ruta?: SortOrder
    umaps?: SortOrder
  }

  export type ClavesRutasMinOrderByAggregateInput = {
    id?: SortOrder
    claveCatastral?: SortOrder
    ruta?: SortOrder
    umaps?: SortOrder
  }

  export type ClavesRutasSumOrderByAggregateInput = {
    umaps?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClavesRutasNullableScalarRelationFilter = {
    is?: ClavesRutasWhereInput | null
    isNot?: ClavesRutasWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MoraCountOrderByAggregateInput = {
    id?: SortOrder
    artIdDoc?: SortOrder
    actIdCard?: SortOrder
    nombre?: SortOrder
    sectorColonia?: SortOrder
    nombreColonia?: SortOrder
    oblYear?: SortOrder
    dias?: SortOrder
    impuesto?: SortOrder
    trenDeAseo?: SortOrder
    tasaBomberos?: SortOrder
  }

  export type MoraAvgOrderByAggregateInput = {
    dias?: SortOrder
    impuesto?: SortOrder
    trenDeAseo?: SortOrder
    tasaBomberos?: SortOrder
  }

  export type MoraMaxOrderByAggregateInput = {
    id?: SortOrder
    artIdDoc?: SortOrder
    actIdCard?: SortOrder
    nombre?: SortOrder
    sectorColonia?: SortOrder
    nombreColonia?: SortOrder
    oblYear?: SortOrder
    dias?: SortOrder
    impuesto?: SortOrder
    trenDeAseo?: SortOrder
    tasaBomberos?: SortOrder
  }

  export type MoraMinOrderByAggregateInput = {
    id?: SortOrder
    artIdDoc?: SortOrder
    actIdCard?: SortOrder
    nombre?: SortOrder
    sectorColonia?: SortOrder
    nombreColonia?: SortOrder
    oblYear?: SortOrder
    dias?: SortOrder
    impuesto?: SortOrder
    trenDeAseo?: SortOrder
    tasaBomberos?: SortOrder
  }

  export type MoraSumOrderByAggregateInput = {
    dias?: SortOrder
    impuesto?: SortOrder
    trenDeAseo?: SortOrder
    tasaBomberos?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
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

  export type ClavesRutasListRelationFilter = {
    every?: ClavesRutasWhereInput
    some?: ClavesRutasWhereInput
    none?: ClavesRutasWhereInput
  }

  export type ClavesRutasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RutasColoniaCountOrderByAggregateInput = {
    id?: SortOrder
    ruta?: SortOrder
    colonia?: SortOrder
  }

  export type RutasColoniaMaxOrderByAggregateInput = {
    id?: SortOrder
    ruta?: SortOrder
    colonia?: SortOrder
  }

  export type RutasColoniaMinOrderByAggregateInput = {
    id?: SortOrder
    ruta?: SortOrder
    colonia?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    detail?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type MoraCreateNestedManyWithoutClavesRutasInput = {
    create?: XOR<MoraCreateWithoutClavesRutasInput, MoraUncheckedCreateWithoutClavesRutasInput> | MoraCreateWithoutClavesRutasInput[] | MoraUncheckedCreateWithoutClavesRutasInput[]
    connectOrCreate?: MoraCreateOrConnectWithoutClavesRutasInput | MoraCreateOrConnectWithoutClavesRutasInput[]
    createMany?: MoraCreateManyClavesRutasInputEnvelope
    connect?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
  }

  export type RutasColoniaCreateNestedOneWithoutClavesRutasInput = {
    create?: XOR<RutasColoniaCreateWithoutClavesRutasInput, RutasColoniaUncheckedCreateWithoutClavesRutasInput>
    connectOrCreate?: RutasColoniaCreateOrConnectWithoutClavesRutasInput
    connect?: RutasColoniaWhereUniqueInput
  }

  export type MoraUncheckedCreateNestedManyWithoutClavesRutasInput = {
    create?: XOR<MoraCreateWithoutClavesRutasInput, MoraUncheckedCreateWithoutClavesRutasInput> | MoraCreateWithoutClavesRutasInput[] | MoraUncheckedCreateWithoutClavesRutasInput[]
    connectOrCreate?: MoraCreateOrConnectWithoutClavesRutasInput | MoraCreateOrConnectWithoutClavesRutasInput[]
    createMany?: MoraCreateManyClavesRutasInputEnvelope
    connect?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MoraUpdateManyWithoutClavesRutasNestedInput = {
    create?: XOR<MoraCreateWithoutClavesRutasInput, MoraUncheckedCreateWithoutClavesRutasInput> | MoraCreateWithoutClavesRutasInput[] | MoraUncheckedCreateWithoutClavesRutasInput[]
    connectOrCreate?: MoraCreateOrConnectWithoutClavesRutasInput | MoraCreateOrConnectWithoutClavesRutasInput[]
    upsert?: MoraUpsertWithWhereUniqueWithoutClavesRutasInput | MoraUpsertWithWhereUniqueWithoutClavesRutasInput[]
    createMany?: MoraCreateManyClavesRutasInputEnvelope
    set?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
    disconnect?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
    delete?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
    connect?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
    update?: MoraUpdateWithWhereUniqueWithoutClavesRutasInput | MoraUpdateWithWhereUniqueWithoutClavesRutasInput[]
    updateMany?: MoraUpdateManyWithWhereWithoutClavesRutasInput | MoraUpdateManyWithWhereWithoutClavesRutasInput[]
    deleteMany?: MoraScalarWhereInput | MoraScalarWhereInput[]
  }

  export type RutasColoniaUpdateOneWithoutClavesRutasNestedInput = {
    create?: XOR<RutasColoniaCreateWithoutClavesRutasInput, RutasColoniaUncheckedCreateWithoutClavesRutasInput>
    connectOrCreate?: RutasColoniaCreateOrConnectWithoutClavesRutasInput
    upsert?: RutasColoniaUpsertWithoutClavesRutasInput
    disconnect?: RutasColoniaWhereInput | boolean
    delete?: RutasColoniaWhereInput | boolean
    connect?: RutasColoniaWhereUniqueInput
    update?: XOR<XOR<RutasColoniaUpdateToOneWithWhereWithoutClavesRutasInput, RutasColoniaUpdateWithoutClavesRutasInput>, RutasColoniaUncheckedUpdateWithoutClavesRutasInput>
  }

  export type MoraUncheckedUpdateManyWithoutClavesRutasNestedInput = {
    create?: XOR<MoraCreateWithoutClavesRutasInput, MoraUncheckedCreateWithoutClavesRutasInput> | MoraCreateWithoutClavesRutasInput[] | MoraUncheckedCreateWithoutClavesRutasInput[]
    connectOrCreate?: MoraCreateOrConnectWithoutClavesRutasInput | MoraCreateOrConnectWithoutClavesRutasInput[]
    upsert?: MoraUpsertWithWhereUniqueWithoutClavesRutasInput | MoraUpsertWithWhereUniqueWithoutClavesRutasInput[]
    createMany?: MoraCreateManyClavesRutasInputEnvelope
    set?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
    disconnect?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
    delete?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
    connect?: MoraWhereUniqueInput | MoraWhereUniqueInput[]
    update?: MoraUpdateWithWhereUniqueWithoutClavesRutasInput | MoraUpdateWithWhereUniqueWithoutClavesRutasInput[]
    updateMany?: MoraUpdateManyWithWhereWithoutClavesRutasInput | MoraUpdateManyWithWhereWithoutClavesRutasInput[]
    deleteMany?: MoraScalarWhereInput | MoraScalarWhereInput[]
  }

  export type ClavesRutasCreateNestedOneWithoutMoraInput = {
    create?: XOR<ClavesRutasCreateWithoutMoraInput, ClavesRutasUncheckedCreateWithoutMoraInput>
    connectOrCreate?: ClavesRutasCreateOrConnectWithoutMoraInput
    connect?: ClavesRutasWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClavesRutasUpdateOneWithoutMoraNestedInput = {
    create?: XOR<ClavesRutasCreateWithoutMoraInput, ClavesRutasUncheckedCreateWithoutMoraInput>
    connectOrCreate?: ClavesRutasCreateOrConnectWithoutMoraInput
    upsert?: ClavesRutasUpsertWithoutMoraInput
    disconnect?: ClavesRutasWhereInput | boolean
    delete?: ClavesRutasWhereInput | boolean
    connect?: ClavesRutasWhereUniqueInput
    update?: XOR<XOR<ClavesRutasUpdateToOneWithWhereWithoutMoraInput, ClavesRutasUpdateWithoutMoraInput>, ClavesRutasUncheckedUpdateWithoutMoraInput>
  }

  export type ClavesRutasCreateNestedManyWithoutRutaColoniaInput = {
    create?: XOR<ClavesRutasCreateWithoutRutaColoniaInput, ClavesRutasUncheckedCreateWithoutRutaColoniaInput> | ClavesRutasCreateWithoutRutaColoniaInput[] | ClavesRutasUncheckedCreateWithoutRutaColoniaInput[]
    connectOrCreate?: ClavesRutasCreateOrConnectWithoutRutaColoniaInput | ClavesRutasCreateOrConnectWithoutRutaColoniaInput[]
    createMany?: ClavesRutasCreateManyRutaColoniaInputEnvelope
    connect?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
  }

  export type ClavesRutasUncheckedCreateNestedManyWithoutRutaColoniaInput = {
    create?: XOR<ClavesRutasCreateWithoutRutaColoniaInput, ClavesRutasUncheckedCreateWithoutRutaColoniaInput> | ClavesRutasCreateWithoutRutaColoniaInput[] | ClavesRutasUncheckedCreateWithoutRutaColoniaInput[]
    connectOrCreate?: ClavesRutasCreateOrConnectWithoutRutaColoniaInput | ClavesRutasCreateOrConnectWithoutRutaColoniaInput[]
    createMany?: ClavesRutasCreateManyRutaColoniaInputEnvelope
    connect?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
  }

  export type ClavesRutasUpdateManyWithoutRutaColoniaNestedInput = {
    create?: XOR<ClavesRutasCreateWithoutRutaColoniaInput, ClavesRutasUncheckedCreateWithoutRutaColoniaInput> | ClavesRutasCreateWithoutRutaColoniaInput[] | ClavesRutasUncheckedCreateWithoutRutaColoniaInput[]
    connectOrCreate?: ClavesRutasCreateOrConnectWithoutRutaColoniaInput | ClavesRutasCreateOrConnectWithoutRutaColoniaInput[]
    upsert?: ClavesRutasUpsertWithWhereUniqueWithoutRutaColoniaInput | ClavesRutasUpsertWithWhereUniqueWithoutRutaColoniaInput[]
    createMany?: ClavesRutasCreateManyRutaColoniaInputEnvelope
    set?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
    disconnect?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
    delete?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
    connect?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
    update?: ClavesRutasUpdateWithWhereUniqueWithoutRutaColoniaInput | ClavesRutasUpdateWithWhereUniqueWithoutRutaColoniaInput[]
    updateMany?: ClavesRutasUpdateManyWithWhereWithoutRutaColoniaInput | ClavesRutasUpdateManyWithWhereWithoutRutaColoniaInput[]
    deleteMany?: ClavesRutasScalarWhereInput | ClavesRutasScalarWhereInput[]
  }

  export type ClavesRutasUncheckedUpdateManyWithoutRutaColoniaNestedInput = {
    create?: XOR<ClavesRutasCreateWithoutRutaColoniaInput, ClavesRutasUncheckedCreateWithoutRutaColoniaInput> | ClavesRutasCreateWithoutRutaColoniaInput[] | ClavesRutasUncheckedCreateWithoutRutaColoniaInput[]
    connectOrCreate?: ClavesRutasCreateOrConnectWithoutRutaColoniaInput | ClavesRutasCreateOrConnectWithoutRutaColoniaInput[]
    upsert?: ClavesRutasUpsertWithWhereUniqueWithoutRutaColoniaInput | ClavesRutasUpsertWithWhereUniqueWithoutRutaColoniaInput[]
    createMany?: ClavesRutasCreateManyRutaColoniaInputEnvelope
    set?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
    disconnect?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
    delete?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
    connect?: ClavesRutasWhereUniqueInput | ClavesRutasWhereUniqueInput[]
    update?: ClavesRutasUpdateWithWhereUniqueWithoutRutaColoniaInput | ClavesRutasUpdateWithWhereUniqueWithoutRutaColoniaInput[]
    updateMany?: ClavesRutasUpdateManyWithWhereWithoutRutaColoniaInput | ClavesRutasUpdateManyWithWhereWithoutRutaColoniaInput[]
    deleteMany?: ClavesRutasScalarWhereInput | ClavesRutasScalarWhereInput[]
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MoraCreateWithoutClavesRutasInput = {
    id?: string
    actIdCard: string
    nombre: string
    sectorColonia?: string | null
    nombreColonia: string
    oblYear: string
    dias: number
    impuesto?: Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: Decimal | DecimalJsLike | number | string | null
  }

  export type MoraUncheckedCreateWithoutClavesRutasInput = {
    id?: string
    actIdCard: string
    nombre: string
    sectorColonia?: string | null
    nombreColonia: string
    oblYear: string
    dias: number
    impuesto?: Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: Decimal | DecimalJsLike | number | string | null
  }

  export type MoraCreateOrConnectWithoutClavesRutasInput = {
    where: MoraWhereUniqueInput
    create: XOR<MoraCreateWithoutClavesRutasInput, MoraUncheckedCreateWithoutClavesRutasInput>
  }

  export type MoraCreateManyClavesRutasInputEnvelope = {
    data: MoraCreateManyClavesRutasInput | MoraCreateManyClavesRutasInput[]
  }

  export type RutasColoniaCreateWithoutClavesRutasInput = {
    id?: string
    ruta: string
    colonia: string
  }

  export type RutasColoniaUncheckedCreateWithoutClavesRutasInput = {
    id?: string
    ruta: string
    colonia: string
  }

  export type RutasColoniaCreateOrConnectWithoutClavesRutasInput = {
    where: RutasColoniaWhereUniqueInput
    create: XOR<RutasColoniaCreateWithoutClavesRutasInput, RutasColoniaUncheckedCreateWithoutClavesRutasInput>
  }

  export type MoraUpsertWithWhereUniqueWithoutClavesRutasInput = {
    where: MoraWhereUniqueInput
    update: XOR<MoraUpdateWithoutClavesRutasInput, MoraUncheckedUpdateWithoutClavesRutasInput>
    create: XOR<MoraCreateWithoutClavesRutasInput, MoraUncheckedCreateWithoutClavesRutasInput>
  }

  export type MoraUpdateWithWhereUniqueWithoutClavesRutasInput = {
    where: MoraWhereUniqueInput
    data: XOR<MoraUpdateWithoutClavesRutasInput, MoraUncheckedUpdateWithoutClavesRutasInput>
  }

  export type MoraUpdateManyWithWhereWithoutClavesRutasInput = {
    where: MoraScalarWhereInput
    data: XOR<MoraUpdateManyMutationInput, MoraUncheckedUpdateManyWithoutClavesRutasInput>
  }

  export type MoraScalarWhereInput = {
    AND?: MoraScalarWhereInput | MoraScalarWhereInput[]
    OR?: MoraScalarWhereInput[]
    NOT?: MoraScalarWhereInput | MoraScalarWhereInput[]
    id?: StringFilter<"Mora"> | string
    artIdDoc?: StringFilter<"Mora"> | string
    actIdCard?: StringFilter<"Mora"> | string
    nombre?: StringFilter<"Mora"> | string
    sectorColonia?: StringNullableFilter<"Mora"> | string | null
    nombreColonia?: StringFilter<"Mora"> | string
    oblYear?: StringFilter<"Mora"> | string
    dias?: IntFilter<"Mora"> | number
    impuesto?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: DecimalNullableFilter<"Mora"> | Decimal | DecimalJsLike | number | string | null
  }

  export type RutasColoniaUpsertWithoutClavesRutasInput = {
    update: XOR<RutasColoniaUpdateWithoutClavesRutasInput, RutasColoniaUncheckedUpdateWithoutClavesRutasInput>
    create: XOR<RutasColoniaCreateWithoutClavesRutasInput, RutasColoniaUncheckedCreateWithoutClavesRutasInput>
    where?: RutasColoniaWhereInput
  }

  export type RutasColoniaUpdateToOneWithWhereWithoutClavesRutasInput = {
    where?: RutasColoniaWhereInput
    data: XOR<RutasColoniaUpdateWithoutClavesRutasInput, RutasColoniaUncheckedUpdateWithoutClavesRutasInput>
  }

  export type RutasColoniaUpdateWithoutClavesRutasInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
  }

  export type RutasColoniaUncheckedUpdateWithoutClavesRutasInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
  }

  export type ClavesRutasCreateWithoutMoraInput = {
    id?: string
    claveCatastral: string
    umaps: number
    rutaColonia?: RutasColoniaCreateNestedOneWithoutClavesRutasInput
  }

  export type ClavesRutasUncheckedCreateWithoutMoraInput = {
    id?: string
    claveCatastral: string
    ruta: string
    umaps: number
  }

  export type ClavesRutasCreateOrConnectWithoutMoraInput = {
    where: ClavesRutasWhereUniqueInput
    create: XOR<ClavesRutasCreateWithoutMoraInput, ClavesRutasUncheckedCreateWithoutMoraInput>
  }

  export type ClavesRutasUpsertWithoutMoraInput = {
    update: XOR<ClavesRutasUpdateWithoutMoraInput, ClavesRutasUncheckedUpdateWithoutMoraInput>
    create: XOR<ClavesRutasCreateWithoutMoraInput, ClavesRutasUncheckedCreateWithoutMoraInput>
    where?: ClavesRutasWhereInput
  }

  export type ClavesRutasUpdateToOneWithWhereWithoutMoraInput = {
    where?: ClavesRutasWhereInput
    data: XOR<ClavesRutasUpdateWithoutMoraInput, ClavesRutasUncheckedUpdateWithoutMoraInput>
  }

  export type ClavesRutasUpdateWithoutMoraInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
    rutaColonia?: RutasColoniaUpdateOneWithoutClavesRutasNestedInput
  }

  export type ClavesRutasUncheckedUpdateWithoutMoraInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
  }

  export type ClavesRutasCreateWithoutRutaColoniaInput = {
    id?: string
    claveCatastral: string
    umaps: number
    mora?: MoraCreateNestedManyWithoutClavesRutasInput
  }

  export type ClavesRutasUncheckedCreateWithoutRutaColoniaInput = {
    id?: string
    claveCatastral: string
    umaps: number
    mora?: MoraUncheckedCreateNestedManyWithoutClavesRutasInput
  }

  export type ClavesRutasCreateOrConnectWithoutRutaColoniaInput = {
    where: ClavesRutasWhereUniqueInput
    create: XOR<ClavesRutasCreateWithoutRutaColoniaInput, ClavesRutasUncheckedCreateWithoutRutaColoniaInput>
  }

  export type ClavesRutasCreateManyRutaColoniaInputEnvelope = {
    data: ClavesRutasCreateManyRutaColoniaInput | ClavesRutasCreateManyRutaColoniaInput[]
  }

  export type ClavesRutasUpsertWithWhereUniqueWithoutRutaColoniaInput = {
    where: ClavesRutasWhereUniqueInput
    update: XOR<ClavesRutasUpdateWithoutRutaColoniaInput, ClavesRutasUncheckedUpdateWithoutRutaColoniaInput>
    create: XOR<ClavesRutasCreateWithoutRutaColoniaInput, ClavesRutasUncheckedCreateWithoutRutaColoniaInput>
  }

  export type ClavesRutasUpdateWithWhereUniqueWithoutRutaColoniaInput = {
    where: ClavesRutasWhereUniqueInput
    data: XOR<ClavesRutasUpdateWithoutRutaColoniaInput, ClavesRutasUncheckedUpdateWithoutRutaColoniaInput>
  }

  export type ClavesRutasUpdateManyWithWhereWithoutRutaColoniaInput = {
    where: ClavesRutasScalarWhereInput
    data: XOR<ClavesRutasUpdateManyMutationInput, ClavesRutasUncheckedUpdateManyWithoutRutaColoniaInput>
  }

  export type ClavesRutasScalarWhereInput = {
    AND?: ClavesRutasScalarWhereInput | ClavesRutasScalarWhereInput[]
    OR?: ClavesRutasScalarWhereInput[]
    NOT?: ClavesRutasScalarWhereInput | ClavesRutasScalarWhereInput[]
    id?: StringFilter<"ClavesRutas"> | string
    claveCatastral?: StringFilter<"ClavesRutas"> | string
    ruta?: StringFilter<"ClavesRutas"> | string
    umaps?: FloatFilter<"ClavesRutas"> | number
  }

  export type LogCreateWithoutUserInput = {
    id?: string
    action: string
    detail?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    detail?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    detail?: StringNullableFilter<"Log"> | string | null
    ipAddress?: StringNullableFilter<"Log"> | string | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
    userId?: StringFilter<"Log"> | string
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    username: string
    password: string
    email: string
    fullName: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    username: string
    password: string
    email: string
    fullName: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoraCreateManyClavesRutasInput = {
    id?: string
    actIdCard: string
    nombre: string
    sectorColonia?: string | null
    nombreColonia: string
    oblYear: string
    dias: number
    impuesto?: Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: Decimal | DecimalJsLike | number | string | null
  }

  export type MoraUpdateWithoutClavesRutasInput = {
    id?: StringFieldUpdateOperationsInput | string
    actIdCard?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    sectorColonia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreColonia?: StringFieldUpdateOperationsInput | string
    oblYear?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    impuesto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MoraUncheckedUpdateWithoutClavesRutasInput = {
    id?: StringFieldUpdateOperationsInput | string
    actIdCard?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    sectorColonia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreColonia?: StringFieldUpdateOperationsInput | string
    oblYear?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    impuesto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MoraUncheckedUpdateManyWithoutClavesRutasInput = {
    id?: StringFieldUpdateOperationsInput | string
    actIdCard?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    sectorColonia?: NullableStringFieldUpdateOperationsInput | string | null
    nombreColonia?: StringFieldUpdateOperationsInput | string
    oblYear?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    impuesto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    trenDeAseo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tasaBomberos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ClavesRutasCreateManyRutaColoniaInput = {
    id?: string
    claveCatastral: string
    umaps: number
  }

  export type ClavesRutasUpdateWithoutRutaColoniaInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
    mora?: MoraUpdateManyWithoutClavesRutasNestedInput
  }

  export type ClavesRutasUncheckedUpdateWithoutRutaColoniaInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
    mora?: MoraUncheckedUpdateManyWithoutClavesRutasNestedInput
  }

  export type ClavesRutasUncheckedUpdateManyWithoutRutaColoniaInput = {
    id?: StringFieldUpdateOperationsInput | string
    claveCatastral?: StringFieldUpdateOperationsInput | string
    umaps?: FloatFieldUpdateOperationsInput | number
  }

  export type LogCreateManyUserInput = {
    id?: string
    action: string
    detail?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type LogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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