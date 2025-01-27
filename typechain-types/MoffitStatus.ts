/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface MoffitStatusInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "doeLibrary"
      | "haasLibrary"
      | "mainStacks"
      | "moffitFloor1"
      | "moffitFloor3"
      | "moffitFloor4"
      | "moffitFloor5"
      | "owner"
      | "setDoeLibrary"
      | "setHaasLibrary"
      | "setMainStacks"
      | "setMoffitFloor1"
      | "setMoffitFloor3"
      | "setMoffitFloor4"
      | "setMoffitFloor5"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "doeLibrary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "haasLibrary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mainStacks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moffitFloor1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moffitFloor3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moffitFloor4",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moffitFloor5",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDoeLibrary",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setHaasLibrary",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMainStacks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMoffitFloor1",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMoffitFloor3",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMoffitFloor4",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMoffitFloor5",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "doeLibrary", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "haasLibrary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mainStacks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moffitFloor1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moffitFloor3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moffitFloor4",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moffitFloor5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDoeLibrary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setHaasLibrary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMainStacks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMoffitFloor1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMoffitFloor3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMoffitFloor4",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMoffitFloor5",
    data: BytesLike
  ): Result;
}

export interface MoffitStatus extends BaseContract {
  connect(runner?: ContractRunner | null): MoffitStatus;
  waitForDeployment(): Promise<this>;

  interface: MoffitStatusInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  doeLibrary: TypedContractMethod<[], [bigint], "view">;

  haasLibrary: TypedContractMethod<[], [bigint], "view">;

  mainStacks: TypedContractMethod<[], [bigint], "view">;

  moffitFloor1: TypedContractMethod<[], [bigint], "view">;

  moffitFloor3: TypedContractMethod<[], [bigint], "view">;

  moffitFloor4: TypedContractMethod<[], [bigint], "view">;

  moffitFloor5: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  setDoeLibrary: TypedContractMethod<
    [_doeLibrary: BigNumberish],
    [void],
    "nonpayable"
  >;

  setHaasLibrary: TypedContractMethod<
    [_haasLibrary: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMainStacks: TypedContractMethod<
    [_mainStacks: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMoffitFloor1: TypedContractMethod<
    [_moffitFloor1: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMoffitFloor3: TypedContractMethod<
    [_moffitFloor3: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMoffitFloor4: TypedContractMethod<
    [_moffitFloor4: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMoffitFloor5: TypedContractMethod<
    [_moffitFloor5: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "doeLibrary"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "haasLibrary"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mainStacks"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "moffitFloor1"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "moffitFloor3"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "moffitFloor4"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "moffitFloor5"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setDoeLibrary"
  ): TypedContractMethod<[_doeLibrary: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setHaasLibrary"
  ): TypedContractMethod<[_haasLibrary: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMainStacks"
  ): TypedContractMethod<[_mainStacks: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMoffitFloor1"
  ): TypedContractMethod<[_moffitFloor1: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMoffitFloor3"
  ): TypedContractMethod<[_moffitFloor3: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMoffitFloor4"
  ): TypedContractMethod<[_moffitFloor4: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMoffitFloor5"
  ): TypedContractMethod<[_moffitFloor5: BigNumberish], [void], "nonpayable">;

  filters: {};
}
